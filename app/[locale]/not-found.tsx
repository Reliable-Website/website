import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="mx-auto max-w-[1100px] px-6 pb-28 pt-14">
                    <div className="sec-num">404</div>
                    <h1 className="mt-10 max-w-[14em] text-[clamp(34px,3.8vw,54px)] leading-[1.08]">
                        This page does not exist — <em className="italic text-primary">and unlike a chatbot, we say so.</em>
                    </h1>
                    <Link
                        href="/"
                        className="mt-9 inline-block rounded-full border border-primary bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:border-[#5a6de8] hover:bg-[#5a6de8]"
                    >
                        Back to the front page
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}
