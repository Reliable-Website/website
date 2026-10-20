import type { ResolvingMetadata, Viewport } from "next"
import clsx from "clsx"
import { getTranslations } from "next-intl/server"
import { LegalShell, legalMetadata } from "@/components/legal/LegalShell"
import { readLegal, SLUGS } from "@/lib/legal"
import s from "@/components/home/Home.module.css"
import l from "@/components/legal/Legal.module.css"

export const viewport: Viewport = { themeColor: "#F3F3F1" }

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Legal" })
    return legalMetadata(locale, "/legal", t("title"), parent)
}

// All six documents on one page: contents first, then each document in full.
// Links between the documents jump to their sections here.
export default async function Legal({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations("Legal")
    const docs = SLUGS.map((slug) => readLegal(slug, locale, 3, (to) => `#${to}`))

    return (
        <LegalShell>
            <div className={l.head} id="top">
                <h1 className={l.title}>{t("title")}</h1>
            </div>

            <section className={clsx(s.sec, l.first)} aria-labelledby="contents">
                <h2 className={s.label} id="contents">{t("contents")}</h2>
                <div className={clsx(s.body, l.index)}>
                    {docs.map((doc) => (
                        <a key={doc.slug} className={l.entry} href={`#${doc.slug}`}>
                            <span className={l.name}><span className={s.u}>{doc.title}</span></span>
                            <span className={l.when}>{doc.sub}</span>
                            <span className={l.down} aria-hidden="true">↓</span>
                        </a>
                    ))}
                </div>
            </section>

            {docs.map((doc) => (
                <section key={doc.slug} className={s.sec} id={doc.slug} aria-labelledby={`${doc.slug}-title`}>
                    <div className={l.side}>
                        <h2 className={l.docTitle} id={`${doc.slug}-title`}>{doc.title}</h2>
                        {doc.sub && <p className={l.docMeta}>{doc.sub}</p>}
                    </div>
                    {/* Our own files from content/legal, rendered on the server. */}
                    <div className={clsx(s.body, l.text)} dangerouslySetInnerHTML={{ __html: doc.html }} />
                </section>
            ))}
        </LegalShell>
    )
}
