import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Common portfolio redirects
      {
        source: '/portfolio',
        destination: '/#case-studies',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/#case-studies',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/#case-studies',
        permanent: true,
      },
      {
        source: '/about-me',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/about-me/',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/expertise',
        destination: '/#trust',
        permanent: true,
      },
      {
        source: '/why-me',
        destination: '/#trust',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/#testimonials',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/#testimonials',
        permanent: true,
      },
      {
        source: '/contact-me',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/hire-me',
        destination: '/#contact',
        permanent: true,
      },
      // Legacy or common misspellings
      {
        source: '/resume',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/',
        permanent: true,
      },
      // Common image/asset paths that should redirect to home
      {
        source: '/images/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/assets/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/uploads/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/files/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
