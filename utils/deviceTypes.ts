export type DeviceType = "iPhone" | "iPad" | "Mac" | "Apple Watch";

export const DEVICE_TYPE_ORDER: DeviceType[] = ["iPhone", "iPad", "Mac", "Apple Watch"];

export function sortByDeviceType<T extends { deviceType: DeviceType }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aIndex = DEVICE_TYPE_ORDER.indexOf(a.deviceType);
    const bIndex = DEVICE_TYPE_ORDER.indexOf(b.deviceType);

    // If both types are in our order list, sort by their index
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    // If only a is in our order list, it comes first
    if (aIndex !== -1) {
      return -1;
    }
    // If only b is in our order list, it comes first
    if (bIndex !== -1) {
      return 1;
    }
    // If neither is in our order list, sort alphabetically
    return a.deviceType.localeCompare(b.deviceType);
  });
}
