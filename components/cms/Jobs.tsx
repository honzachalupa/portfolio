"use client";

import { Job } from "@/hygraph/_generated/graphql";
import dayjs from "dayjs";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

interface JobsProps {
  headline: string;
  jobs: Job[];
}

export function Jobs({ headline, jobs }: JobsProps) {
  jobs = jobs.sort((a, b) => dayjs(b.dateFrom).diff(a.dateFrom));

  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {jobs.map(({ id, title, client, description, dateFrom, dateTo }) => (
          <ProjectCard
            key={id}
            title={
              <div className="flex flex-row justify-between">
                <div>
                  <span className="text-foreground">{title} @ </span>
                  <a
                    href={client!.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-400"
                  >
                    {client!.name}
                  </a>
                </div>

                {client!.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client!.logo.url}
                    alt={`${client!.name} logo`}
                    className="w-32 object-contain"
                  />
                )}
              </div>
            }
            subtitle={
              <>
                {dayjs(dateFrom).format("MMMM YYYY")} -{" "}
                {dateTo ? dayjs(dateTo).format("MMMM YYYY") : "Present"}
              </>
            }
            description={
              <MarkdownRenderer>{description.markdown}</MarkdownRenderer>
            }
          />
        ))}
      </div>
    </Container>
  );
}
