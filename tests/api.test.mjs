import assert from "node:assert/strict";
import { test } from "node:test";
import { get } from "../utils/api.ts";

test("HTTP helper preserves zero revalidation and cache tags together", async () => {
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async (_, options) => {
    assert.deepEqual(options.next, { revalidate: 0, tags: ["source"] });
    assert.equal(options.cache, "no-store");
    return Response.json({ success: true });
  };
  try {
    assert.equal((await get("https://mock.invalid", { revalidate: 0, tags: ["source"] })).ok, true);
  } finally {
    globalThis.fetch = oldFetch;
  }
});
