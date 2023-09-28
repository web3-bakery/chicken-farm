/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  router: {
    base: process.env.BASE_PATH || "",
  },
};

module.exports = nextConfig;
