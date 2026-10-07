export interface ContactSubmission {
  name: string;
  emailAddress: string;
  message: string;
  honeypot: string;
}

export interface ContactDependencies {
  limit: (request: Request) => Promise<{ allowed: boolean; retryAfter: number }>;
  spam: (submission: ContactSubmission, request: Request) => Promise<boolean>;
  addresses: () => Promise<{ from: string; to: string }>;
  send: (
    kind: "contact" | "confirmation",
    submission: ContactSubmission,
    addresses: { from: string; to: string },
  ) => Promise<void>;
}

export async function resolveContactAddresses(
  loadConfig: () => Promise<{ emailAddress: string } | null>,
  loadPage: (slug: string) => Promise<{
    components: { content: Array<{ __typename?: string; noreplyEmailAddress?: string }> };
  } | null>,
): Promise<{ from: string; to: string }> {
  const [config, page] = await Promise.all([loadConfig(), loadPage("/contact-me")]);
  const form = page?.components.content.find((component) => component.__typename === "ContactForm");
  if (!config?.emailAddress || !form?.noreplyEmailAddress)
    throw new Error("Contact configuration unavailable");
  return { from: form.noreplyEmailAddress, to: config.emailAddress };
}

export function validEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseContact(value: unknown): ContactSubmission | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  if (
    Object.keys(input).some((key) => !["name", "emailAddress", "message", "honeypot"].includes(key))
  )
    return null;
  if (
    typeof input.emailAddress !== "string" ||
    typeof input.message !== "string" ||
    (input.name !== undefined && typeof input.name !== "string") ||
    (input.honeypot !== undefined && typeof input.honeypot !== "string")
  )
    return null;
  const submission = {
    name: (input.name as string | undefined)?.trim() ?? "",
    emailAddress: input.emailAddress.trim().toLowerCase(),
    message: input.message.trim(),
    honeypot: (input.honeypot as string | undefined)?.trim() ?? "",
  };
  if (
    !validEmail(submission.emailAddress) ||
    submission.name.length > 100 ||
    submission.message.length < 10 ||
    submission.message.length > 5000 ||
    submission.honeypot.length > 200
  )
    return null;
  return submission;
}

// Dependencies keep delivery tests isolated from CMS, spam APIs and real mail.
export async function submitContact(
  request: Request,
  dependencies: ContactDependencies,
): Promise<Response> {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json({ error: "Expected JSON" }, { status: 415 });
  let submission: ContactSubmission | null;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12000)
      return Response.json({ error: "Request too large" }, { status: 413 });
    submission = parseContact(JSON.parse(rawBody));
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!submission) return Response.json({ error: "Invalid contact fields" }, { status: 400 });
  try {
    const limit = await dependencies.limit(request);
    if (!limit.allowed)
      return Response.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
      );
    if (submission.honeypot || (await dependencies.spam(submission, request)))
      return Response.json({ success: true });
    const addresses = await dependencies.addresses();
    if (!validEmail(addresses.from) || !validEmail(addresses.to))
      throw new Error("Contact addresses unavailable");
    await dependencies.send("contact", submission, addresses);
    try {
      await dependencies.send("confirmation", submission, addresses);
    } catch {
      console.error("[Contact] Confirmation delivery failed after main delivery");
    }
    return Response.json({ success: true });
  } catch {
    console.error("[Contact] Submission unavailable");
    return Response.json(
      { error: "Unable to send message. Please try again later." },
      { status: 503 },
    );
  }
}
