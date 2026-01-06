import { useTranslations } from 'next-intl';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export default function ResearchPage() {
    const t = useTranslations('Research');

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-4 md:px-6 mb-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </div>
                </section>

                {/* Papers List */}
                <section className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8">
                        {['paper3', 'paper1', 'paper2'].map((paper) => (
                            <div key={paper} className="group relative bg-card hover:bg-accent/5 border rounded-2xl p-8 transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl text-primary">
                                        <FileText className="h-8 w-8" />
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                                    {t(`papers.${paper}.date`)}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                                                {t(`papers.${paper}.title`)}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t(`papers.${paper}.description`)}
                                            </p>
                                        </div>
                                        <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <a href={t(`papers.${paper}.linkUrl`)} target="_blank" rel="noopener noreferrer">
                                                {t(`papers.${paper}.linkText`)}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
