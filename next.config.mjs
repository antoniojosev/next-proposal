/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Sin basePath para Netlify - funcionará en el dominio raíz
};

export default nextConfig;
