import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { getTranslations } from "next-intl/server"
import { AnimatedArticle } from "@/components/blog/AnimatedArticle"
import Image from "next/image"

interface PageProps {
    params: Promise<{ slug: string; locale: string }>
}

export default async function BlogPost({ params }: PageProps) {
    const { slug, locale } = await params
    const t = await getTranslations("Blog")
    const posts = locale === "no" ? blogPostsNo : blogPosts
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-24 bg-background">
                <article className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <Button asChild variant="ghost" size="sm" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t("backToBlog")}
                        </Link>
                    </Button>

                    <AnimatedArticle
                        title={post.title}
                        date={post.date}
                        category={post.category}
                        image={post.image}
                        contentImage={post.contentImage}
                        imageContain={post.imageContain}
                        contentImageContain={post.contentImageContain}
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
