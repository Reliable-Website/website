"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

// Firm logos cleared for public use via signed contracts (founder, 2026-06-12).
// w/h are the files' intrinsic sizes (keeps the aspect ratio); `h` is the display height.
const FIRMS = [
    { src: "/images/LogoCarousel/kromann-reumert.svg", alt: "Kromann Reumert", w: 148, ih: 28, h: 18 },
    { src: "/images/LogoCarousel/kvale.svg", alt: "Kvale", w: 200, ih: 40, h: 13 },
    { src: "/images/LogoCarousel/haavind.png", alt: "Haavind", w: 3370, ih: 766, h: 16 },
    { src: "/images/LogoCarousel/selmer.png", alt: "Selmer", w: 1514, ih: 380, h: 16 },
    { src: "/images/LogoCarousel/odin.png", alt: "Odin Prosjekt", w: 2942, ih: 1200, h: 17 },
]

// Illustrative documents for the demo: paragraph labels and which one "matches".
// Query text and document titles live in messages (Hero.demo.docs), same order.
const SHAPES = [
    { pns: ["¶ 29", "¶ 30", "¶ 31", "¶ 32", "¶ 33"], hit: 2 },
    { pns: ["¶ 4.1", "¶ 4.2", "¶ 4.3", "¶ 4.4", "¶ 4.5"], hit: 3 },
    { pns: ["¶ 12", "¶ 13", "¶ 14", "¶ 15", "¶ 16"], hit: 1 },
]

// Skeleton text: line widths (%) per paragraph.
const LINES = [[100, 100, 64], [100, 88], [100, 100, 76], [100, 52], [100, 100, 40]]

type Doc = { tag: string; q: string; title: string }

// A public document is searched live: the query types out, a scan passes over
// the page, and the matching paragraph lights up with a link to the source.
function SourceDemo() {
    const t = useTranslations('Hero.demo')
    const docs = t.raw('docs') as Doc[]
    const [idx, setIdx] = useState(0)
    const [text, setText] = useState("")
    const [matched, setMatched] = useState(false)
    const [scan, setScan] = useState(0)

    useEffect(() => {
        let stop = false
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
        async function loop() {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                await sleep(0)
                setText(docs[0].q)
                setMatched(true)
                return
            }
            await sleep(600)
            let qi = 0
            while (!stop) {
                const i = qi % docs.length
                const q = docs[i].q
                setIdx(i)
                setMatched(false)
                for (let k = 1; k <= q.length && !stop; k++) {
                    setText(q.slice(0, k))
                    await sleep(30 + Math.random() * 34)
                }
                setScan((s) => s + 1)
                await sleep(1100)
                if (stop) return
                setMatched(true)
                await sleep(3800)
                for (let k = q.length; k >= 0 && !stop; k--) {
                    setText(q.slice(0, k))
                    await sleep(10)
                }
                await sleep(450)
                qi++
            }
        }
        loop()
        return () => { stop = true }
    }, [docs])

    const doc = docs[idx]
    const shape = SHAPES[idx % SHAPES.length]

    return (
        <div aria-hidden="true" className="relative pb-[18px]">
            <div className="mb-[22px] flex min-h-[52px] w-full items-center gap-3 rounded-[26px] border border-rule-soft bg-white px-6 py-3 text-[15px] font-medium shadow-[0_1px_0_rgba(39,39,38,.09),0_18px_40px_-22px_rgba(39,39,38,.35)]">
                <span className="flex-none font-mono text-[11px] tracking-[0.1em] text-primary">{doc.tag}</span>
                <span className="min-w-0 sm:truncate">{text}</span>
                <span className="h-[17px] w-[1.5px] flex-none bg-primary [animation:blink_1.1s_steps(1)_infinite]" />
            </div>

            <div className="relative z-[2] overflow-hidden rounded-[14px] border border-rule-soft bg-white px-7 pb-6 pt-[26px] shadow-[0_30px_60px_-36px_rgba(39,39,38,.45)]">
                {scan > 0 && (
                    <span
                        key={scan}
                        className="pointer-events-none absolute inset-x-0 -top-20 h-[70px] bg-[linear-gradient(to_bottom,transparent,rgba(160,173,249,.18),transparent)] [animation:docscan_1.6s_ease-in-out]"
                    />
                )}
                <div className="mb-2 flex items-baseline justify-between border-b border-rule-soft pb-3.5">
                    <span className="text-[15px]" style={{ fontWeight: 560 }}>{doc.title}</span>
                    <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-60 sm:inline">{t('label')}</span>
                </div>
                {LINES.map((widths, p) => {
                    const hit = matched && p === shape.hit
                    return (
                        <div
                            key={p}
                            className={`grid-cols-[52px_1fr] gap-2.5 rounded-lg py-2.5 pr-2.5 transition-[background,box-shadow] duration-500 ${p === LINES.length - 1 ? "hidden sm:grid" : "grid"} ${hit ? "bg-himmel/[0.16] shadow-[inset_3px_0_0_var(--color-bla)]" : ""}`}
                        >
                            <span className={`pl-2 pt-px font-mono text-[11.5px] transition-colors ${hit ? "text-primary" : "text-ink-30"}`}>{shape.pns[p]}</span>
                            <div>
                                {widths.map((w, l) => (
                                    <i
                                        key={l}
                                        className={`mb-[9px] mt-1 block h-[7px] rounded transition-colors duration-500 ${hit ? "bg-primary/50" : "bg-svart/10"}`}
                                        style={{ width: `${w}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
                <div className={`mt-3.5 flex items-center justify-between border-t border-rule-soft pt-3.5 text-[13px] transition-all duration-[400ms] ${matched ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"}`}>
                    <span className="text-[#3f9a4c]">✓ {t('match', { pn: shape.pns[shape.hit] })}</span>
                    <span className="text-primary" style={{ fontWeight: 560 }}>{t('open')}</span>
                </div>
            </div>
            <div className="absolute inset-x-4 bottom-1.5 z-[1] h-10 rounded-[14px] border border-rule-soft bg-white" />
            <div className="absolute inset-x-8 -bottom-1 h-10 rounded-[14px] border border-rule-soft bg-white opacity-60" />
        </div>
    )
}

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="relative overflow-hidden border-b border-rule">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pb-[72px] pt-16 md:pt-[88px] lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                <div>
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-primary">{t('kicker')}</span>
                    <h1
                        className="mt-[22px] leading-[0.98] tracking-[-0.035em]"
                        style={{ fontSize: "clamp(52px, 7.4vw, 104px)", fontWeight: 400 }}
                    >
                        {t.rich('title', {
                            em: (chunks) => <em className="italic text-primary" style={{ fontWeight: 440 }}>{chunks}</em>,
                        })}
                    </h1>
                    <p className="mt-7 max-w-[26em] text-[20px] leading-[1.55] text-ink-60">
                        <strong className="text-foreground" style={{ fontWeight: 560 }}>{t('keyLine')}</strong>{" "}
                        {t('sub')}
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-[22px]">
                        <a
                            href="#track-record"
                            className="rounded-full border border-primary bg-primary px-[30px] py-3.5 text-base font-semibold text-white transition-colors hover:border-[#5a6de8] hover:bg-[#5a6de8]"
                        >
                            {t('ctaPrimary')}
                        </a>
                        <Link href="/team" className="py-2 font-medium text-primary underline-offset-4 hover:underline">
                            {t('ctaTeam')} →
                        </Link>
                    </div>
                    <div className="mt-14 border-t border-rule-soft pt-6">
                        <span className="mb-5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">{t('trustLabel')}</span>
                        <div className="grid grid-cols-3 items-center justify-items-start gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-8 xl:gap-x-12">
                            {FIRMS.map((firm) => (
                                <Image
                                    key={firm.alt}
                                    src={firm.src}
                                    alt={firm.alt}
                                    width={firm.w}
                                    height={firm.ih}
                                    className="w-auto opacity-75 transition-opacity hover:opacity-100"
                                    style={{ height: firm.h, width: "auto" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <SourceDemo />
            </div>
        </section>
    )
}
