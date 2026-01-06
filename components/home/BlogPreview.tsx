"use client"

import { BlogCard } from "@/components/blog/BlogCard"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"

export function BlogPreview() {
    const t = useTranslations('BlogPreview')
    const locale = useLocale()
    const posts = locale === "no" ? blogPostsNo : blogPosts
    const latestPosts = posts.slice(0, 3)

    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                            {t('title')}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {t('subtitle')}
                        </p>
                    </div>
                    <Button asChild variant="ghost" className="group">
                        <Link href="/blog">
                            {t('viewAll')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {latestPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}
