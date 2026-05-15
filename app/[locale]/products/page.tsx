"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { CALENDLY_URL } from "@/lib/constants"
import { ArrowRight, Check, Search, FileText, Plus } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export default function ProductsPage() {
    const t = useTranslations('Products')

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Header Section */}
                <section className="pt-32 pb-12 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-4 md:mb-6">
                                {t('title')}
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t('subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* KOFA Search Section */}
                <section id="presedens" className="py-12 md:py-16 bg-background scroll-mt-20">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Mobile Layout */}
                        <div className="flex flex-col gap-8 md:hidden">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit border-transparent bg-primary text-primary-foreground">
                                {t('kofa.tag')}
                            </div>
                            <h2 className="font-heading text-3xl font-bold tracking-tight">
                                {t('kofa.title')}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t('kofa.description')}
                            </p>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
                                <Image
                                    src="/images/Products/presedens.png"
                                    alt="Presedens — Procurement law search interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <p className="font-semibold">{t('kofa.cardTitle')}</p>
                                    <p className="text-sm text-muted-foreground">{t('kofa.cardSubtitle')}</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature3')}</span>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-3">
                                <Button asChild size="lg" className="rounded-full w-full">
                                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                        {t('kofa.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="rounded-full w-full hover:bg-muted hover:text-foreground">
                                    <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer">
                                        {t('kofa.login')}
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                    {t('kofa.tag')}
                                </div>
                                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                                    {t('kofa.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {t('kofa.description')}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Search className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature1')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature2')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Check className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature3')}</span>
                                    </li>
                                </ul>
                                <div className="flex gap-4">
                                    <Button asChild size="lg" className="rounded-full">
                                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                            {t('kofa.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="rounded-full hover:bg-muted hover:text-foreground">
                                        <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer">
                                            {t('kofa.login')}
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted"
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                            >
                                <Image
                                    src="/images/Products/presedens.png"
                                    alt="Presedens — Procurement law search interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold">{t('kofa.cardTitle')}</p>
                                            <p className="text-sm text-muted-foreground">{t('kofa.cardSubtitle')}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Impact stat */}
                <section className="py-16 md:py-24 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="mx-auto max-w-4xl"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                                        {t('impact.before')}
                                    </span>
                                    <span className="font-heading text-5xl md:text-7xl font-bold text-muted-foreground/50 line-through decoration-2">
                                        ~45 min
                                    </span>
                                </div>
                                <ArrowRight className="h-10 w-10 md:h-12 md:w-12 text-primary rotate-90 md:rotate-0 shrink-0" />
                                <div className="flex flex-col items-center">
                                    <span className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                                        {t('impact.after')}
                                    </span>
                                    <span className="font-heading text-5xl md:text-7xl font-bold text-primary">
                                        ~10 min
                                    </span>
                                </div>
                            </div>
                            <p className="mt-12 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                {t('impact.caption')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* More tools coming */}
                <section className="py-16 md:py-24 bg-background">
                    <motion.div
                        className="flex flex-col items-center justify-center text-center"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Plus className="h-8 w-8 text-muted-foreground/40" strokeWidth={1.5} />
                        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground/70">
                            {t('comingSoon.title')}
                        </p>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
