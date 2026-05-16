import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="hero" className="w-full flex justify-center bg-[#050505] pt-24 pb-12">
      {/* The 90vw Framed Poster */}
      <div className="relative flex items-center justify-center h-[calc(100vh-120px)] min-h-[700px] w-[95vw] lg:w-[90vw] overflow-hidden bg-[#0A0D12] rounded-[2.5rem] border border-white/[0.05] shadow-[0_0_100px_rgba(0,0,0,1)]">
        
        {/* Cinematic Grain/Noise Overlay */}
        <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Background Orbs for subtle deep space color inside the poster */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/3 translate-y-1/3" />

        {/* Massive Background Typography */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-[2]">
          <h1 
            className="text-[28vw] leading-none font-bold uppercase tracking-tighter whitespace-nowrap opacity-20"
            style={{ 
              WebkitTextStroke: "1.5px rgba(255,255,255,0.3)", 
              color: "transparent",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
              WebkitBackgroundClip: "text"
            }}
          >
            ZAFAR
          </h1>
        </div>

        {/* Main Subject Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[95%] z-[10] pointer-events-none flex items-end justify-center">
          <Image
            src="/img/my.png"
            alt="Zafar"
            width={1000}
            height={1400}
            className="object-contain object-bottom h-full w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            priority
          />
          {/* Subtle Bottom Fade inside the poster to ground the image */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/80 to-transparent" />
        </div>

        {/* Foreground Content - Positioned perfectly at the corners of the poster */}

        {/* Bottom Left: Identity & CTA */}
        <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-[20] max-w-xl pointer-events-auto">
          {/* Status Badge moved to bottom left above the title */}
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-xl shadow-2xl mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Available for Work
          </div>

          <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-white mb-6 leading-[0.95] drop-shadow-2xl font-heading">
            Building <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">Intelligent Systems</span><br/>
            into the Web.
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-10 font-light max-w-md drop-shadow-md leading-relaxed">
            <strong className="text-white font-medium">AI Solutions Architect & Product Engineer</strong>. Turning complex ideas into scalable, automated, AI-powered digital products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="#contact" className="px-8 py-4 shadow-[0_0_40px_rgba(255,107,74,0.4)] border border-primary/50 text-base font-semibold group">
              Let&apos;s Talk <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ml-1">↗</span>
            </Button>
            <Button variant="secondary" href="#projects" className="px-8 py-4 bg-white/[0.02] border-white/10 hover:bg-white/[0.08] text-white text-base backdrop-blur-md">
              View Work
            </Button>
          </div>
        </div>

        {/* Bottom Right: Floating Glass Element */}
        <div className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-[20] hidden lg:flex flex-col gap-4 pointer-events-auto">
          <div className="backdrop-blur-3xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col gap-6 w-[300px] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
            {/* Inner Glass Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <p className="text-primary font-bold text-[10px] tracking-[0.25em] uppercase mb-2">Role</p>
              <p className="text-white text-xl font-heading tracking-wide">AI Solutions Architect</p>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.1] to-transparent relative z-10" />
            <div className="relative z-10">
              <p className="text-secondary font-bold text-[10px] tracking-[0.25em] uppercase mb-2">Expertise</p>
              <p className="text-white text-xl font-heading tracking-wide">SaaS & Automation</p>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.1] to-transparent relative z-10" />
            <div className="flex justify-between items-center mt-2 relative z-10">
               <a href="https://linkedin.com" className="text-white/50 hover:text-primary transition-colors text-xs uppercase tracking-[0.2em] font-bold">LinkedIn</a>
               <a href="https://github.com" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
