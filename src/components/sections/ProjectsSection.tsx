"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "InfoLytix",
    subtitle: "AI Research & Knowledge Assistant",
    description: "An AI-powered SaaS research assistant designed to help users retrieve, organize, and interact with information intelligently. Full-stack engineering handling document ingestion, similarity search pipelines, and context-aware conversations.",
    features: ["AI Conversational Search", "Web-enabled Workflows", "Document Ingestion", "AI Memory Systems"],
    architecture: ["Flask", "MongoDB Atlas", "SQLite Hybrid", "Vector Search"],
    align: "left",
    color: "from-[#FF6B4A]" // Primary
  },
  {
    title: "SOFI",
    subtitle: "Personalized AI Ecosystem",
    description: "A highly interactive AI assistant designed to feel emotionally intelligent, context-aware, proactive, and deeply personalized. Built on a centralized AI brain architecture with modular agent systems.",
    features: ["Persistent Context Systems", "WhatsApp Automation", "Background Memory Analysis", "Autonomous Flows"],
    architecture: ["Agentic Architecture", "LLMs", "Memory Categorization", "Task Orchestration"],
    align: "right",
    color: "from-[#9D4EDD]" // Secondary
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <div className="mb-20 px-6 lg:px-0">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Featured Systems
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
            Building intelligent<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">ecosystems.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((proj, idx) => (
            <ProjectCaseStudy key={idx} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseStudy({ project, index }: { project: any, index: number }) {
  const isLeft = project.align === "left";
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 0"]
  });

  const orbY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  } as const;

  return (
    <div ref={ref} className={`relative flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}>
      
      {/* Visual / Abstract Representation */}
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative rounded-[2rem] overflow-hidden bg-[#0A0D12] border border-white/[0.05] group">
        {/* Parallax Orb */}
        <motion.div 
          style={{ y: orbY, scale: orbScale }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${project.color} to-transparent opacity-20 blur-[80px] mix-blend-screen transition-opacity duration-700 group-hover:opacity-40`}
        />
        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        
        {/* Mockup Frame overlay */}
        <div className="absolute inset-6 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm flex flex-col items-center justify-center">
           <p className="text-white/20 font-heading tracking-widest uppercase text-sm">System Visualization</p>
           <h3 className="text-white/10 font-heading text-6xl font-bold mt-4 tracking-tighter">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full lg:w-1/2 flex flex-col gap-8 px-6 lg:px-0"
      >
        <motion.div variants={itemVariants}>
          <p className={`text-sm font-bold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${project.color} to-white/50`}>
            {project.subtitle}
          </p>
          <h3 className="text-5xl lg:text-7xl font-bold text-white font-heading tracking-tight">{project.title}</h3>
        </motion.div>

        <motion.p variants={itemVariants} className="text-white/50 text-xl leading-relaxed max-w-xl">
          {project.description}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-8 border-t border-white/[0.05]">
          <p className="text-white text-sm tracking-widest uppercase mb-6 font-semibold">Core Features</p>
          <div className="flex flex-wrap gap-3">
            {project.features.map((feat: string, i: number) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/70 text-sm backdrop-blur-md">
                {feat}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-white/[0.05]">
          <p className="text-white text-sm tracking-widest uppercase mb-6 font-semibold">Architecture</p>
          <div className="flex flex-wrap gap-3">
            {project.architecture.map((arch: string, i: number) => (
              <span key={i} className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.color} to-transparent bg-opacity-10 border border-white/[0.1] text-white text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                {arch}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}
