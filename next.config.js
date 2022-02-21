/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'],
  },
};

module.exports = withYaml({
  nextConfig,
});
