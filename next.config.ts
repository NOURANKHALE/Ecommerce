/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**", // Allow all paths under the domain
      },
    ],
  },
};

module.exports = nextConfig;
