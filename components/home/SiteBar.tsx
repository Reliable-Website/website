"use client"

import { useEffect, useState, useSyncExternalStore, type Ref } from "react"
import Image from "next/image"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import s from "@/components/home/Home.module.css"

const LOCALES = [
    { code: "en", short: "EN", long: "English" },
    { code: "no", short: "NO", long: "Norsk" },
]

const SECTIONS = ["research", "team", "press", "contact"] as const

// The header frosts once the first screen (#top) has scrolled away.
function subscribeScroll(onChange: () => void) {
    addEventListener("scroll", onChange, { passive: true })
    addEventListener("resize", onChange)
    return () => {
        removeEventListener("scroll", onChange)
        removeEventListener("resize", onChange)
    }
}
const pastStage = () => (document.getElementById("top")?.getBoundingClientRect().bottom ?? Infinity) < 80

// The header and phone menu: the logo and the homepage's index. On the homepage the
// links scroll to its sections; elsewhere they lead back to them.
export function SiteBar({ home = false, ref }: { home?: boolean; ref?: Ref<HTMLElement> }) {
    const t = useTranslations("Home")
    const locale = useLocale()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const show = useSyncExternalStore(subscribeScroll, pastStage, () => false)

    useEffect(() => {
        const close = () => setOpen(false)
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
        const wide = matchMedia("(min-width: 861px)")
        const onWide = (e: MediaQueryListEvent) => { if (e.matches) close() }
        addEventListener("keydown", onKey)
        wide.addEventListener("change", onWide)
        return () => {
            removeEventListener("keydown", onKey)
            wide.removeEventListener("change", onWide)
        }
    }, [])

    const close = () => setOpen(false)
    const here = pathname === "/access" ? "page" : undefined
    const section = (id: string, className?: string) => home
        ? <a key={id} className={className} href={`#${id}`} onClick={close}>{t(`nav.${id}`)}</a>
        : <Link key={id} className={className} href={`/#${id}`} onClick={close}>{t(`nav.${id}`)}</Link>
    const languages = (long: boolean) => (
        <span className={s.lang}>
            {LOCALES.map((l, i) => (
                <span key={l.code}>
                    {i > 0 && " / "}
                    <Link href={home ? "/" : pathname} locale={l.code} scroll={!home} aria-current={l.code === locale ? "true" : undefined} onClick={close}>
                        {long ? l.long : l.short}
                    </Link>
                </span>
            ))}
        </span>
    )
    const logo = <Image className={s.logo} src="/images/LogoReliable/logo-svart-trim.png" alt="Reliable" width={1710} height={319} sizes="129px" style={{ width: "auto" }} preload />

    return (
        <>
            <header className={clsx(s.bar, show && s.show, open && s.clear)} ref={ref}>
                {home ? <a href="#top" onClick={close}>{logo}</a> : <Link href="/" onClick={close}>{logo}</Link>}
                <nav className={s.nav} aria-label="Main">
                    {SECTIONS.map((id) => section(id))}
                    <Link href="/access" aria-current={here}>{t("nav.login")}</Link>
                    {languages(false)}
                </nav>
                <button type="button" className={s.menuBtn} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
                    {open ? t("close") : t("menu")}
                </button>
            </header>

            <div className={clsx(s.menu, open && s.menuOpen)} id="menu">
                {SECTIONS.map((id) => section(id, s.item))}
                <Link className={s.item} href="/access" aria-current={here} onClick={close}>{t("nav.login")}</Link>
                {languages(true)}
            </div>
        </>
    )
}
