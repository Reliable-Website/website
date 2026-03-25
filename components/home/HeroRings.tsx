"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"

interface EllipseConfig {
    cx: number
    cy: number
    rx: number
    ry: number
    rotation: number
    color: string
}

function Ellipse({ config, index, mouseX, mouseY }: { config: EllipseConfig; index: number; mouseX: number; mouseY: number }) {
    const ref = useRef<SVGEllipseElement>(null)
    const offsetX = useSpring(0, { stiffness: 40, damping: 20 })
    const offsetY = useSpring(0, { stiffness: 40, damping: 20 })

    useEffect(() => {
        if (!ref.current) return
        const svg = ref.current.ownerSVGElement
        if (!svg) return
        const rect = svg.getBoundingClientRect()

        const centerX = rect.left + (config.cx / 100) * rect.width
        const centerY = rect.top + (config.cy / 100) * rect.height

        const dx = centerX - mouseX
        const dy = centerY - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxEffect = 500
        const strength = Math.max(0, 1 - dist / maxEffect)

        offsetX.set((dx / (dist || 1)) * strength * 25)
        offsetY.set((dy / (dist || 1)) * strength * 25)
    }, [mouseX, mouseY, config.cx, config.cy, offsetX, offsetY])

    // Each ring gets a different swing and speed
    const swing = index % 2 === 0 ? 14 : -10
    const duration = 8 + index * 2

    return (
        <motion.g
            style={{ translateX: offsetX, translateY: offsetY }}
            animate={{
                rotate: [0, swing, -swing, 0],
            }}
            transition={{
                rotate: {
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        >
            <ellipse
                ref={ref}
                cx={`${config.cx}%`}
                cy={`${config.cy}%`}
                rx={config.rx}
                ry={config.ry}
                fill="none"
                stroke={config.color}
                strokeWidth="1"
                transform={`rotate(${config.rotation}, ${config.cx}%, ${config.cy}%)`}
            />
        </motion.g>
    )
}

const ellipses: EllipseConfig[] = [
    // Top-left — three rings, asymmetric
    { cx: 0, cy: -8, rx: 380, ry: 230, rotation: -20, color: "rgba(0, 0, 0, 0.7)" },
    { cx: 7, cy: -2, rx: 300, ry: 180, rotation: -35, color: "rgba(97, 126, 255, 0.7)" },
    { cx: -7, cy: 2, rx: 460, ry: 270, rotation: -10, color: "rgba(0, 0, 0, 0.7)" },
    // Bottom-right — two rings, different proportions
    { cx: 95, cy: 100, rx: 380, ry: 220, rotation: 20, color: "rgba(0, 0, 0, 0.7)" },
    { cx: 88, cy: 105, rx: 440, ry: 190, rotation: 30, color: "rgba(97, 126, 255, 0.7)" },
]

export function HeroRings() {
    const [mouse, setMouse] = useState({ x: -1000, y: -1000 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
            <svg className="w-full h-full overflow-visible">
                {ellipses.map((config, i) => (
                    <Ellipse key={i} config={config} index={i} mouseX={mouse.x} mouseY={mouse.y} />
                ))}
            </svg>
        </div>
    )
}
