import { GitHubRepositoryActions } from "@/actions/github";
import { GitHubRepositories as GitHubRepositoriesProps } from "@/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import "server-only";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard, ProjectCardLink } from "../ProjectCard";

export const preload = () => {
  void fetchData();
};

const fetchData = cache(async () => {
  const data = await GitHubRepositoryActions.search();

  return data;
});

export async function GitHubRepositories({
  headline,
}: GitHubRepositoriesProps) {
  const repositories = await fetchData();

  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {repositories?.map(
          ({ id, name, url, websiteUrl, description, topics }) => (
            <ProjectCard
              key={id}
              title={name}
              subtitle={topics?.join(", ")}
              description={<MarkdownRenderer>{description}</MarkdownRenderer>}
              links={
                [
                  websiteUrl && { label: "Visit", url: websiteUrl },
                  { label: "Show source-code", url: url },
                ].filter(Boolean) as ProjectCardLink[]
              }
              className="basis-[calc(50%-(12px)/2)]"
            />
          )
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          variant="solid"
          color="primary"
          href="https://github.com/honzachalupa"
          target="_blank"
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
