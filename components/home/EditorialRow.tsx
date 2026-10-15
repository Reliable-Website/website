import type { ReactNode } from "react"

// Numbered editorial row: a big section number in a sticky left margin,
// content on the right.
export function EditorialRow({ id, num, label, children }: {
    id?: string
    num: string
    label: string
    children: ReactNode
}) {
    return (
        <div id={id} className="grid grid-cols-1 gap-6 border-t border-rule py-16 md:py-[88px] lg:grid-cols-[230px_1fr] lg:gap-14">
            <div className="lg:sticky lg:top-[104px] lg:self-start">
                <span className="block text-[48px] font-light leading-[0.9] tracking-[-0.04em] text-primary lg:text-[72px]">{num}</span>
                <span className="mt-3.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-60">{label}</span>
            </div>
            <div className="min-w-0">{children}</div>
        </div>
    )
}

export function EditorialHeading({ children }: { children: ReactNode }) {
    return (
        <h2 className="max-w-[18em] leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 3.3vw, 46px)" }}>
            {children}
        </h2>
    )
}

// Copy the team still has to write. Rendered loudly on purpose so it cannot ship unnoticed;
// remove the <ph> tags in messages once the real text is in.
export function Placeholder({ children }: { children: ReactNode }) {
    return (
        <span className="whitespace-nowrap rounded-md border border-dashed border-appelsin bg-appelsin/20 px-1.5 not-italic text-[#a85c18]">
            {children}
        </span>
    )
}
