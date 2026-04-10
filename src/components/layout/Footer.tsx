import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/services",  label: "Services" },
  { href: "/contact",   label: "Contact" },
];

const services = [
  "General Contracting",
  "Roofing",
  "Renovations & Remodeling",
  "Masonry & Structural",
  "HVAC, Plumbing & Electrical",
  "Painting & Finishing",
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/8">
      {/* CTA Strip */}
      <div className="border-b border-white/8 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-white tracking-wider">READY TO BUILD SOMETHING?</h2>
            <p className="text-white/50 mt-1 font-body text-sm">Maryland's trusted construction team. Free estimates, no pressure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+13479773212" className="btn-primary">Call (347) 977-3212</a>
            <Link href="/contact" className="btn-outline">Get Free Quote</Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Rapid Construction & Renovation LLC" width={180} height={68} className="h-14 w-auto object-contain mb-5" />
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Delivering reliable, high-quality construction and renovation services across Maryland — on time, on budget, and built to last.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Licensed in MD", "Insured", "25+ Years", "Mon–Sat 7AM–6PM"].map((b) => (
                <span key={b} className="border border-white/15 text-white/40 font-condensed text-xs tracking-wider uppercase px-3 py-1">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-condensed text-white/80 tracking-widest uppercase text-xs mb-5 pb-3 border-b border-white/8">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/40 text-sm hover:text-white transition-colors underline-grow">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-condensed text-white/80 tracking-widest uppercase text-xs mb-5 pb-3 border-b border-white/8">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-0.5">Phone</span>
                <a href="tel:+13479773212" className="text-white/60 hover:text-white transition-colors">(347) 977-3212</a>
              </li>
              <li>
                <span className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-0.5">Email</span>
                <a href="mailto:rapidconstructinc@gmail.com" className="text-white/60 hover:text-white transition-colors break-all">rapidconstructinc@gmail.com</a>
              </li>
              <li>
                <span className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-0.5">Service Area</span>
                <span className="text-white/40">All of Maryland</span>
              </li>
              <li>
                <span className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-1">Follow</span>
                <div className="flex gap-4">
                  <a href="https://instagram.com/rcr_constructinc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors underline-grow">Instagram</a>
                  <a href="https://www.facebook.com/share/1Fg7he7D3n/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors underline-grow">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-xs font-condensed tracking-wider">
          <p>© {new Date().getFullYear()} Rapid Construction & Renovation LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
