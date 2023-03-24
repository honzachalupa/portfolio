import cx from "classnames";
import { ReactNode } from "react";
import { Maybe } from "../../../../types/cms";
import { BlockHeadline } from "../../../BlockHeadline";

export const SectionContainer: React.FC<{
    as?: "div" | "nav";
    headline?: Maybe<string>;
    headlineAlignment?: "center";
    wider?: boolean;
    className?: string;
    children: ReactNode;
}> = ({ as, headline, headlineAlignment, wider, className, children }) => {
    const Components = as || "section";

    return (
        <Components
            className={cx(
                "mx-auto w-screen py-16 px-5 md:py-36",
                {
                    "md:w-[80vw]": wider,
                    "md:w-[60vw]": !wider,
                },
                className
            )}
        >
            {headline && (
                <BlockHeadline
                    className={cx({
                        "text-center": headlineAlignment === "center",
                    })}
                >
                    {headline}
                </BlockHeadline>
            )}

            {children}
        </Components>
    );
};
