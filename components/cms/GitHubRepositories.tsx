import githubApi from "@/actions/github";
import { GitHubRepositories as GitHubRepositoriesProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaGithub } from "react-icons/fa";
import "server-only";
import { Container } from "../Container";
import { ProjectCardGrid } from "../ProjectCard";
import { GitHubRepositories_Client } from "./GitHubRepositories.client";

const fetchData = cache(async () => await githubApi.search());

export const preload = (): void => {
  void fetchData();
};

export async function GitHubRepositories({
  headline,
}: GitHubRepositoriesProps): Promise<React.ReactNode> {
  const repositories = await fetchData();

  return (
    <Container htmlId="repositories" headline={headline}>
      <ProjectCardGrid>
        <GitHubRepositories_Client repositories={repositories} />
      </ProjectCardGrid>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          variant="faded"
          href="https://github.com/honzachalupa"
          target="_blank"
          startContent={<FaGithub />}
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
