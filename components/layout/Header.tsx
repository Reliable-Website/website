
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
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: t('products'), href: "/products" },
        { name: t('team'), href: "/team" },
        { name: t('research'), href: "/research" },
        { name: t('blog'), href: "/blog" },
        { name: t('contact'), href: "/contact" },
    ]

    const switchLanguage = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-50">
                        <div className="relative h-40 w-40">
                            <Image
                                src="/images/LogoReliable/logo.svg"
                                alt="Reliable AI Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

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

                        {/* Language Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary">
                                    <Globe className="h-4 w-4" />
                                    <span className="uppercase">{locale}</span>
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white">
                                <DropdownMenuItem onClick={() => switchLanguage('en')}>
                                    English
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => switchLanguage('no')}>
                                    Norsk
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button size="sm" className="rounded-full px-6">
                            {t('login')}
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-foreground"
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
                                className="absolute top-0 left-0 right-0 min-h-screen bg-background border-b md:hidden pt-24 px-4"
                            >
                                <div className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-2xl font-heading font-bold text-foreground"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
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
                                                EN
                                            </Button>
                                            <Button
                                                variant={locale === 'no' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => {
                                                    switchLanguage('no')
                                                    setIsOpen(false)
                                                }}
                                            >
                                                NO
                                            </Button>
                                        </div>
                                    </div>
                                    <Button className="w-full rounded-full py-6 text-lg">
                                        {t('login')}
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}
