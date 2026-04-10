import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      { userAgent: "Googlebot", allow: "/", crawlDelay: 0 },
    ],
    sitemap: "https://www.rapidconstructionservices.com/sitemap.xml",
    host: "https://www.rapidconstructionservices.com",
  };
}
