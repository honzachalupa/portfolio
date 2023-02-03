import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import Image from "next/image";
import { Database } from "../../../supabase/types";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";

interface IProps {
    data: Database["public"]["Tables"]["projects"]["Row"][];
}

const ProjectImage: React.FC<{
    src: IProps["data"][0]["imageUrl"];
    alt: IProps["data"][0]["name"];
    className?: string;
}> = ({ src, alt, className }) => (
    <div
        className={cx(
            "aspect-video basis-1/2 overflow-hidden rounded-md",
            className
        )}
    >
        <Image
            src={src}
            alt={alt}
            fill
            className="!relative !h-full !w-full object-cover object-top"
        />
    </div>
);

export const SomeThingsIveBuiltBlock: React.FC<IProps> = ({ data }) => (
    <SectionContainer>
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70 md:text-left">
            Some things I&apos;ve built
        </h2>

        {data?.map(
            ({ id, name, slogan, description, topics, url, imageUrl }, i) => {
                const isOdd = i % 2 === 0;

                return (
                    <AnimationFadeIn key={id} className="mb-40 last:mb-0">
                        <div
                            className={cx(
                                "flex w-full flex-col-reverse md:flex-row",
                                {
                                    "md:flex-row-reverse": isOdd,
                                }
                            )}
                        >
                            <div className="z-10 basis-1/2">
                                <div
                                    className={cx("w-full md:w-[110%]", {
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
                                        {slogan || "Featured Project"}
                                    </p>

                                    <h3
                                        className={cx(
                                            "mb-5 flex text-3xl text-white",
                                            {
                                                "flex-row-reverse": isOdd,
                                            }
                                        )}
                                    >
                                        <a
                                            title="Visit"
                                            href={url || ""}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx({
                                                "pointer-events-none": !url,
                                            })}
                                        >
                                            {name}
                                        </a>

                                        {url && (
                                            <a
                                                title="Visit"
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx(
                                                    "relative top-2",
                                                    {
                                                        "mr-3": isOdd,
                                                        "ml-3": !isOdd,
                                                    }
                                                )}
                                            >
                                                <ArrowTopRightOnSquareIcon className="w-6 text-rose-600" />
                                            </a>
                                        )}
                                    </h3>

                                    <ProjectImage
                                        src={imageUrl}
                                        alt={name}
                                        className="mb-5 md:hidden"
                                    />

                                    <div
                                        className={cx(
                                            "rounded-md bg-[#112240] px-7 py-5 shadow-custom",
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

                            <ProjectImage
                                src={imageUrl}
                                alt={name}
                                className="hidden transition-all md:block"
                            />
                        </div>
                    </AnimationFadeIn>
                );
            }
        )}
    </SectionContainer>
);
