import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageHeadDark } from "@/components/layout/PageHeadDark"
import { TeamGrid } from "@/components/team/TeamGrid"
import { getTranslations } from "next-intl/server"

export default async function TeamPage() {
    const t = await getTranslations('Team')

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <PageHeadDark
                    kicker="Team"
                    title={t.rich('title', {
                        reliable: (chunks) => <em className="italic text-himmel" style={{ fontVariationSettings: "'WONK' 1" }}>{chunks}</em>,
                        br: () => <br />,
                    })}
                    sub={t('subtitle')}
                />
                <TeamGrid />
            </main>
            <Footer />
        </div>
    )
}
