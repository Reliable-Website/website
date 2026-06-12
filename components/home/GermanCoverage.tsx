import { useTranslations } from "next-intl"

// German homepage § 1 — the honest source roadmap, replacing the four-country
// card grid with a DE/EU-focused table. de locale only.
export function GermanCoverage() {
    const t = useTranslations('PQuellen')

    const rows = [
        { title: t('r1Title'), desc: t('r1Desc'), live: true },
        { title: t('r2Title'), desc: t('r2Desc'), live: false },
        { title: t('r3Title'), desc: t('r3Desc'), live: false },
        { title: t('r4Title'), desc: t('r4Desc'), live: false },
        { title: t('r5Title'), desc: t('r5Desc'), live: true },
    ]

    return (
        <section id="coverage" className="border-y border-rule bg-white py-24">
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="mb-14 max-w-[760px]">
                    <span className="sec-num">{t('secNum')}</span>
                    <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                        {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                    </h2>
                    <p className="mt-4.5 text-[17.5px] text-ink-60">{t('sub')}</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-rule bg-background">
                    {rows.map((row) => (
                        <div
                            key={row.title}
                            className={`grid grid-cols-1 items-baseline gap-3 border-b border-rule-soft px-7 py-5.5 last:border-b-0 md:grid-cols-[300px_1fr_130px] md:gap-6 ${row.live ? "" : "[&_h3]:text-ink-30 [&_p]:text-ink-30"}`}
                        >
                            <h3 className="font-heading text-[19px]" style={{ fontWeight: 500 }}>{row.title}</h3>
                            <p className="text-[14.5px] text-ink-60">{row.desc}</p>
                            <span
                                className={`justify-self-start rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] md:justify-self-end ${row.live ? "bg-lime text-[#3e7c3a]" : "bg-regn text-[#3a4cab]"}`}
                            >
                                {row.live ? t('statusLive') : t('statusPlanned')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
