import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { SkillsPageContent } from "@/components/sections/SkillsPageContent";

export const metadata: Metadata = {
  title: "Skills | Zafar — AI Solutions Architect",
  description:
    "The full technical stack — AI & ML, backend, data, frontend, and automation. Every tool, framework, and capability.",
};

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <ScrollProgressBar />
      <DynamicHeader />
      <main>
        <SkillsPageContent />
      </main>
    </div>
  );
}
