import { blogPosts } from "@/lib/blog-data"

export const BASE_URL = "https://reliablelabs.ai"

// English dates ("5 June 2026") parse reliably and exist for every slug;
// Norwegian posts share slugs with their English counterparts.
const dateBySlug = Object.fromEntries(
    blogPosts.map((p) => [p.slug, new Date(p.date)])
)

export function publishedDate(slug: string): Date | undefined {
    const d = dateBySlug[slug]
    return d && !isNaN(d.getTime()) ? d : undefined
}

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Reliable AI",
    url: BASE_URL,
    logo: `${BASE_URL}/images/LogoReliable/reliableai.png`,
    email: "hei@reliableai.no",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Akersbakken 30",
        postalCode: "0172",
        addressLocality: "Oslo",
        addressCountry: "NO",
    },
}

export function websiteJsonLd(locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Reliable AI",
        url: BASE_URL,
        inLanguage: { en: "en", no: "nb", da: "da", de: "de" }[locale] ?? "en",
        publisher: { "@id": `${BASE_URL}/#organization` },
    }
}
