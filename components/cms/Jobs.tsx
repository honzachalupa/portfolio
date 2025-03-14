"use client";

import { Job } from "@/hygraph/_generated/graphql";
import clsx from "clsx";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

interface JobsProps {
  headline: string;
  jobs: Job[];
}

export function Jobs({ headline, jobs }: JobsProps) {
  const [selectedItemId, setSelectedItemId] = useState<string>("edhance");

  const selectedItem = useMemo(
    () => jobs.find(({ id }) => id === selectedItemId) || jobs[0],
    [jobs, selectedItemId]
  );

  return (
    <Container headline={headline}>
      <div className="flex">
        <div className="mr-10 basis-0">
          {jobs.map(({ id, client }) => (
            <button
              key={id}
              className={clsx(
                "w-full whitespace-nowrap py-2 text-left font-mono text-sm hover:text-white",
                {
                  "text-primary-400": id === selectedItemId,
                }
              )}
              onClick={() => setSelectedItemId(id)}
            >
              {client!.name}
            </button>
          ))}
        </div>

        {selectedItem && (
          <ProjectCard
            title={
              <div className="flex flex-row justify-between">
                <div>
                  <span className="text-foreground">
                    {selectedItem.title} @{" "}
                  </span>
                  <a
                    href={selectedItem.client!.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-400"
                  >
                    {selectedItem.client!.name}
                  </a>
                </div>

                {selectedItem.client!.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedItem.client!.logo.url}
                    alt={`${selectedItem.client!.name} logo`}
                    className="w-32 object-contain"
                  />
                )}
              </div>
            }
            subtitle={
              <>
                {dayjs(selectedItem.dateFrom).format("MMMM YYYY")} -{" "}
                {selectedItem.dateTo
                  ? dayjs(selectedItem.dateTo).format("MMMM YYYY")
                  : "Present"}
              </>
            }
            description={
              <MarkdownRenderer>
                {selectedItem.description.markdown}
              </MarkdownRenderer>
            }
          />
        )}
      </div>
    </Container>
  );
}
