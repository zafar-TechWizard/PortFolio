"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "InfoLytix",
    subtitle: "AI Research & Knowledge Assistant",
    description: "Your team wastes hours digging through documents, tabs, and chat history searching for answers that already exist in your company's knowledge. InfoLytix turns your entire knowledge base into a conversational AI resource — ask a question, get a source-referenced answer in under two seconds.",
    features: ["AI Conversational Search", "Web-enabled Workflows", "Document Ingestion", "AI Memory Systems"],
    architecture: ["Flask", "MongoDB Atlas", "SQLite Hybrid", "Vector Search"],
    align: "left",
    color: "from-[#FF6B4A]",
    status: "Shipped & Live",
    githubUrl: "https://github.com/zafar-TechWizard/InfoLytix",
    viz: "infolytix"
  },
  {
    title: "SOFI",
    subtitle: "Personalized AI Ecosystem",
    description: "Most AI assistants forget who you are the moment you close the app. SOFI is architected from the ground up to remember, adapt, and act autonomously — a persistent AI companion that learns your patterns, automates your workflows, and gets more useful every single day.",
    features: ["Persistent Context Systems", "WhatsApp Automation", "Background Memory Analysis", "Autonomous Flows"],
    architecture: ["Agentic Architecture", "LLMs", "Memory Categorization", "Task Orchestration"],
    align: "right",
    color: "from-[#8A63D2]",
    status: "In Development",
    githubUrl: null,
    viz: "sofi"
  },
  {
    title: "ZenPulse",
    subtitle: "Mental Wellness AI Platform",
    description: "Mental health support shouldn't require a scheduling link, a waiting list, or an insurance form. ZenPulse delivers real-time, compassionate AI-powered emotional support — an always-available companion built to listen, reflect, and respond with genuine care.",
    features: ["Conversational AI Therapy", "Emotional Pattern Analysis", "Session Memory", "Crisis Detection"],
    architecture: ["Flask", "Python", "LLM Integration", "Sentiment Analysis"],
    align: "left",
    color: "from-[#22C55E]",
    status: "Shipped",
    githubUrl: "https://github.com/zafar-TechWizard/ZenPulse",
    viz: "zenpulse"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <div className="mb-20 px-6 lg:px-0">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Case Studies
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
            The proof is in<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">the systems I&apos;ve built.</span>
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

function ProjectCaseStudy({ project, index }: { project: typeof projects[0], index: number }) {
  const isLeft = project.align === "left";
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.2 1", "0.8 0"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  } as const;

  return (
    <div ref={ref} className={`relative flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}>

      {/* Visual Panel */}
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[680px] relative rounded-[2rem] overflow-hidden bg-[#0A0D12] border border-white/[0.05] group">
        <motion.div
          style={{ y: orbY, scale: orbScale }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br ${project.color} to-transparent opacity-10 blur-[80px] mix-blend-screen transition-opacity duration-700 group-hover:opacity-20 pointer-events-none`}
        />
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

        {/* Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          {project.viz === "infolytix" && <InfoLytixViz />}
          {project.viz === "sofi" && <SOFIViz />}
          {project.viz === "zenpulse" && <ZenPulseViz />}
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
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <p className={`text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} to-white/50`}>
              {project.subtitle}
            </p>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
              project.status === "Shipped & Live" || project.status === "Shipped"
                ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
                : "text-yellow-400 border-yellow-400/20 bg-yellow-400/5"
            }`}>
              {project.status}
            </span>
          </div>
          <h3 className="text-5xl lg:text-7xl font-bold text-white font-heading tracking-tight">{project.title}</h3>
        </motion.div>

        <motion.p variants={itemVariants} className="text-white/55 text-xl leading-relaxed max-w-xl">
          {project.description}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-8 border-t border-white/[0.05]">
          <p className="text-white text-xs tracking-widest uppercase mb-5 font-semibold">Core Capabilities</p>
          <div className="flex flex-wrap gap-3">
            {project.features.map((feat, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/70 text-sm backdrop-blur-md">
                {feat}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6 border-t border-white/[0.05]">
          <p className="text-white text-xs tracking-widest uppercase mb-5 font-semibold">Architecture</p>
          <div className="flex flex-wrap gap-3">
            {project.architecture.map((arch, i) => (
              <span key={i} className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.color} to-transparent bg-opacity-10 border border-white/[0.08] text-white text-sm font-medium backdrop-blur-md`}>
                {arch}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-white/[0.2] transition-all group/link"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
              <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yellow-400/5 border border-yellow-400/20 text-yellow-400/80 text-sm font-semibold cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              In Active Development
            </span>
          )}
        </motion.div>
      </motion.div>

    </div>
  );
}

/* ─── InfoLytix: RAG Pipeline Visualization ─── */
function InfoLytixViz() {
  const nodes = [
    { label: "Document Ingestion", sublabel: "PDF · URL · Text", accent: "#FF6B4A" },
    { label: "Smart Chunker", sublabel: "Context-aware splitting", accent: "#FF8C6E" },
    { label: "Vector Database", sublabel: "Semantic embeddings", accent: "#FFA98F" },
    { label: "AI Reasoning Layer", sublabel: "LLM + RAG pipeline", accent: "#FFB99F" },
    { label: "Source-Referenced Response", sublabel: "Answer in < 2 seconds", accent: "#FFCBB5" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-8 py-10 gap-0">
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/50 mb-6">RAG Architecture Pipeline</p>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative w-full max-w-[300px] flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: node.accent, boxShadow: `0 0 8px ${node.accent}80` }} />
            <div>
              <p className="text-white/80 text-sm font-medium leading-tight">{node.label}</p>
              <p className="text-white/30 text-[11px] mt-0.5">{node.sublabel}</p>
            </div>
          </motion.div>

          {i < nodes.length - 1 && (
            <div className="relative w-px h-7 bg-gradient-to-b from-primary/40 to-primary/10 overflow-visible">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ top: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: i * 0.36 }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─── SOFI: Multi-Agent Brain Visualization ─── */
const satellites = [
  { label: "Memory", sublabel: "Long-term recall", top: "10%", left: "50%", transform: "translateX(-50%)", delay: 0 },
  { label: "Tasks", sublabel: "Orchestration", top: "34%", right: "5%", delay: 0.1 },
  { label: "WhatsApp", sublabel: "Automation", bottom: "20%", right: "12%", delay: 0.2 },
  { label: "Context", sublabel: "Awareness", bottom: "20%", left: "12%", delay: 0.3 },
  { label: "Response", sublabel: "Output layer", top: "34%", left: "5%", delay: 0.4 },
];

function SOFIViz() {
  return (
    <div className="relative w-full h-full">
      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sofiLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A63D2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8A63D2" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Lines to each satellite — approximate % coords */}
        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#sofiLine)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="90%" y2="36%" stroke="url(#sofiLine)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="82%" y2="74%" stroke="url(#sofiLine)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="18%" y2="74%" stroke="url(#sofiLine)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="10%" y2="36%" stroke="url(#sofiLine)" strokeWidth="1" />
      </svg>

      {/* Central AI Brain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative w-[90px] h-[90px] rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center"
          animate={{ boxShadow: ["0 0 20px rgba(138,99,210,0.2)", "0 0 40px rgba(138,99,210,0.45)", "0 0 20px rgba(138,99,210,0.2)"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-2 rounded-full border border-secondary/25"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />
          <span className="text-secondary/90 text-[11px] font-bold text-center font-heading leading-tight z-10">AI<br/>Brain</span>
        </motion.div>
      </div>

      {/* Satellite nodes */}
      {satellites.map((sat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: sat.delay, duration: 0.4 }}
          className="absolute z-10 px-3 py-2 rounded-xl bg-[#0A0D12]/95 border border-secondary/20 text-center min-w-[72px]"
          style={{ top: sat.top, left: sat.left, right: (sat as { right?: string }).right, bottom: (sat as { bottom?: string }).bottom, transform: sat.transform }}
        >
          <motion.div
            animate={{ borderColor: ["rgba(138,99,210,0.15)", "rgba(138,99,210,0.4)", "rgba(138,99,210,0.15)"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.5 }}
            className="absolute inset-0 rounded-xl border border-secondary/15"
          />
          <p className="text-white/85 text-xs font-medium whitespace-nowrap relative z-10">{sat.label}</p>
          <p className="text-white/30 text-[9px] whitespace-nowrap relative z-10">{sat.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── ZenPulse: Conversation UI Mockup ─── */
function ZenPulseViz() {
  return (
    <div className="flex flex-col w-full h-full max-w-[340px] mx-auto">
      {/* App bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-white/[0.02] rounded-t-3xl">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <span className="text-emerald-400 text-xs font-bold">Z</span>
        </div>
        <div>
          <p className="text-white/80 text-xs font-semibold">ZenPulse</p>
          <p className="text-emerald-400/70 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            Active & Listening
          </p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col justify-end gap-4 px-5 py-6 bg-[#0A0D12]/60">
        {/* User message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="self-end max-w-[78%] px-4 py-3 rounded-2xl rounded-br-sm bg-white/[0.06] border border-white/[0.06]"
        >
          <p className="text-white/75 text-sm leading-relaxed">I&apos;ve been feeling really overwhelmed lately...</p>
        </motion.div>

        {/* AI response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="self-start max-w-[82%] px-4 py-3 rounded-2xl rounded-bl-sm bg-emerald-500/[0.07] border border-emerald-500/[0.15]"
        >
          <p className="text-white/70 text-sm leading-relaxed">I hear you. Let&apos;s take a breath together. What&apos;s been weighing on you most?</p>
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="self-start flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-emerald-500/[0.04] border border-emerald-500/[0.08]"
        >
          {[0, 0.2, 0.4].map((d, i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: d }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
