import { ClientsDocument } from "./_generated/graphql";
import "server-only";
import { cache } from "react";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import type { ClientsQuery } from "./_generated/graphql";

export type HygraphGetClientsData = ClientsQuery["clients"];

export const getClients = cache(async (): Promise<HygraphGetClientsData> => {
  const query = ClientsDocument;

  const data = await executeHygraphQuery(query);

  return data.clients;
});
