"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Page as HygraphPage } from "./_generated/graphql";

export type HygraphGetPageData = HygraphPage;

export async function getPage(slug: string): Promise<HygraphGetPageData | null> {
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
            noreplyEmailAddress
          }
          ... on GitHubRepositories {
            __typename
            headline
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
                  height
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
                  height
                }
              }
              technologies {
                name
                url
                iconName
                color {
                  hex
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
          ... on TechStack {
            __typename
            headline
          }
        }
      }
    }
  }`;

  const variables = {
    slug: decodeURIComponent(slug),
  };

  const data = await executeHygraphQuery<{ page: HygraphGetPageData }>(query, variables);

  return data?.page || null;
}
