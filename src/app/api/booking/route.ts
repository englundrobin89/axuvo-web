import { NextRequest, NextResponse } from 'next/server';
import { after } from 'next/server';

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

interface AnalysisResult {
  analysis: string;
  buildPrompt: string;
}

async function callOpus(prompt: string, maxTokens: number): Promise<string | null> {
  const apiKey = process.env.OPENROUTER_ANALYSIS_API_KEY;
  if (!apiKey) return null;

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
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.4,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      console.error('Opus API error:', response.status, await response.text());
      return null;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error('Opus call failed:', error);
    return null;
  }
}

async function generateAnalysis(payload: BookingPayload): Promise<AnalysisResult> {
  const conversationContext = payload.chatHistory?.length
    ? payload.chatHistory.map(m => `${m.role === 'user' ? 'Kund' : 'Axuvo AI'}: ${m.content}`).join('\n\n')
    : `Kund: ${payload.description}`;

  const contextBlock = `
<kundkonversation>
${conversationContext}
</kundkonversation>

<prisuppskattning>
Komplexitet: ${payload.estimate.complexity}
Prisintervall: ${payload.estimate.priceRange}
Tidslinje: ${payload.estimate.timelineWeeks} veckor
Valda funktioner: ${payload.estimate.features.join(', ')}
Sammanfattning: ${payload.estimate.summary}
Förvaltning: ${payload.estimate.monthlyFrom}
</prisuppskattning>

<kontaktinfo>
Namn: ${payload.namn}
Företag: ${payload.foretag || 'Ej angivet'}
Email: ${payload.email}
Telefon: ${payload.telefon}
</kontaktinfo>`;

  // Run both AI calls in parallel
  const [analysisHtml, buildPromptHtml] = await Promise.all([
    // Note 1: Project analysis
    callOpus(`Du är en senior teknisk arkitekt på Axuvo. Analysera denna kundkonversation och producera en intern projektanalys.

${contextBlock}

Svara med REN HTML (ingen markdown, inga code blocks). Använd dessa HTML-taggar för formatering:
- <h2> för sektionsrubriker
- <h3> för underrubriker
- <p> för text
- <ul>/<li> för listor
- <strong> för fetstil
- <table><tr><th><td> för tabeller
- <hr> för avdelare

Producera dessa sektioner:

<h2>📋 Projektsammanfattning</h2>
Vad kunden vill bygga, varför, och vem slutanvändarna är. 4-6 meningar. Var specifik.

<h2>🏗️ Teknisk specifikation</h2>
Gör en tabell med kolumnerna "Område" och "Rekommendation":
- Arkitektur (monolith/microservices/serverless)
- Frontend (ramverk, språk)
- Backend (ramverk, språk)
- Databas
- Hosting/infrastruktur
- Autentisering
- Tredjepartsintegrationer (lista alla som behövs)

<h2>✅ Funktionslista med prioritering</h2>
Tre separata listor:
- <h3>Must-have (MVP)</h3> — funktioner som KRÄVS för lansering
- <h3>Nice-to-have (v2)</h3> — kan vänta till efter lansering
- <h3>Framtida potential</h3> — skalning och vidareutveckling

<h2>⚠️ Risker och utmaningar</h2>
4-6 konkreta risker med kort förklaring för varje.

<h2>📅 Rekommendationer inför blueprint-möte</h2>
- Konkreta frågor att ställa kunden
- Saker att förbereda (skisser, wireframes, datamodeller)
- Förslag på mötesagenda

Skriv på svenska. Var konkret och specifik — detta läses av Axuvos utvecklarteam.`, 4000),

    // Note 2: Build prompt
    callOpus(`Du är en senior teknisk arkitekt. Baserat på denna kundkonversation, skriv en komplett BYGGPROMPT som en utvecklare kan ge till en AI-kodassistent (Claude, Cursor, etc.) för att börja bygga appen.

${contextBlock}

Svara med REN HTML (ingen markdown, inga code blocks). Formatera med <h2>, <h3>, <p>, <ul>/<li>, <pre><code> för kodexempel, <table> för tabeller.

Byggprompten ska vara PÅ ENGELSKA och innehålla:

<h2>🔧 Build Prompt</h2>
<p><em>Ready-to-use prompt for AI code assistant</em></p>

Sedan prompten inuti en tydlig <div style="background:#f5f5f5;padding:16px;border-radius:8px;border:1px solid #ddd;">:

1. Project overview and goals
2. Tech stack with specific versions
3. Database schema — tabeller, kolumner, relationer, constraints (visa som tabell eller kodblock)
4. API endpoints — method, path, description, request/response (visa som tabell)
5. Frontend component tree / structure
6. Authentication flow (steg för steg)
7. Complete feature list with acceptance criteria
8. File/folder structure
9. Environment variables needed
10. Deployment instructions

Var extremt detaljerad. En utvecklare ska kunna ta denna prompt och börja bygga direkt utan att behöva gissa.`, 6000),
  ]);

  return {
    analysis: analysisHtml || '<p><em>AI-analys kunde inte genereras</em></p>',
    buildPrompt: buildPromptHtml || '<p><em>Byggprompt kunde inte genereras</em></p>',
  };
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

async function createNote(htmlBody: string, title: string, contactId: string, dealId: string | null): Promise<void> {
  try {
    const associations = [
      {
        to: { id: contactId },
        types: [{
          associationCategory: 'HUBSPOT_DEFINED' as const,
          associationTypeId: 202,
        }],
      },
    ];

    if (dealId) {
      associations.push({
        to: { id: dealId },
        types: [{
          associationCategory: 'HUBSPOT_DEFINED' as const,
          associationTypeId: 214,
        }],
      });
    }

    const res = await fetch(`${HUBSPOT_BASE}/crm/v3/objects/notes`, {
      method: 'POST',
      headers: hubspotHeaders(),
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: htmlBody,
        },
        associations,
      }),
    });

    if (res.ok) {
      console.log(`HubSpot: Created note "${title}"`);
    } else {
      console.error(`HubSpot: Failed to create note "${title}"`, res.status, await res.text());
    }
  } catch (error) {
    console.error(`HubSpot: Note creation error "${title}"`, error);
  }
}

// ─── API Handler ───

async function processLeadInBackground(body: BookingPayload) {
  try {
    console.log(`Background: Processing lead for ${body.namn} (${body.email})`);

    // Run AI analysis and HubSpot contact creation in parallel
    const [analysisResult, contactId] = await Promise.all([
      generateAnalysis(body),
      createOrGetContact(body),
    ]);

    if (contactId) {
      // Create deal first
      const dealId = await createDeal(body, contactId);

      // Create two separate notes in parallel
      await Promise.all([
        createNote(analysisResult.analysis, 'Projektanalys', contactId, dealId),
        createNote(analysisResult.buildPrompt, 'Byggprompt', contactId, dealId),
      ]);

      console.log(`Background: Lead fully processed — contact ${contactId}, deal ${dealId}`);
    } else {
      console.error('Background: Could not create/find contact — skipping deal and note');
    }
  } catch (error) {
    console.error('Background: Lead processing failed', error);
  }
}

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

    // Process AI analysis + HubSpot AFTER response is sent to customer
    after(() => processLeadInBackground(body));

    // Return immediately — customer sees success instantly
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Något gick fel.' },
      { status: 500 }
    );
  }
}
