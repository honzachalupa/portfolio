import "server-only";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { ProjectCard as ClientProjectCard, type ProjectCardProps } from "./ProjectCard.client";
import { cropDescription } from "./ProjectCard.utils";

export type { ProjectCardAction, ProjectCardLink } from "./ProjectCard.client";

export function ProjectCard(props: ProjectCardProps): React.ReactNode {
  const { descriptionCropped, isDescriptionCropped } = cropDescription(props.descriptionMarkdown);
  return (
    <ClientProjectCard
      {...props}
      renderedDescription={
        props.descriptionMarkdown ? (
          <MarkdownRenderer>{descriptionCropped}</MarkdownRenderer>
        ) : undefined
      }
      renderedFullDescription={
        isDescriptionCropped ? (
          <MarkdownRenderer>{props.descriptionMarkdown ?? ""}</MarkdownRenderer>
        ) : undefined
      }
    />
  );
}

export function ProjectCardGrid({ children }: { children: React.ReactNode }): React.ReactNode {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}
