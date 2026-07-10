import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
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
      template: "%s | Reliable AI",
    },
    description: t('description'),
    keywords: ["Reliable", "procurement law", "KOFA", "Klagenævnet for Udbud", "Vergabekammer", "legal search", "semantic search", "Legal Tech", "Reliable AI"],
    authors: [{ name: "Reliable AI Team" }],
    creator: "Reliable AI",
alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "en": `${baseUrl}/en`,
        "no": `${baseUrl}/no`,
        "da": `${baseUrl}/da`,
        "de": `${baseUrl}/de`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: { en: "en_US", no: "nb_NO", da: "da_DK", de: "de_DE" }[locale] ?? "en_US",
      url: `${baseUrl}/${locale}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: "Reliable AI",
      images: [
        {
          url: `${baseUrl}/images/LogoReliable/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Reliable AI Logo",
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
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
