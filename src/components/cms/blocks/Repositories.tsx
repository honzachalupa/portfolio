import {
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
    GitHubRepositoryActions,
    IGitHubRepository,
} from "../../../actions/github";
import { IBlock_Repositories } from "../../../types/cms";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { BlockHeadline } from "../../BlockHeadline";
import { ButtonsContainer } from "../../Button";
import { LinkButton } from "../../Button/Link";
import { SectionContainer } from "../layouts/Primary";

export const Block_Repositories: React.FC<IBlock_Repositories> = ({
    headline,
    limit,
}) => {
    const [repositories, setRepositories] = useState<IGitHubRepository[]>([]);

    const fetchData = async () => {
        const data = await GitHubRepositoryActions.search();

        setRepositories(data.slice(0, limit));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SectionContainer headline={headline} headlineAlignment="center">
            <div className="flex flex-wrap gap-[24px]">
                {repositories?.map(
                    ({
                        id,
                        name,
                        url,
                        websiteUrl,
                        description,
                        topics,
                        isArchived,
                    }) => (
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

                                    {isArchived && (
                                        <p className="ml-4 rounded-full border border-orange-400 px-2">
                                            <span className="relative bottom-0.5 text-xs text-orange-400">
                                                Archived
                                            </span>
                                        </p>
                                    )}

                                    {websiteUrl && (
                                        <a href={websiteUrl} title="Visit">
                                            <ArrowTopRightOnSquareIcon className="ml-3 w-6 text-rose-600" />
                                        </a>
                                    )}

                                    <a href={url} title="View code">
                                        <CodeBracketIcon className="ml-3 w-6 text-rose-600" />
                                    </a>
                                </div>

                                <p className="my-2 rounded-md bg-[#112240] p-5 text-sm shadow-custom transition-all md:text-base">
                                    {description}
                                </p>

                                {topics && (
                                    <ul className="mt-2 text-right">
                                        {topics.map((topic) => (
                                            <li
                                                key={topic}
                                                className="mr-5 inline-block font-mono text-xs text-white md:text-sm"
                                            >
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </AnimationFadeIn>
                    )
                )}
            </div>

            <ButtonsContainer className="mt-16">
                <LinkButton
                    label="Show more"
                    href="https://github.com/honzachalupa"
                    target="_blank"
                />
            </ButtonsContainer>
        </SectionContainer>
    );
};
