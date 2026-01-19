import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BlogCard } from "@/components/blog/BlogCard"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { getTranslations } from "next-intl/server"

interface PageProps {
    params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: PageProps) {
    const { locale } = await params
    const t = await getTranslations("Blog")
    const posts = locale === "no" ? blogPostsNo : blogPosts

    const featuredPost = posts.find((post) => post.featured)
    const otherPosts = posts.filter((post) => !post.featured)

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24">
                <div className="mb-12">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Featured post */}
                {featuredPost && (
                    <div className="mb-12">
                        <BlogCard {...featuredPost} featured />
                    </div>
                )}

                {/* Other posts */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {otherPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
