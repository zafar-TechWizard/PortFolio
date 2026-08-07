"use client";
import React from "react";
import { motion } from "framer-motion";

const credentials = [
  {
    org: "SoftKiwi",
    role: "Full-Stack Software Engineer",
    period: "Sep 2025 – Mar 2026",
    dot: "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]",
  },
  {
    org: "Celebal Technologies",
    role: "Data Science & AI Engineer",
    period: "May – Jul 2025",
    dot: "bg-secondary shadow-[0_0_10px_rgba(var(--secondary),0.8)]",
  },
  {
    org: "ACIC RISE · CGC Landran",
    role: "Hackathon Finalist",
    period: "Top 4 of 250+ Teams",
    dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  },
];

export function SocialProofStrip() {
  return (
    <section className="relative w-full bg-[#050505] border-y border-white/[0.04] overflow-hidden">
      
      {/* Faint background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-secondary/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Label - Restored to the clean original style, just less wordy */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white/40 text-[11px] font-semibold tracking-[0.25em] uppercase mb-8"
        >
          Trusted By & Recognized At
        </motion.p>

        {/* Cards row - Restored original horizontal pill layout, but with premium unified styling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] backdrop-blur-xl transition-all duration-300 cursor-default min-w-[260px] sm:min-w-0 shadow-lg"
            >
              {/* Accent dot */}
              <span className={`w-2.5 h-2.5 rounded-full ${c.dot} shrink-0`} />

              <div className="flex flex-col">
                <span className="text-white/90 font-semibold text-sm tracking-tight leading-snug">
                  {c.org}
                </span>
                <span className="text-white/50 text-[11px] tracking-wide mt-0.5">
                  {c.role}
                </span>
              </div>

              {/* Period / badge pill */}
              <span className="ml-auto text-[10px] font-medium text-white/30 whitespace-nowrap pl-4 group-hover:text-white/50 transition-colors">
                {c.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider line at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 h-px w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-white/[0.08] to-transparent origin-center"
        />
      </div>
    </section>
  );
}
