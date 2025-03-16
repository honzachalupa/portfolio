import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { ScrollShadow } from "@heroui/scroll-shadow";
import clsx from "clsx";

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
  links?: ProjectCardLink[];
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  image,
  footer,
  links,
  className,
}: ProjectCardProps): React.ReactNode {
  return (
    <Card className={clsx("w-full", className)}>
      <div className="flex">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="w-full font-bold text-primary-400 text-large">
            {title}
          </h3>

          <small className="text-default-500">{subtitle}</small>
        </CardHeader>
      </div>

      <CardBody className="px-4 flex flex-row justify-between gap-2">
        <ScrollShadow className="max-h-[200px]">{description}</ScrollShadow>

        {image}
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
                    href={link.url}
                    variant="bordered"
                    color="primary"
                    size="sm"
                    startContent={link.icon}
                    showAnchorIcon
                    isExternal
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
