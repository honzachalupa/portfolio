import "server-only";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

/** A failed CMS request is distinct from a valid response containing no page. */
export async function executeHygraphQuery<T, V extends Record<string, unknown>>(
  document: TypedDocumentNode<T, V>,
  variables: V = {} as V,
  revalidationTime = 60,
): Promise<T> {
  const url = process.env.HYGRAPH_CONTENT_API_URL;
  if (!url) throw new Error("HYGRAPH_CONTENT_API_URL is not configured");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: print(document), variables }),
    next: { revalidate: revalidationTime },
  };
  let response: Response | undefined;
  for (let attempt = 0; attempt < 3; attempt++) {
    response = await fetch(url, { ...options, signal: AbortSignal.timeout(10000) });
    if (![429, 502, 503, 504].includes(response.status) || attempt === 2) break;
    const requestedDelay = Number(response.headers.get("retry-after"));
    const delay = requestedDelay > 0 ? Math.min(requestedDelay, 5) : attempt + 1;
    await new Promise((resolve) => setTimeout(resolve, delay * 1000));
  }
  if (!response) throw new Error("CMS response unavailable");
  if (!response.ok) throw new Error(`CMS request failed (${response.status})`);
  const result = (await response.json()) as { data?: T; errors?: unknown[] };
  if (result.errors?.length || !result.data) throw new Error("CMS returned an invalid response");
  return result.data;
}
