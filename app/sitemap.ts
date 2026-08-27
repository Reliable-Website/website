import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { publishedDate } from "@/lib/seo";

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

  // Blog posts: content exists in en and no (da/de serve the English text).
  for (const post of blogPosts) {
    entries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: publishedDate(post.slug) ?? new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          no: `${baseUrl}/no/blog/${post.slug}`,
        },
      },
    });
  }

  return entries;
}
