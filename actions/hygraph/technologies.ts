import "server-only";
import { cache } from "react";
import { executeHygraphQuery } from "@/utils/hygraphQuery";
import {
  TechnologiesDocument,
  TechnologiesFeaturedDocument,
  type TechnologiesQuery,
} from "./_generated/graphql";

export type HygraphGetTechnologiesData = TechnologiesQuery["technologyItems"];
export const getTechnologies = cache(async (): Promise<HygraphGetTechnologiesData> => {
  return (await executeHygraphQuery(TechnologiesDocument)).technologyItems;
});
export const getFeaturedTechnologies = cache(async (): Promise<HygraphGetTechnologiesData> => {
  return (await executeHygraphQuery(TechnologiesFeaturedDocument)).technologyItems;
});
