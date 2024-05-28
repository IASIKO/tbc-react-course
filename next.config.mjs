import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "preview.colorlib.com",
      },
      {
        protocol: "https",
        hostname: "cdn.caskers.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
