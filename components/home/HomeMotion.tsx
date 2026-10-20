"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import Image from "next/image"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { PEOPLE } from "@/components/home/content"
import s from "@/components/home/Home.module.css"

const LOCALES = [
    { code: "en", short: "EN", long: "English" },
    { code: "no", short: "NO", long: "Norsk" },
]

const SECTIONS = ["research", "team", "press", "contact"] as const

// The header frosts once the first screen has scrolled away.
function subscribeScroll(onChange: () => void) {
    addEventListener("scroll", onChange, { passive: true })
    addEventListener("resize", onChange)
    return () => {
        removeEventListener("scroll", onChange)
        removeEventListener("resize", onChange)
    }
}
const pastStage = () => (document.getElementById("top")?.getBoundingClientRect().bottom ?? Infinity) < 80

// The team portrait only follows a fine pointer on wide screens.
const HOVER = "(pointer: fine) and (min-width: 861px)"
function subscribeHover(onChange: () => void) {
    const mq = matchMedia(HOVER)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
}
const canHover = () => matchMedia(HOVER).matches

const smooth = (x: number) => {
    x = Math.min(Math.max(x, 0), 1)
    return x * x * (3 - 2 * x)
}

// The moving parts of the homepage: the header and phone menu, the first screen
// where scrolling brings the two circles into line, and the team portrait that
// follows the cursor. The sections in between are rendered on the server.
export function HomeMotion() {
    const t = useTranslations("Home")
    const locale = useLocale()
    const [open, setOpen] = useState(false)
    const show = useSyncExternalStore(subscribeScroll, pastStage, () => false)
    const hover = useSyncExternalStore(subscribeHover, canHover, () => false)
    const [portrait, setPortrait] = useState<{ on: boolean; index: number }>({ on: false, index: 0 })

    const formsRef = useRef<HTMLDivElement>(null)
    const pairRef = useRef<HTMLDivElement>(null)
    const f1Ref = useRef<HTMLDivElement>(null)
    const f2Ref = useRef<HTMLDivElement>(null)
    const barRef = useRef<HTMLElement>(null)
    const heroRef = useRef<HTMLElement>(null)
    const stageRef = useRef<HTMLDivElement>(null)
    const wordRef = useRef<HTMLHeadingElement>(null)
    const floatRef = useRef<HTMLDivElement>(null)

    // ---------- phone menu ----------
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

    // ---------- the two circles: scrolling the stage brings them into line;
    // after the stage they scroll away with the page ----------
    useEffect(() => {
        const forms = formsRef.current, pair = pairRef.current, f1 = f1Ref.current, f2 = f2Ref.current
        const bar = barRef.current, hero = heroRef.current, stage = stageRef.current, word = wordRef.current
        if (!forms || !pair || !f1 || !f2 || !bar || !hero || !stage || !word) return

        const still = matchMedia("(prefers-reduced-motion: reduce)").matches
        let CX = 0, CY = 0, R = 0
        let p = 0, mx = 0, my = 0, smx = 0, smy = 0, running = false, raf = 0
        const t0 = performance.now()

        function layout() {
            const W = innerWidth, H = innerHeight
            if (W < 861) {
                // phones: centre the pair in the space between the header and the headline
                const from = bar!.offsetHeight, room = word!.offsetTop - from
                R = Math.round(Math.min(W * 0.3, room * 0.34))
                CX = Math.round(W * 0.5)
                CY = Math.round(from + room / 2)
            } else {
                // desktop: to the right, centred on the headline, so the merged disc sits level with it
                R = Math.round(Math.min(H * 0.26, W * 0.17))
                CX = Math.round(W * 0.72)
                CY = Math.round(word!.offsetTop + word!.offsetHeight / 2)
            }
            forms!.style.setProperty("--d", 2 * R + "px")
            kick()
        }

        function frame(now: number) {
            const t = still ? 8 : (now - t0) / 1000
            // a little drift on its own, then scrolling the stage brings the circles into line
            const intro = 0.18 * (1 - Math.pow(1 - Math.min(t / 14, 1), 3))
            const hr = hero!.getBoundingClientRect()
            const span = Math.max(hero!.offsetHeight - innerHeight, 1)
            const sp = Math.min(Math.max(-hr.top / span, 0), 1)
            const lift = Math.min(0, hr.bottom - innerHeight)
            const target = still ? 0.5 : intro + (1 - intro) * smooth(sp / 0.8)
            p += (target - p) * (still ? 1 : 0.08)
            smx += (mx - smx) * 0.05
            smy += (my - smy) * 0.05
            stage!.style.setProperty("--align", smooth((p - 0.55) / 0.45).toFixed(3))

            // apart as in the logo (dark upper left), together when p reaches 1; the pointer nudges them until then
            const q = 1 - p
            const ox = (-0.28 * R + (still ? 0 : smx * 8)) * q
            const oy = (-0.3 * R + (still ? 0 : smy * 8 + Math.sin(t * 0.35) * 4)) * q
            const y = CY + lift
            f1!.style.transform = `translate3d(${(CX + ox - R).toFixed(1)}px, ${(y + oy - R).toFixed(1)}px, 0)`
            f2!.style.transform = `translate3d(${(CX - ox - R).toFixed(1)}px, ${(y - oy - R).toFixed(1)}px, 0)`
            const visible = y + R * 1.6 > 0
            pair!.style.visibility = visible ? "" : "hidden"
            running = visible && !still
            if (running) raf = requestAnimationFrame(frame)
        }

        // the loop runs while the circles are on screen; scrolling back up restarts it
        function kick() {
            if (!running) {
                running = true
                raf = requestAnimationFrame(frame)
            }
        }
        const onPointer = (e: PointerEvent) => {
            mx = (e.clientX / innerWidth) * 2 - 1
            my = (e.clientY / innerHeight) * 2 - 1
        }

        let alive = true
        addEventListener("pointermove", onPointer, { passive: true })
        addEventListener("scroll", kick, { passive: true })
        addEventListener("resize", layout)
        layout()
        document.fonts?.ready.then(() => { if (alive) layout() }) // the headline can change height once Geist is in
        return () => {
            alive = false
            cancelAnimationFrame(raf)
            removeEventListener("pointermove", onPointer)
            removeEventListener("scroll", kick)
            removeEventListener("resize", layout)
        }
    }, [])

    // ---------- team: the portrait follows the cursor up and down the left column ----------
    useEffect(() => {
        const float = floatRef.current
        const list = document.getElementById("people")
        if (!hover || !float || !list) return

        const still = matchMedia("(prefers-reduced-motion: reduce)").matches
        let y = 0, fy = 0, raf = 0, on = false
        const target = (clientY: number) => {
            // centre on the cursor, but stay below the "Team" label and inside the list
            const r = list.getBoundingClientRect(), h = float.offsetHeight
            return Math.min(Math.max(clientY - h / 2, r.top + 36), r.bottom - h)
        }
        const tick = () => {
            fy += (y - fy) * (still ? 1 : 0.14)
            float.style.transform = `translateY(${fy}px)`
            raf = Math.abs(y - fy) > 0.5 ? requestAnimationFrame(tick) : 0
        }
        const move = (e: MouseEvent) => {
            y = target(e.clientY)
            if (!raf) raf = requestAnimationFrame(tick)
        }

        const off: (() => void)[] = []
        list.querySelectorAll<HTMLElement>("summary[data-person]").forEach((summary) => {
            const index = Number(summary.dataset.person)
            const enter = (e: MouseEvent) => {
                if (!on) fy = target(e.clientY)
                on = true
                setPortrait({ on: true, index })
                move(e)
            }
            const leave = () => {
                on = false
                setPortrait((p) => ({ ...p, on: false }))
            }
            summary.addEventListener("mouseenter", enter)
            summary.addEventListener("mouseleave", leave)
            summary.addEventListener("mousemove", move)
            off.push(() => {
                summary.removeEventListener("mouseenter", enter)
                summary.removeEventListener("mouseleave", leave)
                summary.removeEventListener("mousemove", move)
            })
        })
        return () => {
            cancelAnimationFrame(raf)
            off.forEach((fn) => fn())
        }
    }, [hover])

    const close = () => setOpen(false)
    const languages = (long: boolean) => (
        <span className={s.lang}>
            {LOCALES.map((l, i) => (
                <span key={l.code}>
                    {i > 0 && " / "}
                    <Link href="/" locale={l.code} scroll={false} aria-current={l.code === locale ? "true" : undefined} onClick={close}>
                        {long ? l.long : l.short}
                    </Link>
                </span>
            ))}
        </span>
    )

    return (
        <>
            <div className={s.forms} ref={formsRef} aria-hidden="true">
                <div className={s.haze}><i /><i /><i /><i /></div>
                <div className={s.pair} ref={pairRef}>
                    <div className={clsx(s.f, s.f1)} ref={f1Ref}><i /></div>
                    <div className={clsx(s.f, s.f2)} ref={f2Ref}><i /></div>
                </div>
            </div>

            <header className={clsx(s.bar, show && s.show, open && s.clear)} ref={barRef}>
                <a href="#top" onClick={close}>
                    <Image className={s.logo} src="/images/LogoReliable/logo-svart-trim.png" alt="Reliable" width={1710} height={319} sizes="129px" style={{ width: "auto" }} preload />
                </a>
                <nav className={s.nav} aria-label="Main">
                    {SECTIONS.map((id) => <a key={id} href={`#${id}`}>{t(`nav.${id}`)}</a>)}
                    <Link href="/access">{t("nav.login")}</Link>
                    {languages(false)}
                </nav>
                <button type="button" className={s.menuBtn} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
                    {open ? t("close") : t("menu")}
                </button>
            </header>

            <div className={clsx(s.menu, open && s.menuOpen)} id="menu">
                {SECTIONS.map((id) => <a key={id} className={s.item} href={`#${id}`} onClick={close}>{t(`nav.${id}`)}</a>)}
                <Link className={s.item} href="/access" onClick={close}>{t("nav.login")}</Link>
                {languages(true)}
            </div>

            <section className={s.hero} id="top" ref={heroRef}>
                <div className={s.stage} ref={stageRef}>
                    <div className={s.title}>
                        <h1 className={s.word} ref={wordRef}><span>Reliable</span><span>{t("claim")}</span></h1>
                        <p className={s.meta}>{t("meta")}</p>
                    </div>
                </div>
            </section>

            {hover && (
                <div className={clsx(s.float, portrait.on && s.on)} ref={floatRef} aria-hidden="true">
                    {PEOPLE.map((person, i) => (
                        <Image key={person.img} className={clsx(i === portrait.index && s.on)} src={person.img} alt="" fill sizes="230px" />
                    ))}
                </div>
            )}
        </>
    )
}
