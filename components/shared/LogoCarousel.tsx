"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LogoCarousel() {
    const logos = [
        { name: "Føyen", url: "/images/LogoCarousel/foyen.png" },
        { name: "Haavind", url: "/images/LogoCarousel/haavind.png" },
        { name: "Innovasjon Norge", url: "/images/LogoCarousel/innovasjonnorge.png" },
        { name: "Microsoft", url: "/images/LogoCarousel/microsoft.png" },
        { name: "NORA", url: "/images/LogoCarousel/nora.png" },
        { name: "Rettsdata", url: "/images/LogoCarousel/rettsdata.png" },
        { name: "Selmer", url: "/images/LogoCarousel/selmer.png" },
        { name: "UiO", url: "/images/LogoCarousel/uio.png" },
    ]

    // Duplicate logos to ensure seamless looping
    const duplicatedLogos = [...logos, ...logos]

    return (
        <section className="py-0 md:py-12 bg-muted/30 overflow-hidden">
            <div className="w-full overflow-hidden mask-gradient-x">
                <motion.div
                    className="flex items-center gap-16 w-max px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogos.map((logo, index) => {
                        let sizeClasses = "h-12 w-32"
                        let imageClasses = "object-contain"
                        if (logo.name === "UiO") {
                            sizeClasses = "h-28 w-64"
                            imageClasses = "object-cover"
                        } else if (logo.name === "Rettsdata") {
                            sizeClasses = "h-16 w-40"
                        }
                        return (
                            <div key={index} className={`flex items-center justify-center relative ${sizeClasses} flex-shrink-0 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100`}>
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className={imageClasses}
                                />
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
