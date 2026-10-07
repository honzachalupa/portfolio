import { afterEach, describe, expect, mock, test } from "bun:test";

mock.module("server-only", () => ({}));
const { default: github } = await import("../actions/github/index.ts");
const { getReadme } = await import("../actions/github/readme.ts");
const originalFetch = globalThis.fetch;
const originalToken = process.env.GITHUB_TOKEN;

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalToken === undefined) delete process.env.GITHUB_TOKEN;
  else process.env.GITHUB_TOKEN = originalToken;
});

function repository(id, pushedAt = "2026-01-01T00:00:00Z") {
  return {
    id,
    name: `repo-${id}`,
    full_name: `honzachalupa/repo-${id}`,
    description: "A project",
    html_url: `https://github.com/honzachalupa/repo-${id}`,
    pushed_at: pushedAt,
    archived: false,
  };
}

describe("GitHub repositories", () => {
  test("fetches all pages before sorting and applying a limit", async () => {
    const requests = [];
    globalThis.fetch = mock(async (url) => {
      requests.push(String(url));
      const page = new URL(url).searchParams.get("page");
      return Response.json(
        page === "1"
          ? Array.from({ length: 100 }, (_, index) => repository(index))
          : [repository(100, "2026-02-01T00:00:00Z")],
      );
    });
    const result = await github.search({ limit: 1 });
    expect(requests).toHaveLength(2);
    expect(requests[0]).toContain("per_page=100&page=1");
    expect(result.map((item) => item.id)).toEqual(["100"]);
  });

  test("returns complete counts beyond GitHub's default page size", async () => {
    globalThis.fetch = mock(async (url) =>
      Response.json(
        new URL(url).searchParams.get("page") === "1"
          ? Array.from({ length: 100 }, (_, index) => repository(index))
          : [repository(100)],
      ),
    );
    expect(await github.search()).toHaveLength(101);
  });

  test("rejects upstream HTTP failures and malformed response shapes", async () => {
    globalThis.fetch = mock(async () => Response.json({ message: "Rate limit" }, { status: 403 }));
    await expect(github.search()).rejects.toThrow("403");
    globalThis.fetch = mock(async () => Response.json({ message: "Unexpected object" }));
    await expect(github.search()).rejects.toThrow("Invalid GitHub repository response");
  });
});

describe("Public GitHub README", () => {
  test("treats a missing README as unavailable", async () => {
    globalThis.fetch = mock(async () => new Response("", { status: 404 }));
    expect((await getReadme("missing")).content).toBe("");
  });

  test("rejects rate-limit and network failures for the modal retry state", async () => {
    globalThis.fetch = mock(async () => new Response("", { status: 403 }));
    await expect(getReadme("project")).rejects.toThrow("403");
    globalThis.fetch = mock(async () => {
      throw new TypeError("Network unavailable");
    });
    await expect(getReadme("project")).rejects.toThrow("Network unavailable");
  });

  test("preserves UTF-8 Markdown and never forwards server authentication", async () => {
    process.env.GITHUB_TOKEN = "server-token-must-stay-private";
    globalThis.fetch = mock(async (url, options) => {
      expect(String(url)).toContain("project%20name/readme");
      const headers = new Headers(options.headers);
      expect(headers.get("Authorization")).toBeNull();
      expect(headers.get("Accept")).toBe("application/vnd.github.raw+json");
      return new Response("# README česky 🐱");
    });
    expect((await getReadme("project name")).content).toBe("# README česky 🐱");
  });
});
