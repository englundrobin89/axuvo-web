import { NextRequest, NextResponse } from 'next/server';

interface EstimateResult {
  complexity: 'Enkel' | 'Medel' | 'Komplex' | 'Avancerad';
  priceRange: string;
  priceMin: number;
  priceMax: number;
  timelineWeeks: string;
  summary: string;
  features: string[];
  monthlyFrom: string;
}

// Keyword scoring system for complexity estimation
const complexitySignals: Record<string, { score: number; feature: string }> = {
  // Authentication & users
  'inloggning': { score: 2, feature: 'Användarinloggning' },
  'login': { score: 2, feature: 'Användarinloggning' },
  'registrering': { score: 2, feature: 'Användarregistrering' },
  'användare': { score: 1, feature: 'Användarhantering' },
  'roller': { score: 2, feature: 'Rollbaserad behörighet' },
  'behörighet': { score: 2, feature: 'Rollbaserad behörighet' },
  'admin': { score: 2, feature: 'Adminpanel' },
  'adminpanel': { score: 2, feature: 'Adminpanel' },
  'medlems': { score: 2, feature: 'Medlemshantering' },

  // Payments & billing
  'betalning': { score: 3, feature: 'Betalningsintegration' },
  'betala': { score: 3, feature: 'Betalningsintegration' },
  'stripe': { score: 3, feature: 'Betalningsintegration (Stripe)' },
  'klarna': { score: 3, feature: 'Betalningsintegration (Klarna)' },
  'swish': { score: 2, feature: 'Swish-betalning' },
  'faktura': { score: 2, feature: 'Fakturahantering' },
  'prenumeration': { score: 3, feature: 'Prenumerationshantering' },
  'abonnemang': { score: 3, feature: 'Abonnemangsmodell' },
  'subscription': { score: 3, feature: 'Prenumerationshantering' },

  // Booking & scheduling
  'bokning': { score: 2, feature: 'Bokningssystem' },
  'boka': { score: 2, feature: 'Bokningssystem' },
  'kalender': { score: 2, feature: 'Kalenderintegration' },
  'schema': { score: 2, feature: 'Schemaläggning' },
  'tidsbok': { score: 2, feature: 'Tidsbokningssystem' },

  // E-commerce
  'e-handel': { score: 4, feature: 'E-handelsplattform' },
  'ehandel': { score: 4, feature: 'E-handelsplattform' },
  'webshop': { score: 4, feature: 'Webbshop' },
  'webbshop': { score: 4, feature: 'Webbshop' },
  'produkter': { score: 2, feature: 'Produktkatalog' },
  'varukorg': { score: 3, feature: 'Varukorg & checkout' },
  'lager': { score: 2, feature: 'Lagerhantering' },
  'marknadsplats': { score: 5, feature: 'Marknadsplats' },

  // Communication
  'notifiering': { score: 2, feature: 'Notifieringar' },
  'notiser': { score: 2, feature: 'Push-notiser' },
  'mail': { score: 1, feature: 'E-postutskick' },
  'e-post': { score: 1, feature: 'E-postutskick' },
  'sms': { score: 2, feature: 'SMS-notiser' },
  'chatt': { score: 3, feature: 'Chattfunktion' },
  'chat': { score: 3, feature: 'Chattfunktion' },
  'meddelanden': { score: 3, feature: 'Meddelandesystem' },

  // Data & analytics
  'dashboard': { score: 2, feature: 'Dashboard med statistik' },
  'statistik': { score: 2, feature: 'Statistik & rapporter' },
  'rapport': { score: 2, feature: 'Rapportgenerering' },
  'analys': { score: 2, feature: 'Analysverktyg' },
  'data': { score: 1, feature: 'Datahantering' },
  'export': { score: 1, feature: 'Dataexport' },

  // Integrations
  'api': { score: 3, feature: 'API-integration' },
  'integration': { score: 3, feature: 'Tredjepartsintegration' },
  'koppling': { score: 2, feature: 'Systemkoppling' },
  'crm': { score: 3, feature: 'CRM-integration' },
  'erp': { score: 4, feature: 'ERP-integration' },
  'zapier': { score: 2, feature: 'Zapier-koppling' },

  // AI & automation
  'ai': { score: 3, feature: 'AI-funktionalitet' },
  'automatisera': { score: 2, feature: 'Processautomatisering' },
  'automation': { score: 2, feature: 'Processautomatisering' },
  'arbetsflöde': { score: 2, feature: 'Automatiserade arbetsflöden' },
  'workflow': { score: 2, feature: 'Automatiserade arbetsflöden' },
  'maskininlärning': { score: 4, feature: 'Maskininlärning' },
  'rekommendation': { score: 3, feature: 'Rekommendationsmotor' },

  // Mobile & platform
  'app': { score: 2, feature: 'Webbapplikation' },
  'mobilapp': { score: 3, feature: 'Mobilanpassad app' },
  'mobil': { score: 1, feature: 'Mobilanpassning' },
  'responsiv': { score: 1, feature: 'Responsiv design' },

  // Content & media
  'bilder': { score: 1, feature: 'Bildhantering' },
  'video': { score: 2, feature: 'Videohantering' },
  'uppladdning': { score: 1, feature: 'Filuppladdning' },
  'dokument': { score: 1, feature: 'Dokumenthantering' },
  'cms': { score: 2, feature: 'Innehållshantering (CMS)' },

  // Type indicators
  'portal': { score: 3, feature: 'Kundportal' },
  'kundportal': { score: 3, feature: 'Kundportal' },
  'intern': { score: 2, feature: 'Internt system' },
  'saas': { score: 5, feature: 'SaaS-arkitektur med multi-tenancy' },
  'plattform': { score: 4, feature: 'Plattformslösning' },
  'offert': { score: 2, feature: 'Offertgenerering' },

  // Maps & location
  'karta': { score: 2, feature: 'Kartintegration' },
  'gps': { score: 2, feature: 'Positionsbaserade tjänster' },
  'plats': { score: 1, feature: 'Platsbaserade funktioner' },

  // Security
  'säkerhet': { score: 1, feature: 'Utökad säkerhet' },
  'gdpr': { score: 2, feature: 'GDPR-compliance' },
  'kryptering': { score: 2, feature: 'Datakryptering' },
  'tvåfaktor': { score: 2, feature: 'Tvåfaktorsautentisering' },
};

function analyzeDescription(description: string): EstimateResult {
  const text = description.toLowerCase();
  let totalScore = 0;
  const detectedFeatures: Set<string> = new Set();

  // Check each keyword
  for (const [keyword, { score, feature }] of Object.entries(complexitySignals)) {
    if (text.includes(keyword)) {
      totalScore += score;
      detectedFeatures.add(feature);
    }
  }

  // Bonus for long, detailed descriptions (more complex projects tend to have longer descriptions)
  const wordCount = description.trim().split(/\s+/).length;
  if (wordCount > 30) totalScore += 2;
  if (wordCount > 60) totalScore += 3;

  // Determine complexity tier
  let complexity: EstimateResult['complexity'];
  let priceMin: number;
  let priceMax: number;
  let timelineWeeks: string;
  let monthlyFrom: string;

  if (totalScore <= 4) {
    complexity = 'Enkel';
    priceMin = 25000;
    priceMax = 60000;
    timelineWeeks = '2–4';
    monthlyFrom = '3 900';
  } else if (totalScore <= 10) {
    complexity = 'Medel';
    priceMin = 60000;
    priceMax = 150000;
    timelineWeeks = '4–6';
    monthlyFrom = '3 900';
  } else if (totalScore <= 18) {
    complexity = 'Komplex';
    priceMin = 150000;
    priceMax = 350000;
    timelineWeeks = '6–10';
    monthlyFrom = '9 900';
  } else {
    complexity = 'Avancerad';
    priceMin = 350000;
    priceMax = 600000;
    timelineWeeks = '10–16';
    monthlyFrom = '15 900';
  }

  // If very few features detected, add some defaults
  if (detectedFeatures.size === 0) {
    detectedFeatures.add('Webbapplikation');
    detectedFeatures.add('Responsiv design');
  }

  // Generate summary based on complexity
  const featureList = Array.from(detectedFeatures).slice(0, 6);

  const summaries: Record<string, string> = {
    'Enkel': `En enklare lösning med fokus på kärnfunktionalitet. Typiskt en webbapplikation med grundläggande funktioner som kan byggas snabbt och kostnadseffektivt.`,
    'Medel': `En lösning med flera integrerade funktioner som kräver extern koppling och affärslogik utöver grundläggande CRUD. Bedöms som Medel då den innebär flera sammankopplade delar.`,
    'Komplex': `En mer avancerad lösning med flera integrationer, komplex affärslogik och höga krav på skalbarhet. Kräver noggrann arkitektur och genomtänkt implementation.`,
    'Avancerad': `En storskalig lösning med hög komplexitet, multipla integrationer och avancerad funktionalitet. Kräver dedikerat team och iterativ utvecklingsprocess.`,
  };

  return {
    complexity,
    priceRange: `${(priceMin / 1000).toFixed(0)} 000 – ${(priceMax / 1000).toFixed(0)} 000 kr`,
    priceMin,
    priceMax,
    timelineWeeks,
    summary: summaries[complexity],
    features: featureList,
    monthlyFrom: `${monthlyFrom} kr/mån`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { description } = body;

    if (!description || typeof description !== 'string') {
      return NextResponse.json(
        { error: 'Beskriv vad du vill bygga.' },
        { status: 400 }
      );
    }

    if (description.trim().length < 5) {
      return NextResponse.json(
        { error: 'Ge oss lite mer detaljer så kan vi ge ett bättre prisförslag.' },
        { status: 400 }
      );
    }

    // Small delay to feel more "thoughtful"
    await new Promise((resolve) => setTimeout(resolve, 800));

    const result = analyzeDescription(description);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Något gick fel. Försök igen.' },
      { status: 500 }
    );
  }
}
