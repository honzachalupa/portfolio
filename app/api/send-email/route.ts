import {
  ContactMeEmailConfirmationTemplate,
  ContactMeEmailTemplate,
  ContactMeEmailTemplateProps,
} from "@/emailTemplates";
import { checkRateLimit, getClientIp } from "@/utils/rateLimit";
import { checkSpam } from "@/utils/spamDetection";
import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailProps {
  from: string;
  to: string[];
  subject: string;
  headers?: Record<string, string>;
  templateId: "ContactMeEmailTemplate" | "ContactMeEmailConfirmationTemplate";
  honeypot?: string;
}

function sanitizeInput(input: string, maxLength: number = 5000): string {
  return input.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email) && email.length <= 254;
}

export async function POST(request: Request): Promise<Response> {
  const clientIp = getClientIp(request);

  // Rate limiting: 3 requests per 15 minutes per IP
  const rateLimit = checkRateLimit(clientIp, {
    maxRequests: 3,
    windowMs: 15 * 60 * 1000,
  });

  if (!rateLimit.allowed) {
    return Response.json(
      {
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          "X-RateLimit-Limit": "3",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(rateLimit.resetTime).toISOString(),
        },
      },
    );
  }

  const body = (await request.json()) as SendEmailProps & {
    honeypot?: string;
  };

  // Honeypot check: if this field is filled, it's likely a bot
  if (body.honeypot && body.honeypot.trim() !== "") {
    // Silently reject (don't let bots know they were caught)
    return Response.json({ success: true }, { status: 200 });
  }

  // Extract honeypot to exclude it from templateProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { from, to, subject, templateId, headers, honeypot, ...templateProps } = body;

  // Validate template
  if (
    templateId !== "ContactMeEmailTemplate" &&
    templateId !== "ContactMeEmailConfirmationTemplate"
  ) {
    return Response.json({ error: "Invalid template" }, { status: 400 });
  }

  // Validate and sanitize inputs for contact form submissions
  if (templateId === "ContactMeEmailTemplate") {
    const props = templateProps as ContactMeEmailTemplateProps;

    // Validate email address
    const senderEmail = props.sender?.emailAddress || "";

    if (!isValidEmail(senderEmail)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Validate message is not empty
    if (!props.content || props.content.trim().length === 0) {
      return Response.json({ error: "Message cannot be empty" }, { status: 400 });
    }

    // Require minimum meaningful message length (at least 10 characters)
    if (props.content.trim().length < 10) {
      return Response.json({ error: "Message is too short" }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedContent = sanitizeInput(props.content || "", 5000);
    const sanitizedName = sanitizeInput(props.sender?.name || "", 100);
    const sanitizedEmail = props.sender?.emailAddress?.trim().toLowerCase() || "";

    // Check against spam detection APIs (Akismet, IPQualityScore, StopForumSpam)
    const userAgent = request.headers.get("user-agent") || undefined;
    const referrer = request.headers.get("referer") || undefined;

    const spamCheckResult = await checkSpam(sanitizedContent, sanitizedEmail, clientIp, {
      name: sanitizedName,
      userAgent,
      referrer,
    });

    if (spamCheckResult.isSpam) {
      // Silently reject spam detected by API services
      console.info(
        `[SpamDetection] Spam detected by ${spamCheckResult.service} for ${sanitizedEmail}`,
      );

      return Response.json({ success: true }, { status: 200 });
    }

    // Update with sanitized values
    props.content = sanitizedContent;

    if (props.sender) {
      props.sender.name = sanitizedName;
      props.sender.emailAddress = props.sender.emailAddress.trim().toLowerCase();
    }
  }

  const template: CreateEmailOptions["react"] =
    templateId === "ContactMeEmailTemplate"
      ? ContactMeEmailTemplate(templateProps as ContactMeEmailTemplateProps)
      : templateId === "ContactMeEmailConfirmationTemplate"
        ? ContactMeEmailConfirmationTemplate()
        : null;

  if (!template) {
    return Response.json({ error: "Invalid template" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react: template,
      headers,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, {
      headers: {
        "X-RateLimit-Limit": "3",
        "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        "X-RateLimit-Reset": new Date(rateLimit.resetTime).toISOString(),
      },
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
