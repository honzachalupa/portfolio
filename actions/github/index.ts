import "server-only";
import { cache } from "react";
import type { GithubRepository } from "./types";

export type { GithubReadme, GithubRepository } from "./types";

interface GitHubRepositoryOriginal {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
  topics?: string[];
  pushed_at: string;
  archived: boolean;
}

const getRepositories = cache(async (): Promise<GitHubRepositoryOriginal[]> => {
  const repositories: GitHubRepositoryOriginal[] = [];
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  // Fetch every page before sorting: GitHub defaults to 30 repositories per response.
  for (let page = 1; ; page++) {
    const response = await fetch(
      `https://api.github.com/users/honzachalupa/repos?per_page=100&page=${page}`,
      { headers, next: { revalidate: 3600 }, signal: AbortSignal.timeout(10000) },
    );
    if (!response.ok) throw new Error(`GitHub repository request failed (${response.status})`);
    const batch: GitHubRepositoryOriginal[] = await response.json();
    if (!Array.isArray(batch)) throw new Error("Invalid GitHub repository response");
    repositories.push(...batch);
    if (batch.length < 100) break;
  }

  return repositories;
});

async function search(
  options: { limit?: number; includeWithoutDescription?: boolean; includeArchived?: boolean } = {},
): Promise<GithubRepository[]> {
  const repositories = await getRepositories();
  const result = repositories
    .filter(
      ({ description, archived }) =>
        (options.includeWithoutDescription || description) &&
        (options.includeArchived || !archived),
    )
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .map(({ id, name, full_name, description, html_url, homepage, topics, pushed_at }) => ({
      id: String(id),
      name,
      fullName: full_name,
      description: description ?? "",
      url: html_url,
      websiteUrl: homepage,
      topics,
      pushedAt: pushed_at,
    }));
  return options.limit === undefined ? result : result.slice(0, options.limit);
}

export default { search };
