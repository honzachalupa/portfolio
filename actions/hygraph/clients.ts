"use server";

import {
  CommonHygraphFields,
  executeHygraphQuery,
} from "../../utils/hygraphQuery";
import { Client as HygraphClient } from "./_generated/graphql";

export type HygraphGetClientsData = Omit<HygraphClient, CommonHygraphFields>[];

export async function getClients(): Promise<HygraphGetClientsData | null> {
  const query = `query {
    clients {
      name
    }
  }`;

  const data = await executeHygraphQuery<{ clients: HygraphGetClientsData }>(
    query
  );

  return data?.clients || null;
}
