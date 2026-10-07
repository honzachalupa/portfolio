import { PageContentDocument } from "./_generated/graphql";
import "server-only";
import { cache } from "react";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import type { PageContentQuery } from "./_generated/graphql";

export type HygraphGetPageData = NonNullable<PageContentQuery["page"]>;

export const getPage = cache(async (slug: string): Promise<HygraphGetPageData | null> => {
  const query = PageContentDocument;

  const variables = {
    slug,
  };

  const data = await executeHygraphQuery(query, variables);

  return data?.page || null;
});
