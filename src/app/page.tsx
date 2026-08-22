import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofStrip } from "@/components/ui/SocialProofStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { GlobalFooter } from "@/components/layout/GlobalFooter";

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

        <GlobalFooter />
      </main>
    </div>
  );
}
