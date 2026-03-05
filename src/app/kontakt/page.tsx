import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { Mail, Phone, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt — Boka ett kostnadsfritt möte',
  description:
    'Kontakta Axuvo för ett kostnadsfritt möte. Vi svarar inom 24 timmar med ett konkret förslag för ditt projekt.',
  keywords:
    'kontakt, möte, konsultation, Sverige, Axuvo',
  openGraph: {
    title: 'Kontakt — Boka ett kostnadsfritt möte',
    description:
      'Kontakta Axuvo för ett kostnadsfritt möte. Vi svarar inom 24 timmar.',
    type: 'website',
    url: 'https://axuvo.se/kontakt',
  },
};

export default function Kontakt() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
          {
            name: 'Kontakt',
            url: 'https://axuvo.se/kontakt',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        title="Berätta vad du behöver"
        subtitle="Fyll i formuläret eller kontakta oss direkt. Vi återkommer inom 24 timmar med ett konkret förslag."
        primaryCta={{
          text: 'Kontaktuppgifter nedan',
          href: '#form',
        }}
      />

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-navy-mid rounded-xl p-8 border border-white/5">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Skicka en förfrågan
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-navy-mid rounded-xl p-8 border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Eller kontakta oss direkt
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Mail className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <p className="text-silver text-sm mb-1">E-post</p>
                      <a
                        href="mailto:hej@axuvo.se"
                        className="text-white hover:text-mint transition-colors font-medium"
                      >
                        hej@axuvo.se
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Phone className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <p className="text-silver text-sm mb-1">Telefon</p>
                      <a
                        href="tel:+46701234567"
                        className="text-white hover:text-mint transition-colors font-medium"
                      >
                        +46 (0)70 123 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blueprint Meeting Highlight */}
              <div className="bg-navy-mid rounded-xl p-8 border border-mint/20">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-white">
                    Gratis blueprint-möte
                  </h3>
                </div>
                <p className="text-silver text-sm mb-4">
                  Det första mötet är helt kostnadsfritt. Vi pratar igenom din idé, förstår dina behov och diskuterar nästa steg.
                </p>
                <ul className="space-y-2 text-silver text-sm">
                  <li className="flex gap-2">
                    <span className="text-mint">✓</span>
                    <span>~1 timme</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-mint">✓</span>
                    <span>Ingen bindning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-mint">✓</span>
                    <span>Klickbar prototyp inom 48h</span>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-navy-mid rounded-xl p-8 border border-white/5">
                <p className="text-silver text-sm">
                  <span className="text-mint font-semibold">Vi svarar inom 24 timmar</span> på alla förfrågningar. Du får ett konkret förslag och nästa steg.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 lg:py-24 bg-navy-light/20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-12">
              Innan du kontaktar oss
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Vad kostar ett möte?
                </h3>
                <p className="text-silver text-sm">
                  Första mötet är helt kostnadsfritt. Du får en seriös analys, prototyp och ett klart erbjudande innan någon kostnad.
                </p>
              </div>

              <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Vad behöver du innan möte?
                </h3>
                <p className="text-silver text-sm">
                  En idé eller ett problem räcker. Du behöver inte omfattande specifikationer — vi hjälper dig att forma idén tillsammans.
                </p>
              </div>

              <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Hur snabbt kan ni komma igång?
                </h3>
                <p className="text-silver text-sm">
                  Ofta samma vecka. Vi hanterar akuta behov och bokar tid så fort det passar dig.
                </p>
              </div>

              <div className="bg-navy-mid border border-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Är ni confidentiality-sekretessavtal?
                </h3>
                <p className="text-silver text-sm">
                  Ja. Vi signerar NDA före möte om du önskar. Din ide och din data är helt säker med oss.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
