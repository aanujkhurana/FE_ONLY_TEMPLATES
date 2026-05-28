import { motion } from 'framer-motion';

const PLANS = [
  {
    name:     'The Azure Tier',
    price:    '$149',
    cycle:    'fortnightly',
    features: [
      'Bi-weekly 24-point Valet Clean',
      'Premium Chemical Equalisation',
      'Basic Basket & Debris Evacuation',
      'Digital Diagnostics Report',
    ],
    accent: 'aqua',
  },
  {
    name:     'The Aura Estate Club',
    price:    '$289',
    cycle:    'monthly',
    features: [
      'All Azure Tier Features',
      'Priority Same-Day Rapid Dispatch',
      'Filter Media Chemical Wash',
      'O-Ring & Seal Lubrication',
      'Free Robotic Loaner Unit',
    ],
    premium: true,
    accent: 'mixed',
  },
  {
    name:     'The Sanctuary Absolute',
    price:    '$550',
    cycle:    'monthly',
    features: [
      'Weekly Hyper-Valet Clean',
      'Unlimited Emergency Callouts',
      'Zero-Cost Remedial Chemicals',
      'Complete Automation Monitoring',
      'Annual Equipment Overhaul',
    ],
    accent: 'stone',
  },
];

export default function MembershipPlans() {
  return (
    <section id="membership" className="py-32 px-6 relative overflow-hidden">

      {/* Dual glow backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full filter blur-[160px]"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,240,0.05) 0%, rgba(200,169,110,0.04) 60%, transparent 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-4 mb-20"
        >
          <p className="section-label">Predictable Perfection</p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Structured Maintenance{' '}
            <span className="font-semibold text-gradient-aqua">Membership</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm font-light leading-relaxed">
            Select an architectural management package calibrated explicitly to your lifestyle demands.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isPremium = !!plan.premium;

            return (
              <div
                key={plan.name}
                className="relative flex flex-col"
              >
                {isPremium && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-5 py-1.5 rounded-full text-[9px] font-bold tracking-[0.22em] uppercase text-[#020b14] shadow-[0_0_20px_rgba(0,212,240,0.3)]"
                    style={{ background: 'linear-gradient(135deg, #a8efff, #a8efff, #00d4f0)' }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  className="relative flex flex-col flex-1 p-8 rounded-3xl transition-all duration-300"
                  style={{
                    background: isPremium
                      ? 'linear-gradient(135deg, rgba(0,212,240,0.06) 0%, rgba(200,169,110,0.06) 100%)'
                      : 'rgba(255,255,255,0.02)',
                    border: isPremium
                      ? '1px solid rgba(0,212,240,0.3)'
                      : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: isPremium
                      ? '0 0 60px rgba(0,212,240,0.08), 0 0 30px rgba(200,169,110,0.05), 0 30px 80px rgba(0,0,0,0.4)'
                      : '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Background glow for premium */}
                  {isPremium && (
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,240,0.08) 0%, transparent 70%)',
                      }}
                    />
                  )}

                  {/* Plan name & price */}
                  <div className="relative z-10 space-y-4 mb-6">
                    <h3 className="text-base font-semibold tracking-wide text-white">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl font-bold tracking-tight"
                        style={{
                          background: isPremium
                            ? 'linear-gradient(135deg, #00d4f0, #a8efff)'
                            : plan.accent === 'stone' ? 'linear-gradient(135deg, #e2c896, #c8a96e)' : 'white',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">/ {plan.cycle}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="stone-divider mb-6" />

                  {/* Features */}
                  <ul className="relative z-10 space-y-3.5 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-slate-300">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: isPremium
                              ? 'rgba(0,212,240,0.15)'
                              : plan.accent === 'stone'
                                ? 'rgba(200,169,110,0.12)'
                                : 'rgba(0,212,240,0.1)',
                          }}
                        >
                          <svg
                            className="w-2.5 h-2.5"
                            fill="none"
                            stroke={isPremium ? '#00d4f0' : plan.accent === 'stone' ? '#c8a96e' : '#00d4f0'}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <div className="relative z-10 pt-8">
                    <a
                      href="#contact"
                      className={`group relative overflow-hidden block w-full text-center py-3.5 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                        isPremium
                          ? 'hover:shadow-[0_0_30px_rgba(0,212,240,0.3)] hover:-translate-y-0.5'
                          : 'hover:bg-white/[0.07]'
                      }`}
                      style={
                        isPremium
                          ? {
                              background: 'linear-gradient(135deg, #0ba3d4 0%, #a8efff 50%, #a8efff 100%)',
                              color: '#020b14',
                              border: 'none',
                            }
                          : {
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: 'white',
                            }
                      }
                    >
                      {/* Shimmer sweep on premium */}
                      {isPremium && (
                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      )}
                      <span className="relative z-10">Initiate Secure Onboarding</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust footnote */}
        <motion.p
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] uppercase tracking-[0.25em] text-slate-600 font-mono mt-12"
        >
          No Contract Commitment · Discretion Guaranteed · Same-Day Onboarding Available
        </motion.p>
      </div>

            <div className="stone-divider mt-0 absolute bottom-0 left-0 right-0" />
    </section>
  );
}
