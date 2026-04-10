"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "25+",  label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "Free", label: "Estimates Always" },
];

const services = [
  { icon: "⬛", title: "Kitchen Remodeling",         href: "/services#kitchen-remodeling",           desc: "Full gut rebuilds, cabinets, countertops, backsplash & open-concept conversions." },
  { icon: "⬛", title: "Bathroom Remodeling",         href: "/services#bathroom-remodeling",          desc: "Floor-to-ceiling tile, custom showers, vanity replacement & waterproofing." },
  { icon: "⬛", title: "Roofing",                     href: "/services#roofing",                      desc: "Roof installation, replacement, storm damage repair, gutters & flat roofing." },
  { icon: "⬛", title: "Basement Finishing",          href: "/services#basement-finishing",           desc: "Turn unfinished basements into livable, high-value space across Maryland." },
  { icon: "⬛", title: "Home Additions",              href: "/services#home-additions",               desc: "Room additions, second stories, in-law suites & ADUs from start to finish." },
  { icon: "⬛", title: "Decks & Outdoor Spaces",     href: "/services#decks-outdoor",                desc: "Custom decks, patios, pergolas, screened porches & outdoor kitchens." },
  { icon: "⬛", title: "Siding & Exterior",           href: "/services#siding-exterior",              desc: "Vinyl siding, fiber cement, storm damage repair & exterior painting." },
  { icon: "⬛", title: "Demolition & Gut Renovation", href: "/services#demolition-gut-renovation",   desc: "Interior demolition, full gut renovations & debris hauling statewide." },
  { icon: "⬛", title: "Flooring",                    href: "/services#flooring",                     desc: "Hardwood, LVP, tile & carpet installation across Maryland homes & businesses." },
  { icon: "⬛", title: "Painting & Drywall",          href: "/services#painting-drywall",             desc: "Interior & exterior painting, drywall, skim coat, texture matching & trim." },
];

const areas = ["Baltimore","Columbia","Ellicott City","Annapolis","Rockville","Silver Spring","Bethesda","Gaithersburg","Frederick","Bowie","Hagerstown","Towson"];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <>
      {/* ══ HERO — modern animated SVG background, no photo ══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">

        {/* Animated geometric background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

          {/* Animated SVG grid + lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="largeGrid" width="200" height="200" patternUnits="userSpaceOnUse">
                <rect width="200" height="200" fill="url(#smallGrid)"/>
                <path d="M 200 0 L 0 0 0 200" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#largeGrid)"/>
            {/* Diagonal accent lines */}
            <line x1="0" y1="100%" x2="60%" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="20%" y1="100%" x2="80%" y2="0" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
            <line x1="100%" y1="80%" x2="40%" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            {/* Corner accent shapes */}
            <rect x="0" y="0" width="3" height="100%" fill="rgba(255,255,255,0.06)"/>
            <rect x="0" y="0" width="100%" height="3" fill="rgba(255,255,255,0.04)"/>
          </svg>

          {/* Floating animated dots */}
          {[
  { cx: "15%", cy: "25%", r: 1.5, dur: "4s" },
  { cx: "75%", cy: "15%", r: 1,   dur: "5s" },
  { cx: "85%", cy: "65%", r: 2,   dur: "6s" },
  { cx: "25%", cy: "75%", r: 1.5, dur: "4.5s" },
  { cx: "55%", cy: "40%", r: 1,   dur: "3.5s" },
].map((d, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-white"
    style={{ left: d.cx, top: d.cy, width: `${d.r * 2}px`, height: `${d.r * 2}px`, opacity: 0.15 }}
    animate={{ opacity: [0.08, 0.25, 0.08], scale: [1, 1.5, 1] }}
    transition={{ duration: Number(d.dur.replace("s", "")), repeat: Infinity, delay: i * 0.8 }}
  />
))}

          {/* Large faint text watermark */}
          <div className="absolute right-0 bottom-0 font-display text-[22vw] text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
            RCR
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <h1 className="sr-only">Construction & Renovation Contractor Maryland — Rapid Construction & Renovation LLC</h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 mb-10">
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="font-condensed text-white/55 text-xs tracking-[0.3em] uppercase">Licensed Maryland Contractors · 25+ Years Experience</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            aria-hidden="true" className="font-display text-[clamp(4rem,12vw,10rem)] text-white leading-none tracking-wider">
            RAPID<br />
            <span className="text-stroke">CONSTRUCTION</span><br />
            &amp; RENOVATION
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-lg text-white/45 leading-relaxed max-w-xl">
            Maryland's trusted licensed construction and renovation contractor. Roofing, remodeling, home additions, decks, basements, and everything in between — across all of Maryland.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-sm">
              Request a Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/services" className="btn-outline text-sm">Explore Services</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-2">
            {["✓ Licensed in Maryland","✓ Insured & Bonded","✓ Free Estimates","✓ 25+ Years Experience"].map((t) => (
              <span key={t} className="font-condensed text-xs text-white/25 tracking-widest uppercase">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-white py-12 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-5xl text-black tracking-wider">{s.value}</div>
                <div className="font-condensed text-black/40 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES — all clickable to their individual anchors ══ */}
      <section className="section-pad bg-brand-black" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="font-condensed text-white/25 text-xs tracking-[0.3em] uppercase">What We Do</span>
            <h2 id="services-heading" className="font-display text-5xl lg:text-7xl text-white mt-3 tracking-wider leading-none">
              CONSTRUCTION &amp;<br className="hidden lg:block"/>
              RENOVATION SERVICES<br className="hidden lg:block"/>
              <span className="text-stroke">MARYLAND</span>
            </h2>
            <div className="w-16 h-px bg-white/20 mt-6" />
            <p className="text-white/35 mt-5 max-w-2xl">Click any service to learn more. We handle every phase of your project — from first estimate to final walkthrough.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <Link
                  href={service.href}
                  className="group block bg-brand-black hover:bg-zinc-900 p-7 h-full transition-all duration-300 border border-transparent hover:border-white/15"
                >
                  {/* Number */}
                  <div className="font-condensed text-white/12 text-4xl font-bold mb-4 tracking-tighter group-hover:text-white/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-condensed text-white text-base tracking-wider uppercase mb-2 group-hover:text-white transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-white/20 font-condensed text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-outline">View All Services In Detail</Link>
            <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="section-pad bg-brand-black-2 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="font-condensed text-white/25 text-xs tracking-[0.3em] uppercase">About Us</span>
              <h2 className="font-display text-5xl lg:text-6xl text-white mt-3 tracking-wider leading-tight">
                OVER 25 YEARS<br />OF TRUSTED<br /><span className="text-stroke">CRAFTSMANSHIP</span>
              </h2>
              <div className="w-16 h-px bg-white/20 mt-6 mb-7" />
              <p className="text-white/40 leading-relaxed mb-5">We're a Maryland-based construction company built on craftsmanship, integrity, and reliability. With over 25 years of hands-on experience, we've grown into a licensed LLC serving homeowners and businesses across the state.</p>
              <p className="text-white/40 leading-relaxed mb-8">Every project is approached with precision, care, and transparency. Whether large or small, we deliver quality results on time and on budget.</p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[["Licensed in Maryland","Fully licensed & insured."],["25+ Years","Local Maryland expertise."],["Transparent Pricing","No surprises. Ever."],["All of Maryland","We go where the work is."]].map(([t, d]) => (
                  <div key={t} className="border border-white/8 p-4">
                    <div className="font-condensed text-white text-xs tracking-wider uppercase mb-1">{t}</div>
                    <div className="text-white/30 text-xs">{d}</div>
                  </div>
                ))}
              </div>
              <Link href="/our-story" className="btn-outline">Our Full Story</Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              {/* Modern stats grid — no photo needed here */}
              <div className="relative">
                {/* Large decorative number */}
                <div className="font-display text-[12rem] text-white/[0.04] leading-none select-none text-center tracking-tighter">25</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="font-display text-6xl text-white tracking-wider">25+ YEARS</div>
                  <div className="font-condensed text-white/40 text-sm tracking-[0.3em] uppercase">of Maryland Construction</div>
                  <div className="w-12 h-px bg-white/20 my-2" />
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    {[["500+","Projects"],["100%","Licensed"],["MD","Statewide"]].map(([n, l]) => (
                      <div key={l} className="border border-white/10 p-4 text-center">
                        <div className="font-display text-3xl text-white">{n}</div>
                        <div className="font-condensed text-white/30 text-xs tracking-widest uppercase mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Service area */}
              <div className="mt-6 border border-white/8 p-5">
                <div className="font-condensed text-white/25 text-xs tracking-[0.3em] uppercase mb-3">Recent projects in</div>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <span key={a} className="text-white/35 font-condensed text-xs tracking-wider bg-white/4 border border-white/6 px-2 py-1">{a}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-pad bg-brand-black border-t border-white/8">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl lg:text-7xl text-white tracking-wider leading-tight">
            HAVE A PROJECT<br />IN MARYLAND?<br /><span className="text-stroke">LET'S BUILD IT.</span>
          </h2>
          <p className="text-white/35 mt-6 text-lg">Free estimates across all of Maryland. We respond within 24 hours.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
            <a href="tel:+13479773212" className="btn-outline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (347) 977-3212
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
