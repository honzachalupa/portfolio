import {
  ContactMeEmailConfirmationTemplate,
  ContactMeEmailTemplate,
  ContactMeEmailTemplateProps,
} from "@/emailTemplates";
import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailProps {
  from: string;
  to: string[];
  subject: string;
  headers?: Record<string, string>;
  templateId: "ContactMeEmailTemplate" | "ContactMeEmailConfirmationTemplate";
}

export async function POST(request: Request): Promise<Response> {
  const { from, to, subject, templateId, headers, ...templateProps } =
    (await request.json()) as SendEmailProps;

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

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
