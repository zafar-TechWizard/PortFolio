"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.2 1", "0.8 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden border-t border-white/[0.05]"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ opacity, y }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          {/* Left: The Poetry Card */}
          <div className="w-full lg:w-5/12 relative group">
            {/* Hover Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative p-10 md:p-12 rounded-[2rem] bg-[#0A0D12]/80 backdrop-blur-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-center min-h-[450px]">
              {/* Subtle noise texture */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

              <div className="relative z-10 flex flex-col gap-8 text-center md:text-left">
                {/* Urdu Script */}
                <h3 className="text-3xl md:text-4xl leading-relaxed text-white font-serif" dir="rtl">
                  اچھا ہے دل کے پاس رہے پاسبانِ عقل<br/>
                  لیکن کبھی کبھی اسے تنہا بھی چھوڑ دے
                </h3>

                <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0" />

                {/* Roman Transliteration */}
                <div>
                  <p className="text-white/60 italic text-lg tracking-wide mb-2 font-light">
                    &ldquo;Acha hai dil ke paas rahe pasban-e-aql,
                    <br/>Lekin kabhi kabhi isay tanha bhi chhor de.&rdquo;
                  </p>

                  {/* English Translation */}
                  <p className="text-white/40 text-sm tracking-wide mt-6 border-l-2 border-white/10 pl-4 text-left">
                    &ldquo;It is good to let Reason guard the Heart,<br/>
                    But sometimes, it must be left to wander alone.&rdquo;
                    <br/><span className="mt-2 block font-bold text-white/30 uppercase tracking-[0.2em] text-[10px]">— Allama Iqbal</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Manifesto / Philosophy */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-white w-fit backdrop-blur-xl mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              The Engineer-Poet
            </div>

            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tighter text-white leading-[1.05] font-heading">
              Code gives it structure.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Poetry gives it a soul.
              </span>
            </h2>

            <div className="flex flex-col gap-6 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-4">
              <p>
                In an industry obsessed with raw compute, algorithmic efficiency, and sterile automation, we often forget <em className="text-white/90">who</em> we are building for.
              </p>
              <p>
                I write Python, architect vector databases, and design complex Agentic workflows to solve hard logistical problems. But I believe that a system without human empathy is just a cold machine.
              </p>
              <p>
                To me, Software Architecture is like writing a Ghazal. It requires strict adherence to rules, syntax, and boundaries (the <em className="text-white/80">Beher</em> or meter). Yet, within those rigid mathematical constraints, you must express something deeply meaningful.
              </p>
              <p className="text-white/90 font-medium pt-4 border-t border-white/[0.05]">
                I don&apos;t just write code. I build intelligent, adaptive ecosystems that understand context and elevate the human experience.
              </p>
            </div>

            {/* Signature Element */}
            <div className="mt-8">
              <span className="font-heading text-4xl text-white/20 italic select-none">Zafar.</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
