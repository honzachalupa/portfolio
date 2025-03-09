import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { AppleAppStoreApp } from "../../../pages/api/apple-app-store";
import { IBlock_Projects_iOS } from "../../../types/cms";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { ButtonsContainer } from "../../Button";
import { LinkButton } from "../../Button/Link";
import { MarkdownRenderer } from "../../MarkdownRenderer";
import { SectionContainer } from "../layouts/Primary";

export const Block_Projects_iOS: React.FC<IBlock_Projects_iOS> = ({
    headline,
}) => {
    const [apps, setApps] = useState<AppleAppStoreApp[]>([]);

    useEffect(() => {
        const fetchApps = async () => {
            try {
                const response = await fetch("/api/apple-app-store");

                if (!response.ok) {
                    console.error(
                        "Error fetching apps:",
                        response.status,
                        response.statusText
                    );

                    return;
                }

                const data = (await response.json()) as AppleAppStoreApp[];

                setApps(data.filter(({ description }) => description));
            } catch (error) {
                console.error("Failed to fetch apps:", error);
            }
        };

        fetchApps();
    }, []);

    return (
        <SectionContainer headline={headline} headlineAlignment="center">
            <div className="flex flex-wrap gap-[24px]">
                {apps.map(({ id, name, description, keywords, url }) => (
                    <AnimationFadeIn
                        key={id}
                        className="my-5 w-full md:w-[calc(50%-12px)]"
                    >
                        <div>
                            <div className="flex">
                                <a
                                    href={url}
                                    title="View code"
                                    className="mr-auto text-rose-600"
                                >
                                    <h4>{name}</h4>
                                </a>

                                {url && (
                                    <a href={url} title="Visit">
                                        <ArrowTopRightOnSquareIcon className="ml-3 w-6 text-rose-600" />
                                    </a>
                                )}
                            </div>

                            <MarkdownRenderer className="my-2 max-h-[200px] overflow-y-scroll rounded-md bg-[#112240] p-5 text-sm shadow-custom transition-all md:text-base">
                                {description}
                            </MarkdownRenderer>

                            {keywords && (
                                <ul className="mt-2 text-right">
                                    {keywords.map((keyword) => (
                                        <li
                                            key={keyword}
                                            className="mr-5 inline-block font-mono text-xs text-white md:text-sm"
                                        >
                                            {keyword}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </AnimationFadeIn>
                ))}
            </div>

            <ButtonsContainer className="mt-16">
                <LinkButton
                    label="Show more"
                    href="https://apps.apple.com/cz/developer/jan-chalupa/id1557529575"
                    target="_blank"
                />
            </ButtonsContainer>
        </SectionContainer>
    );
};
