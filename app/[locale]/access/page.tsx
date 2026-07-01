import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { Header } from "@/components/layout/Header"
import { AccessHero } from "@/components/access/AccessHero"

// Reliable-focused tab title for the gate page (no Presedens); the layout template appends " | Reliable AI".
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Header" })
    return { title: t("access") }
}

// Gate page between the header CTA and the app: book a demo, or log in if you already have access.
export default function AccessPage() {
    return (
        <div className="flex min-h-screen flex-col bg-svart text-hvit">
            <Header />
            <main className="relative flex flex-1 items-center justify-center overflow-hidden">
                <AccessHero />
            </main>
        </div>
    )
}
