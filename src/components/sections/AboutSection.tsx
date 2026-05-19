"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const codeLines = [
  "class ZafarIdentity(ProductEngineer):",
  "    def __init__(self):",
  "        self.role = 'AI Solutions Architect'",
  "        self.focus = ['SaaS', 'Automation', 'AI']",
  "        self.mindset = 'Systems Architect'",
  "",
  "    def execute_vision(self):",
  "        while True:",
  "            problem = identify_bottleneck()",
  "            arch = design_scalable_system(problem)",
  "            ai = deploy_intelligence(arch)",
  "            return build_human_centered_ux(ai)",
  "",
  "    def get_long_term_goal(self):",
  "        return 'Build deeply intelligent,",
  "                adaptive ecosystems.'",
];

const stats = [
  { value: "3+", label: "Years Building AI Systems" },
  { value: "10+", label: "Projects Shipped" },
  { value: "2", label: "Live AI Products" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Background Gradient */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left: Terminal Visual */}
          <div className="w-full lg:w-1/2 z-10">
            <TerminalWindow />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 z-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Identity
            </div>

            <h2 className="text-5xl md:text-[4rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
              More than a developer.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                An Architect.
              </span>
            </h2>

            <div className="flex flex-col gap-5 text-white/60 text-lg leading-relaxed">
              <p>
                I am a Product Engineer focused on building intelligent digital systems that combine AI, automation, scalable backend architectures, and user-focused product experiences.
              </p>
              <p>
                My long-term vision is to create deeply intelligent AI ecosystems — not just functional tools, but adaptive digital companions capable of understanding users, learning continuously, and improving everyday workflows.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-1 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md"
                >
                  <span className="text-3xl font-black text-white font-heading tracking-tighter">{stat.value}</span>
                  <span className="text-white/40 text-xs uppercase tracking-widest leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Signature Badge */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(255,107,74,0.2)]">
                <span className="text-white font-heading font-bold text-xl">Z</span>
              </div>
              <div>
                <p className="text-white font-bold tracking-widest uppercase text-sm">Zafar</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">AI Solutions Architect & Product Engineer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TerminalWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedLines, setDisplayedLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let line = 0;
    const interval = setInterval(() => {
      if (line < codeLines.length) {
        setDisplayedLines((p) => p + 1);
        line++;
      } else {
        clearInterval(interval);
      }
    }, 130);
    return () => clearInterval(interval);
  }, [isInView]);

  const highlight = (line: string, idx: number) => {
    if (line === "") return <span>&nbsp;</span>;

    // Keywords
    if (/^(class|def|return|while)/.test(line.trim())) {
      const keyword = line.trim().split(" ")[0];
      const rest = line.replace(keyword, "");
      const indent = line.match(/^\s*/)?.[0] ?? "";
      return (
        <>
          <span className="text-secondary font-bold">{indent}{keyword}</span>
          <span className="text-white/75">{rest}</span>
        </>
      );
    }

    // self.x = 'value' lines
    if (line.includes("self.")) {
      const parts = line.split("=");
      return (
        <>
          <span className="text-primary/90">{parts[0]}</span>
          {parts.length > 1 && <span className="text-white/50">= </span>}
          <span className="text-green-400/80">{parts.slice(1).join("=")}</span>
        </>
      );
    }

    // Function call lines
    if (line.includes("(")) {
      return <span className="text-blue-400/80">{line}</span>;
    }

    // Continuation string lines
    if (line.trim().startsWith("'") || line.trim().startsWith('"')) {
      return <span className="text-green-400/80">{line}</span>;
    }

    return <span className="text-white/75">{line}</span>;
  };

  return (
    <div
      ref={ref}
      className="relative w-full rounded-[2rem] bg-[#0A0D12] border border-white/[0.08] shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 30px 70px rgba(0,0,0,0.7), 0 0 60px rgba(255,107,74,0.05)" }}
    >
      {/* Terminal chrome bar */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.05] bg-white/[0.01]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70 shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-green-500/70 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
        </div>
        <span className="mx-auto text-white/25 text-xs font-mono tracking-widest">identity.py</span>
        <span className="text-white/10 text-xs font-mono">●</span>
      </div>

      {/* Code Body */}
      <div className="p-6 font-mono text-sm leading-7 overflow-x-auto min-h-[380px]">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={idx < displayedLines ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            <span className="text-white/20 w-8 shrink-0 select-none text-right mr-6">
              {idx + 1}
            </span>
            <span className="whitespace-pre">{highlight(line, idx)}</span>
          </motion.div>
        ))}

        {/* Blinking cursor while typing */}
        {displayedLines < codeLines.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.9 }}
            className="w-2 h-5 bg-white/50 inline-block ml-8 mt-1 rounded-sm"
          />
        )}
      </div>
    </div>
  );
}
