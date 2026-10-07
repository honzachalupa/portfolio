import assert from "node:assert/strict";
import { test } from "node:test";
import { checkRateLimit, getClientIp } from "../utils/rateLimit.ts";

// This suite uses no provider credentials or network requests.
test("shared limiter uses atomic increment with expiry and rejects exhausted quota", async () => {
  const oldFetch = globalThis.fetch;
  const oldUrl = process.env.UPSTASH_REDIS_REST_URL;
  const oldToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  process.env.UPSTASH_REDIS_REST_URL = "https://mock-redis.invalid";
  process.env.UPSTASH_REDIS_REST_TOKEN = "mock-token";
  globalThis.fetch = async (_, options) => {
    assert.equal(options.cache, "no-store");
    const command = JSON.parse(options.body);
    assert.equal(command[0], "EVAL");
    assert.match(command[1], /INCR/);
    assert.match(command[1], /PEXPIRE/);
    assert.ok(!command[3].includes("192.0.2.1"));
    return Response.json({ result: [4, 15000] });
  };
  try {
    const result = await checkRateLimit("192.0.2.1");
    assert.equal(result.allowed, false);
    assert.equal(result.remaining, 0);
  } finally {
    globalThis.fetch = oldFetch;
    if (oldUrl === undefined) delete process.env.UPSTASH_REDIS_REST_URL;
    else process.env.UPSTASH_REDIS_REST_URL = oldUrl;
    if (oldToken === undefined) delete process.env.UPSTASH_REDIS_REST_TOKEN;
    else process.env.UPSTASH_REDIS_REST_TOKEN = oldToken;
  }
});
test("production cannot fall back to per-instance quota", async () => {
  const oldEnv = { ...process.env };
  process.env.NODE_ENV = "production";
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
  try {
    await assert.rejects(checkRateLimit("192.0.2.1"), /shared contact limiter/);
  } finally {
    for (const key of ["NODE_ENV", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"]) {
      if (oldEnv[key] === undefined) delete process.env[key];
      else process.env[key] = oldEnv[key];
    }
  }
});
test("Vercel quota ignores visitor forwarding header", () => {
  const oldVercel = process.env.VERCEL;
  process.env.VERCEL = "1";
  try {
    assert.equal(
      getClientIp(
        new Request("https://site.invalid", {
          headers: { "x-vercel-forwarded-for": "192.0.2.1", "x-forwarded-for": "192.0.2.2" },
        }),
      ),
      "192.0.2.1",
    );
    assert.equal(
      getClientIp(
        new Request("https://site.invalid", { headers: { "x-forwarded-for": "192.0.2.2" } }),
      ),
      "unknown",
    );
  } finally {
    if (oldVercel === undefined) delete process.env.VERCEL;
    else process.env.VERCEL = oldVercel;
  }
});
