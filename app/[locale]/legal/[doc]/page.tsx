import type { ResolvingMetadata, Viewport } from "next"
import { notFound } from "next/navigation"
import clsx from "clsx"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { LegalShell, legalMetadata } from "@/components/legal/LegalShell"
import { isLegalSlug, readLegal, SLUGS } from "@/lib/legal"
import s from "@/components/home/Home.module.css"
import l from "@/components/legal/Legal.module.css"

export const viewport: Viewport = { themeColor: "#F3F3F1" }

type Props = { params: Promise<{ locale: string; doc: string }> }

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
    const { locale, doc } = await params
    if (!isLegalSlug(doc)) notFound()
    return legalMetadata(locale, `/legal/${doc}`, readLegal(doc, locale, 2, String).title, parent)
}

// One document on its own page, /legal/terms and so on, with the other five beside it.
export default async function LegalDocument({ params }: Props) {
    const { locale, doc: slug } = await params
    if (!isLegalSlug(slug)) notFound()

    const t = await getTranslations("Legal")
    const link = (to: string) => `/${locale}/legal/${to}`
    const doc = readLegal(slug, locale, 2, link)
    const docs = SLUGS.map((other) => readLegal(other, locale, 2, link))

    return (
        <LegalShell>
            <div className={l.head} id="top">
                <Link className={l.back} href="/legal">← {t("title")}</Link>
                <h1 className={l.title}>{doc.title}</h1>
                {doc.sub && <p className={l.meta}>{doc.sub}</p>}
            </div>

            <section className={clsx(s.sec, l.first)}>
                <nav className={clsx(l.side, l.docs)} aria-label={t("title")}>
                    <ul>
                        {docs.map((other) => (
                            <li key={other.slug}>
                                <Link href={`/legal/${other.slug}`} aria-current={other.slug === slug ? "page" : undefined}>{other.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Our own file from content/legal, rendered on the server. */}
                <div className={clsx(s.body, l.text)} dangerouslySetInnerHTML={{ __html: doc.html }} />
            </section>
        </LegalShell>
    )
}
