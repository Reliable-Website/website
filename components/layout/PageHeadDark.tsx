import type { ReactNode } from "react"

export function PageHeadDark({ kicker, title, sub, meta }: {
    kicker: string
    title: ReactNode
    sub?: string
    meta?: ReactNode
}) {
    return (
        <div className="relative overflow-hidden border-b border-rule bg-svart text-hvit">
            {/* ruled-paper lines, as on the homepage hero */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(160,173,249,.05) 0 1px, transparent 1px 56px)" }}
            />
            <div className="relative mx-auto max-w-[1180px] px-6 pb-12 pt-14 md:pb-14 md:pt-16">
                <div className="max-w-[820px]">
                    <span className="sec-num" style={{ color: "#A0ADF9" }}>{kicker}</span>
                    <h1 className="text-[clamp(34px,3.8vw,54px)] leading-[1.06] text-hvit">{title}</h1>
                    {sub && <p className="mt-4 max-w-[40em] text-[17.5px] leading-relaxed text-paper-60">{sub}</p>}
                    {meta && <div className="mt-6 font-mono text-[12.5px] tracking-[0.04em] text-paper-60">{meta}</div>}
                </div>
            </div>
        </div>
    )
}
