import { Projects_Web as Projects_webProps } from "@/actions/hygraph/_generated/graphql";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard, ProjectCardLink } from "../ProjectCard";

export function Projects_web({
  headline,
  projects,
}: Projects_webProps): React.ReactNode {
  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {projects?.map(
          ({
            id,
            name,
            slogan,
            description,
            topics,
            url,
            image,
            client,
            platform,
          }) => (
            <ProjectCard
              key={id}
              title={name + " | " + slogan}
              subtitle={
                <div className="pt-2">
                  {platform.map((platform) => {
                    const label =
                      platform === "web"
                        ? "Web application"
                        : platform === "iOS"
                        ? "iOS application"
                        : null;

                    return (
                      label && (
                        <span
                          key={platform}
                          className="bg-foreground-200 px-2 py-1 rounded-lg mr-2"
                        >
                          {label}
                        </span>
                      )
                    );
                  })}

                  <span>{topics.join(", ")}</span>
                </div>
              }
              description={
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={name}
                    className="rounded-b-none md:hidden w-[400px] h-[300px]"
                  />

                  <MarkdownRenderer>{description.markdown}</MarkdownRenderer>
                </>
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
              links={
                [
                  url && {
                    label: "Visit",
                    url,
                  },
                ].filter(Boolean) as ProjectCardLink[]
              }
            />
          )
        )}
      </div>
    </Container>
  );
}
