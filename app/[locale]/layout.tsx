import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const baseUrl = "https://reliablelabs.ai";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    title: {
      default: t('title'),
      template: "%s | Reliable",
    },
    description: t('description'),
    keywords: ["Reliable", "trustworthy AI", "semantic search", "retrieval", "public knowledge", "text embeddings", "Reliable AI"],
    authors: [{ name: "Reliable" }],
    creator: "Reliable",
alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "en": `${baseUrl}/en`,
        "no": `${baseUrl}/no`,
        // da/de parked 2026-09-08; restore when those locales relaunch.
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: { en: "en_US", no: "nb_NO" }[locale] ?? "en_US",
      url: `${baseUrl}/${locale}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: "Reliable",
      images: [
        {
          url: `${baseUrl}/images/LogoReliable/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Reliable",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('ogTitle'),
      description: t('ogDescription'),
      creator: "@reliable_ai",
      images: [`${baseUrl}/images/LogoReliable/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={geist.variable} suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd(locale)]),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
