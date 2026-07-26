"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/journey", label: "Journey" },
];

export function DynamicHeader() {
  const [isMerged, setIsMerged] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger slightly before leaving hero
      const threshold = window.innerHeight * 0.8;
      setIsMerged(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft spring for the fluid liquid feel
  const springConfig: Transition = { type: "spring", stiffness: 150, damping: 20, mass: 1 };

  return (
    <>
      {/* 
        True Gooey SVG Filter 
        Applied ONLY to the background layer so text remains crystal clear!
      */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </svg>

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none mt-4">

        <div className="relative w-full mx-auto px-6">

          {/* ==========================================================
              BACKGROUND LAYER (GOOEY)
              This layer contains the blobs that melt together.
          ========================================================== */}
          <div className="absolute inset-0 px-6 pointer-events-none" style={{ filter: "url(#gooey)" }}>
            <motion.div
              layout
              className={`flex items-center transition-all duration-700 ease-in-out h-14 ${isMerged ? "justify-center gap-0" : "justify-between gap-0"
                }`}
            >
              {/* Logo Blob */}
              <motion.div layout transition={springConfig} className="h-full bg-white/20 rounded-full w-[160px]" />
              {/* Nav Blob */}
              <motion.div layout transition={springConfig} className="hidden lg:block h-full bg-white/20 rounded-full w-[530px]" />
              {/* Contact Blob */}
              <motion.div layout transition={springConfig} className="h-full bg-white/20 rounded-full w-[150px]" />
            </motion.div>
          </div>

          {/* ==========================================================
              FOREGROUND LAYER (CONTENT)
              This layer contains the crisp text and images.
              Zero padding changes = Zero layout jitter!
          ========================================================== */}
          <motion.div
            layout
            className={`relative flex items-center transition-all duration-700 ease-in-out h-14 ${isMerged ? "justify-center gap-4 scale-95" : "justify-between gap-0 scale-100"
              }`}
          >

            {/* LOGO */}
            <motion.div layout transition={springConfig} className="pointer-events-auto h-full flex items-center justify-center w-[160px]">
              <div className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${isMerged ? "rounded-full bg-transparent border-transparent" : "rounded-[2rem] backdrop-blur-2xl bg-gradient-to-br from-primary/20 to-white/[0.05] border border-white/20 border-t-primary/50 border-l-primary/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-primary/20"}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/10 to-transparent blur-[12px] pointer-events-none transition-opacity duration-700 ${isMerged ? "opacity-0" : "opacity-100"}`} />
                <Link href="/" className="relative z-10 flex items-center gap-3 px-6 w-full h-full justify-center group">
                  <Image src="/img/Logo.png" alt="Zafar Logo" width={32} height={32} style={{ width: 32, height: 32 }} className="object-contain group-hover:scale-110 transition-transform duration-500" priority />
                  <span className="text-white font-bold tracking-widest hidden md:block text-lg drop-shadow-[0_2px_10px_rgba(255,107,74,0.8)]">
                    ZAFAR
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* NAV ITEMS */}
            <motion.nav layout transition={springConfig} className="hidden lg:flex pointer-events-auto h-full w-[530px]">
              <div className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${isMerged ? "rounded-full bg-transparent border-transparent" : "rounded-[2rem] backdrop-blur-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/20 border-t-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"}`}>
                <div className={`absolute inset-0 bg-gradient-to-b from-white/30 to-transparent blur-[12px] pointer-events-none transition-opacity duration-700 ${isMerged ? "opacity-0" : "opacity-40"}`} />
                <div className="relative z-10 flex items-center justify-center gap-6 w-full h-full px-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-sm font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-white drop-shadow-[0_0_12px_rgba(255,107,74,0.7)]"
                          : "text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-px rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>

            {/* HAMBURGER — mobile only */}
            <motion.div layout transition={springConfig} className="lg:hidden pointer-events-auto h-full flex items-center justify-center w-[60px]">
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
              >
                <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-5"}`} />
                <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </motion.div>

            {/* CONTACT — desktop only */}
            <motion.div layout transition={springConfig} className="hidden lg:flex pointer-events-auto h-full w-[150px] items-center justify-center">
              <div className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out group ${isMerged ? "rounded-full bg-transparent border-transparent" : "rounded-[2rem] backdrop-blur-2xl bg-gradient-to-bl from-secondary/20 to-white/[0.05] border border-white/20 border-t-secondary/50 border-r-secondary/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-secondary/20 hover:shadow-[0_10px_40px_rgba(157,78,221,0.5)]"}`}>
                <div className={`absolute inset-0 bg-gradient-to-l from-secondary/40 via-secondary/10 to-transparent blur-[12px] pointer-events-none transition-opacity duration-700 ${isMerged ? "opacity-0" : "opacity-100"}`} />
                <Link href="/contact" className="relative z-10 flex items-center justify-center w-full h-full text-sm font-bold text-white tracking-wide group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(157,78,221,1)] transition-all">
                  Contact Me
                </Link>
              </div>
            </motion.div>

          </motion.div>

          {/* Global Blur Layer underneath to ensure glassmorphism look even with Gooey */}
          <div className={`absolute inset-0 px-6 -z-10 transition-all duration-700 pointer-events-none flex justify-center items-center ${isMerged ? "opacity-100" : "opacity-0"
            }`}>
            <div className="w-[800px] h-14 rounded-full backdrop-blur-3xl border border-white/20 border-t-white/40 bg-gradient-to-b from-white/[0.15] to-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-white/5" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 20px 40px rgba(0,0,0,0.8)' }} />
          </div>

        </div>

      </div>
      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#050505]/95 backdrop-blur-2xl"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: idx * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between w-full py-5 border-b border-white/[0.06] transition-colors ${
                      isActive(link.href) ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-4xl font-bold font-heading tracking-tighter">{link.label}</span>
                    {isActive(link.href) && (
                      <span className="text-primary text-2xl">↗</span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom: socials + CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="px-8 pb-12 flex items-center justify-between"
            >
              <div className="flex gap-6">
                <a href="#" className="text-white/30 hover:text-white text-sm font-medium transition-colors">LinkedIn</a>
                <a href="https://github.com/zafar-TechWizard" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm font-medium transition-colors">GitHub</a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-full text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#FF6B4A,#8A63D2)" }}
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
