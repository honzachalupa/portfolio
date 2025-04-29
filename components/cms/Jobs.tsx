import { Jobs as JobsProps } from "@/actions/hygraph/_generated/graphql";
import dayjs from "dayjs";
import Image from "next/image";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

function formatDates(dateFrom: string, dateTo: string | null): string {
  return [
    dayjs(dateFrom).format("MMMM YYYY"),
    dateTo ? dayjs(dateTo).format("MMMM YYYY") : "Present",
  ].join(" - ");
}

export function Jobs({ headline, jobs }: JobsProps): React.ReactNode {
  jobs = jobs.sort((a, b) => dayjs(b.dateFrom).diff(a.dateFrom));

  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {jobs.map(({ id, title, client, description, dateFrom, dateTo }) => {
          return (
            <ProjectCard
              key={id}
              title={
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div>
                      <span className="text-foreground">{title} @ </span>
                      <a
                        href={client!.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        {client!.name}
                      </a>
                    </div>

                    <p className="text-sm font-normal text-default-500">
                      {formatDates(dateFrom, dateTo)}
                    </p>
                  </div>

                  {client?.logo && (
                    <Image
                      src={client.logo.url}
                      alt={client.name}
                      sizes="100px"
                      width={client.logo.width ?? 0}
                      height={client.logo.height ?? 30}
                      unoptimized={!client.logo.width} // Workaround to handle SVG images
                      className="w-32 object-contain"
                    />
                  )}
                </div>
              }
              description={<MarkdownRenderer>{description.markdown}</MarkdownRenderer>}
            />
          );
        })}
      </div>
    </Container>
  );
}
