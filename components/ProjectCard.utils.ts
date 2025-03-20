import { ProjectCardAction, ProjectCardLink } from "./ProjectCard";

export function isProjectCardLink(
  action: ProjectCardAction | ProjectCardLink
): action is ProjectCardLink {
  return "url" in action;
}

export function cropDescription(descriptionMarkdown?: string): {
  descriptionCropped: string;
  isDescriptionCropped: boolean;
} {
  const maxParagraphsCount = 1;
  const descriptionParagraphsCount =
    descriptionMarkdown?.split("\n").length ?? 0;
  const descriptionCropped =
    descriptionParagraphsCount > maxParagraphsCount
      ? `${descriptionMarkdown
          ?.split("\n")
          .slice(0, maxParagraphsCount)
          .join("\n")}`
      : descriptionMarkdown ?? "";

  return {
    descriptionCropped,
    isDescriptionCropped: descriptionParagraphsCount > maxParagraphsCount,
  };
}
