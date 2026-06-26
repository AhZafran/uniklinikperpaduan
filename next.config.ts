import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve the pre-compressed images as-is — no Vercel image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
