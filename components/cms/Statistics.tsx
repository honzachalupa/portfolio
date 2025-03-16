import appleAppStoreApi from "@/actions/appleAppStore";
import githubApi from "@/actions/github";
import hygraph from "@/actions/hygraph";
import { Statistics as StatisticsProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Container } from "../Container";

export async function Statistics({
  headline,
  items,
}: StatisticsProps): Promise<React.ReactNode> {
  const projects = await hygraph.getProjects();
  const clients = await hygraph.getClients();
  const iOSapps = await appleAppStoreApi.getApps();
  const repositories = await githubApi.search({
    includeWithoutDescription: true,
    includeArchived: true,
  });

  const values = {
    yearsOfWeb: new Date().getFullYear() - 2008,
    yearsOfReact: new Date().getFullYear() - 2017,
    yearsOfiOS: new Date().getFullYear() - 2023,
    clients: clients?.length,
    projects: projects?.length,
    iOSapps: iOSapps?.length || 0,
    githubRepositories: repositories?.length,
  };

  const tooltipActions = {
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
      tooltipAction: tooltipActions[key as keyof typeof tooltipActions],
    })
  );

  return (
    <Container headline={headline}>
      <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-4">
        {itemsWithValue.map(
          ({ value, description, tooltipDescription, unit, tooltipAction }) => (
            <Tooltip
              key={description}
              content={
                <>
                  <p>{tooltipDescription}</p>
                  {tooltipAction}
                </>
              }
              placement="bottom"
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
              </Card>
            </Tooltip>
          )
        )}
      </div>
    </Container>
  );
}
