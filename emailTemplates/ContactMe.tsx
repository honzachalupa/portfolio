export interface ContactMeEmailTemplateProps {
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
