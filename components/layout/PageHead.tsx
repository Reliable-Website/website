import type { ReactNode } from "react"

export function PageHead({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: string }) {
    return (
        <div className="mx-auto max-w-[1180px] px-6 pb-6 pt-16 md:pt-20">
            <div className="max-w-[760px]">
                <span className="sec-num">{kicker}</span>
                <h1 className="text-[clamp(34px,3.6vw,52px)] leading-[1.08]">{title}</h1>
                {sub && <p className="mt-4 max-w-[40em] text-[17.5px] text-ink-60">{sub}</p>}
            </div>
        </div>
    )
}
