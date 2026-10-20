---
title: Sikkerhet
updated: "2026-10-15"
---

# Sikkerhet

Sist oppdatert 15. oktober 2026

Reliable brukes av advokater i arbeid med klientsaker. Her beskriver vi hvordan vi beskytter dataene som ligger i tjenesten.

## Hva tjenesten inneholder

Søkeindeksene inneholder bare offentlige rettskilder. Kundenes data legges aldri inn i søkeindeksene og deles aldri mellom kunder. Dataene vi har om kundene, er brukerkontoer, innloggingslogger, bruksdata, søketekst og det brukerne selv lagrer i prosjekter.

## Søketekst

Hver bruker bestemmer selv om søkene deres lagres, og kan slå det av i tjenesten. Kunden kan også slå av lagringen for alle sine brukere. Lagret søketekst har ikke navn, e-postadresse eller bruker-ID knyttet til seg, slettes eller anonymiseres automatisk etter høyst 90 dager og brukes ikke til å trene generative KI-modeller.

Søket kjøres av modeller i vårt eget Azure-miljø. Søketekst sendes ikke til eksterne KI-leverandører.

## Drift og datalagring

Tjenesten driftes på Microsoft Azure, og innlogging håndteres av Microsoft Entra ID. Alle kundedata lagres og behandles innenfor EU/EØS. Vi har ingen egne servere, og kundedata lagres aldri på bærbare maskiner eller flyttbare medier.

## Kryptering

All trafikk er kryptert, både mellom brukeren og tjenesten og internt i driftsmiljøet. Data er kryptert ved lagring.

## Tilgangsstyring

Bare et lite antall navngitte personer hos oss har tilgang til kundedata, alle med flerfaktorautentisering og bare den tilgangen de trenger. Brukere ser bare egne prosjekter og prosjekter kolleger i samme virksomhet har delt med dem.

## Utvikling

Endringer i koden gjennomgås og testes før de tas i bruk, og en ny versjon kan rulles tilbake raskt. Kundedata holdes i produksjonsmiljøet og kopieres aldri til utviklingsmiljøer.

## Sikkerhetskopier og gjenoppretting

Data sikkerhetskopieres automatisk og kan gjenopprettes. Vi har skriftlige planer for kontinuitet, krisehåndtering og gjenoppretting, som gjennomgås jevnlig.

## Hendelser

Vi har en skriftlig rutine for håndtering av sikkerhetshendelser. Berørte kunder varsles uten ugrunnet opphold, og vi holder dem orientert til hendelsen er avsluttet.

## Gjennomganger og sertifiseringer

Vi gjennomfører jevnlige interne sikkerhetsgjennomganger av kode, driftsmiljø, tilganger og tredjepartskomponenter. Reliable AI har ingen egne sertifiseringer. Driftsplattformen vår, Microsoft Azure, er sertifisert etter blant annet ISO/IEC 27001 og SOC 2.

## Dokumentasjon

Til kunder og innkjøpsprosesser kan vi sende utfyllende sikkerhetsdokumentasjon og besvare leverandørskjemaer. Se også [databehandleravtalen](/no/juridisk/databehandleravtale) og [underleverandører](/no/juridisk/underleverandorer).

## Melde fra om sårbarheter

Har du funnet en mulig sårbarhet, ber vi deg kontakte oss på hei@reliableai.no. Vi svarer så raskt vi kan.
