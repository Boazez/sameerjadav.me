const { get } = require("@vercel/edge-config");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects() {
    try {
      return get("redirects");
    } catch {
      return [];
    }
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
