"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Shared skill data ────────────────────────────────────────────────────────
const skillCategories = [
  {
    id: "ai",
    title: "AI & ML",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/[0.06]",
    skills: [
      "Retrieval-Augmented Gen (RAG)",
      "AI Agents & Multi-Agent Systems",
      "LangChain Pipelines",
      "LLM Integration",
      "Hugging Face",
      "OpenCV & Computer Vision",
      "NLP",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/[0.05]",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "REST APIs",
      "WebSocket Systems",
      "Microservices",
      "Authentication",
      "Async Architectures",
    ],
  },
  {
    id: "data",
    title: "Data & Cloud",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/[0.05]",
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
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/[0.06]",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SaaS Dashboard Design",
      "AI Chatbot Interfaces",
      "UX-focused Web",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/[0.05]",
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

// ─── Experience data ──────────────────────────────────────────────────────────
const experiences = [
  {
    company: "SoftKiwi",
    role: "Full-Stack Software Engineer",
    period: "Sep 2025 – Mar 2026",
    duration: "7 months",
    color: "from-primary/60 to-primary/10",
    dot: "bg-primary",
    glow: "rgba(255,107,74,0.5)",
    achievements: [
      "Led end-to-end development of CoWork Pro — a full SaaS coworking platform",
      "Built web scraping microservices for automated data pipelines",
      "Delivered full-stack features across React frontend and FastAPI backend",
    ],
  },
  {
    company: "Celebal Technologies",
    role: "Data Science & AI Intern",
    period: "May 2025 – Jul 2025",
    duration: "3 months",
    color: "from-secondary/60 to-secondary/10",
    dot: "bg-secondary",
    glow: "rgba(138,99,210,0.5)",
    achievements: [
      "Built a computer vision model using transfer learning for classification tasks",
      "Applied LangChain and GenAI pipelines to real-world data workflows",
      "Worked across the full GenAI stack — prompting, retrieval, and deployment",
    ],
  },
  {
    company: "Hackathon Finalist",
    role: "Top 4 · Startup Thrive @ ACIC RISE, CGC Landran",
    period: "Mar 2024",
    duration: "50+ teams",
    color: "from-yellow-500/50 to-yellow-500/5",
    dot: "bg-yellow-400",
    glow: "rgba(250,204,21,0.5)",
    achievements: [
      "Built a real-time threat detection system under 24-hour hackathon conditions",
      "Designed automated emergency alerting with sub-second response architecture",
      "Placed Top 4 among 50+ competing teams",
    ],
  },
];

// ─── Narrative copy ───────────────────────────────────────────────────────────
const narrative = [
  {
    label: "The Background",
    body: "I came up building things — B.Tech CSE at Maharishi Markandeshwar University, with early projects that went from scripts to shipped, production software. Professionally: Full-Stack Engineer at SoftKiwi, AI Intern at Celebal Technologies.",
    accent: "border-primary/30",
  },
  {
    label: "The Approach",
    body: "Bottleneck-first. Before writing a line, I identify the real constraint — then design the architecture around it. No over-engineering, no feature theatre. The goal is something that works in production, not just in a demo.",
    accent: "border-secondary/30",
  },
  {
    label: "The Vision",
    body: "Intelligent ecosystems, not just apps. Software that understands context, adapts to users, and compounds in value over time. AI isn't bolted on — it's the foundation.",
    accent: "border-white/20",
  },
];

// ─── Global background: mouse-following glow ─────────────────────────────────
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
        width: 800,
        height: 800,
        background:
          "radial-gradient(circle at center, rgba(255,107,74,0.055) 0%, rgba(138,99,210,0.03) 35%, transparent 65%)",
        transition: "left 0.55s cubic-bezier(0.23,1,0.32,1), top 0.55s cubic-bezier(0.23,1,0.32,1)",
        zIndex: 0,
      }}
    />
  );
}

// ─── Global background: slowly drifting orbs ─────────────────────────────────
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Primary — top-left */}
      <motion.div
        className="absolute rounded-full bg-primary/[0.055] blur-[160px]"
        style={{ width: 900, height: 900, top: "-20%", left: "-20%" }}
        animate={{ x: [0, 90, -45, 0], y: [0, -110, 65, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary — middle-right */}
      <motion.div
        className="absolute rounded-full bg-secondary/[0.06] blur-[140px]"
        style={{ width: 700, height: 700, top: "35%", right: "-18%" }}
        animate={{ x: [0, -75, 50, 0], y: [0, 110, -70, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 9 }}
      />
      {/* Primary — bottom */}
      <motion.div
        className="absolute rounded-full bg-primary/[0.04] blur-[110px]"
        style={{ width: 550, height: 550, bottom: "0%", left: "22%" }}
        animate={{ x: [0, 55, -35, 0], y: [0, -75, 85, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 16 }}
      />
    </div>
  );
}

// ─── Dot-grid texture overlay ─────────────────────────────────────────────────
function DotGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        zIndex: 0,
      }}
    />
  );
}

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#050505] pt-40 pb-28 overflow-hidden border-b border-white/[0.05]"
      style={{ zIndex: 1 }}
    >
      {/* Section-specific hero glows */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-20%", left: "-10%" }}
      />
      <motion.div
        className="absolute rounded-full bg-secondary/[0.07] blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ width: 400, height: 400, top: "10%", right: "5%" }}
      />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — headline */}
          <div className="flex-1 flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Full Profile
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-white font-heading leading-[0.92]"
            >
              Md Zafar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold tracking-wide">
                AI Solutions Architect & Product Engineer
              </p>
              <p className="text-white/50 text-base leading-relaxed max-w-lg">
                I design and ship intelligent systems — production AI products, SaaS platforms, and automation pipelines that solve real problems.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-10 pt-1"
            >
              {[
                { value: "3+", label: "Years Engineering" },
                { value: "10+", label: "Projects Shipped" },
                { value: "2", label: "Live AI Products" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-4xl font-black text-white font-heading tracking-tighter">{s.value}</span>
                  <span className="text-white/30 text-[10px] uppercase tracking-[0.18em]">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-5 flex-wrap pt-1"
            >
              <a
                href="mailto:mdzafarddd@gmail.com"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/30 text-white text-sm font-semibold hover:from-primary/30 hover:to-secondary/20 hover:border-primary/50 transition-all shadow-[0_0_20px_rgba(255,107,74,0.1)]"
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/"
                className="text-white/35 hover:text-white/65 text-sm font-medium transition-colors"
              >
                ← Portfolio
              </Link>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-[320px] shrink-0"
          >
            {/* Photo glow ring */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-secondary/15 blur-2xl opacity-70" />
              <div
                className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/[0.1]"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.85), 0 0 50px rgba(255,107,74,0.1)" }}
              >
                <Image
                  src="/img/my.png"
                  alt="Zafar"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-[#050505]/10 to-transparent" />
                {/* Name tag overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/[0.08] bg-gradient-to-t from-[#050505]/90 to-transparent">
                  <p className="text-white font-bold font-heading tracking-[0.12em] uppercase text-sm">Zafar</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">AI Solutions Architect</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

// ─── Narrative Section ────────────────────────────────────────────────────────
function NarrativeSection() {
  return (
    <section className="relative w-full bg-[#050505]/90 py-20 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Horizontal gradient scan line */}
      <motion.div
        className="absolute h-[1px] w-full pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,107,74,0.2) 30%, rgba(138,99,210,0.2) 70%, transparent 100%)",
          top: "50%",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-secondary/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {narrative.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8 bg-[#050505]/80 hover:bg-white/[0.02] transition-colors group"
            >
              <div className={`w-8 h-[2px] bg-gradient-to-r ${i === 0 ? "from-primary to-primary/20" : i === 1 ? "from-secondary to-secondary/20" : "from-white/40 to-white/5"}`} />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">{item.label}</span>
              <p className="text-white/60 text-sm leading-[1.85] group-hover:text-white/75 transition-colors">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience Timeline ──────────────────────────────────────────────────────
function ExperienceTimeline() {
  return (
    <section className="relative w-full bg-[#050505] py-28 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Left side primary glow — echoes the timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-r from-primary/[0.04] to-transparent pointer-events-none" />
      {/* Animated ring in background */}
      <motion.div
        className="absolute rounded-full border border-white/[0.03] pointer-events-none"
        style={{ width: 600, height: 600, top: "10%", right: "-15%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full border border-white/[0.025] pointer-events-none"
        style={{ width: 400, height: 400, top: "15%", right: "-8%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-3">Work History</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading">
            Experience
          </h2>
        </motion.div>

        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />
            {/* Animated traveling dot on the line */}
            <motion.div
              className="absolute w-1 h-8 rounded-full bg-gradient-to-b from-white/60 to-transparent left-[-1.5px]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex gap-8 pb-10 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="relative shrink-0 mt-1.5 z-10">
                <div
                  className={`w-[23px] h-[23px] rounded-full border-[3px] border-[#050505] ${exp.dot} relative z-10`}
                  style={{ boxShadow: `0 0 14px ${exp.glow}, 0 0 4px ${exp.glow}` }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] group-hover:bg-white/[0.035] transition-all relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${exp.color} rounded-l-2xl`} />
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at left center, ${exp.glow.replace("0.5", "0.04")} 0%, transparent 60%)` }} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 relative z-10">
                  <div>
                    <h3 className="text-white font-bold text-lg font-heading leading-tight">{exp.company}</h3>
                    <p className="text-white/45 text-sm mt-1">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <span className="text-white/30 text-xs font-mono">{exp.period}</span>
                    <span className="text-white/18 text-[10px] uppercase tracking-wider">{exp.duration}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 relative z-10">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-[7px] shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────
function EducationSection() {
  return (
    <section className="relative w-full bg-[#050505] py-24 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Diagonal scan lines in bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-secondary/[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-3">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading">Education</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-secondary/25 hover:bg-white/[0.035] transition-all overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-secondary/60 to-secondary/10 rounded-l-2xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at left center, rgba(138,99,210,0.05) 0%, transparent 60%)" }} />

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/25 to-secondary/5 border border-secondary/20 flex items-center justify-center shrink-0 relative z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="text-secondary/80">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div className="flex-1 relative z-10">
              <p className="text-white font-bold text-base">B.Tech — Computer Science & Engineering</p>
              <p className="text-white/45 text-sm mt-1">Maharishi Markandeshwar University (MMU)</p>
              <p className="text-white/25 text-xs mt-2 font-mono tracking-wide">2022 – 2026 · GPA 7.0 / 10</p>
            </div>

            <div className="shrink-0 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary/80 text-[10px] font-semibold uppercase tracking-widest relative z-10">
              Ongoing
            </div>
          </motion.div>

          {/* Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/20 to-white/5 rounded-l-2xl" />
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="text-white/45">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-base">Secondary Education</p>
              <p className="text-white/45 text-sm mt-1">BP Indraprastha International School</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack Section ───────────────────────────────────────────────────────
function TechStackSection() {
  return (
    <section className="relative w-full bg-[#050505] py-28 border-b border-white/[0.05] overflow-hidden" style={{ zIndex: 1 }}>
      {/* Fine grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-3">Tools & Technologies</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.07 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.09] hover:bg-white/[0.03] transition-all group"
            >
              <p className={`text-xs font-bold uppercase tracking-[0.18em] mb-4 ${cat.color}`}>
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium text-white/55 ${cat.bg} border ${cat.border} hover:text-white/80 transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative w-full bg-[#050505] py-36 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Pulsing orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 350, background: "radial-gradient(ellipse, rgba(255,107,74,0.08) 0%, rgba(138,99,210,0.06) 40%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Rotating ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] pointer-events-none"
        style={{ width: 600, height: 600 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] pointer-events-none"
        style={{ width: 400, height: 400 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-7 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/35 tracking-[0.22em] uppercase text-xs font-semibold"
        >
          Let&apos;s Build
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-5xl md:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 leading-[0.92] font-heading tracking-tighter"
        >
          Got a problem<br />worth solving?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/40 text-base max-w-sm leading-relaxed"
        >
          Real problem. Right architecture. Shipped.
        </motion.p>

        <motion.a
          href="mailto:mdzafarddd@gmail.com"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative inline-flex items-center justify-center px-9 py-4 text-base font-bold text-white rounded-full overflow-hidden transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, rgba(255,107,74,0.15) 0%, rgba(138,99,210,0.15) 100%)", border: "1px solid rgba(255,107,74,0.3)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-3">
            mdzafarddd@gmail.com
            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </motion.a>

        <Link href="/" className="text-white/25 hover:text-white/55 text-sm font-medium transition-colors">
          ← Back to Portfolio
        </Link>

        <div className="mt-16 pt-7 border-t border-white/[0.05] w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">© {new Date().getFullYear()} Zafar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/zafar-TechWizard" target="_blank" rel="noopener noreferrer" className="text-white/22 hover:text-white/55 transition-colors text-xs font-medium">GitHub</a>
            <a href="mailto:mdzafarddd@gmail.com" className="text-white/22 hover:text-white/55 transition-colors text-xs font-medium">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────
export function AboutPageContent() {
  return (
    <>
      {/* Global page background layers */}
      <DotGrid />
      <FloatingOrbs />
      <MouseGlow />

      {/* Page sections */}
      <PageHero />
      <NarrativeSection />
      <ExperienceTimeline />
      <EducationSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
