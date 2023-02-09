/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/join',
        destination: `https://discord.gg/5Seqp94RqR`,
        permanent: true,
      },
    ];
  },
};
