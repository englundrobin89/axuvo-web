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
  category: 'build-studio' | 'cto' | 'specialiststod' | 'strategi';
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  author: string;
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
    'strategi': 'Strategi'
  };

  return categories.map((category) => ({
    value: category,
    label: categoryLabels[category] || category
  }));
}

export default articles;
