import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import Image from "next/image";
import { IBlock_Projects } from "../../../types/hygraph";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { SectionContainer } from "../layouts/Primary";

const ProjectImage: React.FC<{
    src: string;
    alt: string;
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

export const Block_Projects: React.FC<IBlock_Projects> = ({ projects }) => (
    <SectionContainer headline="Some Things I've Built">
        {projects?.map(
            (
                { id, name, slogan, description, topics, url, image, client },
                i
            ) => {
                const isOdd = i % 2 === 0;

                return (
                    <AnimationFadeIn
                        key={id}
                        className="mb-20 last:mb-0 md:mb-40"
                    >
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
                                                "md:text-right": isOdd,
                                            }
                                        )}
                                    >
                                        {slogan || "Featured Project"}
                                    </p>

                                    <h3
                                        className={cx(
                                            "mb-5 flex text-3xl text-white",
                                            {
                                                "md:flex-row-reverse": isOdd,
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
                                                className="relative top-2 mx-3"
                                            >
                                                <ArrowTopRightOnSquareIcon className="w-6 text-rose-600" />
                                            </a>
                                        )}
                                    </h3>

                                    <ProjectImage
                                        src={image.url}
                                        alt={name}
                                        className="rounded-b-none md:hidden"
                                    />

                                    <div
                                        className={cx(
                                            "flex flex-col items-start rounded-b-md bg-[#112240] px-7 py-5 shadow-custom md:rounded-md",
                                            {
                                                "md:items-end": isOdd,
                                            }
                                        )}
                                    >
                                        <p
                                            className={cx("mb-5", {
                                                "md:text-right": isOdd,
                                            })}
                                        >
                                            {description.markdown}
                                        </p>

                                        {client?.logo && (
                                            <div className="flex items-center">
                                                <span>Made for</span>

                                                <img
                                                    src={client.logo.url}
                                                    alt={`${client.name} icon`}
                                                    className="ml-2 w-32 object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <p
                                        className={cx("-mx-2 mt-3", {
                                            "md:text-right": isOdd,
                                        })}
                                    >
                                        {topics.map((topic: string) => (
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
                                src={image.url}
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
