import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CTO-paket — Välj rätt nivå för din organisation',
  description:
    'Tre paket för CTO as a Service från Axuvo. Advisor, Strategist och Transformer — välj nivå baserat på dina behov och budget.',
  keywords:
    'CTO paket, priser, CTO as a Service, teknisk ledning, Sverige',
  openGraph: {
    title: 'CTO-paket — Välj rätt nivå',
    description:
      'Advisor, Strategist eller Transformer. Tre nivåer av teknisk ledning för ditt företag.',
    type: 'website',
    url: 'https://axuvo.se/cto-as-a-service/paket',
  },
};

const ctoPricing = [
  {
    name: 'Advisor',
    price: '14 500 kr/mån',
    description: '~1 dag/månad',
    features: [
      'Strategisk rådgivning',
      'Teknikutvärdering',
      'Leverantörsöversyn',
      'Månatlig avstämning',
    ],
    highlighted: false,
  },
  {
    name: 'Strategist',
    price: '38 500 kr/mån',
    description: '~1 dag/vecka',
    features: [
      'Allt i Advisor',
      'Digital roadmap',
      'Teamledning',
      'Veckovisa sessioner',
    ],
    highlighted: true,
  },
  {
    name: 'Transformer',
    price: '75–95 k kr/mån',
    description: '~2–3 dagar/vecka',
    features: [
      'Allt i Strategist',
      'Operativt ansvar',
      'Hands-on ledarskap',
      'Förändringsledning',
    ],
    highlighted: false,
  },
];

interface PackageDetail {
  label: string;
  advisor: string | boolean;
  strategist: string | boolean;
  transformer: string | boolean;
}

const packageDetails: PackageDetail[] = [
  {
    label: 'Strategisk rådgivning',
    advisor: true,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Teknikutvärdering',
    advisor: true,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Leverantörshantering',
    advisor: true,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Digital roadmap',
    advisor: false,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Veckovisa möten',
    advisor: false,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Teamledning & mentorskap',
    advisor: false,
    strategist: true,
    transformer: true,
  },
  {
    label: 'Operativt ansvar',
    advisor: false,
    strategist: false,
    transformer: true,
  },
  {
    label: 'Hands-on arkitektur',
    advisor: false,
    strategist: false,
    transformer: true,
  },
  {
    label: 'Förändringsledning',
    advisor: false,
    strategist: false,
    transformer: true,
  },
  {
    label: 'Direktsamarbete med team',
    advisor: false,
    strategist: false,
    transformer: true,
  },
];

const ctoFaq = [
  {
    question: 'Vilken paket är bäst för oss?',
    answer:
      'Det beror på er situation. Advisor passar om ni redan har ledning men behöver ett par sparringsöron för stora beslut. Strategist passar om ni behöver riktning och digital plan. Transformer passar om ni behöver hands-on ledning och vill transformera organisationen.',
  },
  {
    question: 'Kan vi starta med Advisor och uppgradera senare?',
    answer:
      'Absolut. Många börjar med Advisor för att testa värdet, sedan uppgraderar de till Strategist när behovet växer. Det är helt flexibelt.',
  },
  {
    question: 'Inkluderar priserna moms?',
    answer:
      'Nej, priserna är exklusive moms (25%). Den läggs på vid fakturering enligt standard Svenska regler.',
  },
  {
    question: 'Är det långsiktiga kontrakt?',
    answer:
      'Nej. Du kan pausa eller avsluta när som helst. Vi förstår att behov förändras. Vi föredrar långsiktiga relationer — vi tjänar därför på att leverera verkligt värde.',
  },
  {
    question: 'Kan vi få en anpassad paket?',
    answer:
      'Ja, om dina behov är unika. Vi kan skapa en paket som passar exakt — mindre tid, specialfokus eller något annat. Kontakta oss för att diskutera.',
  },
  {
    question: 'Vad händer om vi behöver mer än 3 dagar/vecka?',
    answer:
      'Transformer är designad för ~2-3 dagar/vecka. För mer än det rekommenderar vi att diskutera - det kan vara att du behöver en heltidsanställd, eller att vi kan optimera engagemanget.',
  },
  {
    question: 'Kan CTO:n jobba med flera företag samtidigt?',
    answer:
      'Ja, Advisor och Strategist passar bra för flera engageman. Transformer är mer djupgående och kräver oft fokus på ett företag, men det kan diskuteras.',
  },
  {
    question: 'Vad är ersättningen för att testa?',
    answer:
      'Vi erbjuder ett gratis initialmöte på ~1 timme för att förstå era behov. Du får en uppfattning av vårt sätt att jobba. Sedan kan du starta med Advisor för att testa — eller vi kan diskutera andra alternativ.',
  },
];

export default function CTOPaket() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="CTO as a Service Paket"
        description="Tre paket för inhyrd CTO — Advisor, Strategist och Transformer"
        url="https://axuvo.se/cto-as-a-service/paket"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Hem',
            url: 'https://axuvo.se',
          },
          {
            name: 'CTO as a Service',
            url: 'https://axuvo.se/cto-as-a-service',
          },
          {
            name: 'Paket',
            url: 'https://axuvo.se/cto-as-a-service/paket',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="CTO as a Service"
        title="Välj rätt nivå av tekniskt ledarskap"
        subtitle="Tre paket anpassade för olika behov. Från strategisk rådgivning till fullständig operativ ledning. Flexibel, ingen långsiktig bindning."
        primaryCta={{
          text: 'Boka möte',
          href: '/kontakt',
        }}
        trustText="Transparent prissättning • Ingen setup-kostnad • Börja när som helst"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Pricing Table */}
      <ScrollReveal variant="fade-up">
        <PricingTable packages={ctoPricing} />
      </ScrollReveal>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Detailed Comparison */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up" className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Vad ingår i varje paket
            </h2>
            <p className="text-silver max-w-2xl">
              Se detaljerat vad som ingår i Advisor, Strategist och Transformer.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" className="overflow-x-auto">
            <div className="inline-block w-full min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-semibold">
                      Tjänst
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Advisor
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Strategist
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold">
                      Transformer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packageDetails.map((detail, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/2.5 transition-colors"
                    >
                      <td className="py-4 px-4 text-silver">{detail.label}</td>
                      <td className="text-center py-4 px-4">
                        {detail.advisor ? (
                          <CheckCircle className="w-5 h-5 text-mint mx-auto" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-white/20 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {detail.strategist ? (
                          <CheckCircle className="w-5 h-5 text-mint mx-auto" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-white/20 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {detail.transformer ? (
                          <CheckCircle className="w-5 h-5 text-mint mx-auto" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-white/20 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Package Descriptions */}
      <section className="py-12 lg:py-16">
        <Container>
          <StaggerReveal variant="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Advisor */}
            <div className="bg-navy-mid border border-white/5 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Advisor</h3>
              <p className="text-mint font-semibold mb-4">14 500 kr/mån</p>
              <p className="text-silver text-sm mb-6">~1 dag/månad</p>
              <p className="text-silver mb-6">
                Perfekt för företag som redan har en teknisk organisation men behöver ett sparringsöra för stora beslut. Du får strategisk vägledning och teknikutvärdering utan daglig involvering.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Månatlig strategi och rådgivning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Teknikutvärdering
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Leverantörsöversyn
                  </span>
                </li>
              </ul>
            </div>

            {/* Strategist */}
            <div className="bg-navy-mid border border-mint/30 rounded-lg p-8 lg:ring-1 lg:ring-mint/30">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-mint" />
                <span className="text-mint text-sm font-semibold">
                  MÃ… POPULÄRT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategist</h3>
              <p className="text-mint font-semibold mb-4">38 500 kr/mån</p>
              <p className="text-silver text-sm mb-6">~1 dag/vecka</p>
              <p className="text-silver mb-6">
                Det mest populära paketet. Du får aktiv ledning med veckovisa möten, digital roadmap och teamledning. Perfekt för växande företag som behöver tydlig riktning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Allt i Advisor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Digital roadmap
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Veckovisa sessioner
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Teamledning
                  </span>
                </li>
              </ul>
            </div>

            {/* Transformer */}
            <div className="bg-navy-mid border border-white/5 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Transformer</h3>
              <p className="text-mint font-semibold mb-4">75–95 k kr/mån</p>
              <p className="text-silver text-sm mb-6">~2–3 dagar/vecka</p>
              <p className="text-silver mb-6">
                För företag i transformationen. Du får operativt ansvar, hands-on ledarskap och djupare involvering. CTO:n är en del av ditt team och leder förändringen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Allt i Strategist
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Operativt ansvar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Hands-on arkitektur
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <span className="text-silver text-sm">
                    Förändringsledning
                  </span>
                </li>
              </ul>
            </div>
          </StaggerReveal>

          <ScrollReveal variant="fade-up" className="mt-12 text-center">
            <p className="text-silver">
              Alla paket: Ingen setup-kostnad • Flexibel avtalsperiod • Kan uppgraderas eller nedgraderas när som helst
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={ctoFaq} sectionTitle="Vanliga frågor om CTO-paket" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Vilken paket passar ditt företag?"
        description="Vi hjälper gärna dig välja rätt nivå baserat på dina behov och budget. Boka ett gratis möte för att diskutera."
        ctaText="Boka möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
