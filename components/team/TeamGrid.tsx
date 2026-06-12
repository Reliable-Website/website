"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

type TeamMember = {
    name: string
    email?: string
    image: string
    role: string
    descriptionKey: string
}

const FOUNDERS: TeamMember[] = [
    { name: "Markus Kreutzer", email: "markus@reliableai.no", image: "/images/Team/markus.jpg", role: "ceo_co_founder", descriptionKey: "markus" },
    { name: "Halvor Tyseng", email: "halvor@reliableai.no", image: "/images/Team/halvor.jpg", role: "cto_co_founder", descriptionKey: "halvor" },
    { name: "Jonas Timmann Mjaaland", email: "jonas@reliableai.no", image: "/images/Team/jonas.jpg", role: "cpo_co_founder", descriptionKey: "jonas" },
    { name: "Tor Ole Bigton Odden", email: "torole@reliableai.no", image: "/images/Team/tor.jpg", role: "co_founder", descriptionKey: "torole" },
    { name: "Anders Malthe-Sørenssen", email: "anders@reliableai.no", image: "/images/Team/anders.jpg", role: "co_founder", descriptionKey: "anders" },
]

const DESIGN: TeamMember[] = [
    { name: "Martine Goto", image: "/images/Team/martine.jpeg", role: "graphic_designer", descriptionKey: "martine" },
]

const BOARD: TeamMember[] = [
    { name: "Lars-Petter Windelstad Kjos", image: "/images/Team/larspetter.png", role: "board_member", descriptionKey: "larspetter" },
    { name: "Mathilde Fiksdahl", image: "/images/Team/mathilde.jpg", role: "board_member", descriptionKey: "mathilde" },
]

const ALL = [...FOUNDERS, ...DESIGN, ...BOARD]

export function TeamGrid() {
    const t = useTranslations('Team')
    const [active, setActive] = useState(0)
    const current = ALL[active]

    const row = (member: TeamMember, idx: number) => (
        <button
            key={member.name}
            type="button"
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            className={`group flex w-full cursor-default items-baseline gap-5 border-b border-rule-soft px-2 py-4 text-left transition-[padding] duration-300 ${active === idx ? "pl-7" : ""}`}
        >
            <span
                className={`font-heading text-[clamp(26px,3.2vw,42px)] leading-[1.1] transition-colors duration-200 ${active === idx ? "italic text-foreground" : "text-ink-60"}`}
                style={{ fontWeight: 420 }}
            >
                {member.name}
            </span>
            <span className={`font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${active === idx ? "text-primary" : "text-ink-30"}`}>
                {t(`roles.${member.role}`)}
            </span>
        </button>
    )

    return (
        <section className="pb-24">
            {/* Desktop masthead: names left, sticky portrait pane right */}
            <div className="mx-auto hidden max-w-[1180px] grid-cols-[1fr_340px] gap-16 px-6 md:grid">
                <div>
                    <div className="sec-num pt-12">{t('groupFounders')}</div>
                    {FOUNDERS.map((m, i) => row(m, i))}
                    <div className="sec-num pt-12">{t('groupDesign')}</div>
                    {DESIGN.map((m, i) => row(m, FOUNDERS.length + i))}
                    <div className="sec-num pt-12">{t('groupBoard')}</div>
                    {BOARD.map((m, i) => row(m, FOUNDERS.length + DESIGN.length + i))}
                </div>

                <div className="sticky top-24 self-start pt-12">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-rule-soft shadow-[0_24px_60px_-18px_rgba(39,39,38,.35)]">
                        {ALL.map((m, i) => (
                            <Image
                                key={m.name}
                                src={m.image}
                                alt={m.name}
                                fill
                                sizes="340px"
                                className={`object-cover transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"}`}
                            />
                        ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-ink-60">{t(`descriptions.${current.descriptionKey}`)}</p>
                    {current.email && (
                        <a href={`mailto:${current.email}`} className="mt-3 block font-mono text-[12.5px] text-ink-60 transition-colors hover:text-foreground">
                            {current.email}
                        </a>
                    )}
                </div>
            </div>

            {/* Mobile: simple stacked cards */}
            <div className="mx-auto max-w-[1180px] space-y-10 px-6 pt-10 md:hidden">
                {[{ label: t('groupFounders'), list: FOUNDERS }, { label: t('groupDesign'), list: DESIGN }, { label: t('groupBoard'), list: BOARD }].map((group) => (
                    <div key={group.label}>
                        <div className="sec-num">{group.label}</div>
                        <div className="space-y-8">
                            {group.list.map((m) => (
                                <div key={m.name}>
                                    <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl border border-rule-soft">
                                        <Image src={m.image} alt={m.name} fill sizes="100vw" className="object-cover" />
                                    </div>
                                    <h3 className="font-heading text-2xl" style={{ fontWeight: 460 }}>{m.name}</h3>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-primary">{t(`roles.${m.role}`)}</p>
                                    {m.email && (
                                        <a href={`mailto:${m.email}`} className="mt-1 block font-mono text-[12.5px] text-ink-60">{m.email}</a>
                                    )}
                                    <p className="mt-3 text-sm leading-relaxed text-ink-60">{t(`descriptions.${m.descriptionKey}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
