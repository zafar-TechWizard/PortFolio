"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

export function DynamicHeader() {
  const [isMerged, setIsMerged] = useState(false);

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
                  <Link href="/" className="text-sm font-medium text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Home</Link>
                  <Link href="/about" className="text-sm font-medium text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">About</Link>
                  <Link href="/projects" className="text-sm font-medium text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Projects</Link>
                  <Link href="/skills" className="text-sm font-medium text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Skills</Link>
                  <Link href="/journey" className="text-sm font-medium text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Journey</Link>
                </div>
              </div>
            </motion.nav>

            {/* CONTACT */}
            <motion.div layout transition={springConfig} className="pointer-events-auto h-full w-[150px] flex items-center justify-center">
              <div className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out group ${isMerged ? "rounded-full bg-transparent border-transparent" : "rounded-[2rem] backdrop-blur-2xl bg-gradient-to-bl from-secondary/20 to-white/[0.05] border border-white/20 border-t-secondary/50 border-r-secondary/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-secondary/20 hover:shadow-[0_10px_40px_rgba(157,78,221,0.5)]"}`}>
                <div className={`absolute inset-0 bg-gradient-to-l from-secondary/40 via-secondary/10 to-transparent blur-[12px] pointer-events-none transition-opacity duration-700 ${isMerged ? "opacity-0" : "opacity-100"}`} />
                <Link href="/#contact" className="relative z-10 flex items-center justify-center w-full h-full text-sm font-bold text-white tracking-wide group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(157,78,221,1)] transition-all">
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
    </>
  );
}
