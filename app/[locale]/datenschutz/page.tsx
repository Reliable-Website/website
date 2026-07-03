import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageHead } from "@/components/layout/PageHead"

// DRAFT — founder/legal review required before launch.
// German-language counterpart of /privacy, consistent in substance.

export default function DatenschutzPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <PageHead kicker="Rechtliches" title="Datenschutzerklärung" />
                <div className="mx-auto max-w-[760px] px-6 pb-24 pt-4">
                    <p className="mb-8 inline-block rounded-full bg-appelsin/25 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#9a5a14]">
                        Entwurf · in Prüfung
                    </p>

                    <div className="space-y-8 text-[15.5px] leading-relaxed text-ink-60 [&_h2]:mb-2 [&_h2]:text-[22px] [&_h2]:text-foreground">
                        <section>
                            <h2>Verantwortlicher</h2>
                            <p>
                                Reliable AI AS (Registernummer 934 343 786), Akersbakken 30, 0172 Oslo, Norwegen.
                                Kontakt: <a className="text-primary hover:underline" href="mailto:hei@reliableai.no">hei@reliableai.no</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Verarbeitete Daten und Zwecke</h2>
                            <p>
                                <strong className="text-foreground">Webanalyse.</strong> Wir verwenden Vercel Analytics (cookielos), um die Nutzung der Website zu verstehen (besuchte Seiten, ungefährer Standort,
                                Gerätetyp). Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">Demo-Termine.</strong> Bei der Buchung einer Demo verarbeitet
                                Calendly die von Ihnen angegebenen Daten (Name, E-Mail, Termindetails). Rechtsgrundlage:
                                vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">E-Mail.</strong> Schreiben Sie uns, verarbeiten wir Ihre
                                Nachricht und Kontaktdaten zur Beantwortung. Rechtsgrundlage: berechtigtes Interesse
                                (Art. 6 Abs. 1 lit. f DSGVO).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">Hosting.</strong> Die Website wird von Vercel Inc. gehostet;
                                Server-Logs (IP-Adresse, Anfragedaten) werden zu Betriebs- und Sicherheitszwecken verarbeitet.
                            </p>
                        </section>

                        <section>
                            <h2>Speicherdauer</h2>
                            <p>
                                Analysedaten werden gemäß den Standard-Aufbewahrungsfristen der jeweiligen Anbieter gespeichert.
                                E-Mail-Korrespondenz wird so lange aufbewahrt, wie es zur Bearbeitung Ihres Anliegens und einer
                                etwaigen Geschäftsbeziehung erforderlich ist.
                            </p>
                        </section>

                        <section>
                            <h2>Ihre Rechte</h2>
                            <p>
                                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                                Datenübertragbarkeit und Widerspruch. Sie können sich bei einer Datenschutzaufsichtsbehörde
                                beschweren. Zur Ausübung Ihrer Rechte genügt eine E-Mail an{" "}
                                <a className="text-primary hover:underline" href="mailto:hei@reliableai.no">hei@reliableai.no</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Auftragsverarbeiter und Drittlandtransfer</h2>
                            <p>
                                Wir setzen Vercel Inc. (Hosting, Analyse) und Calendly LLC (Terminbuchung)
                                als Auftragsverarbeiter ein. Übermittlungen in Drittländer stützen sich auf das EU-US Data
                                Privacy Framework bzw. Standardvertragsklauseln.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
