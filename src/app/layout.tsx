import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rapidconstructionservices.com"),
  title: {
    default: "Construction & Renovation Contractor Maryland | Rapid Construction",
    template: "%s | Rapid Construction & Renovation LLC – Maryland",
  },
  description:
    "Rapid Construction & Renovation LLC — Maryland's trusted licensed contractor for roofing, renovations, remodeling, masonry, painting, HVAC, plumbing & electrical. 25+ years experience. Serving all of Maryland. Free estimates. Call (347) 977-3212.",
  keywords: [
    "construction contractor Maryland",
    "renovation contractor Maryland",
    "roofing contractor Maryland",
    "remodeling contractor Maryland",
    "general contractor Maryland",
    "masonry contractor Maryland",
    "licensed contractor Maryland",
    "HVAC contractor Maryland",
    "painting contractor Maryland",
    "kitchen remodeling Maryland",
    "bathroom remodeling Maryland",
    "basement finishing Maryland",
    "construction company Maryland",
  ],
  authors: [{ name: "Rapid Construction & Renovation LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rapidconstructionservices.com",
    siteName: "Rapid Construction & Renovation LLC",
    title: "Construction & Renovation Contractor Maryland | Rapid Construction",
    description: "Maryland's trusted licensed construction & renovation contractor. 25+ years experience. Roofing, remodeling, masonry, HVAC, painting & more. Free estimates.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rapid Construction & Renovation LLC Maryland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Renovation Contractor Maryland",
    description: "Licensed Maryland construction & renovation contractor. 25+ years experience. Free estimates. (347) 977-3212.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://www.rapidconstructionservices.com" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": "https://www.rapidconstructionservices.com/#business",
  name: "Rapid Construction & Renovation LLC",
  description: "Maryland licensed construction and renovation contractor with 25+ years of experience. Specializing in roofing, remodeling, masonry, HVAC, plumbing, electrical, and painting.",
  url: "https://www.rapidconstructionservices.com",
  telephone: "+13479773212",
  email: "rapidconstructinc@gmail.com",
  foundingDate: "2000",
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Maryland" },
    { "@type": "City", name: "Baltimore" },
    { "@type": "City", name: "Columbia" },
    { "@type": "City", name: "Ellicott City" },
    { "@type": "City", name: "Annapolis" },
    { "@type": "City", name: "Rockville" },
    { "@type": "City", name: "Silver Spring" },
    { "@type": "City", name: "Bethesda" },
    { "@type": "City", name: "Gaithersburg" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "18:00" },
  ],
  hasCredential: ["Licensed in Maryland", "Insured", "Bonded"],
  sameAs: [
    "https://instagram.com/rcr_constructinc",
    "https://www.facebook.com/share/1Fg7he7D3n/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Renovation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Contracting Maryland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing Maryland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovations & Remodeling Maryland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masonry Maryland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC Maryland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting Maryland" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="bg-brand-black text-brand-white-2 font-body antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
