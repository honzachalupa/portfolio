"use client";

import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "../Container";

interface FormValues {
  name?: string;
  emailAddress: string;
  message: string;
  honeypot?: string; // Hidden field to catch bots
}

export function ContactFormClient({
  headline,
  emailAddress,
}: {
  headline: string | null;
  emailAddress: string;
}): React.ReactNode {
  const [sentStatus, setSentStatus] = useState<"sending" | "success" | "failed">();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setSentStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSentStatus(response.ok ? "success" : "failed");
    } catch {
      setSentStatus("failed");
    }
  };

  return (
    <Container headline={headline} className="flex flex-col items-center">
      <Card className="w-full md:w-2/3">
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Honeypot field - hidden from users but visible to bots */}
            <input
              type="text"
              {...register("honeypot")}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
                pointerEvents: "none",
              }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <Input type="text" label="Your name" labelPlacement="outside" {...register("name")} />

            <Input
              type="email"
              label="Your e-mail address"
              labelPlacement="outside"
              errorMessage="Please enter a valid email"
              isRequired
              {...register("emailAddress")}
            />

            <Textarea
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
              isDisabled={sentStatus === "sending"}
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
        <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
      </p>
    </Container>
  );
}
