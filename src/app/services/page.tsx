import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Construction & Renovation Services Maryland | Kitchen, Roofing, Additions & More",
  description: "Rapid Construction & Renovation LLC offers kitchen remodeling, bathroom renovation, roofing, basement finishing, home additions, decks, siding, demolition, flooring & painting across Maryland. Licensed & insured. Free estimates. (347) 977-3212.",
  alternates: { canonical: "https://www.rapidconstructionservices.com/services" },
  openGraph: {
    title: "Construction & Renovation Services Maryland | Rapid Construction",
    description: "Kitchen remodeling, bathroom renovation, roofing, home additions, decks, siding & more across Maryland. Licensed & insured. Free estimates.",
    url: "https://www.rapidconstructionservices.com/services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does kitchen remodeling cost in Maryland?", acceptedAnswer: { "@type": "Answer", text: "Kitchen remodeling in Maryland typically ranges from $10,000 for a basic refresh to $60,000+ for a full gut renovation. Mid-range full remodels average $20,000 to $35,000. We provide free detailed estimates." } },
    { "@type": "Question", name: "Do you offer free estimates in Maryland?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide free, no-obligation estimates for all construction and renovation projects across Maryland. Call (347) 977-3212 or submit online." } },
    { "@type": "Question", name: "Are you licensed and insured in Maryland?", acceptedAnswer: { "@type": "Answer", text: "Yes. We are fully licensed and insured in Maryland with 25+ years of experience serving homeowners and businesses statewide." } },
    { "@type": "Question", name: "What areas of Maryland do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve all of Maryland including Baltimore, Columbia, Ellicott City, Annapolis, Rockville, Silver Spring, Bethesda, Gaithersburg, Frederick, Bowie, and surrounding communities." } },
  ],
};

const services = [
  {
    id: "kitchen-remodeling",
    num: "01",
    title: "Kitchen Remodeling",
    tagline: "Maryland's most in-demand renovation.",
    seoTitle: "Kitchen Remodeling Maryland",
    desc: "Your kitchen is the heart of your home and one of the highest-ROI investments you can make. We handle full gut-and-rebuild projects as well as targeted upgrades across Maryland.",
    items: ["Full kitchen gut & rebuild","Cabinet installation & replacement","Quartz & granite countertops","Tile backsplash installation","Open concept wall removal","Kitchen island additions","Flooring (LVP, tile, hardwood)","Recessed lighting & electrical","Appliance installation","Plumbing rough-in"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    imageAlt: "Kitchen remodeling Maryland — modern kitchen renovation with white cabinets and quartz countertops",
  },
  {
    id: "bathroom-remodeling",
    num: "02",
    title: "Bathroom Remodeling",
    tagline: "Luxury finishes. Lasting quality.",
    seoTitle: "Bathroom Remodeling Maryland",
    desc: "From a quick refresh to a complete luxury overhaul — we handle every phase of bathroom renovation across Maryland including tile work, waterproofing, and custom shower builds.",
    items: ["Full bathroom gut & rebuild","Walk-in shower conversions","Tub-to-shower conversions","Floor & wall tile installation","Custom shower niches & benches","Vanity & sink replacement","Waterproofing membrane (every build)","Plumbing fixture upgrades","Exhaust fan installation","Drywall & backer board"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80",
    imageAlt: "Bathroom remodeling Maryland — luxury bathroom renovation with floor-to-ceiling tile",
  },
  {
    id: "roofing",
    num: "03",
    title: "Roofing",
    tagline: "Maryland weather demands the best.",
    seoTitle: "Roofing Contractor Maryland",
    desc: "Maryland's climate is tough on roofs. Our roofing crews handle everything from storm damage repair to full replacements using premium materials built for Mid-Atlantic weather.",
    items: ["Roof installation & full replacement","Shingle, flat & metal roofing","Storm & hail damage repair","Emergency roof repair","Leak detection & repair","Gutters & downspouts","Fascia & soffit replacement","Roof ventilation","Commercial flat roofing","Insurance claim assistance"],
    image: "/roofing.png",
    imageAlt: "Roofing contractor Maryland — roof replacement and installation on residential home",
  },
  {
    id: "basement-finishing",
    num: "04",
    title: "Basement Finishing",
    tagline: "Turn wasted space into living space.",
    seoTitle: "Basement Finishing Maryland",
    desc: "A finished basement adds immediate livable square footage and serious resale value. We handle everything from raw concrete slab to a fully finished, functional space.",
    items: ["Full basement finishing","Framing & insulation","Drywall & skim coat","Flooring (LVP, carpet, tile)","Recessed lighting & electrical","Egress windows","Wet bar & kitchenette","Home theater rooms","Basement bathrooms","Waterproofing & moisture control"],
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&q=80",
    imageAlt: "Basement finishing Maryland — finished basement living space with LVP flooring and recessed lighting",
  },
  {
    id: "home-additions",
    num: "05",
    title: "Home Additions",
    tagline: "Expand your home. Grow your investment.",
    seoTitle: "Home Additions Maryland",
    desc: "When you need more space, a home addition delivers the highest return on investment of any renovation. We manage the entire process — permits, foundation, framing, and all finishes.",
    items: ["Room additions","Second-story additions","In-law suites & ADUs","Garage additions & conversions","Sunroom & screened porch additions","Master suite additions","Family room additions","Mudroom additions","Permit & engineering coordination","Full project management"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
    imageAlt: "Home addition Maryland — residential home addition with new construction framing",
  },
  {
    id: "decks-outdoor",
    num: "06",
    title: "Decks & Outdoor Spaces",
    tagline: "Maryland summers deserve a great outdoor space.",
    seoTitle: "Deck Builder Maryland",
    desc: "Custom deck building is one of the top home improvement requests across Maryland. We build decks, patios, pergolas, and outdoor living spaces that stand up to Maryland weather.",
    items: ["Custom deck design & build","Composite decking (Trex, TimberTech)","Pressure-treated wood decks","Deck replacement & repair","Pergolas & covered structures","Screened-in porches","Concrete & paver patios","Retaining walls","Outdoor kitchens","Railings & stairs"],
    image: "/deck.png",
    imageAlt: "Deck builder Maryland — custom composite deck construction on Maryland home",
  },
  {
    id: "siding-exterior",
    num: "07",
    title: "Siding & Exterior",
    tagline: "Curb appeal that lasts decades.",
    seoTitle: "Siding Contractor Maryland",
    desc: "New siding is one of the fastest ways to transform your home's appearance and protect it from Maryland's weather. We install vinyl, fiber cement, and wood siding with attention to every detail.",
    items: ["Vinyl siding installation","Fiber cement (James Hardie)","Siding replacement & repair","Storm damage siding repair","Exterior painting","Windows & doors","Trim & fascia work","Soffit & fascia replacement","Insulated siding","Commercial siding"],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
    imageAlt: "Siding contractor Maryland — vinyl siding installation on Maryland residential home",
  },
  {
    id: "demolition-gut-renovation",
    num: "08",
    title: "Demolition & Gut Renovation",
    tagline: "Clean slate. Done right.",
    seoTitle: "Demolition Contractor Maryland",
    desc: "Whether you need a single room gutted or a complete interior stripped to the studs, our demolition team works fast, clean, and safe. Full debris hauling included on every job.",
    items: ["Interior demolition","Full gut renovations","Wall & partition removal","Load-bearing wall removal","Floor demo (all materials)","Ceiling teardown","Commercial demolition","Debris hauling & disposal","Dust containment systems","Structural engineering coordination"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    imageAlt: "Interior demolition Maryland — gut renovation of home interior with debris removal",
  },
  {
    id: "flooring",
    num: "09",
    title: "Flooring Installation",
    tagline: "Every floor tells a story.",
    seoTitle: "Flooring Contractor Maryland",
    desc: "Flooring upgrades transform a space faster than almost any other renovation. We install hardwood, LVP, tile, and carpet across Maryland homes and businesses.",
    items: ["Hardwood flooring (solid & engineered)","Luxury vinyl plank (LVP)","Ceramic & porcelain tile","Carpet installation","Subfloor repair & leveling","Old flooring removal & disposal","Stair treads","Transitions & thresholds","Commercial flooring","Large-format tile"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    imageAlt: "Flooring contractor Maryland — hardwood floor installation in Maryland home",
  },
  {
    id: "painting-drywall",
    num: "10",
    title: "Painting & Drywall",
    tagline: "Flawless walls. Professional finish.",
    seoTitle: "Painting Contractor Maryland",
    desc: "Professional drywall and painting services across Maryland residential and commercial properties. From new construction finishing to a full interior repaint — done right.",
    items: ["Interior painting","Exterior painting","Drywall hanging & taping","Skim coat & smooth finish","Texture matching","Water damage repair","Popcorn ceiling removal","Trim & door painting","Commercial painting","Post-renovation painting"],
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=900&q=80",
    imageAlt: "Painting contractor Maryland — interior painting and drywall finishing in Maryland home",
  },
];

const areas = ["Baltimore","Columbia","Ellicott City","Annapolis","Rockville","Silver Spring","Bethesda","Gaithersburg","Frederick","Bowie","Hagerstown","Towson","Laurel","Waldorf","Bel Air","Dundalk","Catonsville","Essex","Glen Burnie","Germantown"];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="svc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-grid)"/>
          </svg>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_60%,rgba(255,255,255,0.02)_100%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="font-condensed text-xs tracking-widest uppercase text-white/30 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
            </nav>
            <h1 className="font-display text-6xl lg:text-8xl text-white tracking-wider leading-none">
              CONSTRUCTION<br />&amp; RENOVATION<br /><span className="text-stroke">SERVICES</span>
            </h1>
            <div className="w-16 h-px bg-white/30 mt-6 mb-5" />
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              Maryland's full-service construction contractor. Kitchen remodeling, roofing, home additions, decks, basement finishing, siding, demolition, flooring, and everything in between — licensed, insured, serving all of Maryland.
            </p>
            <div className="mt-8"><Link href="/contact" className="btn-primary">Get a Free Estimate</Link></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-black-2 border-b border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="font-condensed text-xs tracking-widest uppercase text-white/30 hover:text-white border border-white/8 hover:border-white/25 px-3 py-2 transition-all duration-200">{s.title}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className={`border-b border-white/8 ${i % 2 === 0 ? "bg-brand-black" : "bg-brand-black-2"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
              <AnimatedSection direction={i % 2 === 0 ? "right" : "left"}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-condensed text-white/12 text-5xl font-bold tracking-tighter">{service.num}</span>
                      <div className="h-px flex-1 bg-white/8" />
                    </div>
                    <span className="font-condensed text-white/25 text-xs tracking-[0.3em] uppercase block mb-2">{service.seoTitle}</span>
                    <h2 className="font-display text-4xl lg:text-6xl text-white tracking-wider mb-3">{service.title.toUpperCase()}</h2>
                    <p className="text-white/35 font-condensed tracking-wider text-sm uppercase mb-4">{service.tagline}</p>
                    <div className="w-12 h-px bg-white/20 mb-6" />
                    <p className="text-white/45 leading-relaxed mb-8">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-10">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-white/38 text-sm">
                          <span className="text-white/20 flex-shrink-0 mt-0.5 text-xs">—</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-outline text-sm">Get a Free {service.title} Quote</Link>
                  </div>
                  <div className="relative group overflow-hidden">
                    <Image src={service.image} alt={service.imageAlt} width={700} height={500} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw"/>
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/10 transition-colors duration-700" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad bg-brand-black-2 border-y border-white/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <span className="font-condensed text-white/30 text-xs tracking-[0.3em] uppercase">Common Questions</span>
            <h2 className="font-display text-4xl text-white mt-3 tracking-wider">FREQUENTLY ASKED</h2>
            <div className="w-16 h-px bg-white/20 mt-5" />
          </AnimatedSection>
          <div className="space-y-2">
            {[
              { q: "How much does kitchen remodeling cost in Maryland?", a: "Kitchen remodeling in Maryland typically ranges from $10,000 for a basic refresh to $60,000+ for a full gut renovation with premium finishes. Mid-range full remodels average $20,000 to $35,000. We provide free, detailed line-item estimates." },
              { q: "Are you licensed and insured in Maryland?", a: "Yes. We are fully licensed and insured in the state of Maryland with over 25 years of experience serving homeowners and businesses statewide. We provide certificates of insurance on request." },
              { q: "Do you offer free estimates?", a: "Absolutely. Free, no-obligation estimates on all construction and renovation projects across Maryland. Call (347) 977-3212 or submit your project online." },
              { q: "What areas of Maryland do you serve?", a: "We serve all of Maryland including Baltimore, Columbia, Ellicott City, Annapolis, Rockville, Silver Spring, Bethesda, Gaithersburg, Frederick, Bowie, and all surrounding communities." },
              { q: "How long does a home addition take in Maryland?", a: "Home additions typically take 8 to 16 weeks from permit approval to final walkthrough depending on scope. We provide a written project schedule before work begins." },
              { q: "Do you handle permits for construction projects in Maryland?", a: "Yes. We coordinate and pull all required permits for construction and renovation projects across Maryland. We know local building departments statewide." },
            ].map(({ q, a }) => (
              <details key={q} className="group border border-white/8 hover:border-white/20 transition-colors">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-white font-condensed tracking-wider uppercase text-sm list-none">
                  {q}
                  <span className="text-white/30 group-open:rotate-45 transition-transform text-xl leading-none ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="px-6 pb-6 text-white/40 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="font-condensed text-white/30 text-xs tracking-[0.3em] uppercase">Where We Work</span>
            <h2 className="font-display text-4xl text-white mt-3 tracking-wider">SERVING ALL OF MARYLAND</h2>
            <div className="w-16 h-px bg-white/20 mt-5" />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
            {areas.map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.03}>
                <div className="border border-white/8 text-white/30 font-condensed text-xs tracking-wider uppercase text-center py-3 hover:border-white/25 hover:text-white/55 transition-all">{area}, MD</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl text-black tracking-wider mb-4">DON'T SEE YOUR PROJECT?</h2>
          <p className="text-black/50 mb-3 text-lg">We do it all. If it involves construction or renovation in Maryland, we can handle it.</p>
          <p className="text-black/40 mb-10">Call us or submit your project details and we'll get back to you within 24 hours with a free estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-condensed text-sm tracking-widest uppercase px-8 py-4 hover:bg-zinc-900 transition-colors">Tell Us About Your Project</Link>
            <a href="tel:+13479773212" className="inline-flex items-center justify-center gap-2 border border-black text-black font-condensed text-sm tracking-widest uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors">(347) 977-3212</a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
