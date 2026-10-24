/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'd-a-b-digitals.vercel.app',
          },
        ],
        destination: 'https://dnbdigitals.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
