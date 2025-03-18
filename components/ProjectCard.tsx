"use client";

import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import clsx from "clsx";

export interface ProjectCardAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface ProjectCardLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  description: React.ReactNode | string;
  image?: React.ReactNode | null;
  footer?: React.ReactNode | string;
  actions?: (ProjectCardAction | ProjectCardLink | false)[];
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  image,
  footer,
  actions: _actions,
  className,
}: ProjectCardProps): React.ReactNode {
  const actions = _actions?.filter(Boolean) as (
    | ProjectCardAction
    | ProjectCardLink
  )[];

  function isProjectCardLink(
    action: ProjectCardAction | ProjectCardLink
  ): action is ProjectCardLink {
    return "url" in action;
  }

  return (
    <Card className={clsx("w-full", className)}>
      <div className="flex">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="w-full font-bold text-primary text-large">{title}</h3>

          <small className="text-default-500">{subtitle}</small>
        </CardHeader>
      </div>

      <CardBody className="px-4 flex flex-col-reverse md:flex-row justify-between items-start gap-2">
        {description}
        {image}
      </CardBody>

      {(actions || footer) && (
        <>
          <Divider />

          <CardFooter className="px-4 justify-between">
            {footer ? <div>{footer}</div> : <span />}

            {actions ? (
              <ButtonGroup variant="bordered">
                {actions?.map((action) =>
                  isProjectCardLink(action) ? (
                    <Button
                      key={action.label}
                      as={Link}
                      href={action.url}
                      variant="bordered"
                      color="primary"
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
                      variant="bordered"
                      color="primary"
                      startContent={action.icon}
                    >
                      {action.label}
                    </Button>
                  )
                )}
              </ButtonGroup>
            ) : (
              <span />
            )}
          </CardFooter>
        </>
      )}
    </Card>
  );
}
