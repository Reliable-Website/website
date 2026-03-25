"use client"

import { useTranslations } from 'next-intl';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResearchPage() {
    const t = useTranslations('Research');

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-4 md:px-6 mb-16">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </section>

                {/* Papers List */}
                <section className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12">
                        {(['paper3', 'paper1', 'paper2'] as const).map((paper, i) => {
                            const images = {
                                paper3: '/images/Research/dante.png',
                                paper1: '/images/Research/survey.png',
                                paper2: '/images/Research/lit_review.png',
                            }
                            return (
                            <motion.div
                                key={paper}
                                className="relative group"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[1.75rem] blur-lg opacity-0 group-hover:opacity-60 transition duration-500" />
                            <div className="relative bg-card rounded-2xl p-8 shadow-md transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className={`flex-shrink-0 relative w-full md:w-48 aspect-video md:aspect-square rounded-xl overflow-hidden ${paper === 'paper3' ? 'bg-muted' : 'bg-white'}`}>
                                        <Image
                                            src={images[paper]}
                                            alt=""
                                            fill
                                            className={paper === 'paper3' ? 'object-cover' : 'object-contain p-2'}
                                        />
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                                    {t(`papers.${paper}.date`)}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                {t(`papers.${paper}.title`)}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t(`papers.${paper}.description`)}
                                            </p>
                                        </div>
                                        <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <a href={t(`papers.${paper}.linkUrl`)} target="_blank" rel="noopener noreferrer">
                                                {t(`papers.${paper}.linkText`)}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            </motion.div>
                            )
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
