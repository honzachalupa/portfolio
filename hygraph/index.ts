import { getPage } from "./page";
import { getPages } from "./pages";
import { executeHygraphQuery } from "./utils";

const hygraph = {
  getPage,
  getPages,
  executeQuery: executeHygraphQuery,
};

export default hygraph;
export { executeHygraphQuery };
