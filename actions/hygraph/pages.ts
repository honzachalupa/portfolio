"use server";

import {
  CommonHygraphFields,
  executeHygraphQuery,
} from "../../utils/hygraphQuery";
import { Page as HygraphPage } from "./_generated/graphql";

export type HygraphGetPagesData = Omit<HygraphPage, CommonHygraphFields>[];

export async function getPages(): Promise<HygraphGetPagesData | null> {
  const query = `query {
    pages {
      title
      slug
      nestedPages {
        title
        slug
      }
      isHidden
    }
  }`;

  const data = await executeHygraphQuery<{ pages: HygraphGetPagesData }>(query);

  return data?.pages || null;
}
