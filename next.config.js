/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    images: {
      unoptimized: true,
    },
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
module.exports = {
  images: {
    domains: [''],
  },
}
