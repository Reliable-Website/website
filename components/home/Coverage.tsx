import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

// Source names stay in their native language across locales (they are the
// official names lawyers use). Status labels are localized.
const CARDS = [
    {
        cc: "NO",
        titleKey: "norway",
        status: "live" as const,
        items: [
            { name: "Klagenemnda for offentlige anskaffelser", live: true },
            { name: "Anskaffelsesloven og forskrifter", live: true },
            { name: "DFØs veileder og juridisk kommentar", live: true },
            { name: "Domstolspraksis (anskaffelser)", live: false },
        ],
    },
    {
        cc: "DK",
        titleKey: "denmark",
        status: "live" as const,
        items: [
            { name: "Klagenævnet for Udbud", live: true },
            { name: "Udbudsloven og bekendtgørelser", live: true },
            { name: "Domstolspraksis (udbud)", live: false },
        ],
    },
    {
        cc: "DE",
        titleKey: "germany",
        status: "launching" as const,
        items: [
            { name: "Vergabekammer des Bundes", live: true },
            { name: "Vergabekammern der Länder", live: false },
            { name: "GWB / VgV / UVgO", live: false },
            { name: "OLG-Vergabesenate", live: false },
        ],
    },
    {
        cc: "EU",
        titleKey: "eu",
        status: "liveAll" as const,
        items: [
            { name: "Procurement directives", live: true, localize: "euDirectives" },
            { name: "Procurement regulations", live: true, localize: "euRegulations" },
            { name: "Court of Justice case law", live: true, localize: "euCourt" },
            { name: "General Court case law", live: true, localize: "euGeneralCourt" },
        ],
    },
]

export function Coverage() {
    const t = useTranslations('PCoverage')
    const locale = useLocale()
    // German visitors see their own jurisdiction first
    const cards = locale === "de"
        ? [...CARDS].sort((a, b) => {
            const order = ["DE", "EU", "NO", "DK"]
            return order.indexOf(a.cc) - order.indexOf(b.cc)
        })
        : CARDS

    return (
        <section id="coverage" className="border-y border-rule bg-white py-24">
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="mb-14 flex items-end justify-between gap-10">
                    <div className="max-w-[760px]">
                        <span className="sec-num">{t('secNum')}</span>
                        <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                            {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                        </h2>
                    </div>
                    <Image
                        src="/images/Symbols/rai-symboler-02.png"
                        alt=""
                        width={150}
                        height={150}
                        className="hidden h-[150px] w-auto flex-none md:block"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div
                            key={card.cc}
                            className="rounded-2xl border border-rule border-t-[3px] border-t-regn bg-background p-[30px] pb-8 transition-colors hover:border-himmel hover:border-t-primary"
                        >
                            <span className="mb-2.5 block font-mono text-xs tracking-[0.14em] text-ink-60">{card.cc}</span>
                            <h3 className="mb-1.5 font-heading text-[23px]" style={{ fontWeight: 500 }}>{t(card.titleKey)}</h3>
                            <span
                                className={`mb-5 inline-block rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] ${card.status === "launching" ? "bg-regn text-[#3a4cab]" : "bg-lime text-[#3e7c3a]"}`}
                            >
                                {t(`status_${card.status}`)}
                            </span>
                            <ul>
                                {card.items.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex items-baseline justify-between gap-3 border-b border-rule-soft py-2 text-[14.5px] last:border-b-0 ${item.live ? "" : "text-ink-30"}`}
                                    >
                                        {"localize" in item && item.localize ? t(item.localize) : item.name}
                                        <span className={`font-mono text-[10.5px] ${item.live ? "text-[#3e7c3a]" : "text-appelsin"}`}>
                                            {item.live ? "LIVE" : t('soon')}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
