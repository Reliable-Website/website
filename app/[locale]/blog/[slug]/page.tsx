import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { getTranslations } from "next-intl/server"
import { AnimatedArticle } from "@/components/blog/AnimatedArticle"
import Image from "next/image"
import type { Metadata } from "next"
import { BASE_URL, publishedDate } from "@/lib/seo"

interface PageProps {
    params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, locale } = await params
    const posts = locale === "no" ? blogPostsNo : blogPosts
    const post = posts.find((p) => p.slug === slug)
    if (!post) return {}

    // Only en and no have their own content; da/de serve the English text,
    // so their canonical points at the English URL.
    const contentLocale = locale === "no" ? "no" : "en"
    const url = `${BASE_URL}/${contentLocale}/blog/${slug}`
    const image = post.image ? `${BASE_URL}${post.image}` : undefined

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: url,
            languages: {
                en: `${BASE_URL}/en/blog/${slug}`,
                no: `${BASE_URL}/no/blog/${slug}`,
                "x-default": `${BASE_URL}/en/blog/${slug}`,
            },
        },
        openGraph: {
            type: "article",
            url,
            title: post.title,
            description: post.excerpt,
            siteName: "Reliable AI",
            publishedTime: publishedDate(slug)?.toISOString(),
            ...(image ? { images: [{ url: image }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            ...(image ? { images: [image] } : {}),
        },
    }
}

export default async function BlogPost({ params }: PageProps) {
    const { slug, locale } = await params
    const t = await getTranslations("Blog")
    const posts = locale === "no" ? blogPostsNo : blogPosts
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: publishedDate(slug)?.toISOString(),
        inLanguage: locale === "no" ? "nb" : "en",
        ...(post.image ? { image: `${BASE_URL}${post.image}` } : {}),
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        mainEntityOfPage: `${BASE_URL}/${locale === "no" ? "no" : "en"}/blog/${slug}`,
    }

    return (
        <div className="flex min-h-screen flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Header />
            <main className="flex-1 py-24 bg-background">
                <article className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.04em] text-ink-60 transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        {t("backToBlog")}
                    </Link>

                    <AnimatedArticle
                        title={post.title}
                        date={post.date}
                        category={post.category}
                        image={post.image}
                        contentImage={post.contentImage}
                        imageContain={post.imageContain}
                        contentImageContain={post.contentImageContain}
                        imageNatural={post.imageNatural}
                    />

                    <div>
                        {post.contentImageContain && post.contentImage && (
                            <div className="float-right ml-6 mb-4 w-1/2 md:w-2/5 rounded-lg overflow-hidden">
                                <Image
                                    src={post.contentImage}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        )}
                        <div
                            className="prose prose-lg prose-slate dark:prose-invert max-w-none [&>p]:mb-6 [&>blockquote]:my-8"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
