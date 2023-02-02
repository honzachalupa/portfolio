import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";

interface IGitHubRepository {
    id: string;
    full_name: string;
    description: string;
    html_url: string;
    topics: string[];
    updated_at: string;
    archived: boolean;
    disabled: boolean;
}

export const GitHubRepositoriesList: React.FC = () => {
    const { data } = useQuery<IGitHubRepository[]>(
        ["repositories"],
        async () => {
            const data = await fetch(
                "https://api.github.com/users/honzachalupa/repos",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    },
                }
            ).then((response) => response.json());

            return (
                data
                    ?.sort(
                        (
                            a: { updated_at: string },
                            b: { updated_at: string }
                        ) =>
                            new Date(b.updated_at).getTime() -
                            new Date(a.updated_at).getTime()
                    )
                    .slice(0, 4) || []
            );
        }
    );

    return (
        <div className=" flex flex-wrap gap-[16px]">
            {data?.map(({ id, full_name, html_url, description, topics }) => (
                <a
                    key={id}
                    href={html_url}
                    className="basis-[calc(50%-8px)] rounded-sm bg-white bg-opacity-5 p-5 transition-all hover:bg-opacity-10"
                >
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
            ))}
        </div>
    );
};
