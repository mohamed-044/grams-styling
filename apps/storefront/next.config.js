/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.gramsstyling.co.uk" },
      { protocol: "https", hostname: "gramsstyling.co.uk" },
    ],
  },
};

module.exports = nextConfig;
