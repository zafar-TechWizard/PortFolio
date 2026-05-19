"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Timeline milestones ──────────────────────────────────────────────────────
const milestones = [
  {
    year: "2022",
    title: "The Starting Line",
    label: "B.Tech CSE — MMU",
    body: "Enrolled in Computer Science & Engineering at Maharishi Markandeshwar University. First proper exposure to algorithms, systems, and the craft of building software. Started with the fundamentals — and never stopped.",
    tag: "Education",
    color: "border-white/20",
    dot: "bg-white/50",
    glow: "rgba(255,255,255,0.3)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "First Real Builds",
    label: "Self-directed Projects",
    body: "Stopped following tutorials and started building real things. Python scripts became APIs. APIs became full-stack apps. Discovered that the most interesting problems lived at the intersection of data and product.",
    tag: "Building",
    color: "border-primary/30",
    dot: "bg-primary",
    glow: "rgba(255,107,74,0.5)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    year: "Mar 2024",
    title: "First Recognition",
    label: "Hackathon Finalist — Top 4",
    body: "Competed in Startup Thrive @ ACIC RISE, CGC Landran. Built a real-time threat detection system with automated emergency alerting under 24-hour conditions. Finished Top 4 out of 50+ teams. First proof that what I build can win.",
    tag: "Milestone",
    color: "border-yellow-400/40",
    dot: "bg-yellow-400",
    glow: "rgba(250,204,21,0.5)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    year: "2024 – 2025",
    title: "Shipping AI Products",
    label: "InfoLytix · SOFI · ZenPulse",
    body: "Three production AI products built independently. InfoLytix — a RAG-powered document intelligence platform. SOFI — a multi-agent financial orchestration system. ZenPulse — an AI mental wellness companion with real-time chat. Each one pushed the architecture further.",
    tag: "Products",
    color: "border-secondary/40",
    dot: "bg-secondary",
    glow: "rgba(138,99,210,0.5)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 1 0 0 16A8 8 0 0 0 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    year: "May – Jul 2025",
    title: "Applied AI at Scale",
    label: "Celebal Technologies — AI Intern",
    body: "Data Science & AI Internship at Celebal Technologies. Built a computer vision classification model using transfer learning. Worked end-to-end on LangChain + GenAI pipelines applied to real enterprise data workflows. First time seeing AI deployed beyond personal projects.",
    tag: "Experience",
    color: "border-secondary/50",
    dot: "bg-secondary",
    glow: "rgba(138,99,210,0.6)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    year: "Sep 2025",
    title: "Professional Engineer",
    label: "SoftKiwi — Full-Stack Software Engineer",
    body: "Joined SoftKiwi as a Full-Stack Software Engineer. Led the development of CoWork Pro — a complete SaaS coworking platform from zero to launch. Built web scraping microservices, full-stack features, and production-grade architecture. Shipped real software for real users.",
    tag: "Current",
    color: "border-primary/50",
    dot: "bg-primary",
    glow: "rgba(255,107,74,0.6)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
  {
    year: "2026",
    title: "What's Next",
    label: "B.Tech Graduation + Full Focus",
    body: "Graduating with B.Tech CSE. Now fully focused on building high-value AI consulting work — intelligent systems for founders, startups, and businesses that have a real problem worth solving.",
    tag: "Ahead",
    color: "border-white/15",
    dot: "bg-white/30",
    glow: "rgba(255,255,255,0.2)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
];

// ─── Turning points ───────────────────────────────────────────────────────────
const turningPoints = [
  {
    label: "The Shift",
    headline: "From learning to building",
    body: "There's a moment when you stop following tutorials and start solving your own problems. That shift happened in 2023 — and everything accelerated from there.",
    color: "from-primary/20 to-primary/0",
    border: "border-primary/20",
  },
  {
    label: "The Proof",
    headline: "Hackathon to production",
    body: "Winning recognition in a competitive hackathon showed that my architecture decisions held up under pressure. That confidence carried into every product I shipped after.",
    color: "from-secondary/20 to-secondary/0",
    border: "border-secondary/20",
  },
  {
    label: "The Direction",
    headline: "AI isn't the future — it's now",
    body: "Every project since 2024 has had intelligence at its core. Not AI as a feature — AI as the foundation. That's the only kind of software I want to build.",
    color: "from-yellow-500/15 to-yellow-500/0",
    border: "border-yellow-500/20",
  },
];

// ─── Background components ────────────────────────────────────────────────────
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
        left: pos.x,
        top: pos.y,
        width: 700,
        height: 700,
        background: "radial-gradient(circle at center, rgba(138,99,210,0.06) 0%, rgba(255,107,74,0.03) 35%, transparent 65%)",
        transition: "left 0.55s cubic-bezier(0.23,1,0.32,1), top 0.55s cubic-bezier(0.23,1,0.32,1)",
        zIndex: 0,
      }}
    />
  );
}

function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <motion.div
        className="absolute rounded-full bg-secondary/[0.06] blur-[150px]"
        style={{ width: 800, height: 800, top: "-15%", right: "-20%" }}
        animate={{ x: [0, -80, 40, 0], y: [0, 100, -60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-primary/[0.05] blur-[130px]"
        style={{ width: 600, height: 600, bottom: "10%", left: "-15%" }}
        animate={{ x: [0, 70, -40, 0], y: [0, -90, 55, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
    </div>
  );
}

function DotGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        zIndex: 0,
      }}
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function JourneyHero() {
  return (
    <section className="relative w-full bg-[#050505] pt-40 pb-24 overflow-hidden border-b border-white/[0.05]" style={{ zIndex: 1 }}>
      {/* Hero glows */}
      <motion.div
        className="absolute rounded-full bg-secondary/[0.08] blur-[120px] pointer-events-none"
        style={{ width: 600, height: 600, top: "-20%", left: "20%" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Year counter decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none select-none opacity-[0.06]">
        {["2022","2023","2024","2025","2026"].map((y) => (
          <span key={y} className="text-xs font-mono text-white tracking-widest">{y}</span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-secondary w-fit mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          2022 → Now
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[6rem] font-black tracking-tighter text-white font-heading leading-[0.9] mb-6"
        >
          The<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%] animate-[gradientShift_4s_ease_infinite]">
            Journey.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg max-w-xl leading-relaxed"
        >
          From first lines of code to shipping production AI systems.
          Every milestone, every turning point, every shipped product.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-10 mt-12 flex-wrap"
        >
          {[
            { n: "4+", label: "Years Building" },
            { n: "7", label: "Key Milestones" },
            { n: "3", label: "AI Products Shipped" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white font-heading tracking-tighter">{s.n}</span>
              <span className="text-white/30 text-[10px] uppercase tracking-[0.18em]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
function Timeline() {
  return (
    <section className="relative w-full bg-[#050505] py-28 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Left wash */}
      <div className="absolute left-0 top-0 bottom-0 w-[350px] bg-gradient-to-r from-secondary/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-3">Chronology</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading">Milestones</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-3 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-secondary/60 via-primary/40 via-yellow-400/30 to-transparent" />
            {/* Traveling glow */}
            <motion.div
              className="absolute w-[3px] h-12 rounded-full -left-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent)" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
            />
          </div>

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative flex gap-8 pb-12 last:pb-0 group"
            >
              {/* Dot */}
              <div className="relative shrink-0 mt-1 z-10">
                <div
                  className={`w-6 h-6 rounded-full border-2 border-[#050505] ${m.dot} relative z-10 flex items-center justify-center`}
                  style={{ boxShadow: `0 0 16px ${m.glow}, 0 0 4px ${m.glow}` }}
                />
              </div>

              {/* Card */}
              <div className={`flex-1 p-6 rounded-2xl bg-white/[0.02] border ${m.color} hover:bg-white/[0.04] transition-all overflow-hidden relative group`}>
                {/* Hover inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at left top, ${m.glow.replace(/[\d.]+\)$/, "0.05)")} 0%, transparent 60%)` }}
                />

                <div className="flex items-start justify-between gap-4 mb-3 relative z-10 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="text-white/20">{m.icon}</span>
                    <span className="text-white/25 text-xs font-mono tracking-widest">{m.year}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40 text-[10px] uppercase tracking-wider font-semibold">
                      {m.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl font-heading tracking-tight mb-1 relative z-10">{m.title}</h3>
                <p className="text-primary/70 text-xs font-semibold uppercase tracking-[0.12em] mb-3 relative z-10">{m.label}</p>
                <p className="text-white/50 text-sm leading-[1.8] relative z-10">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Turning Points ───────────────────────────────────────────────────────────
function TurningPoints() {
  return (
    <section className="relative w-full bg-[#050505] py-24 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 600, height: 200, background: "radial-gradient(ellipse, rgba(255,107,74,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-3">Key Moments</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading">Turning Points</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {turningPoints.map((tp, i) => (
            <motion.div
              key={tp.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col gap-4 p-8 bg-[#050505] hover:bg-white/[0.02] transition-colors group relative overflow-hidden border-t-2 ${tp.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${tp.color} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold relative z-10">{tp.label}</span>
              <h3 className="text-white font-bold text-xl font-heading leading-tight relative z-10">{tp.headline}</h3>
              <p className="text-white/50 text-sm leading-[1.8] relative z-10">{tp.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function JourneyCTA() {
  return (
    <section className="relative w-full bg-[#050505] py-36 overflow-hidden" style={{ zIndex: 1 }}>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 350, background: "radial-gradient(ellipse, rgba(138,99,210,0.08) 0%, rgba(255,107,74,0.05) 40%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] pointer-events-none"
        style={{ width: 500, height: 500 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-7 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs font-semibold tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          The story continues
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-5xl md:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 leading-[0.92] font-heading tracking-tighter"
        >
          Want to be<br />part of what&apos;s next?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/40 text-base max-w-sm leading-relaxed"
        >
          If you have a real problem and the ambition to solve it — let&apos;s build together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-5 flex-wrap justify-center"
        >
          <a
            href="mailto:mdzafarddd@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white rounded-full overflow-hidden transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, rgba(255,107,74,0.15) 0%, rgba(138,99,210,0.15) 100%)", border: "1px solid rgba(255,107,74,0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2.5">
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
          <Link href="/about" className="text-white/35 hover:text-white/65 text-sm font-medium transition-colors">
            Full Profile →
          </Link>
        </motion.div>

        <div className="mt-14 pt-7 border-t border-white/[0.05] w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">© {new Date().getFullYear()} Zafar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-white/22 hover:text-white/55 transition-colors text-xs font-medium">Home</Link>
            <Link href="/about" className="text-white/22 hover:text-white/55 transition-colors text-xs font-medium">About</Link>
            <a href="https://github.com/zafar-TechWizard" target="_blank" rel="noopener noreferrer" className="text-white/22 hover:text-white/55 transition-colors text-xs font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export function JourneyPageContent() {
  return (
    <>
      <DotGrid />
      <FloatingOrbs />
      <MouseGlow />
      <JourneyHero />
      <Timeline />
      <TurningPoints />
      <JourneyCTA />
    </>
  );
}
