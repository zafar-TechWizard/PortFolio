"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const codeLines = [
  "# identity.py — Zafar",
  "",
  "role    = \"Full-Stack Engineer & AI Builder\"",
  "stack   = [\"React\", \"Next.js\", \"FastAPI\", \"Python\", \"LangChain\"]",
  "domains = [\"Web\", \"AI Agents\", \"SaaS\", \"Automation\", \"ML\"]",
  "",
  "def build(idea: Concept) -> Product:",
  "    engineer_ui(idea)",
  "    build_backend(idea)",
  "    integrate_ai(idea)",
  "    return ship_to_prod(idea)",
  "",
  "open_to  = \"Full-Stack · AI · SaaS · Automation\"",
  "verified = True",
];

const stats = [
  { value: "3+", label: "Years Engineering" },
  { value: "10+", label: "Projects Shipped" },
  { value: "2", label: "Live AI Products" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated ambient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-secondary/[0.07] blur-[140px] pointer-events-none"
        animate={{ x: [0, 60, -30, 0], y: [0, -80, 50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "5%", left: "-10%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 70, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        style={{ bottom: "0%", right: "5%" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* Left: Terminal Visual */}
          <div className="w-full lg:w-1/2 z-10 lg:sticky lg:top-32 relative">
            {/* Subtle ambient glow behind terminal */}
            <div className="absolute -inset-4 bg-primary/[0.04] rounded-[3rem] blur-2xl pointer-events-none" />
            <TerminalWindow />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col z-10">

            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-primary w-fit backdrop-blur-xl mb-7">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Identity
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-[4rem] font-bold tracking-tighter text-white leading-[1.05] font-heading mb-6">
              More than a developer.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                An Architect.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-white/55 text-[1.05rem] leading-[1.8] mb-10 max-w-lg">
              I engineer complete products — frontend, backend, AI systems, SaaS, automation,
              ML models, and microservices. Shipped production software at{" "}
              <span className="text-white/85 font-semibold">SoftKiwi</span> as a Full-Stack Engineer,
              built real AI pipelines at{" "}
              <span className="text-white/85 font-semibold">Celebal Technologies</span>.
              Whatever the problem demands — I build it.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col gap-1 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-3xl font-black text-white font-heading tracking-tighter">{stat.value}</span>
                  <span className="text-white/35 text-[10px] uppercase tracking-[0.15em] leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-white/[0.06] mb-8" />

            {/* Bottom row: CTA + Signature */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.18] text-white/60 hover:text-white/90 text-sm font-medium transition-all"
              >
                Full Story
                <span className="text-white/30 group-hover:text-white/60 transition-colors">—</span>
                <span className="text-white/45 group-hover:text-white/80 text-xs">Experience & More</span>
                <span className="transform group-hover:translate-x-0.5 transition-transform text-white/40 group-hover:text-primary">→</span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 border border-white/[0.1] flex items-center justify-center shadow-[0_0_16px_rgba(255,107,74,0.15)]">
                  <span className="text-white font-heading font-bold text-sm">Z</span>
                </div>
                <div>
                  <p className="text-white/70 font-bold tracking-widest uppercase text-xs">Zafar</p>
                  <p className="text-white/30 text-[10px] tracking-wider">Full-Stack & AI Engineer</p>
                </div>
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
    }, 110);
    return () => clearInterval(interval);
  }, [isInView]);

  const highlight = (line: string) => {
    if (line === "") return <span>&nbsp;</span>;

    // Comment
    if (line.trim().startsWith("#")) {
      return <span className="text-white/25 italic">{line}</span>;
    }

    // Keywords at start of trimmed line
    if (/^(class|def|return|while|import|from)/.test(line.trim())) {
      const trimmed = line.trim();
      const keyword = trimmed.split(/[\s(]/)[0];
      const indent = line.match(/^\s*/)?.[0] ?? "";
      const rest = line.slice(indent.length + keyword.length);
      return (
        <>
          <span className="text-secondary font-bold">{indent}{keyword}</span>
          <span className="text-white/75">{rest}</span>
        </>
      );
    }

    // Dict string entries: "key" : "value"
    if (/^\s+"[^"]*"\s*:\s*"[^"]*"/.test(line)) {
      const colonIdx = line.indexOf(":");
      return (
        <>
          <span className="text-blue-400/80">{line.slice(0, colonIdx + 1)}</span>
          <span className="text-green-400/80">{line.slice(colonIdx + 1)}</span>
        </>
      );
    }

    // Closing brace/bracket only
    if (line.trim() === "}" || line.trim() === "]" || line.trim() === ")") {
      return <span className="text-white/40">{line}</span>;
    }

    // Variable assignments (role = , stack = ) — no parens, no leading self.
    if (line.includes(" = ") && !line.trim().startsWith("self.") && !line.includes("(")) {
      const eqIdx = line.indexOf(" = ");
      return (
        <>
          <span className="text-primary/80">{line.slice(0, eqIdx + 3)}</span>
          <span className="text-green-400/80">{line.slice(eqIdx + 3)}</span>
        </>
      );
    }

    // self.x lines (assignment or call)
    if (line.includes("self.")) {
      if (line.includes(" = ")) {
        const eqIdx = line.indexOf(" = ");
        return (
          <>
            <span className="text-primary/90">{line.slice(0, eqIdx)}</span>
            <span className="text-white/50"> = </span>
            <span className="text-blue-400/80">{line.slice(eqIdx + 3)}</span>
          </>
        );
      }
      return <span className="text-blue-400/80">{line}</span>;
    }

    // Function call lines (has parens but no self)
    if (line.includes("(")) {
      return <span className="text-blue-400/80">{line}</span>;
    }

    // String lines
    if (line.trim().startsWith('"') || line.trim().startsWith("'")) {
      return <span className="text-green-400/80">{line}</span>;
    }

    return <span className="text-white/75">{line}</span>;
  };

  return (
    <div
      ref={ref}
      className="relative w-full rounded-[2rem] bg-[#0A0D12] border border-white/[0.08] overflow-hidden"
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
      <div className="p-6 font-mono text-sm leading-[1.9] overflow-x-auto pb-8">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={idx < displayedLines ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="flex"
          >
            <span className="text-white/15 w-7 shrink-0 select-none text-right mr-5 tabular-nums">
              {idx + 1}
            </span>
            <span className="whitespace-pre">{highlight(line)}</span>
          </motion.div>
        ))}

        {displayedLines < codeLines.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.85 }}
            className="w-[7px] h-[18px] bg-white/40 inline-block ml-12 mt-1 rounded-[2px]"
          />
        )}
      </div>
    </div>
  );
}
