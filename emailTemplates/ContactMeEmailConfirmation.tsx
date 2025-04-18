import { SendEmailProps } from "@/app/api/send-email/route";

export type ContactMeEmailConfirmationTemplateProps = SendEmailProps;

export function ContactMeEmailConfirmationTemplate(): React.ReactNode {
  return (
    <div>
      <p>Thank you for reaching out!</p>

      <p>
        I will get back to you as soon as possible. In the meantime, feel free
        to check out my website or social media profiles.
      </p>

      <p>
        If you have any questions or need further assistance, please don&apos;t
        hesitate to reach out.
      </p>

      <p>Sincerely, Jan Chalupa</p>
    </div>
  );
}
