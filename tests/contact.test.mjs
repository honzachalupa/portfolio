import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveContactAddresses, submitContact } from "../services/contact.ts";

const valid = {
  name: "Jan",
  emailAddress: "jan@example.com",
  message: "A meaningful contact message",
  honeypot: "",
};
const request = (body) =>
  new Request("https://www.janchalupa.dev/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json", "user-agent": "visitor-browser" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
function fixture(overrides = {}) {
  const calls = [];
  return {
    calls,
    dependencies: {
      limit: async () => {
        calls.push("limit");
        return { allowed: true, retryAfter: 1 };
      },
      spam: async (_, incoming) => {
        assert.equal(incoming.headers.get("user-agent"), "visitor-browser");
        return false;
      },
      addresses: async () => ({ from: "noreply@example.com", to: "owner@example.com" }),
      send: async (kind, _, addresses) => {
        assert.equal(addresses.to, "owner@example.com");
        calls.push(kind);
      },
      ...overrides,
    },
  };
}
test("rejects malformed JSON, non-object fields and attacker controlled delivery options", async () => {
  for (const body of [
    "{",
    [],
    null,
    { ...valid, message: [] },
    { ...valid, to: ["attacker@example.com"] },
    { ...valid, templateId: "confirmation" },
  ]) {
    const { calls, dependencies } = fixture();
    assert.equal((await submitContact(request(body), dependencies)).status, 400);
    assert.deepEqual(calls, []);
  }
});
test("one contact spends one quota and sends main then confirmation", async () => {
  const { calls, dependencies } = fixture();
  assert.equal((await submitContact(request(valid), dependencies)).status, 200);
  assert.deepEqual(calls, ["limit", "contact", "confirmation"]);
});
test("confirmation failure does not report already delivered message as failed", async () => {
  const { calls, dependencies } = fixture({
    send: async (kind) => {
      calls.push(kind);
      if (kind === "confirmation") throw new Error("mock failure");
    },
  });
  assert.equal((await submitContact(request(valid), dependencies)).status, 200);
  assert.deepEqual(calls, ["limit", "contact", "confirmation"]);
});
test("main delivery failure prevents confirmation", async () => {
  const { calls, dependencies } = fixture({
    send: async (kind) => {
      calls.push(kind);
      throw new Error("mock failure");
    },
  });
  assert.equal((await submitContact(request(valid), dependencies)).status, 503);
  assert.deepEqual(calls, ["limit", "contact"]);
});
test("quota denial, spam and honeypot never deliver mail", async () => {
  for (const scenario of [
    {
      body: valid,
      overrides: { limit: async () => ({ allowed: false, retryAfter: 30 }) },
      status: 429,
    },
    { body: valid, overrides: { spam: async () => true }, status: 200 },
    { body: { ...valid, honeypot: "bot" }, overrides: {}, status: 200 },
  ]) {
    const { calls, dependencies } = fixture(scenario.overrides);
    assert.equal(
      (await submitContact(request(scenario.body), dependencies)).status,
      scenario.status,
    );
    assert.ok(!calls.includes("contact"));
  }
});

test("delivery addresses resolve the actual contact page and only server CMS settings", async () => {
  const addresses = await resolveContactAddresses(
    async () => ({ emailAddress: "owner@example.com" }),
    async (slug) => {
      assert.equal(slug, "/contact-me");
      return {
        components: {
          content: [
            { __typename: "About" },
            { __typename: "ContactForm", noreplyEmailAddress: "noreply@example.com" },
          ],
        },
      };
    },
  );
  assert.deepEqual(addresses, { from: "noreply@example.com", to: "owner@example.com" });
  await assert.rejects(
    resolveContactAddresses(
      async () => null,
      async () => null,
    ),
    /Contact configuration/,
  );
});
