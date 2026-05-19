"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "We map your actual bottleneck. Not what you think the problem is — what the data and workflow tell us it is.",
    color: "from-primary",
    textColor: "text-primary",
    glowColor: "rgba(255,107,74,0.15)"
  },
  {
    number: "02",
    title: "Architect",
    description: "I design the full system before a line of code is written. Data flows, AI layers, integration points — the blueprint comes first.",
    color: "from-secondary",
    textColor: "text-secondary",
    glowColor: "rgba(138,99,210,0.15)"
  },
  {
    number: "03",
    title: "Build & Ship",
    description: "I build in working increments you can see and test. No six-week blackouts. No surprises at launch.",
    color: "from-blue-500",
    textColor: "text-blue-400",
    glowColor: "rgba(59,130,246,0.15)"
  }
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-[#050505] py-32 px-6 border-t border-white/[0.05] overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-gradient-to-r from-primary/5 via-secondary/5 to-blue-500/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white/60 w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
            The Process
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
            How I turn your problem<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              into a working system.
            </span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Desktop connector line */}
          <div className="absolute hidden lg:block top-[3.75rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/30 via-secondary/30 to-blue-500/30" />
            {/* Animated travelling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60"
              animate={{ left: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col gap-6 p-10 rounded-[2rem] bg-[#0A0D12]/80 border border-white/[0.06] backdrop-blur-xl overflow-hidden group hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Background oversized number */}
              <div
                className={`absolute -top-2 right-4 text-[8rem] font-black leading-none font-heading pointer-events-none select-none`}
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                  color: "transparent"
                }}
              >
                {step.number}
              </div>

              {/* Corner glow on hover */}
              <div
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${step.glowColor}, transparent)` }}
              />

              {/* Step indicator circle */}
              <div className="relative z-10 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} to-transparent border border-white/[0.12] flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold font-mono text-sm">{step.number}</span>
                </div>
                <div className={`h-px flex-1 bg-gradient-to-r ${step.color} to-transparent opacity-30`} />
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
