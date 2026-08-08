"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const TESTIMONIALS = [
  {
    quote: "Working with Zafar was seamless. He took our complex requirements and turned them into a fast, beautifully designed platform.",
    author: "The SoftKiwi Team"
  },
  {
    quote: "Zafar was incredibly fast. He understood exactly what I needed for my platform and delivered it flawlessly. I'll definitely be hiring him again.",
    author: "Digital Agency Owner"
  },
  {
    quote: "Honestly one of the best developers I've worked with. The communication was clear, and the web app he built for us looks and works beautifully.",
    author: "Tech Startup Founder"
  },
  {
    quote: "He stepped in to fix a very messy codebase and ended up rebuilding our entire frontend. Extremely talented and professional.",
    author: "B2B SaaS Director"
  }
];

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // ── 3D Tilt Effect State ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      
      {/* ── Background: Fluid Breathing Spotlight ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[1000px] h-[800px] bg-[radial-gradient(circle_800px_at_100%_0%,#ffffff08,transparent)] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[radial-gradient(circle_600px_at_0%_100%,#8A63D205,transparent)] pointer-events-none" 
      />

      {/* ── Main Content Split ── */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Side: Typography & Form */}
        <div className="flex-1 flex flex-col items-start text-left w-full max-w-3xl">
          
          {/* Eyebrow Label - Glowing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
              Md Zafar — Full-Stack & AI Developer
            </span>
          </motion.div>

          {/* Massive Headline with Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-col items-start gap-1 mb-8 w-full"
          >
            <motion.h1 
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="text-[11vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#888888,55%,#ffffff)] bg-[length:200%_100%] leading-[0.95] drop-shadow-lg"
            >
              Building Web & SaaS.
            </motion.h1>
            <motion.h1 
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="text-[11vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#888888,55%,#ffffff)] bg-[length:200%_100%] leading-[0.95] drop-shadow-lg"
            >
              Powered by AI.
            </motion.h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-white/60 text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-10"
          >
            I help founders and businesses build high-converting web applications, scalable SaaS platforms, and custom AI agents. From idea to launch, I turn your vision into a digital product.
          </motion.p>



          {/* High-Trust Mini Testimonial (Rotating) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="flex flex-col gap-3 max-w-md border-l-2 border-white/10 pl-4 py-1 h-[80px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col gap-2"
              >
                <p className="text-white/50 text-sm italic leading-relaxed line-clamp-2">
                  "{TESTIMONIALS[testimonialIndex].quote}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-[11px] font-bold tracking-wider uppercase">— {TESTIMONIALS[testimonialIndex].author}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Right Side: Conversion Stack (Status + Contact) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="flex-1 w-full max-w-[460px] flex flex-col gap-6 mt-12 lg:mt-0 perspective-1000 lg:ml-auto"
        >
          {/* 3D Tilt Container */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full rounded-[2.5rem] bg-[#0a0a0a] border border-white/[0.08] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden group hover:border-white/20 transition-colors duration-500"
          >
            
            {/* Subtle Gradient Glow in background of card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
            
            {/* Profile Header */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="flex items-center justify-between mb-8 relative z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#111] flex items-center justify-center border border-white/10 shadow-inner text-white/70 overflow-hidden">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wide text-xl">Developer Status</h3>
                  <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mt-1">Available for Hire</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              
              {/* Metric: Availability */}
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="bg-[#111] border border-white/[0.05] rounded-[1.25rem] p-5 flex items-center justify-between shadow-lg"
              >
                <div className="flex flex-col">
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-1.5">Availability</span>
                  <span className="text-white text-sm font-semibold">Accepting New Client Projects</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
                </div>
              </div>

              {/* Hard Metrics Row */}
              <div 
                style={{ transform: "translateZ(50px)" }}
                className="flex gap-4 w-full"
              >
                <div className="flex-1 bg-[#111] border border-white/[0.05] rounded-[1.25rem] p-5 flex flex-col justify-center items-center shadow-lg">
                  <span className="text-white text-3xl font-bold mb-1">10+</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center">Projects<br/>Shipped</span>
                </div>
                <div className="flex-1 bg-[#111] border border-white/[0.05] rounded-[1.25rem] p-5 flex flex-col justify-center items-center shadow-lg">
                  <span className="text-white text-3xl font-bold mb-1">2+</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center">Years<br/>Engineering</span>
                </div>
              </div>
              
              {/* Action */}
              <a 
                style={{ transform: "translateZ(60px)" }}
                href="/#projects"
                className="block w-full py-4 rounded-2xl border border-white/10 text-center text-white/80 text-sm font-bold bg-white/[0.02] hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all mt-4 uppercase tracking-widest shadow-lg"
              >
                View Live Projects →
              </a>
            </div>
          </motion.div>

          {/* Contact Form Moved Here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="w-full relative z-20"
          >
            <form onSubmit={handleSubmit} className="relative flex items-center w-full group">
              <div className="absolute left-6 text-white/30 group-focus-within:text-white/60 transition-colors pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <input
                type="email"
                required
                placeholder="Enter email to discuss project..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== "idle"}
                className="w-full h-[72px] bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white placeholder:text-white/30 rounded-full pl-14 pr-[150px] outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all disabled:opacity-50 shadow-inner text-base shadow-[0_0_15px_rgba(255,255,255,0.02)_inset]"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="absolute right-2.5 top-2.5 bottom-2.5 px-6 bg-white text-black font-bold rounded-full hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center min-w-[130px] disabled:opacity-80 text-[15px] tracking-wide"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {status === "idle" && "Let's Talk"}
                  {status === "submitting" && <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
                  {status === "success" && "Sent ✓"}
                </span>
              </button>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
