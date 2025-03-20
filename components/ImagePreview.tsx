/* eslint-disable @next/next/no-img-element */

"use client";

import { Button } from "@heroui/button";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";

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
      <Button className={className} onPress={onOpen}>
        <img src={src} alt={alt} />
      </Button>

      <Modal
        size="5xl"
        backdrop="blur"
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
