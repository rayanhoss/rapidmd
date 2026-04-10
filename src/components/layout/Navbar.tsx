"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/our-story",  label: "Our Story" },
  { href: "/services",   label: "Services" },
  { href: "/contact",    label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Rapid Construction Home">
            <Image
              src="/logo.png"
              alt="Rapid Construction & Renovation LLC"
              width={160}
              height={60}
              className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-condensed text-sm tracking-widest uppercase transition-colors duration-200 underline-grow ${
                  pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+13479773212" className="font-condensed text-sm tracking-wider text-white/50 hover:text-white transition-colors">
              (347) 977-3212
            </a>
            <Link href="/contact" className="btn-primary text-xs">
              Free Estimate
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 flex flex-col gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-white origin-center" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-white origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <Image src="/logo.png" alt="Rapid Construction" width={140} height={52} className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-5xl tracking-wider transition-colors ${
                      pathname === link.href ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                href="tel:+13479773212"
                className="mt-4 font-condensed text-lg text-white/50 tracking-wider"
              >
                (347) 977-3212
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
