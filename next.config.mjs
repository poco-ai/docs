import { createMDX } from "fumadocs-mdx/next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const withMDX = createMDX();

const basePath = process.env.PAGES_BASE_PATH || "";
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
};

export default withMDX(config);

if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then((openNext) =>
    openNext.initOpenNextCloudflareForDev(),
  );
}
