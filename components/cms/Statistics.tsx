import appleAppStoreApi from "@/actions/appleAppStore";
import githubApi from "@/actions/github";
import hygraph from "@/actions/hygraph";
import { Statistics as StatisticsProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { cache } from "react";
import { Container } from "../Container";

const getProjects = cache(async () => await hygraph.getProjects());
const getClients = cache(async () => await hygraph.getClients());
const getIosApps = cache(async () => await appleAppStoreApi.getApps());
const getRepositories = cache(
  async () =>
    await githubApi.search({
      includeWithoutDescription: true,
      includeArchived: true,
    })
);

export const preload = async (): Promise<void> => {
  // Trigger all data fetching in parallel to warm up the cache
  await Promise.all([
    getProjects(),
    getClients(),
    getIosApps(),
    getRepositories(),
  ]);
};

export async function Statistics({
  headline,
  items,
}: StatisticsProps): Promise<React.ReactNode> {
  const projects = await getProjects();
  const clients = await getClients();
  const iOSapps = await getIosApps();
  const repositories = await getRepositories();

  const values = {
    yearsOfWeb: new Date().getFullYear() - 2008,
    yearsOfReact: new Date().getFullYear() - 2017,
    yearsOfiOS: new Date().getFullYear() - 2023,
    clients: clients?.length,
    projects: projects?.length,
    iOSapps: iOSapps?.length || 0,
    githubRepositories: repositories?.length,
  };

  const actions = {
    clients: (
      <Button
        as={Link}
        variant="light"
        color="primary"
        href="/clients"
        className="w-full"
      >
        View clients
      </Button>
    ),
    projects: (
      <Button
        as={Link}
        variant="light"
        color="primary"
        href="/projects/commercial"
        className="w-full"
      >
        View projects
      </Button>
    ),
    iOSapps: (
      <Button
        as={Link}
        variant="light"
        color="primary"
        href="/projects/personal"
        className="w-full"
      >
        View iOS apps
      </Button>
    ),
    githubRepositories: (
      <Button
        as={Link}
        variant="light"
        color="primary"
        href="/projects/personal"
        className="w-full"
      >
        View repositories
      </Button>
    ),
  };

  function replaceValue(
    key: string,
    description: string | undefined | null
  ): string | undefined {
    return description?.replace(
      "{value}",
      values[key as keyof typeof values]?.toString() || "0"
    );
  }

  const itemsWithValue = items?.map(
    ({ key, description, tooltipDescription, unit }) => ({
      key,
      value: values[key as keyof typeof values],
      description: replaceValue(key, description),
      tooltipDescription: replaceValue(key, tooltipDescription),
      unit,
      action: actions[key as keyof typeof actions],
    })
  );

  return (
    <Container headline={headline}>
      <div className="grid grid-cols-2 grid-rows-3 xs:grid-cols-3 xs:grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4">
        {itemsWithValue.map(
          ({ value, description, tooltipDescription, unit, action }) => (
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

                <span className="text-sm font-light opacity-50 text-center">
                  {description}
                </span>

                {action && (
                  <CardFooter className="py-1 absolute bottom-0 w-[calc(100%_-_8px)] z-10">
                    {action}
                  </CardFooter>
                )}
              </Card>
            </Tooltip>
          )
        )}
      </div>
    </Container>
  );
}
