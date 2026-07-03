import Image from "next/image"
import { useTranslations } from "next-intl"

// The shaded document mirrors the in-app PDF relevance shading and stays in
// Norwegian across locales — it is a real product artifact (KOFA 2010/7).
function MiniDoc() {
    return (
        <div aria-hidden="true" className="mt-4.5 max-w-[34em] rounded-lg border border-rule bg-white px-4.5 py-4 text-[11.5px] leading-[1.7] text-ink-60">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-30">
                KOFA 2010/7 · Klagenemndas vurdering
            </span>
            {/* marker-yellow shading, matching the in-app PDF highlighter */}
            <span className="block rounded px-1.5 py-px">(46) Klagenemnda har etter dette kommet til at …</span>
            <span className="block rounded bg-[#FBF0A3CC] px-1.5 py-px text-foreground">(47) Spørsmålet er om det forelå saklig grunn til å avlyse …</span>
            <span className="block rounded bg-[#F8E25CCC] px-1.5 py-px text-foreground">(48) Av forskriften § 22-1 (1) følger det at oppdragsgiver kan avlyse en konkurranse med øyeblikkelig virkning dersom det foreligger «saklig grunn».</span>
            <span className="block rounded px-1.5 py-px">(49) Klagers anførsel kan derfor ikke føre frem.</span>
        </div>
    )
}

export function Capabilities() {
    const t = useTranslations('PCaps')
    const itemKeys = ["c1", "c2", "c3", "c4", "c6"] as const

    return (
        <section id="how" className="border-t border-rule py-24">
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="mb-14 flex items-end justify-between gap-10">
                    <div className="max-w-[760px]">
                        <span className="sec-num">{t('secNum')}</span>
                        <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                            {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                        </h2>
                    </div>
                    <Image
                        src="/images/Symbols/rai-symboler-05.png"
                        alt=""
                        width={150}
                        height={150}
                        className="hidden h-[150px] w-auto flex-none md:block"
                    />
                </div>

                <div className="border-t border-rule">
                    {itemKeys.map((key, i) => (
                        <div
                            key={key}
                            className="grid grid-cols-1 items-baseline gap-2 border-b border-rule py-7 transition-colors hover:bg-primary/[0.045] md:grid-cols-[64px_280px_1fr] md:gap-8"
                        >
                            <span className="font-mono text-[13px] text-primary">2.{i + 1}</span>
                            <h3 className="font-heading text-[21px]" style={{ fontWeight: 500 }}>{t(`${key}Title`)}</h3>
                            <div>
                                <p className="max-w-[38em] text-[15.5px] text-ink-60">{t(`${key}Body`)}</p>
                                {key === "c3" && <MiniDoc />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
