import Image from "next/image"

// The logo files spell "Reliable ai". Until a "Reliable" wordmark exists, crop
// the circle mark out of the full logo and set the name in type beside it.
export function Brand({ inverted = false, priority = false }: { inverted?: boolean; priority?: boolean }) {
    return (
        <span className="flex items-center gap-2.5 text-[22px] leading-none tracking-[-0.015em]" style={{ fontWeight: 400 }}>
            <span className="block h-6 w-[25px] flex-none overflow-hidden">
                <Image
                    src={inverted ? "/images/LogoReliable/logo-inverted-trim.png" : "/images/LogoReliable/logo-svart-trim.png"}
                    alt=""
                    width={1710}
                    height={319}
                    className="h-6 max-w-none"
                    style={{ width: "auto" }}
                    priority={priority}
                />
            </span>
            Reliable
        </span>
    )
}
