import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";
import { ButtonsContainer } from "../Button";
import { LinkButton } from "../Button/Link";

export interface IGitHubRepository {
    id: string;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    topics?: string[];
    pushed_at: string;
    archived: boolean;
}

interface IProps {
    data: IGitHubRepository[];
}

export const OtherProjectsBlock: React.FC<IProps> = ({ data }) => (
    <SectionContainer>
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70">
            Other noteworthy projects
        </h2>

        <div className="flex flex-wrap gap-[24px]">
            {data?.map(
                ({ id, name, html_url, description, topics, archived }) => (
                    <AnimationFadeIn
                        key={id}
                        className="my-5 w-full md:w-[calc(50%-12px)]"
                    >
                        <div>
                            <a
                                href={html_url}
                                title="View code"
                                className="flex"
                            >
                                <h4 className="text-rose-600">{name}</h4>

                                {archived && (
                                    <p className="ml-4 rounded-full border border-orange-400 px-2">
                                        <span className="relative bottom-0.5 text-xs text-orange-400">
                                            Archived
                                        </span>
                                    </p>
                                )}

                                <ArrowTopRightOnSquareIcon className="ml-auto w-6 text-rose-600" />
                            </a>

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
