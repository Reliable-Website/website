"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Award } from "lucide-react"
import { HeroRings } from "./HeroRings"
import Image from "next/image"

export function Hero() {
    const t = useTranslations('Hero')
    return (
        <section className="relative pt-48 pb-28 md:pt-56 md:pb-44" style={{ clipPath: "inset(-100% 0 0 0)" }}>
            {/* Decorative rings - bottom corners */}
            <HeroRings />

            {/* Award Badge - Positioned at angle on left */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-28 right-4 sm:top-32 sm:right-[calc(50%-380px)] md:top-36 md:right-[calc(50%-520px)] z-20"
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
                    </div>
                </Link>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex justify-center"
                    >
                        <div id="hero-logo" className="relative w-[400px] h-[98px] sm:w-[560px] sm:h-[138px] md:w-[720px] md:h-[177px] -mb-6 sm:-mb-8 md:-mb-10">
                            <Image
                                src="/images/LogoReliable/reliableai.png"
                                alt="Reliable AI"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl"
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
                        <Button asChild size="lg" className="relative overflow-hidden rounded-full px-8 bg-black text-white hover:bg-[#617eff] shadow-lg shadow-black/20 hover:shadow-[#617eff]/40 transition-all duration-300 group">
                            <Link href="/contact" className="relative z-10">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                {t('cta')}
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
