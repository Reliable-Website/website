import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported.
    // 'da' and 'de' are parked (2026-09-08) until the translations are up to
    // standard; their routes 302 to /en via next.config.ts. To relaunch,
    // re-add them here, in Header LANGUAGES, the middleware geo map, the
    // sitemap, the layout hreflang list, and drop the redirects.
    locales: ['en', 'no'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Detect locale from Accept-Language header
    localeDetection: true
});
