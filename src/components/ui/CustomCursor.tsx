"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover";

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Outer ring — slight lag, feels premium
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.3 });

  // Inner dot — near-instant
  const dotX = useSpring(mouseX, { stiffness: 1500, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1500, damping: 50 });

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
        t.getAttribute("role") === "button";
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
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 44 : 32,
          height: isHover ? 44 : 32,
          opacity: visible ? (isHover ? 0.7 : 0.45) : 0,
          borderColor: isHover ? "rgba(255,107,74,0.85)" : "rgba(255,255,255,0.5)",
          backgroundColor: isHover ? "rgba(255,107,74,0.06)" : "transparent",
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.15s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Inner dot — hidden on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHover ? 0 : 4,
          height: isHover ? 0 : 4,
          opacity: visible ? 1 : 0,
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.15s ease",
        }}
      />
    </>
  );
}
