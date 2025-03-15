import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
