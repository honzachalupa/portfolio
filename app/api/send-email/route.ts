import { Resend } from "resend";
import { getConfig } from "@/actions/hygraph/config";
import { getPage } from "@/actions/hygraph/page";
import { ContactMeEmailConfirmationTemplate, ContactMeEmailTemplate } from "@/emailTemplates";
import { resolveContactAddresses, submitContact } from "@/services/contact";
import { checkRateLimit, getClientIp } from "@/utils/rateLimit";
import { checkSpam } from "@/utils/spamDetection";

export async function POST(request: Request): Promise<Response> {
  return submitContact(request, {
    limit: async (incoming) => {
      const result = await checkRateLimit(getClientIp(incoming));
      return {
        allowed: result.allowed,
        retryAfter: Math.max(1, Math.ceil((result.resetTime - Date.now()) / 1000)),
      };
    },
    spam: async (submission, incoming) =>
      (
        await checkSpam(submission.message, submission.emailAddress, getClientIp(incoming), {
          name: submission.name,
          userAgent: incoming.headers.get("user-agent") ?? undefined,
          referrer: incoming.headers.get("referer") ?? undefined,
        })
      ).isSpam,
    addresses: () => resolveContactAddresses(getConfig, getPage),
    send: async (kind, submission, addresses) => {
      if (!process.env.RESEND_API_KEY) throw new Error("Mail provider not configured");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: addresses.from,
        to: kind === "contact" ? addresses.to : submission.emailAddress,
        subject: kind === "contact" ? "Message from contact form" : "Confirmation of your message",
        replyTo: kind === "contact" ? submission.emailAddress : addresses.to,
        react:
          kind === "contact"
            ? ContactMeEmailTemplate({
                sender: { name: submission.name, emailAddress: submission.emailAddress },
                content: submission.message,
              })
            : ContactMeEmailConfirmationTemplate(),
      });
      if (error) throw new Error("Mail provider rejected delivery");
    },
  });
}
