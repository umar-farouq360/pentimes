import { GraphQLError } from 'graphql';
import { logger } from '../../helpers/logger.js';
import { findSiteStats } from '../../queries/site-stats.queries.js';
import { builder } from '../builder.js';
import { SiteStatsType } from '../typedefs/site-stats.typedef.js';

builder.queryField('siteStats', (t) =>
  t.field({
    type: SiteStatsType,
    resolve: async () => {
      try {
        return await findSiteStats();
      } catch (error) {
        logger.error('siteStats query failed', {
          error: error instanceof Error ? error.message : String(error),
        });
        throw new GraphQLError('Failed to fetch site statistics.');
      }
    },
  }),
);
