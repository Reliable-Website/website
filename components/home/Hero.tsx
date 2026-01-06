"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Award } from "lucide-react"

export function Hero() {
    const t = useTranslations('Hero')
    return (
        <section className="relative overflow-hidden py-20 pt-56 sm:pt-64 md:pt-56 lg:pt-56 xl:pt-56 lg:pb-20 xl:pb-24">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Award Badge - Positioned at angle on right */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-28 right-8 sm:top-32 sm:right-16 md:top-36 md:right-24 lg:right-32 z-20"
            >
                <Link
                    href="/blog/ecai-2025-outstanding-demo-award"
                    className="group block hover:scale-105 transition-transform duration-300"
                >
                    {/* Badge shape */}
                    <div className="relative">
                        {/* Main circular badge */}
                        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-xl shadow-amber-500/40 flex items-center justify-center border-4 border-yellow-300 group-hover:shadow-amber-500/60 transition-shadow">
                            {/* Inner circle */}
                            <div className="w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 border-2 border-yellow-200/50 flex flex-col items-center justify-center text-center p-1 sm:p-2">
                                <Award className="h-4 w-4 sm:h-6 sm:w-6 text-amber-950 mb-0.5" />
                                <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-amber-950 leading-tight">ECAI 2025</span>
                                <span className="text-[6px] sm:text-[8px] md:text-[10px] font-semibold text-amber-900 leading-tight">Award Winner</span>
                            </div>
                        </div>
                        {/* Ribbon tails */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                            <div className="w-3 sm:w-4 h-6 sm:h-8 bg-gradient-to-b from-amber-600 to-amber-700 transform -rotate-12 rounded-b-sm" />
                            <div className="w-3 sm:w-4 h-6 sm:h-8 bg-gradient-to-b from-amber-600 to-amber-700 transform rotate-12 rounded-b-sm" />
                        </div>
                    </div>
                </Link>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="font-heading text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                    </motion.div>

                    <motion.p
                        className="mt-4 text-lg leading-8 text-muted-foreground md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t('subtitle')}
                    </motion.p>

                    <motion.div
                        className="mt-10 flex items-center justify-center gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button asChild size="lg" className="relative overflow-hidden rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group">
                            <Link href="/contact" className="relative z-10">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                {t('cta')}
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Background decorative elements - Animated Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-primary/10"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-primary/5"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[1000px] rounded-full bg-gradient-to-b from-sky-100/30 to-transparent blur-[100px] dark:from-sky-900/10" />
            </div>
        </section>
    )
}
