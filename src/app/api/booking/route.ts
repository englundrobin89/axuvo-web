import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { namn, email, telefon, description, estimate } = body;

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

    // Log the lead (replace with email sending, CRM integration, etc.)
    console.log('=== NEW BOOKING LEAD ===');
    console.log('Name:', namn);
    console.log('Email:', email);
    console.log('Phone:', telefon || 'N/A');
    console.log('Description:', description);
    console.log('Estimate:', JSON.stringify(estimate, null, 2));
    console.log('Timestamp:', new Date().toISOString());
    console.log('========================');

    // TODO: Send email notification to hej@axuvo.se
    // TODO: Store in CRM / database
    // TODO: Send confirmation email to customer

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Något gick fel.' },
      { status: 500 }
    );
  }
}
