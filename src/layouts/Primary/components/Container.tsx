import cx from "classnames";
import { ReactNode } from "react";
import { BlockHeadline } from "../../../components/BlockHeadline";

export const SectionContainer: React.FC<{
    headline?: string;
    wider?: boolean;
    className?: string;
    children: ReactNode;
}> = ({ headline, wider, className, children }) => (
    <section
        className={cx(
            "mx-auto w-screen py-16 px-5 md:py-36",
            {
                "md:w-[80vw]": wider,
                "md:w-[60vw]": !wider,
            },
            className
        )}
    >
        {headline && <BlockHeadline>{headline}</BlockHeadline>}

        {children}
    </section>
);
