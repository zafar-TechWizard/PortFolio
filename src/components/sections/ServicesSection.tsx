"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "saas",
    title: "Full-Stack SaaS Development",
    subtitle: "From Idea to Production-Ready App",
    description: "I build robust, scalable web applications using modern tech stacks like Next.js and FastAPI. I handle the complete product lifecycle — from database design and backend architecture to intuitive frontend interfaces.",
    features: ["Custom Web Applications", "Scalable Backend APIs", "Database Architecture", "Responsive UI/UX", "Authentication & Payments"],
    color: "from-purple-400 to-purple-600",
    shadow: "shadow-[0_0_30px_rgba(167,139,250,0.15)]",
    glowColor: "rgba(167,139,250,0.08)",
    activeText: "text-purple-400",
  },
  {
    id: "ai",
    title: "AI & LLM Integrations",
    subtitle: "RAG, Agents & Intelligent Systems",
    description: "I integrate advanced AI capabilities directly into your applications. Whether you need internal knowledge bases, conversational agents, or automated data extraction, I build private, secure AI systems tailored to your business.",
    features: ["Custom LLM Integration", "RAG Pipeline Development", "AI Support Agents", "Automated Document Processing", "Intelligent Chatbots"],
    color: "from-emerald-400 to-emerald-600",
    shadow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    glowColor: "rgba(52,211,153,0.08)",
    activeText: "text-emerald-400",
  },
  {
    id: "automation",
    title: "Workflow Automation",
    subtitle: "Eliminate Repetitive Operations",
    description: "I connect your tools, APIs, and databases to create automated pipelines that run 24/7. Stop manually moving data and let code handle your repetitive business operations without human intervention.",
    features: ["Custom API Integrations", "Data Processing Pipelines", "CRM & WhatsApp Automation", "Event-Driven Workflows", "Scheduled Reports"],
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-[0_0_30px_rgba(96,165,250,0.15)]",
    glowColor: "rgba(96,165,250,0.08)",
    activeText: "text-blue-400",
  }
];

const fields = [
  {
    name: "SaaS & Product",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    )
  },
  {
    name: "AI & Machine Learning",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  },
  {
    name: "Automation Ops",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    )
  },
  {
    name: "E-Commerce",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    )
  },
  {
    name: "Knowledge Management",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    name: "Real Estate & PropTech",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative w-full bg-[#000000] py-32 px-6 border-t border-white/[0.05]">
      {/* Dynamic Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-[150px] pointer-events-none transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: services[activeIndex].glowColor }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto relative z-10 flex flex-col gap-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2 text-xs font-semibold text-white/60 tracking-widest uppercase backdrop-blur-xl mb-6 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              What I Build
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
              You bring the problem.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/30">I engineer the solution.</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-lg leading-relaxed font-light">
            I don&apos;t sell hours of coding. I deliver entire systems that solve operational bottlenecks, automate workflows, and turn complex ideas into highly-scalable digital products.
          </p>
        </div>

        {/* Interactive App-Like Stage */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[580px]">
          
          {/* Left Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative text-left px-7 py-7 rounded-[1.5rem] transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? `bg-[#0a0a0a] border border-white/[0.1] ${service.shadow}` 
                      : "bg-transparent border border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? service.activeText : "text-white/30"}`}>
                        0{idx + 1}
                      </span>
                      {isActive && (
                        <motion.div layoutId="active-dot" className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      )}
                    </div>
                    <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                      {service.title}
                    </span>
                  </div>
                  
                  {/* Subtle active background glow inside button */}
                  {isActive && (
                    <div 
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 blur-[40px] opacity-40 pointer-events-none"
                      style={{ backgroundColor: service.glowColor.replace('0.08', '0.5') }}
                    />
                  )}
                </button>
              );
            })}

            {/* Quick CTA inside menu column for high conversion */}
            <div className="mt-auto pt-6 hidden lg:block">
              <a href="#contact" className="group flex items-center justify-between w-full p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all">
                <span className="text-white/70 text-sm font-semibold tracking-wide group-hover:text-white transition-colors">Start a Project</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Stage (The Content & Wireframes) */}
          <div className="w-full lg:w-2/3 h-full rounded-[2rem] bg-[#050505] border border-white/[0.08] relative overflow-hidden flex items-center shadow-2xl backdrop-blur-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex flex-col md:flex-row relative z-10"
              >
                {/* Content Side */}
                <div className="w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/[0.05]">
                  <h3 className={`text-xs font-bold tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r ${services[activeIndex].color}`}>
                    {services[activeIndex].subtitle}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
                    {services[activeIndex].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                    {services[activeIndex].features.map((feat, i) => (
                      <div key={i} className="flex items-start text-white/60 text-sm">
                        <div className="mt-1 mr-3 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Side: Premium App Wireframes */}
                <div className="w-full md:w-[45%] h-full bg-[#020202] flex items-center justify-center p-8 relative overflow-hidden">
                                   {/* SaaS Dashboard Wireframe */}
                  {activeIndex === 0 && (
                    <div className="w-full max-w-[280px] h-[220px] bg-[#0A0A0A] border border-white/[0.08] rounded-xl shadow-2xl flex overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-14 h-full border-r border-white/[0.05] flex flex-col gap-3 p-3 bg-white/[0.01]">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-800 rounded-lg shadow-inner" />
                        <div className="w-full h-6 bg-white/5 rounded-md mt-4" />
                        <div className="w-full h-6 bg-white/5 rounded-md" />
                        <div className="w-full h-6 bg-white/5 rounded-md" />
                      </div>
                      {/* Main */}
                      <div className="flex-1 p-4 flex flex-col gap-3 bg-[#020202]">
                        <div className="w-1/3 h-4 bg-white/10 rounded-sm mb-2" />
                        <div className="flex gap-3">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "48px" }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-end p-2"
                          >
                            <div className="w-full h-1/2 bg-purple-500/20 rounded-sm" />
                          </motion.div>
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "48px" }}
                            transition={{ delay: 0.3 }}
                            className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg" 
                          />
                        </div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="w-full flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg p-3 flex flex-col gap-2"
                        >
                          <div className="w-full h-2 bg-white/5 rounded-sm" />
                          <div className="w-full h-2 bg-white/5 rounded-sm" />
                          <div className="w-3/4 h-2 bg-white/5 rounded-sm" />
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* AI Chat Wireframe */}
                  {activeIndex === 1 && (
                    <div className="w-full max-w-[260px] bg-[#0A0A0A] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[300px]">
                      <div className="h-10 border-b border-white/[0.05] flex items-center px-4 gap-3 bg-white/[0.02]">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Knowledge.ai</span>
                      </div>
                      <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="self-end w-4/5 h-8 bg-white/5 rounded-t-xl rounded-bl-xl rounded-br-sm border border-white/[0.05]" />
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="self-start w-[90%] p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-t-xl rounded-br-xl rounded-bl-sm flex flex-col gap-2"
                        >
                          <div className="w-full h-2 bg-emerald-500/20 rounded-full" />
                          <div className="w-3/4 h-2 bg-emerald-500/20 rounded-full" />
                          <div className="w-5/6 h-2 bg-emerald-500/20 rounded-full" />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="self-end w-1/2 h-8 bg-white/5 rounded-t-xl rounded-bl-xl rounded-br-sm border border-white/[0.05] mt-auto" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Automation Node Wireframe */}
                  {activeIndex === 2 && (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative">
                      <motion.div 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 z-10 flex items-center justify-center shadow-lg"
                      >
                        <div className="w-6 h-6 rounded bg-white/10" />
                      </motion.div>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-blue-500/10 relative">
                        <motion.div 
                          animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-blue-400 rounded-full blur-[1px]" 
                        />
                      </div>
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-40 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 z-10 flex flex-col items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                      >
                        <span className="text-[10px] text-blue-300 font-mono tracking-widest uppercase">Data Processor</span>
                        <div className="w-full h-1 bg-blue-500/20 rounded-full overflow-hidden">
                           <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1, repeat: Infinity }} className="w-1/2 h-full bg-blue-400" />
                        </div>
                      </motion.div>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/10 to-blue-500/5 relative" />
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 z-10 flex items-center justify-center shadow-lg"
                      >
                        <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-white/40" />
                      </motion.div>
                    </div>
                  )}
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] overflow-hidden group hover:border-white/[0.1] transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <p className="relative z-10 text-white/70 text-lg md:text-xl font-light">
            Have a problem that fits one of these?
            <span className="block text-white font-medium mt-1">Let&apos;s define the system that solves it.</span>
          </p>
          <a
            href="#contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all"
          >
            Let&apos;s Scope It
          </a>
        </motion.div>

        {/* Fields I Work In */}
        <div className="mt-20 pt-16 border-t border-white/[0.05]">
          <p className="text-white/80 text-sm tracking-widest uppercase mb-10 font-semibold">Fields & Industries I Work In</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fields.map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all group cursor-default shadow-lg"
              >
                <span className="text-white/40 group-hover:text-white/90 transition-colors transform group-hover:scale-110 duration-300">{field.icon}</span>
                <span className="text-white/60 text-xs text-center tracking-wide leading-tight group-hover:text-white/90 transition-colors font-medium">{field.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
