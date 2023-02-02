import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ButtonsContainer } from "../Button";
import { LinkButton } from "../Button/Link";
import { ContentBlockFadeIn } from "../ContentBlockFadeIn";

export interface IGitHubRepository {
    id: string;
    full_name: string;
    description: string;
    html_url: string;
    topics: string[];
    updated_at: string;
    archived: boolean;
    disabled: boolean;
}

interface IProps {
    data: IGitHubRepository[];
}

export const OtherProjectsBlock: React.FC<IProps> = ({ data }) => (
    <section className="mx-auto max-w-[60vw] py-36">
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70">
            Other noteworthy projects
        </h2>

        <div className="flex flex-wrap gap-[16px]">
            {data?.map(({ id, full_name, html_url, description, topics }) => (
                <ContentBlockFadeIn
                    key={id}
                    className="w-full rounded-sm bg-white bg-opacity-5 p-5 transition-all hover:bg-opacity-10 lg:w-[calc(50%-8px)]"
                >
                    <a href={html_url} title="View code">
                        <div className="flex justify-between">
                            <h4 className="text-rose-600">{full_name}</h4>

                            <ArrowTopRightOnSquareIcon className="w-6 text-rose-600" />
                        </div>

                        <p className="my-2">{description}</p>

                        <ul className="mt-5">
                            {topics.map((topic) => (
                                <li
                                    key={topic}
                                    className="mr-5 inline font-mono text-sm text-white"
                                >
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </a>
                </ContentBlockFadeIn>
            ))}
        </div>

        <ButtonsContainer className="mt-16">
            <LinkButton
                label="Show more"
                href="https://github.com/honzachalupa"
                target="_blank"
            />
        </ButtonsContainer>
    </section>
);
