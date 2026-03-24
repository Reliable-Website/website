"use client"

import { useRef, useEffect, useState } from "react"

interface MagnetLinesProps {
    rows?: number
    columns?: number
    mobileRows?: number
    mobileColumns?: number
    lineColor?: string
    lineWidth?: string
    lineHeight?: string
    baseAngle?: number
}

export function MagnetLines({
    rows = 9,
    columns = 9,
    mobileRows,
    mobileColumns,
    lineColor = "rgba(97, 126, 255, 0.2)",
    lineWidth = "1px",
    lineHeight = "24px",
    baseAngle = -10,
}: MagnetLinesProps) {
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        setMounted(true)
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    // Use mobile dimensions only after mount to avoid hydration mismatch
    const actualRows = mounted && isMobile && mobileRows ? mobileRows : rows
    const actualColumns = mounted && isMobile && mobileColumns ? mobileColumns : columns

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const items = Array.from(container.querySelectorAll<HTMLSpanElement>("span"))

        // Cache rects so pointermove never forces reflow
        let cachedCenters: { x: number; y: number }[] = []
        const updateCenters = () => {
            cachedCenters = items.map((item) => {
                const rect = item.getBoundingClientRect()
                return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 }
            })
        }
        updateCenters()

        const onResize = () => updateCenters()
        window.addEventListener("resize", onResize)

        const applyRotations = (pointer: { x: number; y: number }) => {
            items.forEach((item, i) => {
                const { x: centerX, y: centerY } = cachedCenters[i]
                const b = pointer.x - centerX
                const a = pointer.y - centerY
                const c = Math.sqrt(a * a + b * b) || 1
                const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1)
                item.style.setProperty("--rotate", `${r}deg`)
            })
        }

        // Throttle to one update per animation frame
        let rafId: number | null = null
        const onPointerMove = (e: PointerEvent) => {
            if (rafId !== null) return
            rafId = requestAnimationFrame(() => {
                applyRotations({ x: e.clientX, y: e.clientY })
                rafId = null
            })
        }

        window.addEventListener("pointermove", onPointerMove)

        // Initialize with middle element position
        if (cachedCenters.length) {
            const mid = cachedCenters[Math.floor(cachedCenters.length / 2)]
            applyRotations(mid)
        }

        return () => {
            window.removeEventListener("pointermove", onPointerMove)
            window.removeEventListener("resize", onResize)
            if (rafId !== null) cancelAnimationFrame(rafId)
        }
    }, [isMobile])

    const total = actualRows * actualColumns
    const spans = Array.from({ length: total }, (_, i) => (
        <span
            key={i}
            className="block rounded-full transition-transform duration-1000 ease-out"
            style={{
                transform: `rotate(var(--rotate, ${baseAngle}deg))`,
                backgroundColor: lineColor,
                width: lineWidth,
                height: lineHeight,
                willChange: "transform",
            }}
        />
    ))

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_70%_65%_at_50%_20%,#000_50%,transparent_100%)]"
        >
            <div
                className="w-full h-full"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${actualColumns}, 1fr)`,
                    gridTemplateRows: `repeat(${actualRows}, 1fr)`,
                    placeItems: "center",
                }}
            >
                {spans}
            </div>
        </div>
    )
}
