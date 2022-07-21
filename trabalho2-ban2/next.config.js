/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  api: {
    externalResolver: true,
  },
  redirects: () => [
    {
      source: "/",
      destination: "/home",
      permanent: true
    }
  ]
}

module.exports = nextConfig
