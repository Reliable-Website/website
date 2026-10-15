"use client"

import { useState } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { useTranslations, useLocale } from "next-intl"
import { Brand } from "@/components/layout/Brand"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FLAGS: Record<string, React.ReactNode> = {
    en: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="16" fill="#012169"/><path d="M0,0L22,16M22,0L0,16" stroke="#fff" strokeWidth="3"/><path d="M0,0L22,16M22,0L0,16" stroke="#C8102E" strokeWidth="1.2"/><rect x="8" width="6" height="16" fill="#fff"/><rect y="5.5" width="22" height="5" fill="#fff"/><rect x="9" width="4" height="16" fill="#C8102E"/><rect y="6.5" width="22" height="3" fill="#C8102E"/></svg>,
    no: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="16" fill="#EF2B2D"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#002868"/><rect y="7" width="22" height="2" fill="#002868"/></svg>,
}

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "no", label: "Norsk" },
]

// Light by default; `dark` keeps the header seamless on the dark /access gate.
export function Header({ dark = false }: { dark?: boolean }) {
    const t = useTranslations('Header')
    const [isOpen, setIsOpen] = useState(false)
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { name: t('trackRecord'), href: "/#track-record" },
        { name: t('research'), href: "/#research" },
        { name: t('team'), href: "/team" },
        { name: t('contact'), href: "/#contact" },
    ]

    const switchLanguage = (newLocale: string) => {
        document.documentElement.style.transition = "opacity 0.3s ease"
        document.documentElement.style.opacity = "0.5"
        router.replace(pathname, { locale: newLocale })
        setTimeout(() => {
            document.documentElement.style.opacity = "1"
            setTimeout(() => {
                document.documentElement.style.transition = ""
            }, 300)
        }, 150)
    }

    const tone = dark
        ? { bar: "bg-svart text-hvit", link: "text-paper-60 hover:text-hvit", quiet: "text-paper-30 hover:text-hvit", rule: "bg-white/20", overlay: "bg-svart text-hvit", overlayRule: "border-white/10" }
        : { bar: "border-b border-rule-soft bg-hvit/85 text-foreground backdrop-blur-md", link: "text-ink-60 hover:text-foreground", quiet: "text-ink-30 hover:text-foreground", rule: "bg-rule", overlay: "bg-hvit text-foreground", overlayRule: "border-rule-soft" }

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 ${tone.bar}`}>
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        aria-label="Reliable"
                        className="relative z-[70] flex items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <Brand inverted={dark} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[15px] transition-colors ${tone.link}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <span aria-hidden="true" className={`h-4 w-px ${tone.rule}`} />

                        {/* Existing customers: the /access gate leads on to the app login */}
                        <Link href="/access" className={`text-sm transition-colors ${tone.quiet}`}>
                            {t('login')}
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className={`flex items-center gap-1 font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors focus-visible:outline-none ${tone.quiet}`}>
                                    <Globe className="h-3.5 w-3.5" />
                                    {locale}
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-xl bg-white border-black/10 shadow-sm">
                                {LANGUAGES.map((lang) => (
                                    <DropdownMenuItem key={lang.code} onClick={() => switchLanguage(lang.code)}>
                                        {FLAGS[lang.code]}
                                        <span className={lang.code === locale ? 'font-medium' : ''}>{lang.label}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-[70] p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                className={`fixed top-0 left-0 right-0 min-h-screen md:hidden pt-24 px-6 z-[60] ${tone.overlay}`}
                            >
                                <div className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="font-heading text-2xl"
                                            onClick={() => {
                                                setTimeout(() => setIsOpen(false), 0)
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/access"
                                        className={`text-base ${tone.link}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('login')}
                                    </Link>
                                    <div className={`flex items-center justify-between pt-6 border-t ${tone.overlayRule}`}>
                                        <span className={dark ? "text-paper-60" : "text-ink-60"}>Language</span>
                                        <div className="flex gap-3">
                                            {LANGUAGES.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        switchLanguage(lang.code)
                                                        setIsOpen(false)
                                                    }}
                                                    className={`font-mono text-sm uppercase tracking-widest ${lang.code === locale ? 'font-medium' : dark ? 'text-paper-60' : 'text-ink-60'}`}
                                                >
                                                    {lang.code}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}
