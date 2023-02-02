/** @type {import("next").NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.supabase.co",
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
