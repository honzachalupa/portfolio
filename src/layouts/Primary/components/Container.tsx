import cx from "classnames";
import { ReactNode } from "react";

export const SectionContainer: React.FC<{
    wider?: boolean;
    className?: string;
    children: ReactNode;
}> = ({ wider, className, children }) => (
    <section
        className={cx(
            "mx-auto w-screen py-16 px-5 sm:py-36",
            {
                "sm:w-[80vw]": wider,
                "sm:w-[60vw]": !wider,
            },
            className
        )}
    >
        {children}
    </section>
);
