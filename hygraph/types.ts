import { Page as HygraphPage } from "./_generated/graphql";

export type HygraphGetPageData = HygraphPage;
export type HygraphGetPagesData = Pick<HygraphPage, "slug" | "title">[];
