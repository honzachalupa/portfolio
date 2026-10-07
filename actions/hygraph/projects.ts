import { ProjectsDocument } from "./_generated/graphql";
import "server-only";
import { cache } from "react";

import { executeHygraphQuery } from "../../utils/hygraphQuery";
import type { ProjectsQuery } from "./_generated/graphql";

export type HygraphGetProjectsData = ProjectsQuery["projects"];

export const getProjects = cache(async (): Promise<HygraphGetProjectsData> => {
  const query = ProjectsDocument;

  const data = await executeHygraphQuery(query);

  return data.projects;
});
