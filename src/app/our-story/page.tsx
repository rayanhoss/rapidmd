import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Story — 25+ Years of Maryland Construction",
  description: "Learn about Rapid Construction & Renovation LLC — a Maryland-based construction company with 25+ years of experience. Licensed, insured, and built on craftsmanship, integrity, and reliability.",
  alternates: { canonical: "https://www.rapidconstructionservices.com/our-story" },
};

const values = [
  { title: "Craftsmanship",       desc: "Every nail, every beam, every finish line — done right the first time." },
  { title: "Communication",       desc: "You're never left wondering. We keep you updated throughout every project." },
  { title: "Timeliness",          desc: "We respect your schedule. Projects are planned and executed on time." },
  { title: "Respect",             desc: "We treat your home or business like it's our own — clean, careful, professional." },
  { title: "Results-Driven",      desc: "We're not done until you're completely satisfied with the finished product." },
  { title: "Transparency",        desc: "Honest pricing upfront. No hidden fees, no surprise change orders." },
];

const whyUs = [
  "Licensed & insured in Maryland",
  "25+ years of local experience",
  "Commitment to quality workmanship",
  "Transparent pricing & honest communication",
  "Residential and commercial capability",
  "Responsive and reliable from day one",
];

export default function OurStoryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="story-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#story-grid)"/>
          </svg>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.015] skew-x-[-6deg] origin-top-right" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="font-condensed text-xs tracking-widest uppercase text-white/30 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Our Story</span>
            </nav>
            <h1 className="font-display text-6xl lg:text-9xl text-white tracking-wider leading-none">
              OUR<br /><span className="text-stroke">STORY</span>
            </h1>
            <div className="w-16 h-px bg-white/30 mt-6 mb-6" />
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              A Maryland-based construction company built on craftsmanship, integrity, and reliability — serving homeowners and businesses for over 25 years.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main story */}
      <section className="section-pad bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <AnimatedSection>
                <h2 className="font-display text-4xl text-white tracking-wider mb-5">ABOUT US</h2>
                <div className="w-12 h-px bg-white/20 mb-6" />
                <p className="text-white/50 leading-relaxed mb-4">
                  We're a Maryland-based construction company built on craftsmanship, integrity, and reliability. With over 25 years of hands-on experience, we've grown into a licensed LLC serving homeowners and businesses across the state.
                </p>
                <p className="text-white/50 leading-relaxed">
                  From humble beginnings to a growing team of skilled tradesmen and project managers, we've successfully completed hundreds of renovations, remodels, and builds across Maryland. Our reputation is built on showing up, doing the work right, and leaving every client satisfied.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="font-display text-4xl text-white tracking-wider mb-5">HOW WE WORK</h2>
                <div className="w-12 h-px bg-white/20 mb-6" />
                <p className="text-white/50 leading-relaxed mb-4">
                  Every project is approached with precision, care, and transparency. Whether your job is large or small, we dedicate the same level of attention and professionalism to get it done right.
                </p>
                <p className="text-white/50 leading-relaxed">
                  We provide detailed estimates before work begins, communicate throughout the project, and never consider the job done until you're completely satisfied.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="font-display text-4xl text-white tracking-wider mb-5">OUR GROWTH</h2>
                <div className="w-12 h-px bg-white/20 mb-6" />
                <p className="text-white/50 leading-relaxed">
                  From our humble beginnings to a growing team of skilled tradesmen and managers, we've successfully completed dozens of renovations, remodels, and builds across Maryland. Our growth is a direct result of the trust our clients place in us — and we take that seriously on every job.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="left" className="space-y-6">
              <div className="relative">
                <Image
                  src="/about.png"
                  alt="Construction crew working on Maryland renovation project"
                  width={600}
                  height={400}
                  className="w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Why us */}
              <div className="border border-white/8 p-8">
                <h3 className="font-display text-2xl text-white tracking-wider mb-5">WHY CHOOSE US?</h3>
                <ul className="space-y-3">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/services" className="btn-outline text-sm">View Our Services</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-brand-black-2 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <span className="font-condensed text-white/30 text-xs tracking-[0.3em] uppercase">What We Stand For</span>
            <h2 className="font-display text-5xl text-white mt-3 tracking-wider">VALUES WE STAND BY</h2>
            <div className="w-16 h-px bg-white/20 mt-5" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <div className="bg-brand-black-2 p-8 h-full">
                  <div className="font-condensed text-white text-lg tracking-wider uppercase mb-3">{v.title}</div>
                  <div className="w-8 h-px bg-white/20 mb-4" />
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-brand-black">
        <AnimatedSection className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white tracking-wider mb-4">READY TO WORK WITH US?</h2>
          <p className="text-white/40 mb-8">Get a free, no-obligation estimate for your Maryland construction project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Free Estimate</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
