"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "Custom AI Systems",
    subtitle: "RAG & AI Agents",
    description: "I help businesses build private, secure AI systems capable of understanding internal documents, databases, and knowledge systems.",
    features: ["Internal AI Chat", "Knowledge Assistants", "Multi-Document Retrieval", "AI Dashboards"],
    colSpan: "lg:col-span-2",
    color: "from-primary"
  },
  {
    title: "Intelligent Workflow Automation",
    subtitle: "Eliminate Repetitive Work",
    description: "I automate workflows by connecting APIs, AI models, scrapers, databases, and backend systems.",
    features: ["WhatsApp Automation", "Data Pipelines", "Event-Driven Workflows"],
    colSpan: "lg:col-span-1",
    color: "from-secondary"
  },
  {
    title: "End-to-End SaaS MVP",
    subtitle: "Idea to Product",
    description: "I transform ideas into fully working products, handling scalable database architectures, frontend UI, and AI integration.",
    features: ["Product Architecture", "Backend APIs", "Authentication Systems", "Scalable Infrastructure"],
    colSpan: "lg:col-span-3",
    color: "from-blue-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-secondary w-fit backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Core Offerings
          </div>
          <h2 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
            I stop pitching programming languages.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">I solve business bottlenecks.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <BentoCard key={idx} service={service} />
          ))}
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
