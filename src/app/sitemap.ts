import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://axuvo.se";
  const lastModified = new Date();

  const ideaSlugs = [
    "bokningsapp",
    "offertverktyg",
    "personlig-app",
    "kundportal",
    "verksamhetssystem",
    "arbetsflode",
    "ai-kundservice",
    "saas-produkt",
    "komplett-plattform",
  ];

  const ideaPages = ideaSlugs.map((slug) => ({
    url: `${baseUrl}/build-studio/idekatalog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Huvudsidor
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/build-studio`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cto-as-a-service`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/specialiststod`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Build Studio undersidor
    { url: `${baseUrl}/build-studio/blueprint`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build-studio/the-build`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build-studio/forvaltning`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build-studio/idekatalog`, lastModified, changeFrequency: "weekly", priority: 0.8 },

    // Idékatalog detaljer
    ...ideaPages,

    // CTO undersidor
    { url: `${baseUrl}/cto-as-a-service/vad-gor-en-inhyrd-cto`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cto-as-a-service/nar-behover-du`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cto-as-a-service/paket`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cto-as-a-service/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },

    // Specialiststöd undersidor
    { url: `${baseUrl}/specialiststod/sprintar`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/specialiststod/qa-och-audits`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/specialiststod/utbildning`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/specialiststod/radgivning`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Övriga sidor
    { url: `${baseUrl}/om-axuvo`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/insikter`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/integritet`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
