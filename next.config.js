/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngall.com',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sport-marketing-landing/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sport-marketing-landing' : '',
}

module.exports = nextConfig

