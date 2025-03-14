import { Maybe } from "@/hygraph/_generated/graphql";
import clsx from "clsx";
import { ReactNode } from "react";

interface BlockHeadlineProps {
  children: string;
  className?: string;
}

export const BlockHeadline: React.FC<BlockHeadlineProps> = ({
  children,
  className,
}) => (
  <h2
    className={clsx(
      "pb-10 text-4xl font-medium text-white opacity-70",
      className
    )}
  >
    {children}
  </h2>
);

interface ContainerProps {
  headline?: Maybe<string>;
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  headline,
  className,
  children,
}) => {
  return (
    <section className={clsx("mx-auto py-10 md:py-20", className)}>
      {headline && <BlockHeadline>{headline}</BlockHeadline>}

      {children}
    </section>
  );
};
