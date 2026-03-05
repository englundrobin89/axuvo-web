import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/lib/json-ld';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';
import {
  BookOpen,
  Users,
  Zap,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  CheckCircle,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Utbildning — Hjälp ditt team komma igång med ny teknik',
  description:
    'Praktisk hands-on utbildning i moderna tekniker. Halvdags workshops till flerdagars kurser. Ditt team blir självständigt.',
  keywords:
    'utbildning, workshop, träning, kodning, AI, DevOps, säkerhet, Sverige',
  openGraph: {
    title: 'Utbildning — Hjälp ditt team komma igång med ny teknik',
    description:
      'Praktisk hands-on utbildning i moderna tekniker. Ditt team blir självständigt med ny teknik.',
    type: 'website',
    url: 'https://axuvo.se/specialiststod/utbildning',
  },
};

interface TrainingFormat {
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  ideal: string;
}

interface TrainingTopic {
  title: string;
  description: string;
  icon: React.ReactNode;
  focusAreas: string[];
}

const formats: TrainingFormat[] = [
  {
    title: 'Halvdagsworkshop',
    duration: '3–4 timmar',
    description: 'Introduktion och överblick över ett tema. Praktiska exempel och diskussioner.',
    icon: <Clock className="w-8 h-8" />,
    ideal: 'Få en snabb introduktion utan att ta för mycket tid från verksamheten.',
  },
  {
    title: 'Heldagsworkshop',
    duration: '8 timmar',
    description: 'Djupare utbildning med praktiska övningar och verkliga exempel.',
    icon: <BookOpen className="w-8 h-8" />,
    ideal: 'Lära dig tillräckligt för att kunna börja arbeta själv.',
  },
  {
    title: 'Flerdagars kurs',
    duration: '2–5 dagar',
    description: 'Omfattande utbildning med hands-on övningar, projekt och workshop.',
    icon: <Users className="w-8 h-8" />,
    ideal: 'Bli expert på ett område och kunna undervisa dina kollegor.',
  },
  {
    title: 'Löpande coaching',
    duration: 'Vecka för vecka',
    description: 'Regelbundna sessioner för att stötta teamet och svara på frågor.',
    icon: <Zap className="w-8 h-8" />,
    ideal: 'Långsiktig stöd när teamet lär sig något helt nytt.',
  },
];

const topics: TrainingTopic[] = [
  {
    title: 'AI i praktiken',
    description: 'Hur du använder AI-verktyg i dina dagliga arbetsuppgifter.',
    icon: <Lightbulb className="w-8 h-8" />,
    focusAreas: ['Prompt engineering', 'Integration i workflow', 'Etik och säkerhet', 'Praktiska use cases'],
  },
  {
    title: 'Modern webbutveckling',
    description: 'Moderna ramverk, arkitektur och best practices för webben.',
    icon: <Code className="w-8 h-8" />,
    focusAreas: ['React/Next.js/Vue', 'TypeScript', 'State management', 'Testing'],
  },
  {
    title: 'DevOps och CI/CD',
    description: 'Automation, deployment och infrastruktur för snabbare releases.',
    icon: <Zap className="w-8 h-8" />,
    focusAreas: ['GitHub Actions/GitLab', 'Docker', 'Kubernetes', 'Monitoring'],
  },
  {
    title: 'Säkerhet',
    description: 'Secure by Design — säkerhet från start, inte i slutet.',
    icon: <Shield className="w-8 h-8" />,
    focusAreas: ['Autentisering', 'Kryptering', 'Databaskydd', 'Risk-analys'],
  },
  {
    title: 'Molntjänster',
    description: 'AWS, GCP eller Azure — från basics till avancerad drift.',
    icon: <Cloud className="w-8 h-8" />,
    focusAreas: ['Cloud architecture', 'Serverless', 'Databases', 'Cost optimization'],
  },
];

const trainingFaq = [
  {
    question: 'Kan ni anpassa utbildningen efter våra behov?',
    answer:
      'Absolut. Vi startar alltid med ett möte för att förstå ditt teams nuvarande nivå, mål och utmaningar. Sedan skräddarsyr vi utbildningen helt efter era behov.',
  },
  {
    question: 'Vad kostar en utbildning?',
    answer:
      'En halvdagsworkshop börjar från 8 000–12 000 kr. En heldagsworkshop är 15 000–25 000 kr. En flerdagars kurs kan vara 40 000–80 000 kr beroende på längd och tema. Vi ger alltid en konkret offert.',
  },
  {
    question: 'Kan vi kombinera utbildning med praktisk hjälp?',
    answer:
      'Ja, ofta är det mycket värdefullt. Vi kan genomföra en utbildning och sedan stötta implementeringen tillsammans med ditt team. Det gör att lärandet blir direkt tillämpbart.',
  },
  {
    question: 'Vad är skillnaden mellan workshop och kurs?',
    answer:
      'En workshop är kortare och mer fokuserad — ofta 3–8 timmar med snabb introduktion. En kurs är längre och djupare, ofta 2–5 dagar, med mer tid för praktiska övningar och projekt.',
  },
  {
    question: 'Behöver teamet ha förkunskaper?',
    answer:
      'Det beror på ämnet. För något som AI behövs ingen förkunskap. För webbutveckling eller DevOps kan det vara bra med grundläggande kunskaper, men vi kan börja från grunden om det krävs.',
  },
  {
    question: 'Kan vi spela in utbildningen för senare användning?',
    answer:
      'Det beror på utbildningens karaktär. Workshops är ofta bäst live för att kunna ställa frågor. För vissa ämnen kan vi göra inspelad material, men vi rekommenderar alltid live-sessioner för bästa lärlandet.',
  },
];

export default function Utbildning() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd
        name="Utbildning"
        description="Praktisk hands-on utbildning för att hjälpa ditt team komma igång med ny teknik."
        url="https://axuvo.se/specialiststod/utbildning"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Start',
            url: 'https://axuvo.se',
          },
          {
            name: 'Specialiststöd',
            url: 'https://axuvo.se/specialiststod',
          },
          {
            name: 'Utbildning',
            url: 'https://axuvo.se/specialiststod/utbildning',
          },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="service"
        badge="Specialiststöd"
        title="Hjälp ditt team komma igång med ny teknik"
        subtitle="Praktisk hands-on utbildning som gör ditt team självständigt. Från halvdagsworkshops till flerdagars kurser."
        primaryCta={{
          text: 'Boka en utbildning',
          href: '/kontakt',
        }}
        trustText="Praktisk träning • Anpassat innehål • Nämndesman som undervisar"
      />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* About Training */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Vad är utbildning från Axuvo?
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Lära genom att göra
              </h2>
              <p className="text-lg text-silver">
                Vi tror på praktisk, hands-on utbildning. Inte slides och teori — utan kodning, diskussioner och verkliga exempel. Vi kommer till ditt team (eller via video) och hjälper dem bli självständiga med en ny teknik eller metod.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Training Formats */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Format
              </h2>
              <p className="text-silver max-w-2xl">
                Från snabba workshops till omfattande kurser — vi erbjuder flera format beroende på dina behov.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <div
                key={index}
                className="bg-navy-mid border border-white/5 rounded-lg p-8"
              >
                <div className="text-mint mb-4">{format.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {format.title}
                </h3>
                <p className="text-mint text-sm mb-3">{format.duration}</p>
                <p className="text-silver text-sm mb-4">{format.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-silver text-xs italic">
                    <strong>Perfekt för:</strong> {format.ideal}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Topics */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Ämnen vi undervisar i
              </h2>
              <p className="text-silver max-w-2xl">
                Vi undervisar i ett brett spektrum av moderna tekniker och metoder. Har du ett ämne som inte är listat? Fråga — vi kan ofta lösa det.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-navy-mid rounded-lg p-6 border border-white/5"
              >
                <div className="text-mint mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-silver text-sm mb-4">{topic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {topic.focusAreas.map((area, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-mint/10 text-mint rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* How It Works */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl">
              <Badge className="mb-4">
                Processen
              </Badge>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
                Så genomför vi en utbildning
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-mint text-navy-dark font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      Kickoff-möte
                    </h3>
                    <p className="text-silver text-sm mt-1">
                      Vi träffas för att förstå teamets nivå, mål och utmaningar. Vad kan de redan? Vad vill de lära?
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-mint text-navy-dark font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      Skräddarsydd utbildning
                    </h3>
                    <p className="text-silver text-sm mt-1">
                      Vi bygger en utbildningsplan anpassad efter era behov. Ofta med praktiska övningar och verkliga exempel från er verksamhet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-mint text-navy-dark font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      Genomförande
                    </h3>
                    <p className="text-silver text-sm mt-1">
                      Hands-on träning med möjlighet att ställa frågor, experimentera och lära från verkliga exempel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-mint text-navy-dark font-semibold text-sm">
                      4
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      Uppföljning
                    </h3>
                    <p className="text-silver text-sm mt-1">
                      Vi kan erbjuda coaching-sessioner efter utbildningen för att stötta teamet när de börjar tillämpa det de lärt sig.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-navy-mid/30">
        <ScrollReveal variant="fade-up">
          <FAQ items={trainingFaq} sectionTitle="Vanliga frågor om utbildning" />
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact CTA */}
      <ContactCTA
        title="Behöver ditt team utbildning?"
        description="Berätta vad du vill att teamet ska lära sig. Vi utformar en utbildningsplan och startar omedelbar."
        ctaText="Boka en utbildning"
        ctaHref="/kontakt"
      />
    </>
  );
}
