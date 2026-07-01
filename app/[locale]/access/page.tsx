import { Inter } from "next/font/google"

import { Header } from "@/components/layout/Header"
import { AccessHero } from "@/components/access/AccessHero"

// Per the current design preference, the access gate uses Inter (not the site's Fraunces/Instrument).
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"] })

// Gate page between the header CTA and the app: book a demo, or log in if you already have access.
export default function AccessPage() {
    return (
        <div className="flex min-h-screen flex-col bg-natt text-hvit">
            <Header />
            <main className={`${inter.className} relative flex flex-1 items-center justify-center overflow-hidden`}>
                <AccessHero />
            </main>
        </div>
    )
}
