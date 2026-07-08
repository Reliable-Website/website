import Image from "next/image"
import { useTranslations } from "next-intl"

// German homepage § 4 — Nordic proof: firms, origin, and the Haavind quote,
// inside the dark panel. de locale only.
export function GermanProof() {
    const t = useTranslations('PReferenzen')
    const tQuote = useTranslations('PLawyers')

    return (
        <section id="lawyers" className="relative overflow-hidden bg-svart py-24 text-hvit">
            <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(160,173,249,.05) 0 1px, transparent 1px 56px)" }}
            />
            <div className="relative mx-auto max-w-[1180px] px-6">
                <div className="mb-12 max-w-[760px]">
                    <span className="sec-num" style={{ color: "#A0ADF9" }}>{t('secNum')}</span>
                    <h2 className="text-[clamp(28px,3vw,40px)] leading-[1.14]">
                        {t.rich('heading', { em: (c) => <em className="italic text-himmel">{c}</em> })}
                    </h2>
                    <p className="mt-4.5 text-[17.5px] text-hvit/60">{t('sub')}</p>
                </div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                        <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-himmel">{t('kanzleien')}</h3>
                        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                            <Image src="/images/LogoCarousel/kvale.svg" alt="Kvale" width={80} height={16} className="h-4 w-auto invert opacity-70" />
                            <Image src="/images/LogoCarousel/haavind.png" alt="Haavind" width={100} height={20} className="h-5 w-auto invert opacity-70" />
                            <Image src="/images/LogoCarousel/selmer.png" alt="Selmer" width={100} height={20} className="h-5 w-auto opacity-90" />
                            <Image src="/images/LogoCarousel/odin.png" alt="Odin Prosjekt" width={100} height={20} className="h-5 w-auto opacity-90" />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                        <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-himmel">{t('herkunft')}</h3>
                        <p className="text-[15px] leading-relaxed text-hvit/80">{t('herkunftText')}</p>
                    </div>
                </div>

                <figure className="mt-12 max-w-[56em]">
                    <blockquote className="border-l-[3px] border-himmel pl-7 font-heading text-[clamp(18px,1.8vw,23px)] italic leading-[1.5] text-hvit/90">
                        {tQuote.rich('stian.quote', { b: (c) => <b className="italic text-himmel" style={{ fontWeight: 480 }}>{c}</b> })}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3.5 pl-7 font-mono text-[12.5px] text-hvit/60">
                        <Image
                            src="/images/Testemony/stian-face.jpg"
                            alt="Stian Hultin Oddbjørnsen"
                            width={42}
                            height={42}
                            className="h-[42px] w-[42px] rounded-full object-cover"
                        />
                        <span className="leading-normal">
                            <b className="block font-medium text-hvit">{tQuote('stian.name')}</b>
                            {tQuote('stian.role')}
                        </span>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
