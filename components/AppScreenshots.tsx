"use client";

import { AppleAppStoreScreenshot } from "@/app/api/apple-app-store/route";
import { DeviceType, sortByDeviceType } from "@/utils/deviceTypes";
import { Tab, Tabs } from "@heroui/tabs";
import clsx from "clsx";
import { ImageWithPreview } from "./ImageWithPreview";

interface AppScreenshotsProps {
  screenshots: AppleAppStoreScreenshot[];
  className?: string;
}

export function AppScreenshots({ screenshots, className }: AppScreenshotsProps): React.ReactNode {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  // Group screenshots by device type
  const groupedScreenshots = screenshots.reduce<Record<string, AppleAppStoreScreenshot[]>>(
    (acc, screenshot) => {
      const deviceType = screenshot.deviceType;

      if (!acc[deviceType]) {
        acc[deviceType] = [];
      }

      acc[deviceType].push(screenshot);

      return acc;
    },
    {},
  );

  // Sort device types using the shared function
  const sortedDeviceTypes = sortByDeviceType(
    Object.keys(groupedScreenshots).map((deviceType) => ({ deviceType: deviceType as DeviceType })),
  ).map((item) => item.deviceType);

  const tabs = sortedDeviceTypes.map((deviceType) => (
    <Tab key={deviceType} title={deviceType}>
      <div className="flex flex-row gap-4 overflow-x-auto pb-5 -mb-5 snap-x">
        {groupedScreenshots[deviceType].map((screenshot, index) => (
          <ImageWithPreview
            key={index}
            image={screenshot}
            alt={`${deviceType} screenshot ${index + 1}`}
            className={clsx(
              "h-[30vh] snap-start flex-shrink-0 border border-gray-200 dark:border-none",
              deviceType === "Apple Watch" ? "rounded-[50px]" : "rounded-xl",
            )}
          />
        ))}
      </div>
    </Tab>
  ));

  return (
    <div className={clsx("w-full", className)}>
      <Tabs>{tabs}</Tabs>
    </div>
  );
}
