import {
  ContactMeEmailConfirmationTemplate,
  ContactMeEmailTemplate,
  ContactMeEmailTemplateProps,
} from "@/emailTemplates";
import { checkRateLimit, getClientIp } from "@/utils/rateLimit";
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

// Suspicious patterns that indicate spam
const SPAM_PATTERNS = [
  /https?:\/\/[^\s]+/gi, // URLs
  /[a-zA-Z0-9]{20,}/g, // Long random strings (like "uAnvFayvPHRbLKVtoW")
  /(?:viagra|cialis|casino|poker|loan|debt|free\s+money)/gi, // Common spam keywords
];

function containsSpam(content: string): boolean {
  return SPAM_PATTERNS.some((pattern) => pattern.test(content));
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
          "X-RateLimit-Limit": "5",
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
    if (!isValidEmail(props.sender?.emailAddress || "")) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Validate message is not empty
    if (!props.content || props.content.trim().length === 0) {
      return Response.json({ error: "Message cannot be empty" }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedContent = sanitizeInput(props.content || "", 5000);
    const sanitizedName = sanitizeInput(props.sender?.name || "", 100);

    // Check for spam patterns
    if (containsSpam(sanitizedContent)) {
      // Silently reject spam
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
        "X-RateLimit-Limit": "5",
        "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        "X-RateLimit-Reset": new Date(rateLimit.resetTime).toISOString(),
      },
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
