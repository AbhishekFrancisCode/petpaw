/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "pawtful.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io"
      }
    ]
  },
  experimental: {
    nextScriptWorkers: true
  }
};

module.exports = nextConfig;
