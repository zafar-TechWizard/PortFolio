import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <DynamicHeader />
      
      <main className="flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        
        <footer id="contact" className="relative w-full py-32 border-t border-white/[0.05] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 blur-[120px] rounded-[100%] pointer-events-none" />
          
          <p className="text-white/50 tracking-[0.2em] uppercase text-sm mb-6 font-semibold relative z-10">Start a Project</p>
          
          <h2 className="text-[10vw] md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-[0.9] text-center mb-16 font-heading tracking-tighter relative z-10">
            LET&apos;S BUILD THE <br className="hidden md:block"/> FUTURE.
          </h2>

          <a 
            href="mailto:contact@thetrycompany.com" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl overflow-hidden transition-all hover:scale-105 hover:border-white/[0.2] z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              contact@thetrycompany.com
              <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>

          <div className="mt-32 pt-8 border-t border-white/[0.05] w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Zafar. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/30 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              <a href="https://github.com/zafar" className="text-white/30 hover:text-white transition-colors text-sm font-medium">GitHub</a>
              <a href="#" className="text-white/30 hover:text-white transition-colors text-sm font-medium">Twitter</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
