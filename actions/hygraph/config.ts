"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Config as HygraphConfig } from "./_generated/graphql";

export type HygraphGetConfigData = Pick<
  HygraphConfig,
  "emailAddress" | "socialNetworks"
>;

export async function getConfig(): Promise<HygraphGetConfigData | null> {
  const query = `query {
    configs {
      emailAddress
      socialNetworks {
        name
        icon {
          url
        }
        url
      }
      cvFile {
        url
      }
    }
  }`;

  const data = await executeHygraphQuery<{ configs: HygraphConfig[] }>(query);

  return data?.configs?.[0] || null;
}
