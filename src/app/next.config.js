/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://beta.4cnmims.in/apply",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
