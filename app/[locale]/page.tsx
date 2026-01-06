import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { LogoCarousel } from "@/components/shared/LogoCarousel"
import { Values } from "@/components/home/Values"
import { Offerings } from "@/components/home/Offerings"
import { Testimonial } from "@/components/home/Testimonial"
import { BlogPreview } from "@/components/home/BlogPreview"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <Values />
        <Testimonial />
        <Offerings />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
