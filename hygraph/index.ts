import { getPage } from "./page";
import { getPages } from "./pages";

const hygraph = {
  getPage,
  getPages,
};

export default hygraph;
export type { HygraphGetPageData, HygraphGetPagesData } from "./types";
