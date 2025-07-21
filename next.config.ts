import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
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
  },
  
  // Modern browser targeting
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize for modern browsers
  webpack: (config, { dev, isServer }) => {
    // Modern browser targeting
    if (!dev && !isServer) {
      config.target = ['web', 'es2020'];
    }
    
    // Optimize bundle splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      },
    };
    
    return config;
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
