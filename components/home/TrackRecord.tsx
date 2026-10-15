import { useTranslations } from "next-intl"
import { EditorialRow, EditorialHeading } from "@/components/home/EditorialRow"

// Quotes are verbatim sentences from the customers' full testimonials.
const QUOTES = [
    { key: "karen" as const, photo: "/images/Testemony/karen.jpg", position: "50% 0%" },
    { key: "stian" as const, photo: "/images/Testemony/stian.jpg", position: "50% 15%" },
]

export function TrackRecord() {
    const t = useTranslations('TrackRecord')
    const stats = [1, 2, 3].map((i) => ({ value: t(`v${i}`), label: t(`l${i}`) }))

    return (
        <EditorialRow id="track-record" num="01" label={t('label')}>
            <EditorialHeading>
                {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
            </EditorialHeading>
            <p className="mt-[18px] max-w-[36em] text-[18px] text-ink-60">{t('lead')}</p>

            <div className="mt-12 grid grid-cols-1 border-t border-rule sm:grid-cols-3">
                {stats.map((s) => (
                    <div key={s.label} className="pr-6 pt-[22px]">
                        <b className="block whitespace-nowrap leading-none tracking-[-0.03em] [font-feature-settings:'tnum'_1]" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 350 }}>
                            {s.value}
                        </b>
                        <span className="mt-2.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">{s.label}</span>
                    </div>
                ))}
            </div>

            {QUOTES.map((q) => (
                <figure key={q.key} className="mt-10 grid grid-cols-[56px_1fr] items-start gap-5 first-of-type:mt-16 md:grid-cols-[72px_1fr] md:gap-6">
                    <div
                        role="img"
                        aria-label={t(`${q.key}.name`)}
                        className="aspect-square w-full rounded-full bg-cover grayscale"
                        style={{ backgroundImage: `url(${q.photo})`, backgroundPosition: q.position }}
                    />
                    <div>
                        <blockquote className="max-w-[24em] italic leading-[1.38] tracking-[-0.01em]" style={{ fontSize: "clamp(22px, 2.3vw, 30px)" }}>
                            <span className="text-himmel">“</span>{t(`${q.key}.quote`)}<span className="text-himmel">”</span>
                        </blockquote>
                        <figcaption className="mt-4 text-[13px] text-ink-60">
                            <b className="font-medium text-foreground">{t(`${q.key}.name`)}</b> · {t(`${q.key}.role`)}
                        </figcaption>
                    </div>
                </figure>
            ))}
        </EditorialRow>
    )
}
