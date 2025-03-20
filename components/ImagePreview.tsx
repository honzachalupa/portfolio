/* eslint-disable @next/next/no-img-element */

"use client";

import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import { Button } from "@mantine/core";

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImagePreview({
  src,
  alt,
  className,
}: ImagePreviewProps): React.ReactNode {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={className} onClick={onOpen}>
        <img src={src} alt={alt} />
      </Button>

      <Modal
        backdrop="blur"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <img src={src} alt={alt} />
        </ModalContent>
      </Modal>
    </>
  );
}
