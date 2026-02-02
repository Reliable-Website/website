import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    slug: string
    category: string
    image?: string
    imageContain?: boolean
    featured?: boolean
}

export function BlogCard({ title, excerpt, date, slug, category, image, imageContain, featured }: BlogCardProps) {
    if (featured) {
        return (
            <article className="group relative flex flex-col md:flex-row rounded-lg border-2 border-primary/30 bg-card shadow-md transition-all hover:shadow-lg hover:border-primary/50 overflow-hidden">
                {image && (
                    <div className="relative h-64 md:h-auto md:w-1/2">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="flex flex-col space-y-4 p-8 md:w-1/2 justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                            Featured
                        </span>
                        <span className="font-medium text-accent-foreground/80 bg-accent/10 px-3 py-1 rounded-full">
                            {category}
                        </span>
                        <span>•</span>
                        <time dateTime={date}>{date}</time>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-normal text-foreground group-hover:text-primary transition-colors">
                        <Link href={`/blog/${slug}`}>
                            <span className="absolute inset-0" />
                            {title}
                        </Link>
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        {excerpt}
                    </p>
                    <div className="pt-4 flex items-center text-base font-medium text-primary">
                        Read more <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        )
    }

    return (
        <article className="group relative flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden">
            {image && (
                <div className="relative h-48 w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={imageContain ? "object-contain p-4" : "object-cover"}
                    />
                </div>
            )}
            <div className="flex flex-col space-y-3 p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-accent-foreground/80 bg-accent/10 px-2 py-0.5 rounded-full">
                        {category}
                    </span>
                    <span>•</span>
                    <time dateTime={date}>{date}</time>
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${slug}`}>
                        <span className="absolute inset-0" />
                        {title}
                    </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                    {excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary">
                    Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </article>
    )
}
