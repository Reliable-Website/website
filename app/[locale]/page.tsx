import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PresedensHero } from "@/components/home/PresedensHero"
import { LaunchNote } from "@/components/home/LaunchNote"
import { TrustStrip } from "@/components/home/TrustStrip"
import { StatsBand } from "@/components/home/StatsBand"
import { PressStrip } from "@/components/home/PressStrip"
import { Compare } from "@/components/home/Compare"
import { Capabilities } from "@/components/home/Capabilities"
import { Coverage } from "@/components/home/Coverage"
import { GermanCoverage } from "@/components/home/GermanCoverage"
import { GermanProof } from "@/components/home/GermanProof"
import { BuiltWithLawyers } from "@/components/home/BuiltWithLawyers"
import { ResearchSection } from "@/components/home/ResearchSection"
import { CtaBand } from "@/components/home/CtaBand"

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params

  // The German market gets its own page composition: launch framing,
  // DE/EU source roadmap, the retrieval argument, and Nordic proof.
  if (locale === "de") {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PresedensHero />
          <LaunchNote />
          <StatsBand />
          <GermanCoverage />
          <Compare />
          <Capabilities />
          <GermanProof />
          <CtaBand />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PresedensHero />
        <TrustStrip />
        <StatsBand />
        <PressStrip />
        <Compare />
        <Capabilities />
        <Coverage />
        <BuiltWithLawyers />
        <ResearchSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
