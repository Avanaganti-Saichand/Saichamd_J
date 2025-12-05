const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/Saichamd_J" : "",
  assetPrefix: isProd ? "/Saichamd_J" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
