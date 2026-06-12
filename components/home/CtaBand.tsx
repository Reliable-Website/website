import { useTranslations } from "next-intl"
import { CALENDLY_URL } from "@/lib/constants"

export function CtaBand() {
    const t = useTranslations('PCta')

    return (
        <section className="relative overflow-hidden bg-primary py-24 text-white">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-42%] left-[-3%] select-none font-heading leading-none text-white/10"
                style={{ fontSize: "56vh" }}
            >
                §
            </span>
            <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-12 px-6">
                <div>
                    <h2 className="max-w-[16em] text-[clamp(28px,3vw,40px)] leading-[1.14] text-white">{t('heading')}</h2>
                    <p className="mt-3.5 max-w-[32em] text-white/75">{t('sub')}</p>
                </div>
                <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-svart bg-svart px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:border-black hover:bg-black"
                >
                    {t('button')}
                </a>
            </div>
        </section>
    )
}
