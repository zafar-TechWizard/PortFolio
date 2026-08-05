"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    
    // Simulate API call, then redirect to mailto as fallback
    setTimeout(() => {
      setStatus("success");
      window.location.href = `mailto:mdzafarddd@gmail.com?subject=Project Inquiry&body=Hi Zafar, I'd like to discuss a project. My contact email is: ${email}`;
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
      }, 3000);
    }, 800);
  };

  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center bg-[#000000] min-h-[calc(100vh-80px)] pt-24 pb-12 overflow-hidden font-sans">
      
      {/* ── Background: Subtle Grid & Spotlight ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-[radial-gradient(circle_800px_at_100%_0%,#ffffff08,transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[radial-gradient(circle_600px_at_0%_100%,#8A63D205,transparent)] pointer-events-none" />

      {/* ── Main Content Split ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col items-start text-left w-full max-w-3xl">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Md Zafar — Lead Software Engineer
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-col items-start gap-1 mb-8 w-full"
          >
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-tighter text-white leading-[0.9] drop-shadow-lg">
              Engineering
            </h1>
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-tighter text-white leading-[0.9] drop-shadow-lg">
              Intelligence.
            </h1>
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-tighter text-white/30 leading-[0.9] mt-2">
              Building Scale.
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-white/50 text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-12"
          >
            Architecting robust full-stack systems and integrating advanced AI capabilities for ambitious teams and forward-thinking enterprises.
          </motion.p>

          {/* Micro Social Proof (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <p className="text-white/20 text-[10px] font-semibold tracking-[0.2em] uppercase">
              Engineered solutions for teams at
            </p>
            <div className="flex flex-wrap items-center gap-8 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span className="text-white font-bold tracking-widest uppercase text-xs">SoftKiwi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                <span className="text-white font-bold tracking-widest uppercase text-xs">Celebal Tech</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: IDE / Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="flex-[0.8] w-full max-w-[500px] lg:max-w-[600px] perspective-1000"
        >
          <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/5 relative group">
            
            {/* Terminal Header */}
            <div className="w-full bg-[#111] border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium">init_project.sh</p>
              <div className="w-4" /> {/* Spacer for balance */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 flex flex-col gap-8 relative z-10">
              
              <div className="space-y-4">
                <p className="text-white/40 text-sm font-mono flex gap-3">
                  <span className="text-primary/70">~</span> 
                  <span>$ status --current</span>
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 flex items-center gap-4 w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider">Accepting Contracts for Q4</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-white/40 text-sm font-mono flex gap-3">
                  <span className="text-primary/70">~</span> 
                  <span>$ connect --email</span>
                </p>
                <p className="text-white/60 text-xs font-mono leading-relaxed max-w-sm">
                  Enter your email address below to initialize a secure line. A connection will be established within 24 hours.
                </p>
                
                {/* Form */}
                <form 
                  onSubmit={handleSubmit} 
                  className="w-full mt-4 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status !== "idle"}
                    className="flex-1 bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 px-4 py-3 outline-none text-sm font-mono focus:border-white/30 focus:bg-white/[0.05] transition-all disabled:opacity-50 rounded-lg"
                  />
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="px-6 py-3 bg-white text-black font-bold hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center min-w-[120px] disabled:opacity-80 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-lg font-mono uppercase tracking-wider"
                  >
                    {status === "idle" && "Execute"}
                    {status === "submitting" && <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
                    {status === "success" && "Sent ✓"}
                  </button>
                </form>
              </div>
            </div>

            {/* Subtle Gradient Glow in background of terminal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
