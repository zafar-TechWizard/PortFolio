"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnose & Scope",
    description: "I map your actual business bottleneck. Not just what you think the problem is — what the data and workflow tell us it is.",
    color: "from-emerald-400 to-emerald-600",
    border: "group-hover:border-emerald-500/30",
    glowColor: "rgba(52,211,153,0.15)",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "System Architecture",
    description: "I design the full system before a line of code is written. Data flows, AI layers, and integration points — the blueprint comes first.",
    color: "from-blue-400 to-blue-600",
    border: "group-hover:border-blue-500/30",
    glowColor: "rgba(96,165,250,0.15)",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Build & Ship",
    description: "I build in working increments you can see and test. No six-week communication blackouts. No surprises at launch.",
    color: "from-purple-400 to-purple-600",
    border: "group-hover:border-purple-500/30",
    glowColor: "rgba(167,139,250,0.15)",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="relative w-full bg-[#000000] py-32 px-6 border-t border-white/[0.05] overflow-hidden">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2 text-xs font-semibold text-white/60 tracking-widest uppercase backdrop-blur-xl mb-6 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
              How I turn your problem<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/30">
                into a working system.
              </span>
            </h2>
          </div>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Desktop connecting animated line */}
          <div className="absolute hidden lg:block top-8 left-[15%] right-[15%] h-[2px]">
             {/* Base dashed line */}
             <div className="absolute inset-0 border-t-2 border-dashed border-white/[0.05]" />
             {/* Animated gradient travelling across the line */}
             <motion.div
               className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
               animate={{ left: ["-50%", "150%"] }}
               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
             />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col gap-8 p-10 rounded-[2rem] bg-[#050505] border border-white/[0.05] overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:bg-[#0a0a0a] hover:shadow-2xl ${step.border}`}
            >
              
              {/* Top Section: Icon & Line */}
              <div className="relative z-10 flex items-center justify-between">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 border border-white/[0.08] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center m-[1px]">
                     {step.icon}
                  </div>
                </div>
                
                <span className="text-[5rem] font-black leading-none font-heading text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 select-none absolute -top-4 right-0">
                  {step.number}
                </span>
              </div>

              {/* Content Section */}
              <div className="relative z-10 flex flex-col gap-4 mt-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: step.glowColor }}
              />

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-700 ease-out`} />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
