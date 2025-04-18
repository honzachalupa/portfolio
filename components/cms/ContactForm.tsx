"use client";

import hygraphApi from "@/actions/hygraph";
import { ContactForm as ContactFormProps } from "@/actions/hygraph/_generated/graphql";
import { HygraphGetConfigData } from "@/actions/hygraph/config";
import { SendEmailProps } from "@/app/api/send-email/route";
import {
  ContactMeEmailConfirmationTemplateProps,
  ContactMeEmailTemplateProps,
} from "@/emailTemplates";
import { post } from "@/utils/api";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "../Container";

interface FormValues {
  name?: string;
  emailAddress: string;
  message: string;
}

export function ContactForm({
  headline,
  noreplyEmailAddress,
}: ContactFormProps): React.ReactNode {
  const [config, setConfig] = useState<HygraphGetConfigData | null>(null);

  const myEmailAddress = config?.emailAddress ?? "";

  const [sentStatus, setSentStatus] = useState<
    "sending" | "success" | "failed"
  >();

  const { register, handleSubmit } = useForm<FormValues>();

  async function sendEmail(formData: FormValues): Promise<void> {
    setSentStatus("sending");

    const payload: ContactMeEmailTemplateProps = {
      from: noreplyEmailAddress,
      to: [myEmailAddress],
      subject: "Message from contact form",
      sender: {
        name: formData.name,
        emailAddress: formData.emailAddress,
      },
      content: formData.message,
      templateId: "ContactMeEmailTemplate",
      headers: {
        "reply-to": formData.emailAddress,
      },
    };

    const { error } = await post<never, ContactMeEmailTemplateProps>(
      "/api/send-email",
      payload
    );

    if (error) {
      console.error("[ContactForm] Failed to send email:", error);

      setSentStatus("failed");

      return;
    }

    await sendEmailConfirmation(formData);
  }

  async function sendEmailConfirmation(formData: FormValues): Promise<void> {
    const payload: ContactMeEmailConfirmationTemplateProps = {
      from: noreplyEmailAddress,
      to: [formData.emailAddress],
      subject: "Confirmation of your message",
      templateId: "ContactMeEmailConfirmationTemplate",
    };

    const { error } = await post<never, SendEmailProps>(
      "/api/send-email",
      payload
    );

    if (error) {
      console.error("[ContactForm] Failed to send email:", error);

      setSentStatus("failed");

      return;
    }

    setSentStatus("success");
  }

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    await sendEmail(formData);
  };

  useEffect(() => {
    async function getConfig(): Promise<void> {
      setConfig(await hygraphApi.getConfig());
    }

    getConfig();
  }, []);

  return (
    <Container headline={headline} className="flex flex-col items-center">
      <Card className="w-full md:w-2/3">
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="name"
              label="Your name"
              labelPlacement="outside"
              {...register("name")}
            />

            <Input
              type="email"
              label="Your e-mail address"
              labelPlacement="outside"
              errorMessage="Please enter a valid email"
              isRequired
              {...register("emailAddress")}
            />

            <Textarea
              type="message"
              label="Message"
              labelPlacement="outside"
              errorMessage="Please enter a message"
              isRequired
              {...register("message")}
            />

            <Button
              type="submit"
              color="primary"
              variant="flat"
              className="ml-auto"
              isLoading={sentStatus === "sending"}
            >
              Send
            </Button>

            {sentStatus === "failed" && (
              <Alert
                description="Failed to send your message. Please try again later."
                color="danger"
              />
            )}

            {sentStatus === "success" && (
              <Alert
                description="Your message was sent successfully! I will get back to you as soon as possible."
                color="success"
              />
            )}
          </Form>
        </CardBody>
      </Card>

      <p className="mt-4">
        You can also contact me directly at{" "}
        <Link href={`mailto:${myEmailAddress}`}>{myEmailAddress}</Link>
      </p>
    </Container>
  );
}
