import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Allmänna villkor — Axuvo',
  description: 'Allmänna villkor för Axuvo AB:s tjänster, inklusive Build Studio, blueprint-möten och utvecklingstjänster.',
  keywords: 'allmänna villkor, avtal, tjänstevillkor, Axuvo',
  openGraph: {
    title: 'Allmänna villkor — Axuvo',
    description: 'Allmänna villkor för Axuvo AB:s tjänster.',
    type: 'website',
    url: 'https://axuvo.se/villkor',
  },
};

export default function Villkor() {
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
            name: 'Allmänna villkor',
            url: 'https://axuvo.se/villkor',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="compact"
        title="Allmänna villkor"
        subtitle="Villkor för Axuvo AB:s tjänster och samarbeten"
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl prose prose-invert">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Definitioner</h2>
              <ul className="text-silver space-y-2 ml-4">
                <li>• <strong>&quot;Axuvo&quot;</strong> avser Axuvo AB med organisationsnummer registrerat i Sverige.</li>
                <li>• <strong>&quot;Kunden&quot;</strong> avser den fysiska eller juridiska person som nyttjar Axuvos tjänster.</li>
                <li>• <strong>&quot;Tjänsten&quot;</strong> avser samtliga tjänster som Axuvo erbjuder, inklusive men inte begränsat till Build Studio, blueprint-möten, utveckling, design och förvaltning.</li>
                <li>• <strong>&quot;Avtal&quot;</strong> avser det specifika uppdragsavtal som upprättas mellan Axuvo och Kunden efter genomfört blueprint-möte.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Tillämplighet</h2>
              <p className="text-silver">
                Dessa allmänna villkor gäller för alla tjänster som Axuvo erbjuder via axuvo.se och i direkt kontakt med kunder. Genom att använda Build Studio, boka ett blueprint-möte eller på annat sätt anlita Axuvo accepterar du dessa villkor.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Tjänstebeskrivning</h2>
              <h3 className="text-lg font-medium text-white mt-6 mb-3">3.1 Build Studio</h3>
              <p className="text-silver">
                Build Studio är Axuvos AI-drivna prisuppskattningsverktyg. Verktyget analyserar kundens projektbeskrivning och ger en indikativ prisuppskattning, funktionsförslag och tidsuppskattning. Build Studio är kostnadsfritt att använda.
              </p>
              <h3 className="text-lg font-medium text-white mt-6 mb-3">3.2 Blueprint-möte</h3>
              <p className="text-silver">
                Blueprint-mötet är ett kostnadsfritt konsultationsmöte (ca 1 timme) där Axuvo går igenom kundens projektidé i detalj. Efter mötet levererar Axuvo en klickbar prototyp inom 48 timmar samt ett detaljerat prisförslag. Blueprint-mötet är utan förpliktelser — kunden har ingen skyldighet att gå vidare med ett uppdrag.
              </p>
              <h3 className="text-lg font-medium text-white mt-6 mb-3">3.3 Utvecklingstjänster</h3>
              <p className="text-silver">
                Axuvo erbjuder design, utveckling och leverans av digitala produkter — appar, webbapplikationer, system och plattformar. Utvecklingstjänster regleras av ett separat uppdragsavtal som upprättas efter godkänd offert.
              </p>
              <h3 className="text-lg font-medium text-white mt-6 mb-3">3.4 Förvaltning</h3>
              <p className="text-silver">
                Axuvo erbjuder löpande förvaltning och support efter leverans. Förvaltningen regleras av ett separat serviceavtal med månatlig avgift.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Prisuppskattning och offerter</h2>
              <p className="text-silver">
                Prisuppskattningar som ges via Build Studio och blueprint-möten är <strong>indikativa och inte bindande</strong>. De baseras på den information kunden tillhandahåller vid tidpunkten och kan förändras om projektets omfattning ändras. Ett bindande pris fastställs först i en formell offert som båda parter godkänner skriftligt.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Uppdrag och avtal</h2>
              <p className="text-silver">
                Ett uppdrag påbörjas först när kunden skriftligt godkänt en offert eller uppdragsavtal från Axuvo. Offerten specificerar projektets omfattning, leveranser, tidplan, pris och betalningsvillkor. Väsentliga ändringar i projektets omfattning efter godkänd offert kan medföra ändrade kostnader och tidsramar, vilket kommuniceras och godkänns av kunden innan arbete påbörjas.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Betalningsvillkor</h2>
              <ul className="text-silver space-y-2 ml-4">
                <li>• Betalningsvillkor specificeras i varje enskild offert eller avtal.</li>
                <li>• Typiskt faktureras utvecklingsprojekt i delmilstolpar: startavgift, delleveranser och slutleverans.</li>
                <li>• Förvaltningsavgifter faktureras månadsvis i förskott.</li>
                <li>• Betalningsvillkor är 14 dagar om inget annat avtalas.</li>
                <li>• Vid försenad betalning utgår dröjsmålsränta enligt räntelagen.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Immateriella rättigheter</h2>
              <p className="text-silver">
                Kunden erhåller full äganderätt till den färdiga produkten (källkod, design och dokumentation) efter fullständig betalning, om inget annat avtalas. Axuvo förbehåller sig rätten att använda generiska ramverk, verktyg och bibliotek som inte är specifika för kundens projekt. Axuvo får referera till projektet i sin portfolio om inget annat avtalas.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Ansvarsbegränsning</h2>
              <p className="text-silver">
                Axuvo ansvarar inte för indirekt skada, utebliven vinst eller förlust av data som uppstår i samband med nyttjande av våra tjänster. Axuvos totala ansvar är begränsat till det belopp kunden betalat för den specifika tjänst som gett upphov till skadan. Prisuppskattningar via Build Studio utgör ingen garanti för slutkostnad, leveranstid eller specifik funktionalitet.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Sekretess</h2>
              <p className="text-silver">
                Axuvo behandlar all information om kundens projekt och verksamhet konfidentiellt. Information delas inte med tredje part utan kundens samtycke, med undantag för underleverantörer som arbetar direkt med projektet och som omfattas av samma sekretessåtagande.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Personuppgifter</h2>
              <p className="text-silver">
                Axuvo behandlar personuppgifter i enlighet med GDPR och vår <a href="/integritet" className="text-mint hover:text-mint/80">integritetspolicy</a>. Genom att skicka in dina uppgifter via Build Studio eller andra formulär på axuvo.se samtycker du till att Axuvo lagrar och behandlar dina uppgifter i syfte att hantera din förfrågan, kontakta dig och ge dig en uppskattning. Dina uppgifter lagras i vårt CRM-system och används inte för marknadsföring utan ditt uttryckliga samtycke.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Ändringar av villkor</h2>
              <p className="text-silver">
                Axuvo förbehåller sig rätten att uppdatera dessa villkor. Väsentliga förändringar meddelas via webbplatsen. Den senaste versionen gäller alltid och publiceras på denna sida.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Tvister och tillämplig lag</h2>
              <p className="text-silver">
                Dessa villkor lyder under svensk lag. Tvister som uppstår i anledning av dessa villkor ska i första hand lösas genom förhandling mellan parterna. Om en tvist inte kan lösas genom förhandling ska den avgöras av svensk allmän domstol.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Kontakt</h2>
              <p className="text-silver">
                Om du har frågor om dessa villkor, kontakta oss:
              </p>
              <p className="text-silver mt-4">
                <strong>Axuvo AB</strong><br />
                E-post: info@axuvo.se<br />
                Webbplats: axuvo.se
              </p>

              <p className="text-silver text-sm mt-12 italic">
                Dessa allmänna villkor gäller från och med 2026-03-07 och uppdaterades senast denna dag.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
