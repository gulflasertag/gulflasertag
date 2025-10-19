import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
    localeDetection: false, // Set to true if you want automatic locale detection
  },
};

export default nextConfig;
