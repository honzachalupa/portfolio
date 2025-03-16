import { Spinner } from "@heroui/spinner";

export default function Loading(): React.ReactNode {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Spinner variant="simple" label="Loading..." />
    </div>
  );
}
