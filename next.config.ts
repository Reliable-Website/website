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
      // Pages retired with the legal site (2026-10, kept on the legal-site
      // branch). Temporary so they can come back without cached redirects.
      { source: '/:locale(en|no)/blog/:path*', destination: '/:locale', permanent: false },
      { source: '/:locale(en|no)/contact', destination: '/:locale', permanent: false },
      { source: '/:locale(en|no)/datenschutz', destination: '/:locale', permanent: false },
      // Short addresses for the legal documents, which live under /legal. /privacy used to be
      // a draft policy of its own; it now goes to the confirmed policy on /legal.
      { source: '/:locale(en|no)/:doc(terms|data-processing-agreement|subprocessors|security|impressum|privacy)', destination: '/:locale/legal/:doc', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
