export interface BlogPost {
    slug: string
    title: string
    date: string
    category: string
    excerpt: string
    content: string
    image?: string
    contentImage?: string
    imageContain?: boolean
    contentImageContain?: boolean
    featured?: boolean
}

export const blogPosts: BlogPost[] = [
    {
        title: "Reliable AI in the News: Universitas and Digital Norway",
        excerpt: "We're grateful to have been featured in two major Norwegian publications — Universitas, Norway's largest student newspaper, and Digital Norway — covering our journey from university research to award-winning AI technology.",
        date: "26 March 2026",
        category: "Press",
        slug: "reliable-ai-in-the-news",
        image: "/images/Blog/universitas1.webp",
        contentImage: "/images/Blog/universitas2.jpeg",
        contentImageContain: true,
        content: `
            <p>We're proud and humbled to have been featured in two prominent Norwegian publications recently, shining a light on Reliable AI's journey from a research project to an award-winning startup.</p>

            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Universitas: "Created an award-winning AI tool alongside their studies"</h2>
            <p>Norway's largest student newspaper, <strong>Universitas</strong>, published a feature article about how three UiO master's students — Halvor, Jonas, and Markus — built DANTE and founded Reliable AI while still completing their degrees. The article covers our origins as a summer project at the Center for Computing in Science Education (CCSE), our award at ECAI 2025, and our approach to non-generative AI.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "Our master's studies have become a hobby. The work with Reliable AI takes most of our time."
                <footer class="mt-2 text-sm not-italic">— Halvor Tyseng, Co-Founder</footer>
            </blockquote>
            <p>The piece also touches on the broader challenges facing Norwegian startups — from limited venture capital compared to our Nordic neighbors, to cuts in Innovasjon Norge's startup funding. Despite these headwinds, we're committed to building competitive Norwegian AI technology.</p>
            <p><a href="https://www.universitas.no/innovasjon-norge-kunstig-intelligens-reliable-ai/skapte-prisvinnende-ki-verktoy-ved-siden-av-studiene/398420" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Read the full Universitas article →</a></p>

            <div class="relative w-full rounded-lg overflow-hidden my-8"><img src="/images/Blog/digitalnorway.jpeg" alt="Reliable AI featured in Digital Norway" style="width:100%;height:auto;border-radius:0.5rem;" /></div>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Digital Norway: "They got AI to stop lying"</h2>
            <p><strong>Digital Norway</strong> published an in-depth feature about our core technical innovation — how we eliminate AI hallucinations by removing the generative layer of language models and working directly with mathematical representations of text. The result is deterministic, repeatable, and source-verifiable search.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "With our model you get the same answer every time. It can't hallucinate, because it doesn't generate anything."
                <footer class="mt-2 text-sm not-italic">— Markus Kreutzer, Co-Founder</footer>
            </blockquote>
            <p>The article highlights our partnership with law firm Haavind to develop KOFA Search, and how our semantic search technology saves legal professionals significant research time. It also frames an important question we often return to: the question shouldn't be whether AI is "perfect," but whether it improves workflows compared to current practices.</p>
            <p><a href="https://digitalnorway.com/aktuelt/de-har-fatt-ki-til-a-slutte-a-lyve" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Read the full Digital Norway article →</a></p>

            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">What this means for us</h2>
            <p>Being featured in these publications is a milestone for Reliable AI. It validates that research-based, non-generative AI is gaining recognition — not just in academic circles, but in the broader Norwegian tech and media landscape. We're grateful for the coverage and motivated to keep building reliable, trustworthy AI solutions.</p>
        `
    },
    {
        title: "Reliable AI wins Outstanding Demo Award at ECAI 2025",
        excerpt: "We are proud to announce that Reliable AI, in collaboration with the University of Oslo, has won the Outstanding Demo Award at ECAI 2025 in Bologna for our tool DANTE – a dependable and transparent approach to few-shot qualitative analysis.",
        date: "30 October 2025",
        category: "Award",
        slug: "ecai-2025-outstanding-demo-award",
        image: "/images/Blog/ecai.jpg",
        featured: true,
        content: `
            <p>We are proud to announce that Reliable AI, in collaboration with the University of Oslo, has won the Outstanding Demo Award at ECAI 2025 – Europe's oldest and most prestigious AI conference – held this year in Bologna.</p>
            <p>The award was given for our demonstration of DANTE, a dependable and transparent tool for few-shot qualitative analysis. DANTE enables NLP-based qualitative research without requiring extensive coding expertise, making advanced text analysis accessible to researchers and professionals across domains.</p>
            <p>The tool builds on our previous work with text embeddings to facilitate more productive and meaningful qualitative analysis. By representing text as high-dimensional vectors, DANTE allows users to identify patterns and relationships in large text corpora while maintaining transparency and interpretability.</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "This is enormously significant both for us as a startup and for the research community we come from. That Norwegian AI technology gains international recognition demonstrates we're at the forefront academically."
                <footer class="mt-2 text-sm not-italic">— Markus Kreutzer, Co-Founder</footer>
            </blockquote>
            <p>This recognition highlights the importance of collaboration between academic institutions and industry in advancing AI technology from research labs into practical professional applications.</p>
            <p>We're grateful to the ECAI organizing committee and the broader AI research community for this recognition. It motivates us to continue developing reliable, human-centered AI solutions that make qualitative research smarter, faster, and more accessible.</p>
        `
    },
    {
        title: "Introducing KOFA Search — Our First SaaS Product",
        excerpt: "We are proud to announce the launch of KOFA Search, our first SaaS product. Reliable AI now offers what we believe is the world's best search tool for KOFA decisions — making it faster and easier to find relevant case law in public procurement.",
        date: "8 January 2026",
        category: "Product Launch",
        slug: "introducing-kofa-search",
        image: "/images/Blog/KOFAlaunch.png",
        content: `
            <p>We are thrilled to announce the official launch of <strong>KOFA Search</strong> — Reliable AI's first SaaS product, and what we believe is the world's most capable search tool for decisions from the <em>Klagenemnda for offentlige anskaffelser</em> (KOFA), Norway's public procurement complaints board.</p>
            <p>Public procurement law is complex, voluminous, and constantly evolving. Legal professionals and advisors working in this field spend significant time sifting through thousands of KOFA decisions to find relevant precedents and case law. Traditional keyword-based search tools fall short — they miss conceptually related decisions that don't share exact wording, and return far too much noise.</p>
            <p>KOFA Search solves this. Powered by our research-based AI, the tool uses semantic search to understand the meaning behind a query — not just the words. This means you can describe a legal situation in plain language and immediately surface the most relevant KOFA decisions, even when exact terminology differs.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Built for legal professionals</h2>
            <p>KOFA Search is designed from the ground up for lawyers, legal advisors, and public procurement specialists. The interface is clean and purpose-built for the task at hand: finding the right decisions quickly. Key features include:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li>Advanced semantic search across the full KOFA database</li>
                <li>Instant access to relevant decisions and legal precedents</li>
                <li>A streamlined workflow that reduces research time significantly</li>
            </ul>
            <p>We've validated the tool with legal professionals who regularly work with public procurement law, and the results speak for themselves: less time searching, more time analyzing.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">Thank you to Advokatfirmaet Haavind</h2>
            <p>This launch would not have been possible without the trust and invaluable development support from <strong>Advokatfirmaet Haavind AS</strong>. From the earliest pilot stages, Haavind's team provided sharp legal expertise and real-world feedback that shaped the product into what it is today. Their willingness to partner with us and test the technology in practice has been essential.</p>
            <h2 class="font-heading text-2xl font-bold mt-10 mb-4">What's next</h2>
            <p>The launch of KOFA Search marks an important milestone for Reliable AI — our first commercial SaaS offering, and a proof of concept for how research-based AI can deliver real, measurable value in professional settings.</p>
            <p>We're excited about what comes next. If you're curious about how KOFA Search can streamline your work with public procurement law, we'd love to hear from you. Reach out to learn more or request access.</p>
        `
    },
    {
        title: "Reliable AI at TechTorget 2026",
        excerpt: "We had a stand at TechTorget in Oslo – Norway's leading legaltech event. With the tallest banner at the venue and an undefeated chess record, we connected with legal professionals curious about reliable AI solutions.",
        date: "28 January 2026",
        category: "Event",
        slug: "techtorget-2026",
        image: "/images/Blog/techtorget2.jpg",
        contentImage: "/images/Blog/techtorget1.jpg",
        content: `
            <p>Reliable AI had a stand at TechTorget – an arena where lawyers and legal professionals discover modern IT solutions for the legal sector. Organized by Advokatforeningen (The Norwegian Bar Association) and Gyldendal Rettsdata, the event gathered legaltech initiatives from across Norway at Gyldendalhuset in Oslo.</p>
            <p>We arrived with what was arguably the tallest banner at the venue (and possibly the tallest team members as well). The day was filled with great conversations, new connections – and chess matches against anyone brave enough to challenge us.</p>
            <p>The result? Undefeated. ♟️</p>
            <p>It's always inspiring to meet people who are curious about how AI can be used in a safe and reliable way. Many visitors were interested in our work on semantic search for legal documents and our approach to trustworthy AI in professional contexts.</p>
            <p>A big thank you to everyone who stopped by our stand for interesting conversations, and thanks to TechTorget for organizing a fantastic event. We look forward to the same time next year!</p>
        `
    },
    {
        title: "Visit at the University of Liverpool",
        excerpt: "In August, we presented our research on deductive qualitative analysis at scale at the GenAI in Action conference at the University of Liverpool. Our approach shows how text embeddings can make large-scale qualitative research more transparent, interpretable, and efficient.",
        date: "28 August 2025",
        category: "Research",
        slug: "visit-university-liverpool",
        image: "/images/Blog/liverpool.jpg",
        content: `
            <p>Reliable AI presented at the GenAI in Action conference hosted at the University of Liverpool at the end of August. The presentation centered on our work with deductive qualitative analysis at scale using text embeddings.</p>
            <p>The core concept behind our work involves leveraging artificial intelligence differently than typical applications. Rather than generating text, we use AI to represent it. By transforming words, sentences, and entire articles into high-dimensional vector spaces, we enable researchers to identify patterns where similarity in meaning corresponds to spatial closeness.</p>
            <p>This approach scales qualitative research significantly. The technology can analyze large volumes of open-ended survey responses, legal documents, and literature with both precision and efficiency.</p>
            <p>The reception proved encouraging. We connected with researchers and practitioners from across Europe who share our vision for trustworthy and human-centered AI in research. The experience reinforced our commitment to developing accessible qualitative analysis tools.</p>
            <p>Future development plans include multimodal models and expanded applications across legal research, education, and survey analysis domains. We're grateful to the University of Liverpool for hosting the event—it was a great step forward in showcasing how Reliable AI is working to make qualitative analysis smarter, faster, and more reliable.</p>
        `
    },
    {
        title: "Reliable AI joins NORA.Startup",
        excerpt: "Reliable AI has joined NORA.Startup! We're looking forward to connecting with Norway's AI community, sharing insights, and building collaborations through NORA's innovation network.",
        date: "30 May 2025",
        category: "Company News",
        slug: "reliable-ai-joins-nora-startup",
        image: "/images/Blog/nora.png",
        imageContain: true,
        content: `
            <p>Reliable AI has officially joined NORA.Startup, the innovation network of NORA - The Norwegian Artificial Intelligence Research Consortium.</p>
            <p>This membership enables us to strengthen our connections within Norway's artificial intelligence ecosystem. The move provides opportunities to acquire new perspectives and establish meaningful partnerships among researchers, startups, and industry stakeholders.</p>
            <p>We're looking forward to connecting with Norway's AI community, sharing insights, and building collaborations through NORA's innovation network.</p>
        `
    },
    {
        title: "Pilot project with Haavind",
        excerpt: "We are happy to announce that Reliable AI has partnered with Haavind to build a semantic search tool for KOFA cases. The pilot was a success, with Haavind confirming the tool's potential to make legal work more efficient and precise.",
        date: "15 April 2025",
        category: "Case Study",
        slug: "pilot-project-haavind",
        image: "/images/Blog/advokatfirmaethaavind.png",
        imageContain: true,
        content: `
            <p>Reliable AI has partnered with the law firm Haavind to explore how advanced AI technologies can support legal professionals handling complex cases and large document volumes.</p>
            <p>The collaboration produced a fully functioning prototype of a semantic search tool for the <em>Klagenemnda for offentlige anskaffelser</em> (KOFA) database. KOFA cases serve as crucial legal resources, but traditional keyword searches often fail to capture nuanced connections across cases.</p>
            <p>The tool employs semantic search technology that goes beyond word matching to understand query and document meaning. This enables legal professionals to discover relevant KOFA decisions even when exact wording doesn't align.</p>
            <p>Haavind's team tested the system successfully. Stian Hultin Oddbjørnsen from Haavind stated:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                "Reliable AI has impressed us at Haavind, both in terms of technology and human resources. We handle complex cases and large volumes of documents. In this context, Reliable AI's technology has the potential to help us work more efficiently and accurately going forward. We look forward to continued collaboration."
            </blockquote>
            <p>The successful pilot has encouraged continued collaboration between the organizations as we explore additional AI applications within the legal sector.</p>
        `
    },
    {
        title: "Reliable AI joins Microsoft for Startups Founders Hub",
        excerpt: "We're excited to share that Reliable AI has been accepted into the Microsoft for Startups Founders Hub! This gives us access to resources, technical guidance, and $5,000 in Azure credits to help scale our semantic search and AI-powered text analysis tools.",
        date: "11 February 2025",
        category: "Company News",
        slug: "microsoft-founders-hub",
        image: "/images/Blog/foundershub.png",
        content: `
            <p>Reliable AI has been accepted into the Microsoft for Startups Founders Hub program. This acceptance grants us access to resources, technical guidance, and up to $5,000 in Azure credits.</p>
            <p>We plan to use these resources to expand our efforts in semantic search and AI-powered text analysis tools development.</p>
            <p>This is an important milestone for our early-stage journey, and we're committed to making the most of Microsoft's support as we continue building reliable, human-centered AI solutions.</p>
        `
    },
]
