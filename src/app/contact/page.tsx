"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = ["Kitchen Remodeling","Bathroom Remodeling","Roofing","Basement Finishing","Home Addition","Deck / Outdoor Space","Siding & Exterior","Demolition / Gut Renovation","Flooring","Painting & Drywall","General Contracting","Other"];
const steps = ["Your Info", "Project Details", "Submit"];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", description:"", timeline:"", budget:"" });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: `New estimate request from ${form.name}` }),
      });
      if (res.ok) setSubmitted(true);
      else alert("Something went wrong. Please call (347) 977-3212.");
    } catch {
      alert("Something went wrong. Please call (347) 977-3212.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md px-4">
          <div className="w-16 h-16 border border-white/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h2 className="font-display text-5xl text-white tracking-wider mb-4">REQUEST SENT</h2>
          <p className="text-white/40 mb-8">Thanks {form.name.split(" ")[0]}! We'll review your project and get back to you within 24 hours. For urgent requests call <a href="tel:+13479773212" className="text-white">(347) 977-3212</a>.</p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)"/>
          </svg>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white/[0.015] skew-x-[6deg] origin-bottom-left" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="font-condensed text-xs tracking-widest uppercase text-white/30 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Contact</span>
            </nav>
            <h1 className="font-display text-6xl lg:text-8xl text-white tracking-wider leading-none">
              FREE<br /><span className="text-stroke">ESTIMATE</span>
            </h1>
            <div className="w-16 h-px bg-white/30 mt-6 mb-5" />
            <p className="text-white/50 text-lg max-w-xl">Tell us about your project. We respond within 24 hours with a detailed, no-obligation estimate.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Sidebar */}
            <AnimatedSection direction="right" className="space-y-5">
              <div className="border border-white/8 p-7">
                <h3 className="font-display text-2xl text-white tracking-wider mb-5">CONTACT US</h3>
                {[
                  { label: "Phone", val: "(347) 977-3212", href: "tel:+13479773212" },
                  { label: "Email", val: "rapidconstructinc@gmail.com", href: "mailto:rapidconstructinc@gmail.com" },
                  { label: "Hours", val: "Mon–Sat, 7:00 AM – 6:00 PM", href: null },
                  { label: "Service Area", val: "All of Maryland", href: null },
                ].map(({ label, val, href }) => (
                  <div key={label} className="mb-5">
                    <span className="font-condensed text-white/25 text-xs tracking-widest uppercase block mb-1">{label}</span>
                    {href ? <a href={href} className="text-white/60 text-sm hover:text-white transition-colors">{val}</a> : <span className="text-white/45 text-sm">{val}</span>}
                  </div>
                ))}
                <div className="flex gap-4 mt-4 pt-4 border-t border-white/8">
                  <a href="https://instagram.com/rcr_constructinc" target="_blank" rel="noopener noreferrer" className="text-white/30 font-condensed text-xs tracking-widest uppercase hover:text-white transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/share/1Fg7he7D3n/" target="_blank" rel="noopener noreferrer" className="text-white/30 font-condensed text-xs tracking-widest uppercase hover:text-white transition-colors">Facebook</a>
                </div>
              </div>
              <div className="border border-white/8 p-6">
                <div className="font-display text-xl text-white tracking-wider mb-2">LICENSED &amp; INSURED</div>
                <p className="text-white/35 text-sm leading-relaxed">Every project is covered by comprehensive general liability insurance. Certificate provided on request.</p>
              </div>
              <div className="border border-white/8 p-6">
                <div className="font-condensed text-white text-sm tracking-wider uppercase mb-2">24-Hour Response</div>
                <p className="text-white/35 text-sm">We respond to all estimate requests within <span className="text-white">24 hours</span>. Usually faster.</p>
              </div>
            </AnimatedSection>

            {/* Multi-step form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                {/* Step indicators */}
                <div className="flex items-center gap-3 mb-10">
                  {steps.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center font-condensed text-sm transition-all duration-300 ${i <= step ? "bg-white text-black" : "border border-white/20 text-white/30"}`}>
                        {i < step ? "✓" : i + 1}
                      </div>
                      <span className={`font-condensed text-xs tracking-widest uppercase hidden sm:block ${i === step ? "text-white" : "text-white/25"}`}>{s}</span>
                      {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-white/50" : "bg-white/10"}`} />}
                    </div>
                  ))}
                </div>

                <div className="border border-white/8 p-8 sm:p-10">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                        <h2 className="font-display text-3xl text-white tracking-wider mb-6">YOUR INFORMATION</h2>
                        {[
                          { k: "name",  label: "Full Name *",      placeholder: "John Smith",           type: "text" },
                          { k: "email", label: "Email Address *",  placeholder: "john@email.com",       type: "email" },
                          { k: "phone", label: "Phone Number *",   placeholder: "(555) 000-0000",       type: "tel" },
                        ].map(({ k, label, placeholder, type }) => (
                          <div key={k}>
                            <label className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-2">{label}</label>
                            <input type={type} value={form[k as keyof typeof form]} onChange={e => set(k, e.target.value)} placeholder={placeholder}
                              className="w-full bg-black border border-white/10 focus:border-white/40 text-white placeholder-white/15 text-sm px-4 py-3 outline-none transition-colors font-body"/>
                          </div>
                        ))}
                        <div className="pt-2">
                          <button onClick={() => setStep(1)} disabled={!form.name || !form.email || !form.phone}
                            className="btn-primary w-full justify-center disabled:opacity-30 disabled:cursor-not-allowed">
                            Next: Project Details →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                        <h2 className="font-display text-3xl text-white tracking-wider mb-6">PROJECT DETAILS</h2>
                        <div>
                          <label className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-2">Service Needed *</label>
                          <select value={form.service} onChange={e => set("service", e.target.value)}
                            className="w-full bg-black border border-white/10 focus:border-white/40 text-white text-sm px-4 py-3 outline-none transition-colors font-body">
                            <option value="">Select a service...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-2">Project Description *</label>
                          <textarea value={form.description} onChange={e => set("description", e.target.value)}
                            placeholder="Describe your project — size, scope, any specific requirements or questions..." rows={4}
                            className="w-full bg-black border border-white/10 focus:border-white/40 text-white placeholder-white/15 text-sm px-4 py-3 outline-none transition-colors resize-none font-body"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-2">Timeline</label>
                            <select value={form.timeline} onChange={e => set("timeline", e.target.value)}
                              className="w-full bg-black border border-white/10 focus:border-white/40 text-white text-sm px-4 py-3 outline-none font-body">
                              <option value="">Select...</option>
                              <option>ASAP</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Planning ahead</option>
                            </select>
                          </div>
                          <div>
                            <label className="font-condensed text-white/30 text-xs tracking-widest uppercase block mb-2">Budget Range</label>
                            <select value={form.budget} onChange={e => set("budget", e.target.value)}
                              className="w-full bg-black border border-white/10 focus:border-white/40 text-white text-sm px-4 py-3 outline-none font-body">
                              <option value="">Select...</option>
                              <option>Under $5,000</option><option>$5,000 – $15,000</option><option>$15,000 – $30,000</option><option>$30,000 – $75,000</option><option>$75,000+</option><option>Not sure yet</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button onClick={() => setStep(0)} className="btn-outline flex-1 justify-center">← Back</button>
                          <button onClick={() => setStep(2)} disabled={!form.service || !form.description} className="btn-primary flex-1 justify-center disabled:opacity-30 disabled:cursor-not-allowed">Review & Submit →</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h2 className="font-display text-3xl text-white tracking-wider mb-6">REVIEW &amp; SUBMIT</h2>
                        <div className="space-y-3 mb-8">
                          {[["Name",form.name],["Email",form.email],["Phone",form.phone],["Service",form.service],["Description",form.description],["Timeline",form.timeline||"Not specified"],["Budget",form.budget||"Not specified"]].map(([label,val]) => (
                            <div key={label} className="flex gap-4 pb-3 border-b border-white/5">
                              <span className="font-condensed text-white/25 text-xs tracking-widest uppercase w-24 flex-shrink-0 mt-0.5">{label}</span>
                              <span className="text-white/55 text-sm">{val}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">← Edit</button>
                          <button onClick={handleSubmit} disabled={loading} className="btn-primary flex-1 justify-center disabled:opacity-50">{loading ? "Sending..." : "Submit Request ✓"}</button>
                        </div>
                        <p className="text-white/20 text-xs mt-4 text-center">By submitting you agree to be contacted regarding your estimate.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
