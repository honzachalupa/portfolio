"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Page as HygraphPage } from "./_generated/graphql";

export type HygraphGetPageData = HygraphPage;

export async function getPage(
  slug: string
): Promise<HygraphGetPageData | null> {
  const query = `query ($slug: String!) {
    page(where: { slug: $slug }) {
      slug
      title
      components {
        content {
          ... on About {
            __typename
            image {
              url
              width
              mimeType
            }
            headline
            content {
              text
              markdown
            }
          }
          ... on ContactForm {
            __typename
            headline
          }
          ... on GitHubRepositories {
            __typename
            headline
            limit
          }
          ... on Jobs {
            __typename
            headline
            jobs {
              id
              title
              dateTo
              dateFrom
              description {
                text
                markdown
              }
              client {
                name
                url
                logo {
                  url
                  width
                  mimeType
                }
              }
            }
          }
          ... on Projects_iOS {
            __typename
            headline
          }
          ... on Projects_web {
            __typename
            headline
            projects {
              id
              name
              url
              topics
              description {
                text
                markdown
              }
              image {
                url
                width
                mimeType
              }
              client {
                name
                url
                logo {
                  url
                  width
                  mimeType
                }
              }
            }
          }
          ... on Statistics {
            __typename
            headline
            items {
              key
              description
              tooltipDescription
              unit
            }
          }
          ... on Footer {
            __typename
            socialNetworks {
              name
              url
              icon {
                url
                width
                mimeType
              }
            }
            text
          }
        }
      }
    }
  }`;

  const variables = {
    slug: decodeURIComponent(slug),
  };

  const data = await executeHygraphQuery<{ page: HygraphGetPageData }>(
    query,
    variables
  );

  return data?.page || null;
}
