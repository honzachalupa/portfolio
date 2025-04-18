import { SendEmailProps } from "@/app/api/send-email/route";

export interface ContactMeEmailTemplateProps extends SendEmailProps {
  sender: {
    name?: string;
    emailAddress: string;
  };
  content: string;
}

export function ContactMeEmailTemplate({
  sender,
  content,
}: ContactMeEmailTemplateProps): React.ReactNode {
  return (
    <div>
      <p>{content}</p>

      <hr />

      <p>{sender.name}</p>
      <p>{sender.emailAddress}</p>
    </div>
  );
}
