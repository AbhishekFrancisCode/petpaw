/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost",
      "pawtful.com"
    ],
    remotePatterns: [
      {
        hostname: "",
        hostname: ""
      }
    ]
  },
  experimental: {
    nextScriptWorkers: true
  }
};

module.exports = nextConfig;
