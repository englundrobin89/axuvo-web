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
  },
  {
    id: '3',
    title: 'Personlig app / MVP',
    slug: 'personlig-app-mvp',
    description: 'En skräddarsydd minimal viable product för att testa din affärsidé på marknaden',
    priceRange: '25k-60k',
    minPrice: 25000,
    maxPrice: 60000,
    category: 'quick',
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
  },
  {
    id: '5',
    title: 'Internt verksamhetssystem',
    slug: 'internt-verksamhetssystem',
    description: 'Ett system för att hantera din verksamhet internt med CRM, projekt och tidsrapportering',
    priceRange: '60k-150k',
    minPrice: 60000,
    maxPrice: 150000,
    category: 'medium',
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
  },
  {
    id: '6',
    title: 'Automatiserat arbetsflöde',
    slug: 'automatiserat-arbetsflode',
    description: 'Automatisera repetitiva arbetsuppgifter och processer för att spara tid och minska fel',
    priceRange: '60k-150k',
    minPrice: 60000,
    maxPrice: 150000,
    category: 'medium',
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
  },

  // 150k-350k kr range
  {
    id: '7',
    title: 'AI-stödd kundservice',
    slug: 'ai-studod-kundservice',
    description: 'En intelligent chatbot eller AI-assistent som hanterar kundfrågorna automatiskt',
    priceRange: '150k-350k',
    minPrice: 150000,
    maxPrice: 350000,
    category: 'large',
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
  },
  {
    id: '8',
    title: 'SaaS-produkt',
    slug: 'saas-produkt',
    description: 'En webbaserad SaaS-produkt för att lösa ett specifikt problem för en nischmarknad',
    priceRange: '150k-350k',
    minPrice: 150000,
    maxPrice: 350000,
    category: 'large',
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
