import { useTranslations } from "next-intl"

// Credibility first: a soft, people-first invitation to talk rather than a demo booking.
export function Closing() {
    const t = useTranslations('Closing')

    return (
        <section id="contact" className="border-t border-rule pb-[104px] pt-24 md:pt-28">
            <div className="mx-auto max-w-[1180px] px-6">
                <h2 className="leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", fontWeight: 400 }}>
                    {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                </h2>

                <div className="mt-11 flex flex-wrap gap-4">
                    <a
                        href="mailto:markus@reliableai.no"
                        className="flex items-center gap-3.5 rounded-full border border-rule bg-white py-3 pl-3 pr-[22px] transition-colors hover:border-svart"
                    >
                        <span
                            aria-hidden="true"
                            className="h-11 w-11 flex-none rounded-full bg-cover"
                            style={{ backgroundImage: "url(/images/Team/markus.jpg)", backgroundPosition: "center 20%" }}
                        />
                        <span>
                            <b className="block text-[15px]" style={{ fontWeight: 520 }}>Markus Kreutzer</b>
                            <span className="text-[13px] text-ink-60">{t('ceoRole')} · markus@reliableai.no</span>
                        </span>
                    </a>
                    <a
                        href="mailto:hei@reliableai.no"
                        className="flex items-center gap-3.5 rounded-full border border-rule bg-white py-3 pl-3 pr-[22px] transition-colors hover:border-svart"
                    >
                        <span aria-hidden="true" className="grid h-11 w-11 flex-none place-items-center rounded-full bg-primary text-lg text-white">@</span>
                        <span>
                            <b className="block text-[15px]" style={{ fontWeight: 520 }}>{t('writeUs')}</b>
                            <span className="text-[13px] text-ink-60">hei@reliableai.no</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
