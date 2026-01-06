import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TeamGrid } from "@/components/team/TeamGrid"

export default function TeamPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <TeamGrid />
            </main>
            <Footer />
        </div>
    )
}
