import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | Zafar — AI Solutions Architect",
  description:
    "Production AI systems, SaaS platforms, and automation pipelines — a full breakdown of what was built, how, and why.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <ScrollProgressBar />
      <DynamicHeader />
      <main>
        <ProjectsPageContent />
      </main>
    </div>
  );
}
