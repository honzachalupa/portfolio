import githubApi from "@/actions/github";
import { GitHubRepositories as GitHubRepositoriesProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaGithub } from "react-icons/fa";
import "server-only";
import { Container } from "../Container";
import { GitHubRepositories_Client } from "./GitHubRepositories.client";

export const preload = (): void => {
  void fetchData();
};

const fetchData = cache(async () => {
  const data = await githubApi.search({
    limit: 6,
  });

  return data;
});

export async function GitHubRepositories({
  headline,
}: GitHubRepositoriesProps): Promise<React.ReactNode> {
  const repositories = await fetchData();

  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        <GitHubRepositories_Client repositories={repositories} />
      </div>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          variant="solid"
          color="primary"
          href="https://github.com/honzachalupa"
          target="_blank"
          startContent={<FaGithub />}
          showAnchorIcon
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
