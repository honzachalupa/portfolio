interface GitHubRepositoryOriginal {
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
export interface GithubRepository {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  websiteUrl?: string;
  topics?: string[];
  pushedAt: string;
}

export interface GithubReadme {
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
): Promise<GithubRepository[]> =>
  fetch("https://api.github.com/users/honzachalupa/repos", {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data: GitHubRepositoryOriginal[]) =>
      data
        .filter(
          ({ description, archived }) =>
            (options?.includeWithoutDescription || description) && (options?.includeArchived || !archived)
        )
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
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
            const data: GithubRepository = {
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

async function getReadme(repositoryName: string): Promise<GithubReadme> {
  const response = await fetch(`https://api.github.com/repos/honzachalupa/${repositoryName}/readme`, {
    method: "GET",
  });

  const data = await response.json();

  return {
    url: data.html_url,
    rawUrl: data.download_url,
    content: Buffer.from(data.content, data.encoding).toString(),
  };
}

const githubApi = {
  search,
  getReadme,
};

export default githubApi;
