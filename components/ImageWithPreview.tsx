"use client";

import { AppleAppStoreScreenshot } from "@/app/api/apple-app-store/route";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import clsx from "clsx";
import Image from "next/image";

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
      <div className={clsx("cursor-pointer overflow-hidden", className)} onClick={onOpen}>
        <Image
          src={image.url}
          alt={alt}
          width={image.width}
          height={image.height}
          className="h-full w-auto object-cover"
        />
      </div>

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
