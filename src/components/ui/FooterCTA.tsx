"use client";
import React, { useState } from "react";

export function FooterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center w-full max-w-lg mx-auto group">
      <div className="absolute left-6 text-white/30 group-focus-within:text-white/60 transition-colors pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      <input
        type="email"
        required
        placeholder="Enter email to discuss project..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status !== "idle"}
        className="w-full h-[72px] bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white placeholder:text-white/30 rounded-full pl-14 pr-[150px] outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all disabled:opacity-50 shadow-inner text-base shadow-[0_0_15px_rgba(255,255,255,0.02)_inset]"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="absolute right-2.5 top-2.5 bottom-2.5 px-6 bg-white text-black font-bold rounded-full hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center min-w-[130px] disabled:opacity-80 text-[15px] tracking-wide"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {status === "idle" && "Let's Talk"}
          {status === "submitting" && <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
          {status === "success" && "Sent ✓"}
        </span>
      </button>
    </form>
  );
}
