import { afterEach, describe, expect, mock, spyOn, test } from "bun:test";
import { generateKeyPairSync } from "node:crypto";
import jwt from "jsonwebtoken";

mock.module("server-only", () => ({}));
const { fetchAppleApps } = await import("../actions/appleAppStore/service"),
  originalFetch = globalThis.fetch,
  originalEnvironment = {
    APPLE_ISSUER_ID: process.env.APPLE_ISSUER_ID,
    APPLE_KEY_ID: process.env.APPLE_KEY_ID,
    APPLE_PRIVATE_KEY: process.env.APPLE_PRIVATE_KEY,
  },
  { privateKey } = generateKeyPairSync("ec", {
    namedCurve: "prime256v1",
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
    publicKeyEncoding: { type: "spki", format: "pem" },
  });
function configure() {
  process.env.APPLE_ISSUER_ID = "test-issuer";
  process.env.APPLE_KEY_ID = "test-key";
  process.env.APPLE_PRIVATE_KEY = privateKey;
}
afterEach(() => {
  globalThis.fetch = originalFetch;
  mock.restore();
  for (const [key, value] of Object.entries(originalEnvironment))
    if (value === void 0) delete process.env[key];
    else process.env[key] = value;
});
describe("App Store Connect data service", () => {
  test("rejects an upstream 401 instead of caching an empty successful result", async () => {
    configure();
    globalThis.fetch = mock(async () => Response.json({ errors: [] }, { status: 401 }));
    await expect(fetchAppleApps()).rejects.toThrow("401");
  });
  test("creates a fresh JWT after a warm process outlives the previous token", async () => {
    configure();
    const tokens = [];
    globalThis.fetch = mock(async (_url, options) => {
      const authorization = new Headers(options?.headers).get("Authorization") ?? "";
      tokens.push(jwt.decode(authorization.replace("Bearer ", "")));
      return Response.json({ data: [] });
    });
    const now = spyOn(Date, "now").mockReturnValue(1800000000000);
    await fetchAppleApps();
    now.mockReturnValue(1800001260000);
    await fetchAppleApps();
    expect(tokens[1].iat).toBeGreaterThan(tokens[0].exp ?? 0);
    expect((tokens[1].exp ?? 0) - (tokens[1].iat ?? 0)).toBe(1200);
  });
  test("rejects pagination to a different host before forwarding Apple authorization", async () => {
    configure();
    const fetchMock = mock(async () =>
      Response.json({ data: [], links: { next: "https://example.com/leak" } }),
    );
    globalThis.fetch = fetchMock;
    await expect(fetchAppleApps()).rejects.toThrow("pagination");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  test("paginates apps, skips drafts, chooses Czech published copy and screenshot display type", async () => {
    configure();
    const requested = [];
    globalThis.fetch = mock(async (input) => {
      const url = new URL(String(input));
      requested.push(url.href);
      if (url.hostname === "itunes.apple.com")
        return Response.json({ results: [{ artworkUrl512: "https://example.com/icon" }] });
      if (url.pathname === "/v1/apps")
        return url.searchParams.get("cursor")
          ? Response.json({ data: [{ id: "draft", attributes: { name: "Draft" } }] })
          : Response.json({
              data: [{ id: "published", attributes: { name: "Public" } }],
              links: { next: "https://api.appstoreconnect.apple.com/v1/apps?cursor=2" },
            });
      if (url.pathname === "/v1/apps/draft/appStoreVersions")
        return Response.json({
          data: [{ id: "draft-version", attributes: { appStoreState: "PREPARE_FOR_SUBMISSION" } }],
        });
      if (url.pathname === "/v1/apps/published/appStoreVersions")
        return Response.json({
          data: [
            {
              id: "new-draft",
              attributes: { appStoreState: "PREPARE_FOR_SUBMISSION", createdDate: "2026-10-07" },
            },
            {
              id: "live",
              attributes: { appStoreState: "READY_FOR_SALE", createdDate: "2026-01-01" },
            },
          ],
        });
      if (url.pathname === "/v1/appStoreVersions/live/appStoreVersionLocalizations")
        return Response.json({
          data: [
            { id: "en", attributes: { locale: "en-US", description: "English" } },
            {
              id: "cs",
              attributes: { locale: "cs", description: "\u010Cesk\xFD popis", keywords: "one,two" },
            },
          ],
        });
      if (url.pathname === "/v1/appStoreVersionLocalizations/cs/appScreenshotSets")
        return Response.json({
          data: [{ id: "iphone", attributes: { screenshotDisplayType: "APP_IPHONE_67" } }],
        });
      if (url.pathname === "/v1/appScreenshotSets/iphone/appScreenshots")
        return Response.json({
          data: [
            {
              id: "screenshot",
              attributes: {
                imageAsset: {
                  templateUrl: "https://example.com/{w}/{h}.{f}",
                  width: 1290,
                  height: 2796,
                },
              },
            },
          ],
        });
      throw Error(`Unexpected URL: ${url}`);
    });
    const apps = await fetchAppleApps();
    expect(apps).toHaveLength(1);
    expect(apps[0].description).toBe("\u010Cesk\xFD popis");
    expect(apps[0].keywords).toEqual(["one", "two"]);
    expect(apps[0].screenshots[0].deviceType).toBe("iPhone");
    expect(apps[0].screenshots[0].url).toBe("https://example.com/1290/2796.jpg");
    expect(requested.some((url) => url.includes("cursor=2"))).toBe(!0);
    expect(requested.some((url) => url.includes("new-draft/"))).toBe(!1);
  });
});
