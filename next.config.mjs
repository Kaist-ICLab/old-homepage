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
    
  }
  if (phase === PHASE_PRODUCTION_BUILD | phase === PHASE_EXPORT) {
    console.log("This is Deployment Server!")
    baseconfig["output"] = "export"
    baseconfig['images'] = {
      deviceSizes: [180, 640, 750, 828, 900, 1080, 1200, 1920, 2048, 3840],
      loader: 'custom',
      loaderFile: "./imageLoader.js",
    }
  }
  return baseconfig
};

export default nextConfig;
