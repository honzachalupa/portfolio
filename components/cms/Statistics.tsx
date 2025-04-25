import appleAppStoreApi from "@/actions/appleAppStore";
import githubApi from "@/actions/github";
import hygraphApi from "@/actions/hygraph";
import { Statistics as StatisticsProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { cache } from "react";
import "server-only";
import { Container } from "../Container";

const getProjects = cache(hygraphApi.getProjects);
const getClients = cache(hygraphApi.getClients);
const getRepositories = cache(githubApi.search);
const getIosApps = cache(async () => await appleAppStoreApi.getApps({ limit: 6 }));

export function preload(): void {
  void getProjects();
  void getClients();
  void getRepositories();
  void getIosApps();
}

export function Statistics({ headline, items }: StatisticsProps): React.ReactNode {
  const projectsPromise = getProjects();
  const clientsPromise = getClients();
  const repositoriesPromise = getRepositories();
  const iOSappsPromise = getIosApps();

  const values = {
    yearsOfWeb: new Date().getFullYear() - 2008,
    yearsOfReact: new Date().getFullYear() - 2017,
    yearsOfiOS: new Date().getFullYear() - 2023,
    clients: clientsPromise?.then((clients) => clients?.length || 0),
    projects: projectsPromise?.then((projects) => projects?.length || 0),
    iOSapps: iOSappsPromise?.then((apps) => apps?.length || 0),
    githubRepositories: repositoriesPromise?.then((repos) => repos?.length || 0),
  };

  const actions = {
    clients: (
      <Button as={Link} variant="light" color="primary" href="/clients" className="w-full">
        View clients
      </Button>
    ),
    projects: (
      <Button as={Link} variant="light" color="primary" href="/projects/commercial" className="w-full">
        View projects
      </Button>
    ),
    iOSapps: (
      <Button as={Link} variant="light" color="primary" href="/projects/personal" className="w-full">
        View iOS apps
      </Button>
    ),
    githubRepositories: (
      <Button
        // Using "a" instead of Link. https://github.com/vercel/next.js/issues/44295
        as="a"
        variant="light"
        color="primary"
        href="/projects/personal#repositories"
        className="w-full"
      >
        View repositories
      </Button>
    ),
  };

  function replaceValue(key: string, description: string | undefined | null): string | undefined {
    return description?.replace("{value}", values[key as keyof typeof values]?.toString() || "0");
  }

  const itemsWithValue = items?.map(({ key, description, tooltipDescription, unit }) => ({
    key,
    value: values[key as keyof typeof values],
    description: replaceValue(key, description),
    tooltipDescription: replaceValue(key, tooltipDescription),
    unit,
    action: actions[key as keyof typeof actions],
  }));

  return (
    <Container headline={headline}>
      <div className="grid grid-cols-2 grid-rows-3 xs:grid-cols-3 xs:grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4">
        {itemsWithValue.map(({ value, description, tooltipDescription, unit, action }) => (
          <Tooltip
            key={description}
            content={tooltipDescription}
            placement="top"
            offset={-20}
            className="max-w-[200px] text-center"
            showArrow
          >
            <Card className="w-full h-full aspect-square gap-1 flex flex-col items-center justify-center text-center cursor-pointer">
              <span className="text-4xl">
                <span className="font-bold">{value}</span>
                <span className="opacity-50">{unit}</span>
              </span>

              <span className="text-sm font-light opacity-50 text-center">{description}</span>

              {action && <CardFooter className="py-1 absolute bottom-0 w-[calc(100%_-_8px)] z-10">{action}</CardFooter>}
            </Card>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}

export default Statistics;
