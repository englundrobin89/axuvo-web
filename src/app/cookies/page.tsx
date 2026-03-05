import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Cookiepolicy — Axuvo',
  description: 'Cookiepolicy för axuvo.se. Vilka cookies vi använder och hur du hanterar dem.',
  keywords: 'cookies, policy, tracking, analytics',
  openGraph: {
    title: 'Cookiepolicy — Axuvo',
    description: 'Cookiepolicy för axuvo.se.',
    type: 'website',
    url: 'https://axuvo.se/cookies',
  },
};

export default function Cookies() {
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
            name: 'Cookiepolicy',
            url: 'https://axuvo.se/cookies',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="compact"
        title="Cookiepolicy"
        subtitle="Hur vi använder cookies och spårning på axuvo.se"
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl prose prose-invert">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Vad är cookies?</h2>
              <p className="text-silver">
                Cookies är små textfiler som lagras på din enhet (dator, tablet, mobil) när du besöker en webbplats. De hjälper webbplatsen att komma ihåg information om dig mellan besök.
              </p>
              <p className="text-silver mt-4">
                Vi använder cookies för att förbättra din upplevelse och förstå hur vår webbplats används.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Vilka cookies vi använder</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Nödvändiga cookies</h3>
              <p className="text-silver">
                Dessa cookies är obligatoriska för att webbplatsen ska fungera korrekt. De lagrar sessionsinformation och säkerhetsinställningar.
              </p>
              <ul className="text-silver space-y-2 ml-4 mt-2">
                <li>• <strong>Session cookies:</strong> Behålls under din session och raderas när du stänger webbläsaren</li>
                <li>• <strong>Säkerhetscookies:</strong> Skyddar mot obehörig åtkomst</li>
                <li>• <strong>Inställningscookies:</strong> Kommer ihåg dina preferenser (t.ex. språk)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Analitiska cookies</h3>
              <p className="text-silver">
                Dessa cookies hjälper oss att förstå hur besökare använder vår webbplats. Vi använder Google Analytics för att spåra:
              </p>
              <ul className="text-silver space-y-2 ml-4 mt-2">
                <li>• Antal besökare och sessioner</li>
                <li>• Vilka sidor som är populära</li>
                <li>• Hur besökare navigerar på webbplatsen</li>
                <li>• Ungefärlig geografisk plats (på landsnivå)</li>
              </ul>
              <p className="text-silver mt-4">
                <strong>Vi använder NOT anonymiserar IP-adresser</strong> och samlar inte in personuppgifter genom Google Analytics.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Tredjepartscookies</h2>
              <p className="text-silver">
                Vi använder inte spårningsscripts från annonsnätverk eller tredjepartsföretag för marknadsföring.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Hur du hanterar cookies</h2>
              <p className="text-silver">
                Du kan kontrollera cookies genom dina webbläsarinställningar. De flesta webbläsare låter dig:
              </p>
              <ul className="text-silver space-y-2 ml-4 mt-2">
                <li>• Se vilka cookies som är lagrade</li>
                <li>• Radera cookies</li>
                <li>• Blockera cookies från specifika webbplatser</li>
                <li>• Aktivera "Do Not Track" (om din webbläsare stöder det)</li>
              </ul>
              <p className="text-silver mt-4">
                <strong>Notering:</strong> Om du blockerar nödvändiga cookies kan webbplatsen inte fungera korrekt.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Instruktioner för populära webbläsare:</h3>
              <ul className="text-silver space-y-2 ml-4">
                <li>• <strong>Chrome:</strong> Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata</li>
                <li>• <strong>Firefox:</strong> Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata</li>
                <li>• <strong>Safari:</strong> Inställningar → Sekretess → Hantera webbplatsdata</li>
                <li>• <strong>Edge:</strong> Inställningar → Sekretess, sökning och tjänster → Cookies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Ditt samtycke</h2>
              <p className="text-silver">
                Nödvändiga cookies sätts utan ditt förhandstillstånd eftersom de är essentiella för webbplatsens funktion.
              </p>
              <p className="text-silver mt-4">
                Analitiska cookies kräver ditt samtycke. Vi ber om ditt tillstånd vid första besöket genom en cookiebanderoll.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Ändringar av denna policy</h2>
              <p className="text-silver">
                Vi kan uppdatera denna cookiepolicy när som helst. Ändringar träder i kraft omedelbar när de publiceras.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Kontakt</h2>
              <p className="text-silver">
                Om du har frågor om denna cookiepolicy, kontakta oss:
              </p>
              <p className="text-silver mt-4">
                <strong>Axuvo AB</strong><br />
                E-post: info@axuvo.se<br />
                Webbplats: axuvo.se
              </p>

              <p className="text-silver text-sm mt-12 italic">
                Denna cookiepolicy gäller från och med 2026-03-05 och uppdaterades senast denna dag.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
