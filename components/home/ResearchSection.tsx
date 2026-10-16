import Image from "next/image"
import { useTranslations } from "next-intl"
import { EditorialRow, EditorialHeading } from "@/components/home/EditorialRow"

// Publication titles are proper names and stay in English across locales.
// The award row has no link since the blog post it pointed to was retired.
const PUBLICATIONS: { year: string; title: string; venue: string; href?: string }[] = [
    {
        year: "2025",
        title: "ECAI 2025 · Outstanding Demo Award",
        venue: "European Conference on Artificial Intelligence",
    },
    {
        year: "2025",
        title: "Scalable and consistent few-shot classification of survey responses",
        venue: "arXiv preprint · text-embedding classification framework",
        href: "https://arxiv.org/abs/2508.19836",
    },
    {
        year: "2025",
        title: "DANTE: Deductive Content Analysis Using Text Embeddings",
        venue: "IOS Press · FAIA series",
        href: "https://ebooks.iospress.nl/doi/10.3233/FAIA251443",
    },
    {
        year: "2024",
        title: "Using Text Embeddings for Qualitative Analysis at Scale",
        venue: "Physical Review PER · peer-reviewed",
        href: "https://journals.aps.org/prper/abstract/10.1103/PhysRevPhysEducRes.20.020151",
    },
]

const label = "mb-3.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60"

// Publications as a ledger (same rhythm as the fields list above), with the
// university and supporters in a logo strip like the hero's trust row.
export function ResearchSection() {
    const t = useTranslations('Research')

    return (
        <EditorialRow id="research" num="03" label={t('label')}>
            <EditorialHeading>
                {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
            </EditorialHeading>
            <p className="mt-[18px] max-w-[36em] text-[18px] text-ink-60">{t('body')}</p>

            <div className="mt-11 border-t border-rule">
                {PUBLICATIONS.map((pub) => {
                    // keep the last word and the arrow together so the arrow never wraps alone
                    const cut = pub.title.lastIndexOf(" ") + 1
                    const inner = (
                        <>
                            <span className="pt-1 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">{pub.year}</span>
                            <div>
                                <h3 className="text-[21px] leading-snug transition-colors group-hover:text-primary" style={{ fontWeight: 450 }}>
                                    {pub.title.slice(0, cut)}
                                    <span className="whitespace-nowrap">
                                        {pub.title.slice(cut)}
                                        {pub.href && (
                                            <span className="ml-2 inline-block text-[15px] text-ink-30 transition-all group-hover:translate-x-0.5 group-hover:text-primary">↗</span>
                                        )}
                                    </span>
                                </h3>
                                <p className="mt-1 text-[15px] text-ink-60">{pub.venue}</p>
                            </div>
                        </>
                    )
                    const className = "grid grid-cols-1 items-baseline gap-1 border-b border-rule py-[22px] md:grid-cols-[150px_1fr] md:gap-6"
                    return pub.href ? (
                        <a key={pub.title} href={pub.href} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
                            {inner}
                        </a>
                    ) : (
                        <div key={pub.title} className={className}>
                            {inner}
                        </div>
                    )
                })}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-16">
                <div>
                    <span className={label}>{t('rootedIn')}</span>
                    <Image
                        src="/images/LogoCarousel/uio-logo.svg"
                        alt="University of Oslo"
                        width={312}
                        height={96}
                        className="h-11"
                        style={{ width: "auto" }}
                    />
                </div>
                <div>
                    <span className={label}>{t('supportedBy')}</span>
                    <div className="flex h-11 items-center gap-9">
                        <Image
                            src="/images/LogoCarousel/microsoft.png"
                            alt="Microsoft for Startups"
                            width={1046}
                            height={439}
                            className="h-8 opacity-60 transition-opacity hover:opacity-100"
                            style={{ width: "auto" }}
                        />
                        {/* Anthropic wordmark typeset pending real logo file / permission */}
                        <span className="text-xl tracking-[0.03em] text-foreground opacity-60 transition-opacity hover:opacity-100" style={{ fontWeight: 550 }}>
                            ANTHROPIC
                        </span>
                    </div>
                </div>
            </div>
        </EditorialRow>
    )
}
