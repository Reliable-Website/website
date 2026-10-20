import type { ReactNode } from "react"
import type { Metadata, ResolvingMetadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { SiteBar } from "@/components/home/SiteBar"
import { SiteFooter } from "@/components/home/SiteFooter"
import { BASE_URL } from "@/lib/seo"
import s from "@/components/home/Home.module.css"
import l from "@/components/legal/Legal.module.css"

// /legal and the documents' own pages: the homepage's header and footer around a paper ground.
export function LegalShell({ children }: { children: ReactNode }) {
    const t = useTranslations("Home")

    return (
        <div className={s.page}>
            <div className={l.page}>
                <a className={s.skip} href="#main">{t("skip")}</a>
                <SiteBar />
                <main id="main" className={s.main}>{children}</main>
                <SiteFooter />
            </div>
        </div>
    )
}

export async function legalMetadata(locale: string, path: string, title: string, parent: ResolvingMetadata): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "Legal" })
    const { openGraph, twitter } = await parent
    const description = t("description")
    const url = `${BASE_URL}/${locale}${path}`

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                en: `${BASE_URL}/en${path}`,
                no: `${BASE_URL}/no${path}`,
                "x-default": `${BASE_URL}/en${path}`,
            },
        },
        openGraph: { ...openGraph, title: `${title} | Reliable`, description, url },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Reliable`,
            description,
            creator: twitter?.creator ?? undefined,
            images: twitter?.images,
        },
    }
}
