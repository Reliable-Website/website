import { MetadataRoute } from "next";

const baseUrl = "https://reliablelabs.ai";
const locales = ["en", "no", "da", "de"];
const pages = ["", "/blog", "/contact", "/team", "/privacy", "/impressum", "/datenschutz"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${baseUrl}/${locale}${page}`])
        ),
      },
    });
  }

  return entries;
}
