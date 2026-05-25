import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: "/notes",
        destination: `https://nusqcc-quartz.vercel.app/`,
      },
      {
        source: "/notes/:path*",
        destination: `https://nusqcc-quartz.vercel.app/:path*`,
      },
    ];
  },
};

export default nextConfig;
