import { getClients } from "./clients";
import { getConfig } from "./config";
import { getPage } from "./page";
import { getPages } from "./pages";
import { getProjects } from "./projects";
import { getFeaturedTechnologies, getTechnologies } from "./technologies";

const hygraphApi = {
  getClients,
  getConfig,
  getPage,
  getPages,
  getProjects,
  getTechnologies,
  getFeaturedTechnologies,
};

export default hygraphApi;
