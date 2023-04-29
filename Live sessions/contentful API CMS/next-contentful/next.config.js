/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    CONTENTFUL_SPACE_ID: 'piuof7tj3df1',
    CONTENTFUL_ENVIRONMENT : "master",
  },
};

module.exports = nextConfig
