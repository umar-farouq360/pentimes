import { builder } from '../builder.js';

export const SiteStatsType = builder
  .objectRef<{
    publishedStories: number;
    totalViews: number;
    categoryCount: number;
  }>('SiteStats')
  .implement({
    fields: (t) => ({
      publishedStories: t.exposeInt('publishedStories'),
      totalViews: t.exposeInt('totalViews'),
      categoryCount: t.exposeInt('categoryCount'),
    }),
  });
