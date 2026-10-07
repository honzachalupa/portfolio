import type { GithubReadme } from "./types";

/** Public README request. Authentication stays in the server-only repository module. */
export async function getReadme(repositoryName: string): Promise<GithubReadme> {
  const response = await fetch(
    `https://api.github.com/repos/honzachalupa/${encodeURIComponent(repositoryName)}/readme`,
    { headers: { Accept: "application/vnd.github.raw+json" }, signal: AbortSignal.timeout(10000) },
  );
  if (response.status === 404) return { url: "", rawUrl: "", content: "" };
  if (!response.ok) throw new Error(`GitHub README request failed (${response.status})`);
  return {
    url: `https://github.com/honzachalupa/${encodeURIComponent(repositoryName)}#readme`,
    rawUrl: "",
    content: await response.text(),
  };
}
