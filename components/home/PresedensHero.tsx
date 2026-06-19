"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { CALENDLY_URL } from "@/lib/constants"

type Query = { tag: string; q: string }

function TypingSearchBar({ queries }: { queries: Query[] }) {
    const [text, setText] = useState("")
    const [tag, setTag] = useState(queries[0]?.tag ?? "SEARCH")
    const stop = useRef(false)

    useEffect(() => {
        stop.current = false
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
        async function loop() {
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            if (reduced || queries.length === 0) {
                await sleep(0)
                setTag(queries[0]?.tag ?? "SEARCH")
                setText(queries[0]?.q ?? "")
                return
            }
            await sleep(1400)
            let qi = 0
            while (!stop.current) {
                const { tag, q } = queries[qi % queries.length]
                setTag(tag)
                for (let i = 1; i <= q.length && !stop.current; i++) {
                    setText(q.slice(0, i))
                    await sleep(34 + Math.random() * 36)
                }
                await sleep(3200)
                for (let i = q.length; i >= 0 && !stop.current; i--) {
                    setText(q.slice(0, i))
                    await sleep(11)
                }
                await sleep(500)
                qi++
            }
        }
        loop()
        return () => { stop.current = true }
    }, [queries])

    return (
        <div
            aria-hidden="true"
            className="mx-auto mt-11 flex w-max max-w-[92%] min-h-[52px] items-center gap-3 rounded-full bg-white px-6 py-3 text-left text-[15px] font-medium text-foreground shadow-[0_0_60px_rgba(106,125,250,.35),0_16px_48px_rgba(0,0,0,.4)]"
        >
            <span className="font-mono text-[11px] tracking-[0.1em] text-primary">{tag}</span>
            <span>{text}</span>
            <span className="h-[17px] w-[1.5px] flex-none bg-primary [animation:blink_1.1s_steps(1)_infinite]" />
        </div>
    )
}

export function PresedensHero() {
    const t = useTranslations('PHero')
    const queries = t.raw('queries') as Query[]

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({ opacity: 1, transition: { duration: 0.6, delay: 0.08 * i } }),
    }

    return (
        <div className="relative overflow-hidden border-b border-rule bg-svart text-hvit">
            {/* ruled-paper lines */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(160,173,249,.05) 0 1px, transparent 1px 56px)" }}
            />
            {/* § watermark */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-16%] -translate-x-[92%] select-none font-heading font-light leading-none"
                style={{ fontSize: "70vh", color: "rgba(106,125,250,.14)" }}
            >
                §
            </span>

            <div className="relative z-10 mx-auto max-w-[1180px] px-6">
                <div className="py-20 text-center md:py-24">
                    <motion.span
                        custom={0} initial="hidden" animate="visible" variants={fadeIn}
                        className="mb-7 inline-block font-mono text-[12.5px] uppercase tracking-[0.16em] text-himmel"
                    >
                        {t('kicker')}
                    </motion.span>

                    <motion.h1
                        custom={1} initial="hidden" animate="visible" variants={fadeIn}
                        className="mx-auto max-w-[16em] font-heading leading-[1.04] tracking-[-0.015em]"
                        style={{ fontSize: "clamp(40px, 5vw, 66px)", fontWeight: 420 }}
                    >
                        {t.rich('title', {
                            em: (chunks) => (
                                <em className="italic text-himmel" style={{ fontWeight: 480, fontVariationSettings: "'WONK' 1" }}>
                                    {chunks}
                                </em>
                            ),
                        })}
                    </motion.h1>

                    <motion.p
                        custom={2} initial="hidden" animate="visible" variants={fadeIn}
                        className="mx-auto mt-6 max-w-[36em] text-[19px] leading-relaxed text-paper-60"
                    >
                        <strong className="font-semibold text-hvit">{t('keyLine')}</strong>{" "}
                        {t('sub')}
                    </motion.p>

                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeIn}
                        className="mt-9 flex flex-wrap justify-center gap-3.5"
                    >
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-primary bg-primary px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:border-[#5a6de8] hover:bg-[#5a6de8]"
                        >
                            {t('ctaDemo')}
                        </a>
                        <a
                            href="#coverage"
                            className="rounded-full border border-white/30 px-8 py-3.5 text-[17px] font-semibold text-hvit transition-colors hover:border-white"
                        >
                            {t('ctaCoverage')}
                        </a>
                    </motion.div>

                    <motion.p
                        custom={4} initial="hidden" animate="visible" variants={fadeIn}
                        className="mt-7 font-mono text-[12.5px] leading-relaxed text-paper-60"
                    >
                        <Link
                            href="/blog/ecai-2025-outstanding-demo-award"
                            className="text-hvit underline decoration-white/25 underline-offset-4 transition-colors hover:text-himmel hover:decoration-himmel"
                        >
                            {t('award')}
                        </Link>
                    </motion.p>

                    <motion.div custom={5} initial="hidden" animate="visible" variants={fadeIn}>
                        <TypingSearchBar queries={queries} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
