"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "Custom AI Systems",
    subtitle: "RAG, Agents & Intelligent Assistants",
    description: "Your business has internal knowledge trapped in documents, databases, and tribal memory. I build private AI systems that turn that knowledge into an on-demand, conversational resource — no generic chatbots, no hallucinations.",
    features: ["Internal Knowledge Assistants", "Document Q&A Systems", "AI Customer Support Agents", "Multi-Document Retrieval", "AI-Powered Dashboards", "Research Assistants"],
    colSpan: "lg:col-span-2",
    color: "from-primary"
  },
  {
    title: "Workflow Automation",
    subtitle: "Eliminate Repetitive Operations",
    description: "If your team is manually copying data, sending follow-ups, or processing reports — I connect your APIs, AI models, and databases into automated pipelines that run 24/7 without human intervention.",
    features: ["WhatsApp & CRM Automation", "Data Processing Pipelines", "Event-Driven Notifications", "Scheduled Report Generation"],
    colSpan: "lg:col-span-1",
    color: "from-secondary"
  },
  {
    title: "End-to-End SaaS Products",
    subtitle: "From Idea to Launch-Ready Product",
    description: "You have a product idea but need an engineer who thinks like a founder. I handle the full stack — database architecture, backend APIs, authentication, frontend UI, and AI integration — so you launch with a real product, not a prototype.",
    features: ["Product Architecture & Design", "Scalable Backend APIs", "Authentication & Payments", "Admin Dashboards", "AI Feature Integration", "Deployment & CI/CD"],
    colSpan: "lg:col-span-3",
    color: "from-blue-500"
  }
];

const fields = [
  { name: "SaaS & Product Development", icon: "🚀" },
  { name: "AI & Machine Learning", icon: "🧠" },
  { name: "Automation & Operations", icon: "⚙️" },
  { name: "Knowledge Management", icon: "📚" },
  { name: "E-Commerce & Marketplaces", icon: "🛒" },
  { name: "Real Estate & PropTech", icon: "🏢" },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-secondary w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            What I Can Build For You
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
            You bring the problem.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">I engineer the solution.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl leading-relaxed">
            I don&apos;t sell hours of coding. I deliver systems that solve operational bottlenecks, automate workflows, and turn complex ideas into scalable, AI-powered products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <BentoCard key={idx} service={service} />
          ))}
        </div>

        {/* Fields I Work In */}
        <div className="mt-24 pt-16 border-t border-white/[0.05]">
          <p className="text-white/80 text-sm tracking-widest uppercase mb-10 font-semibold">Fields & Industries I Work In</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fields.map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all group cursor-default"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{field.icon}</span>
                <span className="text-white/60 text-xs text-center tracking-wide leading-tight group-hover:text-white/80 transition-colors">{field.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ service }: { service: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Flashlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Tilt calculation
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    // Flashlight calculation
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-[2rem] bg-[#0A0D12] border border-white/[0.05] p-10 flex flex-col h-full overflow-hidden group transition-all duration-300 ${service.colSpan}`}
    >
      {/* Flashlight Border Glow Effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            () => `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(255,255,255,0.06), transparent 40%)`
          )
        }}
      />
      
      {/* Tinted Background Glow based on service color */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl ${service.color} to-transparent opacity-10 blur-[80px] rounded-full pointer-events-none`} />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <p className={`text-sm font-bold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color} to-white/50`}>
          {service.subtitle}
        </p>
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading tracking-tight">{service.title}</h3>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-8 border-t border-white/[0.05]" style={{ transform: "translateZ(30px)" }}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feat: string, i: number) => (
            <li key={i} className="flex items-center text-white/70">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} to-white mr-3 shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
