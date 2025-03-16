"use server";

import { HygraphGetPagesData } from "@/hygraph";
import { executeHygraphQuery } from "./utils";

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
