import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import { IHero } from "../../../types/hygraph";
import { MarkdownRenderer } from "../../MarkdownRenderer";
import { SectionContainer } from "../layouts/Primary";

export const Hero: React.FC<IHero> = ({ content }) => {
    const { distance } = useScrollPosition();

    return (
        <SectionContainer
            wider
            className="relative flex h-screen flex-col justify-center"
        >
            <MarkdownRenderer
                components={{
                    h1: ({ node, ...props }) => (
                        <p
                            className="text-5xl font-semibold text-white opacity-70 md:text-7xl"
                            {...props}
                        />
                    ),
                    h2: ({ node, ...props }) => (
                        <p
                            className="text-3xl font-semibold text-gray-400 opacity-30 md:text-7xl"
                            {...props}
                        />
                    ),
                    h3: ({ node, ...props }) => (
                        <p
                            className="mb-7 font-mono text-rose-600 md:text-lg"
                            {...props}
                        />
                    ),
                    p: ({ node, ...props }) => (
                        <p
                            className="mt-7 text-lg font-light text-white opacity-40"
                            {...props}
                        />
                    ),
                }}
            >
                {content.markdown}
            </MarkdownRenderer>

            <ChevronDoubleDownIcon
                className={cx(
                    "absolute bottom-5 left-[calc(50%-25px)] w-[50px] text-rose-600 transition-all duration-1000",
                    {
                        "-translate-y-10 opacity-0": distance > 500,
                    }
                )}
            />
        </SectionContainer>
    );
};
