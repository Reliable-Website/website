import type { ReactNode } from "react"
import { useTranslations } from "next-intl"
import { EditorialRow, EditorialHeading, Placeholder } from "@/components/home/EditorialRow"

type Status = "live" | "building" | "exploring"

const ROWS: { key: string; status: Status }[] = [
    { key: "law", status: "live" },
    { key: "area1", status: "building" },
    { key: "area2", status: "building" },
    { key: "yours", status: "exploring" },
]

const DOT: Record<Status, string> = {
    live: "bg-gronn",
    building: "bg-appelsin",
    exploring: "bg-ink-30",
}

// Fields we search today, are building for, and are exploring.
export function NextFields() {
    const t = useTranslations('NextFields')
    const ph = (c: ReactNode) => <Placeholder>{c}</Placeholder>

    return (
        <EditorialRow id="next" num="02" label={t('label')}>
            <EditorialHeading>{t.rich('heading', { ph, em: (c) => <em className="italic text-primary">{c}</em> })}</EditorialHeading>
            <p className="mt-[18px] max-w-[36em] text-[18px] text-ink-60">{t('lead')}</p>

            <div className="mt-11 border-t border-rule">
                {ROWS.map((row) => (
                    <div key={row.key} className="grid grid-cols-1 items-baseline gap-1 border-b border-rule py-[22px] md:grid-cols-[150px_260px_1fr] md:gap-6">
                        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-60">
                            <i className={`h-[7px] w-[7px] rounded-full ${DOT[row.status]}`} />
                            {t(row.status)}
                        </span>
                        <h3 className="text-[21px]" style={{ fontWeight: 450 }}>{t.rich(`rows.${row.key}.title`, { ph })}</h3>
                        {t.has(`rows.${row.key}.body`) && (
                            <p className="text-[15px] text-ink-60">{t.rich(`rows.${row.key}.body`, { ph })}</p>
                        )}
                    </div>
                ))}
            </div>
        </EditorialRow>
    )
}
