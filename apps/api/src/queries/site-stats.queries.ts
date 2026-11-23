import { count, eq, sql } from 'drizzle-orm';
import { db } from '../config/db.js';
import { articles, categories } from '../db/schema/index.js';

export async function findSiteStats() {
  const [articleStats, categoryStats] = await Promise.all([
    db
      .select({
        publishedStories: count(),
        totalViews: sql<number>`coalesce(sum(${articles.views}), 0)`
          .mapWith(Number),
      })
      .from(articles)
      .where(eq(articles.status, 'published')),
    db.select({ categoryCount: count() }).from(categories),
  ]);

  return {
    publishedStories: articleStats[0]?.publishedStories ?? 0,
    totalViews: articleStats[0]?.totalViews ?? 0,
    categoryCount: categoryStats[0]?.categoryCount ?? 0,
  };
}
