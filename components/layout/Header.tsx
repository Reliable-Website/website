
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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

export function Header() {
    const t = useTranslations('Header')
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [showLogo, setShowLogo] = useState(false)
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        // On non-home pages, always show the logo
        if (!isHome) {
            setShowLogo(true)
            return
        }

        // On home page, show logo only when hero logo is out of view
        setShowLogo(false)
        const heroLogo = document.getElementById("hero-logo")
        if (!heroLogo) return

        const observer = new IntersectionObserver(
            ([entry]) => setShowLogo(!entry.isIntersecting),
            { threshold: 0.1 }
        )
        observer.observe(heroLogo)
        return () => observer.disconnect()
    }, [isHome])

    const navItems = [
        { name: t('products'), href: "/products" },
        { name: t('team'), href: "/team" },
        { name: t('research'), href: "/research" },
        { name: t('blog'), href: "/blog" },
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-24">
                    {/* Logo - always takes up space, only visibility animates */}
                    <motion.div
                        animate={{ opacity: showLogo ? 1 : 0, x: showLogo ? 0 : -16 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ pointerEvents: showLogo ? "auto" : "none" }}
                    >
                        <Link href="/" className="relative z-[70] h-24 w-24 md:w-40 flex items-center" onClick={(e) => {
                            setIsOpen(false)
                            if (isHome) {
                                e.preventDefault()
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        }}>
                            <div className="absolute h-36 w-36 md:h-40 md:w-40 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Image
                                    src="/images/LogoReliable/logo.svg"
                                    alt="Reliable AI Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Login Button */}
                        <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="border-black/30 bg-transparent text-muted-foreground hover:bg-[#617eff] hover:text-white hover:border-[#617eff] transition-colors duration-200 cursor-pointer">{t('login')}</Button>
                        </a>

                        {/* Language Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:bg-transparent hover:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0">
                                    <Globe className="h-4 w-4" />
                                    <span className="uppercase">{locale}</span>
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white border-black/10 shadow-sm animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                                <DropdownMenuItem onClick={() => switchLanguage('en')}>
                                    <svg className="h-4 w-5 mr-2 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#012169"/><path d="M0,0L22,16M22,0L0,16" stroke="#fff" strokeWidth="3"/><path d="M0,0L22,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,22 16,22 13)"/><path d="M0,0L22,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,0 0,0 3)"/><path d="M22,0L0,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,0 16,0 13)"/><path d="M22,0L0,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,22 0,22 3)"/><rect x="8" width="6" height="16" fill="#fff"/><rect y="5.5" width="22" height="5" fill="#fff"/><rect x="9" width="4" height="16" fill="#C8102E"/><rect y="6.5" width="22" height="3" fill="#C8102E"/></svg>
                                    English
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => switchLanguage('no')}>
                                    <svg className="h-4 w-5 mr-2 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#EF2B2D"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#002868"/><rect y="7" width="22" height="2" fill="#002868"/></svg>
                                    Norsk
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => switchLanguage('da')}>
                                    <svg className="h-4 w-5 mr-2 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#C8102E"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/></svg>
                                    Dansk
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => switchLanguage('de')}>
                                    <svg className="h-4 w-5 mr-2 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#000"/><rect y="5.33" width="22" height="5.33" fill="#DD0000"/><rect y="10.67" width="22" height="5.33" fill="#FFCC00"/></svg>
                                    Deutsch
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-[70] p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="fixed top-0 left-0 right-0 min-h-screen bg-background border-b md:hidden pt-24 px-4 z-[60]"
                            >
                                <div className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-2xl font-heading font-bold text-foreground"
                                            onClick={() => {
                                                setTimeout(() => setIsOpen(false), 0)
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                        <Button variant="outline" className="w-full border-black/30 text-muted-foreground hover:bg-[#617eff] hover:text-white hover:border-[#617eff] transition-colors duration-200">{t('login')}</Button>
                                    </a>
                                    <div className="flex items-center justify-between pt-6 border-t">
                                        <span className="text-lg font-medium text-muted-foreground">Language</span>
                                        <div className="flex gap-2">
                                            <Button
                                                variant={locale === 'en' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => {
                                                    switchLanguage('en')
                                                    setIsOpen(false)
                                                }}
                                            >
                                                <svg className="h-3.5 w-5 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#012169"/><path d="M0,0L22,16M22,0L0,16" stroke="#fff" strokeWidth="3"/><path d="M0,0L22,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,22 16,22 13)"/><path d="M0,0L22,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,0 0,0 3)"/><path d="M22,0L0,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,0 16,0 13)"/><path d="M22,0L0,16" stroke="#C8102E" strokeWidth="1.5" clipPath="polygon(11 8,22 0,22 3)"/><rect x="8" width="6" height="16" fill="#fff"/><rect y="5.5" width="22" height="5" fill="#fff"/><rect x="9" width="4" height="16" fill="#C8102E"/><rect y="6.5" width="22" height="3" fill="#C8102E"/></svg> EN
                                            </Button>
                                            <Button
                                                variant={locale === 'no' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => {
                                                    switchLanguage('no')
                                                    setIsOpen(false)
                                                }}
                                            >
                                                <svg className="h-3.5 w-5 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#EF2B2D"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#002868"/><rect y="7" width="22" height="2" fill="#002868"/></svg> NO
                                            </Button>
                                            <Button
                                                variant={locale === 'da' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => {
                                                    switchLanguage('da')
                                                    setIsOpen(false)
                                                }}
                                            >
                                                <svg className="h-3.5 w-5 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="16" fill="#C8102E"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/></svg> DA
                                            </Button>
                                            <Button
                                                variant={locale === 'de' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => {
                                                    switchLanguage('de')
                                                    setIsOpen(false)
                                                }}
                                            >
                                                <svg className="h-3.5 w-5 rounded-sm flex-shrink-0" viewBox="0 0 22 16"><rect width="22" height="5.33" fill="#000"/><rect y="5.33" width="22" height="5.33" fill="#DD0000"/><rect y="10.67" width="22" height="5.33" fill="#FFCC00"/></svg> DE
                                            </Button>
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
