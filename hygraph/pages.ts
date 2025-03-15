"use server";

import { HygraphGetPagesData } from "@/hygraph";

export async function getPages(): Promise<HygraphGetPagesData | null> {
  const url = process.env.HYGRAPH_CONTENT_API_URL ?? "";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          pages {
            title
            slug
            nestedPages {
              title
              slug
            }
            isHidden
          }
        }`,
        variables: {},
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

    return json.data.pages;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
