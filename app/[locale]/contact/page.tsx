"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CALENDLY_URL } from "@/lib/constants"

function TypingQuery({ query }: { query: string }) {
    const [text, setText] = useState("")
    const stop = useRef(false)

    useEffect(() => {
        stop.current = false
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
        async function loop() {
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            if (reduced) {
                await sleep(0)
                setText(query)
                return
            }
            await sleep(900)
            while (!stop.current) {
                for (let i = 1; i <= query.length && !stop.current; i++) {
                    setText(query.slice(0, i))
                    await sleep(38 + Math.random() * 34)
                }
                await sleep(3600)
                for (let i = query.length; i >= 0 && !stop.current; i--) {
                    setText(query.slice(0, i))
                    await sleep(11)
                }
                await sleep(700)
            }
        }
        loop()
        return () => { stop.current = true }
    }, [query])

    return <span className="min-h-[1.5em]">{text}</span>
}

export default function ContactPage() {
    const t = useTranslations('Contact')
    const tHeader = useTranslations('Header')

    const hits = [
        { label: t('rowDemo'), dest: tHeader('bookDemo'), href: CALENDLY_URL, external: true },
        { label: t('rowAsk'), dest: "hei@reliableai.no", href: "mailto:hei@reliableai.no" },
        { label: t('rowCeo'), dest: "markus@reliableai.no", href: "mailto:markus@reliableai.no" },
        { label: t('rowVisit'), dest: "Akersbakken 30, Oslo", href: "https://maps.google.com/?q=Akersbakken+30,+0172+Oslo", external: true },
    ]

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1">
                <h1 className="sr-only">{t('title')}</h1>
                <div className="mx-auto max-w-[1100px] px-6 pb-28 pt-14">
                    <div className="sec-num">{tHeader('contact')}</div>

                    <div className="pt-16 text-center md:pt-20">
                        {/* the contact page as a Presedens query */}
                        <div
                            aria-hidden="true"
                            className="mx-auto inline-flex max-w-[94%] items-center gap-3 rounded-full bg-white px-7 py-4 text-left text-[16.5px] font-medium shadow-[0_0_60px_rgba(106,125,250,.25),0_16px_48px_rgba(39,39,38,.18)]"
                        >
                            <span className="font-mono text-[11px] tracking-[0.1em] text-primary">{t('searchTag')}</span>
                            <TypingQuery query={t('searchQuery')} />
                            <span className="h-[18px] w-[1.5px] flex-none bg-primary [animation:blink_1.1s_steps(1)_infinite]" />
                        </div>

                        {/* the results */}
                        <div className="mx-auto mt-9 max-w-[580px] overflow-hidden rounded-2xl border border-rule bg-white text-left">
                            {hits.map((hit) => (
                                <a
                                    key={hit.label}
                                    href={hit.href}
                                    {...(hit.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="flex items-baseline justify-between gap-4 border-b border-rule-soft px-6 py-4.5 transition-colors last:border-b-0 hover:bg-primary/[0.05]"
                                >
                                    <b className="font-heading text-[17.5px]" style={{ fontWeight: 460 }}>{hit.label}</b>
                                    <span className="font-mono text-[12.5px] text-ink-60">{hit.dest} →</span>
                                </a>
                            ))}
                        </div>

                        <p className="mt-9 font-mono text-[11.5px] tracking-[0.06em] text-ink-30">
                            All rights reserved · Oslo
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
