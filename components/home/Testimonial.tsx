"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonial() {
    const t = useTranslations('Testimonial')

    return (
        <section className="py-12 md:py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        className="relative order-1 lg:order-1"
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/Testemony/stian.jpg"
                                alt={t('author')}
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                        </div>
                        <div className="absolute -top-12 -left-12 w-full h-full border border-primary/10 rounded-2xl -z-10 translate-x-6 translate-y-6" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        className="order-2 lg:order-2"
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <blockquote className="font-heading text-xl md:text-2xl font-normal leading-relaxed text-foreground mb-8">
                            "{t('textBefore')}
                            <Link
                                href="/products#presedens"
                                className="text-primary underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors"
                            >
                                {t('kofa')}
                            </Link>
                            {t('textAfter')}"
                        </blockquote>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <div>
                                <cite className="not-italic font-semibold text-lg text-foreground block">
                                    {t('author')}
                                </cite>
                                <span className="text-muted-foreground">
                                    {t('role')}, {t('company')}
                                </span>
                            </div>
                        </div>

                        <Link
                            href="/products#presedens"
                            className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                        >
                            {t('cta')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
