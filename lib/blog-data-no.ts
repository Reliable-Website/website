import { BlogPost } from "./blog-data"

export const blogPostsNo: BlogPost[] = [
    {
        title: "Reliable AI mottar 1 MNOK fra Innovasjon Norge",
        excerpt: "Vi er stolte og takknemlige for å kunngjøre at Reliable AI er tildelt 1 000 000 kr i STUD-ENT-støtte fra Innovasjon Norge, ett av bare 20 prosjekter valgt ut fra rekordmange 87 søkere ved norske universiteter og høgskoler.",
        date: "10. april 2026",
        category: "Bedriftsnyheter",
        slug: "innovasjon-norge-stud-ent-grant",
        image: "/images/LogoCarousel/in.png",
        imageContain: true,
        content: `
            <p>Vi er stolte og takknemlige for å kunne dele at Reliable AI er tildelt <strong>1 000 000 kr</strong> i STUD-ENT-støtte fra Innovasjon Norge.</p>
            <p>STUD-ENT er ett av Norges mest konkurranseutsatte tilskuddsprogrammer for studentgründere, og årets runde trakk rekordmange 87 søknader fra 16 universiteter og høgskoler over hele landet. Bare 20 prosjekter ble valgt ut, og vi er blant dem.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Hva støtten gjør mulig</h2>
            <p>STUD-ENT-tilskuddet gir oss rom til å fortsette å bygge. Vi vil bruke det til å videreutvikle kjerneteknologien vår, fordype eksisterende partnerskap og utforske nye områder der pålitelig, ikke-generativ AI kan gjøre en forskjell.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Takk</h2>
            <p>Ingenting av dette hadde skjedd uten våre fantastiske støttespillere. Vi er takknemlige for Fysisk institutt ved UiO som har gitt oss et herlig miljø for å utforske kunstig intelligens, og som stadig er en kilde til faglig input. Vi vil også takke Advokatfirmaet Haavind, Gyldendal Rettsdata og Sprint Consulting for fortløpende råd og tilbakemeldinger.</p>
            <p>Og til slutt, takk til Innovasjon Norge. Vi tar ikke dette for gitt, med disse midlene kan vi nå satse for fullt.</p>
            <p><a href="https://www.innovasjonnorge.no/nyhetsartikkel/millioner-til-studenter-etter-rekordstor-interesse" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Les Innovasjon Norges kunngjøring →</a></p>
        `
    },
    {
        title: "Reliable AI i media: Universitas og Digital Norway",
        excerpt: "Vi er takknemlige for å ha blitt omtalt i to store norske publikasjoner — Universitas, Norges største studentavis, og Digital Norway — om reisen vår fra universitetsforskning til prisvinnende AI-teknologi.",
        date: "26. mars 2026",
        category: "Presse",
        slug: "reliable-ai-in-the-news",
        image: "/images/Blog/universitas1.webp",
        contentImage: "/images/Blog/universitas2.jpeg",
        contentImageContain: true,
        content: `
            <p>Vi er stolte og ydmyke over å ha blitt omtalt i to fremtredende norske publikasjoner nylig, som belyser Reliable AIs reise fra et forskningsprosjekt til en prisvinnende oppstartsbedrift.</p>

            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Universitas: «Skapte prisvinnende KI-verktøy ved siden av studiene»</h2>
            <p>Norges største studentavis, <strong>Universitas</strong>, publiserte en reportasje om hvordan tre UiO-masterstudenter — Halvor, Jonas og Markus — bygde DANTE og grunnla Reliable AI mens de fortsatt fullførte gradene sine. Artikkelen dekker våre røtter som et sommerprosjekt ved Senter for Computing in Science Education (CCSE), prisen vår på ECAI 2025, og vår tilnærming til ikke-generativ AI.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                «Masterstudiet har blitt en hobby. Arbeidet med Reliable AI tar mesteparten av tiden vår.»
                <footer class="mt-2 text-sm not-italic">— Halvor Tyseng, Co-Founder</footer>
            </blockquote>
            <p>Artikkelen berører også de bredere utfordringene norske oppstartsbedrifter står overfor — fra begrenset risikokapital sammenlignet med våre nordiske naboer, til kutt i Innovasjon Norges oppstartsstøtte. Til tross for denne motvinden er vi forpliktet til å bygge konkurransedyktig norsk AI-teknologi.</p>
            <p><a href="https://www.universitas.no/innovasjon-norge-kunstig-intelligens-reliable-ai/skapte-prisvinnende-ki-verktoy-ved-siden-av-studiene/398420" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Les hele Universitas-artikkelen →</a></p>

            <div class="relative w-full rounded-lg overflow-hidden my-8"><img src="/images/Blog/digitalnorway.jpeg" alt="Reliable AI omtalt i Digital Norway" style="width:100%;height:auto;border-radius:0.5rem;" /></div>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Digital Norway: «De har fått KI til å slutte å lyve»</h2>
            <p><strong>Digital Norway</strong> publiserte en grundig reportasje om vår kjerneinnovasjon — hvordan vi eliminerer AI-hallusinasjoner ved å fjerne det generative laget i språkmodeller og jobbe direkte med matematiske representasjoner av tekst. Resultatet er deterministisk, repeterbart og kildeverifiserbart søk.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                «Med vår modell vil du få samme svar hver gang. Den kan ikke hallusinere, fordi den ikke genererer noe.»
                <footer class="mt-2 text-sm not-italic">— Markus Kreutzer, Co-Founder</footer>
            </blockquote>
            <p>Artikkelen fremhever vårt samarbeid med advokatfirmaet Haavind for å utvikle KOFA Søk, og hvordan vår semantiske søketeknologi sparer jurister betydelig tid på research. Den rammer også inn et viktig spørsmål vi ofte vender tilbake til: spørsmålet bør ikke være om AI er «perfekt», men om den forbedrer arbeidsflyten sammenlignet med dagens praksis.</p>
            <p><a href="https://digitalnorway.com/aktuelt/de-har-fatt-ki-til-a-slutte-a-lyve" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Les hele Digital Norway-artikkelen →</a></p>

            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Hva dette betyr for oss</h2>
            <p>Å bli omtalt i disse publikasjonene er en milepæl for Reliable AI. Det bekrefter at forskningsbasert, ikke-generativ AI får anerkjennelse — ikke bare i akademiske kretser, men i det bredere norske teknologi- og medielandskapet. Vi er takknemlige for dekningen og motiverte til å fortsette å bygge pålitelige AI-løsninger.</p>
        `
    },
    {
        title: "Reliable AI vinner Outstanding Demo Award på ECAI 2025",
        excerpt: "Vi er stolte over å kunngjøre at Reliable AI, i samarbeid med Universitetet i Oslo, har vunnet Outstanding Demo Award på ECAI 2025 i Bologna for vårt verktøy DANTE – en pålitelig og transparent tilnærming til few-shot kvalitativ analyse.",
        date: "30. oktober 2025",
        category: "Pris",
        slug: "ecai-2025-outstanding-demo-award",
        image: "/images/Blog/ecai.jpg",
        featured: true,
        content: `
            <p>Vi er stolte over å kunngjøre at Reliable AI, i samarbeid med Universitetet i Oslo, har vunnet Outstanding Demo Award på ECAI 2025 – Europas eldste og mest prestisjefylte AI-konferanse – som i år ble avholdt i Bologna.</p>
            <p>Prisen ble gitt for vår demonstrasjon av DANTE, et pålitelig og transparent verktøy for few-shot kvalitativ analyse. DANTE muliggjør NLP-basert kvalitativ forskning uten behov for omfattende programmeringskompetanse, og gjør avansert tekstanalyse tilgjengelig for forskere og fagfolk på tvers av domener.</p>
            <p>Verktøyet bygger på vårt tidligere arbeid med tekst-embeddings for å legge til rette for mer produktiv og meningsfull kvalitativ analyse. Ved å representere tekst som høydimensjonale vektorer, lar DANTE brukere identifisere mønstre og sammenhenger i store tekstkorpus samtidig som transparens og tolkbarhet opprettholdes.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "Dette er enormt betydningsfullt både for oss som oppstartsbedrift og for forskningsmiljøet vi kommer fra. At norsk KI-teknologi får internasjonal anerkjennelse viser at vi er i front akademisk."
                <footer class="mt-2 text-sm not-italic">— Markus Kreutzer, Co-Founder</footer>
            </blockquote>
            <p>Denne anerkjennelsen understreker viktigheten av samarbeid mellom akademiske institusjoner og næringsliv for å bringe AI-teknologi fra forskningslaboratorier til praktiske profesjonelle anvendelser.</p>
            <p>Vi er takknemlige overfor ECAI-organisasjonskomiteen og det bredere AI-forskningsmiljøet for denne anerkjennelsen. Det motiverer oss til å fortsette å utvikle pålitelige, menneskesentrerte AI-løsninger som gjør kvalitativ forskning smartere, raskere og mer tilgjengelig.</p>
        `
    },
    {
        title: "Vi lanserer KOFA Søk — vårt første SaaS-produkt",
        excerpt: "Vi er stolte av å annonsere lanseringen av KOFA Søk, vårt første SaaS-produkt. Reliable AI tilbyr nå det vi mener er verdens beste søkeverktøy for KOFA-avgjørelser — som gjør det raskere og enklere å finne relevant rettspraksis innen offentlige anskaffelser.",
        date: "8. januar 2026",
        category: "Produktlansering",
        slug: "introducing-kofa-search",
        image: "/images/Blog/KOFAlaunch.png",
        content: `
            <p>Vi er svært glade for å kunngjøre den offisielle lanseringen av <strong>KOFA Søk</strong> — Reliable AIs første SaaS-produkt, og det vi mener er verdens mest avanserte søkeverktøy for avgjørelser fra <em>Klagenemnda for offentlige anskaffelser</em> (KOFA).</p>
            <p>Anskaffelsesretten er kompleks, omfattende og i stadig utvikling. Jurister og rådgivere som arbeider innen dette feltet bruker mye tid på å gå gjennom tusenvis av KOFA-avgjørelser for å finne relevante presedenser og rettspraksis. Tradisjonelle nøkkelordsbaserte søkeverktøy strekker ikke til — de overser begrepsmessig beslektede avgjørelser som ikke deler eksakt ordlyd, og returnerer altfor mye støy.</p>
            <p>KOFA Søk løser dette. Drevet av vår forskningsbaserte AI bruker verktøyet semantisk søk for å forstå <em>meningen</em> bak en forespørsel — ikke bare ordene. Det betyr at du kan beskrive en juridisk situasjon med egne ord og umiddelbart få frem de mest relevante KOFA-avgjørelsene, selv når den eksakte terminologien er ulik.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Bygget for juridiske fagfolk</h2>
            <p>KOFA Søk er designet fra bunnen av for advokater, juridiske rådgivere og anskaffelsesspesialister. Grensesnittet er enkelt og målrettet for oppgaven: å finne de riktige avgjørelsene raskt. Viktige funksjoner inkluderer:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Avansert semantisk søk i hele KOFA-databasen</li>
                <li>Umiddelbar tilgang til relevante avgjørelser og rettspraksis</li>
                <li>En strømlinjeformet arbeidsflyt som reduserer søketid betydelig</li>
            </ul>
            <p>Vi har validert verktøyet med juridiske fagfolk som jevnlig arbeider med anskaffelsesrett, og resultatene taler for seg: mindre tid på søk, mer tid til analyse.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Takk til Advokatfirmaet Haavind</h2>
            <p>Denne lanseringen hadde ikke vært mulig uten tilliten og den uvurderlige utviklingsstøtten fra <strong>Advokatfirmaet Haavind AS</strong>. Fra de tidligste pilotstadiene ga Haavinds team skarp juridisk ekspertise og tilbakemeldinger fra virkeligheten som formet produktet til det det er i dag. Deres vilje til å samarbeide med oss og teste teknologien i praksis har vært avgjørende.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Hva skjer videre</h2>
            <p>Lanseringen av KOFA Søk markerer en viktig milepæl for Reliable AI — vårt første kommersielle SaaS-tilbud, og et bevis på at forskningsbasert AI kan levere reell, målbar verdi i profesjonelle sammenhenger.</p>
            <p>Vi er spente på hva som kommer. Er du nysgjerrig på hvordan KOFA Søk kan effektivisere din arbeidshverdag med anskaffelsesrett? Vi hører gjerne fra deg. Ta kontakt for å lære mer eller be om tilgang.</p>
        `
    },
    {
        title: "Reliable AI på TechTorget 2026",
        excerpt: "Vi stilte med stand på TechTorget i Oslo – Norges ledende legaltech-arrangement. Med torgets høyeste banner og en ubeseiret sjakk-rekord, knyttet vi kontakt med jurister som er nysgjerrige på pålitelige AI-løsninger.",
        date: "28. januar 2026",
        category: "Arrangement",
        slug: "techtorget-2026",
        image: "/images/Blog/techtorget2.jpg",
        contentImage: "/images/Blog/techtorget1.jpg",
        content: `
            <p>Reliable stilte med stand på TechTorget – en arena hvor advokater og juridiske fagfolk oppdager moderne IT-løsninger for juridisk sektor. Arrangert av Advokatforeningen og Gyldendal Rettsdata, samlet arrangementet legaltech-initiativer fra hele Norge i Gyldendalhuset i Oslo.</p>
            <p>Vi møtte opp med torgets desidert høyeste banner (og muligens torgets høyeste karer). Det ble en fantastisk dag fylt med gode samtaler, nye bekjentskaper – og sjakk mot alle som turte å utfordre oss.</p>
            <p>Resultatet? Ubeseiret. ♟️</p>
            <p>Det er alltid inspirerende å møte folk som er nysgjerrige på hvordan AI kan brukes på en trygg og pålitelig måte. Mange besøkende var interessert i vårt arbeid med semantisk søk for juridiske dokumenter og vår tilnærming til pålitelig AI i profesjonelle sammenhenger.</p>
            <p>Tusen takk til alle som stakk innom standen vår for interessante samtaler, og takk til TechTorget for et herlig arrangement. Vi ser frem til samme tid neste år!</p>
        `
    },
    {
        title: "Besøk ved University of Liverpool",
        excerpt: "I august presenterte vi vår forskning på deduktiv kvalitativ analyse i stor skala på GenAI in Action-konferansen ved University of Liverpool. Vår tilnærming viser hvordan tekst-embeddings kan gjøre storskala kvalitativ forskning mer transparent, tolkbar og effektiv.",
        date: "28. august 2025",
        category: "Forskning",
        slug: "visit-university-liverpool",
        image: "/images/Blog/liverpool.jpg",
        content: `
            <p>Reliable AI presenterte på GenAI in Action-konferansen ved University of Liverpool i slutten av august. Presentasjonen fokuserte på vårt arbeid med deduktiv kvalitativ analyse i stor skala ved bruk av tekst-embeddings.</p>
            <p>Kjernekonseptet bak arbeidet vårt innebærer å utnytte kunstig intelligens på en annen måte enn typiske applikasjoner. I stedet for å generere tekst, bruker vi AI til å representere den. Ved å transformere ord, setninger og hele artikler til høydimensjonale vektorrom, gjør vi det mulig for forskere å identifisere mønstre der likhet i betydning tilsvarer romlig nærhet.</p>
            <p>Denne tilnærmingen skalerer kvalitativ forskning betydelig. Teknologien kan analysere store volumer av åpne svar fra spørreundersøkelser, juridiske dokumenter og litteratur med både presisjon og effektivitet.</p>
            <p>Mottakelsen var oppmuntrende. Vi knyttet kontakt med forskere og praktikere fra hele Europa som deler vår visjon om pålitelig og menneskesentrert AI i forskning. Opplevelsen forsterket vår forpliktelse til å utvikle tilgjengelige verktøy for kvalitativ analyse.</p>
            <p>Fremtidige utviklingsplaner inkluderer multimodale modeller og utvidede anvendelser innen juridisk forskning, utdanning og spørreundersøkelsesanalyse. Vi er takknemlige overfor University of Liverpool for å ha arrangert arrangementet – det var et viktig skritt fremover i å vise hvordan Reliable AI arbeider for å gjøre kvalitativ analyse smartere, raskere og mer pålitelig.</p>
        `
    },
    {
        title: "Reliable AI blir med i NORA.Startup",
        excerpt: "Reliable AI har blitt med i NORA.Startup! Vi ser frem til å knytte kontakt med Norges AI-miljø, dele innsikt og bygge samarbeid gjennom NORAs innovasjonsnettverk.",
        date: "30. mai 2025",
        category: "Bedriftsnyheter",
        slug: "reliable-ai-joins-nora-startup",
        image: "/images/Blog/nora.png",
        imageContain: true,
        content: `
            <p>Reliable AI har offisielt blitt med i NORA.Startup, innovasjonsnettverket til NORA – The Norwegian Artificial Intelligence Research Consortium.</p>
            <p>Dette medlemskapet gjør oss i stand til å styrke våre forbindelser i Norges økosystem for kunstig intelligens. Det gir muligheter til å tilegne seg nye perspektiver og etablere meningsfulle partnerskap blant forskere, oppstartsbedrifter og aktører i næringslivet.</p>
            <p>Vi ser frem til å knytte kontakt med Norges AI-miljø, dele innsikt og bygge samarbeid gjennom NORAs innovasjonsnettverk.</p>
        `
    },
    {
        title: "Pilotprosjekt med Haavind",
        excerpt: "Vi er glade for å kunngjøre at Reliable AI har inngått partnerskap med Haavind for å bygge et semantisk søkeverktøy for KOFA-saker. Piloten var en suksess, og Haavind bekreftet verktøyets potensial til å gjøre juridisk arbeid mer effektivt og presist.",
        date: "15. april 2025",
        category: "Casestudie",
        slug: "pilot-project-haavind",
        image: "/images/Blog/advokatfirmaethaavind.png",
        imageContain: true,
        content: `
            <p>Reliable AI har inngått partnerskap med advokatfirmaet Haavind for å utforske hvordan avanserte AI-teknologier kan støtte juridiske fagfolk som håndterer komplekse saker og store dokumentvolumer.</p>
            <p>Samarbeidet resulterte i en fullt fungerende prototype av et semantisk søkeverktøy for <em>Klagenemnda for offentlige anskaffelser</em> (KOFA)-databasen. KOFA-saker fungerer som viktige juridiske ressurser, men tradisjonelle nøkkelordsøk klarer ofte ikke å fange opp nyanserte sammenhenger på tvers av saker.</p>
            <p>Verktøyet benytter semantisk søketeknologi som går utover ordmatching for å forstå betydningen av spørringer og dokumenter. Dette gjør det mulig for juridiske fagfolk å oppdage relevante KOFA-avgjørelser selv når eksakt ordlyd ikke stemmer overens.</p>
            <p>Haavinds team testet systemet med suksess. Stian Hultin Oddbjørnsen fra Haavind uttalte:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "Reliable AI har imponert oss i Haavind, både når det gjelder teknologi og menneskelige ressurser. Vi håndterer komplekse saker og store dokumentvolumer. I denne sammenhengen har Reliable AIs teknologi potensial til å hjelpe oss å jobbe mer effektivt og nøyaktig fremover. Vi ser frem til fortsatt samarbeid."
            </blockquote>
            <p>Den vellykkede piloten har oppmuntret til fortsatt samarbeid mellom organisasjonene mens vi utforsker ytterligere AI-anvendelser innen juridisk sektor.</p>
        `
    },
    {
        title: "Reliable AI blir med i Microsoft for Startups Founders Hub",
        excerpt: "Vi er glade for å dele at Reliable AI er tatt opp i Microsoft for Startups Founders Hub! Dette gir oss tilgang til ressurser, teknisk veiledning og $5000 i Azure-kreditter for å hjelpe oss å skalere våre semantiske søke- og AI-drevne tekstanalyseverktøy.",
        date: "11. februar 2025",
        category: "Bedriftsnyheter",
        slug: "microsoft-founders-hub",
        image: "/images/Blog/foundershub.png",
        content: `
            <p>Reliable AI er tatt opp i Microsoft for Startups Founders Hub-programmet. Denne opptakelsen gir oss tilgang til ressurser, teknisk veiledning og opptil $5000 i Azure-kreditter.</p>
            <p>Vi planlegger å bruke disse ressursene til å utvide vårt arbeid med semantisk søk og AI-drevne tekstanalyseverktøy.</p>
            <p>Dette er en viktig milepæl for vår tidligfasereise, og vi er forpliktet til å utnytte Microsofts støtte maksimalt mens vi fortsetter å bygge pålitelige, menneskesentrerte AI-løsninger.</p>
        `
    },
]
