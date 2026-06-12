"use client"

import { useLocale } from "next-intl"

// German-market launch note — only shown on the de locale.
export function LaunchNote() {
    const locale = useLocale()
    if (locale !== "de") return null

    return (
        <div className="border-b border-rule bg-white">
            <div className="mx-auto flex max-w-[1180px] flex-wrap items-baseline gap-x-4 gap-y-2 px-6 py-4">
                <span className="rounded-full bg-appelsin/25 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#9a5a14]">
                    Neu
                </span>
                <p className="text-[14.5px] text-ink-60">
                    Presedens startet in Deutschland — die Vergabekammer des Bundes zuerst;
                    Länderkammern, GWB/VgV und OLG-Praxis in Arbeit.{" "}
                    <a href="#coverage" className="font-mono text-[12.5px] text-primary hover:underline underline-offset-[3px]">
                        Quellenabdeckung →
                    </a>
                </p>
            </div>
        </div>
    )
}
