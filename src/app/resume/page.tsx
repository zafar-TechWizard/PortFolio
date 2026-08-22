import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";

export const metadata: Metadata = {
  title: "Resume | Zafar",
  description: "View the complete professional resume of Md Zafar.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground flex flex-col overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <DynamicHeader />

      <main className="flex-1 flex flex-col items-center justify-center py-40 relative z-10 px-6">
        <div className="text-center flex flex-col items-center gap-6 max-w-2xl">
          <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.1] flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tighter">
            Resume will be updated soon.
          </h1>
          
          <p className="text-white/50 text-base leading-relaxed max-w-lg">
            I am currently structuring this page to reflect my complete engineering journey, detailed impact, and core skills. A highly detailed, interactive web resume with a downloadable PDF option is coming shortly.
          </p>

          <a
            href="/"
            className="mt-8 group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/[0.03] border border-white/[0.1] text-white/70 hover:text-white text-sm font-semibold hover:bg-white/[0.06] hover:border-white/[0.2] transition-all"
          >
            ← Back to Portfolio
          </a>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
