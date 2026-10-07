import assert from "node:assert/strict";
import { test } from "node:test";
import { parse } from "graphql";
import { executeHygraphQuery } from "../utils/hygraphQuery.ts";

test("CMS failures throw instead of becoming missing content", async () => {
  const originalFetch = globalThis.fetch;
  const originalUrl = process.env.HYGRAPH_CONTENT_API_URL;
  process.env.HYGRAPH_CONTENT_API_URL = "https://cms.example.test/graphql";
  try {
    globalThis.fetch = async () => Response.json({}, { status: 401 });
    await assert.rejects(executeHygraphQuery(parse("{ page { title } }")), /401/);
    globalThis.fetch = async () => Response.json({ errors: [{ message: "failure" }] });
    await assert.rejects(executeHygraphQuery(parse("{ page { title } }")), /invalid response/);
    globalThis.fetch = async () => Response.json({ data: { page: null } });
    assert.deepEqual(await executeHygraphQuery(parse("{ page { title } }")), { page: null });
  } finally {
    globalThis.fetch = originalFetch;
    if (originalUrl === undefined) delete process.env.HYGRAPH_CONTENT_API_URL;
    else process.env.HYGRAPH_CONTENT_API_URL = originalUrl;
  }
});
