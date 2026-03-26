"use client"

import { BlogCard } from "@/components/blog/BlogCard"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { motion } from "framer-motion"

export function BlogPreview() {
    const t = useTranslations('BlogPreview')
    const locale = useLocale()
    const posts = locale === "no" ? blogPostsNo : blogPosts
    // Sort by date using English posts as canonical date source
    const dateBySlug = Object.fromEntries(blogPosts.map(p => [p.slug, new Date(p.date).getTime()]))
    const sorted = [...posts].sort((a, b) => (dateBySlug[b.slug] || 0) - (dateBySlug[a.slug] || 0))
    const latestPosts = sorted.slice(0, 3)

    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-2xl">
                        <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                            {t('title')}
                        </h2>
                    </div>
                    <Button asChild variant="ghost" className="group">
                        <Link href="/blog">
                            {t('viewAll')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {latestPosts.map(({ featured, ...post }, i) => (
                        <motion.div
                            key={post.slug}
                            className="h-full"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
