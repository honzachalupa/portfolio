"use server";

import {
  CommonHygraphFields,
  executeHygraphQuery,
} from "../../utils/hygraphQuery";
import { TechnologyItem as HygraphTechnology } from "./_generated/graphql";

export type HygraphGetTechnologiesData = Omit<
  HygraphTechnology,
  CommonHygraphFields
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
