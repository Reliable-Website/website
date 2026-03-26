import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const countryToLocale: Record<string, string> = {
    NO: 'no',
    DK: 'da',
    DE: 'de',
    AT: 'de',
    CH: 'de',
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // Only apply geo-detection on the root path (first visit)
    // Once a user has a locale in the URL, next-intl handles it
    const country = request.headers.get('x-vercel-ip-country') || '';
    const detectedLocale = countryToLocale[country] || 'en';

    // Set the Accept-Language header to hint next-intl's locale detection
    const headers = new Headers(request.headers);
    if (!headers.get('accept-language')?.includes(detectedLocale)) {
        headers.set('accept-language', detectedLocale);
    }

    const newRequest = new NextRequest(request.url, {
        headers,
        method: request.method,
    });

    return intlMiddleware(newRequest);
}

export const config = {
    matcher: ['/', '/(no|en|da|de)/:path*']
};
