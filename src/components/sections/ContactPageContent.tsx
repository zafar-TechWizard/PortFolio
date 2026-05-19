"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Background helpers ────────────────────────────────────────────────────
function MouseGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(255,107,74,0.04), transparent 60%)`,
        transition: "background 0.15s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    />
  );
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.25]"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const services = [
  "Web App / Full-Stack Development",
  "AI Systems & Agents",
  "SaaS Product",
  "Automation & Workflows",
  "Data Science & ML",
  "Mobile App",
  "Microservices & Backend",
  "Other / Let's talk",
];

const budgets = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Open to discuss",
];

const capabilities = [
  { label: "Full-Stack Development", color: "text-primary" },
  { label: "AI Systems & Agents", color: "text-secondary" },
  { label: "SaaS Products", color: "text-blue-400" },
  { label: "Automation & Workflows", color: "text-emerald-400" },
  { label: "Data Science & ML", color: "text-yellow-400" },
  { label: "Mobile Apps", color: "text-pink-400" },
  { label: "Microservices", color: "text-cyan-400" },
];

// ─── Input component ────────────────────────────────────────────────────────
function GlassInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative flex flex-col gap-2">
      <label className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${focused ? "text-primary/80" : "text-white/35"}`}>
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focused ? "shadow-[0_0_0_1px_rgba(255,107,74,0.4),0_0_20px_rgba(255,107,74,0.08)]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"}`}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.05] text-white placeholder-white/20 text-sm px-4 py-3.5 outline-none transition-colors duration-200"
        />
      </div>
    </div>
  );
}

function GlassSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative flex flex-col gap-2">
      <label className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${focused ? "text-primary/80" : "text-white/35"}`}>
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focused ? "shadow-[0_0_0_1px_rgba(255,107,74,0.4),0_0_20px_rgba(255,107,74,0.08)]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"}`}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.05] text-sm px-4 py-3.5 outline-none appearance-none cursor-pointer transition-colors duration-200 text-white/80"
          style={{ colorScheme: "dark" }}
        >
          <option value="" disabled className="bg-[#0A0D12] text-white/50">{placeholder ?? "Select…"}</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0A0D12] text-white">{o}</option>
          ))}
        </select>
        {/* Chevron */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GlassTextarea({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative flex flex-col gap-2">
      <label className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${focused ? "text-primary/80" : "text-white/35"}`}>
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focused ? "shadow-[0_0_0_1px_rgba(255,107,74,0.4),0_0_20px_rgba(255,107,74,0.08)]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"}`}>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={6}
          className="w-full bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.05] text-white placeholder-white/20 text-sm px-4 py-3.5 outline-none resize-none transition-colors duration-200 leading-relaxed"
        />
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export function ContactPageContent() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (v: string) =>
    setForm((p) => ({ ...p, [key]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be wired up later
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <MouseGlow />
      <DotGrid />

      {/* Ambient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/[0.05] blur-[160px] pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-10%", left: "-15%" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-secondary/[0.06] blur-[140px] pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 70, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        style={{ bottom: "5%", right: "-10%" }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-emerald-400 mb-8 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Available for New Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.92] font-heading mb-6"
          >
            Let&apos;s Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">
              Something.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-white/45 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Tell me what you&apos;re working on — a web app, AI system, SaaS product,
            automation pipeline, or anything in between. I&apos;ll get back within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Main 2-col section ──────────────────────────────────────────── */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left: Info column (2/5) ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-32"
          >
            {/* Direct Email */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all group cursor-default">
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Direct Email</p>
              <a
                href="mailto:mdzafarddd@gmail.com"
                className="text-white/80 hover:text-primary font-mono text-sm transition-colors duration-200 break-all group-hover:text-white"
              >
                mdzafarddd@gmail.com
              </a>
            </div>

            {/* Response time */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-white/80 font-semibold text-sm">Replies within 24 hours</p>
                <p className="text-white/30 text-xs mt-0.5">Usually much faster</p>
              </div>
            </div>

            {/* What I build */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">What I Can Build For You</p>
              <div className="flex flex-col gap-3">
                {capabilities.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 shrink-0 ${c.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-white/60 text-sm">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://github.com/zafar-TechWizard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.05] transition-all text-white/40 hover:text-white/80 text-xs font-medium tracking-wide cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
                </svg>
                GitHub
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.05] transition-all text-white/40 hover:text-white/80 text-xs font-medium tracking-wide cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right: Form (3/5) ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-[2rem] overflow-hidden border border-white/[0.07] bg-white/[0.02] backdrop-blur-2xl p-8 md:p-10"
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.6)" }}
            >
              {/* Inner glow top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <GlassInput
                        label="Your Name"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="John Doe"
                        required
                      />
                      <GlassInput
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    {/* Row 2: Service */}
                    <GlassSelect
                      label="I Need Help With"
                      value={form.service}
                      onChange={set("service")}
                      options={services}
                      placeholder="Choose a service…"
                      required
                    />

                    {/* Row 3: Budget */}
                    <GlassSelect
                      label="Budget Range (optional)"
                      value={form.budget}
                      onChange={set("budget")}
                      options={budgets}
                      placeholder="Select a range…"
                    />

                    {/* Row 4: Message */}
                    <GlassTextarea
                      label="Tell Me About Your Project"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Describe what you're building, what problem it solves, and where you're currently at…"
                      required
                    />

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="relative group w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide overflow-hidden cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #FF6B4A 0%, #C44B9A 50%, #8A63D2 100%)",
                        boxShadow: "0 0 40px rgba(255,107,74,0.25), 0 0 80px rgba(138,99,210,0.15)",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                    </motion.button>

                    <p className="text-center text-white/20 text-xs">
                      No spam, ever. Your info stays between us.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message received.</h3>
                      <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                        I&apos;ll review your project and reply within 24 hours. Looking forward to building something together.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", budget: "", message: "" }); }}
                      className="text-white/30 hover:text-white/70 text-sm transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer strip ─────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">© {new Date().getFullYear()} Zafar. All rights reserved.</p>
          <Link href="/" className="text-white/30 hover:text-white/70 text-sm transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
