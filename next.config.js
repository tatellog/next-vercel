const isProduction = process.env.NODE_ENV === 'production'
const pageExtensions = ['ts', 'tsx', 'js', 'jsx'].reduce((acc, ext) => {
  if (!isProduction) {
    acc.push(`dev.${ext}`)
  }
  acc.push(ext)
  return acc
}, [])

/** @type {import('next').NextConfig} */

const secondaryNextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const skipEslintTypescript = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

const nextConfig = {
  pageExtensions,
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
  ...skipEslintTypescript,
  ...secondaryNextConfig,
}

module.exports = nextConfig
module.exports = {
  images: {
    domains: [''],
  },
}
