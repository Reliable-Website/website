"use client"

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('Footer')
    const currentYear = new Date().getFullYear()

    const cols = [
        {
            title: t('colProduct'),
            links: [
                { name: "Presedens", href: "/#how" },
                { name: t('coverage'), href: "/#coverage" },
                { name: t('research'), href: "/#research" },
            ],
        },
        {
            title: t('colCompany'),
            links: [
                { name: t('team'), href: "/team" },
                { name: t('news'), href: "/blog" },
                { name: t('contact'), href: "/contact" },
            ],
        },
        {
            title: t('colLegal'),
            links: [
                { name: t('privacy'), href: "/privacy" },
                { name: "Impressum", href: "/impressum" },
                { name: t('datenschutz'), href: "/datenschutz" },
            ],
        },
    ]

    return (
        <footer className="bg-background border-t border-rule-soft">
            <div className="mx-auto max-w-[1180px] px-6 py-14">
                <div className="flex flex-wrap justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/">
                            <Image
                                src="/images/LogoReliable/logo-svart-trim.png"
                                alt="Reliable AI"
                                width={129}
                                height={24}
                                className="h-6 w-auto"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-ink-60">{t('tagline')}</p>
                        <address className="not-italic mt-4 text-sm text-ink-60 space-y-0.5">
                            <p>Akersbakken 30, 0172 Oslo</p>
                            <p>Org.nr: 934 343 786</p>
                        </address>
                    </div>

                    {/* Link columns */}
                    <div className="flex gap-16 flex-wrap">
                        {cols.map((col) => (
                            <div key={col.title}>
                                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground mb-3.5">
                                    {col.title}
                                </h3>
                                <ul className="space-y-2 text-sm text-ink-60">
                                    {col.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="hover:text-foreground hover:underline underline-offset-[3px] decoration-1 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-11 pt-5 border-t border-rule-soft flex flex-wrap justify-between gap-3 font-mono text-[11.5px] text-ink-60">
                    <span>{t('rights', { year: currentYear })}</span>
                    <a href="mailto:hei@reliableai.no" className="hover:text-foreground transition-colors">
                        hei@reliableai.no
                    </a>
                </div>
            </div>
        </footer>
    )
}
