/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  reactStrictMode: true,
  swcMinify: true,
  runtime: "experimental-edge",
  experimental: {    
    appDir: true,
  }   
 };
  
module.exports = nextConfig;