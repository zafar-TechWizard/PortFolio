"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: "infolytix",
    title: "InfoLytix",
    subtitle: "AI Research & Knowledge Assistant",
    tagline: "Turn any document into a conversational AI resource — answer in under 2 seconds.",
    description:
      "Your team wastes hours digging through documents, tabs, and chat history searching for answers that already exist. InfoLytix turns your entire knowledge base into a conversational AI — ask a question, get a source-referenced answer instantly.",
    challenge: "Making retrieval contextually accurate across large, heterogeneous document collections without hallucination.",
    built: ["RAG pipeline end-to-end", "Vector indexing & semantic search", "Groq LLM integration", "Source citation engine"],
    architecture: ["Flask", "LangChain", "Groq LLM", "Vector Search", "Python"],
    category: "ai",
    status: "Shipped",
    statusStyle: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    year: "2024",
    color: "from-[#FF6B4A]",
    accent: "rgba(255,107,74,",
    glow: "rgba(255,107,74,0.15)",
    githubUrl: "https://github.com/zafar-TechWizard/InfoLytix",
    align: "left",
    viz: "infolytix",
  },
  {
    id: "sofi",
    title: "SOFI",
    subtitle: "Personalized AI Ecosystem",
    tagline: "A persistent AI companion that remembers, adapts, and acts autonomously.",
    description:
      "Most AI assistants forget who you are the moment you close the app. SOFI is architected from the ground up to remember, adapt, and act — a companion that learns your patterns, automates your workflows, and compounds in usefulness every day.",
    challenge: "Designing agent communication that preserves context across handoffs without degrading over long sessions.",
    built: ["Multi-agent orchestration layer", "Persistent memory system", "WhatsApp automation pipeline", "Background task execution"],
    architecture: ["Agentic Architecture", "LangChain", "LLMs", "Memory Categorization", "Task Orchestration"],
    category: "ai",
    status: "In Development",
    statusStyle: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
    year: "2024–25",
    color: "from-[#8A63D2]",
    accent: "rgba(138,99,210,",
    glow: "rgba(138,99,210,0.15)",
    githubUrl: null,
    align: "right",
    viz: "sofi",
  },
  {
    id: "zenpulse",
    title: "ZenPulse",
    subtitle: "Mental Wellness AI Platform",
    tagline: "Real-time compassionate AI support — always available, no scheduling required.",
    description:
      "Mental health support shouldn't need a waiting list or an insurance form. ZenPulse delivers real-time, compassionate AI-powered emotional support — an always-available companion built to listen, reflect, and respond with genuine care.",
    challenge: "Keeping emotional context consistent and empathetic across a full conversation session without losing therapeutic continuity.",
    built: ["Real-time WebSocket chat", "Session memory & continuity", "Emotional pattern analysis", "Crisis detection layer"],
    architecture: ["Flask", "Python", "LLM Integration", "Sentiment Analysis", "WebSocket"],
    category: "ai",
    status: "Shipped",
    statusStyle: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    year: "2025",
    color: "from-[#22C55E]",
    accent: "rgba(34,197,94,",
    glow: "rgba(34,197,94,0.15)",
    githubUrl: "https://github.com/zafar-TechWizard/ZenPulse",
    align: "left",
    viz: "zenpulse",
  },
  {
    id: "coworkpro",
    title: "CoWork Pro",
    subtitle: "Coworking Space Management SaaS",
    tagline: "Every operational layer of a coworking space — unified in one platform.",
    description:
      "Managing a coworking space on spreadsheets and group chats is a full-time job on its own. CoWork Pro centralises member onboarding, workspace bookings, billing, and admin workflows into a single production SaaS. Built and shipped professionally at SoftKiwi.",
    challenge: "Real-time booking conflict resolution across concurrent users with zero double-bookings.",
    built: ["End-to-end SaaS from zero to launch", "Booking & conflict resolution engine", "Billing & invoicing system", "Role-based access control"],
    architecture: ["Next.js", "FastAPI", "PostgreSQL", "React", "TypeScript", "Microservices"],
    category: "saas",
    status: "Shipped & Live",
    statusStyle: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    year: "2025–26",
    color: "from-[#3B82F6]",
    accent: "rgba(59,130,246,",
    glow: "rgba(59,130,246,0.15)",
    githubUrl: null,
    align: "right",
    viz: "coworkpro",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & ML" },
  { id: "saas", label: "SaaS" },
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
    <div
      className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: pos.x, top: pos.y, width: 700, height: 700, zIndex: 0,
        background: "radial-gradient(circle, rgba(255,107,74,0.05) 0%, rgba(138,99,210,0.03) 40%, transparent 65%)",
        transition: "left 0.55s cubic-bezier(0.23,1,0.32,1), top 0.55s cubic-bezier(0.23,1,0.32,1)",
      }}
    />
  );
}

function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <motion.div className="absolute rounded-full bg-primary/[0.05] blur-[150px]"
        style={{ width: 700, height: 700, top: "-10%", left: "-15%" }}
        animate={{ x: [0, 70, -40, 0], y: [0, -90, 55, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute rounded-full bg-secondary/[0.05] blur-[130px]"
        style={{ width: 600, height: 600, bottom: "10%", right: "-15%" }}
        animate={{ x: [0, -60, 35, 0], y: [0, 80, -50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 9 }} />
    </div>
  );
}

function DotGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "42px 42px", zIndex: 0,
    }} />
  );
}

// ─── Visualizations (reused from ProjectsSection) ────────────────────────────
function InfoLytixViz() {
  const nodes = [
    { label: "Document Ingestion", sublabel: "PDF · URL · Text", accent: "#FF6B4A" },
    { label: "Smart Chunker", sublabel: "Context-aware splitting", accent: "#FF8C6E" },
    { label: "Vector Database", sublabel: "Semantic embeddings", accent: "#FFA98F" },
    { label: "AI Reasoning Layer", sublabel: "LLM + RAG pipeline", accent: "#FFB99F" },
    { label: "Source-Referenced Answer", sublabel: "Response in < 2s", accent: "#FFCBB5" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-8 py-10 gap-0">
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/50 mb-6">RAG Architecture Pipeline</p>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative w-full max-w-[300px] flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: node.accent, boxShadow: `0 0 8px ${node.accent}80` }} />
            <div>
              <p className="text-white/80 text-sm font-medium leading-tight">{node.label}</p>
              <p className="text-white/30 text-[11px] mt-0.5">{node.sublabel}</p>
            </div>
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="relative w-px h-7 bg-gradient-to-b from-primary/40 to-primary/10 overflow-visible">
              <motion.div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ top: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: i * 0.36 }} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const satellites = [
  { label: "Memory", sublabel: "Long-term recall", top: "10%", left: "50%", transform: "translateX(-50%)", delay: 0 },
  { label: "Tasks", sublabel: "Orchestration", top: "34%", right: "5%", delay: 0.1 },
  { label: "WhatsApp", sublabel: "Automation", bottom: "20%", right: "12%", delay: 0.2 },
  { label: "Context", sublabel: "Awareness", bottom: "20%", left: "12%", delay: 0.3 },
  { label: "Response", sublabel: "Output layer", top: "34%", left: "5%", delay: 0.4 },
];

function SOFIViz() {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sofiLine2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A63D2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8A63D2" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#sofiLine2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="90%" y2="36%" stroke="url(#sofiLine2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="82%" y2="74%" stroke="url(#sofiLine2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="18%" y2="74%" stroke="url(#sofiLine2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="10%" y2="36%" stroke="url(#sofiLine2)" strokeWidth="1" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div className="relative w-[90px] h-[90px] rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center"
          animate={{ boxShadow: ["0 0 20px rgba(138,99,210,0.2)", "0 0 40px rgba(138,99,210,0.45)", "0 0 20px rgba(138,99,210,0.2)"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
          <motion.div className="absolute inset-2 rounded-full border border-secondary/25" animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }} style={{ borderStyle: "dashed" }} />
          <span className="text-secondary/90 text-[11px] font-bold text-center font-heading leading-tight z-10">AI<br />Brain</span>
        </motion.div>
      </div>
      {satellites.map((sat, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: sat.delay, duration: 0.4 }}
          className="absolute z-10 px-3 py-2 rounded-xl bg-[#0A0D12]/95 border border-secondary/20 text-center min-w-[72px]"
          style={{ top: sat.top, left: sat.left, right: (sat as { right?: string }).right, bottom: (sat as { bottom?: string }).bottom, transform: sat.transform }}>
          <p className="text-white/85 text-xs font-medium whitespace-nowrap">{sat.label}</p>
          <p className="text-white/30 text-[9px] whitespace-nowrap">{sat.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ZenPulseViz() {
  return (
    <div className="flex flex-col w-full h-full max-w-[340px] mx-auto">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-white/[0.02] rounded-t-3xl">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <span className="text-emerald-400 text-xs font-bold">Z</span>
        </div>
        <div>
          <p className="text-white/80 text-xs font-semibold">ZenPulse</p>
          <p className="text-emerald-400/70 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />Active & Listening
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end gap-4 px-5 py-6 bg-[#0A0D12]/60">
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="self-end max-w-[78%] px-4 py-3 rounded-2xl rounded-br-sm bg-white/[0.06] border border-white/[0.06]">
          <p className="text-white/75 text-sm leading-relaxed">I&apos;ve been feeling really overwhelmed lately...</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="self-start max-w-[82%] px-4 py-3 rounded-2xl rounded-bl-sm bg-emerald-500/[0.07] border border-emerald-500/[0.15]">
          <p className="text-white/70 text-sm leading-relaxed">I hear you. Let&apos;s take a breath together. What&apos;s been weighing on you most?</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}
          className="self-start flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-emerald-500/[0.04] border border-emerald-500/[0.08]">
          {[0, 0.2, 0.4].map((d, i) => (
            <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: d }} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const memberRows = [
  { name: "Arjun Sharma", plan: "Hot Desk", status: "Active", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  { name: "Priya Nair", plan: "Private Cabin", status: "Active", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  { name: "Ravi Mehta", plan: "Meeting Room", status: "Booked", statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
];

function CoWorkProViz() {
  return (
    <div className="flex flex-col w-full h-full max-w-[360px] mx-auto">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02] rounded-t-3xl">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <span className="text-blue-400 text-[10px] font-bold">C</span>
          </div>
          <span className="text-white/75 text-xs font-semibold">CoWork Pro</span>
        </div>
        <span className="text-white/25 text-[10px] font-mono">Admin Dashboard</span>
      </div>
      <div className="flex-1 flex flex-col gap-3 px-4 py-4 bg-[#0A0D12]/60">
        <div className="grid grid-cols-3 gap-2">
          {[{ label: "Members", value: "142", color: "text-blue-400" }, { label: "Bookings", value: "38", color: "text-emerald-400" }, { label: "Revenue", value: "₹84K", color: "text-primary" }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-0.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <span className={`text-sm font-bold font-heading ${s.color}`}>{s.value}</span>
              <span className="text-white/30 text-[9px] uppercase tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-white/25 text-[9px] uppercase tracking-[0.18em] px-1 font-semibold">Active Members</p>
          {memberRows.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-blue-400/80 text-[10px] font-bold">{m.name[0]}</span>
                </div>
                <div>
                  <p className="text-white/75 text-[11px] font-medium">{m.name}</p>
                  <p className="text-white/30 text-[9px]">{m.plan}</p>
                </div>
              </div>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold border ${m.statusColor}`}>{m.status}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 }}
          className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-primary/[0.05] border border-primary/[0.12] mt-auto">
          <div>
            <p className="text-white/60 text-[10px] font-medium">Invoice #INV-2024</p>
            <p className="text-white/30 text-[9px]">Arjun Sharma · Hot Desk · Mar</p>
          </div>
          <span className="text-primary text-[10px] font-bold">₹4,200</span>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ProjectsHero() {
  return (
    <section className="relative w-full bg-[#050505] pt-40 pb-20 overflow-hidden border-b border-white/[0.05]" style={{ zIndex: 1 }}>
      <motion.div className="absolute rounded-full bg-primary/[0.08] blur-[130px] pointer-events-none"
        style={{ width: 600, height: 400, top: "-10%", left: "10%" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Case Studies
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-white font-heading leading-[0.92] mb-6">
          The proof is in<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">the systems built.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
          4 production systems across AI, SaaS, and automation. Each one designed around a real problem.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex gap-10 flex-wrap">
          {[{ n: "4", l: "Projects Shipped" }, { n: "3", l: "AI Products" }, { n: "1", l: "Live SaaS" }].map((s) => (
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

// ─── Filter tabs ──────────────────────────────────────────────────────────────
function FilterTabs({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === f.id ? "text-white" : "text-white/45 hover:text-white/75"}`}
        >
          {active === f.id && (
            <motion.div layoutId="filterActive"
              className="absolute inset-0 bg-white/[0.08] border border-white/[0.14] rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }} />
          )}
          <span className="relative z-10">{f.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Single project card (case study) ────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isLeft = project.align === "left";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.1 1", "0.9 0"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{ position: "relative" }}
      className={`interactive flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#0A0D12]/60`}
    >
      {/* Visual panel */}
      <div className="w-full lg:w-1/2 h-[380px] lg:h-[580px] relative overflow-hidden group">
        <motion.div style={{ y: orbY }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${project.color} to-transparent opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700`} />
        <div className="absolute inset-0 flex items-center justify-center">
          {project.viz === "infolytix" && <InfoLytixViz />}
          {project.viz === "sofi" && <SOFIViz />}
          {project.viz === "zenpulse" && <ZenPulseViz />}
          {project.viz === "coworkpro" && <CoWorkProViz />}
        </div>
        {/* Year badge */}
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/50 border border-white/[0.08] backdrop-blur-md">
          <span className="text-white/35 text-[10px] font-mono tracking-widest">{project.year}</span>
        </div>
      </div>

      {/* Content panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 p-8 lg:p-12 border-t lg:border-t-0 border-white/[0.05]"
        style={{ borderLeft: isLeft ? "1px solid rgba(255,255,255,0.05)" : undefined, borderRight: !isLeft ? "1px solid rgba(255,255,255,0.05)" : undefined }}>

        {/* Title + status */}
        <div>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <p className={`text-xs font-bold tracking-[0.14em] uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} to-white/40`}>
              {project.subtitle}
            </p>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${project.statusStyle}`}>
              {project.status}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-white">{project.title}</h2>
          <p className="text-white/40 text-sm mt-2 italic">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-white/55 text-base leading-[1.8]">{project.description}</p>

        {/* Challenge */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold mb-2">Core Challenge</p>
          <p className="text-white/55 text-sm leading-relaxed">{project.challenge}</p>
        </div>

        {/* What was built */}
        <div>
          <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold mb-3">What Was Built</p>
          <ul className="flex flex-col gap-2">
            {project.built.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent + "0.8)" }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture chips */}
        <div>
          <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.architecture.map((a) => (
              <span key={a} className={`px-3 py-1.5 rounded-full text-xs font-medium text-white/65 bg-gradient-to-r ${project.color} to-transparent border border-white/[0.07]`}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-white/75 text-sm font-semibold hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2] transition-all group/gh">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
              <span className="group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform">↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.07] text-white/30 text-sm cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              {project.status === "In Development" ? "In Active Development" : "Proprietary — Not Public"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Projects list ────────────────────────────────────────────────────────────
function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative w-full bg-[#050505] py-20 overflow-hidden" style={{ zIndex: 1 }}>
      <div className="max-w-[90vw] mx-auto px-6">
        {/* Filter row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-16">
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
          <p className="text-white/25 text-sm font-mono">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }} className="flex flex-col gap-8">
              {filtered.map((proj, i) => (
                <ProjectCard key={proj.id} project={proj} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ───────────────────────────────────────────────────────────────
function ProjectsCTA() {
  return (
    <section className="relative w-full bg-[#050505] py-28 border-t border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,74,0.07) 0%, rgba(138,99,210,0.05) 50%, transparent 70%)" }} />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
        <p className="text-white/35 text-xs uppercase tracking-[0.22em] font-semibold">Have a problem worth solving?</p>
        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white leading-[0.95]">
          Let&apos;s build the next one.
        </h2>
        <div className="flex items-center gap-5 flex-wrap justify-center mt-2">
          <a href="mailto:mdzafarddd@gmail.com"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, rgba(255,107,74,0.15), rgba(138,99,210,0.15))", border: "1px solid rgba(255,107,74,0.3)" }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-15 transition-opacity" />
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <Link href="/about" className="text-white/35 hover:text-white/65 text-sm font-medium transition-colors">Full Profile →</Link>
        </div>
        <div className="mt-10 pt-7 border-t border-white/[0.05] w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">© {new Date().getFullYear()} Zafar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-white/22 hover:text-white/55 transition-colors text-xs">Home</Link>
            {/* <Link href="/journey" className="text-white/22 hover:text-white/55 transition-colors text-xs">Journey</Link> */}
            <a href="https://github.com/zafar-TechWizard" target="_blank" rel="noopener noreferrer" className="text-white/22 hover:text-white/55 transition-colors text-xs">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export function ProjectsPageContent() {
  return (
    <>
      <DotGrid />
      <FloatingOrbs />
      <MouseGlow />
      <ProjectsHero />
      <ProjectsList />
      <ProjectsCTA />
    </>
  );
}
