"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    title: "Product Thinking",
    description: "I don't just write code to close tickets. I focus on understanding the business bottleneck, solving operational problems, and designing systems that feel practical and human-centered.",
    icon: "🧠"
  },
  {
    title: "System Architecture",
    description: "Designing scalable, modular backend systems and databases optimized for performance and maintainability from day one.",
    icon: "🏗️"
  },
  {
    title: "Context-Aware AI",
    description: "Building memory-driven assistants, RAG architectures, and multi-agent systems that don't just respond — they think, adapt, and evolve.",
    icon: "⚡"
  },
  {
    title: "Intelligent Automation",
    description: "Engineering event-driven workflows, real-time data pipelines, and automation-first backend architectures to eliminate repetitive work.",
    icon: "⚙️"
  }
];

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="philosophy" ref={containerRef} className="relative w-full bg-[#050505] py-32 px-6">
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative">
        
        {/* Left Side: Sticky Statement */}
        <div className="lg:w-1/2 lg:sticky lg:top-40 h-fit flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Engineering Philosophy
          </div>
          
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading drop-shadow-xl">
            Most developers <br/>build features.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">I design intelligent systems.</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md leading-relaxed">
            I approach engineering like a systems architect rather than a task-based developer. My work sits at the intersection of AI Systems Engineering, SaaS Product Development, and Workflow Automation.
          </p>
        </div>

        {/* Right Side: Scrolling Pillars */}
        <div className="lg:w-1/2 flex flex-col gap-12 lg:pt-32 pb-32 z-10">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0.8 1", "0.3 0.5"] // Animate as it enters the middle third of the screen
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const glow = useTransform(scrollYProgress, [0, 1], ["rgba(255,107,74,0)", "rgba(255,107,74,0.15)"]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="relative p-10 rounded-[2.5rem] bg-[#0A0D12] border border-white/[0.05] backdrop-blur-3xl overflow-hidden group hover:border-white/[0.1] transition-colors"
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700" 
        style={{ background: `radial-gradient(circle at 50% 0%, ${glow.get()}, transparent 70%)` }}
      />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-3xl shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          {pillar.icon}
        </div>
        <h3 className="text-3xl font-bold text-white font-heading tracking-tight">{pillar.title}</h3>
        <p className="text-white/60 text-lg leading-relaxed">{pillar.description}</p>
      </div>
    </motion.div>
  );
}
