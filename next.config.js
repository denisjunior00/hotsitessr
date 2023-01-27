/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // runtime: "experimental-edge",
    appDir: true,
  }   
 };
 
module.exports = nextConfig;
