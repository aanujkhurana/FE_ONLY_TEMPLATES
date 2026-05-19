import { useState, useEffect, useRef } from "react";

const PHONE = "07 3180 4455";
const PHONE_HREF = "tel:0731804455";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimWater() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0d3b6e 0%, #071b38 50%, #020d1f 100%)"
      }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="40" /></filter>
        </defs>
        <ellipse cx="720" cy="450" rx="700" ry="300" fill="url(#g1)" filter="url(#blur1)" />
        <ellipse cx="200" cy="200" rx="350" ry="200" fill="#0369a1" opacity="0.3" filter="url(#blur1)" />
        <ellipse cx="1300" cy="700" rx="400" ry="250" fill="#0e7490" opacity="0.25" filter="url(#blur1)" />
      </svg>
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          borderRadius: "50%",
          border: `1px solid rgba(56,189,248,${0.06 + i * 0.02})`,
          animation: `ripple ${3 + i * 0.8}s ease-out infinite`,
          animationDelay: `${i * 0.6}s`,
          left: "50%", top: "55%",
          transform: "translate(-50%,-50%)",
          width: `${200 + i * 120}px`,
          height: `${200 + i * 120}px`,
        }} />
      ))}
      <style>{`
        @keyframes ripple {
          0% { transform: translate(-50%,-50%) scale(0.8); opacity:0.6; }
          100% { transform: translate(-50%,-50%) scale(1.4); opacity:0; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatX {
          0%,100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(8px) rotate(1deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(32px); }
          to { opacity:1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; } to { opacity:1; }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(14,165,233,0); }
        }
        @keyframes waveAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideDown {
          from { opacity:0; transform: translateY(-8px); }
          to { opacity:1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .glass {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .glass-light {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.6);
        }
        .glow-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .glow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(14,165,233,0.5);
        }
        .glow-btn::after {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 2.4s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s;
        }
        .card-hover:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 32px 80px rgba(7,27,56,0.18);
        }
        .service-card:hover .svc-icon {
          transform: scale(1.15) rotate(-4deg);
        }
        .svc-icon { transition: transform 0.3s cubic-bezier(.22,.68,0,1.2); }
        .suburb-tag:hover {
          background: rgba(14,165,233,0.2);
          border-color: rgba(14,165,233,0.5);
          transform: translateY(-2px);
        }
        .suburb-tag { transition: all 0.2s; }
        .nav-link:hover { color: #38bdf8; }
        .nav-link { transition: color 0.2s; }
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
        }
        .plan-card:hover {
          border-color: rgba(14,165,233,0.4) !important;
        }
        .plan-card { transition: border-color 0.3s, transform 0.3s; }
        .plan-card:hover { transform: translateY(-4px); }
        .testi-card:hover {
          border-color: rgba(56,189,248,0.3) !important;
        }
        .testi-card { transition: border-color 0.3s, transform 0.3s; }
        .testi-card:hover { transform: translateY(-4px); }
      `}</style>
    </div>
  );
}

function WaveDecor({ flip = false, dark = false }) {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
      <svg viewBox="0 0 1440 80" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={dark ? "#020d1f" : "#f0f9ff"} />
      </svg>
    </div>
  );
}

function Stars({ n = 5 }) {
  return (
    <span style={{ display: "flex", gap: 2 }}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Services", "About", "Areas", "Plans", "FAQ"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5%",
      transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s",
      background: scrolled ? "rgba(2,13,31,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
      boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#0ea5e9,#0369a1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(14,165,233,0.4)"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2C6 8 3 12 3 16a9 9 0 0018 0c0-4-3-8-9-14z" />
            </svg>
          </div>
          <span style={{ color: "#fff", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" }}>
            Aqua<span style={{ color: "#38bdf8" }}>Lux</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, textDecoration: "none", letterSpacing: "0.01em" }}>
              {l}
            </a>
          ))}
          <a href={PHONE_HREF} className="glow-btn" style={{
            background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
            color: "#fff", padding: "9px 20px", borderRadius: 100,
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            boxShadow: "0 4px 20px rgba(14,165,233,0.35)"
          }}>
            Call Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer",
          color: "#fff", padding: 8
        }} className="mobile-menu-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="glass" style={{
          padding: "16px 24px 24px", animation: "slideDown 0.2s ease",
          borderTop: "1px solid rgba(255,255,255,0.08)"
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.85)", padding: "12px 0", fontSize: 16, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {l}
            </a>
          ))}
          <a href={PHONE_HREF} style={{
            display: "block", marginTop: 16,
            background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
            color: "#fff", padding: "12px 20px", borderRadius: 12,
            fontSize: 15, fontWeight: 600, textDecoration: "none", textAlign: "center"
          }}>
            📞 {PHONE}
          </a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <AnimWater />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "120px 5% 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="glass" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px",
              borderRadius: 100, marginBottom: 28, animation: "fadeUp 0.6s ease both"
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500 }}>Available for same-day service · Brisbane</span>
            </div>
            <h1 style={{
              color: "#fff", fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1.08, fontWeight: 700,
              marginBottom: 24, animation: "fadeUp 0.7s ease 0.1s both",
              letterSpacing: "-1.5px"
            }}>
              Your Pool.<br />
              <span style={{
                background: "linear-gradient(90deg,#38bdf8,#7dd3fc,#38bdf8)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite"
              }}>Crystal Clear.</span><br />
              Resort Ready.
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.65,
              maxWidth: 480, marginBottom: 40, animation: "fadeUp 0.7s ease 0.2s both",
              fontWeight: 400
            }}>
              Luxury pool cleaning and maintenance for Brisbane homeowners who expect perfection. Effortless. Immaculate. Every time.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48, animation: "fadeUp 0.7s ease 0.3s both" }}>
              <a href={PHONE_HREF} className="glow-btn" style={{
                background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                color: "#fff", padding: "15px 32px", borderRadius: 14,
                fontSize: 16, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 32px rgba(14,165,233,0.5)",
                letterSpacing: "0.01em"
              }}>
                📞 Call {PHONE}
              </a>
              <a href="#services" style={{
                color: "#fff", padding: "15px 28px", borderRadius: 14,
                fontSize: 16, fontWeight: 600, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s"
              }}>
                View Services →
              </a>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.4s both" }}>
              {[
                { n: "500+", l: "Pools Cleaned" },
                { n: "4.9★", l: "Google Rating" },
                { n: "8yr", l: "Established" },
              ].map(b => (
                <div key={b.n} style={{ textAlign: "center" }}>
                  <div style={{ color: "#38bdf8", fontSize: 22, fontWeight: 800, fontFamily: "Georgia,serif" }}>{b.n}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 500, marginTop: 2 }}>{b.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", animation: "floatY 4s ease-in-out infinite" }}>
            <div className="glass" style={{
              borderRadius: 28, padding: 4,
              boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 60px rgba(14,165,233,0.15)"
            }}>
              <div style={{
                borderRadius: 24, overflow: "hidden", aspectRatio: "4/3",
                background: "linear-gradient(135deg, #0c4a6e 0%, #075985 40%, #0369a1 70%, #1d4ed8 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative"
              }}>
                <PoolIllustration />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(2,13,31,0.4) 0%, transparent 60%)"
                }} />
              </div>
            </div>
            <div className="glass" style={{
              position: "absolute", bottom: -20, left: -24, borderRadius: 16,
              padding: "14px 18px", animation: "floatX 3.5s ease-in-out infinite",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 28 }}>✨</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>Just Completed</div>
                  <div style={{ color: "#38bdf8", fontSize: 12 }}>Hamilton, QLD</div>
                </div>
              </div>
            </div>
            <div className="glass" style={{
              position: "absolute", top: 20, right: -20, borderRadius: 16,
              padding: "14px 18px", animation: "floatY 3s ease-in-out 0.5s infinite",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
            }}>
              <Stars />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 12, marginTop: 4 }}>Rated 4.9 / 5.0</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>from 128 reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 1, animation: "floatY 2s ease-in-out infinite" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
      <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function PoolIllustration() {
  return (
    <svg viewBox="0 0 600 400" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="water" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#0284c7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#075985" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
        <filter id="f1"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="f2"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>
      <rect width="600" height="400" fill="#0c4a6e" />
      <ellipse cx="300" cy="210" rx="240" ry="140" fill="url(#water)" />
      <ellipse cx="300" cy="210" rx="240" ry="140" fill="url(#glow2)" filter="url(#f1)" />
      {[0,1,2,3,4].map(i => (
        <ellipse key={i} cx={150 + i * 60} cy={170 + (i % 2) * 20} rx={30 + i * 4} ry={8} fill="rgba(255,255,255,0.08)" />
      ))}
      <rect x="40" y="65" width="520" height="18" rx="9" fill="#e2e8f0" opacity="0.8" />
      <rect x="44" y="69" width="80" height="10" rx="5" fill="#94a3b8" />
      <rect x="134" y="69" width="80" height="10" rx="5" fill="#94a3b8" />
      <rect x="224" y="69" width="80" height="10" rx="5" fill="#64748b" />
      <rect x="44" y="83" width="440" height="130" rx="4" fill="#f0f9ff" />
      <rect x="44" y="83" width="220" height="130" rx="4" fill="#e0f2fe" />
      <rect x="54" y="95" width="200" height="105" rx="3" fill="#bae6fd" />
      <rect x="264" y="95" width="210" height="105" rx="3" fill="#cffafe" />
      <text x="154" y="165" textAnchor="middle" fill="#0369a1" fontSize="22" fontWeight="bold">BEFORE</text>
      <text x="369" y="165" textAnchor="middle" fill="#0e7490" fontSize="22" fontWeight="bold">AFTER</text>
      <ellipse cx="300" cy="260" rx="180" ry="60" fill="rgba(56,189,248,0.12)" filter="url(#f2)" />
      <circle cx="140" cy="280" r="18" fill="rgba(255,255,255,0.08)" />
      <circle cx="460" cy="290" r="24" fill="rgba(255,255,255,0.06)" />
      <circle cx="300" cy="340" r="14" fill="rgba(255,255,255,0.07)" />
    </svg>
  );
}

function TransformSection() {
  const [ref, inView] = useInView();
  const [hover, setHover] = useState(false);
  return (
    <section ref={ref} style={{ padding: "100px 5%", background: "#f0f9ff", position: "relative" }}>
      <WaveDecor dark={false} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <div style={{ color: "#0284c7", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>The AquaLux Difference</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#0c4a6e", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16 }}>Dirty to Crystal Clear</h2>
          <p style={{ color: "#475569", fontSize: 18, maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Watch your pool transform from neglected to resort-quality with a single visit from our expert team.
          </p>
        </div>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{
            position: "relative", borderRadius: 28, overflow: "hidden",
            aspectRatio: "16/7", cursor: "pointer",
            boxShadow: hover ? "0 40px 100px rgba(3,105,161,0.25)" : "0 20px 60px rgba(3,105,161,0.12)",
            transition: "box-shadow 0.4s",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)",
            transition2: "all 0.9s ease 0.2s"
          }}>
          <div style={{
            position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr"
          }}>
            <div style={{
              background: "linear-gradient(135deg,#78350f 0%,#92400e 30%,#b45309 60%,#6b4b2a 100%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              padding: 40, position: "relative", overflow: "hidden"
            }}>
              <GreenPoolSVG />
              <div style={{
                position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)",
                color: "#fff", padding: "8px 20px", borderRadius: 100,
                fontSize: 13, fontWeight: 700, whiteSpace: "nowrap"
              }}>
                😬 Before
              </div>
            </div>
            <div style={{
              background: "linear-gradient(135deg,#0c4a6e 0%,#075985 40%,#0369a1 70%,#0ea5e9 100%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              padding: 40, position: "relative", overflow: "hidden"
            }}>
              <ClearPoolSVG />
              <div style={{
                position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                background: "rgba(14,165,233,0.85)", backdropFilter: "blur(10px)",
                color: "#fff", padding: "8px 20px", borderRadius: 100,
                fontSize: 13, fontWeight: 700, whiteSpace: "nowrap"
              }}>
                ✨ After AquaLux
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 48, height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 2
          }}>
            <div style={{
              background: "#fff", borderRadius: 100, width: 44, height: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              transform: hover ? "scale(1.15)" : "scale(1)",
              transition: "transform 0.3s"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
                <path d="M8 12h8M15 8l4 4-4 4" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24, marginTop: 48,
          opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.3s"
        }}>
          {[
            { icon: "🌿", title: "Green Pool Recovery", desc: "Chlorine shock treatment + algae removal in one visit" },
            { icon: "⚗️", title: "Perfect Chemistry", desc: "pH, alkalinity, and sanitiser precisely balanced" },
            { icon: "🔄", title: "Filter Service", desc: "Deep clean and inspection for peak filtration" },
            { icon: "🏆", title: "100% Satisfaction", desc: "We return free of charge if you're not delighted" },
          ].map(f => (
            <div key={f.title} className="card-hover" style={{
              background: "#fff", borderRadius: 20, padding: "28px 24px",
              boxShadow: "0 4px 24px rgba(3,105,161,0.07)",
              border: "1px solid rgba(186,230,253,0.6)"
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ color: "#0c4a6e", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{f.title}</div>
              <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GreenPoolSVG() {
  return (
    <svg viewBox="0 0 200 140" style={{ width: 200, height: 140, opacity: 0.9 }}>
      <ellipse cx="100" cy="70" rx="85" ry="55" fill="#4d7c0f" />
      <ellipse cx="100" cy="70" rx="85" ry="55" fill="#65a30d" opacity="0.5" />
      {[...Array(8)].map((_, i) => (
        <ellipse key={i} cx={30 + i * 20} cy={50 + (i % 3) * 18} rx="12" ry="8" fill="#3f6212" opacity="0.6" />
      ))}
      <ellipse cx="100" cy="70" rx="60" ry="35" fill="#86efac" opacity="0.15" />
    </svg>
  );
}

function ClearPoolSVG() {
  return (
    <svg viewBox="0 0 200 140" style={{ width: 200, height: 140 }}>
      <defs>
        <radialGradient id="cp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#cp)" />
      {[...Array(5)].map((_, i) => (
        <ellipse key={i} cx={20 + i * 38} cy={55 + (i % 2) * 18} rx="20" ry="6" fill="rgba(255,255,255,0.12)" />
      ))}
      <ellipse cx="100" cy="70" rx="60" ry="35" fill="rgba(255,255,255,0.15)" />
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx={30 + i * 26} cy={50 + (i % 3) * 20} r="4" fill="rgba(255,255,255,0.3)" />
      ))}
    </svg>
  );
}

const SERVICES = [
  { icon: "🌊", title: "Pool Cleaning", desc: "Complete vacuum, brush, skim, and water test. Your pool, picture perfect.", color: "#0ea5e9" },
  { icon: "⚗️", title: "Chemical Balancing", desc: "Precision dosing for safe, crystal-clear, skin-friendly water.", color: "#06b6d4" },
  { icon: "🌿", title: "Green Pool Recovery", desc: "From algae swamp to sparkling clear — often in a single treatment.", color: "#10b981" },
  { icon: "🔄", title: "Filter Cleaning", desc: "Sand, cartridge, and DE filter servicing for optimal water flow.", color: "#8b5cf6" },
  { icon: "🔍", title: "Pool Inspections", desc: "Thorough health checks for buyers, sellers, or peace of mind.", color: "#f59e0b" },
  { icon: "🔧", title: "Equipment Maintenance", desc: "Pumps, chlorinators, and heaters serviced by licensed technicians.", color: "#ef4444" },
  { icon: "🤖", title: "Robotic Cleaner Service", desc: "Professional cleaning and repair of all major robotic pool cleaner brands.", color: "#3b82f6" },
  { icon: "📅", title: "Maintenance Plans", desc: "Fortnightly or monthly scheduled visits — set and forget luxury.", color: "#0284c7" },
];

function ServicesSection() {
  const [ref, inView] = useInView();
  return (
    <section id="services" ref={ref} style={{ padding: "100px 5%", background: "#020d1f", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        background: "linear-gradient(to bottom, rgba(240,249,255,0.03) 0%, transparent 100%)",
        height: 200
      }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s"
        }}>
          <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#fff", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16 }}>Premium Pool Services</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 500, margin: "0 auto" }}>Every service is delivered with precision, care, and a commitment to excellence.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="service-card card-hover glass" style={{
              borderRadius: 20, padding: "32px 28px",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)",
              transition: `all 0.6s ease ${i * 0.07}s`
            }}>
              <div className="svc-icon" style={{
                width: 52, height: 52, borderRadius: 14, marginBottom: 18,
                background: `${s.color}22`, border: `1px solid ${s.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24
              }}>
                {s.icon}
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: s.color, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [ref, inView] = useInView();
  const features = [
    { n: "01", title: "Book in 60 Seconds", desc: "Call, text, or request online. We confirm same-day whenever possible." },
    { n: "02", title: "Expert Technicians", desc: "Fully insured, background-checked, and trained to the highest standard." },
    { n: "03", title: "Digital Water Reports", desc: "Receive a detailed water chemistry report after every single visit." },
    { n: "04", title: "No Lock-In Contracts", desc: "Cancel anytime. We earn your loyalty through results, not fine print." },
  ];
  return (
    <section id="about" ref={ref} style={{ padding: "100px 5%", background: "#f0f9ff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-32px)", transition: "all 0.8s" }}>
          <div style={{ color: "#0284c7", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>The AquaLux Experience</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,44px)", color: "#0c4a6e", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 20, lineHeight: 1.15 }}>
            Pool ownership should feel like luxury, not labour.
          </h2>
          <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            We handle every detail so you can walk outside on a Saturday morning, dive straight in, and forget there's any maintenance to do at all. That's the AquaLux promise.
          </p>
          <a href={PHONE_HREF} className="glow-btn" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
            color: "#fff", padding: "14px 28px", borderRadius: 12,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            boxShadow: "0 8px 32px rgba(14,165,233,0.35)"
          }}>
            Get a Free Quote
          </a>
        </div>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(32px)", transition: "all 0.8s 0.2s" }}>
          {features.map((f, i) => (
            <div key={f.n} style={{
              display: "flex", gap: 20, marginBottom: 32,
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(20px)",
              transition: `all 0.6s ease ${0.1 + i * 0.1}s`
            }}>
              <div style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: 12,
                background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                color: "#fff", fontWeight: 800, fontSize: 13,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(14,165,233,0.3)"
              }}>
                {f.n}
              </div>
              <div>
                <div style={{ color: "#0c4a6e", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{f.title}</div>
                <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

const SUBURBS = ["Hamilton", "New Farm", "Ascot", "Bulimba", "Indooroopilly", "Paddington", "Toowong", "Clayfield", "Hawthorne", "St Lucia", "Taringa", "Chelmer"];

function AreasSection() {
  const [ref, inView] = useInView();
  return (
    <section id="areas" ref={ref} style={{ padding: "100px 5%", background: "#020d1f" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s", marginBottom: 48 }}>
          <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Where We Work</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#fff", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16 }}>Serving Brisbane's Premium Suburbs</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 460, margin: "0 auto" }}>
            Based in Brisbane, covering the inner south, north, east, and west for residential and prestige clients.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 48 }}>
          {SUBURBS.map((s, i) => (
            <div key={s} className="suburb-tag glass" style={{
              padding: "12px 22px", borderRadius: 100,
              color: "#fff", fontSize: 15, fontWeight: 500, cursor: "pointer",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "scale(0.9)",
              transition: `all 0.5s ease ${i * 0.05}s`
            }}>
              📍 {s}
            </div>
          ))}
        </div>
        <div className="glass" style={{
          display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 24px", borderRadius: 14,
          opacity: inView ? 1 : 0, transition: "all 0.7s 0.5s"
        }}>
          <span style={{ color: "#38bdf8", fontSize: 20 }}>📞</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>Not on the list?</span>
          <a href={PHONE_HREF} style={{ color: "#38bdf8", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>Call us — we likely cover your area.</a>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Sarah M.", suburb: "Hamilton", stars: 5,
    text: "AquaLux completely transformed our pool. It was an absolute green disaster and within two days it looked like something from a luxury resort. We've been on their fortnightly plan ever since.",
    avatar: "SM"
  },
  {
    name: "James T.", suburb: "New Farm", stars: 5,
    text: "The attention to detail is unreal. They send a full water chemistry report after every visit. My kids jump in every weekend without a worry. Worth every cent.",
    avatar: "JT"
  },
  {
    name: "Priya & Raj", suburb: "Ascot", stars: 5,
    text: "We've tried three other companies. None come close. AquaLux are genuinely professionals — on time, thorough, and the pool always looks immaculate. Highly recommend.",
    avatar: "PR"
  },
];

function TestimonialsSection() {
  const [ref, inView] = useInView();
  return (
    <section style={{ padding: "100px 5%", background: "#f0f9ff" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s" }}>
          <div style={{ color: "#0284c7", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Real Reviews</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#0c4a6e", fontWeight: 700, letterSpacing: "-0.5px" }}>What Our Clients Say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testi-card" style={{
              background: "#fff", borderRadius: 24, padding: "36px 32px",
              border: "1px solid rgba(186,230,253,0.5)",
              boxShadow: "0 4px 32px rgba(3,105,161,0.06)",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)",
              transition: `all 0.6s ease ${i * 0.12}s`
            }}>
              <Stars n={t.stars} />
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.75, margin: "20px 0 24px", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                  color: "#fff", fontWeight: 700, fontSize: 14,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: "#0c4a6e", fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "#64748b", fontSize: 13 }}>📍 {t.suburb}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40, opacity: inView ? 1 : 0, transition: "all 0.7s 0.5s" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 28px", borderRadius: 100, background: "#e0f2fe", border: "1px solid #bae6fd" }}>
            <Stars />
            <span style={{ color: "#0c4a6e", fontWeight: 700 }}>4.9 on Google</span>
            <span style={{ color: "#64748b" }}>· 128 verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Essential", price: "129", per: "/ fortnight", colour: "#0ea5e9",
    features: ["Vacuum & brush", "Skim & basket empty", "Chemical test & balance", "Filter check", "Email summary report"],
    popular: false
  },
  {
    name: "Premium", price: "189", per: "/ fortnight", colour: "#7c3aed",
    features: ["Everything in Essential", "Filter media inspection", "Equipment health check", "Chlorinator service", "Priority booking", "Digital water history log"],
    popular: true
  },
  {
    name: "Prestige", price: "299", per: "/ fortnight", colour: "#0f766e",
    features: ["Everything in Premium", "Robotic cleaner service", "Monthly equipment service", "Annual full inspection", "24/7 phone support", "Dedicated technician"],
    popular: false
  },
];

function PlansSection() {
  const [ref, inView] = useInView();
  return (
    <section id="plans" ref={ref} style={{ padding: "100px 5%", background: "#020d1f" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s" }}>
          <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Maintenance Plans</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#fff", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16 }}>Set and Forget. Crystal Clear.</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 480, margin: "0 auto" }}>No contracts. No lock-ins. Cancel anytime — though our clients never do.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {PLANS.map((p, i) => (
            <div key={p.name} className="plan-card" style={{
              borderRadius: 24, padding: "36px 28px", position: "relative",
              background: p.popular ? `linear-gradient(160deg, ${p.colour}18 0%, rgba(2,13,31,0.9) 100%)` : "rgba(255,255,255,0.04)",
              border: p.popular ? `1.5px solid ${p.colour}66` : "1px solid rgba(255,255,255,0.08)",
              boxShadow: p.popular ? `0 0 60px ${p.colour}22` : "none",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)",
              transition: `all 0.6s ease ${i * 0.12}s`
            }}>
              {p.popular && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: `linear-gradient(135deg,${p.colour},${p.colour}cc)`,
                  color: "#fff", padding: "5px 18px", borderRadius: 100,
                  fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
                  boxShadow: `0 4px 16px ${p.colour}55`
                }}>
                  ⭐ Most Popular
                </div>
              )}
              <div style={{ color: p.colour, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>$</span>
                <span style={{ color: "#fff", fontSize: 48, fontFamily: "Georgia,serif", fontWeight: 700, lineHeight: 1 }}>{p.price}</span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 28 }}>{p.per} · no lock-in</div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginBottom: 28 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${p.colour}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={p.colour} strokeWidth="3"><path d="M5 12l5 5L19 7" /></svg>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} style={{
                display: "block", textAlign: "center",
                background: p.popular ? `linear-gradient(135deg,${p.colour},${p.colour}cc)` : "rgba(255,255,255,0.08)",
                color: "#fff", padding: "14px 20px", borderRadius: 12,
                fontSize: 15, fontWeight: 700, textDecoration: "none",
                border: p.popular ? "none" : "1px solid rgba(255,255,255,0.12)",
                transition: "opacity 0.2s"
              }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How often should my pool be cleaned?", a: "For most Brisbane pools, fortnightly is ideal — especially in our warm climate where algae growth is rapid. High-use or heavily shaded pools may benefit from weekly service." },
  { q: "What does a standard clean include?", a: "Every visit includes vacuuming, brushing walls and floor, skimming the surface, emptying pump and skimmer baskets, testing water chemistry, and balancing chemicals as needed." },
  { q: "Can you fix a green pool?", a: "Absolutely. We specialise in green pool recovery. Depending on severity, most pools are swimming-ready within 24–72 hours. We'll provide an honest timeline during your free assessment." },
  { q: "Are your technicians fully insured?", a: "Yes. AquaLux technicians carry full public liability insurance and are police-checked. We take the safety and trust of your family and property seriously." },
  { q: "Do you service pool equipment?", a: "Yes — pumps, filters, chlorinators, heaters, robotic cleaners, and more. Our Prestige plan includes a dedicated technician for all equipment needs." },
  { q: "What areas do you cover?", a: "We service Brisbane's inner suburbs and surrounding areas. If you're unsure whether we come to you, give us a call — chances are we do." },
];

function FAQSection() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" ref={ref} style={{ padding: "100px 5%", background: "#f0f9ff" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.7s" }}>
          <div style={{ color: "#0284c7", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Common Questions</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,44px)", color: "#0c4a6e", fontWeight: 700, letterSpacing: "-0.5px" }}>Frequently Asked</h2>
        </div>
        {FAQS.map((f, i) => (
          <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
            background: "#fff", borderRadius: 16, marginBottom: 12, overflow: "hidden",
            border: open === i ? "1px solid #bae6fd" : "1px solid rgba(186,230,253,0.5)",
            boxShadow: open === i ? "0 4px 24px rgba(3,105,161,0.08)" : "0 2px 8px rgba(0,0,0,0.03)",
            cursor: "pointer", transition: "all 0.3s",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(16px)",
            transitionDelay: `${i * 0.06}s`
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 24px" }}>
              <span style={{ color: "#0c4a6e", fontWeight: 600, fontSize: 16, paddingRight: 16 }}>{f.q}</span>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: open === i ? "#0ea5e9" : "#e0f2fe",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s"
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke={open === i ? "#fff" : "#0284c7"} strokeWidth="2.5"
                  style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="accordion-content" style={{ maxHeight: open === i ? 200 : 0, opacity: open === i ? 1 : 0 }}>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, padding: "0 24px 22px", margin: 0 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "120px 5%", background: "#020d1f", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 70%)"
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 48, marginBottom: 20, animation: inView ? "floatY 3s ease-in-out infinite" : "none" }}>🏊</div>
        <h2 style={{
          fontFamily: "Georgia,serif", fontSize: "clamp(30px,5vw,60px)",
          color: "#fff", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1px",
          marginBottom: 20,
          opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.8s"
        }}>
          Your next perfect swim<br />
          is one call away.
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.55)", fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.65,
          maxWidth: 500, margin: "0 auto 44px",
          opacity: inView ? 1 : 0, transition: "all 0.8s 0.15s"
        }}>
          Join over 500 Brisbane families who've made pool stress a thing of the past. Get a free, no-obligation quote today.
        </p>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center",
          opacity: inView ? 1 : 0, transition: "all 0.8s 0.25s"
        }}>
          <a href={PHONE_HREF} className="glow-btn" style={{
            background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
            color: "#fff", padding: "18px 40px", borderRadius: 16,
            fontSize: 17, fontWeight: 800, textDecoration: "none",
            boxShadow: "0 12px 48px rgba(14,165,233,0.5)",
            letterSpacing: "0.01em"
          }}>
            📞 Call {PHONE}
          </a>
          <a href="sms:0731804455" style={{
            color: "#fff", padding: "18px 32px", borderRadius: 16,
            fontSize: 17, fontWeight: 600, textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)"
          }}>
            💬 Send a Text
          </a>
        </div>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 48, flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "all 0.8s 0.4s" }}>
          {["Same-day availability", "No lock-in contracts", "Satisfaction guarantee"].map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5"><path d="M5 12l5 5L19 7" /></svg>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#010917", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 5% 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg,#0ea5e9,#0369a1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(14,165,233,0.4)"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2C6 8 3 12 3 16a9 9 0 0018 0c0-4-3-8-9-14z" />
                </svg>
              </div>
              <span style={{ color: "#fff", fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 18 }}>
                Aqua<span style={{ color: "#38bdf8" }}>Lux</span>
              </span>
            </a>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Brisbane's premium pool cleaning and maintenance service. Effortless. Immaculate. Every time.
            </p>
            <div style={{ marginBottom: 16 }}>
              <a href={PHONE_HREF} style={{ color: "#38bdf8", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>{PHONE}</a>
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
              Mon–Fri: 6am–5pm · Sat: 7am–3pm
            </div>
          </div>
          {[
            { heading: "Services", links: ["Pool Cleaning", "Chemical Balancing", "Green Pool Recovery", "Filter Cleaning", "Equipment Service"] },
            { heading: "Company", links: ["About Us", "Service Areas", "Maintenance Plans", "FAQ", "Contact"] },
            { heading: "Areas", links: ["Hamilton", "New Farm", "Ascot", "Bulimba", "Indooroopilly"] },
          ].map(col => (
            <div key={col.heading}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: "0.04em" }}>{col.heading}</div>
              {col.links.map(l => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#38bdf8"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} AquaLux Pool Services Pty Ltd · Brisbane, QLD · ABN 12 345 678 910
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:480px){
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
      padding: "12px 16px 20px",
      background: "rgba(2,13,31,0.95)", backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      transform: show ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.3s ease",
      display: "none"
    }} className="mobile-sticky-cta">
      <a href={PHONE_HREF} style={{
        display: "block", textAlign: "center",
        background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
        color: "#fff", padding: "15px", borderRadius: 14,
        fontSize: 16, fontWeight: 700, textDecoration: "none",
        boxShadow: "0 8px 32px rgba(14,165,233,0.4)"
      }}>
        📞 Call AquaLux — {PHONE}
      </a>
      <style>{`@media(max-width:768px){ .mobile-sticky-cta { display: block !important; } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#020d1f", overflowX: "hidden" }}>
      <NavBar />
      <Hero />
      <TransformSection />
      <ServicesSection />
      <ExperienceSection />
      <AreasSection />
      <TestimonialsSection />
      <PlansSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
