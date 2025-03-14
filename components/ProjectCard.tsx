import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { ScrollShadow } from "@heroui/scroll-shadow";
import clsx from "clsx";

export interface ProjectCardLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  description: React.ReactNode | string;
  footer?: React.ReactNode | string;
  links?: ProjectCardLink[];
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  footer,
  links,
  className,
}: ProjectCardProps) {
  return (
    <Card className={clsx("w-full", className)}>
      <div className="flex">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-primary-400 text-large">{title}</h3>

          <small className="text-default-500">{subtitle}</small>
        </CardHeader>
      </div>

      <CardBody className="px-4">
        <ScrollShadow className="max-h-[200px]">{description}</ScrollShadow>
      </CardBody>

      {(links || footer) && (
        <>
          <Divider />

          <CardFooter className="px-4 justify-between">
            {footer ? <div>{footer}</div> : <span />}

            {links ? (
              <ButtonGroup variant="bordered">
                {links?.map((link) => (
                  <Button
                    key={link.label}
                    as={Link}
                    isExternal
                    showAnchorIcon
                    href={link.url}
                  >
                    {link.label}
                  </Button>
                ))}
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
