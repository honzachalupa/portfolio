import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import Image from "next/image";
import { Database } from "../../../supabase/types";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";

interface IProps {
    data: Database["public"]["Tables"]["projects"]["Row"][];
}

export const SomeThingsIveBuiltBlock: React.FC<IProps> = ({ data }) => (
    <SectionContainer>
        <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
            Some things I&apos;ve built
        </h2>

        {data?.map(
            ({ id, name, slogan, description, topics, url, imageUrl }, i) => {
                const isOdd = i % 2 === 0;

                return (
                    <AnimationFadeIn key={id} className="mb-40 last:mb-0">
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
                                        {slogan || "Featured Project"}
                                    </p>

                                    <h3
                                        className={cx(
                                            "mb-5 text-3xl text-white",
                                            { "text-right": isOdd }
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

                                {url && (
                                    <a
                                        title="Visit"
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx("mt-5", {
                                            "float-right": isOdd,
                                        })}
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-8 text-rose-600" />
                                    </a>
                                )}
                            </div>

                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                className="!relative !h-[300px] basis-1/2 rounded-md object-cover object-top opacity-60 transition-all group-hover:opacity-100"
                            />
                        </div>
                    </AnimationFadeIn>
                );
            }
        )}
    </SectionContainer>
);
