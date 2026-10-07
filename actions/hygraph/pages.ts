import { PagesDocument } from "./_generated/graphql";
import "server-only";
import { cache } from "react";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import type { PagesQuery } from "./_generated/graphql";

export type HygraphGetPagesData = PagesQuery["pages"];

export const getPages = cache(async (): Promise<HygraphGetPagesData> => {
  const query = PagesDocument;

  const data = await executeHygraphQuery(query);

  return data.pages;
});
