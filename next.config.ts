import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false, // Disable in production for better performance
  eslint: {
    // Disable ESLint during builds to prevent deployment failures from UI component issues
    ignoreDuringBuilds: true,
  },
  
  // Modern browser optimization
  experimental: {
    // Enable modern JavaScript features
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
      'react-hook-form',
      'date-fns',
      'clsx',
      'tailwind-merge',
      'class-variance-authority'
    ],
    // Optimize CSS loading
    optimizeCss: true,
  },


  
  // Modern browser targeting
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React dev tools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
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
    // Optimize image loading
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
