"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Config as HygraphConfig } from "./_generated/graphql";

export type HygraphGetConfigData = Pick<
  HygraphConfig,
  | "jobDescription"
  | "emailAddress"
  | "phoneNumber"
  | "photo"
  | "cvFile"
  | "socialNetworks"
>;

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
        icon {
          url
        }
        url
      }
    }
  }`;

  const data = await executeHygraphQuery<{ configs: HygraphConfig[] }>(query);

  return data?.configs?.[0] || null;
}
