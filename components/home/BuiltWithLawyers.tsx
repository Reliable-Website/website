import Image from "next/image"
import { useTranslations } from "next-intl"

export function BuiltWithLawyers() {
    const t = useTranslations('PLawyers')

    return (
        <section id="lawyers" className="border-t border-rule py-24">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-11 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
                <div>
                    <span className="sec-num">{t('secNum')}</span>
                    <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                        {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                    </h2>
                    <p className="mt-4.5 text-[17.5px] text-ink-60">{t('intro')}</p>
                </div>

                <figure className="m-0">
                    <span aria-hidden="true" className="block h-[26px] font-heading text-[64px] font-light leading-[0.55] text-himmel">“</span>
                    <blockquote className="font-heading text-[18.5px] italic leading-[1.6]">
                        {t.rich('quote', {
                            b: (c) => <b className="italic text-primary" style={{ fontWeight: 480 }}>{c}</b>,
                        })}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 font-mono text-[12.5px] text-ink-60">
                        <Image
                            src="/images/Testemony/stian-face.jpg"
                            alt="Stian Hultin Oddbjørnsen"
                            width={42}
                            height={42}
                            className="h-[42px] w-[42px] rounded-full object-cover"
                        />
                        <span className="leading-normal">
                            <b className="block font-medium text-foreground">Stian Hultin Oddbjørnsen</b>
                            {t('role')}
                        </span>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
