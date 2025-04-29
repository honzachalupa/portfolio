import { Maybe } from "@/actions/hygraph/_generated/graphql";
import clsx from "clsx";
import { ReactNode } from "react";

interface BlockHeadlineProps {
  children: string;
  className?: string;
}

export const BlockHeadline: React.FC<BlockHeadlineProps> = ({ children, className }) => (
  <h2 className={clsx("pb-7 text-4xl font-medium", className)}>{children}</h2>
);

interface ContainerProps {
  htmlId?: string;
  headline?: Maybe<string>;
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ htmlId, headline, className, children }) => {
  return (
    <section id={htmlId} className={clsx("mt-[30px] md:mt-[50px]", className)}>
      {headline && <BlockHeadline>{headline}</BlockHeadline>}

      {children}
    </section>
  );
};
