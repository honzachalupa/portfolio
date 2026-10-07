import type { DeviceType } from "@/utils/deviceTypes";

export interface AppleAppStoreScreenshot {
  url: string;
  width: number;
  height: number;
  deviceType: DeviceType;
}

export interface AppleAppStoreApp {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  url: string;
  icon?: string;
  screenshots: AppleAppStoreScreenshot[];
  supportedDevices: DeviceType[];
}
