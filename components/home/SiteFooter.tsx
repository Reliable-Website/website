import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { ADDRESS } from "@/components/home/content"
import s from "@/components/home/Home.module.css"

export function SiteFooter() {
    const t = useTranslations("Home")

    return (
        <footer className={s.foot}>
            <span>© {new Date().getFullYear()} Reliable AI AS</span>
            <span>{ADDRESS}</span>
            <span className={s.org}>Org.nr 934 343 786</span>
            <span className={s.end}>
                <Link href="/legal">{t("legal")}</Link>
                <a href="#top">{t("top")}</a>
            </span>
        </footer>
    )
}
