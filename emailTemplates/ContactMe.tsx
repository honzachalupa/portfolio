interface ContactMeEmailTemplateProps {
  firstName: string;
}

export function ContactMeEmailTemplate({
  firstName,
}: ContactMeEmailTemplateProps): React.ReactNode {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
