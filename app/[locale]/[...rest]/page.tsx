import { notFound } from "next/navigation"

// Catch-all inside the locale segment so unmatched paths render the branded
// [locale]/not-found.tsx instead of the bare root 404.
export default function CatchAll() {
    notFound()
}
