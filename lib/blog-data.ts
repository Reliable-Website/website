export interface BlogPost {
    slug: string
    title: string
    date: string
    category: string
    excerpt: string
    content: string
    image?: string
    imageContain?: boolean
    featured?: boolean
}

export const blogPosts: BlogPost[] = [
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
