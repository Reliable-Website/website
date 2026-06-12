import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

// Publication titles are proper names and stay in English across locales.
const PUBLICATIONS = [
    {
        year: "2025",
        title: "ECAI 2025 — Outstanding Demo Award",
        venue: "European Conference on Artificial Intelligence",
        href: "/blog/ecai-2025-outstanding-demo-award",
        internal: true,
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

export function ResearchSection() {
    const t = useTranslations('PResearch')

    return (
        <section id="research" className="border-t border-rule bg-white py-24">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-11 px-6 md:grid-cols-2 md:gap-[72px]">
                <div>
                    <span className="sec-num">{t('secNum')}</span>
                    <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                        {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                    </h2>
                    <p className="mt-5 text-[17px] text-ink-60">{t('body')}</p>
                    <Image
                        src="/images/LogoCarousel/uio-logo.svg"
                        alt="University of Oslo"
                        width={169}
                        height={52}
                        className="mt-8 h-[52px] w-auto"
                    />
                    <div className="mt-9 border-t border-rule-soft pt-6">
                        <h3 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground">
                            {t('supportedBy')}
                        </h3>
                        <div className="flex items-center gap-9">
                            <Image
                                src="/images/LogoCarousel/microsoft.png"
                                alt="Microsoft for Startups"
                                width={82}
                                height={34}
                                className="h-[34px] w-auto opacity-60 transition-opacity hover:opacity-100"
                            />
                            {/* Anthropic wordmark typeset pending real logo file / permission */}
                            <span className="font-heading text-xl tracking-[0.03em] text-foreground opacity-60 transition-opacity hover:opacity-100" style={{ fontWeight: 550 }}>
                                ANTHROPIC
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-rule">
                    {PUBLICATIONS.map((pub) => {
                        const inner = (
                            <>
                                <span className="pt-1 font-mono text-[13px] text-ink-60">{pub.year}</span>
                                <div>
                                    <h4 className="mb-1.5 font-heading text-lg leading-snug transition-colors group-hover:text-primary" style={{ fontWeight: 500 }}>
                                        {pub.title}
                                        <span className="ml-2 inline-block font-mono text-[12px] text-ink-30 transition-all group-hover:translate-x-0.5 group-hover:text-primary">
                                            {pub.internal ? "→" : "↗"}
                                        </span>
                                    </h4>
                                    <p className="text-[14.5px] text-ink-60">{pub.venue}</p>
                                </div>
                            </>
                        )
                        const className = "group grid grid-cols-[110px_1fr] gap-6 border-b border-rule py-5.5 transition-colors hover:bg-primary/[0.03]"
                        return pub.internal ? (
                            <Link key={pub.title} href={pub.href} className={className}>
                                {inner}
                            </Link>
                        ) : (
                            <a key={pub.title} href={pub.href} target="_blank" rel="noopener noreferrer" className={className}>
                                {inner}
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
