"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover";

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Tier 1: Crisp inner dot (Instant)
  const dotX = useSpring(mouseX, { stiffness: 1500, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1500, damping: 40, mass: 0.1 });

  // Tier 2: Primary Ring (Fast lag)
  const ring1X = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.2 });
  const ring1Y = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.2 });

  // Tier 3: Secondary Ring (Medium lag)
  const ring2X = useSpring(mouseX, { stiffness: 250, damping: 24, mass: 0.3 });
  const ring2Y = useSpring(mouseY, { stiffness: 250, damping: 24, mass: 0.3 });

  // Tier 4: Ambient Glow (Slow lag / Tail)
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isInteractive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button") ||
        t.getAttribute("role") === "button" ||
        t.classList.contains("interactive");
        
      setState(isInteractive ? "hover" : "default");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  const isHover = state === "hover";

  return (
    <>
      {/* Tier 4: Ambient Glow Tail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 120 : 60,
          height: isHover ? 120 : 60,
          opacity: visible ? (isHover ? 0.15 : 0.05) : 0,
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(8px)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />

      {/* Tier 3: Secondary Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border"
        style={{
          x: ring2X,
          y: ring2Y,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 56 : 32,
          height: isHover ? 56 : 32,
          opacity: visible ? (isHover ? 0.6 : 0.15) : 0,
          borderColor: isHover ? "rgba(138,99,210,0.8)" : "rgba(255,255,255,0.2)",
          backgroundColor: isHover ? "rgba(138,99,210,0.05)" : "transparent",
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Tier 2: Primary Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ring1X,
          y: ring1Y,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 44 : 32,
          height: isHover ? 44 : 32,
          opacity: visible ? (isHover ? 0.8 : 0.4) : 0,
          borderColor: isHover ? "rgba(255,107,74,0.9)" : "rgba(255,255,255,0.4)",
          backgroundColor: isHover ? "rgba(255,107,74,0.1)" : "transparent",
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.15s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Tier 1: Crisp Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 0 : 5,
          height: isHover ? 0 : 5,
          opacity: visible ? (isHover ? 0 : 1) : 0,
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.1s ease",
        }}
      />
    </>
  );
}

