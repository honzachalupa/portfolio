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
