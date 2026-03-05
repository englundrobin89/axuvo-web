export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  shortBio: string; // 1-2 sentences for article cards
  fullBio: string[]; // Paragraphs for profile page
  expertise: string[];
  linkedin?: string;
  email?: string;
}

export const authors: Author[] = [
  {
    id: 'robin-englund',
    name: 'Robin Englund',
    slug: 'robin-englund',
    role: 'Co-founder & CTO, Axuvo',
    shortBio:
      'Robin är medgrundare och CTO på Axuvo. Med bakgrund som teknisk ledare i flera bolag hjälper han företag att fatta rätt teknikbeslut och bygga digitala lösningar som håller.',
    fullBio: [
      'Robin Englund är medgrundare och CTO på Axuvo, där han kombinerar tekniskt ledarskap med affärsförståelse för att hjälpa företag att accelerera digitalt.',
      'Med erfarenhet som CTO och teknisk ledare i flera bolag har Robin sett vad som skiljer lyckade digitaliseringsprojekt från misslyckade. Det handlar sällan om tekniken i sig — utan om att fatta rätt beslut vid rätt tillfälle, bygga med kvalitet från dag ett och ha en teknisk riktning som håller långsiktigt.',
      'På Axuvo ansvarar Robin för den tekniska visionen och CTO as a Service-erbjudandet. Han leder Build Studio-projekt från blueprint till leverans och hjälper kunder som saknar en teknisk ledare att navigera allt från arkitekturbeslut till leverantörsval.',
      'Robin brinner för Secure by Design, pragmatisk arkitektur och att göra komplex teknik begriplig för beslutsfattare. Han tror på att bygga saker som faktiskt förändrar spelplanen — inte teknik för teknikens skull.',
    ],
    expertise: [
      'Teknisk ledning & CTO-rollen',
      'Systemarkitektur & Secure by Design',
      'Digital transformation',
      'AI-strategi',
      'Fullstack-utveckling',
    ],
    linkedin: 'https://www.linkedin.com/in/robinenglund/',
    email: 'robin@axuvo.se',
  },
  {
    id: 'david-jurkiewicz',
    name: 'David Jurkiewicz',
    slug: 'david-jurkiewicz',
    role: 'Co-founder & Digital Strategist, Axuvo',
    shortBio:
      'David är medgrundare på Axuvo med över 10 års erfarenhet inom e-handel, digital produktutveckling och tech-driven affärsutveckling. Han har byggt, drivit och skalat digitala plattformar i flera branscher.',
    fullBio: [
      'David Jurkiewicz är medgrundare på Axuvo och en kreativ, driftig och teknisk profil med över 10 års erfarenhet inom e-handel, digital produktutveckling och tech-driven affärsutveckling.',
      'David har byggt, drivit och skalat digitala plattformar, appar och system inom sharing economy och retail. Han kombinerar teknisk förståelse med affärsmässig helhetssyn — en unik kombination som ger honom förmågan att se möjligheter där teknik och affär möts.',
      'Tidigare har David arbetat som IT-chef på Kakelgiganten där han ansvarade för e-handel, lagerdrift och systemintegration. Han har även grundat och drivit MySea (boatsharing), LetCap (PropTech) och Logotypfabriken (webbyrå), vilket ger honom en bred erfarenhet av att bygga digitala produkter från grunden.',
      'David har djup kompetens inom e-handelsplattformar som Shopify och WooCommerce, digital marknadsföring via Google Ads, Meta Ads och SEO, samt datadriven affärsutveckling. På Axuvo ansvarar han för affärsutveckling, digital strategi och att hjälpa kunder att hitta rätt väg framåt.',
    ],
    expertise: [
      'E-handel & digitala plattformar',
      'Digital marknadsföring & SEO',
      'Affärsutveckling & produktstrategi',
      'Shopify, WooCommerce & CMS',
      'Datadriven tillväxt',
    ],
    linkedin: 'https://se.linkedin.com/in/david-jurkiewicz',
    email: 'david@axuvo.se',
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
