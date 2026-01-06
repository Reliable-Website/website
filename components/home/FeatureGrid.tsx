"use client"

import { Brain, Search, Code } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        name: "Search Case Law",
        description: "Advanced semantic search for legal professionals. Find relevant precedents faster with our AI-powered search engine.",
        icon: Search,
    },
    {
        name: "Code Survey Responses",
        description: "Automate the coding of open-ended survey responses. Turn qualitative data into quantitative insights with high accuracy.",
        icon: Code,
    },
    {
        name: "AI Strategy Design",
        description: "Navigate the AI landscape with confidence. We help you design and implement a robust AI strategy tailored to your needs.",
        icon: Brain,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function FeatureGrid() {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                        Practical Solutions for Complex Data
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We combine academic rigor with real-world application to deliver AI that works.
                    </p>
                </div>
                <motion.div
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.name}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-normal text-foreground">
                                {feature.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
