import { Box, LoadingOverlay } from "@mantine/core";

export default function Loading(): React.ReactNode {
  return (
    <Box pos="relative" className="w-full h-full border-r-red-600">
      <LoadingOverlay zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
    </Box>
  );
}
