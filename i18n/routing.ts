import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'no', 'da', 'de'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Detect locale from Accept-Language header
    localeDetection: true
});
