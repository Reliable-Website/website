import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reliable AI - Analytical AI for Large Language Data",
    template: "%s | Reliable AI",
  },
  description: "We empower people to work smarter with information. Reliable AI brings rigorous research into practical, trustworthy solutions for legal and survey data.",
  keywords: ["AI", "Legal Tech", "NLP", "Large Language Models", "Survey Analysis", "Norwegian AI"],
  authors: [{ name: "Reliable AI Team" }],
  creator: "Reliable AI",
  icons: {
    icon: "/images/LogoReliable/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reliableai.no",
    title: "Reliable AI - Analytical AI for Large Language Data",
    description: "We empower people to work smarter with information. Reliable AI brings rigorous research into practical, trustworthy solutions.",
    siteName: "Reliable AI",
    images: [
      {
        url: "https://reliableai.no/images/LogoReliable/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reliable AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable AI - Analytical AI for Large Language Data",
    description: "We empower people to work smarter with information. Reliable AI brings rigorous research into practical, trustworthy solutions.",
    creator: "@reliable_ai",
    images: ["https://reliableai.no/images/LogoReliable/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
