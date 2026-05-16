"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const marqueeTech = ["PYTHON", "LANGCHAIN", "NEXT.JS", "FASTAPI", "MONGODB", "TYPESCRIPT", "RAG", "TAILWIND"];

const skillCategories = [
  {
    id: "ai",
    title: "AI & ML",
    skills: ["Retrieval-Augmented Gen (RAG)", "AI Agents & Multi-Agent Systems", "LangChain Pipelines", "Context-aware Systems", "Prompt Engineering", "Semantic Search", "LLM Integration"]
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Python", "Flask", "FastAPI", "REST APIs", "WebSocket Systems", "Async Architectures", "Authentication"]
  },
  {
    id: "data",
    title: "Data & Cloud",
    skills: ["MongoDB Atlas", "SQLite", "Vector Databases", "Document Storage", "Metadata Architectures", "Real-time Processing"]
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SaaS Dashboard Design", "AI Chatbot Interfaces", "UX-focused Web"]
  },
  {
    id: "automation",
    title: "Automation",
    skills: ["WhatsApp API", "Web Scraping", "Background Tasks", "Event-driven Workflows", "API Integrations", "Notification Systems"]
  }
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/[0.05]">
      
      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-hidden whitespace-nowrap mb-32 -rotate-2 select-none pointer-events-none">
        <motion.div 
          className="flex gap-16 pr-16"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {/* Repeat array 3 times for seamless looping */}
          {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, idx) => (
            <span 
              key={idx} 
              className="text-[8vw] font-black font-heading tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)"
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading mb-4">
            Technical Expertise
          </h2>
          <p className="text-white/50 text-lg">
            Building the brain and the body of modern applications.
          </p>
        </div>

        {/* Morphing Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat.id ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/[0.1] border border-white/[0.15] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {skillCategories.map((cat) => (
              cat.id === activeTab && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {cat.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 shadow-[0_0_8px_rgba(255,107,74,0.8)]" />
                      <span className="text-white/80 text-lg">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
