/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ideas',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
