import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageHead } from "@/components/layout/PageHead"

// DRAFT — founder/legal review required before launch.
// Processors listed: Vercel (hosting + cookieless analytics), Calendly.
// Confirm completeness before removing the draft notice.

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <PageHead kicker="Legal" title="Privacy policy" />
                <div className="mx-auto max-w-[760px] px-6 pb-24 pt-4">
                    <p className="mb-8 inline-block rounded-full bg-appelsin/25 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#9a5a14]">
                        Draft · under review
                    </p>

                    <div className="space-y-8 text-[15.5px] leading-relaxed text-ink-60 [&_h2]:mb-2 [&_h2]:text-[22px] [&_h2]:text-foreground">
                        <section>
                            <h2>Who we are</h2>
                            <p>
                                Reliable AI AS (org.nr 934 343 786), Akersbakken 30, 0172 Oslo, Norway, is the data
                                controller for personal data processed through this website. Contact:{" "}
                                <a className="text-primary hover:underline" href="mailto:hei@reliableai.no">hei@reliableai.no</a>.
                            </p>
                        </section>

                        <section>
                            <h2>What we process, and why</h2>
                            <p>
                                <strong className="text-foreground">Website analytics.</strong> We use Vercel Analytics (cookieless) to understand how the site is used (pages visited, approximate location, device type).
                                Legal basis: legitimate interest in improving the site (GDPR art. 6(1)(f)).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">Demo bookings.</strong> If you book a demo, Calendly processes
                                the name, e-mail address and meeting details you provide. Legal basis: steps prior to entering a
                                contract (GDPR art. 6(1)(b)).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">E-mail.</strong> If you write to us, we process your message
                                and contact details to answer you. Legal basis: legitimate interest (GDPR art. 6(1)(f)).
                            </p>
                            <p className="mt-3">
                                <strong className="text-foreground">Hosting.</strong> The site is hosted by Vercel Inc.; server
                                logs (IP address, request data) are processed for operation and security.
                            </p>
                        </section>

                        <section>
                            <h2>Retention</h2>
                            <p>
                                Analytics data is retained according to the respective provider&apos;s standard retention periods.
                                E-mail correspondence is retained as long as needed to handle your enquiry and any ensuing
                                relationship.
                            </p>
                        </section>

                        <section>
                            <h2>Your rights</h2>
                            <p>
                                You have the right to access, rectify and erase your personal data, to restrict or object to
                                processing, and to data portability. You may complain to Datatilsynet (the Norwegian Data
                                Protection Authority) or your local supervisory authority. To exercise your rights, contact{" "}
                                <a className="text-primary hover:underline" href="mailto:hei@reliableai.no">hei@reliableai.no</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Processors and transfers</h2>
                            <p>
                                We use Vercel Inc. (hosting, analytics) and Calendly LLC (scheduling) as
                                processors. Where data is transferred outside the EEA, transfers rely on the EU–US Data Privacy
                                Framework or standard contractual clauses.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
