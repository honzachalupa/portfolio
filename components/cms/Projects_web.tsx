import { Projects_Web as Projects_webProps } from "@/actions/hygraph/_generated/graphql";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Container } from "../Container";
import { Icon } from "../Icon";
import { ProjectCard, ProjectCardGrid } from "../ProjectCard";

export function Projects_web({ headline, projects }: Projects_webProps): React.ReactNode {
  return (
    <Container headline={headline}>
      <ProjectCardGrid>
        {projects?.map(({ id, name, description, url, client, technologies }) => (
          <ProjectCard
            key={id}
            title={
              <div className="flex items-center justify-between gap-2">
                <span>{name}</span>

                {client?.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo.url} alt={client.name} className="ml-2 h-7 object-contain" />
                )}
              </div>
            }
            descriptionMarkdown={description.markdown}
            footer={
              <div className="flex flex-wrap gap-2 mt-2 mb-1">
                {technologies.map(({ name, url, iconName, color }) => (
                  <Chip
                    key={name}
                    as={Link}
                    href={url}
                    variant="flat"
                    startContent={iconName ? <Icon name={iconName} className="p-1" /> : null}
                    style={{ color: color?.hex }}
                  >
                    {name}
                  </Chip>
                ))}
              </div>
            }
            actions={[
              !!url && {
                label: "Visit",
                url,
                variant: "solid",
              },
            ]}
          />
        ))}
      </ProjectCardGrid>
    </Container>
  );
}

export default Projects_web;
