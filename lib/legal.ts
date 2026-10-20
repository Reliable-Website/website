import fs from "node:fs"
import path from "node:path"
import { Marked } from "marked"

// The legal documents are Markdown files in content/legal/{en,no}, copied unchanged from the
// lawyers' folder. All six are on /legal, and each also has its own page at /legal/<slug>,
// with the same slugs in both languages. Each file has title and version or date in front matter.
// When a document changes: replace the file, and keep the previous version available.
export const LEGAL = {
    terms: { en: "terms.md", no: "kundevilkar.md" },
    privacy: { en: "privacy.md", no: "personvern.md" },
    "data-processing-agreement": { en: "data-processing-agreement.md", no: "databehandleravtale.md" },
    subprocessors: { en: "subprocessors.md", no: "underleverandorer.md" },
    security: { en: "security.md", no: "sikkerhet.md" },
    impressum: { en: "impressum.md", no: "impressum.md" },
} as const

export type LegalSlug = keyof typeof LEGAL
export const SLUGS = Object.keys(LEGAL) as LegalSlug[]
export const isLegalSlug = (s: string): s is LegalSlug => s in LEGAL

// The files link to each other as /en/legal/<slug> and /no/juridisk/<Norwegian file name>.
const NO_NAMES = Object.fromEntries(SLUGS.map((slug) => [LEGAL[slug].no.replace(/\.md$/, ""), slug]))
const LINK = /href="\/(?:en\/legal|no\/juridisk)\/([a-z-]+)"/g

/**
 * One document, ready to render. `level` is the HTML heading level for the document's
 * "##" sections (deeper ones follow); each heading keeps its Markdown depth in data-level
 * for styling. `link` turns a document slug into the href that links between documents use.
 */
export function readLegal(slug: LegalSlug, locale: string, level: number, link: (slug: LegalSlug) => string) {
    const lang = locale === "no" ? "no" : "en"
    const raw = fs.readFileSync(path.join(process.cwd(), "content/legal", lang, LEGAL[slug][lang]), "utf8")
    const [, front = "", body = raw] = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/) ?? []
    const meta: Record<string, string> = Object.fromEntries(
        front.split(/\r?\n/).map((line) => {
            const i = line.indexOf(":")
            return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")]
        }),
    )

    // The page shows the title itself, so the H1 is left out. In versioned or dated documents
    // the line after it ("Version 1.0 · Effective from …") is shown with the title.
    let text = body.trim().replace(/^# .*(\r?\n)+/, "")
    let sub: string | undefined
    if (meta.version || meta.updated) {
        const [line, rest] = text.split(/(?:\r?\n){2,}([\s\S]*)/)
        sub = line
        text = rest ?? ""
    }

    // A bullet that starts with a Norwegian date ("- 15. oktober 2026: …") would otherwise
    // be read as a numbered list starting at 15.
    text = text.replace(/^(\s*[-*+] +\d+)\. /gm, "$1\\. ")

    const shift = level - 2
    const md = new Marked({
        renderer: {
            heading({ tokens, depth }) {
                const h = Math.min(depth + shift, 6)
                return `<h${h} data-level="${depth}">${this.parser.parseInline(tokens)}</h${h}>\n`
            },
        },
    })
    const html = (md.parse(text, { async: false }) as string)
        .replace(LINK, (match, name: string) => {
            const target = isLegalSlug(name) ? name : NO_NAMES[name]
            return target ? `href="${link(target)}"` : match
        })
        // Wide tables scroll sideways on phones instead of stretching the page.
        .replaceAll("<table>", '<div class="legal-table"><table>')
        .replaceAll("</table>", "</table></div>")

    return { slug, title: meta.title, sub, html }
}

export type LegalDoc = ReturnType<typeof readLegal>
