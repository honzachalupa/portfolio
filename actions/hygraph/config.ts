import { SiteConfigDocument } from "./_generated/graphql";
import "server-only";
import { cache } from "react";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import type { SiteConfigQuery } from "./_generated/graphql";

export type HygraphGetConfigData = SiteConfigQuery["configs"][number];

export const getConfig = cache(async (): Promise<HygraphGetConfigData | null> => {
  const query = SiteConfigDocument;

  const data = await executeHygraphQuery(query);

  return data?.configs?.[0] || null;
});
