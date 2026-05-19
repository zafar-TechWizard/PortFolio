import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { AboutPageContent } from "@/components/sections/AboutPageContent";

export const metadata: Metadata = {
  title: "About Zafar | AI Solutions Architect & Product Engineer",
  description:
    "The full story — experience, engineering philosophy, education, and the thinking behind the systems Zafar builds.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <ScrollProgressBar />
      <DynamicHeader />

      <main>
        <AboutPageContent />
      </main>
    </div>
  );
}
