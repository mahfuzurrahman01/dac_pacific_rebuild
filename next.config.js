/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com','www.smbtex.com','images.unsplash.com','img.freepik.com','media.istockphoto.com','trumpcrownhk.com'],
    unoptimized:true,
  },
  output: 'export',
}
module.exports = nextConfig
