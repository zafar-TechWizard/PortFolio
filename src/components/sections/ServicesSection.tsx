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
  {
    name: "SaaS & Product Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    )
  },
  {
    name: "AI & Machine Learning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  },
  {
    name: "Automation & Operations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    )
  },
  {
    name: "Knowledge Management",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    name: "E-Commerce & Marketplaces",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    )
  },
  {
    name: "Real Estate & PropTech",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  },
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
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.04] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all group/btn"
          >
            Let&apos;s Scope It
            <span className="inline-block transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">↗</span>
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
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all group cursor-default"
              >
                <span className="text-white/40 group-hover:text-white/70 transition-colors">{field.icon}</span>
                <span className="text-white/60 text-xs text-center tracking-wide leading-tight group-hover:text-white/80 transition-colors">{field.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-[2rem] bg-[#0A0D12] border border-white/[0.05] p-10 flex flex-col h-full overflow-hidden group transition-all duration-300 ${service.colSpan}`}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            () => `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(255,255,255,0.06), transparent 40%)`
          )
        }}
      />
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl ${service.color} to-transparent opacity-10 blur-[80px] rounded-full pointer-events-none`} />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <p className={`text-sm font-bold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color} to-white/50`}>
          {service.subtitle}
        </p>
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading tracking-tight">{service.title}</h3>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">{service.description}</p>
      </div>

      <div className="relative z-10 mt-auto pt-8 border-t border-white/[0.05]" style={{ transform: "translateZ(30px)" }}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feat, i) => (
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
