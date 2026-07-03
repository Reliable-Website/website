import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageHead } from "@/components/layout/PageHead"

// DRAFT — founder/legal review required before launch.
// German Impressum (§ 5 DDG) for the German-market offering. Kept in German on
// all locales, as is customary.

export default function ImpressumPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <PageHead kicker="Rechtliches" title="Impressum" />
                <div className="mx-auto max-w-[760px] px-6 pb-24 pt-4">
                    <p className="mb-8 inline-block rounded-full bg-appelsin/25 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#9a5a14]">
                        Entwurf · in Prüfung
                    </p>

                    <div className="space-y-8 text-[15.5px] leading-relaxed text-ink-60 [&_h2]:mb-2 [&_h2]:text-[22px] [&_h2]:text-foreground">
                        <section>
                            <h2>Angaben gemäß § 5 DDG</h2>
                            <p>
                                Reliable AI AS<br />
                                Akersbakken 30<br />
                                0172 Oslo, Norwegen
                            </p>
                            <p className="mt-3">
                                Norwegische Aktiengesellschaft (aksjeselskap)<br />
                                Registernummer (Foretaksregisteret): 934 343 786
                            </p>
                        </section>

                        <section>
                            <h2>Vertreten durch</h2>
                            <p>Markus Kreutzer (CEO)</p>
                        </section>

                        <section>
                            <h2>Kontakt</h2>
                            <p>
                                E-Mail: <a className="text-primary hover:underline" href="mailto:hei@reliableai.no">hei@reliableai.no</a>
                            </p>
                        </section>

                        <section>
                            <h2>Verantwortlich für den Inhalt</h2>
                            <p>Markus Kreutzer, Anschrift wie oben.</p>
                        </section>

                        <section>
                            <h2>Streitbeilegung</h2>
                            <p>
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
