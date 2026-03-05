export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'list' | 'callout';
  content?: string;
  items?: string[];
  level?: 2 | 3;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'build-studio' | 'cto' | 'specialiststod' | 'strategi' | 'ai';
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorId: string; // maps to Author.id in authors.ts
  content: ArticleSection[];
  faqItems?: Array<{ question: string; answer: string }>;
  relatedSlugs?: string[];
  relatedService?: {
    title: string;
    href: string;
    description: string;
  };
}

export const articles: Article[] = [
  {
    id: 'valja-ratt-teknikpartner',
    title: 'Så väljer du rätt teknikpartner för ditt projekt',
    slug: 'valja-ratt-teknikpartner',
    description: 'En guide för att hitta rätt teknikpartner. Lär dig vad du bör leta efter, vilka frågor du ska ställa och vilka röda flaggor du bör undvika.',
    category: 'strategi',
    categoryLabel: 'Strategi',
    readTime: '6 min',
    publishedAt: '2026-02-15',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Att välja rätt teknikpartner är en av de viktigaste besluten för ditt företags digitala framtid. En dålig partner kan bli dyrt både ekonomiskt och tidsmässigt, medan en bra partner accelererar din tillväxt och bygger ett hållbart system. Men hur vet du vem du ska välja bland alla alternativ?'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad bör du leta efter hos en teknikpartner?'
      },
      {
        type: 'paragraph',
        content: 'En bra teknikpartner kombinerar teknisk excellens med affärsförståelse. Det räcker inte att de kan skriva kod — de måste förstå ditt företag och dina användare. Letar du efter en partner som kan vägleda dig genom designval, arkitektur och teknikstrategi eller bara en som slösa kod baserad på dina specifikationer?'
      },
      {
        type: 'list',
        items: [
          'Erfarenhet från liknande projekt och industrier',
          'Stark portfolio med case studies och referenser',
          'Transparens i process och kommunikation',
          'Fokus på quality assurance och best practices',
          'Förmåga att förklara komplexa koncept enkelt',
          'Vilja att investera i din långsiktiga framgång'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Röda flaggor att undvika'
      },
      {
        type: 'list',
        items: [
          'Partner som lovar allt på kort tid utan att förstå krav',
          'Dålig dokumentation eller bristande kodstandard',
          'Minimal kommunikation eller opersonlig kontakt',
          'Fokus enbart på pris istället för värde',
          'Inga referenser eller öppet portfolioarbete',
          'Ovillighet att diskutera tekniska beslut eller trade-offs'
        ]
      },
      {
        type: 'callout',
        content: 'Den billigaste partnern är sällan den bästa. Fokusera på värde per peso istället för pris. En väl genomförd lösning spar dig tiden och pengar långsiktigt.'
      }
    ],
    faqItems: [
      {
        question: 'Hur lång tid tar det att hitta rätt partner?',
        answer: 'Det beror på hur tydlig din vision är. Med en väl definierad kravspecifikation kan du fatta beslut på 2-3 veckor. Vi rekommenderar att köra ett Discovery-möte eller prototyp-fas för att testa samarbetet innan full engagement.'
      },
      {
        question: 'Vad är skillnaden mellan agency och freelancer?',
        answer: 'Agencies erbjuder ofta större team, stabilitet och processer. Freelancers kan vara flexibla och kostnadseffektiva men kan sakna resurs under stress. För större projekt är en etablerad partner ofta säkrare.'
      },
      {
        question: 'Bör jag välja en lokal partner eller kan det vara remote?',
        answer: 'Det spelar mindre roll idag. Viktigare är tidszoner som passar och att de kan möta dig för viktiga milestone-möten. Många världsklasspartner jobbar helt remote.'
      },
      {
        question: 'Hur kontrollerar jag att de håller rätt kvalitet?',
        answer: 'Ha tydliga SLA:er, regelbundna reviews, och krav på dokumentation och tester. En bra partner bör kunna visa sitt arbetsprocess och vara öppen för external code reviews.'
      }
    ],
    relatedSlugs: ['blueprint-metoden', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Build Studio',
      href: '/services/build-studio',
      description: 'Vi hjälper dig att bygga nästa generation av dina digitala produkter med innovation och excellens.'
    }
  },
  {
    id: 'blueprint-metoden',
    title: 'Blueprint-metoden: Se resultat innan du investerar',
    slug: 'blueprint-metoden',
    description: 'Lär dig om Axuvos Blueprint-metod — ett riskfritt sätt att validera din idé innan full utveckling. Få ett arbetsande prototyp på 48 timmar.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '5 min',
    publishedAt: '2026-02-22',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Många företag sitter fast mellan två ställen: antingen satsar de på en stor utvecklingsinvestering utan att veta om idén verkligen fungerar, eller så skjuter de upp sitt projekt för att de är osäkra. Blueprint-metoden löser detta dilemma.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad är Blueprint-metoden?'
      },
      {
        type: 'paragraph',
        content: 'Blueprint är ett strukturerat 48-timmarsprojekt där vi tillsammans med dig skapar ett funktionell prototyp av din kärnas idé. Det är inte en mock-up eller wireframe — det är kod som fungerar och som du kan testa med riktiga användare.'
      },
      {
        type: 'list',
        items: [
          'Kickoff möte för att förstå vision och krav (2 timmar)',
          'Snabb arkitektur och designfas (4 timmar)',
          'Fokuserad utveckling av kärnfunktionalitet (24 timmar)',
          'Testing och förfining (16 timmar)',
          'Demo och feedback session (2 timmar)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Varför är Blueprint värdefullt?'
      },
      {
        type: 'paragraph',
        content: 'En prototyp ger dig data istället för gissningar. Du kan visa det för investerare, testanvändare eller styrelsen och få verklig feedback. Många idéer som verkat bra på papperet behöver justas när de möter verkligheten.'
      },
      {
        type: 'callout',
        content: 'Blueprint kostar en fraktion av en fullskalig utveckling men sparar dig möjligen många gånger detta belopp genom att validera eller kasta ut felaktiga riktningar tidigt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad händer efter Blueprint?'
      },
      {
        type: 'paragraph',
        content: 'Efter prototypen kan du ta ett informerat beslut. Välj att gå vidare till fullskalig Build Studio-utveckling, iterera och förbättra prototypen, eller släppa projektet och spara resurser. Du äger all kod och kan även ta den till en annan partner om du vill.'
      }
    ],
    faqItems: [
      {
        question: 'Kan jag använda prototypen som grund för produktionen?',
        answer: 'Koden från Blueprint är arkitekturerad för snabbhet, inte production. Vi rekommenderar att bygga om den för skalning, säkerhet och långsiktig maintainability. Men du har en arbetande grund att bygga på.'
      },
      {
        question: 'Vad om vi behöver mer än 48 timmar?',
        answer: 'Vi fokuserar på kärnidén på 48 timmar. För mer komplexa feature kan vi göra extended Blueprint-moduler eller övergå till ett fullskaligt Build Studio-projekt.'
      },
      {
        question: 'Ingår design och UI i Blueprint?',
        answer: 'Ja, vi skapar ett presentabelt gränssnitt. Det blir inte pixel-perfect production design, men det är funktionellt och visuellt tilltalande för presentation.'
      },
      {
        question: 'Hur mycket måste jag ha definierat innan Blueprint startar?',
        answer: 'Du behöver huvudidén och kärnfunktionaliteten. Vi hjälper dig att priortera vad som ska in på 48 timmar. En väl förberedd Discovery-call gör Blueprint mycket effektivare.'
      }
    ],
    relatedSlugs: ['valja-ratt-teknikpartner', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Blueprint-metoden',
      href: '/services/blueprint',
      description: 'Validera din idé med en arbetsande prototyp på 48 timmar innan du investerar i fullskalig utveckling.'
    }
  },
  {
    id: '5-tecken-du-behover-cto',
    title: '5 tecken på att du behöver en inhyrd CTO',
    slug: '5-tecken-du-behover-cto',
    description: 'Behöver du CTO-support? Se 5 konkreta tecken som tyder på att du skulle gynnas av en fraktionell CTO för att vägleda din teknikutveckling.',
    category: 'cto',
    categoryLabel: 'CTO as a Service',
    readTime: '5 min',
    publishedAt: '2026-03-01',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'En CTO är långt mer än en teknisk chef. En god CTO förhindrar dyrbar teknikskuldackumulering, alignment mellan affärs- och teknikstrategi, och bygger hållbara system från början. Men behöver du en? Här är fem tecken som tyder på att ja.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken 1: Du bygger utan långsiktig arkitektur'
      },
      {
        type: 'paragraph',
        content: 'Om ditt tech-team bygger features utan en övergreipande vision för systemarkitektur, växer den tekniska skulden snabbt. En CTO definierar teknikstrategin, fattar arkitekturbeslut och säkerställer att varje projekt förts dit.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken 2: Du har ingen som kan hälla affärs- och teknikstrategi'
      },
      {
        type: 'paragraph',
        content: 'Det är enkelt att vilja det senaste ramverket eller dra hela systemet för nya features. Men en CTO frågar: Behövs detta för affärsväxten? Vad är ROI? En bra CTO är en affärsperson först, tekniker för det andra.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken 3: Du investerar mycket tid på problem som kunde vara förebyggda'
      },
      {
        type: 'paragraph',
        content: 'Produktionsfel, säkerhetsproblem, performance-issues — många kan förebyggas med rätt processerna och best practices. En CTO implementerar dessa innan de blir problem.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken 4: Du har svårt att rekrytera och behålla tech-talang'
      },
      {
        type: 'paragraph',
        content: 'En svag teknikkultur eller dålig kodstandard driver bort duktiga utvecklare. En CTO förbättrar arbetsmiljön, bygger bättre team-dynamik och skapar en kultur där utvecklare vill stanna.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken 5: Du är osäker på teknikval för nästa steg'
      },
      {
        type: 'paragraph',
        content: 'Ska ni migrera till molnet? Adoptera AI? Ändra databas? En erfaren CTO kan säga: detta är rätt väg för er, baserat på er affärs- och tekniksammanhanget. Det sparar dyra misstag.'
      },
      {
        type: 'callout',
        content: 'Du behöver inte en fullständig CTO på plats. En fraktionell CTO kan arbeta 10-20 timmar per vecka och göra enorm skillnad.'
      }
    ],
    faqItems: [
      {
        question: 'Vad är skillnaden mellan en CTO och en Tech Lead?',
        answer: 'En Tech Lead leder ett team av utvecklare och förliter på kodstandarder. En CTO definierar den tekniska visionen för hela organisationen, including affärsalignment, budgeting och långsiktig strategi.'
      },
      {
        question: 'Kan jag ha en fraktionell CTO istället för heltid?',
        answer: 'Absolutt. För många SME är en fraktionell CTO (10-20h/vecka) perfekt. Du får erfarenheten utan kostnaden för en heltidsanställd, och det är ofta hur CTO as a Service fungerar.'
      },
      {
        question: 'Vad är risken med att inte ha CTO-support?',
        answer: 'Utan CTO-vägledning växer teknikskuldväxer snabbt, arkitektur-beslut görs slumpartat, och affärs-teknisk alignering saknas. Det kan hämma tillväxt och göra produkten svår att skala.'
      },
      {
        question: 'Hur länge behöver jag en CTO?',
        answer: 'Det beror på ditt tillväxtscenario. Många SME behöver det för 1-3 år medan de bygger stabil infrastruktur. Vissa större företag har en permanent CTO, andra gör det fraktioniert bara för periodic strategihjälp.'
      }
    ],
    relatedSlugs: ['digital-transformation-smf', 'teknisk-skuld'],
    relatedService: {
      title: 'CTO as a Service',
      href: '/services/cto-service',
      description: 'En fraktionell CTO som vägleder din teknikstrategi, arkitektur och långsiktiga tillväxt utan kostnaden för heltidsanställd.'
    }
  },
  {
    id: 'secure-by-design',
    title: 'Varför Secure by Design inte är ett tillval',
    slug: 'secure-by-design',
    description: 'Säkerhet måste byggas in från dag ett, inte lappas på senare. Lär dig varför Secure by Design är kritiskt för dina system och affär.',
    category: 'strategi',
    categoryLabel: 'Strategi',
    readTime: '6 min',
    publishedAt: '2026-02-28',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'En klassisk felaktighet är att säkerhet är något du lägger till efter att systemet är byggt. Det är som att bygga ett hus utan dörrlås och sedan försöka lägga till säkerhet i efterhand. Secure by Design är inte valfritt — det är en grundsten.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad är Secure by Design?'
      },
      {
        type: 'paragraph',
        content: 'Secure by Design betyder att säkerhet är en del av arkitekturen från första raden kod, inte ett feature som läggs till senare. Det ingår i how dina API:er designas, hur dina data lagras, hur autentisering fungerar, och hur dina användarnas information skyddas.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Varför det är kritiskt'
      },
      {
        type: 'list',
        items: [
          'Det är exponentiellt dyrare att åtgärda säkerhetsproblem i production',
          'En breach kostar inte bara pengar utan även ditt förtroende och rykte',
          'Regler som GDPR kräver att säkerhet är inbyggd',
          'Användare idag förväntar sig att deras data är säker',
          'Det tar 10x längre att säkerhetshärda en redan byggd arkitektur'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Praktiska exempel på Secure by Design'
      },
      {
        type: 'paragraph',
        content: 'Istället för att lagra lösenord, använder du hashing och salting från dag ett. Istället för att säga "vi krypterar datan senare", planerar du för kryptering i villorestationen. Istället för öppen API:er, designar du authentication och authorization från start.'
      },
      {
        type: 'callout',
        content: 'En säkerhetsbreach kan kosta din verksamhet miljoner i både direkt skada, juridiska kostnader och förlorat förtroende. Secure by Design är en affärsinvestering, inte en teknikissue.'
      }
    ],
    faqItems: [
      {
        question: 'Gör Secure by Design mitt projekt långsammare?',
        answer: 'Initialt kan det kännas långsammare att implementera säkerhet från start. Men långsiktigt sparar du tid och pengar. En breach och subsequent fixes kostar mycket mer än att göra det rätt från början.'
      },
      {
        question: 'Vad är de viktigaste säkerhetstänk vi ska ha från start?',
        answer: 'Authentication (vem är du?), Authorization (vad får du göra?), Data encryption, Secure APIs, Logging och monitoring. En bra partner hjälper dig implementera dessa från dag ett.'
      },
      {
        question: 'Måste vi följa specifika standarder?',
        answer: 'Det beror på din industri. GDPR är lagligt för EU. Healthcare har HIPAA, Finance har PCI DSS. En CTO eller tech partner kan säga vad som gäller för dig.'
      },
      {
        question: 'Kan vi migrera ett osäkert system till säkert?',
        answer: 'Ja, men det är dyrare och mer riskfyllt än att bygga rätt från start. Många systemeissues hittas inte förrän efter migration. Det är ofta bättre att bygga nytt med Secure by Design från start.'
      }
    ],
    relatedSlugs: ['valja-ratt-teknikpartner', 'teknisk-skuld'],
    relatedService: {
      title: 'Build Studio',
      href: '/services/build-studio',
      description: 'Vi bygger säkra, skalerbara system med Secure by Design från dag ett.'
    }
  },
  {
    id: 'fran-excel-till-eget-system',
    title: 'Från Excel till eget system — när är det dags?',
    slug: 'fran-excel-till-eget-system',
    description: 'Excel är bra för småskaligt, men när växer din verksamhet ur det? Lär dig när det är dags att investera i ett eget, anpassat system.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '5 min',
    publishedAt: '2026-02-20',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Excel är en underbar verktyg för små datasätt och enkla workflows. Men när du växer börjar det visa sina gränser. Dupliceringsrisker, versionskonfliker, begränsad automation och säkerhetsproblem växer. Hur vet du när det är dags att bygga ett eget system?'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tecken på att du är redo att migrera'
      },
      {
        type: 'list',
        items: [
          'Du spenderar mer än 10 timmar per vecka på manuell data-hantering',
          'Du har flera versioner av samma data — Excel-filer skickade via mail',
          'Dina workflows är för komplexad för Excel-formler',
          'Du behöver real-time data och collaboration',
          'Säkerheten är ett problem — vem får se vilken data?',
          'Felhantering är svårt att spåra och åtgärda'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad tjänar du på att bygga ett system?'
      },
      {
        type: 'paragraph',
        content: 'Med ett anpassat system kan du automatisera repetitiva tasks, säkerställa data-integritet, få real-time insights och skala utan att behöva mer personal. Det sparar tid, minskar fel och möjliggör tillväxt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Hur gör du övergången?'
      },
      {
        type: 'paragraph',
        content: 'Många börjar med att katalogisera vad de gör i Excel — vilken data, vilka workflows, vilka användare. Sedan kan du göra en Blueprint-prototyp för att se hur ett system för detta skulle fungera. Migrera sen data och implementera gradvis.'
      },
      {
        type: 'callout',
        content: 'Migrera från Excel till ett system är ofta snabbare och billigare än många tror. Med rätt partner kan du få ett fungerande system på några veckor, inte månader.'
      }
    ],
    faqItems: [
      {
        question: 'Vad kostar det att bygga ett Excel-ersättningssystem?',
        answer: 'Det varierar mycket beroende på komplexitet, men enkla system kostar ofta 20k-50k SEK. Använd Blueprint-metoden för att få en prototyp och kostnad-estimate innan full utveckling.'
      },
      {
        question: 'Kan vi behålla Excel parallellt när vi bygger systemet?',
        answer: 'Ja, det är ofta smart. Kör båda parallellt medan du testar systemet, verifiera att allt fungerar, och migrera sen. Det minskar risken för dataiförlust eller process-avbrott.'
      },
      {
        question: 'Vad händer med vår befintliga Excel-data?',
        answer: 'Vi migrerar den till det nya systemet. Det kräver ofta lite datarengöring (duplikat, inkonsistenser) men det är en engångsuppgift som är väl värd det för långsiktig data-kvalitet.'
      },
      {
        question: 'Hur lång tid tar migrationen?',
        answer: 'För enkla system 1-2 veckor. För komplexa med många tabeller och relationer kan det ta 1-2 månader. Det beror också på hur ren din nuvarande data är.'
      }
    ],
    relatedSlugs: ['blueprint-metoden', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Idékatalog',
      href: '/ide-katalog',
      description: 'Utforska vanliga system-idéer som kan ersätta dina Excel-processer och automatisera din verksamhet.'
    }
  },
  {
    id: 'vad-kostar-det-att-bygga-app',
    title: 'Vad kostar det att bygga en app 2026?',
    slug: 'vad-kostar-det-att-bygga-app',
    description: 'Prisguide för app-utveckling 2026. Se vad som påverkar kostnaden, vilka dolda kostnader du måste planera för och hur du budgeterar rätt.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '7 min',
    publishedAt: '2026-03-02',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: '"Vad kostar det att bygga en app?" är som "Vad kostar en bil?" — det beror. Men vi kan ge dig en realistisk guide baserat på 2026-priser och vad som påverkar kostnaden.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Prisgränser för olika komplexitetsgrad'
      },
      {
        type: 'list',
        items: [
          'MVP (Minimal Viable Product): 50k-150k SEK — enkel app med kärnfeatures',
          'Medel komplexitet: 150k-500k SEK — flera features, autentisering, databaser',
          'Komplex app: 500k+ SEK — avancerad logik, integrationer, high-performance krav'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad påverkar kostnaden?'
      },
      {
        type: 'paragraph',
        content: 'Några faktorer kan multiplicera kostnaden flera gånger. Design-krav, integrations-behov, performance-krav, och säkerhetsstandarder spelar stor roll. En enkel CRUD-app kostar helt annorlunda än en real-time collaboration-tool.'
      },
      {
        type: 'list',
        items: [
          'Design-komplexitet — custom design vs template-baserad',
          'Data-integrations — hur många tredjepartstjänster behöver kopplas?',
          'Skalabilitet — behöver den hantera miljontals användare?',
          'Säkerhetskrav — vilka standarder måste följas?',
          'Plattformar — web only, iOS, Android, eller alla tre?'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Dolda kostnader att planera för'
      },
      {
        type: 'paragraph',
        content: 'Utveckling är bara början. Efter lansering behöver du maintenance, hosting, uppdateringar och support. Budgetera för 15-20% av utvecklingskostnaden per år för ongoing costs.'
      },
      {
        type: 'callout',
        content: 'Använd Blueprint-metoden för att få en aktuell kostnad-estimate baserat på din specifika idé. Det är billigare än att gissa och mycket mer exakt än generella riktlinjer.'
      }
    ],
    faqItems: [
      {
        question: 'Varför skiljer sig priserna så mycket mellan partners?',
        answer: 'Det beror på erfarenhet, geografisk location, och vilken kvalitet de levererar. En senior developer i Stockholm kostar mer än en junior i Östeuropa. Du betalar för erfarenhet och quality assurance.'
      },
      {
        question: 'Är det billigare att använda no-code tools?',
        answer: 'No-code kan vara snabbt för enkla saker, men blir snabbt begränsande och dyrt på lång sikt. För de flesta affärer lönar det sig att bygga rätt från start med kod.'
      },
      {
        question: 'Kan kostnaden minska om jag är flexibel på timeline?',
        answer: 'Ja! En längre timeline gör det ofta möjligt att optimera budget. Vi kan prioritera features och sprida arbetet, som sänker veckokapacitet och kostnaden.'
      },
      {
        question: 'Vad ingår i app-utveckling?',
        answer: 'Normalt: discovery, design, utveckling, testing och deployment. Det ingår INTE ongoing support, hosting eller framtida features om det inte är specifikt avtalt.'
      }
    ],
    relatedSlugs: ['blueprint-metoden', 'fran-excel-till-eget-system'],
    relatedService: {
      title: 'Idékatalog',
      href: '/ide-katalog',
      description: 'Utforska färdiga app-idéer med ungefärliga kostnader och timeline som kan ge dig inspiration.'
    }
  },
  {
    id: 'teknisk-skuld',
    title: 'Teknisk skuld: Den osynliga kostnaden',
    slug: 'teknisk-skuld',
    description: 'Teknisk skuld växer långsamt och blir dyr. Lär dig hur du identifierar, förebygger och löser teknisk skuld innan den kväver din utveckling.',
    category: 'specialiststod',
    categoryLabel: 'Specialiststöd',
    readTime: '6 min',
    publishedAt: '2026-02-25',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Teknisk skuld är som finansiell skuld — du kan "låna" från framtiden genom att ta genvägar idag, men senare måste du betala tillbaka med ränta. I systemutveckling växer denna skuld exponentiellt om den inte hanteras.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad är teknisk skuld?'
      },
      {
        type: 'paragraph',
        content: 'Teknisk skuld är alla de suboptimala valen du gör för att gå snabbt idag, som senare kostar dig tid och pengar. Det kan vara slarvig kod, dålig dokumentation, föråldrad infrastruktur, eller designbeslut som inte skalerar.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Var växer teknisk skuld?'
      },
      {
        type: 'list',
        items: [
          'Hastig utveckling utan kodstandard eller reviews',
          'Inga automatiserade tester — fel hittas först i production',
          'Arkitektur-beslut tagna utan långsiktig plan',
          'Föråldrad teknologi som inte uppdateras',
          'Dålig dokumentation gör onboarding långsamt',
          'Monolit-arkitektur som är svår att skala'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Kostnaden av teknisk skuld'
      },
      {
        type: 'paragraph',
        content: 'Initialt sparar du tid. Men efter 6-12 månader blir skulderna tydliga. Nya features blir långsammare att bygga, fel dyker upp ofrivilligt, och ditt team blir frustreradt över att jobba i smutsig kod. Potentiellt sparade veckor idag kostar månaderverk senare.'
      },
      {
        type: 'callout',
        content: 'Ett system med liten teknisk skuld är 3-5x snabbare att utveckla för än ett system fullt av skuldkullar. Investera i clean code och god arkitektur från början.'
      }
    ],
    faqItems: [
      {
        question: 'Hur identifierar jag teknisk skuld i mitt system?',
        answer: 'Tecken inkluderar: Nya features tar längre tid än förra året, flera produktionsfel per vecka, developers säger "denna del är ett moras", eller långa onboarding-tider för nya utvecklare. En extern QA-audit kan också identifiera det.'
      },
      {
        question: 'Hur mycket tid bör vi lägga på att minska teknisk skuld?',
        answer: 'Det beror på nivån. För nytt system: förebygga från start (ingår i utveckling). För mogna system: 20-30% av sprinten bör vara refactoring och improvement. En CTO kan säga exakt vilken andel som behövs för dig.'
      },
      {
        question: 'Kan vi helt eliminera teknisk skuld?',
        answer: 'Nästan aldrig. Det är som att väga alltid ett litet residu. Men du kan hålla det under kontroll genom kontinuerlig refactoring, god kodstandard och arkitektur. Det är ongoing work, inte en engångsstrategi.'
      },
      {
        question: 'Vad är ett "skull reduction sprint"?',
        answer: 'En sprint helt dedicerad till refactoring, testning och infrastruktur-förbättringar istället för nya features. Det verkar oproduktivt men sparar enormt mycket tid på lång sikt.'
      }
    ],
    relatedSlugs: ['5-tecken-du-behover-cto', 'secure-by-design'],
    relatedService: {
      title: 'QA och Audits',
      href: '/services/specialiststod#qa-audits',
      description: 'Vi granskar din kod och arkitektur för att identifiera och adressera teknisk skuld innan den blir kritisk.'
    }
  },
  {
    id: 'digital-transformation-smf',
    title: 'Digital transformation för små och medelstora företag',
    slug: 'digital-transformation-smf',
    description: 'En praktisk guide för SMF som vill transformera digitalt. Starta rätt, undvik misstag och se konkret ROI från dina investeringar.',
    category: 'cto',
    categoryLabel: 'CTO as a Service',
    readTime: '7 min',
    publishedAt: '2026-03-03',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Digital transformation är inte bara för tech-bolag längre. Små och medelstora företag som inte transformerar digitalt hamnar snabbt bakom. Men hur gör du det utan att bli överväldiga eller investera miljoner utan return?'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad är digital transformation för SMF?'
      },
      {
        type: 'paragraph',
        content: 'Det är inte om att bli ett tech-bolag. Det är om att använda teknologi för att bli bättre på det du redan gör. Det kan vara automering av administrativa sysslor, bättre kundinformation, eller att möjliggöra remote-arbete.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Starta med ett konkret problem'
      },
      {
        type: 'list',
        items: [
          'Vilka manuella processer tar mest tid idag?',
          'Vilka data är spridd på flera ställen (Excel, mail, minnesbilder)?',
          'Vad skulle förändra om du kunde automatisera eller digitalisera det?',
          'Vad är kostnaden av att status quo förblir?'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Praktisk roadmap för digital transformation'
      },
      {
        type: 'paragraph',
        content: 'Börja litet och iterera. Första året fokus på ett-två prioriterade områden, se resultat, och skalera sen. Detta minskar risk och visar ROI snabbare än att försöka transformera allt på en gång.'
      },
      {
        type: 'list',
        items: [
          'Kvartal 1: Discovery och planning — vilka problem löser vi först?',
          'Kvartal 2-3: Pilot-projekt — bygga och testa lösning i mindre skala',
          'Kvartal 4: Skalering — rulla ut till hela organisationen',
          'År 2+: Nästa område eller deepening existing solutions'
        ]
      },
      {
        type: 'callout',
        content: 'En bra CTO eller tech partner kan vägleda dig genom digital transformation utan att du behöver bli expert på teknologi. De älska att se affärsresultat från teknisk investering.'
      }
    ],
    faqItems: [
      {
        question: 'Hur budgeterar jag för digital transformation?',
        answer: 'Start small — 50k-100k SEK för ett pilot-projekt. Om det fungerar, budgetera 200k-500k för skalning. En CTO kan hjälpa dig priori och kostnads-estimera.'
      },
      {
        question: 'Vad är den största risken med digital transformation?',
        answer: 'Att gå för stort för fort utan att ha affärs-case eller användaradoption. Många SMF köper dyra system utan att förbättra processen. Börja litet, mäta resultat, skalera sen.'
      },
      {
        question: 'Behöver vi en IT-avdelning för digital transformation?',
        answer: 'Inte nödvändigt. En del av en CTO kan ofta vägleda redan befintlig personal eller externa partners. Du behöver en champion interna — ofta en process-ägare, inte IT-person.'
      },
      {
        question: 'Hur länge tar digital transformation?',
        answer: 'Det är ongoing. Första cykeln tar 12-18 månader. Sedan fortsätter du med nästa område. Grundtanken är att teknologi kontinuerligt förbättrar din verksamhet.'
      }
    ],
    relatedSlugs: ['5-tecken-du-behover-cto', 'valja-ratt-teknikpartner'],
    relatedService: {
      title: 'CTO as a Service',
      href: '/services/cto-service',
      description: 'Vi vägleder din SMF genom digital transformation med fokus på affärsresultat, inte teknisk komplexitet.'
    }
  },
  {
    id: 'stada-koket-innan-ni-lagar-mat',
    title: 'Städa köket innan ni lagar mat — varför AI-resan börjar med struktur',
    slug: 'stada-koket-innan-ni-lagar-mat',
    description: 'AI-agenter och automationsverktyg skapar enorm potential — men bara om organisationen har processer, riktlinjer och säkerhetsstruktur på plats. Annars skalas riskerna snabbare än nyttan.',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    readTime: '7 min',
    publishedAt: '2026-03-05',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'Att köpa AI-verktyg löser i sig inget problem. Det kan låta provocerande, men det är en observation jag gjort upprepade gånger de senaste månaderna. I samtal med teknikledare, VD:ar och produktägare återkommer samma fråga: Hur kan vi använda agentdriven utveckling i vår verksamhet? Svaret är sällan så enkelt som en ny licens.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Utmaningen sitter inte i tekniken'
      },
      {
        type: 'paragraph',
        content: 'Varje organisation har unika processer, och det finns inget universellt svar på hur just er verksamhet ska tillämpa AI-agenter. Däremot finns en tydlig gemensam nämnare bland de som lyckas: den avgörande investeringen är inte verktyget — det är den organisatoriska grunden det står på.'
      },
      {
        type: 'callout',
        content: 'Den verkliga utmaningen handlar om att få organisationen att samverka, minska personberoenden och bygga processer som är säkra och kompatibla med ramverk som NIS2 och ISO 27001.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Förändringen börjar inte hos den enskilda utvecklaren'
      },
      {
        type: 'paragraph',
        content: 'Det är lätt att tro att AI-agenter är en fråga för utvecklingsteamet. I verkligheten börjar resan i en strukturell förändring på organisationsnivå — med tydliga riktlinjer, policies, arkitekturmönster och etablerade arbetsmetoder. Det handlar om att bygga in säkerhet och förutsägbarhet, inte att ge verktyg fritt spelrum.'
      },
      {
        type: 'paragraph',
        content: 'En utvecklare med alltför breda behörigheter utgör redan idag en risk. När en AI-agent agerar som den utvecklarens förlängda arm multipliceras den risken. Agenten exekverar snabbt, i stor skala, och exakt enligt instruktionerna — oavsett om instruktionerna är genomtänkta eller inte. Utan rätt struktur leder det inte till effektivitet, utan till oförutsägbara resultat.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Bygg grunden innan ni skalar'
      },
      {
        type: 'paragraph',
        content: 'Rekommendationen till organisationer som vill börja med agentdriven utveckling eller AI-stödd verksamhet är enkel: börja med fundamenten. Se över kodstruktur, behörighetshantering, deployment-processer och säkerhetsrutiner innan nya verktyg introduceras.'
      },
      {
        type: 'list',
        items: [
          'Finns tydliga riktlinjer för behörigheter och åtkomstkontroll?',
          'Är processer för kodgranskning och deployment dokumenterade och efterlevda?',
          'Uppfyller systemen relevanta säkerhetsstandarder och regulatoriska krav?',
          'Har ni reducerat personberoenden i affärskritiska flöden?',
          'Finns en teknisk riktning som hela organisationen förstår och arbetar efter?'
        ]
      },
      {
        type: 'paragraph',
        content: 'Om svaret på någon av dessa frågor är nej bör det åtgärdas först. AI-verktyg förstärker det som redan finns — både det goda och det bristfälliga.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Hur vi arbetar med detta på Axuvo'
      },
      {
        type: 'paragraph',
        content: 'Det här är kärnan i vårt Specialiststöd-erbjudande. Vi kommer in som en oberoende part som granskar nuläget utan interna förutfattade meningar. Genom QA och audits analyserar vi kodbas, arkitektur och säkerhetsrutiner. Genom rådgivning hjälper vi ledningen att fatta välgrundade beslut kring processer och riktlinjer. Och genom utbildning säkerställer vi att teamet kan arbeta effektivt inom den nya strukturen.'
      },
      {
        type: 'paragraph',
        content: 'Processen kan liknas vid att förbereda ett kök innan ett ambitiöst middagsprojekt: inventera verktygen, säkerställ att arbetsstationerna är organiserade och att alla förstår sina roller. Först därefter är det meningsfullt att börja laga mat. Det är kanske inte den mest spektakulära delen av AI-resan, men det är det som avgör om satsningen ger verklig avkastning.'
      },
      {
        type: 'callout',
        content: 'AI utan organisatorisk struktur är hastighet utan riktning. Resultaten kommer snabbt — men det är omöjligt att garantera att de leder rätt.'
      }
    ],
    faqItems: [
      {
        question: 'Kan vi inte börja med AI och bygga strukturen parallellt?',
        answer: 'Det är tekniskt möjligt, men erfarenheten visar att det ofta leder till säkerhetsproblem, inkonsistent kodkvalitet och teknisk skuld som blir kostsam att åtgärda i efterhand. En grundläggande struktur behöver inte ta lång tid — men den behöver finnas på plats innan AI-verktygen skalas upp.'
      },
      {
        question: 'Vad innebär det konkret att "städa köket"?',
        answer: 'Det handlar om att inventera och förbättra era grundläggande processer: behörighetshantering, kodstruktur, deployment-rutiner, dokumentation och säkerhet. Allt det som behöver vara på plats för att AI-verktyg ska kunna användas säkert, effektivt och i enlighet med regulatoriska krav.'
      },
      {
        question: 'Hur lång tid tar det att bli redo för AI-agenter?',
        answer: 'Det varierar beroende på nuläget. Vissa organisationer behöver en fokuserad sprint på 2-4 veckor för att etablera grunderna. Andra kräver en djupare omstrukturering. Vi inleder alltid med en audit för att kartlägga var ni befinner er och vad som behöver prioriteras.'
      }
    ],
    relatedSlugs: ['teknisk-skuld', 'secure-by-design', '5-tecken-du-behover-cto'],
    relatedService: {
      title: 'Specialiststöd',
      href: '/specialiststod',
      description: 'Vi hjälper er bygga den grund som krävs — genom audits, rådgivning och utbildning som gör organisationen redo för nästa steg.'
    }
  },
  {
    id: 'e-handel-som-skalar',
    title: 'Så bygger du en e-handel som skalar — utan att börja om från noll',
    slug: 'e-handel-som-skalar',
    description: 'Många e-handlare kör in i väggen när plattformen inte hänger med. Så planerar du för tillväxt från dag ett.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '6 min',
    publishedAt: '2026-02-28',
    author: 'David Jurkiewicz',
    authorId: 'david-jurkiewicz',
    content: [
      {
        type: 'paragraph',
        content: 'De flesta e-handlare startar med en standardlösning — Shopify, WooCommerce eller liknande. Det fungerar utmärkt i början. Men någonstans mellan 1 000 och 10 000 ordrar per månad börjar saker knaka. Sidor laddar långsamt, integrationer fallerar och det manuella arbetet äter tid som borde gå till tillväxt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vanliga tecken på att plattformen inte hänger med'
      },
      {
        type: 'list',
        items: [
          'Sidladdningstider över 3 sekunder på produkt- och kategorisidor',
          'Manuell hantering av lager, ordrar eller returer som tar timmar varje dag',
          'Integrationer mot ERP eller lager som ofta går sönder',
          'Svårt att lägga till nya betalmetoder eller fraktlösningar',
          'SEO-prestandan sjunker trots bra innehåll'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tänk modulärt från början'
      },
      {
        type: 'paragraph',
        content: 'Nyckeln till en e-handel som skalar är modulär arkitektur. Istället för att byta hela plattformen kan du byta ut och förbättra enskilda delar — checkout, produkthantering, sökmotorn — utan att röra resten. Headless commerce och API-first-tänk gör det möjligt.'
      },
      {
        type: 'paragraph',
        content: 'Det handlar inte om att överinvestera tidigt, utan om att göra smarta val som inte stänger dörrar. Välj lösningar med öppna API:er. Dokumentera integrationer. Automatisera det som tar mest tid.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Automatisering som frigör tid'
      },
      {
        type: 'paragraph',
        content: 'På Kakelgiganten byggde vi automatiserade flöden för welcome-mail, abandoned cart och post-purchase-sekvenser. Resultatet var ökad Customer Lifetime Value utan extra manuellt arbete. Samma princip gäller för orderfullfilment, lagersynk och returhantering.'
      },
      {
        type: 'callout',
        content: 'Varje timme ditt team lägger på manuellt arbete som kan automatiseras är en timme som inte går till tillväxt och kundrelationer.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Datadriven tillväxt'
      },
      {
        type: 'paragraph',
        content: 'En skalbar e-handel behöver en datagrund. Google Analytics 4, Looker Studio, segmenterade kundlistor och tydlig uppföljning av ROAS och ROI. Utan data fattar du beslut i mörker. Med data ser du exakt var flaskhalsen sitter och var nästa tillväxtmöjlighet finns.'
      }
    ],
    faqItems: [
      {
        question: 'När bör man byta från Shopify till en egen lösning?',
        answer: 'Det beror på dina behov. Shopify fungerar bra för de flesta. Men om du behöver avancerade integrationer, multi-market eller har unika affärsflöden som plattformen begränsar, kan det vara dags att titta på headless eller en egen lösning.'
      },
      {
        question: 'Vad kostar det att bygga en skalbar e-handel?',
        answer: 'Det varierar stort beroende på komplexitet. En enklare headless-setup kan starta från 60 000 kr, medan en komplett plattform med ERP-integration, lagerhantering och multi-market kan landa på 200-400 000 kr.'
      },
      {
        question: 'Kan man skala utan att byta plattform helt?',
        answer: 'Absolut. Ofta handlar det om att optimera det du har — bättre caching, automatiserade flöden, renare integrationer. Vi börjar alltid med att analysera nuläget innan vi rekommenderar en helt ny plattform.'
      }
    ],
    relatedSlugs: ['fran-excel-till-eget-system', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Build Studio',
      href: '/build-studio',
      description: 'Vi bygger och skalar din e-handel med rätt teknik från start — från blueprint till leverans.'
    }
  },
  {
    id: 'seo-for-utvecklare',
    title: 'SEO-grunder för utvecklare — det tekniska som ofta glöms bort',
    slug: 'seo-for-utvecklare',
    description: 'Du kan ha världens bästa produkt men om Google inte förstår din sajt spelar det ingen roll. De tekniska SEO-grunderna varje utvecklare behöver kunna.',
    category: 'strategi',
    categoryLabel: 'Strategi',
    readTime: '6 min',
    publishedAt: '2026-02-20',
    author: 'David Jurkiewicz',
    authorId: 'david-jurkiewicz',
    content: [
      {
        type: 'paragraph',
        content: 'SEO handlar inte bara om nyckelord och innehåll. En stor del av sökmotoroptimeringen sitter i den tekniska strukturen — och det är ofta här det brister. Som utvecklare eller teknikansvarig har du mer makt över SEO-resultaten än du kanske tror.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sidladdningstid är en rankingfaktor'
      },
      {
        type: 'paragraph',
        content: 'Google mäter Core Web Vitals — LCP, FID och CLS — och använder dem som rankingsignaler. En sajt som laddar långsamt eller hoppar runt visuellt straffas i sökresultaten. Det handlar om att optimera bilder, minimera JavaScript, använda rätt caching och välja rätt renderingsstrategi.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Strukturerad data gör dig synlig'
      },
      {
        type: 'paragraph',
        content: 'JSON-LD-markup med schema.org ger Google kontext om ditt innehåll. FAQ-schema visar frågor direkt i sökresultaten. Product-schema visar priser och recensioner. Article-schema hjälper Google förstå vem som skrivit vad och när. Det tar 15 minuter att implementera och kan dramatiskt öka din klickfrekvens.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Canonical URLs och duplicerat innehåll'
      },
      {
        type: 'paragraph',
        content: 'Många sajter har samma innehåll tillgängligt på flera URL:er utan att veta om det. Filtreringssidor, paginering, UTM-taggar — allt skapar potentiella duplikat. Canonical-taggar berättar för Google vilken version som är originalet. Utan dem sprids din rankingkraft ut över flera sidor.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Internlänkning som strategi'
      },
      {
        type: 'paragraph',
        content: 'Hur dina sidor länkar till varandra internt är en av de mest underskattade SEO-faktorerna. En genomtänkt internlänkstrategi hjälper Google att förstå vilka sidor som är viktigast och hur de hänger ihop. Det handlar om ankarlänkar med relevanta texter, brödsmulor och kontextuella hänvisningar.'
      },
      {
        type: 'callout',
        content: 'Tips: Varje sida på din sajt bör vara nåbar inom max 3 klick från startsidan. Annars riskerar Google att inte indexera den.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Checklista för teknisk SEO'
      },
      {
        type: 'list',
        items: [
          'Alla sidor har unika title-taggar och meta descriptions',
          'Bilder har alt-texter och är optimerade i storlek',
          'Sitemap.xml är uppdaterad och inlämnad till Google Search Console',
          'Robots.txt blockerar inte viktiga sidor',
          'Core Web Vitals passerar Googles tröskelvärden',
          'JSON-LD finns för Organisation, FAQ, Article, Product etc.',
          'Canonical-taggar finns på alla sidor med potentiella duplikat',
          'Hreflang-taggar finns om sajten har flera språk'
        ]
      }
    ],
    faqItems: [
      {
        question: 'Hur snabbt ser man resultat av teknisk SEO?',
        answer: 'Det varierar, men typiskt ser du förändringar i indexering inom 1-2 veckor och rankingförbättringar inom 1-3 månader. Teknisk SEO är grunden som allt annat bygger på.'
      },
      {
        question: 'Behöver man vara utvecklare för att jobba med teknisk SEO?',
        answer: 'Inte nödvändigtvis, men det hjälper enormt. Många tekniska SEO-åtgärder kräver ändringar i kod, serverkonfiguration eller CMS-inställningar. Som minimum behöver du samarbeta nära med utvecklingsteamet.'
      },
      {
        question: 'Vilka verktyg rekommenderar ni?',
        answer: 'Google Search Console är grunden — det är gratis och visar exakt hur Google ser din sajt. Utöver det rekommenderar vi Semrush eller Ahrefs för nyckelordsanalys, Google PageSpeed Insights för prestanda och Screaming Frog för teknisk audit.'
      }
    ],
    relatedSlugs: ['valja-ratt-teknikpartner', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Specialiststöd',
      href: '/specialiststod',
      description: 'Vi granskar din sajts tekniska SEO och ger konkreta rekommendationer som förbättrar din synlighet.'
    }
  },
  {
    id: 'upphandla-it-projekt',
    title: 'Så upphandlar du ett IT-projekt utan att bli lurad',
    slug: 'upphandla-it-projekt',
    description: 'Många företag betalar för mycket eller får för lite när de upphandlar digitala projekt. Här är fallgroparna och hur du undviker dem.',
    category: 'strategi',
    categoryLabel: 'Strategi',
    readTime: '7 min',
    publishedAt: '2026-02-15',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'IT-upphandlingar är notoriskt svåra. Budgeten spricker, leveransen dröjer och resultatet matchar sällan förväntningarna. Det beror sällan på illvilja — oftare på bristande förarbete, otydliga kravställningar och fel val av samarbetsmodell.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Det vanligaste felet: att upphandla en lösning istället för ett problem'
      },
      {
        type: 'paragraph',
        content: 'Alltför ofta kommer företag till en leverantör med en färdig kravspecifikation. "Vi vill ha ett CRM-system med dessa 47 funktioner." Problemet? Kravspecen baseras på hur de jobbar idag, inte hur de borde jobba. Och ingen har ifrågasatt om ett CRM ens är rätt lösning på det underliggande problemet.'
      },
      {
        type: 'callout',
        content: 'Beskriv problemet ni vill lösa, inte lösningen ni tror att ni behöver. Bra leverantörer utmanar era antaganden — det är ett gott tecken, inte ett dåligt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Fast pris vs. löpande — vad funkar bäst?'
      },
      {
        type: 'paragraph',
        content: 'Fast pris ger trygghet men skapar incitament för leverantören att leverera minimum. Löpande räkning ger flexibilitet men kräver tillit och uppföljning. Det bästa är ofta en hybrid — en fast kostnad för en avgränsad första fas (som en blueprint eller MVP), och sedan löpande för vidareutveckling.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Varningssignaler att se upp med'
      },
      {
        type: 'list',
        items: [
          'Leverantören säger ja till allt utan att ställa frågor',
          'Ingen demo eller referens kan visas från liknande projekt',
          'Ni äger inte koden — allt sitter fast hos leverantören',
          'Inget tydligt avtal om förvaltning efter leverans',
          'Priset är märkbart lägre än alla andra offerter',
          'Leverantören vill inte använda er infrastruktur eller repo'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Frågor att ställa innan ni skriver på'
      },
      {
        type: 'list',
        items: [
          'Vem äger koden och datan efter leverans?',
          'Vad händer om vi vill byta leverantör — hur ser exit-planen ut?',
          'Hur hanterar ni säkerhet under och efter utveckling?',
          'Kan vi se ett liknande projekt ni har byggt?',
          'Vad ingår i underhåll och support efter lansering?'
        ]
      },
      {
        type: 'paragraph',
        content: 'En seriös leverantör är transparent med sina processer, äger inte dina tillgångar som gisslan och ser till att du kan stå på egna ben om samarbetet avslutas. Allt annat är en varningsflagga.'
      }
    ],
    faqItems: [
      {
        question: 'Hur vet jag att priset är rimligt?',
        answer: 'Begär minst 2-3 offerter och jämför inte bara pris utan scope, tidsplan och vad som ingår. En offert som är hälften så dyr men tar dubbelt så lång tid är inte billigare.'
      },
      {
        question: 'Ska vi anlita en byrå eller frilansare?',
        answer: 'Frilansare funkar bra för avgränsade uppgifter. Men för ett helt system behöver du ett team med kompletterande kompetens — arkitekt, utvecklare, UX, QA. En byrå eller studio ger dig det utan att du själv behöver koordinera.'
      },
      {
        question: 'Behöver vi en teknisk person internt under upphandlingen?',
        answer: 'Helst ja. Annars riskerar ni att inte kunna utvärdera leverantörernas tekniska val. Om ni inte har det kan en inhyrd CTO eller teknisk rådgivare hjälpa under upphandlingsfasen.'
      }
    ],
    relatedSlugs: ['valja-ratt-teknikpartner', 'blueprint-metoden'],
    relatedService: {
      title: 'CTO as a Service',
      href: '/cto-as-a-service',
      description: 'Vi hjälper dig navigera IT-upphandlingar med rätt teknisk expertis — så du slipper dyr läxa.'
    }
  },
  {
    id: 'shopify-vs-eget-system',
    title: 'Shopify vs. eget system — vad passar ditt företag?',
    slug: 'shopify-vs-eget-system',
    description: 'Shopify är fantastiskt för snabb start, men inte alltid rätt i längden. Så väger du fördelar mot begränsningar.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '5 min',
    publishedAt: '2026-02-10',
    author: 'David Jurkiewicz',
    authorId: 'david-jurkiewicz',
    content: [
      {
        type: 'paragraph',
        content: 'Shopify har demokratiserat e-handeln. Inom några timmar kan du ha en fungerande butik online. Men nånstans på vägen uppstår frågan: räcker Shopify, eller behöver vi något eget? Svaret är inte svart eller vitt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'När Shopify räcker — och räcker bra'
      },
      {
        type: 'paragraph',
        content: 'Om du säljer fysiska produkter, har ett relativt standardiserat flöde och vill fokusera på marknadsföring och produkter snarare än teknik — då är Shopify svårslaget. Ekosystemet av appar och integrationer täcker det mesta. Och med Shopify Plus finns kapacitet för även större handlare.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'När begränsningarna börjar synas'
      },
      {
        type: 'list',
        items: [
          'Du behöver B2B och B2C i samma plattform med olika prislogik',
          'Affärsmodellen kräver prenumerationer, konfigurationer eller offertflöden',
          'Du vill integrera djupt med ERP, WMS eller branschspecifika system',
          'Multi-market med olika lagerhållning, valutor och regler per land',
          'Du vill äga all data och inte vara beroende av en tredjepartsplattform'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Hybridmodellen — det bästa av två världar'
      },
      {
        type: 'paragraph',
        content: 'Allt fler handlare går mot en headless-modell: Shopify som backend för produkter och ordrar, men med en egen frontend för maximal kontroll över upplevelsen. Det ger Shopifys stabilitet och ekosystem kombinerat med frihet att bygga den kundupplevelse du vill.'
      },
      {
        type: 'callout',
        content: 'Tumregel: Om du lägger mer tid på att jobba runt Shopifys begränsningar än på att växa ditt företag, är det dags att utvärdera alternativen.'
      },
      {
        type: 'paragraph',
        content: 'Vår rekommendation är alltid att börja med det enklaste som fungerar. Bygg inte eget för sakens skull. Men var ärlig med dig själv om när plattformen börjar hålla dig tillbaka — och agera innan det blir en akut situation.'
      }
    ],
    faqItems: [
      {
        question: 'Kostar det mycket att gå från Shopify till eget?',
        answer: 'Det beror på komplexiteten, men räkna med 100-300 000 kr för en headless-lösning. Fördelen är att du ofta sparar in det på minskade appkostnader, bättre konvertering och mindre manuellt arbete inom 6-12 månader.'
      },
      {
        question: 'Kan vi behålla Shopify som admin men byta frontend?',
        answer: 'Ja, det är precis vad headless commerce innebär. Du behåller Shopifys admin, produkthantering och orderflöden men bygger en egen frontend som ger full kontroll över designen och upplevelsen.'
      },
      {
        question: 'Förlorar vi SEO om vi byter plattform?',
        answer: 'Inte om det görs rätt. Med korrekta redirects, bibehållen URL-struktur och rätt teknisk implementation behöver du inte tappa organisk trafik. Det kan till och med förbättras tack vare bättre prestanda.'
      }
    ],
    relatedSlugs: ['e-handel-som-skalar', 'fran-excel-till-eget-system'],
    relatedService: {
      title: 'Build Studio',
      href: '/build-studio',
      description: 'Vi hjälper dig avgöra vad som passar — och bygger lösningen oavsett vilken väg du väljer.'
    }
  },
  {
    id: 'ai-strategi-sma-foretag',
    title: 'AI-strategi för små företag — börja smått, tänk stort',
    slug: 'ai-strategi-sma-foretag',
    description: 'Du behöver inte vara ett techbolag för att dra nytta av AI. Praktiska tips för att komma igång utan att överinvestera.',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    readTime: '5 min',
    publishedAt: '2026-03-01',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'AI känns fortfarande abstrakt för många företagare. Man hör om GPT, agenter och automation — men vad betyder det i praktiken för ett litet eller medelstort företag? Svaret behöver inte vara komplicerat.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Börja med ett konkret problem'
      },
      {
        type: 'paragraph',
        content: 'Första steget är inte att köpa en AI-plattform. Det är att identifiera en konkret uppgift som tar tid, är repetitiv och följer ett mönster. Kundtjänstfrågor som upprepas. Fakturor som ska konteras. Produktbeskrivningar som behöver skrivas. Där finns din första AI-vinst.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tre nivåer av AI-mognad'
      },
      {
        type: 'list',
        items: [
          'Nivå 1: Assistans — AI hjälper din personal att jobba snabbare (textgenerering, sammanfattning, sökning)',
          'Nivå 2: Automation — AI utför hela uppgifter utan mänsklig inblandning (chatbotar, datainsamling, rapporter)',
          'Nivå 3: Agenter — AI fattar beslut och agerar självständigt inom definierade ramar (kundservice-eskalering, dynamisk prissättning)'
        ]
      },
      {
        type: 'paragraph',
        content: 'De flesta små företag bör sikta på nivå 1 först. Det är låg risk, snabb avkastning och bygger intern förståelse för vad AI kan och inte kan göra.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad du inte bör göra'
      },
      {
        type: 'list',
        items: [
          'Köpa dyra AI-verktyg innan du vet vad du vill lösa',
          'Förvänta dig att AI ersätter personal — det förstärker personal',
          'Ignorera säkerhet och datahantering',
          'Tro att AI är en engångsinsats — det kräver löpande justering'
        ]
      },
      {
        type: 'callout',
        content: 'Den bästa AI-strategin för ett litet företag börjar med: Vad tar mest tid som inte kräver mänskligt omdöme?'
      },
      {
        type: 'paragraph',
        content: 'AI är inte magi. Det är ett verktyg. Och som med alla verktyg handlar det om att använda rätt verktyg för rätt uppgift, inte om att ha flest verktyg i lådan.'
      }
    ],
    faqItems: [
      {
        question: 'Vad kostar det att komma igång med AI?',
        answer: 'Du kan börja gratis med verktyg som ChatGPT eller Claude. För mer avancerade integrationer — chatbotar, automation, API-kopplingar — räkna med en investering från 15 000 kr och uppåt beroende på komplexitet.'
      },
      {
        question: 'Behöver vi anställa AI-experter?',
        answer: 'Inte nödvändigtvis. Ofta räcker det med rådgivning för att komma igång och sedan utbildning för ditt befintliga team. En inhyrd CTO eller specialist kan hjälpa er de första månaderna.'
      },
      {
        question: 'Hur vet vi om AI passar vår bransch?',
        answer: 'AI är branschagnostisk. Om du har data, repetitiva uppgifter eller kundinteraktioner finns det nästan alltid en tillämpning. Vi kan hjälpa dig identifiera var AI ger mest värde just för ditt företag.'
      }
    ],
    relatedSlugs: ['stada-koket-innan-ni-lagar-mat', 'digital-transformation-smf'],
    relatedService: {
      title: 'CTO as a Service',
      href: '/cto-as-a-service',
      description: 'Vi hjälper dig skapa en pragmatisk AI-strategi som ger resultat — utan att överkomplicera.'
    }
  },
  {
    id: 'mvp-vs-fullskalig',
    title: 'MVP eller fullskalig produkt — när ska du välja vad?',
    slug: 'mvp-vs-fullskalig',
    description: 'Att bygga en MVP kan spara miljoner. Men ibland behöver du mer. Så avgör du rätt nivå för din digitala satsning.',
    category: 'build-studio',
    categoryLabel: 'Build Studio',
    readTime: '5 min',
    publishedAt: '2026-02-05',
    author: 'Robin Englund',
    authorId: 'robin-englund',
    content: [
      {
        type: 'paragraph',
        content: 'MVP — Minimum Viable Product — har blivit något av ett modeord. Alla vill bygga en MVP. Men inte alla förstår vad det faktiskt innebär, eller när det inte är rätt strategi.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vad en MVP egentligen är'
      },
      {
        type: 'paragraph',
        content: 'En MVP är den enklaste versionen av en produkt som kan leverera värde till riktiga användare. Nyckelordet är "viable" — den måste fungera. Det är inte en halvfärdig produkt, en prototyp eller en mockup. Det är den minsta funktionella versionen som löser ett verkligt problem.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'När en MVP är rätt val'
      },
      {
        type: 'list',
        items: [
          'Du testar en ny marknad eller målgrupp',
          'Affärsmodellen är obevisad och du vill validera innan stor investering',
          'Du har begränsad budget och vill lära snabbt',
          'Time-to-market är viktigare än fullständig funktionalitet'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'När du bör sikta högre från start'
      },
      {
        type: 'list',
        items: [
          'Du ersätter ett befintligt system — användare accepterar inte sämre funktionalitet',
          'Säkerhet och compliance kräver en viss grundnivå',
          'Du har redan validerad efterfrågan och behöver leverera kvalitet',
          'Konkurrenterna är redan etablerade och förväntningarna höga'
        ]
      },
      {
        type: 'callout',
        content: 'Ett vanligt misstag: att bygga en MVP med tanken att "vi fixar kvaliteten sen". Den tekniska skulden från en hafsig MVP kan kosta mer att åtgärda än att bygga rätt från början.'
      },
      {
        type: 'paragraph',
        content: 'Den bästa strategin är ofta en sekventiell approach: bygg en solid MVP med bra grund, validera, och bygg vidare på samma kodbas. Axuvos Blueprint-metod är designad exakt för det — du ser resultat snabbt utan att kompromissa med kvaliteten.'
      }
    ],
    faqItems: [
      {
        question: 'Hur lång tid tar det att bygga en MVP?',
        answer: 'Med Axuvos Build Studio-modell kan en MVP typiskt levereras på 4-8 veckor beroende på komplexitet. Blueprint-fasen (gratis) tar 48 timmar och ger dig en klickbar prototyp att utgå ifrån.'
      },
      {
        question: 'Vad kostar en MVP?',
        answer: 'Våra MVP:er startar från 25 000 kr för enklare applikationer och går upp till 150 000 kr för mer avancerade lösningar med integrationer. Se vår idékatalog för prisindikationer.'
      }
    ],
    relatedSlugs: ['blueprint-metoden', 'vad-kostar-det-att-bygga-app'],
    relatedService: {
      title: 'Build Studio',
      href: '/build-studio',
      description: 'Från MVP till fullskalig produkt — vi bygger i rätt takt med vår beprövade process.'
    }
  },
  {
    id: 'digitalisering-fastigheter',
    title: 'Digitalisering i fastighetsbranschen — från pappersprocesser till plattformar',
    slug: 'digitalisering-fastigheter',
    description: 'Fastighetsbranschen digitaliseras snabbt men ojämnt. Så tar du steget från manuella processer till smarta system.',
    category: 'cto',
    categoryLabel: 'CTO as a Service',
    readTime: '6 min',
    publishedAt: '2026-01-28',
    author: 'David Jurkiewicz',
    authorId: 'david-jurkiewicz',
    content: [
      {
        type: 'paragraph',
        content: 'Fastighetsbranschen har länge halkat efter i digitaliseringen. Medan andra branscher automatiserat och effektiviserat drivs fortfarande många fastighetsbolag av Excel, mejl och pappersprocesser. Men förändringen accelererar nu snabbt.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Var digitaliseringen ger störst effekt'
      },
      {
        type: 'list',
        items: [
          'Felanmälan och ärendehantering — digitala flöden istället för mejl och telefon',
          'Hyresgästportaler — digital kommunikation, avtal och dokument',
          'Energiövervakning — IoT-sensorer och realtidsdata för driftoptimering',
          'Fastighetsvärdering — datadriven analys istället för magkänsla',
          'Besiktning och dokumentation — digitala protokoll med foto och GPS'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'PropTech-vågen'
      },
      {
        type: 'paragraph',
        content: 'PropTech — Property Technology — växer explosionsartat. Plattformar för allt från fastighetsvärdering till smarta hem och hållbarhetsrapportering. Men utmaningen för många fastighetsbolag är inte brist på lösningar — det är att veta vilka som faktiskt passar deras behov och kan integreras med befintliga system.'
      },
      {
        type: 'callout',
        content: 'Det största misstaget i fastighetsbranschens digitalisering: att köpa 10 olika system som inte pratar med varandra. Tänk integration först.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Börja med att kartlägga'
      },
      {
        type: 'paragraph',
        content: 'Innan du investerar i system, kartlägg era nuvarande processer. Var sitter flaskhalsarna? Var försvinner tid? Var uppstår fel? Ofta är det enklare och billigare att automatisera en befintlig process än att byta till en helt ny plattform.'
      },
      {
        type: 'paragraph',
        content: 'Med erfarenhet från PropTech-sektorn vet vi att framgångsrik digitalisering i fastighetsbranschen kräver någon som förstår både tekniken och branschen. Det handlar inte om att köpa det senaste — det handlar om att lösa de verkliga problemen.'
      }
    ],
    faqItems: [
      {
        question: 'Vilka system bör ett fastighetsbolag prioritera?',
        answer: 'Börja med det som ger snabbast ROI: digital felanmälan och ärendehantering. Det minskar administrationen dramatiskt och förbättrar hyresgästnöjdheten. Därefter hyresgästportal och energiövervakning.'
      },
      {
        question: 'Kan vi digitalisera gradvis?',
        answer: 'Absolut, och det rekommenderar vi. Ta ett system i taget, säkerställ att det fungerar och att organisationen har anpassat sig, sedan nästa. Rush-implementeringar leder oftast till motstånd och teknisk skuld.'
      },
      {
        question: 'Behöver vi en CTO för digitaliseringen?',
        answer: 'Inte nödvändigtvis permanent, men en teknisk ledare som kan se helheten och fatta rätt beslut om arkitektur och integrationer är ovärderlig under transformationsfasen. En inhyrd CTO kan fylla den rollen.'
      }
    ],
    relatedSlugs: ['digital-transformation-smf', 'fran-excel-till-eget-system'],
    relatedService: {
      title: 'CTO as a Service',
      href: '/cto-as-a-service',
      description: 'Vi leder digitaliseringen av din fastighetsverksamhet — från kartläggning till implementation.'
    }
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getAllCategories(): Array<{ value: string; label: string }> {
  const categories = Array.from(
    new Set(articles.map((article) => article.category))
  );

  const categoryLabels: Record<string, string> = {
    'build-studio': 'Build Studio',
    'cto': 'CTO as a Service',
    'specialiststod': 'Specialiststöd',
    'strategi': 'Strategi',
    'ai': 'AI & Automation'
  };

  return categories.map((category) => ({
    value: category,
    label: categoryLabels[category] || category
  }));
}

export default articles;
