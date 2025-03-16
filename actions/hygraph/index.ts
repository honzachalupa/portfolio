import { getClients } from "./clients";
import { getConfig } from "./config";
import { getPage } from "./page";
import { getPages } from "./pages";
import { getProjects } from "./projects";

const hygraphApi = {
  getPage,
  getPages,
  getProjects,
  getClients,
  getConfig,
};

export default hygraphApi;
