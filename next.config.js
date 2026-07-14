/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://apply.4cnmims.in/apply",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
