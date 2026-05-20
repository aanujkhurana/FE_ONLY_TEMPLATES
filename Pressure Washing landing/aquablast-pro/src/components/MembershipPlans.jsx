import React from 'react';

const PLANS = [
  { name: 'The Azure Tier', price: '$149', cycle: 'fortnightly', features: ['Bi-weekly 24-point Valet Clean', 'Premium Chemical Equalisation', 'Basic Basket & Debris Evacuation', 'Digital Diagnostics Report'] },
  { name: 'The Aura Estate Club', price: '$289', cycle: 'monthly', features: ['All Azure Tier Features', 'Priority Same-Day Rapid Dispatch', 'Filter Media Chemical Wash', 'O-Ring & Seal Lubrication', 'Free Robotic Loaner Unit'], premium: true },
  { name: 'The Sanctuary Absolute', price: '$550', cycle: 'monthly', features: ['Weekly Hyper-Valet Clean', 'Unlimited Emergency Callouts', 'Zero-Cost Remedial Chemicals', 'Complete Automation Monitoring', 'Annual Equipment Overhaul'] },
];

export default function MembershipPlans() {
  return (
    <section id="membership" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Predictable Perfection</h2>
        <p className="text-3xl sm:text-5xl font-light tracking-tight">Structured Maintenance Membership</p>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">Select an architectural management package calibrated explicitly to your lifestyle demands.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, idx) => (
          <div 
            key={plan.name}
            className={`relative rounded-3xl bg-white/[0.02] border ${plan.premium ? 'border-[#00f2fe]/40 shadow-[0_0_50px_rgba(0,242,254,0.1)]' : 'border-white/5'} p-8 flex flex-col justify-between transition-all hover:border-white/10`}
          >
            {plan.premium && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                Most Requested Estate Tier
              </div>
            )}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold tracking-wide text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                  <span className="ml-2 text-xs text-slate-400 uppercase tracking-wider">/ {plan.cycle}</span>
                </div>
              </div>

              <ul className="space-y-4 pt-6 border-t border-white/5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-3 text-xs text-slate-300">
                    <svg className="w-4 h-4 text-[#00f2fe] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a 
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all ${
                  plan.premium 
                    ? 'bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Initiate Secure Onboarding
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
