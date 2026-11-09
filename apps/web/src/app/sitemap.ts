import type { MetadataRoute } from 'next';
import { cachedClient } from '@/lib/graphql/client';
import { GET_ARTICLES } from '@/lib/graphql/queries/articles';
import { GET_CATEGORIES } from '@/lib/graphql/queries/categories';
import type { ArticleCardType, CategoryType } from '@/types';

const SITE_URL =
  process.env['NEXT_PUBLIC_SITE_URL'] ?? 'https://pentimes.ng';

/**
 * Hard limits imposed by the sitemap protocol:
 * - 50,000 URLs per sitemap file
 * - 50 MB uncompressed per sitemap file
 *
 * We cap well below the URL limit so the file stays comfortably under 50 MB
 * even with long slugs and the extra <lastmod>/<changefreq> markup.
 */
const SITEMAP_URL_LIMIT = 50_000;
const ARTICLE_PAGE_SIZE = 500;

interface ArticlesResult {
  articles: { items: ArticleCardType[]; total: number };
}
interface CategoriesResult {
  categories: CategoryType[];
}

/**
 * Walk all published articles in pages of 500 until the API returns a
 * short page (i.e. the last page) or we hit the sitemap URL cap.
 *
 * The GraphQL API does not expose a cursor here, so offset pagination is
 * the only option. Ordering must be stable (the resolver sorts by
 * publishedAt/createdAt descending) or pages could overlap — verify the
 * resolver's ORDER BY when changing GET_ARTICLES.
 */
async function fetchAllArticles(
  client: ReturnType<typeof cachedClient>,
): Promise<ArticleCardType[]> {
  const all: ArticleCardType[] = [];
  let offset = 0;

  while (all.length < SITEMAP_URL_LIMIT) {
    const res = await client.request<ArticlesResult>(GET_ARTICLES, {
      filters: {
        status: 'published',
        limit: ARTICLE_PAGE_SIZE,
        offset,
      },
    });

    const items = res.articles.items;
    all.push(...items);

    // Short page means we've reached the end of the result set.
    if (items.length < ARTICLE_PAGE_SIZE) break;

    offset += ARTICLE_PAGE_SIZE;
  }

  return all;
}

/**
 * Dynamic sitemap generation.
 *
 * Next.js calls this at build time (and on-demand with ISR). We fetch
 * all published articles and categories from the GraphQL API and return
 * them as sitemap entries.
 *
 * Caching: cachedClient(3600) means Next.js revalidates the sitemap
 * data every hour in production, keeping it fresh without hammering the DB.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages — always present.
  // NOTE: /search is intentionally excluded — it's marked `noindex` and
  // listing it here would just waste crawl budget.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/programs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  try {
    const client = cachedClient(3600); // 1-hour cache for sitemap requests

    const [articles, categoriesData] = await Promise.all([
      fetchAllArticles(client),
      client
        .request<CategoriesResult>(GET_CATEGORIES)
        .catch(() => ({ categories: [] as CategoryType[] })),
    ]);

    const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => {     
      const lastModified = article.updatedAt
        ? new Date(article.updatedAt)
        : article.publishedAt
          ? new Date(article.publishedAt)
          : new Date(article.createdAt);

      return {
        url: `${SITE_URL}/articles/${article.slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
    });

    const categoryRoutes: MetadataRoute.Sitemap =
      categoriesData.categories.map((cat) => ({
        url: `${SITE_URL}/category/${cat.slug}`,
        // CategoryType may not expose updatedAt — fall back to createdAt.
        lastModified: new Date(
          ('updatedAt' in cat && cat.updatedAt
            ? (cat.updatedAt as string)
            : cat.createdAt) as string,
        ),
        changeFrequency: 'daily' as const,
        priority: 0.7,
      }));

    return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
  } catch {
    // If the API is unavailable at build time, return static routes only.
    // A degraded sitemap is far better than a 500 — Google will retry.
    return staticRoutes;
  }
}