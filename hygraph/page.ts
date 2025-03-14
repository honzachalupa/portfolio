"use server";

import { HygraphGetPageData } from "@/hygraph";

export async function getPage(
  slug: string
): Promise<HygraphGetPageData | null> {
  const url = process.env.HYGRAPH_CONTENT_API_URL ?? "";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query ($slug: String!) {
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
                ... on Block_About {
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
                ... on Block_Jobs {
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
                ... on Block_Projects {
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
                ... on Block_Projects_iOS {
                  __typename
                  headline
                }
                ... on Block_Repositories {
                  __typename
                  headline
                  limit
                }
                ... on Block_Contact {
                  __typename
                  headline
                  phoneNumber
                  emailAddress
                }
              }
            }
          }
        }`,
        variables: {
          slug: decodeURIComponent(slug),
        },
      }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(
        "GraphQL request failed:",
        response.status,
        response.statusText
      );
      return null;
    }

    const json = await response.json();

    if (json.errors) {
      console.error("GraphQL errors:", JSON.stringify(json.errors, null, 2));
      return null;
    }

    return json.data.page;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
