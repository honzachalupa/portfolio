"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { TechnologyItem as HygraphTechnology } from "./_generated/graphql";

export type HygraphGetTechnologiesData = Pick<
  HygraphTechnology,
  "name" | "url" | "iconName" | "color"
>[];

export async function getTechnologies(): Promise<HygraphGetTechnologiesData | null> {
  const query = `query {
    technologyItems {
      name
      url
      iconName
      color {
        hex
      }
    }
  }`;

  const data = await executeHygraphQuery<{
    technologyItems: HygraphGetTechnologiesData;
  }>(query);

  return data?.technologyItems || null;
}
