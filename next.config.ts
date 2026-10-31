import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/board/:path*", destination: "/rooms", permanent: true },
      { source: "/panels", destination: "/rooms", permanent: true },
      { source: "/admin/panels", destination: "/rooms", permanent: true },
      { source: "/admin/members", destination: "/rooms", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
