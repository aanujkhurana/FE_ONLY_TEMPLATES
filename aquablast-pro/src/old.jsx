import { useState, useEffect, useRef } from "react";
import {
  Shield, Star, Leaf, Heart, Phone, MessageSquare, ChevronDown,
  CheckCircle, ArrowRight, MapPin, Clock, Zap, Droplets, Home,
  Building2, Waves, Sun, Menu, X, Send, Award, Users, ThumbsUp
} from "lucide-react";

// ============================================================
// 🔧 SITE CONFIG — Edit this to onboard a new client in 30s
// ============================================================
const SITE_CONFIG = {
  businessName: "AquaBlast Pro",
  tagline: "Brisbane's Premium Pressure Washing",
  phone: "0412 345 678",
  phoneTel: "+61412345678",
  email: "hello@aquablastpro.com.au",
  ABN: "51 824 753 001",
  hours: "Mon–Sat: 6:00am – 6:00pm",
  reviewCount: "87+",
  reviewScore: "5.0",
  serviceAreas: [
    "Chermside", "North Lakes", "Aspley", "Kedron", "Nundah",
    "Stafford", "Everton Park", "Mitchelton", "Ferny Grove",
    "Keperra", "Enoggera", "Gaythorne", "Kalinga", "Wavell Heights",
    "Zillmere", "Boondall", "Nudgee", "Hendra", "Eagle Farm",
    "Clayfield", "Albion", "Lutwyche", "Gordon Park", "Grange",
    "Wilston", "Windsor", "Newmarket", "Alderley", "Ashgrove"
  ],
  primaryColor: "#0ea5e9",   // Sky-500
  accentColor: "#f59e0b",    // Amber-500
  services: [
    {
      icon: "driveway",
      title: "Driveway & Concrete",
      desc: "Blast away years of oil stains, mould, and grime from your driveway, pathways, and concrete surfaces. Results that speak for themselves.",
      tag: "Most Popular"
    },
    {
      icon: "house",
      title: "House Washing",
      desc: "Full exterior house washing using low-pressure soft wash methods — safe on all cladding types including weatherboard, render, and Colourbond.",
      tag: "Best Value"
    },
    {
      icon: "roof",
      title: "Roof Soft Washing",
      desc: "Specialised no-pressure roof restoration and lichen removal. We use bio-degradable treatments that won't void your warranty or damage tiles.",
      tag: "Premium"
    },
    {
      icon: "commercial",
      title: "Commercial & Shopfronts",
      desc: "First impressions matter. We keep your retail, office, or industrial premises spotless — after-hours and weekend slots available.",
      tag: "Commercial"
    }
  ]
};

// ============================================================
// UTILITY COMPONENTS
// ============================================================

function PulseBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
      </span>
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-sky-400 text-xs font-bold tracking-[0.2em] uppercase mb-3 border border-sky-400/30 bg-sky-400/10 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

// ============================================================
// NAVIGATION
// ============================================================

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Process", "Reviews", "FAQ", "Contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                <Droplets size={18} className="text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">{SITE_CONFIG.businessName}</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium transition-colors">
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
              <a href="#contact" className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5">
                Get Free Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900/98 border-t border-slate-700/60 backdrop-blur-xl px-4 py-4">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-white text-base font-medium border-b border-slate-800 transition-colors">
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-700/60 px-4 py-3 shadow-2xl">
        <div className="flex gap-3">
          <a href={`tel:${SITE_CONFIG.phoneTel}`}
            className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30">
            <Phone size={16} />
            Call Now
          </a>
          <a href={`sms:${SITE_CONFIG.phoneTel}`}
            className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30">
            <MessageSquare size={16} />
            Text Quote
          </a>
        </div>
      </div>
    </>
  );
}

// ============================================================
// HERO
// ============================================================

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-900/10 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left copy */}
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <PulseBadge>Same-Day Availability</PulseBadge>
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-400/30 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full">
                <Star size={13} fill="currentColor" />
                {SITE_CONFIG.reviewScore} ({SITE_CONFIG.reviewCount} Google Reviews)
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Brisbane's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">Premium</span><br />
              Pressure<br />
              Washing.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Your property, made brand new. Driveways, homes, roofs, and shopfronts — we deliver results that last, using eco-friendly methods safe for your family and lawn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 group">
                Get Your Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${SITE_CONFIG.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-slate-700 hover:border-slate-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all duration-200">
                <Phone size={18} />
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Fully Insured $20M", "Family Owned & Operated", "100% Satisfaction Guarantee"].map(item => (
                <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle size={14} className="text-sky-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Transformation Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-sky-500/10">
              {/* Before/After split card */}
              <div className="relative h-80 lg:h-[440px] bg-slate-800">
                {/* Before half */}
                <div className="absolute inset-0 w-1/2 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className="w-full h-full" style={{
                      backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 8px)"
                    }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/80 to-transparent"></div>
                  </div>
                  <div className="relative text-center">
                    <div className="text-4xl mb-2">🏚️</div>
                    <span className="bg-slate-900/80 text-slate-400 text-xs font-bold px-3 py-1 rounded-full border border-slate-600">BEFORE</span>
                  </div>
                </div>
                {/* After half */}
                <div className="absolute inset-0 left-1/2 bg-gradient-to-bl from-sky-900/60 to-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-bl from-sky-500/10 to-transparent"></div>
                  </div>
                  <div className="relative text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/40">AFTER</span>
                  </div>
                </div>
                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full z-20 flex items-center justify-center shadow-xl">
                  <div className="flex gap-0.5">
                    <ChevronDown size={12} className="text-slate-700 -rotate-90" />
                    <ChevronDown size={12} className="text-slate-700 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="bg-slate-900 border-t border-slate-700/60 px-6 py-4 flex gap-6">
                {[
                  { val: "500+", label: "Jobs Completed" },
                  { val: "3hrs", label: "Avg. Job Time" },
                  { val: "100%", label: "Guaranteed" }
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-white font-black text-xl">{stat.val}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-xl shadow-amber-500/40 rotate-3">
              FREE QUOTE TODAY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TRUST MATRIX
// ============================================================

function TrustMatrix() {
  const items = [
    { icon: Shield, title: "Fully Insured $20M", desc: "Full public liability coverage so you're completely protected on every job, every time." },
    { icon: Heart, title: "Local Family Owned", desc: "Brisbane born and bred. We live and work in the same suburbs as our customers." },
    { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy? We'll return and re-do the job at zero cost. No arguments, no fine print." },
    { icon: Leaf, title: "Eco-Friendly Chemicals", desc: "Bio-degradable, plant-safe, pet-safe cleaning agents. Hard on grime, gentle on everything else." },
    { icon: Zap, title: "Same-Day Service", desc: "We know your time is valuable. Most jobs can be booked and completed within 24 hours." },
    { icon: Award, title: "5-Star Rated", desc: "Over 87 verified Google Reviews. Our reputation is everything — and we protect it fiercely." },
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-black text-white">Built on trust. Backed by results.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/40 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                <Icon size={22} className="text-sky-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES BENTO GRID
// ============================================================

function Services() {
  const iconMap = {
    driveway: Waves,
    house: Home,
    roof: Sun,
    commercial: Building2
  };

  const tagColors = {
    "Most Popular": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "Best Value": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "Premium": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Commercial": "bg-amber-500/20 text-amber-300 border-amber-500/30"
  };

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Everything your property needs.</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Professional pressure washing and soft washing solutions across Greater Brisbane.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.title}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                {/* BG shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-sky-500/0 group-hover:from-sky-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                      <Icon size={20} className="text-sky-400" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${tagColors[service.tag]}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base mb-3 leading-snug">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>

                  <div className="flex items-center gap-1.5 text-sky-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Get Quote <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BEFORE / AFTER TRANSFORMATION GRID
// ============================================================

function BeforeAfter() {
  const transformations = [
    { area: "Concrete Driveway", before: "Black oil stains, years of built-up grime", after: "Looks brand new — neighbours are impressed", emoji: "🛤️" },
    { area: "Tile Roof", before: "Green lichen, black mould, heavy staining", after: "Original colour fully restored, no damage to tiles", emoji: "🏠" },
    { area: "Rendered Façade", before: "Algae growth, streaky water marks, discolouration", after: "Bright, clean, like it was just painted", emoji: "🏡" },
    { area: "Timber Deck", before: "Slippery moss, greying timber, safety hazard", after: "Teak-fresh timber, safe underfoot, re-oiled ready", emoji: "🌿" },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Transformations</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">The AquaBlast difference.</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Real results from real Brisbane properties. Here's what our customers see when we're done.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {transformations.map((t) => (
            <div key={t.area} className="relative bg-slate-800/60 border border-slate-700/60 rounded-2xl overflow-hidden group hover:border-sky-500/40 transition-all duration-300">
              <div className="grid grid-cols-2 min-h-[160px]">
                {/* Before */}
                <div className="relative p-5 bg-slate-800 border-r border-slate-700/60">
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 text-slate-400 text-xs font-bold px-2 py-0.5 rounded border border-slate-700">BEFORE</span>
                  </div>
                  <div className="flex flex-col justify-end h-full pt-8">
                    <div className="text-3xl mb-2 opacity-50 grayscale">{t.emoji}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{t.before}</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative p-5 bg-sky-950/40">
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-2 py-0.5 rounded border border-sky-500/40">AFTER</span>
                  </div>
                  <div className="flex flex-col justify-end h-full pt-8">
                    <div className="text-3xl mb-2">{t.emoji}</div>
                    <p className="text-sky-300/80 text-xs leading-relaxed font-medium">{t.after}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-700/60">
                <span className="text-white font-bold text-sm">{t.area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 3-STEP PROCESS
// ============================================================

function Process() {
  const steps = [
    { num: "01", icon: MessageSquare, title: "Snap & Send", desc: "Take a quick photo of your property and send it via text or through our form. Tell us what needs cleaning and your preferred time." },
    { num: "02", icon: Zap, title: "Instant SMS Quote", desc: "We'll reply within 30 minutes with a clear, upfront price — no hidden fees, no call centres, just a straight answer from the owner." },
    { num: "03", icon: Star, title: "We Wash, You Smile", desc: "Our team arrives on time, does the job properly, and leaves your property looking incredible. Payment on completion." }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Organised and easy, every time.</h2>
          <p className="text-slate-400 max-w-lg mx-auto">We've made the booking process as simple as possible — because you've got better things to do.</p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"></div>

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-sky-500/40 transition-all duration-300 group">
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-500/60 transition-all duration-300 relative z-10">
                  <step.icon size={24} className="text-sky-400" />
                </div>
                <span className="absolute -top-3 -right-3 bg-sky-500 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/40">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-white font-black text-lg mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS + SERVICE AREAS
// ============================================================

function Reviews() {
  const testimonials = [
    { name: "Dave M.", suburb: "Chermside", stars: 5, text: "Blew away 5 years of grime off my driveway in a couple of hours. The boys were polite, on time, and the result is unreal. Already booked them for the roof next month." },
    { name: "Sarah K.", suburb: "North Lakes", stars: 5, text: "Soft washed our whole render house — looks like it was just painted. Price was fair and they were so careful around my garden beds. Highly recommend to anyone in the area." },
    { name: "Mike T.", suburb: "Aspley", stars: 5, text: "I was a bit sceptical about the roof washing but they explained the whole process. Three months later and there's no sign of the lichen coming back. Brilliant service." },
    { name: "Bec & Tom H.", suburb: "Everton Park", stars: 5, text: "Used them for our commercial property. They came on a Saturday morning before we opened, cleaned the entire shopfront, and it looked brand new. Would use again without hesitation." },
    { name: "Annette F.", suburb: "Zillmere", stars: 5, text: "Got a quote within 20 minutes of texting them a photo. The price matched exactly what they said. No surprises, no upsells. Just great honest work." },
    { name: "Chris D.", suburb: "Keperra", stars: 5, text: "My driveway hadn't been cleaned in years. Thought it was just permanently stained but they got it to near-new condition. Absolutely worth every dollar." },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Google Reviews</SectionLabel>
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl lg:text-4xl font-black text-white">What Brisbane says.</h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#f59e0b" className="text-amber-500" />)}
            <span className="text-white font-bold ml-2">{SITE_CONFIG.reviewScore}</span>
            <span className="text-slate-500 text-sm">({SITE_CONFIG.reviewCount} Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.map(({ name, suburb, stars, text }) => (
            <div key={name} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300">
              <div className="flex mb-3">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" className="text-amber-500" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">"{text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
                  {name[0]}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs flex items-center gap-1"><MapPin size={10} />{suburb}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Tags */}
        <div>
          <div className="text-center mb-6">
            <SectionLabel>Service Areas</SectionLabel>
            <h3 className="text-xl font-bold text-white">Servicing Greater Brisbane</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {SITE_CONFIG.serviceAreas.map(area => (
              <span key={area} className="text-slate-400 text-sm px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg hover:border-sky-500/40 hover:text-sky-400 transition-all cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ ACCORDION
// ============================================================

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Do you need access to my water supply?", a: "Yes — we'll need access to an outdoor tap. Our equipment is efficient and we use much less water than a standard hose. If you're on tank water, just let us know and we'll plan accordingly." },
    { q: "Are your chemicals safe for my pets and garden?", a: "Absolutely. We exclusively use bio-degradable, plant-safe, and pet-safe cleaning agents. We'll also take care to protect your garden beds and will water down surrounding plants as a precaution after every job." },
    { q: "Are you fully insured?", a: "Yes — we hold $20 million public liability insurance. We're happy to provide a certificate of currency before your job if required, particularly for strata, commercial, or rental properties." },
    { q: "How long does a typical driveway clean take?", a: "Most standard single-car driveways take 1–1.5 hours. Double driveways and larger areas take 2–3 hours. We'll give you an accurate timeframe when we quote." },
    { q: "Do you offer weekend appointments?", a: "Yes! We operate Monday to Saturday, 6am–6pm. Early morning slots are popular — we recommend booking at least 48 hours ahead to secure your preferred time." },
    { q: "What if I'm not happy with the result?", a: "We stand by our work 100%. If you're not satisfied for any reason, contact us within 48 hours and we'll come back to address the issue at absolutely no charge." },
    { q: "Can I get a quote without being home?", a: "Yes. Just send us a few photos of the area via text or email, along with your address. We can provide an accurate quote and you don't need to be present for the work." },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Your questions, answered.</h2>
          <p className="text-slate-400">Everything you need to know before booking.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-200 ${open === i ? "border-sky-500/50 bg-slate-800/80" : "border-slate-800 bg-slate-900 hover:border-slate-700"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                <span className={`font-semibold text-sm transition-colors ${open === i ? "text-white" : "text-slate-300"}`}>
                  {faq.q}
                </span>
                <ChevronDown size={18} className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-sky-400" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT / LEAD FORM
// ============================================================

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", suburb: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-sky-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <SectionLabel>Free Quote</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready for a brand new property?</h2>
            <p className="text-slate-400 leading-relaxed mb-8">Fill in the form and we'll send you a firm quote via SMS within 30 minutes. No obligation, no pressure.</p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, title: "Call or Text", val: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phoneTel}` },
                { icon: MessageSquare, title: "Email Us", val: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: Clock, title: "Operating Hours", val: SITE_CONFIG.hours, href: null },
              ].map(({ icon: Icon, title, val, href }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{title}</div>
                    {href ? (
                      <a href={href} className="text-white font-semibold text-sm hover:text-sky-400 transition-colors">{val}</a>
                    ) : (
                      <span className="text-white font-semibold text-sm">{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews pill */}
            <div className="inline-flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-5 py-3">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" className="text-amber-500" />)}
              </div>
              <span className="text-white font-semibold text-sm">{SITE_CONFIG.reviewScore} — {SITE_CONFIG.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7 lg:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-black text-xl mb-2">Quote Request Received!</h3>
                <p className="text-slate-400 text-sm">We'll send your quote via SMS within 30 minutes. Cheers! 🤙</p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-black text-lg mb-6">Get Your Free Quote</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold mb-1.5">Mobile *</label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5">Suburb *</label>
                    <input name="suburb" value={form.suburb} onChange={handleChange}
                      placeholder="e.g. Chermside"
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5">Service Needed *</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                      <option value="" disabled>Select a service...</option>
                      <option>Driveway & Concrete Cleaning</option>
                      <option>High-Pressure House Washing</option>
                      <option>Roof Restoration & Soft Washing</option>
                      <option>Commercial & Shopfront Cleaning</option>
                      <option>Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={3} placeholder="Any extra details — size of area, access notes, photos to send through, etc."
                      className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none" />
                  </div>

                  <button onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 group">
                    <Send size={16} />
                    Send My Free Quote Request
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-slate-600 text-xs text-center">We respect your privacy. No spam, ever.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-14 pb-32 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <Droplets size={18} className="text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">{SITE_CONFIG.businessName}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-sm">
              Brisbane's trusted pressure washing specialists. Family owned, fully insured, and committed to delivering results that make your property shine.
            </p>
            <div className="text-slate-600 text-xs space-y-1">
              <div>ABN: {SITE_CONFIG.ABN}</div>
              <div>{SITE_CONFIG.hours}</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SITE_CONFIG.services.map(s => (
                <li key={s.title}>
                  <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href={`tel:${SITE_CONFIG.phoneTel}`} className="text-slate-500 hover:text-sky-400 text-sm transition-colors flex items-center gap-2"><Phone size={12} />{SITE_CONFIG.phone}</a></li>
              <li><a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-500 hover:text-sky-400 text-sm transition-colors flex items-center gap-2"><Send size={12} />{SITE_CONFIG.email}</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-sky-400 text-sm transition-colors flex items-center gap-2"><MessageSquare size={12} />Request a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© {currentYear} {SITE_CONFIG.businessName}. All rights reserved. Serving Greater Brisbane, QLD.</p>
          <p className="text-slate-700 text-xs">Licensed & Fully Insured · Brisbane, QLD, Australia</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// ROOT APP
// ============================================================

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Nav />
      <Hero />
      <TrustMatrix />
      <Services />
      <BeforeAfter />
      <Process />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
