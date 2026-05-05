"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function LogoCarousel() {
    const logos = [
        { name: "Microsoft", url: "/images/LogoCarousel/microsoft.png" },
        { name: "UiO", url: "/images/LogoCarousel/uio.png" },
        { name: "Haavind", url: "/images/LogoCarousel/haavind.png" },
        { name: "Selmer", url: "/images/LogoCarousel/selmer.png" },
        { name: "Rettsdata", url: "/images/LogoCarousel/rettsdata.png" },
        { name: "Innovasjon Norge", url: "/images/LogoCarousel/in.png" },
        { name: "Odin", url: "/images/LogoCarousel/odin.png" },
        { name: "Sprint", url: "/images/LogoCarousel/sprint.png" },
    ]

    // Duplicate logos to ensure seamless looping
    const duplicatedLogos = [...logos, ...logos]

    const [isMobile, setIsMobile] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const trackRef = useRef<HTMLDivElement>(null)
    const offsetRef = useRef(0)
    const rafRef = useRef<number>(0)
    const lastTimeRef = useRef<number>(0)
    const speed = 1 // pixels per frame at 60fps

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    useEffect(() => {
        const animate = (time: number) => {
            if (!trackRef.current) return
            if (!isPaused || isMobile) {
                const delta = lastTimeRef.current ? (time - lastTimeRef.current) / 16.67 : 1
                offsetRef.current -= speed * delta
                const totalWidth = trackRef.current.scrollWidth / 2
                if (Math.abs(offsetRef.current) >= totalWidth) {
                    offsetRef.current += totalWidth
                }
                trackRef.current.style.transform = `translateX(${offsetRef.current}px)`
            }
            lastTimeRef.current = time
            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [isPaused, isMobile])

    return (
        <section className="py-0 md:py-12 bg-muted/30 overflow-hidden relative z-10">
            <div
                className="w-full overflow-hidden mask-gradient-x"
                onMouseEnter={() => setIsPaused(false)}
                onMouseLeave={() => setIsPaused(true)}
            >
                <div
                    ref={trackRef}
                    className="flex items-center gap-16 w-max px-4"
                >
                    {duplicatedLogos.map((logo, index) => {
                        let sizeClasses = "h-12 w-32"
                        const imageClasses = "object-contain"
                        let imageScale = ""
                        if (logo.name === "UiO") {
                            sizeClasses = "h-12 w-40"
                        } else if (logo.name === "Rettsdata") {
                            sizeClasses = "h-16 w-40"
                        } else if (logo.name === "Føyen") {
                            sizeClasses = "h-12 w-32"
                        } else if (logo.name === "Sprint") {
                            sizeClasses = "h-14 w-40"
                            imageScale = "scale-[1.3]"
                        }
                        return (
                            <div key={index} className={`flex items-center justify-center relative ${sizeClasses} flex-shrink-0 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100`}>
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className={`${imageClasses} ${imageScale}`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
