"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const deliveredWork = [
  {
    title: "AI-Powered SaaS Research Platform",
    client: "InfoLytix — Internal Product",
    status: "Shipped & Live",
    description: "Built a full-stack AI research assistant from zero. Users upload documents, ask questions in natural language, and receive source-referenced, context-aware answers. Handles semantic retrieval across thousands of documents.",
    results: ["10K+ documents indexed", "RAG pipeline with 95%+ relevance", "Sub-2s query response"],
    stack: ["Flask", "MongoDB Atlas", "LangChain", "Vector Search"],
    color: "from-primary"
  },
  {
    title: "Emotionally Intelligent AI Companion",
    client: "SOFI — AI Ecosystem",
    status: "In Active Development",
    description: "Architecting a personalized AI assistant with long-term memory, emotional awareness, and autonomous workflows. Features a centralized brain architecture with modular agent systems that learn and adapt over time.",
    results: ["Persistent memory across sessions", "WhatsApp-native automation", "Multi-agent orchestration"],
    stack: ["Agentic Architecture", "LLMs", "Memory Systems", "Task Orchestration"],
    color: "from-secondary"
  },
  {
    title: "Coworking Space Management SaaS",
    client: "Client Project",
    status: "Delivered",
    description: "End-to-end SaaS platform for managing coworking spaces — member onboarding, booking systems, invoicing, real-time availability dashboards, and automated notifications. Full product lifecycle from architecture to deployment.",
    results: ["Complete member lifecycle", "Automated invoicing", "Real-time availability"],
    stack: ["Next.js", "FastAPI", "MongoDB", "Tailwind CSS"],
    color: "from-blue-500"
  },
  {
    title: "Corporate Web Redesign & Digital Presence",
    client: "Multiple Clients",
    status: "Delivered",
    description: "Complete website redesigns focused on converting visitors into leads. SEO-optimized, performance-first builds with custom animations, responsive layouts, and CMS integration for non-technical content management.",
    results: ["Page speed scores 95+", "Mobile-first responsive", "SEO-optimized builds"],
    stack: ["Next.js", "Tailwind CSS", "Vercel", "Custom CMS"],
    color: "from-emerald-500"
  }
];

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" ref={containerRef} className="relative w-full bg-[#050505] py-32 px-6">

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative">

        {/* Left Side: Sticky Statement */}
        <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Work & Delivery
          </div>

          <h2 className="text-5xl md:text-[4rem] font-bold tracking-tighter text-white leading-[1.05] font-heading drop-shadow-xl">
            I don&apos;t just promise.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">I ship.</span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-light max-w-md leading-relaxed">
            Every system I build is designed to solve a real problem, not demonstrate a tech stack. Here&apos;s the work I&apos;ve delivered — from AI research platforms to full SaaS products.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-2xl font-black text-white font-heading">10+</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Projects</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-2xl font-black text-white font-heading">3+</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">AI Systems</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-2xl font-black text-white font-heading">100%</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Delivered</span>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Work Cards */}
        <div className="lg:w-7/12 flex flex-col gap-10 lg:pt-16 pb-32 z-10">
          {deliveredWork.map((work, index) => (
            <WorkCard key={index} work={work} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: typeof deliveredWork[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0.8 1", "0.3 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="relative p-8 md:p-10 rounded-[2rem] bg-[#0A0D12] border border-white/[0.05] backdrop-blur-3xl overflow-hidden group hover:border-white/[0.1] transition-colors"
    >
      {/* Tinted Background Glow */}
      <div className={`absolute -bottom-16 -right-16 w-52 h-52 bg-gradient-to-tl ${work.color} to-transparent opacity-10 blur-[60px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-25`} />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className={`text-xs font-bold tracking-widest uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r ${work.color} to-white/50`}>
              {work.client}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight leading-tight">{work.title}</h3>
          </div>
          <span className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${work.status === "Shipped & Live"
              ? "text-green-400 border-green-400/20 bg-green-400/5"
              : work.status === "In Active Development"
                ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5"
                : "text-white/60 border-white/10 bg-white/[0.03]"
            }`}>
            {work.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/50 text-base leading-relaxed">{work.description}</p>

        {/* Results */}
        <div className="pt-5 border-t border-white/[0.05]">
          <p className="text-white/80 text-xs tracking-widest uppercase mb-4 font-semibold">Key Outcomes</p>
          <div className="flex flex-wrap gap-2">
            {work.results.map((result, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/70 text-sm">
                {result}
              </span>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {work.stack.map((tech, i) => (
            <span key={i} className="text-white/30 text-xs font-mono tracking-wider">
              {tech}{i < work.stack.length - 1 && <span className="ml-2 text-white/10">•</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
