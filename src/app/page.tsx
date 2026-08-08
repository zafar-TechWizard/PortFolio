import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofStrip } from "@/components/ui/SocialProofStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FooterCTA } from "@/components/ui/FooterCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <ScrollProgressBar />
      <DynamicHeader />

      <main className="flex flex-col items-center">
        {/* ── HERO SECTION (The Converter) ── */}
        <div className="w-full">
          <HeroSection />
        </div>

        <SocialProofStrip />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <SkillsSection />

        <footer id="contact" className="relative w-full pt-32 flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
          
          {/* Subtle Background Glow for the CTA area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 to-secondary/10 blur-[150px] rounded-[100%] pointer-events-none opacity-40" />

          <p className="text-white/40 tracking-[0.25em] uppercase text-xs mb-6 font-bold relative z-10">Start a Project</p>

          <h2 className="text-[10vw] md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-[0.9] text-center mb-16 font-heading tracking-tighter relative z-10">
            LET&apos;S BUILD THE <br className="hidden md:block"/> FUTURE.
          </h2>

          <div className="w-full relative z-10 px-4 pb-40">
            <FooterCTA />
          </div>

          {/* Premium Luxury Footer Bar */}
          <div className="w-full relative z-10 mt-auto border-t border-white/[0.04]">
            {/* Elegant top gradient highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10">
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-white/50 text-sm font-semibold tracking-wide">
                  © {new Date().getFullYear()} Zafar
                </p>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
                  Engineering & Design
                </p>
              </div>

              <div className="flex gap-8 mt-6 md:mt-0">
                <a 
                  href="https://github.com/zafar-TechWizard" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300 text-sm font-bold tracking-widest uppercase"
                >
                  <svg className="w-4 h-4 transform group-hover:-rotate-12 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 pl-6">GITHUB</span>
                  <span className="group-hover:opacity-0 transition-opacity duration-300">GITHUB</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
