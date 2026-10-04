import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/devarchit-web"); empty for local dev or a custom domain.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
