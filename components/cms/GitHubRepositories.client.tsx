"use client";

import githubApi, { GithubReadme, GithubRepository } from "@/actions/github";
import { Button } from "@heroui/button";
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
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard } from "../ProjectCard";

interface GitHubRepositories_Client {
  repositories: GithubRepository[];
}

export function GitHubRepositories_Client({
  repositories,
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

  return (
    <>
      {repositories?.map(
        ({ id, name, url, websiteUrl, description, topics }) => {
          return (
            <ProjectCard
              key={id}
              title={name}
              subtitle={topics?.join(", ")}
              descriptionMarkdown={description}
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
                showAnchorIcon
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
