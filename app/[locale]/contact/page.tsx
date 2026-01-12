"use client"

import { MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function ContactPage() {
    const t = useTranslations('Contact')

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20">
            <Header />

            <main className="flex-1 relative overflow-hidden pt-24">
                {/* Dynamic Background */}
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
                </div>

                <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-24 md:pb-40 relative z-10">
                    {/* Title Section - Mobile only */}
                    <div className="lg:hidden mb-12">
                        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            {t('title')}
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Markus Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:mt-12 order-1 lg:order-2"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
                                <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 md:p-10 shadow-2xl overflow-hidden">

                                    {/* Decorative circle */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col gap-8">
                                        <div className="flex items-center gap-6">
                                            <div className="relative h-24 w-24 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
                                                <Image
                                                    src="/images/Team/markus.jpg"
                                                    alt="Markus Kreutzer"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-2xl font-bold">{t('markus.name')}</h3>
                                                <p className="text-primary font-medium text-lg">{t('markus.title')}</p>
                                            </div>
                                        </div>

                                        <blockquote className="text-xl text-muted-foreground italic leading-relaxed border-l-4 border-primary/20 pl-6">
                                            "{t('markus.quote')}"
                                        </blockquote>

                                        <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                                            <a
                                                href="mailto:markus@reliableai.no"
                                                className="group/link inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                markus@reliableai.no
                                                <ArrowRight className="h-5 w-5 transform group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Header & Intro */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8 lg:mt-24 order-2 lg:order-1"
                        >
                            <div className="space-y-6 hidden lg:block">
                                <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                                    {t('title')}
                                </h1>
                            </div>

                            {/* Office Card */}
                            <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:bg-card/50 transition-colors duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-semibold mb-2">{t('office')}</h3>
                                        <address className="not-italic text-muted-foreground leading-relaxed">
                                            Akersbakken 30<br />
                                            0172 Oslo<br />
                                            Norway
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
