"use client";

import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import clsx from "clsx";
import { MarkdownRenderer } from "./MarkdownRenderer";

export interface ProjectCardAction {
  label: string;
  icon?: React.ReactNode;
  variant?: "bordered" | "solid";
  onClick: () => void;
}

export interface ProjectCardLink {
  label: string;
  url: string;
  variant?: "bordered" | "solid";
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  description?: React.ReactNode | string;
  descriptionMarkdown?: string;
  footer?: React.ReactNode | string;
  actions?: (ProjectCardAction | ProjectCardLink | false)[];
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  descriptionMarkdown,
  footer,
  actions: _actions,
  className,
}: ProjectCardProps): React.ReactNode {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const actions = _actions?.filter(Boolean) as (
    | ProjectCardAction
    | ProjectCardLink
  )[];

  function isProjectCardLink(
    action: ProjectCardAction | ProjectCardLink
  ): action is ProjectCardLink {
    return "url" in action;
  }

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

  function Actions(): React.ReactNode {
    return (
      <ButtonGroup>
        {actions?.map((action) =>
          isProjectCardLink(action) ? (
            <Button
              key={action.label}
              as={Link}
              href={action.url}
              variant={action.variant ?? "bordered"}
              startContent={action.icon}
              showAnchorIcon
              isExternal
            >
              {action.label}
            </Button>
          ) : (
            <Button
              key={action.label}
              onPress={action.onClick}
              variant={action.variant ?? "bordered"}
              startContent={action.icon}
            >
              {action.label}
            </Button>
          )
        )}
      </ButtonGroup>
    );
  }

  return (
    <>
      <Card className={clsx("w-full", className)}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="w-full font-bold text-primary text-large">{title}</h3>

          <small className="text-default-500">{subtitle}</small>
        </CardHeader>

        <CardBody className="px-4 flex flex-col items-start">
          {descriptionMarkdown ? (
            <>
              <MarkdownRenderer>{descriptionCropped}</MarkdownRenderer>

              {descriptionParagraphsCount > maxParagraphsCount && (
                <Link
                  as={Button}
                  variant="light"
                  color="primary"
                  className="-ml-3"
                  onPress={onOpen}
                >
                  Read more...
                </Link>
              )}
            </>
          ) : (
            description
          )}
        </CardBody>

        {(actions || footer) && (
          <>
            <Divider />

            <CardFooter className="px-4 justify-between">
              {footer ? <div>{footer}</div> : <span />}

              {actions ? <Actions /> : <span />}
            </CardFooter>
          </>
        )}
      </Card>

      <Modal
        size="3xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>

          <Divider />

          <ModalBody>
            <MarkdownRenderer>{descriptionMarkdown ?? ""}</MarkdownRenderer>
          </ModalBody>

          <Divider />

          <ModalFooter>
            <Actions />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function ProjectCardGrid({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>
  );
}
