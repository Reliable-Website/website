import { MetadataRoute } from "next";

const baseUrl = "https://reliablelabs.ai";
const locales = ["en", "no"];
const pages = ["", "/team", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}/en${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${page}`])
      ),
    },
  }));
}
