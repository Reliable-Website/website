// Names, links and images on the homepage. The copy around them lives in messages (Home).

// Firm logos cleared for public use via signed contracts (founder, 2026-06-12).
// w/ih are the files' intrinsic sizes (keeps the aspect ratio); h sets the display height.
export const FIRMS = [
    { src: "/images/LogoCarousel/kromann-reumert.svg", alt: "Kromann Reumert", w: 148, ih: 28, h: 21 },
    { src: "/images/LogoCarousel/haavind.png", alt: "Haavind", w: 3370, ih: 766, h: 16 },
    { src: "/images/LogoCarousel/selmer.png", alt: "Selmer", w: 1514, ih: 380, h: 16 },
    { src: "/images/LogoCarousel/kvale.svg", alt: "Kvale", w: 200, ih: 40, h: 13 },
    { src: "/images/LogoCarousel/odin.png", alt: "Odin Prosjekt", w: 2942, ih: 1200, h: 21 },
]

export const QUOTES = [
    { key: "karen", name: "Karen Anne Rekkedal", role: "Partner, Advokatfirmaet Selmer", img: "/images/Portraits/karen.jpg" },
    { key: "stian", name: "Stian Hultin Oddbjørnsen", role: "Partner, Advokatfirmaet Haavind", img: "/images/Portraits/stian.jpg" },
] as const

export const PRESS = [
    { key: "digitalnorway", outlet: "Digital Norway", href: "https://digitalnorway.com/aktuelt/de-har-fatt-ki-til-a-slutte-a-lyve" },
    { key: "finansavisen", outlet: "Finansavisen", href: "https://www.finansavisen.no/teknologi/2026/06/10/8355665/reliable-ai-har-funnet-en-vei-rundt-problemet-der-sprakmodeller-hallusinerer" },
    { key: "universitas", outlet: "Universitas", href: "https://www.universitas.no/innovasjon-norge-kunstig-intelligens-reliable-ai/skapte-prisvinnende-ki-verktoy-ved-siden-av-studiene/398420" },
] as const

// Publication titles and venues are proper names and stay in English in both languages.
export const PUBLICATIONS: { year: string; title: string; venue: string; href?: string }[] = [
    { year: "2025", title: "Outstanding Demo Award", venue: "ECAI 2025, European Conference on Artificial Intelligence" },
    { year: "2025", title: "Scalable and consistent few-shot classification of survey responses", venue: "arXiv preprint", href: "https://arxiv.org/abs/2508.19836" },
    { year: "2025", title: "DANTE: Deductive Content Analysis Using Text Embeddings", venue: "IOS Press, FAIA series", href: "https://ebooks.iospress.nl/doi/10.3233/FAIA251443" },
    { year: "2024", title: "Using Text Embeddings for Qualitative Analysis at Scale", venue: "Physical Review PER, peer-reviewed", href: "https://journals.aps.org/prper/abstract/10.1103/PhysRevPhysEducRes.20.020151" },
]

// `bio` keys into Team.descriptions, shared with the /team page.
export type Person = { bio: string; name: string; role: string; img: string; email?: string }

export const TEAM: { group: "founders" | "design" | "board"; people: Person[] }[] = [
    {
        group: "founders",
        people: [
            { bio: "markus", name: "Markus Kreutzer", role: "ceo", img: "/images/Portraits/markus.jpg", email: "markus@reliableai.no" },
            { bio: "halvor", name: "Halvor Tyseng", role: "cto", img: "/images/Portraits/halvor.jpg", email: "halvor@reliableai.no" },
            { bio: "jonas", name: "Jonas Timmann Mjaaland", role: "cpo", img: "/images/Portraits/jonas.jpg", email: "jonas@reliableai.no" },
            { bio: "torole", name: "Tor Ole Bigton Odden", role: "cofounder", img: "/images/Portraits/tor.jpg", email: "torole@reliableai.no" },
            { bio: "anders", name: "Anders Malthe-Sørenssen", role: "cofounder", img: "/images/Portraits/anders.jpg", email: "anders@reliableai.no" },
        ],
    },
    {
        group: "design",
        people: [{ bio: "martine", name: "Martine Goto", role: "designer", img: "/images/Portraits/martine.jpg" }],
    },
    {
        group: "board",
        people: [
            { bio: "larspetter", name: "Lars-Petter Windelstad Kjos", role: "board", img: "/images/Portraits/larspetter.jpg" },
            { bio: "mathilde", name: "Mathilde Fiksdahl", role: "board", img: "/images/Portraits/mathilde.jpg" },
        ],
    },
]

// In list order; the portrait that follows the cursor is picked by index.
export const PEOPLE = TEAM.flatMap((g) => g.people)

export const ADDRESS = "Akersbakken 30, 0172 Oslo"
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Akersbakken+30%2C+0172+Oslo"
