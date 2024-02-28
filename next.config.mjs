/** @type {import('next').NextConfig} */
import { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } from "next/constants.js"

const nextConfig = (phase, { defaultConfig }) => {
  const baseconfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
    output: 'export'
  }
  if (phase === PHASE_PRODUCTION_BUILD | phase === PHASE_EXPORT) {
    console.log("This is Deployment Server!")
    baseconfig['images'] = {
      deviceSizes: [180, 640, 750, 828, 900, 1080, 1200, 1920, 2048, 3840],
      loader: 'imgix',
      path: 'https://ickaist.imgix.net/',
    }
  }
  return baseconfig
};

export default nextConfig;
