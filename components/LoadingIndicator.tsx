import { Spinner } from "@heroui/spinner";

export function LoadingIndicator(): React.ReactNode {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <Spinner variant="simple" label="Loading..." />
    </div>
  );
}
