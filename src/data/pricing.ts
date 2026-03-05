export interface PricingTier {
  name: string;
  price: number;
  hours: string | number;
  hourlyRate: number;
  description?: string;
  features?: string[];
}

export interface PricingPackage {
  name: string;
  tiers: PricingTier[];
  description?: string;
}

export interface PricingData {
  packages: PricingPackage[];
}

export const pricingData: PricingData = {
  packages: [
    {
      name: 'Förvaltningspaket',
      description: 'Underhåll och support för dina system',
      tiers: [
        {
          name: 'Platform Core',
          price: 3900,
          hours: 0,
          hourlyRate: 1500,
          description: 'Grundläggande plattformsstöd',
        },
        {
          name: 'Growth Support',
          price: 9900,
          hours: 4,
          hourlyRate: 1350,
          description: 'Support med tillväxtfokus',
        },
        {
          name: 'Active Growth',
          price: 15900,
          hours: 8,
          hourlyRate: 1200,
          description: 'Aktivt stöd för tillväxt',
        },
        {
          name: 'Fractional Team',
          price: 34900,
          hours: 20,
          hourlyRate: 1150,
          description: 'Dedikerat team på deltid',
        },
      ],
    },
    {
      name: 'CTO as a Service',
      description: 'Teknisk ledning och strategi',
      tiers: [
        {
          name: 'Advisor',
          price: 14500,
          hours: '~1 dag/mån',
          hourlyRate: 0,
          description: 'Rådgivning och vägledning',
        },
        {
          name: 'Strategist',
          price: 38500,
          hours: '~1 dag/vecka',
          hourlyRate: 0,
          description: 'Strategisk ledning och planering',
        },
        {
          name: 'Transformer',
          price: 75000,
          hours: '~2-3 dagar/vecka',
          hourlyRate: 0,
          description: 'Omfattande transformation och ledning',
          features: ['Pris mellan 75000-95000 kr/månad'],
        },
      ],
    },
    {
      name: 'Specialiststöd',
      description: 'Specialiserad experthjälp',
      tiers: [
        {
          name: 'Stundtaxa',
          price: 1300,
          hours: 'löpande',
          hourlyRate: 1600,
          description: 'Flexibelt stöd per timme',
          features: [
            'Pris mellan 1300-1600 kr/h beroende på specialitet',
            'Ingen bindningstid',
            'Skickliga utvecklare när du behöver dem',
          ],
        },
      ],
    },
  ],
};
