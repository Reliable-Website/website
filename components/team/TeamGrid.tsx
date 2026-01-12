"use client"


import Image from "next/image"
import { useTranslations } from "next-intl"

const team = [
    {
        name: "Halvor Tyseng",
        email: "halvor@reliableai.no",
        image: "/images/Team/halvor.jpg",
        role: "co_founder",
        description: "Background in physics and computational science. Specializes in text embeddings and the representation of meaning — with a particular interest in creative approaches to working with embedding spaces. The technical backbone of Reliable AI. When not coding, you'll find him on the cross-country skiing trails or at the bouldering gym.",
    },
    {
        name: "Jonas Timmann Mjaaland",
        email: "jonas@reliableai.no",
        image: "/images/Team/jonas.jpg",
        role: "co_founder",
        description: "Background in philosophy and data science, with a strong foundation in statistics and theory. Has an eye for design and makes the solutions look good. When he's not working, you might find him on the basketball court or the football pitch.",
    },
    {
        name: "Markus Kreutzer",
        email: "markus@reliableai.no",
        image: "/images/Team/markus.jpg",
        role: "co_founder",
        description: "Background in philosophy, AI, and ethics — with a particular interest in how language models represent concepts. Leads sales and marketing at Reliable AI. Tennis player and downhill skier of near-professional caliber.",
    },
    {
        name: "Tor Ole Bigton Odden",
        email: "torole@reliableai.no",
        image: "/images/Team/tor.jpg",
        role: "co_founder",
        description: "Associate Professor of Physics at the University of Oslo. His research focuses on computational literacy, active learning methods, and using NLP for educational research — including text embeddings for qualitative analysis. In his spare time, he plays Norwegian folk fiddle, carves wood, and reads graphic novels.",
    },
    {
        name: "Anders Malthe-Sørenssen",
        email: "anders@reliableai.no",
        image: "/images/Team/anders.jpg",
        role: "co_founder",
        description: "Professor of Physics at the University of Oslo with research spanning geophysics, neuroscience, and artificial intelligence. Director of the Center for Computing in Science Education and experienced in bringing academic research to market — having founded companies and taken them through IPO. Currently chairs a national committee (Malthe-Sørenssen-utvalget) advising on how AI should reshape higher education. Runs on oatmeal.",
    },
    {
        name: "Mathilde Fiksdahl",
        image: "/images/Team/mathilde.jpg",
        role: "board_member",
        description: "Partner at Sprint Consulting with nine years of experience in innovation and sustainability consulting. Background from NTNU in computer science and strategy. Specializes in helping companies drive innovation, establish new ventures, and pursue sustainable growth.",
    },
    {
        name: "Lars-Petter Windelstad Kjos",
        image: "/images/Team/larspetter.png",
        role: "board_member",
        description: "5x serial entrepreneur in EdTech. Co-founder and CPO of We Are Learning (immersive 3D learning). Previously co-founded Motimate, which was acquired by Kahoot!. His journey spans from CD-ROMs and laser discs to gamification and AI-powered immersive products. Known as a captivating speaker on creativity and AI.",
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
                {member.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {member.description}
                    </p>
                )}
            </div>
        </div>
    )
}
