import type { CSSProperties } from "react"
import type { Viewport } from "next"
import Image from "next/image"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import { HomeMotion } from "@/components/home/HomeMotion"
import { SiteFooter } from "@/components/home/SiteFooter"
import { ADDRESS, FIRMS, MAPS_URL, PEOPLE, PRESS, PUBLICATIONS, QUOTES, TEAM } from "@/components/home/content"
import s from "@/components/home/Home.module.css"

export const viewport: Viewport = { themeColor: "#B3BDF8" }

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function Home() {
    const t = useTranslations("Home")
    const bios = useTranslations("Team.descriptions")
    const locale = useLocale()

    return (
        <div className={s.page}>
            <a className={s.skip} href="#main">{t("skip")}</a>

            <HomeMotion />

            <main id="main" className={s.main}>
                <section className={s.sec} id="clients">
                    <h2 className={s.label}>{t("clients")}</h2>
                    <div className={s.body}>
                        <div className={s.logos}>
                            {FIRMS.map((f) => (
                                <Image
                                    key={f.alt}
                                    src={f.src}
                                    alt={f.alt}
                                    width={f.w}
                                    height={f.ih}
                                    sizes={`${Math.ceil((f.h * 1.5 * f.w) / f.ih)}px`}
                                    style={{ "--h": f.h, width: "auto" } as CSSProperties}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className={s.sec} id="words">
                    <h2 className={s.label}>{t("words")}</h2>
                    <div className={clsx(s.body, s.quotes, locale === "no" && s.nb)}>
                        {QUOTES.map((q) => (
                            <blockquote key={q.key}>
                                <span className={s.face}>
                                    <Image src={q.img} alt="" width={132} height={165} />
                                </span>
                                <p>{t(`quotes.${q.key}`)}</p>
                                <footer><p>{q.name}<span>{q.role}</span></p></footer>
                            </blockquote>
                        ))}
                    </div>
                </section>

                <section className={s.sec} id="press">
                    <h2 className={s.label}>{t("press")}</h2>
                    <div className={clsx(s.body, s.rows)}>
                        {PRESS.map((p) => (
                            <a key={p.key} className={s.row} href={p.href} {...external}>
                                <span className={s.k}>{p.outlet}</span>
                                <span className={s.v}><span className={s.u}>{t(`headlines.${p.key}`)}</span></span>
                                <span className={s.arr} aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                </section>

                <section className={clsx(s.sec, s.research)} id="research">
                    <h2 className={s.label}>{t("research")}</h2>
                    <div className={s.body}>
                        <div className={s.rows}>
                            {PUBLICATIONS.map((pub) => {
                                const cells = (
                                    <>
                                        <span className={s.k}>{pub.year}</span>
                                        <span className={s.v}>
                                            {pub.href ? <span className={s.u}>{pub.title}</span> : pub.title}
                                            <small>{pub.venue}</small>
                                        </span>
                                        {pub.href ? <span className={s.arr} aria-hidden="true">↗</span> : <span />}
                                    </>
                                )
                                return pub.href ? (
                                    <a key={pub.title} className={s.row} href={pub.href} {...external}>{cells}</a>
                                ) : (
                                    <div key={pub.title} className={s.row}>{cells}</div>
                                )
                            })}
                        </div>
                        <div className={s.support}>
                            <div>
                                <span className={s.k}>{t("rootedIn")}</span>
                                <Image className={s.uio} src="/images/LogoCarousel/uio-logo.svg" alt="University of Oslo" width={312} height={96} style={{ width: "auto" }} />
                            </div>
                            <div>
                                <span className={s.k}>{t("supportedBy")}</span>
                                <div className={s.sponsors}>
                                    <Image className={s.ms} src="/images/LogoCarousel/microsoft.png" alt="Microsoft for Startups" width={1046} height={439} sizes="115px" style={{ width: "auto" }} />
                                    <span className={s.anthropic}>ANTHROPIC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.sec} id="team">
                    <h2 className={s.label}>{t("team")}</h2>
                    <div className={clsx(s.body, s.people)} id="people">
                        {TEAM.map((g) => [
                            <h3 key={g.group} className={s.group}>{t(`groups.${g.group}`)}</h3>,
                            ...g.people.map((p) => (
                                <details key={p.bio} className={s.person}>
                                    <summary data-person={PEOPLE.indexOf(p)}>
                                        <span className={s.name}>{p.name}</span>
                                        <span className={s.role}>{t(`roles.${p.role}`)}</span>
                                        <span className={s.plus} aria-hidden="true" />
                                    </summary>
                                    <div className={s.bio}>
                                        <Image src={p.img} alt="" width={480} height={600} sizes="64vw" />
                                        <p>{bios(p.bio)}</p>
                                        {p.email && <a className={s.mail} href={`mailto:${p.email}`}>{p.email}</a>}
                                    </div>
                                </details>
                            )),
                        ])}
                    </div>
                </section>

                <section className={s.sec} id="contact">
                    <h2 className={s.label}>{t("contact")}</h2>
                    <div className={clsx(s.body, s.rows)}>
                        <a className={s.row} href="mailto:markus@reliableai.no">
                            <span className={s.k}>{t("ceo")}</span>
                            <span className={s.v}><span className={s.u}>markus@reliableai.no</span></span>
                            <span className={s.arr} aria-hidden="true">→</span>
                        </a>
                        <a className={s.row} href={MAPS_URL} {...external}>
                            <span className={s.k}>{t("address")}</span>
                            <span className={s.v}><span className={s.u}>{ADDRESS}</span></span>
                            <span className={s.arr} aria-hidden="true">↗</span>
                        </a>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    )
}
