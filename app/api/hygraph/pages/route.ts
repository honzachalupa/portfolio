import { Page as HygraphPage } from "@/hygraph/_generated/graphql";

export type HygraphGetPagesData = Pick<HygraphPage, "slug" | "title">[];

async function getPages(): Promise<HygraphGetPagesData> {
  const url = process.env.HYGRAPH_CONTENT_API_URL ?? "";

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
          }
        }`,
    }),
    // next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(
      "GraphQL request failed: " + response.status + " " + response.statusText
    );
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error("GraphQL errors: " + JSON.stringify(json.errors, null, 2));
  }

  return json.data.pages;
}

export async function GET() {
  try {
    const data = await getPages();

    if (!data) {
      return Response.json([], { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);

    return Response.json([], { status: 500 });
  }
}
