interface IGitHubRepositoryOriginal {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage?: string;
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
  websiteUrl?: string;
  topics?: string[];
  pushedAt: string;
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
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

const search = (
  options:
    | {
        limit?: number;
        includeWithoutDescription?: boolean;
        includeArchived?: boolean;
      }
    | undefined = undefined
): Promise<IGitHubRepository[]> =>
  fetch("https://api.github.com/users/honzachalupa/repos", {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data: IGitHubRepositoryOriginal[]) =>
      data
        .filter(
          ({ description, archived }) =>
            (options?.includeWithoutDescription || description) &&
            (options?.includeArchived || !archived)
        )
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        )
        .map(
          ({
            id,
            name,
            full_name: fullName,
            description,
            html_url: url,
            homepage: websiteUrl,
            topics,
            pushed_at: pushedAt,
          }) => {
            const data: IGitHubRepository = {
              id,
              name,
              fullName,
              description,
              url,
              websiteUrl,
              topics,
              pushedAt,
            };

            return data;
          }
        )
        .slice(0, options?.limit ?? 100)
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
      content: Buffer.from(original.content, original.encoding).toString(),
    }));

const githubApi = {
  search,
  getReadme,
};

export default githubApi;
