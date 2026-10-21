import { useTranslations } from "next-intl"
import { PageRow, PageShell } from "@/components/home/PageShell"

export default function NotFound() {
    const t = useTranslations("NotFound")

    return (
        <PageShell title={t("title")}>
            <PageRow label="404" title={t("home")} href="/" />
        </PageShell>
    )
}
