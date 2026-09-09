import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // da/de are parked (2026-09-08). Temporary redirects so indexed and
      // shared links keep working; remove when the locales relaunch.
      { source: '/da/:path*', destination: '/en/:path*', permanent: false },
      { source: '/de/:path*', destination: '/en/:path*', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
