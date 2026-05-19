import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from the /assets folder
  images: {
    unoptimized: true, // use for local SVGs and self-hosted assets
  },
};

export default nextConfig;
