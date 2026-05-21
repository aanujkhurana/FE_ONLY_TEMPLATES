import { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ShieldCheck, Star, Gauge, Cpu, Settings2, Cog, ChevronDown, ChevronUp, Calendar, CheckCircle2, Award, Zap, MessageCircle, Mail } from 'lucide-react';

const GARAGE_CONFIG = {
  businessName: 'Velocity Performance Garage',
  tagline: 'Elite Sports Car Specialists',
  phone: '0400 987 654',
  email: 'booking@velocitygarage.com.au',
  address: '42 Industrial Ave, Moorooka QLD 4105',
  abn: '12 345 678 901',
  accentColor: 'neon-green',
  accentClass: 'text-neon-green border-neon-green bg-neon-green/10',
  glowClass: 'glow-green',
  specialities: ['European Performance', 'Japanese Tuning', 'Exotic Maintenance', 'Track Preparation'],
  warranty: '24 Months / 40,000km Parts & Labour',
  operatingHours: {
    monFri: '7:00 AM - 6:00 PM',
    sat: '8:00 AM - 2:00 PM',
    sun: 'Closed',
  },
  serviceAreas: ['Brisbane', 'Moorooka', 'Yeerongpilly', 'Salisbury', 'Annerley', 'Greenslopes', 'Cannon Hill', 'Morningside', 'Hawthorne', 'New Farm', 'Teneriffe', 'Newstead'],
};

const PERFORMANCE_TRUST = [
  {
    index: '01',
    category: 'TECH',
    title: 'FACTORY-TRAINED TECHNICIANS',
    description: 'Our elite mechanics are factory-certified to handle high-performance Euro and JDM platforms with absolute precision. Every technician holds manufacturer-specific certifications from Porsche, BMW M, Mercedes-AMG, and Nissan GT-R programs.',
    icon: Award,
  },
  {
    index: '02',
    category: 'DIAG',
    title: 'DEALER-LEVEL DIAGNOSTICS',
    description: 'We invest over $200k in factory-grade diagnostic tooling—including BMW ISTA, Porsche PIWIS, and Mercedes STAR. Our state-of-the-art workshop catches issues before they become expensive problems.',
    icon: Cpu,
  },
  {
    index: '03',
    category: 'PARTS',
    title: 'GENUINE OEM PARTS ONLY',
    description: 'We refuse to compromise. Every component—whether rubber bushings or full engine rebuilds—uses 100% genuine OEM or track-grade equivalents. No counterfeit parts, no shortcuts, just uncompromising quality.',
    icon: ShieldCheck,
  },
  {
    index: '04',
    category: 'WARRANTY',
    title: '24-MONTH WORKSHOP WARRANTY',
    description: 'Every service comes with our ironclad 24-month/40,000km parts and labour warranty. We stand behind our work completely, giving you total peace of mind with your prized machinery.',
    icon: Settings2,
  },
];

const TRANSFORMATION_TABS = [
{
    id: 'track',
    label: 'Track Upgrade',
    issue: {
      title: 'THE LIMITATION',
      description: 'Factory suspension components are designed for comfort, not performance. OEM springs sag over time, bushings wear, and alignment specs are generic—not optimised for aggressive cornering or track use.',
      image: 'https://images.unsplash.com/photo-1761942943097-047e87880031?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bullets: [
        'Sagged OEM springs reduce cornering grip',
        'Worn bushings introduce compliance',
        'Generic factory alignment specs',
        'No adjustment for driver preference',
      ],
    },
    solution: {
      title: 'THE ELITE SOLUTION',
      description: 'We install precision-engineered coilover systems from Bilstein, KW, and Ohlins—each tuned to your specific vehicle and driving style. Our in-house corner balancing ensures perfect weight distribution.',
      image: 'https://images.unsplash.com/photo-1776231659226-48cd902b867e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',      
      badges: [
        '+40% Cornering Grip',
        'Adjustable Damping (22-click)',
        'Corner-Weighted Balance',
        'Track-Day Ready Geometry',
      ],
    },
  },
  {
    id: 'tuning',
    label: 'Performance Tuning',
    issue: {
      title: 'THE RESTRICTION',
      description: 'Factory ECU programming is deliberately conservative—designed to meet emissions standards, maximise fuel economy, and appeal to the broadest customer base. Your engine is making far less power than it safely could.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop',
      bullets: [
        'Conservative factory power output',
        'Restricted torque curves',
        'Suboptimal fuel mapping',
        'No ability to adjust for modifications',
      ],
    },
    solution: {
      title: 'THE ELITE SOLUTION',
      description: 'Our ECU remapping unlocks your engine\'s true potential usingdyno-proven software from Quantum, VF Engineering, and Shok Industries. We develop custom maps for your specific build—no generic tunes.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      badges: [
        '+45kW Peak Power Gain',
        'Optimised Torque Curve',
        'Custom Fuel Strategy',
        'Warranty-Safe Remap',
      ],
    },
  },
  {
    id: 'braking',
    label: 'Precision Braking',
    issue: {
      title: 'THE VULNERABILITY',
      description: 'Standard brake rotors are engineered for everyday driving—not repeated hard laps or mountain drives. Factory pads fade quickly, rotors warp under heat stress, and brake fluid degrades, compromising pedal feel.',
image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=500&fit=crop',
      bullets: [
        'Glazed rotors cause brake fade',
        'Generic pads lack heat tolerance',
        'Contaminated brake fluid',
        'No improvement for track use',
      ],
    },
    solution: {
      title: 'THE ELITE SOLUTION',
      description: 'We install premium big brake kits from Brembo, Alcon, and Endless—complete with floating two-piece rotors, race-grade pads, braided steel lines, and fresh DOT 5.1 fluid. Every system is bedded in and tested.',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=500&fit=crop',
      badges: [
        '+35% Braking Efficiency',
        'Heat Dissipation Optimised',
        'Consistent Pedal Feel',
        'Track-Durable Components',
      ],
    },
  },
];

const SERVICES = [
  {
    icon: Gauge,
    title: 'Logbook Servicing & Diagnostics',
    description: 'Complete manufacturer-spec servicing for Euro and JDM vehicles. Full diagnostic scan, fluid replacement, and component inspection using factory-level tooling.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    includes: ['Full Vehicle Health Check', 'Factory-Level Scan Tool', 'Genuine OEM Parts', 'Service Logbook Stamp'],
  },
  {
    icon: Zap,
    title: 'Performance Tuning & ECU Remapping',
    description: 'Unleash your vehicle\'s true potential with precision ECU tuning. Increased power, improved torque, and optimised fuel economy without compromising reliability.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    includes: ['Dyno-Proven Results', 'Custom Map Development', 'Before/After Testing', 'Warranty-Safe Tuning'],
  },
  {
    icon: Settings2,
    title: 'Suspension, Brake & Track Setup',
    description: 'Transform your handling with professional suspension geometry, big-brake kit installation, and track-day preparation. We set it up like the pros.',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop',
    includes: ['Corner Balancing', 'Brembo/Bilstein Specialists', 'Track Alignment', 'Data Logging Analysis'],
  },
  {
    icon: Cog,
    title: 'Elite Mechanical & Engine Rebuilds',
    description: 'From routine maintenance to full engine rebuilds. Our certified technicians handle everything from timing chains to forced induction conversions.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
    includes: ['Full Engine Teardown', 'Machine Shop Network', 'Performance Builds', 'Restoration Projects'],
  },
];

const TESTIMONIALS = [
  {
    name: 'Max Williams',
    vehicle: 'Porsche Cayman GT4',
    rating: 5,
    text: 'These guys know their stuff. Dropped the car for a full suspension overhaul and track prep. The transformation was unreal. Best investment I\'ve made in the car.',
  },
  {
    name: 'Sarah Chen',
    vehicle: 'VW Golf R (Mk8)',
    rating: 5,
    text: 'Had my Golf R mapped here after months of research. The difference is night and day. Fast, professional, and they actually care about doing the job right.',
  },
  {
    name: 'James Thompson',
    vehicle: 'Nissan GT-R R35',
    rating: 5,
    text: 'Finally found a workshop that understands high-performance Japanese machinery. Complex work handled with expertise. Highly recommend to any serious enthusiast.',
  },
  {
    name: 'Michelle Parker',
    vehicle: 'BMW M4 Competition',
    rating: 5,
    text: 'Took my M4 for its first major service with them. Dealer-level diagnostics, genuine parts, and transparent pricing. The car has never driven better.',
  },
];

const FAQS = [
  {
    q: 'Will this void my factory manufacturer warranty?',
    a: 'Not at all. We\'re an approved independent specialist, and under Australian Consumer Law, having your vehicle serviced with us doesn\'t void your warranty. We use genuine OEM parts and follow manufacturer specifications precisely. All work is logged and documented.',
  },
  {
    q: 'Do you source genuine European parts?',
    a: 'Absolutely. We maintain strong relationships with official European distributors and only use genuine OEM or OEM-equivalent parts. No counterfeit or low-quality alternatives. Every component comes with full traceability and warranty.',
  },
  {
    q: 'Do you provide detailed vehicle health reports?',
    a: 'Yes, every service includes a comprehensive digital report. We include full diagnostic scans, photos of inspected components, fluid condition analysis, and recommendations for future maintenance. You\'ll know exactly what\'s happening with your vehicle.',
  },
  {
    q: 'Can you handle exotic and limited-run vehicles?',
    a: 'Yes. Our team has extensive experience with rare and exotic machinery including limited-run European supercars and JDM icons. We invest in manufacturer-specific tooling and continuous training to stay current.',
  },
  {
    q: 'Do you offer track-day support?',
    a: 'We offer pre-event inspection and setup, as well as post-event debrief and maintenance. We can also arrange on-call track support for serious competitors. Ask us about our track prep packages.',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTransform, setActiveTransform] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', vehicle: '', service: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCall = () => window.location.href = `tel:${GARAGE_CONFIG.phone.replace(/\s/g, '')}`;
  const handleEmail = () => window.location.href = `mailto:${GARAGE_CONFIG.email}`;
  const handleWhatsApp = () => window.location.href = 'https://wa.me/61400987654';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', phone: '', vehicle: '', service: '' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-carbon">
      <main>
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-carbon/80 backdrop-blur-md border-b border-slate-border">
          <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex items-center justify-between h-20">
              <a href="#" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-green/60 rounded-lg flex items-center justify-center rotate-3">
                  <Gauge className="w-7 h-7 text-carbon" />
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white tracking-tight">Velocity</span>
                  <span className="block text-xs text-neon-green font-medium -mt-1">Performance Garage</span>
                </div>
              </a>

              <div className="hidden lg:flex items-center gap-8">
                <a href="#services" className="text-metallic hover:text-white font-medium transition-colors">Services</a>
                <a href="#transformations" className="text-metallic hover:text-white font-medium transition-colors">Transformations</a>
                <a href="#booking" className="text-metallic hover:text-white font-medium transition-colors">Bookings</a>
                <a href="#reviews" className="text-metallic hover:text-white font-medium transition-colors">Reviews</a>
                <a href="#faq" className="text-metallic hover:text-white font-medium transition-colors">FAQ</a>
              </div>

              <div className="hidden lg:flex items-center gap-4">
                <a href={`tel:${GARAGE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-metallic hover:text-neon-green font-medium transition-colors">
                  <Phone className="w-5 h-5" />
                  {GARAGE_CONFIG.phone}
                </a>
                <a href="#booking" className="btn-primary text-sm">
                  Book Diagnostics
                </a>
              </div>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="lg:hidden p-2 text-white hover:text-neon-green transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          <div 
            className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-out ${
              mobileMenuOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-carbon-mid border-l border-slate-border shadow-2xl transform transition-transform duration-300 ease-out">
              <div className="pt-24 px-6 pb-6">
                <div className="flex flex-col gap-2">
                  <a 
                    href="#services" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white font-medium py-3 px-4 rounded-lg hover:bg-carbon hover:text-neon-green transition-all duration-200"
                  >
                    Services
                  </a>
                  <a 
                    href="#transformations" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white font-medium py-3 px-4 rounded-lg hover:bg-carbon hover:text-neon-green transition-all duration-200"
                  >
                    Transformations
                  </a>
                  <a 
                    href="#booking" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white font-medium py-3 px-4 rounded-lg hover:bg-carbon hover:text-neon-green transition-all duration-200"
                  >
                    Bookings
                  </a>
                  <a 
                    href="#reviews" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white font-medium py-3 px-4 rounded-lg hover:bg-carbon hover:text-neon-green transition-all duration-200"
                  >
                    Reviews
                  </a>
                  <a 
                    href="#faq" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white font-medium py-3 px-4 rounded-lg hover:bg-carbon hover:text-neon-green transition-all duration-200"
                  >
                    FAQ
                  </a>
                </div>
                <div className="border-t border-slate-border mt-6 pt-6 flex flex-col gap-4">
                  <a 
                    href={`tel:${GARAGE_CONFIG.phone.replace(/\s/g, '')}`} 
                    className="flex items-center gap-3 text-neon-green font-bold hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5" /> 
                    {GARAGE_CONFIG.phone}
                  </a>
                  <a 
                    href="#booking" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="btn-primary text-center"
                  >
                    Book Diagnostics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop" 
              alt="High performance sports car in workshop" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 via-carbon/40 to-carbon" />
            <div className="absolute inset-0 carbon-grid opacity-50" />
          </div>

          <div className="relative section-padding text-center max-w-5xl mx-auto pt-32">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 mb-8 animate-fade-up">
              <span className="w-3 h-3 bg-neon-green rounded-full pulse-dot" />
              <span className="text-neon-green text-sm font-semibold">Diagnostic Bays Open Today</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up stagger-1">
              Precision Engineering.<br />
              <span className="text-gradient-neon">Elite Performance.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-metallic max-w-3xl mx-auto mb-10 animate-fade-up stagger-2">
              Your dedicated sports & Euro specialist. Factory-trained technicians, dealer-level diagnostics, 
              and uncompromising quality for discerning enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 animate-fade-up stagger-3">
              <button onClick={handleCall} className="btn-call text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Workshop
              </button>
              <a href="#booking" className="btn-secondary text-lg w-full sm:w-auto">
                Secure Booking Slot
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-carbon-mid/50 border border-slate-border">
                <Star className="w-5 h-5 text-neon-green fill-neon-green" />
                <span className="text-white font-semibold">5.0</span>
                <span className="text-metallic text-sm">Track Record</span>
              </div>
              <div className="flex items-center gap-2 text-metallic">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span className="text-sm">Brisbane, QLD</span>
              </div>
              <div className="flex items-center gap-2 text-metallic">
                <ShieldCheck className="w-4 h-4 text-neon-green" />
                <span className="text-sm">{GARAGE_CONFIG.warranty}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-neon-green/50" />
          </div>
        </section>

        {/* Performance Trust Matrix */}
        <section className="py-20 bg-carbon-light border-y border-slate-border">
          <div className="section-padding">
            <div className="text-center mb-16">
              <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Why Choose Velocity</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">The Performance Trust Matrix</h2>
              <p className="text-metallic text-lg max-w-2xl mx-auto">
                Four pillars of excellence that define how we service your high-performance machinery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {PERFORMANCE_TRUST.map((trust, i) => {
                const Icon = trust.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:-translate-y-2 hover:border-neon-green/50 hover:shadow-[0_0_30px_rgba(200,255,0,0.15)] transition-all duration-400 ease-out"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-neon-green/60 font-mono text-xs tracking-wider">{trust.index}</span>
                      <span className="w-8 h-px bg-slate-700" />
                      <span className="text-neon-green/60 font-mono text-xs tracking-wider">{trust.category}</span>
                    </div>
                    
                    <div className="pt-10 mb-4">
                      <div className="w-14 h-14 bg-neon-green/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-neon-green/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-neon-green group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white leading-tight uppercase tracking-wide">
                        {trust.title}
                      </h3>
                    </div>
                    
                    <p className="text-metallic text-sm leading-relaxed">
                      {trust.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-green/0 to-transparent group-hover:via-neon-green/50 transition-all duration-500 rounded-b-2xl" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="services" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Our Expertise</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Service Bays</h2>
              <p className="text-metallic text-lg max-w-2xl mx-auto">
                Precision-tuned solutions for your prized machinery. From routine servicing to full performance builds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl bg-carbon-mid border border-slate-border hover:border-neon-green hover:-translate-y-1.5 transition-all duration-300 ease-out animate-fade-up shadow-lg hover:shadow-neon-green/20"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-carbon-mid/80 to-transparent" />
                    </div>
                    
                    <div className="relative p-8">
                      <div className="w-16 h-16 bg-neon-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-green/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-neon-green" />
                      </div>
                      
                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-metallic mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {service.includes.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                            <span className="text-white/80 group-hover:text-white transition-colors duration-200">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Under The Hood Showcase */}
        <section id="transformations" className="py-20 bg-carbon">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Real Results</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Under The Hood</h2>
                <p className="text-metallic text-lg max-w-2xl mx-auto">
                  Visualise the dramatic mechanical transformations we perform daily on Brisbane's most prized machinery.
                </p>
              </div>

              {/* Dashboard-Style Tab Selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {TRANSFORMATION_TABS.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTransform(i)}
                    className={`relative px-8 py-4 font-semibold text-sm tracking-wider uppercase transition-all duration-300 ease-out rounded-lg overflow-hidden ${
                      activeTransform === i 
                        ? 'text-carbon' 
                        : 'text-metallic hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 transition-all duration-300 ${
                      activeTransform === i 
                        ? 'bg-neon-green opacity-100' 
                        : 'bg-carbon-mid opacity-0'
                    }`} />
                    <span className="absolute inset-0 border border-slate-border rounded-lg" />
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      activeTransform === i ? 'w-full bg-neon-green' : 'w-0'
                    }`} />
                    <span className="relative z-10 flex items-center gap-2">
                      {tab.label}
                      {activeTransform === i && (
                        <span className="w-2 h-2 bg-carbon rounded-full animate-pulse" />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Split-Screen Transformation Display */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* LEFT: The Issue */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 0 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[-20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 0 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[0].issue.image} 
                        alt="Factory limitation" 
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <span className="text-red-400 text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[0].issue.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[0].issue.description}
                      </p>
                      <div className="space-y-3">
                        {TRANSFORMATION_TABS[0].issue.bullets.map((bullet, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: The Solution */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 0 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 0 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-carbon-mid border-2 border-neon-green/30 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[0].solution.image} 
                        alt="Elite solution" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-carbon-mid/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-neon-green/20 border border-neon-green/30 rounded-lg">
                        <span className="text-neon-green text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[0].solution.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[0].solution.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {TRANSFORMATION_TABS[0].solution.badges.map((badge, j) => (
                          <div key={j} className="flex items-center gap-2 px-3 py-2 bg-neon-green/10 rounded-lg border border-neon-green/20">
                            <Zap className="w-4 h-4 text-neon-green flex-shrink-0" />
                            <span className="text-neon-green text-xs font-semibold">{badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -bottom-px -left-px w-16 h-16 bg-neon-green/20 rounded-tr-2xl" />
                    <div className="absolute -top-px -right-px w-16 h-16 bg-neon-green/20 rounded-bl-2xl" />
                  </div>
                </div>

                {/* Tab 1: Performance Tuning */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 1 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[-20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 1 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[1].issue.image} 
                        alt="Factory limitation" 
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <span className="text-red-400 text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[1].issue.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[1].issue.description}
                      </p>
                      <div className="space-y-3">
                        {TRANSFORMATION_TABS[1].issue.bullets.map((bullet, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 1 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 1 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-carbon-mid border-2 border-neon-green/30 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[1].solution.image} 
                        alt="Elite solution" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-carbon-mid/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-neon-green/20 border border-neon-green/30 rounded-lg">
                        <span className="text-neon-green text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[1].solution.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[1].solution.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {TRANSFORMATION_TABS[1].solution.badges.map((badge, j) => (
                          <div key={j} className="flex items-center gap-2 px-3 py-2 bg-neon-green/10 rounded-lg border border-neon-green/20">
                            <Zap className="w-4 h-4 text-neon-green flex-shrink-0" />
                            <span className="text-neon-green text-xs font-semibold">{badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -bottom-px -left-px w-16 h-16 bg-neon-green/20 rounded-tr-2xl" />
                    <div className="absolute -top-px -right-px w-16 h-16 bg-neon-green/20 rounded-bl-2xl" />
                  </div>
                </div>

                {/* Tab 2: Precision Braking */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 2 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[-20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 2 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[2].issue.image} 
                        alt="Factory limitation" 
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <span className="text-red-400 text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[2].issue.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[2].issue.description}
                      </p>
                      <div className="space-y-3">
                        {TRANSFORMATION_TABS[2].issue.bullets.map((bullet, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeTransform === 2 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-[20px] scale-95 pointer-events-none absolute'
                  }`}
                  style={{ position: activeTransform === 2 ? 'relative' : 'absolute' }}
                >
                  <div className="bg-carbon-mid border-2 border-neon-green/30 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={TRANSFORMATION_TABS[2].solution.image} 
                        alt="Elite solution" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-mid via-carbon-mid/50 to-transparent" />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-neon-green/20 border border-neon-green/30 rounded-lg">
                        <span className="text-neon-green text-xs font-bold tracking-wider uppercase">
                          {TRANSFORMATION_TABS[2].solution.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <p className="text-metallic leading-relaxed mb-6">
                        {TRANSFORMATION_TABS[2].solution.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {TRANSFORMATION_TABS[2].solution.badges.map((badge, j) => (
                          <div key={j} className="flex items-center gap-2 px-3 py-2 bg-neon-green/10 rounded-lg border border-neon-green/20">
                            <Zap className="w-4 h-4 text-neon-green flex-shrink-0" />
                            <span className="text-neon-green text-xs font-semibold">{badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -bottom-px -left-px w-16 h-16 bg-neon-green/20 rounded-tr-2xl" />
                    <div className="absolute -top-px -right-px w-16 h-16 bg-neon-green/20 rounded-bl-2xl" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button onClick={handleCall} className="btn-call inline-flex">
                  <Phone className="w-5 h-5" />
                  Get Your Custom Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 carbon-grid opacity-30" />
          <div className="relative max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Diagnostic Engine</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Secure Your Booking</h2>
              <p className="text-metallic text-lg">
                Tell us about your vehicle. We'll confirm availability and get you scheduled.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-carbon-mid rounded-2xl p-8 md:p-12 border border-slate-border glow-green/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Full name"
                      required
                      className="w-full bg-carbon border border-slate-border rounded-lg px-4 py-3 text-white placeholder:text-metallic focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/50 transition-all duration-200"
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-200 opacity-0 focus:opacity-100 focus:ring-2 focus:ring-neon-green/30 -m-0.5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="04XX XXX XXX"
                      required
                      className="w-full bg-carbon border border-slate-border rounded-lg px-4 py-3 text-white placeholder:text-metallic focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/50 transition-all duration-200"
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-200 opacity-0 focus:opacity-100 focus:ring-2 focus:ring-neon-green/30 -m-0.5" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">Vehicle Make & Model</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    placeholder="e.g. Porsche 911 GT3, BMW M4 Competition"
                    required
                    className="w-full bg-carbon border border-slate-border rounded-lg px-4 py-3 text-white placeholder:text-metallic focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/50 transition-all duration-200"
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-200 opacity-0 focus:opacity-100 focus:ring-2 focus:ring-neon-green/30 -m-0.5" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-white mb-2">Desired Service</label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                    className="w-full bg-carbon border border-slate-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/50 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="logbook">Logbook Servicing & Diagnostics</option>
                    <option value="tuning">Performance Tuning & ECU Remap</option>
                    <option value="suspension">Suspension & Brake Setup</option>
                    <option value="mechanical">Mechanical & Engine Rebuild</option>
                    <option value="inspection">Pre-Purchase Inspection</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-metallic">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-200 opacity-0 focus:opacity-100 focus:ring-2 focus:ring-neon-green/30 -m-0.5" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-call flex-1 justify-center text-lg">
                  <Calendar className="w-5 h-5" />
                  {formSubmitted ? 'Booking Received!' : 'Request Booking'}
                </button>
                <button type="button" onClick={handleCall} className="btn-secondary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Direct
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-metallic">
                <CheckCircle2 className="w-4 h-4 text-neon-green" />
                Free quote, no obligation
              </div>
              <div className="flex items-center gap-2 text-metallic">
                <CheckCircle2 className="w-4 h-4 text-neon-green" />
                Same-day response
              </div>
              <div className="flex items-center gap-2 text-metallic">
                <CheckCircle2 className="w-4 h-4 text-neon-green" />
                No pressure, honest advice
              </div>
            </div>
          </div>
        </section>

        {/* Reviews & Suburbs */}
        <section id="reviews" className="py-20 bg-carbon-light border-y border-slate-border">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Client Feedback</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">The Track Record</h2>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-neon-green fill-neon-green" />
                    ))}
                  </div>
                  <span className="text-white font-medium">5.0 from 89 verified reviews</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-carbon-mid rounded-2xl p-8 border border-slate-border animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-neon-green fill-neon-green" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-green/40 rounded-lg flex items-center justify-center text-carbon font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-sm text-neon-green">{t.vehicle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white text-center mb-6">Service Areas</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {GARAGE_CONFIG.serviceAreas.map((area, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-carbon border border-slate-border text-metallic text-sm hover:border-neon-green/50 hover:text-white transition-colors cursor-default">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-neon-green text-sm font-semibold tracking-wider uppercase mb-4 block">Knowledge Base</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Common Questions</h2>
              <p className="text-metallic">Answers to help you make informed decisions about your vehicle.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div 
                  key={i} 
                  className="group bg-carbon-mid rounded-xl border border-slate-border overflow-hidden animate-fade-up hover:border-neon-green/30 transition-colors duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-carbon-light transition-all duration-200"
                  >
                    <span className="font-semibold text-white pr-4">{faq.q}</span>
                    <span 
                      className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                        openFaq === i ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-neon-green" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-metallic group-hover:text-neon-green transition-colors duration-200" />
                      )}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-metallic leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-carbon" />
          <div className="absolute inset-0 carbon-grid opacity-20" />
          
          <div className="relative section-padding text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform<br />
                <span className="text-gradient-neon">Your Machine?</span>
              </h2>
              <p className="text-lg text-metallic mb-10 max-w-2xl mx-auto">
                Book your consultation today. Our specialists are standing by to help you unlock your vehicle's full potential.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button onClick={handleCall} className="btn-call text-lg w-full sm:w-auto">
                  <Phone className="w-6 h-6" />
                  Call Now
                </button>
                <button onClick={handleWhatsApp} className="bg-carbon-mid hover:bg-carbon-light text-white font-bold py-4 px-10 rounded transition-colors border border-slate-border w-full sm:w-auto flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </button>
                <button onClick={handleEmail} className="bg-carbon hover:bg-carbon-light text-white font-bold py-4 px-10 rounded transition-colors border border-slate-border w-full sm:w-auto flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6" />
                  Email
                </button>
              </div>

              <div className="mt-8 text-metallic text-sm">
                Direct line: <a href={`tel:${GARAGE_CONFIG.phone.replace(/\s/g, '')}`} className="text-neon-green font-semibold">{GARAGE_CONFIG.phone}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-carbon-mid py-16 border-t border-slate-border">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-green/60 rounded-lg flex items-center justify-center">
                      <Gauge className="w-7 h-7 text-carbon" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-xl text-white">Velocity</span>
                      <span className="block text-xs text-neon-green">Performance Garage</span>
                    </div>
                  </div>
                  <p className="text-metallic mb-6 max-w-md">
                    Elite automotive specialists serving Brisbane's discerning enthusiasts. 
                    Factory-trained, dealer-level diagnostics, and uncompromising quality.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 bg-carbon rounded-lg flex items-center justify-center text-metallic hover:text-neon-green transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-carbon rounded-lg flex items-center justify-center text-metallic hover:text-neon-green transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Services</h4>
                  <ul className="space-y-2 text-sm text-metallic">
                    <li><a href="#services" className="hover:text-white transition-colors">Logbook Servicing</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Performance Tuning</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Brake & Suspension</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Engine Rebuilds</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Contact</h4>
                  <ul className="space-y-3 text-sm text-metallic">
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-neon-green mt-0.5" />
                      <span>{GARAGE_CONFIG.address}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neon-green" />
                      <a href={`tel:${GARAGE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-white">{GARAGE_CONFIG.phone}</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-neon-green" />
                      <button onClick={handleEmail} className="hover:text-white">{GARAGE_CONFIG.email}</button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-border pt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-metallic">
                    <p>© 2024 {GARAGE_CONFIG.businessName}. ABN {GARAGE_CONFIG.abn}</p>
                    <p className="mt-2 text-xs">Operating Hours: Mon-Fri {GARAGE_CONFIG.operatingHours.monFri} | Sat {GARAGE_CONFIG.operatingHours.sat} | {GARAGE_CONFIG.operatingHours.sun}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-metallic">
                    <ShieldCheck className="w-4 h-4 text-neon-green" />
                    {GARAGE_CONFIG.warranty}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="sticky-mobile-bar lg:hidden">
          <button 
            onClick={handleCall} 
            className="btn-call flex-1 justify-center text-base py-4 relative"
          >
            <span className="absolute inset-0 rounded animate-pulse bg-neon-green/20" />
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Call Workshop</span>
          </button>
          <a 
            href="#booking" 
            className="bg-carbon-mid hover:bg-carbon text-white font-bold px-6 py-4 rounded flex items-center justify-center gap-2 transition-all duration-200 border border-slate-border hover:border-neon-green hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]"
          >
            <Calendar className="w-5 h-5" />
            Book
          </a>
        </div>
      </main>
    </div>
  );
}