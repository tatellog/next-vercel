/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
