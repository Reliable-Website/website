import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowLeft, Calendar, Folder } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { getTranslations } from "next-intl/server"

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

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Folder className="h-4 w-4" />
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </span>
                        </div>
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {post.title}
                        </h1>
                    </div>

                    {(post.contentImage || post.image) && (
                        <div className={`relative w-full mb-8 rounded-lg overflow-hidden ${post.imageContain ? 'h-48' : post.contentImage ? 'h-[28rem] md:h-[36rem]' : 'h-96 md:h-[28rem]'}`}>
                            <Image
                                src={post.contentImage || post.image!}
                                alt={post.title}
                                fill
                                className={`${post.imageContain ? "object-contain p-4" : "object-cover"} ${post.contentImage ? "object-[center_70%]" : ""}`}
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none [&>p]:mb-6 [&>blockquote]:my-8"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>
            <Footer />
        </div>
    )
}
