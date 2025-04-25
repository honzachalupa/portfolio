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
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["@heroui"],
};

export default nextConfig;
