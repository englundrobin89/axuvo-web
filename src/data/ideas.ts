export interface Idea {
  id: string;
  title: string;
  slug: string;
  description: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  problems: string[];
  audience: string;
  features?: string[];
  category: 'quick' | 'medium' | 'large';
  problem?: string;
  solution?: string;
  effects?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
  icon?: string;
}

export const ideas: Idea[] = [
  // 25k-60k kr range
  {
    id: '1',
    title: 'Bokningsapp',
    slug: 'bokningsapp',
    description: 'En modern bokningsapp för att hantera och schemalägga tider för dina kunder',
    priceRange: '25k-60k',
    minPrice: 25000,
    maxPrice: 60000,
    category: 'quick',
    icon: 'Calendar',
    problem: 'Du använder Google Calendar, Excel eller papper för att hålla ordning på bokningar. Kunderna hör av sig via sms och mail för att boka. Du riskerar dubbelbokning och spenderar timmar varje vecka på att hantera scheman manuellt.',
    solution: 'Vi bygger en bokningsapp där dina kunder kan boka tider själva. De får automatiska påminnelser, kan omrbooka och betala online. Du får en central plats för all bokningshantering med integrationer till din kalender.',
    effects: [
      'Kunderna bokar själva — spar 5-10 timmar per vecka',
      'Färre dubbelbokning och bortglömda möten',
      'Påminnelser minskar no-shows med upp till 40%',
      'Du kan integrera till betalningslösningar',
    ],
    problems: [
      'Manuell bokningshantering tar för mycket tid',
      'Kunderna kan inte boka själva',
      'Dubbelbokning och schemaläggningskonflikter',
      'Svårt att hålla reda på kundinformation',
    ],
    audience: 'Frisörer, tandläkare, konsulter, personal trainers, massage terapeuter',
    features: [
      'Automatisk kalenderintegration',
      'Påminnelser och notifieringar',
      'Onlinebokningar',
      'Kunddatabas',
    ],
    faqItems: [
      {
        question: 'Kan kunderna betala direkt i bokningsappen?',
        answer: 'Ja, vi integrerar betalningslösningar som Stripe eller Klarna så att kunderna kan betala när de bokar. Du väljer själv betalningsmodell.',
      },
      {
        question: 'Vilka kalender fungerar med bokningsappen?',
        answer: 'Vi integrerar med Google Calendar, Outlook och andra vanliga kalendersystem. Synkroniseringen sker i realtid.',
      },
      {
        question: 'Kan kunderna se tillgänglighet innan de bokar?',
        answer: 'Ja, helt enkelt. Kunderna ser bara lediga tider baserat på dina öppettider och befintliga bokningar.',
      },
      {
        question: 'Kan jag skicka påminnelser?',
        answer: 'Ja, påminnelser skickas automatiskt via SMS eller mail 24 timmar innan mötet. Du kan ändra tidpunkten efter behov.',
      },
    ],
  },
  {
    id: '2',
    title: 'Offertverktyg',
    slug: 'offertverktyg',
    description: 'Automatisera skapandet och skickandet av offerter med ett modernt webbaserat verktyg',
    priceRange: '25k-60k',
    minPrice: 25000,
    maxPrice: 60000,
    category: 'quick',
    icon: 'FileText',
    problem: 'Du skriver offerter i Word eller Excel. Det tar tid, är felbenäget och ser inte professionellt ut. Du vet inte vilket stadium offerten är i — är den accepterad, ignorerad eller på väg?',
    solution: 'Vi bygger ett offertverktyg där du snabbt genererar professionella offerter från mallar. Kunderna kan acceptera, signera och betala direkt i systemet. Du får full insyn i all offerthantering.',
    effects: [
      'Offertskrivning tar minuter istället för timmar',
      'Automatisk påföljning av inaktiva offerter',
      'Färre missad affärer genom bättre spårning',
      'E-signering sparar tidsödande pappersprocesser',
    ],
    problems: [
      'Offertprocess är långsam och felbenägen',
      'Svårt att spåra accepterade offerter',
      'Inkonsistent formgivning på offerter',
      'Manuell fakturagenering från offerter',
    ],
    audience: 'Konsultföretag, byggbolag, designbyråer, IT-företag',
    features: [
      'Mallar för snabb offertgenerering',
      'Statusövervakning',
      'E-signering',
      'Automatisk fakturakonvertering',
    ],
    faqItems: [
      {
        question: 'Kan vi anpassa offertmallarna?',
        answer: 'Ja, helt och hållet. Du skapar mallar med ditt varumärke, logga och villkor. Du kan ha flera mallar för olika tjänster.',
      },
      {
        question: 'Kan kunder signera elektroniskt?',
        answer: 'Ja, vi integrerar e-signering så att kunden kan acceptera och signera direkt i offerten.',
      },
      {
        question: 'Skapas faktura automatiskt när offert accepteras?',
        answer: 'Du kan välja det. Systemet kan automatiskt skapa en faktura från accepterad offert och skicka den till ditt bokföringssystem.',
      },
      {
        question: 'Vilka betalningsmetoder fungerar?',
        answer: 'Vi integrerar alla vanliga betalningsgatewayer — Stripe, Klarna, BankID m.m.',
      },
    ],
  },
  {
    id: '3',
    title: 'Personlig app / MVP',
    slug: 'personlig-app',
    description: 'En skräddarsydd minimal viable product för att testa din affärsidé på marknaden',
    priceRange: '25k-60k',
    minPrice: 25000,
    maxPrice: 60000,
    category: 'quick',
    icon: 'Rocket',
    problem: 'Du har en idé men är osäker på om det finns en marknad för den. Du vill testa med riktiga användare innan du investerar mer. Du behöver något du kan visa för investerare och användare — snabbt och till lågt pris.',
    solution: 'Vi bygger en MVP — en minimal viable product med de viktigaste funktionerna. Fokus ligger på att testa din hypotes och få feedback från användare. Det är productonkelt, testbart och kan skalas senare.',
    effects: [
      'Du får feedback från riktiga användare inom veckor',
      'Du kan testa affärsmodell utan stor risk',
      'Enklare att sälja in idén till investerare med konkret produkt',
      'Lägre utvecklingskostnad än fullskalig lösning',
    ],
    problems: [
      'Osäkerhet kring marknadsacceptans för din idé',
      'Vill testa med användare innan större investering',
      'Behöver snabb proof-of-concept',
      'Begränsad budget för utveckling',
    ],
    audience: 'Nystartade företag, innovatörer, små företag med nya idéer',
    features: [
      'Fokus på kärnfunktionalitet',
      'Snabb time-to-market',
      'Låg initial kostnad',
      'Lätt att skala senare',
    ],
    faqItems: [
      {
        question: 'Vad är en MVP?',
        answer: 'En MVP (Minimal Viable Product) är en version av produkten med bara de viktigaste funktionerna. Det räcker för att användare ska kunna testa och ge feedback — utan allt extra som kan vänta till senare.',
      },
      {
        question: 'Hur lång tid tar det att bygga en MVP?',
        answer: 'Typiskt 4-8 veckor beroende på komplexitet. Vi fokuserar på snabbhet och att få något ut på marknaden så fort som möjligt.',
      },
      {
        question: 'Kan vi skala MVP senare?',
        answer: 'Ja, det är hela tanken. Vi bygger för att senare kunna lägga till fler funktioner och skalera baserat på användarfeedback.',
      },
      {
        question: 'Behöver vi en affärsplan?',
        answer: 'Det hjälper, men det viktigaste är att ha en hypotes du vill testa. Vi kan hjälpa dig formulera det under blueprint-mötet.',
      },
    ],
  },

  // 60k-150k kr range
  {
    id: '4',
    title: 'Kundportal',
    slug: 'kundportal',
    description: 'En portal där dina kunder kan se information, uppdateringar och kommunicera med dig',
    priceRange: '60k-150k',
    minPrice: 60000,
    maxPrice: 150000,
    category: 'medium',
    icon: 'Users',
    problem: 'Dina kunder maila och ringer konstant med frågor om status. De frågar samma saker gång på gång. Du använder timmar på att upprepa samma information. Det finns ingen central plats där kunderna själva kan se projektets framskridande.',
    solution: 'Vi bygger en kundportal där dina kunder loggar in och ser allt de behöver — projektstatus, milestones, dokument, fakturor och timmar. Du uppdaterar portalen och all kommunikation centraliseras på ett ställe.',
    effects: [
      'Minska email och telefonsamtal med 60%',
      'Kunderna får svar själva istället för att höra av sig',
      'Bättre transparens ökar kundinöjdhet',
      'Spara tid på upprepad kommunikation',
    ],
    problems: [
      'Kunder frågar samma saker gång på gång',
      'Svårt att kommunicera status på projekt',
      'Ingen central plats för kundinformation',
      'Mycket email och telefonsamtal',
    ],
    audience: 'Webbyråer, SaaS-företag, konsulter, fastighetsmäklare',
    features: [
      'Projektöversikt',
      'Dokumentdelning',
      'Kommunikationssystem',
      'Fakturaöversikt',
      'Statusuppdateringar',
    ],
    faqItems: [
      {
        question: 'Kan vi begränsa vad olika kunder ser?',
        answer: 'Ja, helt enkelt. Varje kunde loggar in och ser bara sitt eget projekt. Du kan även begränsa vilka dokument och information som visas.',
      },
      {
        question: 'Kan portalen hämta data från våra andra system?',
        answer: 'Ja, vi kan integrera med de flesta projekthanteringssystem, CRM och bokföringsprogram.',
      },
      {
        question: 'Vad händer om en kund behöver skicka oss något?',
        answer: 'Portalen har ett inbyggt meddelandesystem och möjlighet att ladda upp filer direkt till projektet.',
      },
      {
        question: 'Hur loggar kunderna in?',
        answer: 'Du skickar dem en länk. De kan logga in med e-post och lösenord eller via BankID. Vi säkerställer att all data är krypterad.',
      },
    ],
  },
  {
    id: '5',
    title: 'Internt verksamhetssystem',
    slug: 'verksamhetssystem',
    description: 'Ett system för att hantera din verksamhet internt med CRM, projekt och tidsrapportering',
    priceRange: '60k-150k',
    minPrice: 60000,
    maxPrice: 150000,
    category: 'medium',
    icon: 'Workflow',
    problem: 'Din kundinformation ligger i ett system, projekt i ett annat och timmar i ett tredje. Du vet inte hur resurserna är fördelade. Fakturering tar tid för hand. Det finns ingen enhetlig arbetsprocess och mycket data är duplicerad.',
    solution: 'Vi bygger ett internt verksamhetssystem som samlar allt på ett ställe — kundinfo (CRM), projekt, tidsrapportering och resursplanering. Allt är kopplat så att data bara behöver matas in en gång.',
    effects: [
      'Hel överblick över alla projekt och resurser',
      'Tidsrapportering tar minuter istället för timmar',
      'Fakturering blir halvautomatisk från timrapporter',
      'Bättre beslutsunderlag för resursplanering',
    ],
    problems: [
      'Information spridd på flera system',
      'Svårt att få överblick över projekt och resurser',
      'Tidsrapportering är ineffektiv',
      'Kundinformation är oorganiserad',
    ],
    audience: 'Konsultföretag, webbyråer, serviceföretag, små till medelstora företag',
    features: [
      'CRM-funktionalitet',
      'Projekthantering',
      'Tidsrapportering',
      'Resursplanering',
      'Fakturahantering',
    ],
    faqItems: [
      {
        question: 'Kan systemet integrera med vår befintliga bokföring?',
        answer: 'Ja, vi integrerar med bokföringsprogram som Visma, e-conomic och andra standardsystem så att fakturer skapas automatiskt.',
      },
      {
        question: 'Hur hanterar systemet tidsrapportering?',
        answer: 'Vi bygger ett enkelt gränssnitt där teamet kan rapportera tid per projekt per dag. Data finns sedan tillgänglig för fakturering och resursanalys.',
      },
      {
        question: 'Kan vi rapportera på lönsamhet per projekt?',
        answer: 'Ja, systemet ger dig full insyn i timmar vs budget per projekt så att du ser exakt vad varje projekt kostar och tjänar.',
      },
      {
        question: 'Hur många användare kan vi ha?',
        answer: 'Du kan ha så många användare du vill. Priset är baserat på systemkomplexiteten, inte på antal användare.',
      },
    ],
  },
  {
    id: '6',
    title: 'Automatiserat arbetsflöde',
    slug: 'arbetsflode',
    description: 'Automatisera repetitiva arbetsuppgifter och processer för att spara tid och minska fel',
    priceRange: '60k-150k',
    minPrice: 60000,
    maxPrice: 150000,
    category: 'medium',
    icon: 'Zap',
    problem: 'Du och ditt team gör samma sak varje dag — kopiera data från ett system till ett annat, uppdatera PDF:er, skicka notifikationer. Det tar tid, är felbenäget och lägger värde. Du skulle kunna fokusera på viktiga saker istället.',
    solution: 'Vi bygger automatiserade arbetsflöden som tar hand om repetitiva uppgifter. Data flutar automatiskt mellan dina system. Notifikationer skickas utan manuellt arbete. Processer som tog 30 minuter tar nu sekunder.',
    effects: [
      'Spara 5-20 timmar per vecka på repetitiv hantering',
      'Drastisk minskning av manuella fel',
      'Teamet kan fokusera på värdesskapande arbete',
      'Bättre överblick med automatisk loggning av processer',
    ],
    problems: [
      'Många manuella, repetitiva uppgifter',
      'Högt fehlertal från manuell hantering',
      'Personal slösar tid på icke-värdesskapande arbete',
      'Svårt att skala verksamheten',
    ],
    audience: 'Alla företag med repetitiva processer, logistikföretag, e-handelsföretag',
    features: [
      'Workflow-designer',
      'API-integreringar',
      'Datamappning',
      'Felhantering och loggning',
      'Schemalagd körning',
    ],
    faqItems: [
      {
        question: 'Vilka system kan vi koppla ihop?',
        answer: 'Vi kan integrera med de flesta företagssystem — webshops, ekonomisystem, CRM, lagersystem, e-posttjänster m.m.',
      },
      {
        question: 'Kan arbetsflöden köras på schemat?',
        answer: 'Ja, vi kan köra arbetsflöden vid specifika tider varje dag eller vecka, eller utlösa dem av händelser i dina system.',
      },
      {
        question: 'Vad händer om något går fel?',
        answer: 'Systemet loggar alla körningar och kan skicka alerter vid fel. Du får full insyn i vad som hände och kan undersöka problemet.',
      },
      {
        question: 'Kan vi ändra arbetsflödet senare?',
        answer: 'Ja, alla arbetsflöden kan justeras utan att behöva skriva ny kod. Vi kan hjälpa dig göra ändringar eller du kan göra dem själv i gränssnittet.',
      },
    ],
  },

  // 150k-350k kr range
  {
    id: '7',
    title: 'AI-stödd kundservice',
    slug: 'ai-kundservice',
    description: 'En intelligent chatbot eller AI-assistent som hanterar kundfrågorna automatiskt',
    priceRange: '150k-350k',
    minPrice: 150000,
    maxPrice: 350000,
    category: 'large',
    icon: 'Bot',
    problem: 'Din kundservice besvarar samma frågor om och om igen. Många frågor är helt enkla — returpolicy, leveranstid, orderhistorik. Du kan inte erbjuda 24/7-support och kostnaden för personal är hög i relation till värdet.',
    solution: 'Vi bygger en AI-assistent som är tränad på dina FAQ:er, kundinformation och tidigare kundsamtal. Den besvarar enkla frågor direkt via chat, och handlar över komplexa ärenden till ditt team.',
    effects: [
      '80% av enkla frågor hanteras automatiskt',
      '24/7-support utan att anställa nattväxel',
      'Snabbare svar för kunderna — bättre nöjdhet',
      'Ditt team fokuserar på komplexa ärenden',
    ],
    problems: [
      'Kundservice tar för mycket tid och resurser',
      'Många enkla frågor som skulle kunna besvaras automatiskt',
      'Svårt att erbjuda 24/7-support',
      'Höga kostnader för personlig support',
    ],
    audience: 'E-handelsföretag, SaaS-företag, resor och hotell, finansiella tjänster',
    features: [
      'NLP-powered chatbot',
      'Integration med befintliga system',
      'Träning på dina FAQ:er',
      'Hantering av komplexa frågor',
      'Analytics och insikter',
    ],
    faqItems: [
      {
        question: 'Vilka frågor kan AI:n svara på?',
        answer: 'Vi tränar AI:n på dina FAQ:er, returpolicy, priser och andra vanliga frågor. Den kan även kolla orderhistorik och ge personaliserade svar.',
      },
      {
        question: 'Vad händer med komplicerade ärenden?',
        answer: 'AI:n vet när en fråga är för komplex och handlar över den till ditt team. Då har kunden redan givit kontextinformation.',
      },
      {
        question: 'Hur tränas AI:n på vår data?',
        answer: 'Vi använder din befintliga FAQ, kunddokumentation och gamla samtal för att träna modellen. Processen tar 2-3 veckor.',
      },
      {
        question: 'Kan vi se hur AI:n presterar?',
        answer: 'Ja, vi ger dig en dashboard med statistik — hur många frågor AI:n svarat på, hur nöjda kunder är och vilka frågor som måste eskaleras.',
      },
    ],
  },
  {
    id: '8',
    title: 'Nytt digitalt erbjudande / SaaS',
    slug: 'saas-produkt',
    description: 'En webbaserad SaaS-produkt för att lösa ett specifikt problem för en nischmarknad',
    priceRange: '150k-350k',
    minPrice: 150000,
    maxPrice: 350000,
    category: 'large',
    icon: 'Rocket',
    problem: 'Du har en tjänstebuss idag men vill skapa återkommande intäktskällor. Du kan inte skala tjänstebussen vidare — tiden är begränsad. Du behöver en produkt som kan säljas till många kunder utan att du jobbar själv.',
    solution: 'Vi hjälper dig konceptualisera, bygga och lansera en SaaS-produkt. Det är en webbaserad tjänst som dina kunder prenumererar på. Multi-tenant arkitektur gör att tusenden kunder kan använda samma plattform samtidigt.',
    effects: [
      'Återkommande intäkter istället för engångsprojekt',
      'Obegränsad skalning utan att anställa proportionerligt',
      'Kan lanseras på national eller global marknad',
      'Högre marginal än tjänstebuss',
    ],
    problems: [
      'Vill skapa återkommande intäktskällor',
      'Traditionell tjänstebuss skalas inte',
      'Behöver skalbar affärsmodell',
      'Vill nå national eller global marknad',
    ],
    audience: 'Nystartade företag, befintliga företag vill diversifiera',
    features: [
      'Multi-tenant arkitektur',
      'Betalningsintegrering',
      'Användarhantering',
      'Analytics och reporting',
      'API för integreringar',
    ],
    faqItems: [
      {
        question: 'Vilka prissättningsmodeller stöder ni?',
        answer: 'Vi kan bygga SaaS-produkter med vilken prissättningsmodell du vill — månatlig prenumeration, användarbebaserad, feature-baserad, e.tc. Vi integrerar betalningslösningar också.',
      },
      {
        question: 'Behöver vi redan ha idén helt klart?',
        answer: 'Nej. Vi startar med ett blueprint-möte där vi diskuterar din vision och behov. Vi hjälper dig dokumentera idén innan vi börjar bygga.',
      },
      {
        question: 'Hur säkerställer vi att produkten är tillräckligt bra?',
        answer: 'Vi bygger en MVP först — en minimal version som du kan testa med tidiga användare. Du får feedback innan vi bygger den fullständiga produkten.',
      },
      {
        question: 'Vad händer efter lansering?',
        answer: 'Det ingår inte i bygget, men du kan välja ett förvaltningspaket hos oss för drift, support och vidareutveckling efter lansering.',
      },
    ],
  },
  {
    id: '9',
    title: 'Komplett plattform',
    slug: 'komplett-plattform',
    description: 'En omfattande plattform som integrerar flera verktyg för att hantera hela din verksamhet',
    priceRange: '150k-350k',
    minPrice: 150000,
    maxPrice: 350000,
    category: 'large',
    icon: 'Globe',
    problem: 'Du använder 5-10 olika SaaS-tjänster för att driva din verksamhet. De kommunicerar inte med varandra. Data dupliceras överallt. Du spenderar pengar på många system och timmar på att hålla dem synkade.',
    solution: 'Vi bygger en skräddarsydd plattform som integrerar alla dina processer på ett ställe. Kundinfo, projekt, ekonomi, lager, marknadsföring — allt i ett system utformat för din verksamhet.',
    effects: [
      'Spara 30-50% på SaaS-kostnader',
      'Hel översikt utan att hoppa mellan system',
      'Snabbare arbetsflöden med integrerad data',
      'Custom-built för din bransch och arbetsprocess',
    ],
    problems: [
      'Du behöver många olika verktyg och tjänster',
      'Integrationer mellan system är komplexa',
      'Svårt att få enhetlig data och arbetsgång',
      'Höga utgifter för olika SaaS-tjänster',
    ],
    audience: 'Växande företag, bransch-specifika verksamheter, företag med komplexe behov',
    features: [
      'Integrerad CRM, projekt och tidrapportering',
      'Anpassningsbara workflows',
      'Robust reporting och analytics',
      'API och webhooks',
      'Multi-user och rollbaserad åtkomst',
    ],
    faqItems: [
      {
        question: 'Hur vet vi vad plattformen ska innehålla?',
        answer: 'Vi startar med blueprint-möten där du visar hur du jobbar idag. Vi kartlägger alla processer och bygger sedan en plattform som passar din verksamhet exakt.',
      },
      {
        question: 'Kan vi migrera vår befintliga data?',
        answer: 'Ja. Vi kan importera data från dina nuvarande system så att du har allt på ett ställe från dag ett.',
      },
      {
        question: 'Vad händer om vi behöver nya funktioner senare?',
        answer: 'Plattformen är designad för att växa med dig. Du kan välja ett förvaltningspaket där vi kontinuerligt lägger till nya features.',
      },
      {
        question: 'Blir det väldigt komplicerat?',
        answer: 'Nej. Vi fokuserar på att göra den enkel att använda. Bara dina team använder den — vi bygger ett gränssnitt de förstår direkt.',
      },
    ],
  },
];

export const ideasByCategory = {
  quick: ideas.filter((idea) => idea.category === 'quick'),
  medium: ideas.filter((idea) => idea.category === 'medium'),
  large: ideas.filter((idea) => idea.category === 'large'),
};

export const getIdeaBySlug = (slug: string): Idea | undefined => {
  return ideas.find((idea) => idea.slug === slug);
};

export const getIdeaById = (id: string): Idea | undefined => {
  return ideas.find((idea) => idea.id === id);
};
