interface IGitHubRepositoryOriginal {
    id: string;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    topics?: string[];
    pushed_at: string;
    archived: boolean;
}
export interface IGitHubRepository {
    id: string;
    name: string;
    fullName: string;
    description: string;
    url: string;
    topics?: string[];
    pushedAt: string;
    isArchived: boolean;
}

interface IGitHubReadmeOriginal {
    html_url: string;
    download_url: string;
    content: string;
    encoding: "base64";
}

export interface IGitHubReadme {
    url: string;
    rawUrl: string;
    content: string;
}

const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
};

const search = (): Promise<IGitHubRepository[]> =>
    fetch("https://api.github.com/users/honzachalupa/repos", {
        method: "GET",
        headers,
    })
        .then((response) => response.json())
        .then((data: IGitHubRepositoryOriginal[]) =>
            data
                .filter(({ description }) => description)
                .sort(
                    (a, b) =>
                        new Date(b.pushed_at).getTime() -
                        new Date(a.pushed_at).getTime()
                )
                .map((original) => ({
                    id: original.id,
                    name: original.name,
                    fullName: original.full_name,
                    description: original.description,
                    url: original.html_url,
                    topics: original.topics,
                    pushedAt: original.pushed_at,
                    isArchived: original.archived,
                }))
        );

const getReadme = async (
    owner: string,
    repositoryName: string
): Promise<IGitHubReadme> =>
    fetch(`https://api.github.com/repos/${owner}/${repositoryName}/readme`, {
        method: "GET",
        headers,
    })
        .then((response) => response.json())
        .then((original: IGitHubReadmeOriginal) => ({
            url: original.html_url,
            rawUrl: original.download_url,
            content: Buffer.from(
                original.content,
                original.encoding
            ).toString(),
        }));

export const GitHubRepositoryActions = {
    search,
    getReadme,
};
