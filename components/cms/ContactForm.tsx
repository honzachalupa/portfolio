import { getConfig } from "@/actions/hygraph/config";
import { ContactFormClient } from "./ContactForm.client";

export async function ContactForm({
  headline,
}: {
  headline: string | null;
}): Promise<React.ReactNode> {
  const config = await getConfig();
  return <ContactFormClient headline={headline} emailAddress={config?.emailAddress ?? ""} />;
}
