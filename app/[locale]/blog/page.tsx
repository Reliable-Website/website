import Image from "next/image"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Link } from "@/i18n/navigation"
import { blogPosts } from "@/lib/blog-data"
import { blogPostsNo } from "@/lib/blog-data-no"
import { getTranslations } from "next-intl/server"

interface PageProps {
    params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: PageProps) {
    const { locale } = await params
    const t = await getTranslations("Blog")
    const tHeader = await getTranslations("Header")
    const posts = locale === "no" ? blogPostsNo : blogPosts

    // English dates parse reliably; use them for ordering and year grouping
    const timeBySlug = Object.fromEntries(blogPosts.map(p => [p.slug, new Date(p.date).getTime()]))
    const sorted = [...posts].sort((a, b) => (timeBySlug[b.slug] || 0) - (timeBySlug[a.slug] || 0))

    const byYear: { year: number; posts: typeof sorted }[] = []
    for (const post of sorted) {
        const year = new Date(timeBySlug[post.slug] || 0).getFullYear()
        const group = byYear.find(g => g.year === year)
        if (group) group.posts.push(post)
        else byYear.push({ year, posts: [post] })
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* near-titleless: a small marker, then the years carry the page */}
                <h1 className="sr-only">{t("title")}</h1>
                <div className="mx-auto max-w-[1100px] px-6 pb-28 pt-14">
                    <div className="sec-num">{tHeader("news")}</div>
                    {byYear.map(({ year, posts: yearPosts }) => (
                        <div key={year}>
                            <div className="ml-16 pt-7 font-heading text-[52px] font-light leading-tight text-ink-30">
                                {year}
                            </div>
                            {yearPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group relative ml-3 grid grid-cols-1 items-center gap-7 border-l border-rule py-5 pl-16 before:absolute before:-left-[5.5px] before:top-[40px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-hvit before:bg-himmel before:content-[''] hover:before:bg-primary md:grid-cols-[1fr_180px]"
                                >
                                    <div>
                                        <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-60">
                                            {post.date} · {post.category}
                                        </span>
                                        <h2 className="mt-1.5 mb-1.5 font-heading text-[21px] leading-[1.25] transition-colors group-hover:text-primary" style={{ fontWeight: 460 }}>
                                            {post.title}
                                        </h2>
                                        <p className="line-clamp-2 max-w-[42em] text-[14.5px] leading-relaxed text-ink-60">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    {post.image && (
                                        <div className="relative hidden aspect-[16/10] overflow-hidden rounded-xl border border-rule-soft md:block">
                                            <Image
                                                src={post.image}
                                                alt=""
                                                fill
                                                sizes="180px"
                                                className={post.imageContain ? "bg-white object-contain p-2" : "object-cover"}
                                            />
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
