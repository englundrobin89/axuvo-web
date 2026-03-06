import { NextRequest, NextResponse } from 'next/server';

export interface SuggestedFeature {
  name: string;
  description: string;
  included: boolean;
}

export interface EstimateResult {
  complexity: 'Enkel' | 'Medel' | 'Komplex' | 'Avancerad';
  priceRange: string;
  priceMin: number;
  priceMax: number;
  timelineWeeks: string;
  summary: string;
  features: string[];
  suggestedFeatures?: SuggestedFeature[];
  monthlyFrom: string;
  understanding: string;
  recommendations: string[];
  considerations: string[];
  question?: string;
}

// ─── AI-powered estimation via OpenRouter ───

const SYSTEM_PROMPT = `Du är Build Studio — Axuvos smarta prisuppskattningsverktyg. Axuvo är ett svenskt teknikbolag som bygger appar, system och plattformar åt företag.

DIN ROLL:
Du är kundens första kontakt med Axuvo. Du chattar med dem i realtid på axuvo.se/build-studio. Din uppgift är att:
1. Förstå vad kunden vill bygga genom en naturlig konversation
2. Föreslå vilka funktioner som bör ingå (kunden kan sen välja/avvälja via chips)
3. Ge en indikativ prisuppskattning
4. Leda kunden mot att boka ett gratis blueprint-möte

KONVERSATIONSSTIL:
Du är som en kunnig kompis som råkar vara jättebra på tech. Du pratar avslappnat men professionellt.
- Skriv 2-4 meningar, inte mer. Korta, kärnfulla svar.
- Ställ ALDRIG frågan "vilka funktioner vill du ha?" — det är ditt jobb att föreslå dem.
- Var nyfiken. Om kunden säger "en grym app" — fråga vad den ska göra, för vem, vilken bransch? Var specifik i dina frågor.
- Om kunden ger dig en idé, visa att du fattar genom att spegla tillbaka med DINA ord, inte deras.
- Referera till din konversationshistorik — upprepa aldrig samma fraser du redan sagt.

FLÖDET:
1. Kunden skriver sin idé → Du sammanfattar och föreslår funktioner
2. Kunden togglar funktioner (chips) → Kan lägga till egna, be om fler förslag
3. Kunden skriver mer → Du bygger vidare på konversationen, visar att du minns allt
4. Kunden bekräftar → Du ger prisuppskattning
5. Kunden kan boka blueprint-möte

SVAR — returnera ALLTID JSON:

Om du FÖRSTÅR vad kunden vill (de har gett dig en idé):
{
  "complexity": "Enkel" | "Medel" | "Komplex" | "Avancerad",
  "priceMin": number,
  "priceMax": number,
  "timelineWeeks": "X–Y",
  "summary": "3-5 meningar. Beskriv projektet, nyckelfunktioner, och varför det hamnar i denna prisklass.",
  "features": ["Feature 1", "Feature 2", ...max 6],
  "suggestedFeatures": [
    { "name": "Funktionsnamn", "description": "Kort (5-10 ord)", "included": true },
    { "name": "Valfri funktion", "description": "Kort", "included": false }
  ],
  "monthlyFrom": "3 900" | "3 900" | "9 900" | "15 900",
  "understanding": "DIN KONVERSATIONSTEXT TILL KUNDEN (se nedan)",
  "recommendations": ["Tip 1", "Tip 2", "Tip 3"],
  "considerations": ["Risk 1", "Risk 2"]
}

Om du INTE förstår (t.ex. "hej", "en app", "hjälp mig"):
{ "question": "En vänlig, specifik fråga som hjälper kunden berätta mer. T.ex. 'Kul att du vill bygga något! Berätta lite mer — vad ska appen/systemet göra och vem ska använda det?'" }

UNDERSTANDING-FÄLTET (det kunden ser i chatten):
- 2-4 meningar, direkt till kunden, som visar att du FÖRSTÅR deras idé
- Första meddelandet: Sammanfatta syftet, inte bara funktionerna. "Du vill ge dina gymmedlemmar en smidig digital upplevelse — köpa access, checka in med QR, och se sin träningshistorik."
- Uppföljningar: Bygg vidare, referera till vad ni redan pratat om, lyft in det nya. "Med bildanalys varje vecka ger du medlemmarna en anledning att öppna appen regelbundet — smart drag för retention."
- Var specifik när du är positiv, aldrig generiskt

suggestedFeatures: 8-10 st. 4-6 "included": true (kärnfunktioner), 2-4 "included": false (tillägg).

OM KUNDEN SKICKAR VALDA FUNKTIONER (selectedFeatures): Räkna om pris baserat på exakt de funktionerna.

Prisklasser:
- Enkel (25 000–60 000 kr): Enkla appar, landningssidor, bokningssystem. 2–4 v. Förvaltning 3 900 kr/mån.
- Medel (60 000–150 000 kr): Kundportaler, interna system, automation. 4–6 v. Förvaltning 3 900 kr/mån.
- Komplex (150 000–350 000 kr): AI-funktioner, SaaS, komplexa plattformar. 6–10 v. Förvaltning 9 900 kr/mån.
- Avancerad (350 000–600 000 kr): Marknadsplatser, AI-plattformar, enterprise. 10–16 v. Förvaltning 15 900 kr/mån.

Regler:
- Skriv på svenska, "du" inte "ni"
- Var realistisk med priser
- Variera ditt språk — upprepa aldrig samma fraser
- Om beskrivningen är vag men du kan gissa bransch/typ, GÖR EN UPPSKATTNING och gissa rimliga funktioner
- Om du absolut inte kan gissa, ställ EN specifik fråga (inte "berätta mer" utan "vad ska appen göra?")`;

interface ConversationMessage {
  role: 'user' | 'ai';
  content: string;
}

async function estimateWithAI(description: string, clarification?: string, history?: ConversationMessage[], selectedFeatures?: string[], previouslySelectedFeatures?: string[]): Promise<EstimateResult | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('OPENROUTER_API_KEY is not set!');
    return null;
  }

  // Build messages array with conversation history
  const messages: { role: string; content: string }[] = [
    { role: 'system', content: SYSTEM_PROMPT },
  ];

  if (history && history.length > 0) {
    // Include conversation history so AI sees context
    for (const msg of history) {
      messages.push({
        role: msg.role === 'ai' ? 'assistant' : 'user',
        content: msg.content,
      });
    }
    // Build clarification with feature context
    let clarificationContent = clarification || '';
    if (previouslySelectedFeatures && previouslySelectedFeatures.length > 0) {
      clarificationContent = `${clarificationContent}\n\n[Kontext: Kunden har hittills valt dessa funktioner: ${previouslySelectedFeatures.join(', ')}. Ta hänsyn till dessa val i din nya sammanfattning — visa att du förstår HELA bilden, inte bara det senaste meddelandet.]`;
    }
    if (clarificationContent) {
      messages.push({ role: 'user', content: clarificationContent });
    }
  } else if (selectedFeatures && selectedFeatures.length > 0) {
    // Re-estimate with selected features
    messages.push({ role: 'user', content: `Kundens beskrivning:\n\n"${description}"\n\nKunden har valt följande funktioner (selectedFeatures): ${selectedFeatures.join(', ')}\n\nRäkna om pris, komplexitet och tidslinje baserat på exakt dessa funktioner.` });
  } else {
    messages.push({ role: 'user', content: `Kundens beskrivning:\n\n"${description}"` });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://axuvo.se',
        'X-Title': 'Axuvo Prisuppskattning',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-haiku',
        messages,
        temperature: 0.3,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenRouter API error (${response.status}):`, errorText);
      return null;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      console.error('OpenRouter: No content in response', JSON.stringify(data).slice(0, 500));
      return null;
    }

    const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(jsonStr);

    // If AI needs to ask a clarifying question
    if (parsed.question && !parsed.complexity) {
      return {
        question: parsed.question,
      } as unknown as EstimateResult;
    }

    const validComplexities = ['Enkel', 'Medel', 'Komplex', 'Avancerad'] as const;
    const complexity = validComplexities.includes(parsed.complexity) ? parsed.complexity : 'Medel';

    const priceMin = typeof parsed.priceMin === 'number' ? parsed.priceMin : 60000;
    const priceMax = typeof parsed.priceMax === 'number' ? parsed.priceMax : 150000;

    // Parse suggestedFeatures
    let suggestedFeatures: SuggestedFeature[] | undefined;
    if (Array.isArray(parsed.suggestedFeatures)) {
      suggestedFeatures = parsed.suggestedFeatures
        .filter((f: Record<string, unknown>) => f && typeof f.name === 'string')
        .map((f: Record<string, unknown>) => ({
          name: f.name as string,
          description: (f.description as string) || '',
          included: f.included === true,
        }))
        .slice(0, 10);
    }

    return {
      complexity,
      priceRange: `${(priceMin / 1000).toFixed(0)} 000 – ${(priceMax / 1000).toFixed(0)} 000 kr`,
      priceMin,
      priceMax,
      timelineWeeks: parsed.timelineWeeks || '4–6',
      summary: parsed.summary || 'Vi analyserade din beskrivning och bedömer projektet som ' + complexity.toLowerCase() + ' i komplexitet.',
      features: Array.isArray(parsed.features) ? parsed.features.slice(0, 6) : ['Webbapplikation', 'Responsiv design'],
      suggestedFeatures,
      monthlyFrom: `${parsed.monthlyFrom || '3 900'} kr/mån`,
      understanding: parsed.understanding || 'Vi har analyserat din beskrivning.',
      recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations.slice(0, 3) : [],
      considerations: Array.isArray(parsed.considerations) ? parsed.considerations.slice(0, 3) : [],
    };
  } catch (error) {
    console.error('estimateWithAI error:', error);
    return null;
  }
}

// ─── Keyword-based fallback ───

const complexitySignals: Record<string, { score: number; feature: string }> = {
  'inloggning': { score: 2, feature: 'Användarinloggning' },
  'login': { score: 2, feature: 'Användarinloggning' },
  'registrering': { score: 2, feature: 'Användarregistrering' },
  'användare': { score: 1, feature: 'Användarhantering' },
  'roller': { score: 2, feature: 'Rollbaserad behörighet' },
  'behörighet': { score: 2, feature: 'Rollbaserad behörighet' },
  'admin': { score: 2, feature: 'Adminpanel' },
  'adminpanel': { score: 2, feature: 'Adminpanel' },
  'medlems': { score: 2, feature: 'Medlemshantering' },
  'betalning': { score: 3, feature: 'Betalningsintegration' },
  'betala': { score: 3, feature: 'Betalningsintegration' },
  'stripe': { score: 3, feature: 'Betalningsintegration (Stripe)' },
  'klarna': { score: 3, feature: 'Betalningsintegration (Klarna)' },
  'swish': { score: 2, feature: 'Swish-betalning' },
  'faktura': { score: 2, feature: 'Fakturahantering' },
  'prenumeration': { score: 3, feature: 'Prenumerationshantering' },
  'abonnemang': { score: 3, feature: 'Abonnemangsmodell' },
  'subscription': { score: 3, feature: 'Prenumerationshantering' },
  'bokning': { score: 2, feature: 'Bokningssystem' },
  'boka': { score: 2, feature: 'Bokningssystem' },
  'kalender': { score: 2, feature: 'Kalenderintegration' },
  'schema': { score: 2, feature: 'Schemaläggning' },
  'tidsbok': { score: 2, feature: 'Tidsbokningssystem' },
  'e-handel': { score: 4, feature: 'E-handelsplattform' },
  'ehandel': { score: 4, feature: 'E-handelsplattform' },
  'webshop': { score: 4, feature: 'Webbshop' },
  'webbshop': { score: 4, feature: 'Webbshop' },
  'produkter': { score: 2, feature: 'Produktkatalog' },
  'varukorg': { score: 3, feature: 'Varukorg & checkout' },
  'lager': { score: 2, feature: 'Lagerhantering' },
  'marknadsplats': { score: 5, feature: 'Marknadsplats' },
  'notifiering': { score: 2, feature: 'Notifieringar' },
  'notiser': { score: 2, feature: 'Push-notiser' },
  'mail': { score: 1, feature: 'E-postutskick' },
  'e-post': { score: 1, feature: 'E-postutskick' },
  'sms': { score: 2, feature: 'SMS-notiser' },
  'chatt': { score: 3, feature: 'Chattfunktion' },
  'chat': { score: 3, feature: 'Chattfunktion' },
  'meddelanden': { score: 3, feature: 'Meddelandesystem' },
  'dashboard': { score: 2, feature: 'Dashboard med statistik' },
  'statistik': { score: 2, feature: 'Statistik & rapporter' },
  'rapport': { score: 2, feature: 'Rapportgenerering' },
  'analys': { score: 2, feature: 'Analysverktyg' },
  'data': { score: 1, feature: 'Datahantering' },
  'export': { score: 1, feature: 'Dataexport' },
  'api': { score: 3, feature: 'API-integration' },
  'integration': { score: 3, feature: 'Tredjepartsintegration' },
  'koppling': { score: 2, feature: 'Systemkoppling' },
  'crm': { score: 3, feature: 'CRM-integration' },
  'erp': { score: 4, feature: 'ERP-integration' },
  'zapier': { score: 2, feature: 'Zapier-koppling' },
  'ai': { score: 3, feature: 'AI-funktionalitet' },
  'automatisera': { score: 2, feature: 'Processautomatisering' },
  'automation': { score: 2, feature: 'Processautomatisering' },
  'arbetsflöde': { score: 2, feature: 'Automatiserade arbetsflöden' },
  'workflow': { score: 2, feature: 'Automatiserade arbetsflöden' },
  'maskininlärning': { score: 4, feature: 'Maskininlärning' },
  'rekommendation': { score: 3, feature: 'Rekommendationsmotor' },
  'app': { score: 2, feature: 'Webbapplikation' },
  'mobilapp': { score: 3, feature: 'Mobilanpassad app' },
  'mobil': { score: 1, feature: 'Mobilanpassning' },
  'responsiv': { score: 1, feature: 'Responsiv design' },
  'bilder': { score: 1, feature: 'Bildhantering' },
  'video': { score: 2, feature: 'Videohantering' },
  'uppladdning': { score: 1, feature: 'Filuppladdning' },
  'dokument': { score: 1, feature: 'Dokumenthantering' },
  'cms': { score: 2, feature: 'Innehållshantering (CMS)' },
  'portal': { score: 3, feature: 'Kundportal' },
  'kundportal': { score: 3, feature: 'Kundportal' },
  'intern': { score: 2, feature: 'Internt system' },
  'saas': { score: 5, feature: 'SaaS-arkitektur med multi-tenancy' },
  'plattform': { score: 4, feature: 'Plattformslösning' },
  'offert': { score: 2, feature: 'Offertgenerering' },
  'karta': { score: 2, feature: 'Kartintegration' },
  'gps': { score: 2, feature: 'Positionsbaserade tjänster' },
  'plats': { score: 1, feature: 'Platsbaserade funktioner' },
  'säkerhet': { score: 1, feature: 'Utökad säkerhet' },
  'gdpr': { score: 2, feature: 'GDPR-compliance' },
  'kryptering': { score: 2, feature: 'Datakryptering' },
  'tvåfaktor': { score: 2, feature: 'Tvåfaktorsautentisering' },
};

function fallbackEstimate(description: string): EstimateResult {
  const text = description.toLowerCase();
  let totalScore = 0;
  const detectedFeatures: Set<string> = new Set();

  for (const [keyword, { score, feature }] of Object.entries(complexitySignals)) {
    if (text.includes(keyword)) {
      totalScore += score;
      detectedFeatures.add(feature);
    }
  }

  const wordCount = description.trim().split(/\s+/).length;
  if (wordCount > 30) totalScore += 2;
  if (wordCount > 60) totalScore += 3;

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

  if (detectedFeatures.size === 0) {
    detectedFeatures.add('Webbapplikation');
    detectedFeatures.add('Responsiv design');
  }

  const featureList = Array.from(detectedFeatures).slice(0, 6);

  const summaries: Record<string, string> = {
    'Enkel': 'En enklare lösning med fokus på kärnfunktionalitet. Typiskt en webbapplikation med grundläggande funktioner som kan byggas snabbt och kostnadseffektivt.',
    'Medel': 'En lösning med flera integrerade funktioner som kräver extern koppling och affärslogik utöver grundläggande CRUD. Bedöms som Medel då den innebär flera sammankopplade delar.',
    'Komplex': 'En mer avancerad lösning med flera integrationer, komplex affärslogik och höga krav på skalbarhet. Kräver noggrann arkitektur och genomtänkt implementation.',
    'Avancerad': 'En storskalig lösning med hög komplexitet, multipla integrationer och avancerad funktionalitet. Kräver dedikerat team och iterativ utvecklingsprocess.',
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
    understanding: `Spännande idé! Utifrån det du beskriver ser jag ett projekt med ${featureList.length} kärnfunktioner — ${featureList.slice(0, 3).join(', ')}${featureList.length > 3 ? ' och mer' : ''}. Berätta gärna mer så kan jag ge en ännu bättre bild!`,
    recommendations: [
      'Börja med en MVP och iterera baserat på användarfeedback',
      'Planera för skalbarhet redan från start',
    ],
    considerations: [
      'Fundera på om du har befintliga system som ska integreras',
      'Tänk igenom vilka användare som ska ha tillgång till systemet',
    ],
  };
}

// ─── API Handler ───

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { description, clarification, history, selectedFeatures, previouslySelectedFeatures } = body;

    if (!description || typeof description !== 'string') {
      return NextResponse.json(
        { error: 'Beskriv vad du vill bygga.' },
        { status: 400 }
      );
    }

    if (description.trim().length < 3) {
      return NextResponse.json(
        { error: 'Ge oss lite mer detaljer så kan vi ge ett bättre prisförslag.' },
        { status: 400 }
      );
    }

    // Try AI first, fall back to keyword matching
    const aiResult = await estimateWithAI(description, clarification, history, selectedFeatures, previouslySelectedFeatures);
    const result = aiResult ?? fallbackEstimate(description);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Något gick fel. Försök igen.' },
      { status: 500 }
    );
  }
}
