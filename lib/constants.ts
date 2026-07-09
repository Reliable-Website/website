export const CALENDLY_URL = "https://calendly.com/jonas-reliableai/demo"

// Presedens app login, per jurisdiction. Reached via the /access gate page, not linked directly from the header.
export const LOGIN_URLS: Record<string, string> = {
    en: "https://login.reliableai.no",
    no: "https://login.reliableai.no",
    da: "https://login.reliableai.dk",
    de: "https://vergaberecht.reliablelabs.ai",
}

// Falls back to the Norwegian login for the default (en) or any unmapped locale.
export function loginUrlFor(locale: string): string {
    return LOGIN_URLS[locale] ?? LOGIN_URLS.en
}
