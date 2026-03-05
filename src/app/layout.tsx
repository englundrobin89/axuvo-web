import type { Metadata } from "next";
import { Fraunces, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/lib/json-ld";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axuvo.se"),
  title: {
    default: "Axuvo — Vi bygger, leder och förstärker din digitala satsning",
    template: "%s | Axuvo",
  },
  description:
    "Axuvo hjälper företag och människor som vill göra mer digitalt. Vi bygger appar och system, leder som inhyrd CTO och förstärker team med spetskompetens. Snabbt, säkert och utan enterprise-prislapp.",
  keywords: [
    "bygga app",
    "digital byrå Sverige",
    "inhyrd CTO",
    "CTO as a service",
    "kundportal företag",
    "automatisera arbetsflöden",
    "systembyrå Stockholm",
    "specialiststöd IT",
    "bokningsapp pris",
    "vad kostar det att bygga en app",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Axuvo",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://axuvo.se",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${dmSans.variable} ${plusJakarta.variable}`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
