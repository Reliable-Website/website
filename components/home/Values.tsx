"use client"

import { useTranslations } from "next-intl"
import { ShieldCheck, GraduationCap, PenTool } from "lucide-react"

export function Values() {
    const t = useTranslations('Values')

    const values = [
        {
            key: "research",
            icon: GraduationCap,
        },
        {
            key: "reliable",
            icon: ShieldCheck,
        },
        {
            key: "custom",
            icon: PenTool,
        }
    ]

    return (
        <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                    {values.map((item) => (
                        <div
                            key={item.key}
                            className="group relative p-4 md:p-8 rounded-3xl bg-white border-t-4 border-t-primary border-x border-b border-slate-100 hover:shadow-lg transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-60 rounded-3xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-primary">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold mb-4">
                                    {t(`${item.key}.name`)}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(`${item.key}.description`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
