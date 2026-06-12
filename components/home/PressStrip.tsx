import Image from "next/image"
import { useTranslations } from "next-intl"

export function PressStrip() {
    const t = useTranslations('PPress')

    const items = [
        {
            href: "https://www.finansavisen.no/teknologi/2026/06/10/8355665/reliable-ai-har-funnet-en-vei-rundt-problemet-der-sprakmodeller-hallusinerer",
            quote: t('finansavisen'),
            // Typeset wordmark until a real Finansavisen logo file is available
            logo: <span className="font-heading text-[27px] leading-none tracking-[-0.01em] text-foreground" style={{ fontWeight: 650 }}>Finansavisen</span>,
        },
        {
            href: "https://digitalnorway.com/aktuelt/de-har-fatt-ki-til-a-slutte-a-lyve",
            quote: t('digitalnorway'),
            logo: <Image src="/images/press/digitalnorway.svg" alt="Digital Norway" width={124} height={22} className="h-[22px] w-auto" />,
        },
        {
            href: "https://www.universitas.no/innovasjon-norge-kunstig-intelligens-reliable-ai/skapte-prisvinnende-ki-verktoy-ved-siden-av-studiene/398420",
            quote: t('universitas'),
            logo: <Image src="/images/press/universitas.svg" alt="Universitas" width={158} height={30} className="h-[30px] w-auto" />,
        },
    ]

    return (
        <section className="border-b border-rule py-[72px] pb-20">
            <div className="mx-auto max-w-[1180px] px-6">
                <span className="block text-center text-base text-ink-60">{t('label')}</span>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex min-h-[112px] items-center justify-center overflow-hidden rounded-2xl bg-[#EAEAE9] px-12 py-8 transition-colors duration-300 hover:bg-svart"
                        >
                            {/* film grain, fades in with the ink flip */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-10"
                                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
                            />
                            <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-3.5 group-hover:opacity-0">
                                {item.logo}
                            </span>
                            <span className="absolute inset-0 z-10 flex translate-y-3.5 items-center justify-center px-7 py-5 text-center font-heading text-[15px] italic leading-[1.45] text-hvit opacity-0 blur-[5px] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none">
                                {item.quote}
                            </span>
                            <span className="absolute right-4 top-2.5 z-10 font-mono text-[13px] text-himmel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
