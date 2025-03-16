import { ContactMeEmailTemplate } from "@/emailTemplates/ContactMe";
import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailProps {
  from: string;
  to: string[];
  subject: string;
  template: "ContactMeEmailTemplate";
}

export async function POST(request: Request): Promise<Response> {
  const { from, to, subject, template } =
    (await request.json()) as SendEmailProps;

  const react: CreateEmailOptions["react"] =
    template === "ContactMeEmailTemplate"
      ? ContactMeEmailTemplate({ firstName: "John" })
      : null;

  if (!react) {
    return Response.json({ error: "Invalid template" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react: react!,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
