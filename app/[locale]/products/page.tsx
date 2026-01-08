import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowRight, Check, Search, FileText } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function ProductsPage() {
    const t = useTranslations('Products')

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Header Section */}
                <section className="pt-32 pb-12 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-4 md:mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>
                </section>

                {/* KOFA Search Section */}
                <section id="kofa" className="py-12 md:py-16 bg-background scroll-mt-20">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Mobile Layout */}
                        <div className="flex flex-col gap-8 md:hidden">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit border-transparent bg-primary text-primary-foreground">
                                {t('kofa.tag')}
                            </div>
                            <h2 className="font-heading text-3xl font-bold tracking-tight">
                                {t('kofa.title')}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t('kofa.description')}
                            </p>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
                                <Image
                                    src="/images/Products/legalsearch.png"
                                    alt="KOFA Search Interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <p className="font-semibold">{t('kofa.cardTitle')}</p>
                                    <p className="text-sm text-muted-foreground">{t('kofa.cardSubtitle')}</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check className="h-5 w-5" />
                                    </div>
                                    <span>{t('kofa.feature3')}</span>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-3">
                                <Button asChild size="lg" className="rounded-full w-full">
                                    <Link href="/contact">
                                        {t('kofa.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="rounded-full w-full hover:bg-muted hover:text-foreground">
                                    <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer">
                                        {t('kofa.login')}
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                    {t('kofa.tag')}
                                </div>
                                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                                    {t('kofa.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {t('kofa.description')}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Search className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature1')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature2')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Check className="h-5 w-5" />
                                        </div>
                                        <span>{t('kofa.feature3')}</span>
                                    </li>
                                </ul>
                                <div className="flex gap-4">
                                    <Button asChild size="lg" className="rounded-full">
                                        <Link href="/contact">
                                            {t('kofa.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="rounded-full hover:bg-muted hover:text-foreground">
                                        <a href="https://reliableai.online" target="_blank" rel="noopener noreferrer">
                                            {t('kofa.login')}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
                                <Image
                                    src="/images/Products/legalsearch.png"
                                    alt="KOFA Search Interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold">{t('kofa.cardTitle')}</p>
                                            <p className="text-sm text-muted-foreground">{t('kofa.cardSubtitle')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DANTE Section */}
                <section className="py-12 md:py-24 bg-muted/50">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Mobile Layout */}
                        <div className="flex flex-col gap-8 md:hidden">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit border-transparent bg-blue-600 text-white">
                                {t('dante.tag')}
                            </div>
                            <h2 className="font-heading text-3xl font-bold tracking-tight">
                                {t('dante.title')}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t('dante.description')}
                            </p>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
                                <Image
                                    src="/images/Products/dante.png"
                                    alt="DANTE Interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <p className="font-semibold">{t('dante.cardTitle')}</p>
                                    <p className="text-sm text-muted-foreground">{t('dante.cardSubtitle')}</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-blue-600" />
                                    <span>{t('dante.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-blue-600" />
                                    <span>{t('dante.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-blue-600" />
                                    <span>{t('dante.feature3')}</span>
                                </li>
                            </ul>
                            <Button asChild size="lg" variant="outline" className="rounded-full w-full">
                                <Link href="https://arxiv.org/abs/2407.10667" target="_blank">
                                    {t('dante.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center md:grid-flow-col-dense">
                            <div className="md:col-start-2 space-y-8">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-600 text-white hover:bg-blue-700">
                                    {t('dante.tag')}
                                </div>
                                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                                    {t('dante.title')}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {t('dante.description')}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-blue-600" />
                                        <span>{t('dante.feature1')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-blue-600" />
                                        <span>{t('dante.feature2')}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-blue-600" />
                                        <span>{t('dante.feature3')}</span>
                                    </li>
                                </ul>
                                <Button asChild size="lg" variant="outline" className="rounded-full">
                                    <Link href="https://arxiv.org/abs/2407.10667" target="_blank">
                                        {t('dante.cta')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="md:col-start-1 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
                                <Image
                                    src="/images/Products/dante.png"
                                    alt="DANTE Interface"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold">{t('dante.cardTitle')}</p>
                                            <p className="text-sm text-muted-foreground">{t('dante.cardSubtitle')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
