"use client"


import Image from "next/image"
import { useTranslations } from "next-intl"

const team = [
    {
        name: "Halvor Tyseng",
        email: "halvor@reliableai.no",
        image: "/images/Team/halvor.jpg",
        role: "co_founder",
    },
    {
        name: "Jonas Timmann Mjaaland",
        email: "jonas@reliableai.no",
        image: "/images/Team/jonas.jpg",
        role: "co_founder",
    },
    {
        name: "Markus Kreutzer",
        email: "markus@reliableai.no",
        image: "/images/Team/markus.jpg",
        role: "co_founder",
    },
    {
        name: "Tor Ole Bigton Odden",
        email: "torole@reliableai.no",
        image: "/images/Team/tor.jpg",
        role: "co_founder",
    },
    {
        name: "Anders Malthe-Sørenssen",
        email: "anders@reliableai.no",
        image: "/images/Team/anders.jpg",
        role: "co_founder",
    },
    {
        name: "Mathilde Fiksdahl",
        image: "/images/Team/mathilde.jpg",
        role: "board_member",
    },
    {
        name: "Lars-Petter Windelstad Kjos",
        image: "/images/Team/larspetter.png",
        role: "board_member",
    },
]

export function TeamGrid() {
    const t = useTranslations('Team')

    // Split team into two columns
    const leftColumn = team.filter((_, i) => i % 2 === 0)
    const rightColumn = team.filter((_, i) => i % 2 !== 0)

    return (
        <section className="pt-40 pb-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 lg:px-32">
                {/* Title Section - Mobile only */}
                <div className="md:hidden mb-12">
                    <h1 className="font-heading text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
                        {t.rich('title', {
                            reliable: (chunks) => <span className="text-primary italic">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column - Starts slightly lower (Desktop only) */}
                    <div className="hidden md:block space-y-12 lg:space-y-24 md:pt-12">
                        {team.filter((_, i) => i % 2 === 0).map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>

                    {/* Mobile view - Sequential order */}
                    <div className="md:hidden space-y-12">
                        {team.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>

                    {/* Right Column - Starts with Header, padding reduced (Desktop only) */}
                    <div className="hidden md:block space-y-12 lg:space-y-24 md:pt-12">
                        <div className="mb-16 md:mb-24 text-left hidden md:block">
                            <h1 className="font-heading text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
                                {t.rich('title', {
                                    reliable: (chunks) => <span className="text-primary italic">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {t('subtitle')}
                            </p>
                        </div>

                        {team.filter((_, i) => i % 2 !== 0).map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TeamMemberCard({ member }: { member: typeof team[0] }) {
    const t = useTranslations('Team')

    return (
        <div className="group relative">
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
                {/* Grayscale to Color hover effect */}
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
                />
            </div>

            <div className="space-y-2 border-t border-black/10 pt-4 pb-4 border-b">
                <h3 className="font-heading text-2xl font-normal text-foreground">
                    {member.name}
                </h3>
                <div className="flex flex-col gap-1 text-muted-foreground">
                    <p className="font-medium text-primary">{t(`roles.${member.role}`)}</p>
                    {member.email && (
                        <a href={`mailto:${member.email}`} className="text-sm hover:text-foreground transition-colors">
                            {member.email}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
