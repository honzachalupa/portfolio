"use client";

import hygraphApi from "@/actions/hygraph";
import { ContactForm as ContactFormProps } from "@/actions/hygraph/_generated/graphql";
import { HygraphGetConfigData } from "@/actions/hygraph/config";
import { SendEmailProps } from "@/app/api/send-email/route";
import { post } from "@/utils/api";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { Container } from "../Container";

export function ContactForm({ headline }: ContactFormProps): React.ReactNode {
  const [config, setConfig] = useState<HygraphGetConfigData | null>(null);

  const emailAddress = config?.emailAddress;

  async function getConfig(): Promise<void> {
    setConfig(await hygraphApi.getConfig());
  }

  async function sendEmail(): Promise<void> {
    console.log("sendEmail");

    const { data, error } = await post<never, SendEmailProps>(
      "/api/send-email",
      {
        from: emailAddress!,
        to: ["janchalupa@outlook.cz"],
        subject: "Hello world",
        template: "ContactMeEmailTemplate",
      }
    );

    if (error) {
      console.error("Failed to send email:", error);
    }

    console.info(data);
  }

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Container headline={headline}>
      <p>{emailAddress}</p>

      <Button disabled={!emailAddress} onPress={sendEmail}>
        Send
      </Button>
    </Container>
  );
}
