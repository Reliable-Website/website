import type { Metadata, Viewport } from "next"
import { useLocale, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { PageRow, PageShell } from "@/components/home/PageShell"
import { CALENDLY_URL, loginUrlFor } from "@/lib/constants"

export const viewport: Viewport = { themeColor: "#B3BDF8" }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Access" })
    return { title: t("title") }
}

// The header's "Log in": on to the app, or a demo for those who are new.
export default function AccessPage() {
    const t = useTranslations("Access")
    const loginUrl = loginUrlFor(useLocale())

    return (
        <PageShell title={t("title")}>
            <PageRow label={t("customers")} title={t("login")} note={new URL(loginUrl).host} href={loginUrl} />
            <PageRow label={t("new")} title={t("demo")} href={CALENDLY_URL} newTab quiet />
        </PageShell>
    )
}
