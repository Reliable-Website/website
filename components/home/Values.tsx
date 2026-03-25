"use client"

import { useTranslations } from "next-intl"
import { ShieldCheck, GraduationCap, PenTool } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"

const valueConfig = [
    { key: "research", icon: GraduationCap, number: "01" },
    { key: "reliable", icon: ShieldCheck,   number: "02" },
    { key: "custom",   icon: PenTool,       number: "03" },
]

function SpotlightCard({ icon: Icon, number, title, description, index }: {
    icon: LucideIcon
    number: string
    title: string
    description: string
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState({ x: -999, y: -999 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseLeave = () => setPos({ x: -999, y: -999 })

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative group rounded-3xl bg-white p-8 md:p-10 shadow-sm overflow-hidden cursor-default"
        >
            {/* Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(480px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.07), transparent 60%)`,
                }}
            />

            {/* Decorative number */}
            <span className="absolute top-6 right-8 font-heading text-6xl font-bold text-slate-100 select-none leading-none">
                {number}
            </span>

            {/* Icon */}
            <div className="relative z-10 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                </div>
            </div>

            {/* Text */}
            <div className="relative z-10 space-y-3">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                    {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export function Values() {
    const t = useTranslations('Values')

    return (
        <section className="py-16 md:py-28 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                        Våre <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">prinsipper</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {valueConfig.map((item, i) => (
                        <SpotlightCard
                            key={item.key}
                            icon={item.icon}
                            number={item.number}
                            title={t(`${item.key}.name`)}
                            description={t(`${item.key}.description`)}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
