/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION",
    reactStrictMode: true,
    swcMinify: true,
  },
});

// const nextConfig = {
  
// }

// module.exports = nextConfig
