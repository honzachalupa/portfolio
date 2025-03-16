"use server";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import { Project as HygraphProject } from "./_generated/graphql";

export type HygraphGetProjectsData = Pick<HygraphProject, "name">[];

export async function getProjects(): Promise<HygraphGetProjectsData | null> {
  const query = `query {
    projects {
      name
    }
  }`;

  const data = await executeHygraphQuery<{ projects: HygraphGetProjectsData }>(
    query
  );

  return data?.projects || null;
}
