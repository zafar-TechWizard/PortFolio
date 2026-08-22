import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { JourneyPageContent } from "@/components/sections/JourneyPageContent";

export const metadata: Metadata = {
  title: "The Journey | Zafar — AI Solutions Architect",
  description:
    "From first lines of code to shipping production AI systems — the story of how Zafar became an AI Solutions Architect & Product Engineer.",
};

export default function JourneyPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-secondary/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <ScrollProgressBar />
      <DynamicHeader />

      {/* <main>
        <JourneyPageContent />
      </main> */}
    </div>
  );
}
