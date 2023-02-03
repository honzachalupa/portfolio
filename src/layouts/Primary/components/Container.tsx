import cx from "classnames";
import { ReactNode } from "react";

export const SectionContainer: React.FC<{
    wider?: boolean;
    className?: string;
    children: ReactNode;
}> = ({ wider, className, children }) => (
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
        {children}
    </section>
);
