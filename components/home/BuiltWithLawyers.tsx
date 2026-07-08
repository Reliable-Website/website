import Image from "next/image"
import { useTranslations } from "next-intl"

const CARDS = [
    {
        key: 'stian' as const,
        photo: "/images/Testemony/stian.jpg",
        photoPosition: "50% 15%",
        firmLogo: "/images/LogoCarousel/haavind.png",
        firmAlt: "Haavind",
        flip: false,
    },
    {
        key: 'karen' as const,
        photo: "/images/Testemony/karen.jpg",
        photoPosition: "50% 0%",
        firmLogo: "/images/LogoCarousel/selmer.png",
        firmAlt: "Selmer",
        flip: true,
    },
]

export function BuiltWithLawyers() {
    const t = useTranslations('PLawyers')

    return (
        <section id="lawyers" className="border-t border-rule py-24">
            <div className="mx-auto max-w-[1180px] px-6">
                <span className="sec-num">{t('secNum')}</span>
                <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                    {t.rich('heading', { em: (c) => <em className="italic text-primary">{c}</em> })}
                </h2>
                <p className="mt-4.5 max-w-[34em] text-[17.5px] text-ink-60">{t('intro')}</p>

                <div className="mt-12 grid gap-6">
                    {CARDS.map((card) => (
                        <figure
                            key={card.key}
                            className={`group m-0 grid grid-cols-1 overflow-hidden rounded-2xl border border-rule-soft bg-white shadow-[0_22px_50px_-34px_rgba(39,39,38,0.4)] ${card.flip ? 'md:grid-cols-[1fr_250px]' : 'md:grid-cols-[250px_1fr]'}`}
                        >
                            <div className={`relative min-h-[260px] md:min-h-0 ${card.flip ? 'md:order-2' : ''}`}>
                                <Image
                                    src={card.photo}
                                    alt={t(`${card.key}.name`)}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 250px"
                                    className="object-cover grayscale transition-[filter] duration-[450ms] group-hover:grayscale-0"
                                    style={{ objectPosition: card.photoPosition }}
                                />
                            </div>
                            <div className="flex flex-col px-7 pb-8 pt-9 md:px-11 md:pt-10">
                                <span aria-hidden="true" className="block h-[26px] font-heading text-[64px] font-light leading-[0.55] text-himmel">“</span>
                                <blockquote className="max-w-[42em] font-heading text-[18px] italic leading-[1.6]">
                                    {t.rich(`${card.key}.quote`, {
                                        b: (c) => <b className="italic text-primary" style={{ fontWeight: 480 }}>{c}</b>,
                                    })}
                                </blockquote>
                                <figcaption className="mt-auto flex items-center gap-3 pt-5 font-mono text-[12.5px] text-ink-60">
                                    <span className="leading-normal">
                                        <b className="block font-medium text-foreground">{t(`${card.key}.name`)}</b>
                                        {t(`${card.key}.role`)}
                                    </span>
                                    <Image
                                        src={card.firmLogo}
                                        alt={card.firmAlt}
                                        width={100}
                                        height={20}
                                        className="ml-auto h-3.5 w-auto opacity-40 grayscale transition-[filter,opacity] duration-[450ms] group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                </figcaption>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
