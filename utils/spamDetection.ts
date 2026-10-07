import { SITE_URL } from "@/utils/site";
import "server-only";

interface SpamCheckResult {
  isSpam: boolean;
  confidence?: number;
  service?: string;
}

interface AkismetCheckParams {
  commentContent: string;
  commentAuthor?: string;
  commentAuthorEmail: string;
  userIp: string;
  userAgent?: string;
  referrer?: string;
}

/**
 * Check content against Akismet spam detection API
 * Free for personal/non-commercial use: https://akismet.com/personal/
 */
async function checkAkismet(params: AkismetCheckParams): Promise<SpamCheckResult | null> {
  const apiKey = process.env.AKISMET_API_KEY;
  const siteUrl = SITE_URL;

  if (!apiKey || !siteUrl) {
    return null; // Service not configured
  }

  try {
    const formData = new URLSearchParams({
      blog: siteUrl,
      user_ip: params.userIp,
      user_agent: params.userAgent || "",
      referrer: params.referrer || "",
      comment_type: "contact-form",
      comment_author: params.commentAuthor || "",
      comment_author_email: params.commentAuthorEmail,
      comment_content: params.commentContent,
    });

    // Add timeout to prevent hanging (5 seconds)
    const signal = AbortSignal.timeout(5000);

    const response = await fetch(`https://${apiKey}.rest.akismet.com/1.1/comment-check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      signal,
    });

    if (!response.ok) {
      console.error("[SpamDetection] Akismet API error:", response.statusText);

      return null;
    }

    const result = await response.text();
    const isSpam = result.trim() === "true";

    return {
      isSpam,
      service: "akismet",
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("[SpamDetection] Akismet check timed out");
    } else {
      console.error("[SpamDetection] Akismet check failed:", error);
    }

    return null;
  }
}

interface IPQualityScoreParams {
  email: string;
  ip?: string;
}

/**
 * Check email against IPQualityScore API
 * Free tier: 1,000 requests/month
 * https://www.ipqualityscore.com/email-verification
 */
async function checkIPQualityScore(params: IPQualityScoreParams): Promise<SpamCheckResult | null> {
  const apiKey = process.env.IPQUALITYSCORE_API_KEY;

  if (!apiKey) {
    return null; // Service not configured
  }

  try {
    const url = new URL("https://ipqualityscore.com/api/json/email/" + apiKey);
    url.searchParams.set("email", params.email);

    if (params.ip) {
      url.searchParams.set("ip", params.ip);
    }

    // Additional checks
    url.searchParams.set("strictness", "2"); // 0-2, higher is stricter
    url.searchParams.set("fast", "true"); // Faster response

    // Add timeout to prevent hanging (5 seconds)
    const signal = AbortSignal.timeout(5000);

    const response = await fetch(url.toString(), {
      method: "GET",
      signal,
    });

    if (!response.ok) {
      console.error("[SpamDetection] IPQualityScore API error:", response.statusText);

      return null;
    }

    const data = await response.json();

    if (data.success === false) {
      return null;
    }

    // Check various spam indicators
    const isSpam =
      data.disposable === true ||
      data.suspicious === true ||
      data.recent_abuse === true ||
      data.fraud_score >= 75; // 0-100, higher is more suspicious

    return {
      isSpam,
      confidence: data.fraud_score,
      service: "ipqualityscore",
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("[SpamDetection] IPQualityScore check timed out");
    } else {
      console.error("[SpamDetection] IPQualityScore check failed:", error);
    }

    return null;
  }
}

interface StopForumSpamParams {
  email: string;
  ip: string;
}

/**
 * Check against StopForumSpam API (free)
 * https://www.stopforumspam.com/usage
 */
async function checkStopForumSpam(params: StopForumSpamParams): Promise<SpamCheckResult | null> {
  try {
    // Add timeout to prevent hanging (3 seconds - faster since it's free)
    const signal = AbortSignal.timeout(3000);

    // Check email
    const emailUrl = `https://api.stopforumspam.com/api?email=${encodeURIComponent(params.email)}&json`;
    const emailResponse = await fetch(emailUrl, { signal });

    if (emailResponse.ok) {
      const emailData = await emailResponse.json();

      if (emailData.email?.appears === 1) {
        return {
          isSpam: true,
          confidence: emailData.email?.confidence || 0,
          service: "stopforumspam",
        };
      }
    }

    // Check IP
    const ipUrl = `https://api.stopforumspam.com/api?ip=${encodeURIComponent(params.ip)}&json`;
    const ipResponse = await fetch(ipUrl, { signal });

    if (ipResponse.ok) {
      const ipData = await ipResponse.json();

      if (ipData.ip?.appears === 1) {
        return {
          isSpam: true,
          confidence: ipData.ip?.confidence || 0,
          service: "stopforumspam",
        };
      }
    }

    return {
      isSpam: false,
      service: "stopforumspam",
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("[SpamDetection] StopForumSpam check timed out");
    } else {
      console.error("[SpamDetection] StopForumSpam check failed:", error);
    }

    return null;
  }
}

/**
 * Check content against multiple spam detection services
 * Returns true if any service flags it as spam
 */
export async function checkSpam(
  content: string,
  email: string,
  ip: string,
  options?: {
    name?: string;
    userAgent?: string;
    referrer?: string;
  },
): Promise<SpamCheckResult> {
  // Try Akismet first (best for contact forms)
  const akismetResult = await checkAkismet({
    commentContent: content,
    commentAuthor: options?.name,
    commentAuthorEmail: email,
    userIp: ip,
    userAgent: options?.userAgent,
    referrer: options?.referrer,
  });

  if (akismetResult?.isSpam) {
    return akismetResult;
  }

  // Try IPQualityScore (email validation + spam detection)
  const ipqsResult = await checkIPQualityScore({
    email,
    ip,
  });

  if (ipqsResult?.isSpam) {
    return ipqsResult;
  }

  // Try StopForumSpam (free, checks email and IP)
  const sfsResult = await checkStopForumSpam({
    email,
    ip,
  });

  if (sfsResult?.isSpam) {
    return sfsResult;
  }

  // If all services pass or are unavailable, return not spam
  return {
    isSpam: false,
    service: akismetResult?.service || ipqsResult?.service || sfsResult?.service || "none",
  };
}
