/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/sport-marketing-landing' : '',
  },
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

