import { NextRequest, NextResponse } from 'next/server';

interface BookingPayload {
  namn: string;
  email: string;
  telefon: string;
  foretag?: string;
  description: string;
  estimate: {
    complexity: string;
    priceRange: string;
    priceMin?: number;
    priceMax?: number;
    timelineWeeks: string;
    features: string[];
    recommendations: string[];
    summary: string;
    monthlyFrom: string;
  };
  chatHistory?: { role: string; content: string }[];
}

// ─── AI Analysis with Claude Opus 4.6 ───

async function generateAnalysis(payload: BookingPayload): Promise<string> {
  const apiKey = process.env.OPENROUTER_ANALYSIS_API_KEY;
  if (!apiKey) return '[AI-analys kunde inte genereras — API-nyckel saknas]';

  const conversationContext = payload.chatHistory?.length
    ? payload.chatHistory.map(m => `${m.role === 'user' ? 'Kund' : 'Axuvo AI'}: ${m.content}`).join('\n\n')
    : `Kund: ${payload.description}`;

  const prompt = `Du är en senior teknisk arkitekt på Axuvo. Analysera följande kundkonversation och prisuppskattning och producera en fullständig intern analys.

## Kundkonversation
${conversationContext}

## Prisuppskattning
- Komplexitet: ${payload.estimate.complexity}
- Prisintervall: ${payload.estimate.priceRange}
- Tidslinje: ${payload.estimate.timelineWeeks} veckor
- Valda funktioner: ${payload.estimate.features.join(', ')}
- Sammanfattning: ${payload.estimate.summary}
- Förvaltning: ${payload.estimate.monthlyFrom}

## Kontaktinfo
- Namn: ${payload.namn}
- Företag: ${payload.foretag || 'Ej angivet'}
- Email: ${payload.email}
- Telefon: ${payload.telefon}

---

Producera en strukturerad analys med följande sektioner:

### 1. PROJEKTSAMMANFATTNING
Sammanfatta vad kunden vill bygga, varför, och vem slutanvändarna är. 3-5 meningar.

### 2. TEKNISK SPECIFIKATION
- Rekommenderad arkitektur (t.ex. monolith, microservices, serverless)
- Tech stack-förslag (frontend, backend, databas, hosting)
- Tredjepartsintegrationer som behövs
- Autentisering och säkerhetskrav

### 3. FUNKTIONSLISTA MED PRIORITERING
Dela upp i:
- **Must-have (MVP)**: Funktioner som krävs för lansering
- **Nice-to-have (v2)**: Funktioner som kan vänta till efter lansering
- **Framtida potential**: Saker att tänka på för skalning

### 4. RISKER OCH UTMANINGAR
Identifiera 3-5 potentiella risker eller utmaningar med projektet.

### 5. REKOMMENDATIONER INFÖR BLUEPRINT-MÖTE
Konkreta frågor att ställa kunden och saker att förbereda inför mötet.

### 6. BYGGPROMPT
Skriv en komplett, detaljerad prompt som en utvecklare kan använda med en AI-kodassistent (t.ex. Claude) för att börja bygga den här appen. Prompten ska inkludera:
- Projektbeskrivning och mål
- Tech stack
- Databasschema (tabeller och relationer)
- API-endpoints som behövs
- Komponentstruktur (frontend)
- Autentiseringsflöde
- Alla funktioner som ska implementeras

Prompten ska vara på engelska och redo att använda direkt.

Skriv analysen på svenska (förutom byggprompten som ska vara på engelska). Var konkret och specifik — detta är ett internt dokument för Axuvos team.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://axuvo.se',
        'X-Title': 'Axuvo Lead Analysis',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-opus-4-6',
        messages: [
          { role: 'user', content: prompt },
        ],
        temperature: 0.4,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      console.error('Analysis API error:', response.status, await response.text());
      return '[AI-analys kunde inte genereras — API-fel]';
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '[AI-analys kunde inte genereras — tomt svar]';
  } catch (error) {
    console.error('Analysis generation failed:', error);
    return '[AI-analys kunde inte genereras — nätverksfel]';
  }
}

// ─── HubSpot API helpers ───

const HUBSPOT_BASE = 'https://api.hubapi.com';

function hubspotHeaders() {
  return {
    'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  };
}

async function createOrGetContact(payload: BookingPayload): Promise<string | null> {
  const nameParts = payload.namn.trim().split(/\s+/);
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  try {
    // Try to create contact
    const res = await fetch(`${HUBSPOT_BASE}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: hubspotHeaders(),
      body: JSON.stringify({
        properties: {
          firstname,
          lastname,
          email: payload.email,
          phone: payload.telefon,
          company: payload.foretag || '',
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('HubSpot: Created contact', data.id);
      return data.id;
    }

    // 409 = contact already exists — search by email
    if (res.status === 409) {
      console.log('HubSpot: Contact exists, searching by email...');
      const searchRes = await fetch(`${HUBSPOT_BASE}/crm/v3/objects/contacts/search`, {
        method: 'POST',
        headers: hubspotHeaders(),
        body: JSON.stringify({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ',
              value: payload.email,
            }],
          }],
        }),
      });

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        if (searchData.results?.length > 0) {
          console.log('HubSpot: Found existing contact', searchData.results[0].id);
          return searchData.results[0].id;
        }
      }
    }

    console.error('HubSpot: Failed to create contact', res.status, await res.text());
    return null;
  } catch (error) {
    console.error('HubSpot: Contact creation error', error);
    return null;
  }
}

async function createDeal(payload: BookingPayload, contactId: string): Promise<string | null> {
  const dealName = `Smart Estimator — ${payload.foretag || payload.namn}`;

  try {
    const res = await fetch(`${HUBSPOT_BASE}/crm/v3/objects/deals`, {
      method: 'POST',
      headers: hubspotHeaders(),
      body: JSON.stringify({
        properties: {
          dealname: dealName,
          amount: payload.estimate.priceMin || 0,
          pipeline: 'default',
          dealstage: 'appointmentscheduled',
          description: `${payload.estimate.complexity} | ${payload.estimate.priceRange} | ${payload.estimate.timelineWeeks} veckor\n\nFunktioner: ${payload.estimate.features.join(', ')}\n\n${payload.estimate.summary}`,
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 3, // deal_to_contact
              },
            ],
          },
        ],
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('HubSpot: Created deal', data.id);
      return data.id;
    }

    console.error('HubSpot: Failed to create deal', res.status, await res.text());
    return null;
  } catch (error) {
    console.error('HubSpot: Deal creation error', error);
    return null;
  }
}

async function createNote(analysis: string, contactId: string, dealId: string | null): Promise<void> {
  try {
    const associations = [
      {
        to: { id: contactId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: 202, // note_to_contact
          },
        ],
      },
    ];

    if (dealId) {
      associations.push({
        to: { id: dealId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: 214, // note_to_deal
          },
        ],
      });
    }

    const res = await fetch(`${HUBSPOT_BASE}/crm/v3/objects/notes`, {
      method: 'POST',
      headers: hubspotHeaders(),
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: analysis,
        },
        associations,
      }),
    });

    if (res.ok) {
      console.log('HubSpot: Created note with AI analysis');
    } else {
      console.error('HubSpot: Failed to create note', res.status, await res.text());
    }
  } catch (error) {
    console.error('HubSpot: Note creation error', error);
  }
}

// ─── API Handler ───

export async function POST(request: NextRequest) {
  try {
    const body: BookingPayload = await request.json();
    const { namn, email } = body;

    if (!namn || !email) {
      return NextResponse.json(
        { error: 'Namn och email krävs.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ogiltig emailadress.' },
        { status: 400 }
      );
    }

    console.log(`=== NEW LEAD: ${namn} (${email}) ===`);

    // Run AI analysis and HubSpot contact creation in parallel
    const [analysis, contactId] = await Promise.all([
      generateAnalysis(body),
      createOrGetContact(body),
    ]);

    if (contactId) {
      // Create deal and note (deal first, then note with both associations)
      const dealId = await createDeal(body, contactId);
      await createNote(analysis, contactId, dealId);
    } else {
      console.error('HubSpot: Could not create/find contact — skipping deal and note');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Något gick fel.' },
      { status: 500 }
    );
  }
}
