/** @type {import('next').NextConfig} */
const nextConfig = {
  // this is usually true
  reactStrictMode: true,
  env: {
    app_name: 'International Conference on Advanced Computing Systems',
  },
  images: {
    domains: ["flagsapi.com"],
  },
}

module.exports = nextConfig
