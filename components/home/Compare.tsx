import { useLocale, useTranslations } from "next-intl"

// Example queries and citations are real product artifacts. The Presedens-side
// citations must be real, verifiable sources; the chatbot-side citation is
// fabricated BY DESIGN (that is the point of the panel).
// DE: VK 2-12/18 (VK Bund, 07.03.2018, Aufhebung/sachlicher Grund — dejure-verified).
// Only the federal chamber is in the corpus; do not cite Länder chambers.
const EXAMPLES: Record<string, {
    query: string
    badPre: string
    badCite: string
    badPost: string
    goodCites: string[]
}> = {
    de: {
        query: "» Kann der Auftraggeber ein Vergabeverfahren ohne sachlichen Grund aufheben?",
        badPre: "„Nein, dies folgt aus ",
        badCite: "VK 1-203/19",
        badPost: ", wo die Vergabekammer feststellte, dass…“",
        goodCites: ["VK 2-12/18", "C-440/13", "RL 2014/24 Art. 55"],
    },
    default: {
        query: "» Kan oppdragsgiver avlyse en konkurranse uten saklig grunn?",
        badPre: "“Nei, dette følger av ",
        badCite: "KOFA-2021-0847",
        badPost: ", hvor klagenemnda la til grunn at…”",
        goodCites: ["KOFA 2010/7", "KOFA 2010/303", "FOA § 25-4", "C-440/13"],
    },
}

export function Compare() {
    const t = useTranslations('PCompare')
    const locale = useLocale()
    const ex = EXAMPLES[locale] ?? EXAMPLES.default

    return (
        <section id="why" className="bg-svart py-24 text-hvit">
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="mb-14 max-w-[760px]">
                    <span className="sec-num" style={{ color: "#A0ADF9" }}>{t('secNum')}</span>
                    <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                        {t('headingLine1')}<br />
                        {t.rich('headingLine2', { em: (c) => <em className="italic text-himmel">{c}</em> })}
                    </h2>
                    <p className="mt-4.5 text-[17.5px] text-hvit/60">{t('intro')}</p>
                </div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    {/* Generative chatbot */}
                    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 pb-9">
                        <span className="mb-5 inline-block rounded-full bg-rod/20 px-3 py-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-[#f0a49b]">
                            {t('genericTag')}
                        </span>
                        <p className="mb-4 font-mono text-[13px] text-hvit/55">{ex.query}</p>
                        <p className="text-[15.5px] leading-[1.65] text-hvit/85">
                            {ex.badPre}
                            <span className="whitespace-nowrap rounded bg-rod/25 px-1.5 font-mono text-[13px] text-[#f4b0a8] line-through decoration-rod">
                                {ex.badCite}
                            </span>
                            {ex.badPost}
                        </p>
                        <p className="mt-4 font-mono text-xs tracking-[0.04em] text-hvit/45">
                            {t('latency')}: <b className="font-medium text-hvit/75">30–80 s</b>
                        </p>
                        <p className="mt-6 flex gap-2.5 border-t border-white/10 pt-5 text-sm text-[#f0a49b]">
                            <span className="font-mono text-[15px] text-rod">✕</span>
                            {t('genericVerdict')}
                        </p>
                    </div>

                    {/* Presedens */}
                    <div className="rounded-2xl border border-primary/50 bg-primary/[0.13] p-8 pb-9">
                        <span className="mb-5 inline-block rounded-full bg-lime/15 px-3 py-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-lime">
                            Reliable
                        </span>
                        <p className="mb-4 font-mono text-[13px] text-hvit/55">{ex.query}</p>
                        <p className="text-[15.5px] leading-[1.65] text-hvit/85">
                            {t('presedensAnswerPrefix')}{" "}
                            {ex.goodCites.map((cite, i) => (
                                <span key={cite}>
                                    <span className="whitespace-nowrap rounded bg-gronn/15 px-1.5 font-mono text-[13px] text-gronn">{cite}</span>
                                    {i < ex.goodCites.length - 1 ? ", " : "; "}
                                </span>
                            ))}
                            {t('presedensAnswerSuffix')}
                        </p>
                        <p className="mt-4 font-mono text-xs tracking-[0.04em] text-hvit/45">
                            {t('latency')}: <b className="font-medium text-hvit/75">697 ms</b>
                        </p>
                        <p className="mt-6 flex gap-2.5 border-t border-white/10 pt-5 text-sm text-lime">
                            <span className="font-mono text-[15px] text-gronn">✓</span>
                            {t('presedensVerdict')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
