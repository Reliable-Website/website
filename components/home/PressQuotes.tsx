import { useTranslations } from "next-intl"

const ITEMS = [
    {
        key: "digitalnorway",
        source: "Digital Norway",
        href: "https://digitalnorway.com/aktuelt/de-har-fatt-ki-til-a-slutte-a-lyve",
    },
    {
        key: "finansavisen",
        source: "Finansavisen",
        href: "https://www.finansavisen.no/teknologi/2026/06/10/8355665/reliable-ai-har-funnet-en-vei-rundt-problemet-der-sprakmodeller-hallusinerer",
    },
    {
        key: "universitas",
        source: "Universitas",
        href: "https://www.universitas.no/innovasjon-norge-kunstig-intelligens-reliable-ai/skapte-prisvinnende-ki-verktoy-ved-siden-av-studiene/398420",
    },
]

// Press headlines set as plain typography; sits right under the manifesto, so no rule of its own.
export function PressQuotes() {
    const t = useTranslations('Press')

    return (
        <section aria-label={t('label')} className="pb-[72px] md:pb-[88px]">
            <div className="mx-auto max-w-[1180px] px-6">
                <span className="mb-8 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">{t('label')}</span>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {ITEMS.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border-t-2 border-svart pt-[22px]"
                        >
                            <span className="block text-[22px] italic leading-[1.32] tracking-[-0.01em] transition-colors group-hover:text-primary">
                                {t(item.key)}
                            </span>
                            <span className="mt-3.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">
                                {item.source} <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
