import { useQuery } from "@tanstack/react-query";
import cx from "classnames";
import Image from "next/image";
import { ProjectActions } from "../../actions/project";
import { LinkButton } from "../Button/Link";

export const SomeThingsIveBuiltBlock: React.FC = () => {
    const { data: projects } = useQuery(["projects"], () =>
        ProjectActions.search()
    );

    return (
        <section className="-mb-20 py-36">
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Some things I&apos;ve built
            </h2>

            {(projects ? [...projects, ...projects] : []).map(
                ({ id, name, description, topics, url, imageUrl }, i) => {
                    const isOdd = i % 2 === 0;

                    return (
                        <article key={id} className="mb-60">
                            <div
                                className={cx("group flex w-full", {
                                    "flex-row-reverse": isOdd,
                                })}
                            >
                                <div className="z-10 basis-1/2">
                                    <div
                                        className={cx("w-[110%]", {
                                            "float-right": isOdd,
                                        })}
                                    >
                                        <p
                                            className={cx(
                                                "mb-1 font-mono text-sm text-rose-600",
                                                {
                                                    "text-right": isOdd,
                                                }
                                            )}
                                        >
                                            Featured Project
                                        </p>
                                        <h3
                                            className={cx(
                                                "mb-5 text-3xl text-white",
                                                { "text-right": isOdd }
                                            )}
                                        >
                                            {name}
                                        </h3>

                                        <div
                                            className={cx(
                                                "rounded-md bg-[#112240] px-7 py-5 leading-7 shadow-custom",
                                                { "text-right": isOdd }
                                            )}
                                        >
                                            <p>{description}</p>
                                        </div>

                                        <p
                                            className={cx("-mx-2 mt-3", {
                                                "text-right": isOdd,
                                            })}
                                        >
                                            {topics.slice(0, 4).map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="mx-2 font-mono text-sm"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="!relative !h-[300px] basis-1/2 rounded-md object-cover object-top opacity-60 transition-all group-hover:opacity-100"
                                />
                            </div>

                            {url && (
                                <LinkButton
                                    label="Visit"
                                    href={url}
                                    target="_blank"
                                />
                            )}
                        </article>
                    );
                }
            )}
        </section>
    );
};
