"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function Offerings() {
    const t = useTranslations('Offerings')

    const offerings = [
        {
            title: t('consulting.title'),
            description: t('consulting.description'),
            features: ["AI Strategy Development", "Feasibility Studies", "Process Optimization"],
            cta: t('consulting.cta'),
            link: "/contact",
        },
        {
            title: t('custom.title'),
            description: t('custom.description'),
            features: ["Full-stack Development", "Model Fine-tuning", "Integration Services"],
            cta: t('custom.cta'),
            link: "/contact",
            highlight: true,
        },
        {
            title: t('saas.title'),
            description: t('saas.description'),
            features: ["KOFA Search", "DANTE Tool", "Enterprise Support"],
            cta: t('saas.cta'),
            link: "/products",
        },
    ]

    return (
        <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={offering.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${offering.highlight
                                ? "bg-background border-2 border-primary/20"
                                : "bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80"
                                }`}
                        >
                            {offering.highlight && (
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                            )}

                            <h3 className="font-heading text-2xl font-normal text-foreground relative z-10">
                                {offering.title}
                            </h3>
                            <p className="mt-4 flex-1 text-base text-muted-foreground relative z-10">
                                {offering.description}
                            </p>
                            <ul className="mt-8 space-y-3 relative z-10">
                                {offering.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${offering.highlight ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                                            <Check className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 relative z-10">
                                <Button
                                    asChild
                                    variant={offering.highlight ? "default" : "outline"}
                                    className={`w-full ${offering.highlight ? "shadow-lg shadow-primary/20" : ""}`}
                                >
                                    <Link href={offering.link}>
                                        {offering.cta}
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
