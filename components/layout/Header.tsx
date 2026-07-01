"use client"

import { useState } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { useTranslations, useLocale } from "next-intl"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FLAGS: Record<string, React.ReactNode> = {
    en: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="16" fill="#012169"/><path d="M0,0L22,16M22,0L0,16" stroke="#fff" strokeWidth="3"/><path d="M0,0L22,16M22,0L0,16" stroke="#C8102E" strokeWidth="1.2"/><rect x="8" width="6" height="16" fill="#fff"/><rect y="5.5" width="22" height="5" fill="#fff"/><rect x="9" width="4" height="16" fill="#C8102E"/><rect y="6.5" width="22" height="3" fill="#C8102E"/></svg>,
    no: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="16" fill="#EF2B2D"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#002868"/><rect y="7" width="22" height="2" fill="#002868"/></svg>,
    da: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="16" fill="#C8102E"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/></svg>,
    de: <svg className="h-3.5 w-5 flex-shrink-0 rounded-[3px]" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#000"/><rect y="5.33" width="22" height="5.33" fill="#DD0000"/><rect y="10.67" width="22" height="5.33" fill="#FFCC00"/></svg>,
}

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "no", label: "Norsk" },
    { code: "da", label: "Dansk" },
    { code: "de", label: "Deutsch" },
]

export function Header() {
    const t = useTranslations('Header')
    const [isOpen, setIsOpen] = useState(false)
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { name: t('howItWorks'), href: "/#how" },
        { name: t('coverage'), href: "/#coverage" },
    ]

    const menuItems = [
        { name: t('team'), href: "/team" },
        { name: t('news'), href: "/blog" },
        { name: t('contact'), href: "/contact" },
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

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-svart">
            <div className="mx-auto max-w-[1180px] px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative z-[70] flex items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/images/LogoReliable/logo-inverted-trim.png"
                            alt="Reliable AI"
                            width={127}
                            height={24}
                            className="h-6 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[15px] text-paper-60 hover:text-hvit transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* More menu: Team / News / Contact */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex cursor-pointer items-center gap-1 text-[15px] text-paper-60 transition-colors hover:text-hvit focus-visible:outline-none">
                                    {t('more')}
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-xl bg-white border-black/10 shadow-sm">
                                {menuItems.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Language Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 font-mono text-xs tracking-widest text-paper-60 hover:text-hvit transition-colors uppercase cursor-pointer focus-visible:outline-none">
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

                        {/* Access CTA — leads to the /access gate (log in or book a demo) */}
                        <Link
                            href="/access"
                            className="rounded-full bg-primary border border-primary px-[22px] py-[9px] text-[15px] font-semibold text-white hover:bg-[#5a6de8] hover:border-[#5a6de8] transition-colors"
                        >
                            {t('login')}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-[70] p-2 text-hvit"
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
                                className="fixed top-0 left-0 right-0 min-h-screen bg-svart md:hidden pt-24 px-6 z-[60]"
                            >
                                <div className="flex flex-col gap-6">
                                    {[...navItems, ...menuItems].map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="font-heading text-2xl text-hvit"
                                            onClick={() => {
                                                setTimeout(() => setIsOpen(false), 0)
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/access"
                                        className="rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t('login')}
                                    </Link>
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <span className="text-paper-60">Language</span>
                                        <div className="flex gap-3">
                                            {LANGUAGES.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        switchLanguage(lang.code)
                                                        setIsOpen(false)
                                                    }}
                                                    className={`font-mono text-sm uppercase tracking-widest ${lang.code === locale ? 'text-hvit font-medium' : 'text-paper-60'}`}
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
