import Image from "next/image"
import { useTranslations } from "next-intl"

// Firm logos cleared for public use via signed contracts (founder, 2026-06-12).
const FIRMS = [
    { src: "/images/LogoCarousel/kvale.svg", alt: "Kvale", h: 16 },
    { src: "/images/LogoCarousel/haavind.png", alt: "Haavind", h: 20 },
    { src: "/images/LogoCarousel/selmer.png", alt: "Selmer", h: 20 },
    { src: "/images/LogoCarousel/odin.png", alt: "Odin Prosjekt", h: 20 },
]

export function TrustStrip() {
    const t = useTranslations('PTrust')

    return (
        <div className="border-b border-rule bg-white">
            <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-12 gap-y-5 px-6 py-6">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-60">
                    {t('label')}
                </span>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-11">
                    {FIRMS.map((firm) => (
                        <Image
                            key={firm.alt}
                            src={firm.src}
                            alt={firm.alt}
                            width={Math.round(firm.h * 5)}
                            height={firm.h}
                            className="w-auto opacity-75 transition-opacity hover:opacity-100"
                            style={{ height: firm.h }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
