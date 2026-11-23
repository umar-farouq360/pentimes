import { gql } from 'graphql-request';

export const GET_SITE_STATS = gql`
  query GetSiteStats {
    siteStats {
      publishedStories
      totalViews
      categoryCount
    }
  }
`;
