import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  BookOpen,
  Zap,
  Shield,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insikter — Tankar, tips och erfarenheter från Axuvo',
  description:
    'Läs om teknik, strategi och digital transformation. Artiklar från Axuvo team.',
  keywords:
    'insikter, teknik, blogg, artikel, digital transformation, Sverige',
  openGraph: {
    title: 'Insikter — Tankar, tips och erfarenheter från Axuvo',
    description:
      'Läs om teknik, strategi och digital transformation.',
    type: 'website',
    url: 'https://axuvo.se/insikter',
  },
};

interface ArticleCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const upcomingArticles: ArticleCard[] = [
  {
    title: 'Så väljer du rätt teknikpartner',
    description: 'En guide för att finna rätt partner för ditt teknikprojekt. Vad ska du fråga? Vad bör du tänka på?',
    icon: <Users className="w-6 h-6" />,
    tag: 'Guide',
  },
  {
    title: 'Blueprint-metoden: Se resultat innan du spenderat en krona',
    description: 'Hur du kan validera en idé snabbt och billigt innan du investerar stort. Vår provade metod.',
    icon: <Zap className="w-6 h-6" />,
    tag: 'Metod',
  },
  {
    title: '5 tecken på att du behöver en inhyrd CTO',
    description: 'Du undrar om du behöver en teknisk ledare? Här är fem tecken som säger att svaret är ja.',
    icon: <BookOpen className="w-6 h-6" />,
    tag: 'Checklista',
  },
  {
    title: 'Varför Secure by Design inte är ett tillval',
    description: 'Säkerhet är inte något du lägger på efteråt. Det måste vara inbyggt från dag ett.',
    icon: <Shield className="w-6 h-6" />,
    tag: 'Säkerhet',
  },
];

export default function Insikter() {
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
            name: 'Insikter',
            url: 'https://axuvo.se/insikter',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Insikter"
        title="Tankar, tips och erfarenheter från Axuvo"
        subtitle="Läs om teknik, strategi och digital transformation. Vi delar vad vi lär oss."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Coming Soon Section */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mb-12">
              <Badge className="mb-4">
                Nya artiklar kommer snart
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Vi håller på att skriva
              </h2>
              <p className="text-lg text-silver">
                Vi arbetar på en serie artiklar om teknik, strategi och digital transformation. Här är några av de ämnen vi skriver om just nu.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingArticles.map((article, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-mint">{article.icon}</div>
                  <Badge className="text-xs bg-mint/10 text-mint">{article.tag}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-silver text-sm mb-4">{article.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-mint text-sm font-semibold">Kommer snart</span>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Newsletter CTA */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Håll dig uppdaterad
              </h2>
              <p className="text-silver mb-8">
                Vi skriver när det finns något värt att dela. Du kan följa Axuvo för att inte missa nya artiklar och insikter.
              </p>
              <p className="text-silver text-sm italic">
                Prenumerationsfunktion kommer snart.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Har du en fråga om teknik?"
        description="Du behöver inte vänta på att vi skriver en artikel. Kontakta oss direkt — vi hjälper gärna."
        ctaText="Boka ett möte"
        ctaHref="/kontakt"
      />
    </>
  );
}
