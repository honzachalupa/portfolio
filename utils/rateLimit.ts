import "server-only";
import { createHash } from "node:crypto";
import { isIP } from "node:net";

export interface RateLimitOptions {
  maxRequests: number;
  windowMs: number;
}
export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}
const developmentStore = new Map<string, { count: number; resetTime: number }>();
const incrementScript =
  "local count = redis.call('INCR', KEYS[1]); if count == 1 then redis.call('PEXPIRE', KEYS[1], ARGV[1]); end; return {count, redis.call('PTTL', KEYS[1])}";

export async function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { maxRequests: 3, windowMs: 15 * 60 * 1000 },
): Promise<RateLimitResult> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const now = Date.now();
  if (url && token) {
    const key = `portfolio:contact:${createHash("sha256").update(identifier).digest("hex")}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", incrementScript, "1", key, String(options.windowMs)]),
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error("Shared contact limiter unavailable");
    const data: { result?: unknown; error?: string } = await response.json();
    if (
      !Array.isArray(data.result) ||
      typeof data.result[0] !== "number" ||
      typeof data.result[1] !== "number" ||
      data.result[1] < 0
    )
      throw new Error("Invalid contact limiter response");
    const [count, ttl] = data.result as [number, number];
    return {
      allowed: count <= options.maxRequests,
      remaining: Math.max(0, options.maxRequests - count),
      resetTime: now + ttl,
    };
  }
  if (process.env.NODE_ENV === "production")
    throw new Error("Configure shared contact limiter before enabling production email");
  for (const [key, entry] of developmentStore)
    if (entry.resetTime <= now) developmentStore.delete(key);
  const entry = developmentStore.get(identifier) ?? { count: 0, resetTime: now + options.windowMs };
  entry.count += 1;
  developmentStore.set(identifier, entry);
  return {
    allowed: entry.count <= options.maxRequests,
    remaining: Math.max(0, options.maxRequests - entry.count),
    resetTime: entry.resetTime,
  };
}

export function getClientIp(request: Request): string {
  // Vercel overwrites this header; never trust visitor-supplied forwarding headers there.
  const header = process.env.VERCEL
    ? request.headers.get("x-vercel-forwarded-for")
    : request.headers.get("x-forwarded-for");
  const ip = header?.split(",")[0]?.trim();
  return ip && isIP(ip) ? ip : "unknown";
}
