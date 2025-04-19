"use client";

import githubApi, { GithubReadme, GithubRepository } from "@/actions/github";
import { HygraphGetTechnologiesData } from "@/actions/hygraph/technologies";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Icon } from "../Icon";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

interface GitHubRepositories_Client {
  repositories: GithubRepository[];
  technologies: HygraphGetTechnologiesData | null;
}

export function GitHubRepositories_Client({
  repositories,
  technologies,
}: GitHubRepositories_Client): React.ReactNode {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRepositoryName, setSelectedRepositoryName] =
    useState<string>();
  const [selectedRepositoryReadme, setSelectedRepositoryReadme] =
    useState<GithubReadme>();

  async function fetchReadme(name: string | null): Promise<void> {
    if (!name) return;

    const data = await githubApi.getReadme(name);

    setSelectedRepositoryReadme(data);
  }

  useEffect(() => {
    if (selectedRepositoryName) {
      fetchReadme(selectedRepositoryName);
    }
  }, [selectedRepositoryName]);

  const sanitizeTechnologyName = (value: string): string =>
    value.toLowerCase().replace(/[\s\.]/g, "");

  return (
    <>
      {repositories?.map(
        ({ id, name, url, websiteUrl, description, topics }) => {
          const topicsToTechnologies = topics?.map((topic) => {
            const technology = technologies?.find(
              (technology) =>
                sanitizeTechnologyName(topic) ===
                sanitizeTechnologyName(technology.name)
            );

            if (technology) {
              return technology;
            }

            return {
              name: topic,
              url: null,
              iconName: null,
              color: null,
            };
          });

          return (
            <ProjectCard
              key={id}
              title={name}
              descriptionMarkdown={description}
              footer={
                <div className="flex flex-wrap gap-2 mt-2 mb-1">
                  {topicsToTechnologies?.map(
                    ({ name, url, iconName, color }) => (
                      <Chip
                        key={name}
                        as={Link}
                        href={url}
                        isDisabled={!url}
                        variant="flat"
                        startContent={
                          iconName ? (
                            <Icon name={iconName} className="p-1" />
                          ) : null
                        }
                        style={{ color: color?.hex }}
                      >
                        {name}
                      </Chip>
                    )
                  )}
                </div>
              }
              actions={[
                {
                  label: "View readme",
                  onClick: (): void => {
                    setSelectedRepositoryName(name);
                    onOpen();
                  },
                  icon: <FaGithub />,
                },
                { label: "View source-code", url: url, icon: <FaGithub /> },
                !!websiteUrl && {
                  label: "Visit",
                  url: websiteUrl,
                  variant: "solid",
                },
              ]}
              className="basis-[calc(50%-(12px)/2)]"
            />
          );
        }
      )}

      <Modal
        size={!selectedRepositoryReadme?.content ? "2xl" : "5xl"}
        backdrop="blur"
        className="max-h-[70vh]"
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange();
          setSelectedRepositoryName(undefined);
          setSelectedRepositoryReadme(undefined);
        }}
      >
        <ModalContent>
          {!selectedRepositoryReadme?.content && (
            <ModalHeader>
              <h1 className="text-3xl font-medium text-primary">
                {selectedRepositoryName}
              </h1>
            </ModalHeader>
          )}

          <ModalBody className="overflow-scroll">
            {selectedRepositoryReadme ? (
              selectedRepositoryReadme.content ? (
                <ScrollShadow>
                  <MarkdownRenderer className="py-6">
                    {selectedRepositoryReadme.content}
                  </MarkdownRenderer>
                </ScrollShadow>
              ) : (
                <p className="mb-3">
                  Readme for this repository is not available
                </p>
              )
            ) : (
              <Spinner variant="simple" label="Loading..." />
            )}
          </ModalBody>

          {selectedRepositoryReadme?.content && (
            <ModalFooter>
              <Button
                as={Link}
                href={selectedRepositoryReadme.url}
                variant="bordered"
                color="primary"
                startContent={<FaGithub />}
                isExternal
              >
                View on GitHub
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
