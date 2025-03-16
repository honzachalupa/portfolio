"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Config as HygraphConfig } from "./_generated/graphql";

export type HygraphGetConfigData = Pick<HygraphConfig, "emailAddress">;

export async function getConfig(): Promise<HygraphGetConfigData | null> {
  const query = `query {
    configs {
      emailAddress
    }
  }`;

  const data = await executeHygraphQuery<{ configs: HygraphConfig[] }>(query);

  return data?.configs?.[0] || null;
}
