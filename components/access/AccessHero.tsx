"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { CALENDLY_URL, loginUrlFor } from "@/lib/constants"

type Node = { x: number; y: number; vx: number; vy: number; r: number }

// Interactive "meaning-space" backdrop: nodes only come alive around the cursor.
function Constellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        let W = 0, H = 0
        let nodes: Node[] = []
        let raf = 0
        const mouse = { x: -1, y: -1 }
        const R = 205, LINK = 118

        const resize = () => {
            const r = canvas.getBoundingClientRect()
            W = r.width; H = r.height
            canvas.width = W * dpr; canvas.height = H * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            if (mouse.x < 0) { mouse.x = W * 0.5; mouse.y = H * 0.42 }
        }
        const build = () => {
            const n = Math.round(Math.min(150, Math.max(60, (W * H) / 12000)))
            nodes = []
            for (let i = 0; i < n; i++) {
                nodes.push({
                    x: Math.random() * W, y: Math.random() * H,
                    vx: reduce ? 0 : (Math.random() - 0.5) * 0.16,
                    vy: reduce ? 0 : (Math.random() - 0.5) * 0.16,
                    r: Math.random() * 1.4 + 0.8,
                })
            }
        }
        const frame = () => {
            ctx.clearRect(0, 0, W, H)
            for (const a of nodes) {
                a.x += a.vx; a.y += a.vy
                if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20
                if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20
            }
            const near: { a: Node; t: number }[] = []
            for (const a of nodes) {
                const d = Math.hypot(a.x - mouse.x, a.y - mouse.y)
                if (d < R) near.push({ a, t: 1 - d / R })
            }
            // local web between the awake nodes
            for (let i = 0; i < near.length; i++) {
                for (let j = i + 1; j < near.length; j++) {
                    const a = near[i].a, b = near[j].a
                    const dd = Math.hypot(a.x - b.x, a.y - b.y)
                    if (dd < LINK) {
                        const al = (1 - dd / LINK) * Math.min(near[i].t, near[j].t) * 0.5
                        ctx.strokeStyle = `rgba(160,173,249,${al.toFixed(3)})`
                        ctx.lineWidth = 1
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
                    }
                }
            }
            // spokes from the cursor + glowing dots
            for (const { a, t } of near) {
                ctx.strokeStyle = `rgba(106,125,250,${(t * 0.15).toFixed(3)})`
                ctx.lineWidth = 1
                ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(a.x, a.y); ctx.stroke()
                const rad = a.r + t * 1.2
                ctx.fillStyle = `rgba(106,125,250,${(t * 0.22).toFixed(3)})`
                ctx.beginPath(); ctx.arc(a.x, a.y, rad + 2.5, 0, 6.2832); ctx.fill()
                const cr = Math.round(120 + t * (106 - 120)), cg = Math.round(120 + t * (125 - 120)), cb = Math.round(120 + t * (250 - 120))
                ctx.fillStyle = `rgba(${cr},${cg},${cb},${(0.28 + t * 0.38).toFixed(3)})`
                ctx.beginPath(); ctx.arc(a.x, a.y, rad, 0, 6.2832); ctx.fill()
            }
            raf = requestAnimationFrame(frame)
        }
        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect()
            mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
        }
        const onResize = () => { resize(); build() }

        resize(); build(); raf = requestAnimationFrame(frame)
        window.addEventListener("pointermove", onMove)
        window.addEventListener("resize", onResize)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("pointermove", onMove)
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
}

export function AccessHero() {
    const t = useTranslations("Access")
    const loginUrl = loginUrlFor(useLocale())

    // Italicise the trailing "Presedens" in the localized title.
    const title = t("title")
    const idx = title.lastIndexOf("Presedens")
    const pre = idx >= 0 ? title.slice(0, idx) : title

    return (
        <>
            <Constellation />

            <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6 py-24 text-center">
                <h1 className="text-[clamp(42px,6.4vw,76px)] font-normal leading-[1.03] tracking-[-0.028em]">
                    {pre}
                    {idx >= 0 && <em className="font-normal italic text-himmel">Presedens</em>}
                </h1>

                <div className="mx-auto mt-11 grid w-full max-w-[620px] grid-cols-1 gap-4 text-left sm:grid-cols-2">
                    {/* Book a demo — primary path for new visitors */}
                    <div className="flex flex-col rounded-[18px] border border-primary/30 bg-primary/[0.08] p-7">
                        <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-himmel">{t("demoBadge")}</span>
                        <h2 className="mt-3 text-[23px] font-medium tracking-[-0.02em]">{t("demoHeading")}</h2>
                        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-paper-60">{t("demoBody")}</p>
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-6 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#7d8dff]"
                        >
                            {t("demoCta")}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    {/* Log in — for existing users with an account */}
                    <div className="flex flex-col rounded-[18px] border border-white/10 bg-white/[0.03] p-7">
                        <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-paper-30">{t("loginBadge")}</span>
                        <h2 className="mt-3 text-[23px] font-medium tracking-[-0.02em]">{t("loginHeading")}</h2>
                        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-paper-60">{t("loginBody")}</p>
                        <a
                            href={loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/30 px-5 py-2.5 text-[14.5px] font-semibold text-hvit transition-colors hover:bg-hvit hover:text-natt"
                        >
                            {t("loginCta")}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
