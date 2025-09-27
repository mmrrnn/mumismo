import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export' as const,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};

export default withNextIntl(nextConfig);
