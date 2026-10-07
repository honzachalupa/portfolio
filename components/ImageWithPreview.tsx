"use client";

import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import clsx from "clsx";
import Image from "next/image";
import type { AppleAppStoreScreenshot } from "@/actions/appleAppStore/types";

interface ImageWithPreviewProps {
  image: AppleAppStoreScreenshot;
  alt: string;
  className?: string;
}

export function ImageWithPreview({
  image,
  alt,
  className,
}: ImageWithPreviewProps): React.ReactNode {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        type="button"
        aria-label={`Preview ${alt}`}
        className={clsx(
          "cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-primary",
          className,
        )}
        onClick={onOpen}
      >
        <Image
          src={image.url}
          alt={alt}
          width={image.width}
          height={image.height}
          className="h-full w-auto object-cover"
        />
      </button>

      <Modal backdrop="blur" size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-0 pt-10 w-fit h-fit">
          <Image
            src={image.url}
            alt={alt}
            width={image.width}
            height={image.height}
            className="max-h-[80vh] w-auto"
          />
        </ModalContent>
      </Modal>
    </>
  );
}
