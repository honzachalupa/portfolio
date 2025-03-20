import appleAppStoreApi from "@/actions/appleAppStore";
import githubApi from "@/actions/github";
import hygraph from "@/actions/hygraph";
import { Statistics as StatisticsProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@mantine/core";
import { Container } from "../Container";
import { StatisticsItem } from "./Statistics.item";

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
        component="a"
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
        component="a"
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
        component="a"
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
        component="a"
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
      values[key as keyof typeof values]?.toString() || "-"
    );
  }

  return (
    <Container headline={headline}>
      <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-4">
        {items?.map((item) => (
          <StatisticsItem
            key={item.description}
            item={item}
            value={values[item.key as keyof typeof values]}
            description={replaceValue(item.key, item.description)}
            tooltipDescription={replaceValue(item.key, item.tooltipDescription)}
            tooltipAction={
              tooltipActions[item.key as keyof typeof tooltipActions]
            }
          />
        ))}
      </div>
    </Container>
  );
}
