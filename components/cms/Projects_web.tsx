import { Block_Projects } from "@/hygraph/_generated/graphql";
import clsx from "clsx";
import Image from "next/image";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard, ProjectCardLink } from "../ProjectCard";

const ProjectImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => (
  <div
    className={clsx(
      "aspect-video basis-1/2 overflow-hidden rounded-md",
      className
    )}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="!relative !h-full !w-full object-cover object-top"
    />
  </div>
);

export function Projects_web({ headline, projects }: Block_Projects) {
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
