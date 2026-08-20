/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    '192.168.1.2',
    '192.168.1.10',
  ],

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
