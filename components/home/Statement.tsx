"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { useTranslations } from "next-intl"

const BLUE = "linear-gradient(rgba(160,173,249,.5), rgba(160,173,249,.5))"
const RED = "linear-gradient(rgba(237,99,84,.35), rgba(237,99,84,.35))"

// Short manifesto. The highlighted phrases sweep in one after another when the
// paragraph scrolls into view, like search hits.
export function Statement() {
    const t = useTranslations('Statement')
    const ref = useRef<HTMLParagraphElement>(null)
    const [on, setOn] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setOn(true); io.disconnect() }
        }, { threshold: 0.5 })
        io.observe(el)
        return () => io.disconnect()
    }, [])

    let n = 0
    const highlight = (image: string, chunks: ReactNode) => {
        const k = n++
        return (
            <mark
                key={k}
                className="bg-transparent bg-no-repeat px-0.5 text-inherit transition-[background-size] duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
                style={{
                    backgroundImage: image,
                    backgroundPosition: "0 85%",
                    backgroundSize: on ? "100% 40%" : "0% 40%",
                    transitionDelay: `${250 + k * 380}ms`,
                }}
            >
                {chunks}
            </mark>
        )
    }

    return (
        <section className="py-20 md:py-[120px]">
            <div className="mx-auto max-w-[1180px] px-6">
                <p
                    ref={ref}
                    className="max-w-[24em] leading-[1.32] tracking-[-0.018em]"
                    style={{ fontSize: "clamp(26px, 3.1vw, 42px)", fontWeight: 400 }}
                >
                    {t.rich('text', { mark: (c) => highlight(BLUE, c), miss: (c) => highlight(RED, c) })}
                </p>
            </div>
        </section>
    )
}
