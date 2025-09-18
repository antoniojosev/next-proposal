/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/next',  // Esto hará que funcione en antoniovila.dev/next
  assetPrefix: '/next'
};

export default nextConfig;
