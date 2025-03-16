"use server";

import { HygraphGetPageData } from "@/hygraph";
import { executeHygraphQuery } from "./utils";

export async function getPage(
  slug: string
): Promise<HygraphGetPageData | null> {
  const query = `query ($slug: String!) {
    page(where: {slug: $slug}) {
      slug
      title
      layout {
        content {
          ... on SEO {
          __typename
            description
            keywords
          }
          ... on Navigation {
          __typename
            indexTitleFallback
            pages {
              title
              slug
            }
            isLanguageSelectorVisible
          }
          ... on Hero {
          __typename
            content {
              text
              markdown
            }
          }
          ... on Footer {
          __typename
            yearFrom
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
          ... on Projects_web {
            __typename
            headline
            projects {
              id
              name
              slogan
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
              platform
            }
          }
          ... on Projects_iOS {
            __typename
            headline
          }
          ... on GitHubRepositories {
            __typename
            headline
            limit
          }
          ... on Contact {
            __typename
            headline
            phoneNumber
            emailAddress
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
