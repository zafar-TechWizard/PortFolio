"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 0"] });
  const graphY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-[90vw] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Side: The Actual About Text & Identity */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2 text-xs font-semibold text-white/60 tracking-widest uppercase backdrop-blur-xl mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            The Identity
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] font-heading mb-6"
          >
            More than a coder.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              A business architect.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-5 text-white/55 text-lg leading-relaxed font-light mb-10"
          >
            <p>
              Most freelancers just write code. I engineer systems that scale. When you hire me, you aren't just getting a developer—you are getting a technical partner who understands that software must solve actual business bottlenecks and generate ROI.
            </p>
            <p>
              I bring enterprise-level engineering standards directly to your project. Having built robust SaaS platforms at <strong className="text-white/80 font-medium">SoftKiwi</strong>, deployed AI pipelines at <strong className="text-white/80 font-medium">Celebal Tech</strong>, and delivered custom solutions for independent clients, I don't experiment on your dime. Whether leading a project solo or collaborating with dev teams, I use proven architectures to ensure your product launches on time and works flawlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Read Full Story
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: The Animated Identity Graph */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-[700px]">
          <motion.div 
            style={{ y: graphY }}
            className="absolute inset-0 w-full h-full"
          >
            {/* SVG Overlay for Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Base Lines connected to Center Zafar Node (50, 50) */}
              <path d="M 50 50 V 20 H 25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M 50 50 V 25 H 75" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M 50 50 H 20 V 75" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M 50 50 H 80 V 70" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              
              {/* Extra decorative connections to match reference image complexity */}
              <path d="M 25 20 V 5 H 70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M 75 25 V 15 H 90 V 70 H 80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M 20 75 V 85 H 45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" />

              {/* Animated Data Packets (Glowing dashes) */}
              <AnimatedPath d="M 50 50 V 20 H 25" delay={0.5} duration={3} />
              <AnimatedPath d="M 50 50 V 25 H 75" delay={1.5} duration={3} />
              <AnimatedPath d="M 50 50 H 20 V 75" delay={1} duration={3} />
              <AnimatedPath d="M 50 50 H 80 V 70" delay={2} duration={3} />
              
              {/* Decor paths animation */}
              <AnimatedPath d="M 25 20 V 5 H 70" delay={3} duration={4} color="rgba(255,255,255,0.2)" />
              <AnimatedPath d="M 75 25 V 15 H 90 V 70 H 80" delay={2.5} duration={5} color="rgba(255,255,255,0.2)" />
            </svg>

            {/* Central Node */}
            <GraphNode 
              x={50} y={50} 
              title="Zafar" 
              subtitle="The Core Identity" 
              icon={<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(255,107,74,0.3)]">Z</div>}
              delay={0}
              isCentral
            />
            
            {/* Experience & Facets Nodes */}
            <GraphNode 
              x={75} y={25} 
              title="SoftKiwi" 
              subtitle="Full-Stack Engineer • SaaS" 
              icon={<IconBlock color="#3B82F6" text="SK" />}
              delay={0.2}
            />
            
            <GraphNode 
              x={25} y={20} 
              title="Celebal Tech" 
              subtitle="AI & Data Science Architect" 
              icon={<IconBlock color="#10B981" text="CT" />}
              delay={0.4}
            />

            <GraphNode 
              x={20} y={75} 
              title="Problem Solver" 
              subtitle="First-Principles Thinker" 
              icon={<IconBlock color="#F59E0B" text="PS" />}
              delay={0.6}
            />

            <GraphNode 
              x={80} y={70} 
              title="ACIC RISE" 
              subtitle="Hackathon Finalist • Top 4" 
              icon={<IconBlock color="#8B5CF6" text="🏆" />}
              delay={0.5}
            />

            {/* Decorative small boxes along the paths */}
            <TinyNode x={50} y={35} />
            <TinyNode x={25} y={35} />
            <TinyNode x={65} y={50} />
            <TinyNode x={35} y={50} />
            <TinyNode x={90} y={45} />
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ─── Helper Components for Graph ─── */

function AnimatedPath({ d, delay, duration, color = "rgba(255,255,255,0.8)" }: { d: string, delay: number, duration: number, color?: string }) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="0.4"
      fill="none"
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: [0, 1, 0] }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function GraphNode({ x, y, title, subtitle, icon, delay, isCentral = false }: { x: number, y: number, title: string, subtitle: string, icon: React.ReactNode, delay: number, isCentral?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3.5 z-10 whitespace-nowrap shadow-2xl ${
        isCentral 
          ? "px-6 py-4 bg-[#111111] border border-white/[0.15] rounded-[2rem]" 
          : "px-4 py-3 bg-[#080808] border border-white/[0.08] rounded-xl hover:border-white/[0.2] transition-colors cursor-default"
      }`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="shrink-0">{icon}</div>
      <div className="flex flex-col">
        <span className={`${isCentral ? "text-white text-base font-bold tracking-tight" : "text-white/90 text-sm font-medium tracking-tight"}`}>
          {title}
        </span>
        <span className={`${isCentral ? "text-white/50 text-xs mt-0.5 uppercase tracking-widest" : "text-white/40 text-[10px] mt-0.5 uppercase tracking-wider"}`}>
          {subtitle}
        </span>
      </div>
    </motion.div>
  );
}

function IconBlock({ color, text }: { color: string, text: string }) {
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[11px] shadow-inner" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}40`, color: color }}>
      {text}
    </div>
  );
}

function TinyNode({ x, y }: { x: number, y: number }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/20 rounded-sm z-10" style={{ left: `${x}%`, top: `${y}%` }} />
  );
}
