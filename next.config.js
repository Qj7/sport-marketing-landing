/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sport-marketing-landing' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sport-marketing-landing' : '',
}

module.exports = nextConfig

