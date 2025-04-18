"use server";

import {
  CommonHygraphFields,
  executeHygraphQuery,
} from "../../utils/hygraphQuery";
import { Config as HygraphConfig } from "./_generated/graphql";

export type HygraphGetConfigData = Omit<HygraphConfig, CommonHygraphFields>;

export async function getConfig(): Promise<HygraphGetConfigData | null> {
  const query = `query {
    configs {
      jobDescription
      emailAddress
      phoneNumber
      photo {
        url
      }
      cvFile {
        url
      }
      socialNetworks {
        name
        iconName
        url
      }
      seo {
        name
        description
      }
    }
  }`;

  const data = await executeHygraphQuery<{ configs: HygraphConfig[] }>(query);

  return data?.configs?.[0] || null;
}
