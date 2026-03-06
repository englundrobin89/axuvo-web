import { NextRequest, NextResponse } from 'next/server';
import type { SuggestedFeature } from '@/app/api/estimate/route';

const SUGGEST_PROMPT = `Du är en erfaren teknisk projektledare. Kunden bygger ett projekt och har redan valt vissa funktioner. Nu vill de se FLER möjliga funktioner som kompletterar deras val.

Svara ENBART med en JSON-array av nya funktioner:
[
  { "name": "Funktionsnamn", "description": "Kort beskrivning (5-10 ord)", "included": false }
]

Regler:
- Returnera 4-6 NYA funktioner som INTE redan finns bland de valda eller borttagna
- Alla ska ha "included": false (de är förslag som kunden kan välja att lägga till)
- Tänk på vad som KOMPLETTERAR de redan valda funktionerna — föreslå saker som passar ihop med kundens nuvarande val
- Var specifik, inte generisk (t.ex. "Automatisk PDF-export" istället av "Exportfunktion")
- Skriv på svenska`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { description, selectedFeatures, deselectedFeatures } = body;

    if (!description) {
      return NextResponse.json({ error: 'Beskrivning saknas.' }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ features: [] });
    }

    const selectedList = Array.isArray(selectedFeatures) ? selectedFeatures.join(', ') : 'Inga';
    const deselectedList = Array.isArray(deselectedFeatures) && deselectedFeatures.length > 0
      ? deselectedFeatures.join(', ')
      : 'Inga';

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://axuvo.se',
        'X-Title': 'Axuvo Funktionsförslag',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-haiku',
        messages: [
          { role: 'system', content: SUGGEST_PROMPT },
          {
            role: 'user',
            content: `Projektbeskrivning: "${description}"\n\nFunktioner kunden HAR VALT: ${selectedList}\nFunktioner kunden HAR VALT BORT: ${deselectedList}\n\nFöreslå 4-6 NYA funktioner som kompletterar de valda funktionerna och inte redan finns i någon av listorna ovan.`,
          },
        ],
        temperature: 0.5,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ features: [] });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json({ features: [] });
    }

    const jsonStr = content.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(jsonStr);

    if (!Array.isArray(parsed)) {
      return NextResponse.json({ features: [] });
    }

    const features: SuggestedFeature[] = parsed
      .filter((f: Record<string, unknown>) => f && typeof f.name === 'string')
      .map((f: Record<string, unknown>) => ({
        name: f.name as string,
        description: (f.description as string) || '',
        included: false,
      }))
      .slice(0, 6);

    return NextResponse.json({ features });
  } catch {
    return NextResponse.json({ features: [] });
  }
}
