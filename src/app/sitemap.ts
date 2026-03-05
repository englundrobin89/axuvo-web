import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://axuvo.se";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/build-studio`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cto-as-a-service`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/specialiststod`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
