import { FooterCTA } from "@/components/ui/FooterCTA";

export function GlobalFooter() {
  return (
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
              className="group relative flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300 text-sm font-bold tracking-widest uppercase"
            >
              <svg className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors duration-300 overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <style>{`
                  .cat-head { transform: translateY(10px); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                  .group:hover .cat-head { transform: translateY(0px); }
                  .cat-eyes { transform: scaleY(1); transition: transform 0.2s; transform-origin: center; }
                  .group:hover .cat-eyes { animation: blink 3s infinite 0.5s; }
                  @keyframes blink {
                    0%, 90%, 100% { transform: scaleY(1); }
                    95% { transform: scaleY(0.1); }
                  }
                `}</style>
                
                <defs>
                  <clipPath id="laptop-clip">
                    <rect x="0" y="0" width="24" height="15" />
                  </clipPath>
                </defs>

                {/* Hidden Cat that pops up on hover */}
                <g clipPath="url(#laptop-clip)">
                  <g className="cat-head">
                    {/* Ears */}
                    <path d="M6 10L4 3l5 4" />
                    <path d="M18 10l2-7-5 4" />
                    {/* Head */}
                    <path d="M6 10c0-5 3-6 6-6s6 1 6 6v5H6v-5z" />
                    {/* Eyes */}
                    <g className="cat-eyes">
                      <circle cx="9.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="14.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
                    </g>
                    {/* Whiskers */}
                    <path d="M2 10.5l2 1" />
                    <path d="M2 13.5l2-1" />
                    <path d="M22 10.5l-2 1" />
                    <path d="M22 13.5l-2-1" />
                    {/* Nose */}
                    <path d="M12 13v1" />
                  </g>
                </g>
                
                {/* Laptop Base */}
                <path d="M4 15L2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1l-2-5z" fill="#050505" />
                <path d="M2 15h20" strokeWidth="2" />
              </svg>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300 pl-9 pt-1 pointer-events-none">GITHUB</span>
              <span className="group-hover:opacity-0 transition-opacity duration-300 pt-1 pointer-events-none">GITHUB</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
