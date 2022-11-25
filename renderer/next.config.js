/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
};
