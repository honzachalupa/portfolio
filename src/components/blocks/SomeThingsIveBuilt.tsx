import { useQuery } from "react-query";
import { ProjectActions } from "../../actions/project";

export const SomeThingsIveBuiltBlock: React.FC = () => {
    const { data: projects } = useQuery("projects", () =>
        ProjectActions.search()
    );

    console.log({ projects });

    return (
        <section className="py-36">
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Some things I&apos;ve built
            </h2>
        </section>
    );
};
