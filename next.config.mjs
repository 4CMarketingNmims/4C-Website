/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/wnr',
        destination:
          'https://unstop.com/college-fests/wings-and-roots-50-narsee-monjee-institute-of-management-studies-nmims-mumbai-498354',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
