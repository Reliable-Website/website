export const BASE_URL = "https://reliablelabs.ai"

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Reliable",
    legalName: "Reliable AI AS",
    alternateName: "Reliable AI",
    url: BASE_URL,
    logo: `${BASE_URL}/images/LogoReliable/reliableai.png`,
    taxID: "934 343 786",
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
        name: "Reliable",
        url: BASE_URL,
        inLanguage: { en: "en", no: "nb" }[locale] ?? "en",
        publisher: { "@id": `${BASE_URL}/#organization` },
    }
}
