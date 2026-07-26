"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/journey", label: "Journey" },
];

const LOGO_W = 160;
const NAV_W = 490;
const CONTACT_W = 150;
const PADDING = 24;
// Small overlap so gooey filter creates a liquid neck at the join.
// Blobs stop HERE — touching the nav sides, not going inside.
const OVERLAP = 12;

export function DynamicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const [logoMax, setLogoMax] = useState(180);
  const [contactMax, setContactMax] = useState(-180);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const calc = () => {
      const innerW = el.offsetWidth - 2 * PADDING;
      // Logo right edge + logoMax = nav left edge + OVERLAP
      //   => LOGO_W + logoMax = innerW/2 - NAV_W/2 + OVERLAP
      setLogoMax(innerW / 2 - NAV_W / 2 + OVERLAP - LOGO_W);
      // Contact left edge (= innerW - CONTACT_W) + contactMax = nav right edge - OVERLAP
      //   => contactMax = innerW/2 + NAV_W/2 - OVERLAP - (innerW - CONTACT_W)
      //                 = -innerW/2 + NAV_W/2 - OVERLAP + CONTACT_W
      setContactMax(-(innerW / 2 - NAV_W / 2 + OVERLAP - CONTACT_W));
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const rawProgress = useTransform(scrollY, [0, 460], [0, 1], { clamp: true });
  const progress = useSpring(rawProgress, { stiffness: 120, damping: 18, mass: 0.9 });

  // Blobs translate until their outer edges rest against the nav sides.
  // OVERLAP=12 → gooey filter fuses the touching edges into one liquid shape.
  // No scale-down — blobs stay full size and ATTACH to the nav, not disappear.
  const logoX = useTransform(progress, [0, 1], [0, logoMax]);
  const contactX = useTransform(progress, [0, 1], [0, contactMax]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ─────────────────────────────────────────
          SVG GOOEY FILTER
          feGaussianBlur blurs alpha → feColorMatrix
          thresholds it to a sharp edge → creates the
          liquid neck/merge at overlap zone.
          feDropShadow adds depth after merge.
      ───────────────────────────────────────── */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: -1 }}
      >
        <defs>
          <filter id="gooey-hdr" x="-60%" y="-300%" width="220%" height="700%">
            {/* Step 1: blur to create soft alpha gradient between blobs */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur" />
            {/* Step 2: threshold — pixels with alpha > 11/26≈0.42 snap to opaque */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11"
              result="gooeyMask"
            />
            {/* Step 3: clip original colors to the gooey mask shape */}
            <feComposite in="SourceGraphic" in2="gooeyMask" operator="atop" result="clipped" />
            {/* Step 4: drop shadow for depth */}
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="16"
              floodColor="rgba(0,0,0,0.7)"
              floodOpacity="1"
              in="clipped"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="fixed top-0 left-0 w-full z-50 pointer-events-none"
        style={{ paddingTop: 14 }}
      >
        <div
          ref={containerRef}
          className="relative w-full"
          style={{ padding: `0 ${PADDING}px` }}
        >

          {/* ═══════════════════════════════════════════
              LAYER 1 — GOOEY WATER DROPS
              These ARE the visible header shapes.
              Color must contrast with background.
              Background = #0B0E14 ≈ rgb(11,14,20)
              Blob = rgb(42,52,80) — clearly visible
              navy/indigo toned dark pill.

              The SVG gooey filter creates the liquid
              merge neck when blobs overlap.
              sideScale (1→0) makes sides absorb INTO
              the center nav, not expand it.
          ═══════════════════════════════════════════ */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ filter: "url(#gooey-hdr)" }}
          >
            <div className="relative" style={{ height: 56 }}>

              {/* CENTER NAV DROP — stationary, never changes size */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: NAV_W,
                  height: 56,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: 9999,
                  background:
                    "linear-gradient(170deg, rgba(58,68,102,0.97) 0%, rgba(34,42,68,0.97) 100%)",
                }}
              />

              {/* LOGO DROP — slides right until it touches nav left side */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: PADDING,
                  width: LOGO_W,
                  height: 56,
                  borderRadius: 9999,
                  x: logoX,
                  background:
                    "linear-gradient(170deg, rgba(58,68,102,0.97) 0%, rgba(34,42,68,0.97) 100%)",
                }}
              />

              {/* CONTACT DROP — slides left until it touches nav right side */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  right: PADDING,
                  width: CONTACT_W,
                  height: 56,
                  borderRadius: 9999,
                  x: contactX,
                  background:
                    "linear-gradient(170deg, rgba(58,68,102,0.97) 0%, rgba(34,42,68,0.97) 100%)",
                }}
              />

            </div>
          </div>

          {/* ═══════════════════════════════════════════
              LAYER 2 — GLASS SHEEN OVERLAY
              A thin highlight + backdrop-blur ONLY for
              the center nav pill (always present).
              Side pills get a subtle highlight that
              fades with sideOpacity.
              NOT filtered by gooey — keeps it crisp.
          ═══════════════════════════════════════════ */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <div className="relative" style={{ height: 56 }}>

              {/* Logo sheen */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: PADDING,
                  width: LOGO_W,
                  height: 56,
                  borderRadius: 9999,
                  x: logoX,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              />

              {/* Center nav glass — always */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: NAV_W,
                  height: 56,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: 9999,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.26)",
                }}
              />

              {/* Contact sheen */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  right: PADDING,
                  width: CONTACT_W,
                  height: 56,
                  borderRadius: 9999,
                  x: contactX,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              />

            </div>
          </div>

          {/* ═══════════════════════════════════════════
              LAYER 3 — CONTENT
              Logo + Contact move (same x as blobs)
              and fade. Nav is always visible.
              No scale on content — it fades BEFORE
              blob squish starts (timing gap ensures
              no visible distortion of text).
          ═══════════════════════════════════════════ */}
          <div
            className="relative flex items-center justify-between"
            style={{ height: 56, zIndex: 10 }}
          >

            {/* LOGO */}
            <motion.div
              className="pointer-events-auto h-full flex items-center shrink-0"
              style={{ width: LOGO_W, x: logoX }}
            >
              <Link
                href="/"
                className="flex items-center gap-2.5 px-5 w-full h-full justify-center group"
              >
                <Image
                  src="/img/Logo.png"
                  alt="Zafar"
                  width={28}
                  height={28}
                  className="object-contain group-hover:scale-110 transition-transform duration-500 shrink-0"
                  priority
                />
                <span className="text-white font-bold tracking-[0.18em] text-[13px] whitespace-nowrap">
                  ZAFAR
                </span>
              </Link>
            </motion.div>

            {/* NAV — desktop */}
            <nav
              className="hidden lg:flex pointer-events-auto h-full items-center justify-center shrink-0"
              style={{ width: NAV_W }}
            >
              <div className="flex items-center justify-center gap-7 w-full h-full px-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      isActive(link.href)
                        ? "text-white drop-shadow-[0_0_10px_rgba(255,107,74,0.65)]"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute -bottom-[5px] left-0 right-0 h-px rounded-full"
                        style={{ background: "linear-gradient(90deg,#FF6B4A,#8A63D2)" }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* HAMBURGER — mobile */}
            <div
              className="lg:hidden pointer-events-auto h-full flex items-center justify-center"
              style={{ width: 56 }}
            >
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
                className="w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              >
                <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-5"}`} />
                <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </div>

            {/* CONTACT — desktop */}
            <motion.div
              className="hidden lg:flex pointer-events-auto h-full items-center justify-center shrink-0"
              style={{ width: CONTACT_W, x: contactX }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-full text-[13px] font-bold text-white tracking-wide hover:drop-shadow-[0_0_10px_rgba(138,99,210,0.9)] transition-all"
              >
                Contact Me
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          MOBILE FULLSCREEN OVERLAY
      ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#050505]/95 backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: idx * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between w-full py-5 border-b border-white/[0.06] transition-colors ${
                      isActive(link.href) ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-4xl font-bold font-heading tracking-tighter">
                      {link.label}
                    </span>
                    {isActive(link.href) && (
                      <span className="text-primary text-2xl">↗</span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="px-8 pb-12 flex items-center justify-between"
            >
              <div className="flex gap-6">
                <a href="#" className="text-white/30 hover:text-white text-sm font-medium transition-colors">
                  LinkedIn
                </a>
                <a
                  href="https://github.com/zafar-TechWizard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white text-sm font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-full text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#FF6B4A,#8A63D2)" }}
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
