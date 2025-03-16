"use server";

import { Client as HygraphClient } from "./_generated/graphql";
import { executeHygraphQuery } from "./utils";

export type HygraphGetClientsData = Pick<HygraphClient, "name">[];

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
