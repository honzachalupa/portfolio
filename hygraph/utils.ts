"use server";

/**
 * Utility function for making GraphQL queries to Hygraph with proper error handling
 * @param query The GraphQL query string
 * @param variables Optional variables to pass to the query
 * @param revalidationTime Cache revalidation time in seconds (defaults to 60)
 * @returns The query result data or null if an error occurred
 */
export async function executeHygraphQuery<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidationTime: number = 60
): Promise<T | null> {
  const url = process.env.HYGRAPH_CONTENT_API_URL ?? "";
  
  if (!url) {
    console.error("HYGRAPH_CONTENT_API_URL environment variable is not set");
    return null;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: revalidationTime },
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

    return json.data;
  } catch (error) {
    console.error("Error fetching data from Hygraph:", error);
    return null;
  }
}
