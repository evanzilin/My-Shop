/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.w3.org"],
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
      ignored: [
        '**/node_modules',
        '**/.next',
        '**/D:/DumpStack.log.tmp',
        '**/D:/pagefile.sys',
      ],
    };
    return config;
  },
};

module.exports = nextConfig;
