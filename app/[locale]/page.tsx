import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { Statement } from "@/components/home/Statement"
import { TrackRecord } from "@/components/home/TrackRecord"
import { NextFields } from "@/components/home/NextFields"
import { ResearchSection } from "@/components/home/ResearchSection"
import { PressQuotes } from "@/components/home/PressQuotes"
import { Closing } from "@/components/home/Closing"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Statement />
                <PressQuotes />
                <div className="mx-auto max-w-[1180px] px-6">
                    <TrackRecord />
                    <NextFields />
                    <ResearchSection />
                </div>
                <Closing />
            </main>
            <Footer />
        </div>
    )
}
