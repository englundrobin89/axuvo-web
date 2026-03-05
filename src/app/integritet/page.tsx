import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Integritetspolicy — Axuvo',
  description: 'Integritetspolicy för Axuvo AB. Hur vi hanterar dina personuppgifter.',
  keywords: 'integritet, dataskydd, GDPR, policy',
  openGraph: {
    title: 'Integritetspolicy — Axuvo',
    description: 'Integritetspolicy för Axuvo AB.',
    type: 'website',
    url: 'https://axuvo.se/integritet',
  },
};

export default function Integritet() {
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
            name: 'Integritetspolicy',
            url: 'https://axuvo.se/integritet',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="compact"
        title="Integritetspolicy"
        subtitle="Hur Axuvo AB hanterar och skyddar dina personuppgifter"
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl prose prose-invert">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Personuppgiftsansvarig</h2>
              <p className="text-silver">
                <strong>Axuvo AB</strong><br />
                Organisationsnummer: Kontakta oss för information<br />
                E-post: info@axuvo.se<br />
                Webbplats: axuvo.se
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Vilka uppgifter vi samlar in</h2>
              <p className="text-silver">
                Vi samlar in personuppgifter när du:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Fyller i kontaktformulär på vår webbplats</li>
                <li>• Bokar ett möte eller konsultation</li>
                <li>• Skickar e-post till oss</li>
                <li>• Använder vår webbplats (automatiskt insamlade uppgifter via cookies och analytics)</li>
              </ul>
              <p className="text-silver mt-4">
                De uppgifter vi samlar in kan omfatta:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Namn och kontaktinformation (e-post, telefonnummer)</li>
                <li>• Företagsuppgifter</li>
                <li>• Information om din förfrågan eller intresse</li>
                <li>• Teknisk information om din enhet och webbläsartyp</li>
                <li>• IP-adress och besöksdata</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Varför vi behandlar uppgifter</h2>
              <p className="text-silver">
                Vi behandlar dina personuppgifter för att:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Besvara dina frågor och förfrågningar</li>
                <li>• Erbjuda och leverera tjänster</li>
                <li>• Administrera bokningar och möten</li>
                <li>• Förbättra vår webbplats och tjänster</li>
                <li>• Analysera hur vår webbplats används</li>
                <li>• Skicka uppdateringar och information (om du har gett ditt samtycke)</li>
                <li>• Uppfylla juridiska krav</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Rättslig grund för behandling</h2>
              <p className="text-silver">
                Vi behandlar dina personuppgifter baserat på:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• <strong>Avtalsförhållande:</strong> För att genomföra eller genomförande av ditt uppdrag med oss</li>
                <li>• <strong>Samtycke:</strong> För marknadsföring och nyhetsbrev (du kan när som helst återkalla samtycket)</li>
                <li>• <strong>Berättigat intresse:</strong> För att analysera webbplatsanvändning och förbättra vår tjänst</li>
                <li>• <strong>Juridisk förpliktelse:</strong> För att uppfylla lag eller myndighetskrav</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Lagring och säkerhet</h2>
              <p className="text-silver">
                Vi lagrar dina personuppgifter endast så länge det är nödvändigt för de ändamål de samlas in för. Typiskt:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Kontaktuppgifter från förfrågningar: 2 år</li>
                <li>• Analytics-data: 14 månader</li>
                <li>• Cookies: enligt respektive cookies cookie-policy</li>
              </ul>
              <p className="text-silver mt-4">
                Vi skyddar dina personuppgifter genom:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Kryptering av känsliga uppgifter</li>
                <li>• Begränsad åtkomst för anställda</li>
                <li>• Säkra servrar och regelbundna säkerhetskontroller</li>
                <li>• HTTPS på all kommunikation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Delning av uppgifter</h2>
              <p className="text-silver">
                Vi delar dina personuppgifter inte med tredje part utan ditt samtycke, förutom när det är nödvändigt för:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Tjänsteleverantörer som hjälper oss (hosting, e-post, analytics)</li>
                <li>• Juridiska krav eller domstolsbeslut</li>
                <li>• Skydd av vår eller andras rättigheter</li>
              </ul>
              <p className="text-silver mt-4">
                Alla tjänsteleverantörer är förbundna av konfidentialitetsavtal.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Dina rättigheter</h2>
              <p className="text-silver">
                Enligt GDPR har du rätt att:
              </p>
              <ul className="text-silver space-y-2 ml-4">
                <li>• <strong>Åtkomst:</strong> Få veta vilka uppgifter vi har om dig</li>
                <li>• <strong>Rättelse:</strong> Korrigera felaktiga uppgifter</li>
                <li>• <strong>Radering:</strong> Få dina uppgifter raderade (under vissa förutsättningar)</li>
                <li>• <strong>Begränsning:</strong> Begränsa hur vi använder dina uppgifter</li>
                <li>• <strong>Portabilitet:</strong> Få dina uppgifter i ett strukturerat format</li>
                <li>• <strong>Invändning:</strong> Invända mot viss behandling</li>
                <li>• <strong>Automatiserat beslutsfattande:</strong> Rätt att inte bli föremål för fullständigt automatiserat beslutsfattande</li>
              </ul>
              <p className="text-silver mt-4">
                För att utöva dessa rättigheter, kontakta oss på info@axuvo.se.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Cookies</h2>
              <p className="text-silver">
                Vår webbplats använder cookies. Se vår <a href="/cookies" className="text-mint hover:text-mint/80">cookiepolicy</a> för mer information.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Ändringar av denna policy</h2>
              <p className="text-silver">
                Vi kan uppdatera denna integritetspolicy när som helst. Vi meddelar dig om väsentliga ändringar genom att publicera den nya versionen på denna sida.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Kontakt</h2>
              <p className="text-silver">
                Om du har frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter, kontakta oss:
              </p>
              <p className="text-silver mt-4">
                <strong>Axuvo AB</strong><br />
                E-post: info@axuvo.se<br />
                Webbplats: axuvo.se
              </p>

              <p className="text-silver text-sm mt-12 italic">
                Denna integritetspolicy gäller från och med 2026-03-05 och uppdaterades senast denna dag.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
