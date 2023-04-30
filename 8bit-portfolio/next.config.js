const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@data'] = path.join(__dirname, 'public-data');
    return config;
  }
};

module.exports = nextConfig;
