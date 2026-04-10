import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rapidconstructionservices.com";
  const now = new Date();
  return [
    { url: base,                    lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "monthly",  priority: 0.95 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",   priority: 0.9 },
    { url: `${base}/our-story`,     lastModified: now, changeFrequency: "yearly",   priority: 0.7 },
    { url: `${base}/privacy`,       lastModified: now, changeFrequency: "yearly",   priority: 0.2 },
  ];
}
