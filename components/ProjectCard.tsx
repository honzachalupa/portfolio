"use client";

import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
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
import { cropDescription, isProjectCardLink } from "./ProjectCard.utils";

export interface ProjectCardAction {
  label: string;
  icon?: React.ReactNode;
  variant?: "bordered" | "solid" | "flat";
  onClick: () => void;
}

export interface ProjectCardLink {
  label: string;
  url: string;
  variant?: "bordered" | "solid" | "flat";
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

  const { descriptionCropped, isDescriptionCropped } =
    cropDescription(descriptionMarkdown);

  function Actions(): React.ReactNode {
    return (
      <>
        <ButtonGroup className="hidden sm:inline md:hidden lg:inline">
          {actions?.map((action) => {
            const { label, variant, icon } = action;

            return isProjectCardLink(action) ? (
              <Button
                key={label}
                as={Link}
                href={action.url}
                variant={variant ?? "flat"}
                color="primary"
                startContent={icon}
                isExternal
              >
                {label}
              </Button>
            ) : (
              <Button
                key={label}
                onPress={action.onClick}
                variant={variant ?? "flat"}
                color="primary"
                startContent={icon}
              >
                {label}
              </Button>
            );
          })}
        </ButtonGroup>

        <div className="sm:hidden md:inline lg:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat" color="primary">
                More...
              </Button>
            </DropdownTrigger>

            <DropdownMenu>
              {actions?.map((action) => {
                const { label } = action;

                return isProjectCardLink(action) ? (
                  <DropdownItem key={label}>
                    <Button
                      as={Link}
                      href={action.url}
                      variant="light"
                      size="sm"
                      isExternal
                    >
                      {label}
                    </Button>
                  </DropdownItem>
                ) : (
                  <DropdownItem key={label}>
                    <Button onPress={action.onClick} variant="light" size="sm">
                      {label}
                    </Button>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
      </>
    );
  }

  return (
    <>
      <Card className={clsx("w-full p-2", className)}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="w-full font-bold text-primary text-large">{title}</h3>

          <small className="text-default-500">{subtitle}</small>
        </CardHeader>

        <CardBody className="px-4 flex flex-col items-start">
          {descriptionMarkdown ? (
            <>
              <MarkdownRenderer>{descriptionCropped}</MarkdownRenderer>

              {isDescriptionCropped && (
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
