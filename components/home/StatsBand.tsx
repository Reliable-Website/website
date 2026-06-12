"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

function LiveClock() {
    const [stamp, setStamp] = useState("—")

    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("sv-SE", {
            timeZone: "Europe/Oslo",
            year: "numeric", month: "2-digit", day: "2-digit",
            hour: "2-digit", minute: "2-digit", second: "2-digit",
        })
        const tick = () => setStamp(fmt.format(new Date()))
        const t0 = setTimeout(tick, 0)
        const id = setInterval(tick, 1000)
        return () => { clearTimeout(t0); clearInterval(id) }
    }, [])

    return <>{stamp}</>
}

export function StatsBand() {
    const t = useTranslations('PStats')

    return (
        <div className="border-b border-rule">
            <div className="mx-auto grid max-w-[1180px] grid-cols-2 px-6 md:grid-cols-[1fr_1fr_0.9fr_1.35fr]">
                <Stat value={t('v1')} label={t('l1')} first />
                <Stat value={t('v2')} label={t('l2')} />
                <Stat value={t('v3')} label={t('l3')} />
                <div className="border-rule-soft py-6 md:py-7 md:px-8">
                    <b
                        className="block pt-1.5 font-heading text-[19px] tracking-[-0.01em] [font-feature-settings:'tnum'_1,'onum'_1] md:whitespace-nowrap md:text-[27px]"
                        style={{ fontWeight: 420 }}
                    >
                        <LiveClock />
                    </b>
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-60">
                        <i className="mr-2 inline-block h-[7px] w-[7px] translate-y-[-1px] rounded-full bg-gronn not-italic [animation:livepulse_2.4s_ease-in-out_infinite]" />
                        {t('l4')}
                    </span>
                </div>
            </div>
        </div>
    )
}

function Stat({ value, label, first }: { value: string; label: string; first?: boolean }) {
    return (
        <div className={`border-rule-soft py-6 md:border-r md:py-7 ${first ? "md:pr-8" : "md:px-8"}`}>
            <b className="block whitespace-nowrap font-heading text-[26px] tracking-[-0.01em] [font-feature-settings:'onum'_1] md:text-[34px]" style={{ fontWeight: 420 }}>
                {value}
            </b>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-60">{label}</span>
        </div>
    )
}
