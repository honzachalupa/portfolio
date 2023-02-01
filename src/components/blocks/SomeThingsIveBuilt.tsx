import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ProjectActions } from "../../actions/project";
import { LinkButton } from "../Button/Link";

export const SomeThingsIveBuiltBlock: React.FC = () => {
    const { data: projects } = useQuery(["projects"], () =>
        ProjectActions.search()
    );

    return (
        <section className="py-36">
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Some things I&apos;ve built
            </h2>

            {projects?.map(
                ({ id, name, description, topics, url, imageUrl }) => (
                    <article key={id}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{topics.join(", ")}</p>

                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="!relative !h-[200px] !w-[400px]"
                        />

                        <LinkButton label="Visit" href={url} target="_blank" />
                    </article>
                )
            )}
        </section>
    );
};
