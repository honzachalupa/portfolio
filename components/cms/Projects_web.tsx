import { Projects_Web as Projects_webProps } from "@/actions/hygraph/_generated/graphql";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

export function Projects_web({
  headline,
  projects,
}: Projects_webProps): React.ReactNode {
  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {projects?.map(({ id, name, description, topics, url, client }) => (
          <ProjectCard
            key={id}
            title={name}
            subtitle={<div className="pt-2">{topics.join(", ")}</div>}
            description={
              <MarkdownRenderer>{description.markdown}</MarkdownRenderer>
            }
            footer={
              client?.logo && (
                <div className="flex items-center">
                  <span>Made for</span>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo.url}
                    alt={`${client.name} icon`}
                    className="ml-2 w-32 object-contain"
                  />
                </div>
              )
            }
            actions={[
              !!url && {
                label: "Visit",
                url,
              },
            ]}
          />
        ))}
      </div>
    </Container>
  );
}
