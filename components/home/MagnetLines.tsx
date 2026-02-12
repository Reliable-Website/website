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
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const actualRows = isMobile && mobileRows ? mobileRows : rows
    const actualColumns = isMobile && mobileColumns ? mobileColumns : columns

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const items = container.querySelectorAll<HTMLSpanElement>("span")

        const onPointerMove = (pointer: { x: number; y: number }) => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect()
                const centerX = rect.x + rect.width / 2
                const centerY = rect.y + rect.height / 2

                const b = pointer.x - centerX
                const a = pointer.y - centerY
                const c = Math.sqrt(a * a + b * b) || 1
                const r =
                    ((Math.acos(b / c) * 180) / Math.PI) *
                    (pointer.y > centerY ? 1 : -1)

                item.style.setProperty("--rotate", `${r}deg`)
            })
        }

        window.addEventListener("pointermove", onPointerMove)

        // Initialize with middle element position
        if (items.length) {
            const middleIndex = Math.floor(items.length / 2)
            const rect = items[middleIndex].getBoundingClientRect()
            onPointerMove({ x: rect.x, y: rect.y })
        }

        return () => {
            window.removeEventListener("pointermove", onPointerMove)
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
