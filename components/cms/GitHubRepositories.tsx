import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaGithub } from "react-icons/fa";
import githubApi from "@/actions/github";
import hygraphApi from "@/actions/hygraph";
import { GitHubRepositories as GitHubRepositoriesProps } from "@/actions/hygraph/types";
import "server-only";
import { Container } from "../Container";
import { ProjectCardGrid } from "../ProjectCard";
import { GitHubRepositories_Client } from "./GitHubRepositories.client";

const fetchRepositories = cache(async () => await githubApi.search());
const fetchTechnologies = cache(async () => await hygraphApi.getTechnologies());

export async function GitHubRepositories({
  headline,
}: GitHubRepositoriesProps): Promise<React.ReactNode> {
  const [repositories, technologies] = await Promise.all([
    fetchRepositories(),
    fetchTechnologies(),
  ]);

  return (
    <Container htmlId="repositories" headline={headline}>
      <ProjectCardGrid>
        <GitHubRepositories_Client repositories={repositories} technologies={technologies} />
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
