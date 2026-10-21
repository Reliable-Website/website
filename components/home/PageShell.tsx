import type { ReactNode } from "react"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { SiteBar } from "@/components/home/SiteBar"
import { SiteFooter } from "@/components/home/SiteFooter"
import s from "@/components/home/Home.module.css"
import p from "@/components/home/Page.module.css"

// A short page in the homepage's frame (the log-in page, the 404): its header and footer
// on the blue haze, a large title, and a few ruled rows to go on from.
export function PageShell({ title, children }: { title: string; children: ReactNode }) {
    const t = useTranslations("Home")

    return (
        <div className={s.page}>
            <div className={p.page}>
                <div className={s.forms} aria-hidden="true">
                    <div className={s.haze}><i /><i /><i /><i /></div>
                </div>
                <a className={s.skip} href="#main">{t("skip")}</a>
                <SiteBar />
                <main id="main" className={clsx(s.main, p.main)}>
                    <div className={p.head} id="top">
                        <h1 className={p.title}>{title}</h1>
                    </div>
                    <div className={p.rows}>{children}</div>
                </main>
                <SiteFooter />
            </div>
        </div>
    )
}

type Row = {
    label: string
    title: string
    note?: string
    href: string
    newTab?: boolean // ↗ and a new tab, as on the homepage; otherwise → in the same tab
    quiet?: boolean // a secondary way on, set in grey until hovered
}

// One ruled row: who it is for on the left, where it goes beside it.
export function PageRow({ label, title, note, href, newTab = false, quiet = false }: Row) {
    const cells = (
        <>
            <span className={p.k}>{label}</span>
            <span className={p.v}>
                <span className={s.u}>{title}</span>
                {note && <small>{note}</small>}
            </span>
            <span className={p.arr} aria-hidden="true">{newTab ? "↗" : "→"}</span>
        </>
    )
    const className = clsx(p.row, quiet && p.quiet)

    if (href.startsWith("/")) return <Link className={className} href={href}>{cells}</Link>
    return newTab
        ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{cells}</a>
        : <a className={className} href={href}>{cells}</a>
}
