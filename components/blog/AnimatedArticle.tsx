"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedArticleProps {
    title: string
    date: string
    category: string
    image?: string
    contentImage?: string
    imageContain?: boolean
    contentImageContain?: boolean
    imageNatural?: boolean
}

export function AnimatedArticle({ title, date, category, image, contentImage, imageContain, contentImageContain, imageNatural }: AnimatedArticleProps) {
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
                <div className="sec-num">
                    {category} · {date}
                </div>
                <h1 className="text-[clamp(30px,3.4vw,46px)] leading-[1.1] text-foreground">
                    {title}
                </h1>
            </motion.div>

            {displayImage && imageNatural && (
                <motion.div
                    className="relative mx-auto mb-8 w-full max-w-[600px] rounded-xl overflow-hidden"
                    style={{ aspectRatio: "2250 / 2479" }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <Image
                        src={displayImage}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, 600px"
                        className="object-cover"
                    />
                </motion.div>
            )}

            {displayImage && !imageNatural && !contentImageContain && (
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
                        sizes="(max-width: 768px) 100vw, 768px"
                        className={`${imageContain ? "object-contain p-4" : "object-cover"} ${contentImage ? "object-[center_70%]" : ""}`}
                    />
                </motion.div>
            )}
        </>
    )
}
