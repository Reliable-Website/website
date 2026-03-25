"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog/BlogCard"

interface BlogPost {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    image?: string
    imageContain?: boolean
    featured?: boolean
}

interface AnimatedBlogGridProps {
    featuredPost?: BlogPost
    otherPosts: BlogPost[]
}

export function AnimatedBlogGrid({ featuredPost, otherPosts }: AnimatedBlogGridProps) {
    return (
        <>
            {/* Featured post */}
            {featuredPost && (
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <BlogCard {...featuredPost} featured />
                </motion.div>
            )}

            {/* Other posts */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((post, idx) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.07 }}
                    >
                        <BlogCard {...post} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}
