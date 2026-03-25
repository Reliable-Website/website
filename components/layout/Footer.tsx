"use client"

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Footer() {
    const t = useTranslations('Footer')
    const currentYear = new Date().getFullYear()

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <footer className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        className="space-y-2"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-32 w-32 -mt-10">
                                <Image
                                    src="/images/LogoReliable/logo.svg"
                                    alt="Reliable AI Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <Button asChild size="lg" className="w-full sm:w-auto relative overflow-hidden rounded-full px-8 bg-black text-white hover:bg-[#617eff] shadow-lg shadow-black/20 hover:shadow-[#617eff]/40 transition-all duration-300 group">
                            <a href="mailto:hei@reliableai.no" className="relative z-10">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                {t('contactUs')}
                            </a>
                        </Button>
                    </motion.div>

                    {/* Links Column */}
                    <motion.div
                        className="space-y-6"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="font-heading font-semibold text-foreground">{t('overview')}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/products" className="hover:text-primary transition-colors">{t('products')}</Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-primary transition-colors">{t('team')}</Link>
                            </li>
                            <li>
                                <Link href="/research" className="hover:text-primary transition-colors">{t('research')}</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">{t('blog')}</Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        className="space-y-6"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-heading font-semibold text-foreground">{t('contacts')}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:hei@reliableai.no" className="hover:text-primary transition-colors">
                                    hei@reliableai.no
                                </a>
                            </li>
                            <li>
                                Org.nr: 934 343 786
                            </li>
                        </ul>
                    </motion.div>

                    {/* Office Column */}
                    <motion.div
                        className="space-y-6"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="font-heading font-semibold text-foreground">{t('office')}</h3>
                        <address className="not-italic text-sm text-muted-foreground space-y-1">
                            <p>Akersbakken 30</p>
                            <p>0172 Oslo</p>
                        </address>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 pt-8 text-center text-sm text-muted-foreground"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p>{t('rights', { year: currentYear })}</p>
                </motion.div>
            </div>
        </footer>
    )
}
