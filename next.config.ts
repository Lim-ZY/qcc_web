import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: '/notes',
        destination: `${process.env.QUARTZ_URL}/`,
      },
      {
        source: '/notes/:path*',
        destination: `${process.env.QUARTZ_URL}/:path*`
      },
    ];
  },
};

export default nextConfig;
