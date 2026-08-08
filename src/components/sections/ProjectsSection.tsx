"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "CoWork Pro",
    subtitle: "Coworking Space Management SaaS",
    context: "Client Deliverable (SoftKiwi)",
    description: "Managing a coworking space on spreadsheets and group chats is a full-time job on its own. CoWork Pro centralises every operational layer — member onboarding, workspace bookings, billing, and admin workflows — into a single, unified SaaS platform. Built and shipped professionally at SoftKiwi.",
    features: ["Member Management", "Booking & Scheduling", "Billing & Invoicing", "Role-Based Access"],
    architecture: ["Next.js", "FastAPI", "Tailwind CSS", "SQL", "Microservices"],
    align: "left",
    color: "from-[#3B82F6]",
    status: "Shipped & Live",
    githubUrl: null,
    viz: "coworkpro"
  },
  {
    title: "SOFI",
    subtitle: "Personalized AI Ecosystem",
    context: "Personal Architecture",
    description: "Most AI assistants forget who you are the moment you close the app. SOFI is architected from the ground up to remember, adapt, and act autonomously — a persistent AI companion that learns your patterns, automates your workflows, and gets more useful every single day.",
    features: ["Persistent Context Systems", "WhatsApp Automation", "Background Memory Analysis", "Autonomous Flows"],
    architecture: ["Agentic Architecture", "LLMs", "Memory Categorization", "Task Orchestration"],
    align: "right",
    color: "from-[#8A63D2]",
    status: "In Development",
    githubUrl: null,
    viz: "sofi"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-[#000000] py-32 overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-[85rem] mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center px-6 lg:px-0">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Featured Engineering
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

        {/* View All CTA */}
        <div className="mt-32 flex justify-center">
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
          >
            <span className="text-white font-semibold tracking-wide">View Full Portfolio</span>
            <span className="text-white/50 group-hover:text-white transition-colors">
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-white/[0.02] blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCaseStudy({ project, index }: { project: typeof projects[0], index: number }) {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.2 1", "0.8 0"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-[2.5rem] bg-[#0A0D12]/80 border border-white/[0.08] overflow-hidden group flex flex-col lg:flex-row shadow-2xl backdrop-blur-sm hover:border-white/[0.15] transition-colors"
    >
      {/* Background glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`w-full h-full bg-gradient-to-r from-transparent via-${project.color.replace('from-', '')} to-transparent`} />
      </div>

      {/* Content Side (55%) */}
      <div className={`w-full lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center ${isLeft ? 'order-1' : 'order-1 lg:order-2'} relative z-10`}>
        
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <p className={`text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r ${project.color} to-white/50`}>
            {project.subtitle}
          </p>
          <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border ${
            project.status === "Shipped & Live" || project.status === "Shipped"
              ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
              : "text-yellow-400 border-yellow-400/20 bg-yellow-400/5"
          }`}>
            {project.status}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border text-white/50 border-white/10 bg-white/5">
            {project.context}
          </span>
        </div>

        <h3 className="text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-6">{project.title}</h3>
        
        <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3 font-semibold">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/70 text-xs">
                  {feat}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3 font-semibold">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((arch, i) => (
                <span key={i} className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.color} to-transparent bg-opacity-[0.05] border border-white/[0.08] text-white/90 text-xs font-medium`}>
                  {arch}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05]">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors group/link"
            >
              View on GitHub
              <svg className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-yellow-400/60 text-sm font-semibold cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 animate-pulse" />
              Private Repository
            </span>
          )}
        </div>
      </div>

      {/* Visual Side (45%) */}
      <div className={`w-full lg:w-[45%] h-[350px] lg:h-auto min-h-[400px] relative bg-[#050505] overflow-hidden ${isLeft ? 'order-2 border-l' : 'order-2 lg:order-1 border-r'} border-white/[0.05]`}>
        <motion.div
          style={{ y: orbY }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-gradient-to-br ${project.color} to-transparent opacity-[0.08] blur-[60px] mix-blend-screen transition-opacity duration-700 group-hover:opacity-20 pointer-events-none`}
        />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

        {/* Visualization Wrapper with scale effect */}
        <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-700">
          {project.viz === "sofi" && <SOFIViz />}
          {project.viz === "coworkpro" && <CoWorkProViz />}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── CoWork Pro: Dashboard UI Mockup ─── */
const memberRows = [
  { name: "Arjun Sharma", plan: "Hot Desk", status: "Active", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  { name: "Priya Nair", plan: "Private Cabin", status: "Active", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  { name: "Ravi Mehta", plan: "Meeting Room", status: "Booked", statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
];

function CoWorkProViz() {
  return (
    <div className="flex flex-col w-full h-full max-w-[360px] mx-auto">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02] rounded-t-3xl">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <span className="text-blue-400 text-[10px] font-bold">C</span>
          </div>
          <span className="text-white/75 text-xs font-semibold">CoWork Pro</span>
        </div>
        <span className="text-white/25 text-[10px] font-mono">Admin Dashboard</span>
      </div>

      <div className="flex-1 flex flex-col gap-3 px-4 py-4 bg-[#0A0D12]/60">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Members", value: "142", color: "text-blue-400" },
            { label: "Bookings", value: "38", color: "text-emerald-400" },
            { label: "Revenue", value: "₹84K", color: "text-primary" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-0.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
            >
              <span className={`text-sm font-bold font-heading ${s.color}`}>{s.value}</span>
              <span className="text-white/30 text-[9px] uppercase tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Members list */}
        <div className="flex flex-col gap-1.5">
          <p className="text-white/25 text-[9px] uppercase tracking-[0.18em] px-1 font-semibold">Active Members</p>
          {memberRows.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-blue-400/80 text-[10px] font-bold">{m.name[0]}</span>
                </div>
                <div>
                  <p className="text-white/75 text-[11px] font-medium">{m.name}</p>
                  <p className="text-white/30 text-[9px]">{m.plan}</p>
                </div>
              </div>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold border ${m.statusColor}`}>
                {m.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Invoice row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-primary/[0.05] border border-primary/[0.12] mt-auto"
        >
          <div>
            <p className="text-white/60 text-[10px] font-medium">Invoice #INV-2024</p>
            <p className="text-white/30 text-[9px]">Arjun Sharma · Hot Desk · Mar</p>
          </div>
          <span className="text-primary text-[10px] font-bold">₹4,200</span>
        </motion.div>
      </div>
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

