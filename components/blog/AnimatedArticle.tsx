"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Folder } from "lucide-react"

interface AnimatedArticleProps {
    title: string
    date: string
    category: string
    image?: string
    contentImage?: string
    imageContain?: boolean
}

export function AnimatedArticle({ title, date, category, image, contentImage, imageContain }: AnimatedArticleProps) {
    const displayImage = contentImage || image

    return (
        <>
            <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Folder className="h-4 w-4" />
                        {category}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {date}
                    </span>
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {title}
                </h1>
            </motion.div>

            {displayImage && (
                <motion.div
                    className={`relative w-full mb-8 rounded-lg overflow-hidden ${imageContain ? 'h-48' : contentImage ? 'h-[28rem] md:h-[36rem]' : 'h-96 md:h-[28rem]'}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <Image
                        src={displayImage}
                        alt={title}
                        fill
                        className={`${imageContain ? "object-contain p-4" : "object-cover"} ${contentImage ? "object-[center_70%]" : ""}`}
                    />
                </motion.div>
            )}
        </>
    )
}
