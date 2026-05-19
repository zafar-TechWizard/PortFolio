"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const coreStack = [
  { name: "Python", icon: "🐍", desc: "Primary language" },
  { name: "LangChain", icon: "🔗", desc: "LLM orchestration" },
  { name: "Next.js", icon: "▲", desc: "Full-stack React" },
  { name: "FastAPI", icon: "⚡", desc: "Async Python APIs" },
  { name: "React", icon: "⚛", desc: "UI framework" },
  { name: "MongoDB", icon: "🍃", desc: "Document store" },
  { name: "TypeScript", icon: "TS", desc: "Type-safe JS" },
  { name: "PostgreSQL", icon: "🐘", desc: "Relational DB" },
];

const categories = [
  {
    id: "ai",
    title: "AI & ML",
    description: "Building intelligent systems — from RAG pipelines to multi-agent architectures.",
    color: "text-primary",
    borderColor: "border-primary/25",
    bgColor: "bg-primary/[0.06]",
    glowColor: "rgba(255,107,74,0.12)",
    dotColor: "bg-primary",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents & Multi-Agent Systems",
      "LangChain Pipelines",
      "LLM Integration",
      "Hugging Face",
      "OpenCV & Computer Vision",
      "Natural Language Processing",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable APIs, async systems, and service architectures that hold up in production.",
    color: "text-blue-400",
    borderColor: "border-blue-400/25",
    bgColor: "bg-blue-400/[0.05]",
    glowColor: "rgba(96,165,250,0.12)",
    dotColor: "bg-blue-400",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "REST APIs",
      "WebSocket Systems",
      "Microservices",
      "Authentication & Auth",
      "Async Architectures",
    ],
  },
  {
    id: "data",
    title: "Data & Cloud",
    description: "From vector stores to relational databases — the right storage for the right problem.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/25",
    bgColor: "bg-emerald-400/[0.05]",
    glowColor: "rgba(52,211,153,0.12)",
    dotColor: "bg-emerald-400",
    skills: [
      "MongoDB Atlas",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Vector Databases",
      "NumPy & Pandas",
      "Real-time Processing",
      "Document Storage",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Product-quality interfaces — AI dashboards, SaaS platforms, and everything in between.",
    color: "text-secondary",
    borderColor: "border-secondary/25",
    bgColor: "bg-secondary/[0.06]",
    glowColor: "rgba(138,99,210,0.12)",
    dotColor: "bg-secondary",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SaaS Dashboard Design",
      "AI Chatbot Interfaces",
      "UX-focused Web",
      "Framer Motion",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Workflows, integrations, and pipelines that run without you.",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/25",
    bgColor: "bg-yellow-400/[0.05]",
    glowColor: "rgba(250,204,21,0.12)",
    dotColor: "bg-yellow-400",
    skills: [
      "WhatsApp API",
      "Web Scraping Pipelines",
      "Background Tasks",
      "Event-driven Workflows",
      "API Integrations",
      "SMTP & Notification Systems",
    ],
  },
];

// ─── Background ───────────────────────────────────────────────────────────────
function MouseGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const fn = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: pos.x, top: pos.y, width: 700, height: 700, zIndex: 0,
        background: "radial-gradient(circle, rgba(138,99,210,0.06) 0%, rgba(255,107,74,0.03) 40%, transparent 65%)",
        transition: "left 0.55s cubic-bezier(0.23,1,0.32,1), top 0.55s cubic-bezier(0.23,1,0.32,1)",
      }} />
  );
}

function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <motion.div className="absolute rounded-full bg-secondary/[0.055] blur-[150px]"
        style={{ width: 800, height: 800, top: "-15%", right: "-15%" }}
        animate={{ x: [0, -70, 40, 0], y: [0, 90, -55, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute rounded-full bg-primary/[0.05] blur-[120px]"
        style={{ width: 600, height: 600, bottom: "5%", left: "-15%" }}
        animate={{ x: [0, 65, -35, 0], y: [0, -80, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }} />
    </div>
  );
}

function DotGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "42px 42px", zIndex: 0 }} />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function SkillsHero() {
  return (
    <section className="relative w-full bg-[#050505] pt-40 pb-20 overflow-hidden border-b border-white/[0.05]" style={{ zIndex: 1 }}>
      <motion.div className="absolute rounded-full bg-secondary/[0.08] blur-[130px] pointer-events-none"
        style={{ width: 600, height: 500, top: "-15%", right: "5%" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      {/* Fine grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-secondary w-fit mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Technical Stack
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-white font-heading leading-[0.92] mb-6">
          Built for<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">real problems.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
          Every tool here was chosen because it solves something real. 5 domains, 40+ technologies, all used in production.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex gap-10 flex-wrap">
          {[{ n: "5", l: "Domains" }, { n: "40+", l: "Technologies" }, { n: "3+", l: "Years in Use" }].map((s) => (
            <div key={s.l} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white font-heading tracking-tighter">{s.n}</span>
              <span className="text-white/30 text-[10px] uppercase tracking-[0.18em]">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Core Stack ───────────────────────────────────────────────────────────────
function CoreStack() {
  return (
    <section className="relative w-full bg-[#050505] py-20 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Pulsing center glow */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{ width: 600, height: 200, background: "radial-gradient(ellipse, rgba(255,107,74,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-2">Daily Drivers</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-heading">Core Stack</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {coreStack.map((tool, i) => (
            <motion.div key={tool.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all cursor-default">
              <span className="text-2xl font-bold font-heading text-white/80 group-hover:text-white transition-colors">
                {tool.icon}
              </span>
              <div className="text-center">
                <p className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">{tool.name}</p>
                <p className="text-white/25 text-[9px] mt-0.5">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skill Categories ─────────────────────────────────────────────────────────
function SkillCategories() {
  return (
    <section className="relative w-full bg-[#050505] py-24 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-2">All Domains</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-heading">Full Skill Map</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div key={cat.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.035] transition-all overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${cat.glowColor} 0%, transparent 60%)` }} />

              {/* Category header */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${cat.color}`}>{cat.title}</p>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{cat.description}</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.05] relative z-10" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill) => (
                  <span key={skill}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-medium text-white/60 ${cat.bgColor} border ${cat.borderColor} hover:text-white/85 transition-colors`}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Count badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="text-white/15 text-xs font-mono">{cat.skills.length}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Philosophy ───────────────────────────────────────────────────────────────
function SkillsPhilosophy() {
  return (
    <section className="relative w-full bg-[#050505] py-20 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {[
            {
              label: "How I Choose Tools",
              body: "The right tool is the one that actually solves the problem — not the newest one. I pick based on what ships, not what trends.",
              accent: "from-primary/50 to-primary/5",
            },
            {
              label: "How I Learn",
              body: "Always by building. Reading docs helps, but nothing sticks until it's in a working project under real constraints.",
              accent: "from-secondary/50 to-secondary/5",
            },
            {
              label: "What I'm Learning",
              body: "Deeper distributed systems, more advanced agent coordination, and sharper UI craft. The fundamentals never stop.",
              accent: "from-white/30 to-white/5",
            },
          ].map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8 bg-[#050505] hover:bg-white/[0.02] transition-colors group">
              <div className={`w-8 h-[2px] bg-gradient-to-r ${item.accent}`} />
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold">{item.label}</p>
              <p className="text-white/55 text-sm leading-[1.85] group-hover:text-white/70 transition-colors">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function SkillsCTA() {
  return (
    <section className="relative w-full bg-[#050505] py-28 overflow-hidden" style={{ zIndex: 1 }}>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 600, height: 300, background: "radial-gradient(ellipse, rgba(138,99,210,0.07) 0%, rgba(255,107,74,0.05) 50%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
        <p className="text-white/30 text-xs uppercase tracking-[0.22em] font-semibold">Want these skills on your project?</p>
        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white leading-[0.95]">
          Let&apos;s build something intelligent.
        </h2>
        <div className="flex gap-5 flex-wrap justify-center mt-2">
          <a href="mailto:mdzafarddd@gmail.com"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, rgba(138,99,210,0.15), rgba(255,107,74,0.15))", border: "1px solid rgba(138,99,210,0.3)" }}>
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <Link href="/projects" className="text-white/35 hover:text-white/65 text-sm font-medium transition-colors">See Projects →</Link>
        </div>
        <div className="mt-12 pt-7 border-t border-white/[0.05] w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">© {new Date().getFullYear()} Zafar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-white/22 hover:text-white/55 transition-colors text-xs">Home</Link>
            <Link href="/about" className="text-white/22 hover:text-white/55 transition-colors text-xs">About</Link>
            <Link href="/projects" className="text-white/22 hover:text-white/55 transition-colors text-xs">Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export function SkillsPageContent() {
  return (
    <>
      <DotGrid />
      <FloatingOrbs />
      <MouseGlow />
      <SkillsHero />
      <CoreStack />
      <SkillCategories />
      <SkillsPhilosophy />
      <SkillsCTA />
    </>
  );
}
