/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/Pet-Adaption-Figma',
  assetPrefix: '/Pet-Adaption-Figma/',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig