import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#020b14]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex flex-col">
            <span
              className="text-[17px] font-bold tracking-[0.28em] uppercase"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff 0%, #e2f8ff 50%, #00d4f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aura Aquatics
            </span>
            <span className="text-[8px] tracking-[0.45em] uppercase text-[#c8a96e]/80 font-mono">
              The Liquid Luxury Experience
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "The Transformation", href: "#transformation" },
              { label: "Bespoke Services", href: "#services" },
              { label: "The Experience", href: "#curation" },
              { label: "Memberships", href: "#membership" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00d4f0] to-[#c8a96e] group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="tel:1300287278"
            className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00d4f0]/25 bg-[#00d4f0]/[0.06] backdrop-blur-md transition-all duration-300 hover:border-[#00d4f0]/50 hover:bg-[#00d4f0]/10 hover:shadow-[0_0_20px_rgba(0,212,240,0.15)] text-[#00d4f0]"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase group-hover:text-white transition-colors">
              1300 AURA POOL
            </span>
          </a>
        </div>
      </motion.nav>

      {/* ── STICKY MOBILE CONVERSION BAR ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#020b14]/90 backdrop-blur-xl border-t border-white/[0.08] px-5 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#c8a96e]/80 font-mono">
            Direct Concierge
          </span>
          <span className="text-xs font-bold tracking-wider text-white">
            1300 AURA POOL
          </span>
        </div>
        <a
          href="tel:1300287278"
          className="px-5 py-2.5 rounded-lg text-[10px] font-bold tracking-[0.18em] uppercase text-[#020b14]"
          style={{ background: "linear-gradient(135deg, #0ba3d4, #00d4f0)" }}
        >
          Call Now
        </a>
      </div>
    </>
  );
}
