/** @type {import("next").NextConfig} */

const config = require("./config.js");

const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    reactStrictMode: true,
    i18n: config.localization,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.graphassets.com",
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
