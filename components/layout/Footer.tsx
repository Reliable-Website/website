import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('Footer')
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-32 w-32 -mt-10">
                                <Image
                                    src="/images/LogoReliable/logo.svg"
                                    alt="Reliable AI Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <Button asChild variant="default" className="w-full sm:w-auto rounded-full">
                            <a href="mailto:hei@reliableai.no">{t('contactUs')}</a>
                        </Button>
                    </div>

                    {/* Links Column */}
                    <div className="space-y-6">
                        <h3 className="font-heading font-semibold text-foreground">{t('overview')}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/products" className="hover:text-primary transition-colors">{t('products')}</Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-primary transition-colors">{t('team')}</Link>
                            </li>
                            <li>
                                <Link href="/research" className="hover:text-primary transition-colors">{t('research')}</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">{t('blog')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="font-heading font-semibold text-foreground">{t('contacts')}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:hei@reliableai.no" className="hover:text-primary transition-colors">
                                    hei@reliableai.no
                                </a>
                            </li>
                            <li>
                                Org.nr: 934 343 786
                            </li>
                        </ul>
                    </div>

                    {/* Office Column */}
                    <div className="space-y-6">
                        <h3 className="font-heading font-semibold text-foreground">{t('office')}</h3>
                        <address className="not-italic text-sm text-muted-foreground space-y-1">
                            <p>Akersbakken 30</p>
                            <p>0172 Oslo</p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>{t('rights', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    )
}
