import { Header } from "@/components/layout/Header"
import { AccessHero } from "@/components/access/AccessHero"

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
