# Revize architektury Next.js

Datum: 2026-10-07. Revidovaný commit: `2ac3e10`. Next.js 16.4.0, React 19.3.0, TypeScript 7.0.2.

## Závěr

Základ App Routeru a rozdělení na serverové CMS komponenty a klientské interakce jsou použitelné. Aplikace však není bez významných architektonických problémů. Nejprve je potřeba omezit veřejné serverové operace a e-mailový endpoint, potom opravit Apple integraci, načítání ikon a zpracování neexistujících stránek. Kompletní přepis aplikace není potřebný.

Níže je původní snapshot revize. Nálezy byly následně opraveny v pracovním stromu; nasazení ani konfigurace produkce zatím změněny nejsou.

## Stav po opravách

- Obecné Server Actions odstraněny: produkční build manifest má prázdné seznamy node/edge akcí. Kontakt je jeden validovaný browser POST se serverem určenými adresami.
- JWT se vytváří při každém uncached Apple načítání; chyby API se nevracejí jako úspěšné prázdné seznamy. Publikované verze a lokalizace, pagination a paralelní screenshots jsou zpracované ve sdílené server-only službě.
- Celé katalogy ikon nahrazeny explicitním registrem, Markdown v serverových kartách renderován serverově. Největší nový klientský JS chunk má přibližně 235 KB raw / 73 KB gzip, proti původnímu 10 MB chunku. Jde o srovnání build artefaktů, nikoliv celkové přenosové velikosti stránky.
- Na lokálním produkčním serveru všech šest CMS cest vrací 200 a správný canonical; neexistující cesta i doslovné procento vracejí 404 s noindex.
- Zpracování CMS chyb, sdílená memoization, cache tags/zero TTL, paralelní fetch, GitHub pagination a README chyby, přesné operation types, metadata, skutečný sitemap updatedAt, přístupnost a předrenderování/ISR jsou opravené.
- Kontaktní limiter má sdílenou atomickou Redis implementaci, ale vyžaduje produkční UPSTASH_REDIS_REST_URL/TOKEN. Read-only kontrola Vercel env metadata potvrdila, že obě proměnné v projektu chybějí; Upstash integrace účtu rovněž není připojená. Bez konfigurace vrací odesílání 503; tuto infrastrukturu ještě musí uživatel připojit.
- 21 mock testů prošlo a pokrývá email validation/quota/delivery failure, cache options, CMS error versus missing data a Apple status/pagination/JWT. Browser ověřil skutečná Apple data, klávesnicové otevření screenshotu a načtení README. Lint, typecheck a production build prošly. Reálný mail nebyl poslán.

## P1: opravit před dalšími optimalizacemi

### 1. Obecný HTTP helper je veřejná Server Action

Místo: `utils/api.ts:1,47-54,85`; klientské použití `components/cms/ContactForm.tsx:19,58`.

Soubor má direktivu `use server`. Aktuální produkční build skutečně registruje `fetchApi`, `get`, `post`, `put`, `patch` a `del` v server-reference manifestu pro catch-all stránku. Volající ovládá URL, metodu, hlavičky i tělo. Absolutní URL se předává přímo serverovému `fetch`, bez allowlistu. Vzniká veřejný serverový HTTP proxy a riziko SSRF; konkrétní dostupnost interních síťových cílů závisí na hostingu. Origin kontrola Server Actions nenahrazuje validaci argumentů.

Oprava: helper označit `import 'server-only'`, odstranit jej z klientských importů a vystavit pouze úzce definovanou akci pro odeslání kontaktního formuláře. Akce nemá přijímat cílovou URL ani libovolné HTTP parametry.

Zdroj: [bezpečnost Server Functions](https://nextjs.org/docs/app/api-reference/directives/use-server#security-considerations).

### 2. E-mailový endpoint umožňuje volit příjemce i odesílatele

Místo: `app/api/send-email/route.ts:57-68,78-128,143-150`.

Veřejný POST přijímá klientem zvolené `from`, `to`, `subject`, `headers` a `templateId` a předává je Resendu. Validace obsahu a spam kontrola běží jen pro kontaktní šablonu; potvrzovací šablonu lze zavolat samostatně. Odesílatel musí projít pravidly Resendu, ale příjemci nejsou serverem omezeni. Endpoint tak lze zneužít k odesílání e-mailů z ověřené domény na cizí adresy. Lokální rate limit tuto hranici nenahrazuje.

Oprava: klient posílá jen jméno, svůj e-mail, zprávu a honeypot. Server určuje vlastní cílovou adresu, ověřeného odesílatele, předmět a reply-to. Potvrzení odesílá server jako součást téhož validovaného kontaktu; neexistuje veřejná samostatná operace pro libovolné potvrzovací e-maily. Validovat skutečný runtime JSON, ne pouze TypeScript assertion. Chybný JSON nebo pole nesprávného typu nyní mohou skončit neošetřenou výjimkou.

### 3. Apple JWT vyprší v teplé instanci a chyba se maskuje jako prázdný obsah

Místo: `app/api/apple-app-store/route.ts:79-112,153-156,356-387`.

JWT se vytvoří jednou při importu modulu a má platnost 1200 sekund. Po 20 minutách stejná instance dál používá expirovaný token. `fetchApi` nekontroluje HTTP status; nižší funkce chytají chyby a vracejí prázdné seznamy. GET tak může odpovědět HTTP 200 s prázdným nebo neúplným seznamem aplikací, který další vrstva cachuje až hodinu.

Oprava: obnovovat token před expirací nebo jej vytvořit pro aktuální serverovou operaci. Kontrolovat HTTP status a rozlišovat skutečný prázdný seznam od selhání externí služby. Neoznačovat selhání jako úspěšnou prázdnou odpověď. Ověřit testem časový posun za expiraci a odpověď Apple 401.

### 4. Do prohlížeče se dostávají celé katalogy ikon

Místo: `components/Icon.tsx:4-9,35-45`; klientský import `components/cms/GitHubRepositories.client.tsx`.

Šest namespace importů se vybírá dynamicky podle CMS názvu. Produkční klientský chunk s ikonami má přibližně **10.03 MB nekomprimovaně / 3.31 MB gzip**. Je referencovaný klientským manifestem catch-all stránky. Jde o velikost konkrétního build artefaktu, nikoliv měření přenosu nebo Web Vitals produkce.

Oprava: vytvořit explicitní registr pouze používaných ikon s pojmenovanými importy, případně renderovat CMS ikony na serveru a předávat hotové elementy. Lazy loading celého katalogu pouze přesune jeho velkou velikost na pozdější okamžik.

Zdroj: [hranice serverových a klientských komponent](https://nextjs.org/docs/app/getting-started/server-and-client-components), [lazy loading](https://nextjs.org/docs/app/guides/lazy-loading).

## P2: spolehlivost, SEO a načítání dat

### 5. Neexistující CMS stránka je soft 404

Místo: `app/[[...slug]]/page.tsx:44-58`.

Stránka vrací vlastní JSX s textem Not Found, bez `notFound()`. Read-only kontrola produkční URL `/__architecture-audit-missing-page` vrátila HTTP **200**, obsah Not Found a žádný `noindex`. Canonical se přitom generuje i pro neexistující URL.

Oprava: použít `notFound()` a `not-found.tsx`; stejnou existenci stránky respektovat v metadatech. U streamované odpovědi může i frameworkové `notFound()` zachovat již odeslaný status 200, ale přidá `noindex`; proto samotný status není jediným akceptačním kritériem.

Zdroj: [notFound a streamované statusy](https://nextjs.org/docs/app/api-reference/functions/not-found).

### 6. Serverové komponenty volají vlastní veřejný API endpoint

Místo: `actions/appleAppStore/index.ts:12-15`, `utils/api.ts:53-54`.

Server Component načítá Apple data přes absolutní URL vlastního `/api/apple-app-store`. Přidává to HTTP cestu a závislost na `NEXT_PUBLIC_BASE_URL`. Preview nebo lokální aplikace mohou při produkční hodnotě proměnné zobrazovat data jiné deployment verze. Prerenderování se tím rovněž komplikuje.

Oprava: přesunout Apple načítání do sdílené `server-only` služby a volat ji přímo ze Server Components i případného veřejného GET handleru. DTO typy přesunout mimo `route.ts`.

Zdroj: [Next.js doporučuje přímý přístup ke zdroji dat ze Server Components](https://nextjs.org/docs/app/guides/backend-for-frontend#server-components).

### 7. Kontaktní formulář ztrácí kontext návštěvníka a není jedna serverová operace

Místo: `components/cms/ContactForm.tsx:58-95`, `utils/api.ts:67-85`, `utils/rateLimit.ts:8,88-108`.

Formulář postupně volá dvě Server Actions, které každá provedou další HTTP request do e-mailového endpointu. Původní IP, user-agent a referrer nejsou explicitně přenášeny. Rate limit a spam kontrola pak pracují s kontextem serverového requestu. Navíc jedna zpráva spotřebuje dvě z povolených tří žádostí. Limiter je v module-level Map, tedy jen pro jednu instanci a její životnost; více instancí nemá společnou kvótu.

Oprava: jedna serverová operace s kontextem skutečného příchozího požadavku, jedna kvóta na kontakt a sdílený atomický limiter nebo pravidlo poskytovatele hostingu. Vybrat jednu transportní cestu: specifická Server Action, nebo přímý POST z prohlížeče do specifického handleru. Selhání potvrzení nemá nutit opakovat již doručenou hlavní zprávu.

### 8. Nezávislé požadavky se zbytečně spouštějí postupně

Místo: `app/[[...slug]]/layout.tsx:40-41`, `components/cms/Statistics.tsx:29-32`, `components/cms/GitHubRepositories.tsx:24-25`, metadata `page.tsx:24-25`.

Nezávislé výsledky se awaitují jeden po druhém. Exportované funkce `preload` nemají v aplikaci žádné volání, takže deklarovaný paralelní preloading neběží.

Oprava: `Promise.all` pro nezávislé zdroje, případně skutečně spouštěný preload před blokující operací. Zachovat současné Suspense hranice pro jednotlivé CMS bloky.

### 9. Cache nemá společné místo a helper zahazuje cache tags

Místo: lokální `cache` wrappery v layoutu, SocialNetworks a CMS komponentách; `utils/api.ts:77-81,148-158`.

Samostatné React `cache` wrappery nad stejným CMS dotazem nesdílejí identitu memoizované funkce. Hygraph používá POST: explicitní `next.revalidate:60` poskytuje Data Cache, ale automatická request memoization `fetch` není totéž a vztahuje se na GET/HEAD. Cache miss tak není pokryt společnou deduplikací mezi metadaty a stránkou. HTTP helper navíc skládá buď `revalidate`, nebo `tags`; výchozí revalidate 3600 proto zahodí tag `apple-app-store`. Hodnota revalidate 0 se kvůli `||` a truthiness testům nezachová.

Oprava: společné memoizované read funkce v datové vrstvě, explicitní cache policy pro každý zdroj. Skládat `revalidate` a `tags` současně a rozlišovat 0 od undefined. Nemigrovat plošně na Cache Components pouze kvůli novosti API; aktuální revalidate model je podporovaný, jen musí být konzistentní.

Zdroj: [request memoization, Data Cache a preload](https://nextjs.org/docs/app/guides/caching-without-cache-components).

### 10. Chyba CMS se tváří jako chybějící stránka nebo chybějící obsah

Místo: `utils/hygraphQuery.ts:30-32,48-68`, `actions/hygraph/page.ts`, chybějící `error.tsx` a `global-error.tsx`.

Chybějící proměnná, síťová chyba a GraphQL chyba všechny vracejí null. Nelze odlišit neexistující stránku od výpadku CMS; výpadek tak vede k Not Found nebo prázdné navigaci. Loading fallback nezpracovává chyby.

Oprava: null vracet pouze při platné odpovědi bez záznamu. Selhání datového zdroje vracet jako explicitní error nebo vyhodit do error boundary. Přidat `error.tsx` pro segment a `global-error.tsx` pro kořenový layout, s možností opakování a bezpečným logováním.

Zdroj: [error handling](https://nextjs.org/docs/app/getting-started/error-handling).

### 11. GitHub integrace nezpracovává chyby ani úplný seznam

Místo: `actions/github/index.ts:42-54,83-96`, `components/cms/GitHubRepositories.client.tsx:38-48`.

Seznam nemá stránkování a řadí až lokálně po získání první stránky. Počty a výběr nejnovějších repozitářů proto nemusí odpovídat celému účtu. HTTP chyby se parsují jako úspěšná data. README 404/403 nebo síťová chyba může vyhodit výjimku při dekódování; klient ji nechytá a modal zůstane ve stavu načítání.

Oprava: kontrola statusu, pagination a řazení na API; explicitní cache pro veřejný seznam; README stav loading/success/not-found/error a retry. Oddělit serverovou autentizovanou integraci od klientské veřejné integrace. Současný browser build obsahuje Buffer polyfill; nenalezen důkaz úniku GITHUB_TOKEN do klienta.

### 12. Kontaktní formulář znovu načítá konfiguraci po hydrataci

Místo: `components/cms/ContactForm.tsx:30-32,43,98-104`.

Layout již načetl konfiguraci, ale formulář ji znovu žádá přes Server Action v efektu. Před dokončením je cílový e-mail prázdný a submit není touto podmínkou blokován.

Oprava: v doporučené serverové kontaktní operaci nechat cílovou adresu pouze na serveru. Do formuláře předat jen veřejné údaje potřebné k renderování a odstranit mount request.

### 13. Přístupnost: zakázaný zoom a klikací div

Místo: `app/[[...slug]]/layout.tsx:13`, `components/ImageWithPreview.tsx:23`.

`userScalable:false` omezuje zoom podle chování prohlížeče. Screenshot se otevírá klikacím divem bez nativního focusu a klávesnicové obsluhy.

Oprava: povolit zoom a použít nativní button s vhodným přístupným názvem.

## P3: další vhodné úpravy

- `app/[[...slug]]/page.tsx:8-18`: optional catch-all params mají být `slug?: string[]`, nikoliv string. Segmenty už Next dekóduje; další `decodeURIComponent` v `actions/hygraph/page.ts` může změnit platný slug nebo vyhodit URIError pro doslovné procento.
- `app/sitemap.tsx:13`: lastModified je čas generování, ne změny obsahu. Načíst skutečné updatedAt z CMS nebo údaj vynechat. Politiku `isHidden` definovat podle toho, zda znamená jen skrytí z navigace, nebo zákaz indexace.
- `generateMetadata` používá pouze title a canonical; SEO description již v CMS existuje, ale do HTML se nepředává. Doplnit description a vhodná sdílecí metadata.
- CMS catch-all je v build výstupu dynamický. Po odstranění HTTP self-fetch a sjednocení cache zvážit `generateStaticParams` + ISR pro známé veřejné stránky, aby je nemusel každý request znovu renderovat. Není to povinná podmínka správnosti App Routeru.
- `ProjectCard` přenáší MarkdownRenderer do klientského grafu. Oddělit serverové renderování textu a malé klientské modaly/tlačítka; nejprve ale řešit změřený problém ikon.
- Datové typy z celých GraphQL entit neodpovídají přesným projekcím ručně psaných dotazů. Používat generované operation types a předávat do klientských komponent minimální DTO.

## Co je již vhodně navržené

- Async Server Components pro CMS obsah, serverový ContentRenderer a Suspense okolo jednotlivých bloků.
- Klientské komponenty pro modaly, formulář, navigační stav a theme; serverové children pod klientským Providers se tím automaticky nestávají klientským kódem.
- Next Metadata API, robots, sitemap a společná canonical doména `https://www.janchalupa.dev`.
- `next/image` s omezenými remotePatterns, React Compiler a striktní TypeScript.
- Hygraph fetch má explicitní revalidaci; jde o podporovaný Data Cache model. Není nutné přidávat Redux, API gateway nebo další framework.

## Doporučené pořadí oprav a akceptace

1. Nahradit obecné veřejné HTTP Server Actions jednou specifickou kontaktní operací. Server určuje adresy; negativní testy musí prokázat, že nelze ovládat cílovou URL ani příjemce a chybný JSON vrací 400. Mail provider při testu mockovat.
2. Oddělit Apple serverovou službu, obnovovat JWT, kontrolovat statusy a nastavit cache bez ukládání úspěšných prázdných výsledků při selhání.
3. Omezit registr ikon; porovnat nový produkční klientský bundle se současným 10 MB chunkem.
4. Opravit notFound, chybové hranice, slugs a metadata; ověřit existující, neexistující a CMS-failure scénář.
5. Paralelizovat požadavky, sjednotit cache, opravit GitHub pagination a přístupnost. Potom zvážit ISR a další zmenšení klientských komponent.

## Ověření a jeho hranice

- `npm run lint`: Biome i TypeScript prošly.
- `npm run build`: produkční build prošel; CMS catch-all a oba API handlery jsou dynamické, sitemap a manifest mají revalidaci 1 minuta.
- Zkontrolovány build manifesty Server Actions a klientské chunky včetně gzip velikosti.
- Read-only produkční GET na unikátní neexistující cestu potvrdil soft 404.
- Nebyly odeslány e-maily, zkoušeny útoky proti produkci, měněny secrets ani konfigurace Vercelu. JWT expirace a chování spam služeb jsou doložené kódem, nikoliv čekáním na produkční selhání. Revize není kompletní penetrační test ani měření Web Vitals.
