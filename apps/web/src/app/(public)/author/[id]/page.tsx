import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ui/article-card";
import { AuthorAvatar } from "@/components/ui/author-avatar";
import { Pagination } from "@/components/public/pagination";
import { cachedClient } from "@/lib/graphql/client";
import { GET_ARTICLES } from "@/lib/graphql/queries/articles";
import type { ArticleCardType } from "@/types";

const PAGE_SIZE = 12;

interface ArticlesResult {
  articles: { items: ArticleCardType[]; total: number; hasMore: boolean };
}

interface AuthorSummary {
  id: string;
  name: string;
  avatar: string | null;
  bio?: string | null;
}

async function getAuthorArticles(
  id: string,
  limit: number,
  offset: number,
): Promise<ArticlesResult["articles"] | null> {
  try {
    const client = cachedClient(300);
    const data = await client.request<ArticlesResult>(GET_ARTICLES, {
      filters: { status: "published", authorId: id, limit, offset },
    });
    return data.articles;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const result = await getAuthorArticles(id, 1, 0);
  const author = result?.items[0]?.author;

  if (result && !author) notFound();
  if (!author) return { title: "Author — Pen Times Magazine" };

  return {
    title: `${author.name} — Pen Times Magazine`,
    description:
      author.bio ?? `Read the latest articles by ${author.name} on Pen Times Magazine.`,
    openGraph: {
      title: `${author.name} — Pen Times Magazine`,
      description:
        author.bio ?? `Read the latest articles by ${author.name} on Pen Times Magazine.`,
      type: "profile",
      ...(author.avatar ? { images: [author.avatar] } : {}),
    },
  };
}

export default async function AuthorPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ offset?: string }>;
}) {
  const [{ id }, { offset: offsetParam }] = await Promise.all([params, searchParams]);
  const parsedOffset = Number.parseInt(offsetParam ?? "0", 10);
  const offset = Number.isFinite(parsedOffset) && parsedOffset > 0
    ? Math.floor(parsedOffset / PAGE_SIZE) * PAGE_SIZE
    : 0;

  const [profileArticles, pageArticles] = await Promise.all([
    getAuthorArticles(id, 1, 0),
    getAuthorArticles(id, PAGE_SIZE, offset),
  ]);

  const author: AuthorSummary | undefined = profileArticles?.items[0]?.author;
  if (!author) notFound();

  const articles = pageArticles ?? { items: [], total: 0, hasMore: false };

  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="rounded-xl bg-ink-900 dark:bg-ink-800 text-white p-6 sm:p-10 mb-10">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-400 mb-4">
          Pen Times contributor
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
          <AuthorAvatar author={author} size="lg" className="h-20 w-20 sm:h-24 sm:w-24" />
          <div>
            <h1 className="font-serif text-display font-bold leading-tight">
              {author.name}
            </h1>
            {author.bio && (
              <p className="text-body text-white/70 leading-relaxed mt-3 max-w-prose">
                {author.bio}
              </p>
            )}
            <p className="text-caption text-white/50 mt-4">
              {profileArticles?.total.toLocaleString()} published{" "}
              {profileArticles?.total === 1 ? "article" : "articles"}
            </p>
          </div>
        </div>
      </header>

      <section aria-labelledby="author-articles-heading">
        <div className="border-t-2 border-foreground mb-6 pt-4">
          <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-2">
            From this contributor
          </p>
          <h2
            id="author-articles-heading"
            className="font-serif text-headline-lg font-bold"
          >
            Published articles
          </h2>
        </div>

        {articles.items.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {articles.items.map((article) => (
                <ArticleCard key={article.id} article={article} variant="vertical" />
              ))}
            </div>
            <Pagination total={articles.total} limit={PAGE_SIZE} offset={offset} />
          </>
        ) : (
          <p className="rounded-lg border border-border bg-card p-8 text-center text-body text-muted-foreground">
            No published articles to show on this page.
          </p>
        )}
      </section>
    </div>
  );
}
