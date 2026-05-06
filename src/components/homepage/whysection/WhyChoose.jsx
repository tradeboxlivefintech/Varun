'use client';
import React from 'react';
import { ShieldCheck, BadgeCheck, Eye, Repeat, Scale, Brain } from 'lucide-react';

const items = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'SEBI Registered',
    desc: 'Reg. No. INH000024833 — registered Research Analyst (Individual).',
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: '10+ Years of Markets',
    desc: 'Hands-on experience across multiple equity market cycles.',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Transparent Research',
    desc: 'Clear reasoning, defined assumptions, no black-box calls.',
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    title: 'Process Over Tips',
    desc: 'A repeatable framework, not one-off sensational predictions.',
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: 'Risk First',
    desc: 'Capital protection and drawdown discipline come before returns.',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'Investor-Focused',
    desc: 'Education-first approach so you understand the why, not just the what.',
  },
];

const WhyChoose = () => (
  <section className="py-16 sm:py-24 px-4 bg-slate-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.18),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.18),transparent_60%)]" />
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-400/30 mb-5">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <h3 className="text-emerald-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Why Work With Me
          </h3>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Built on{' '}
          <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
            Research, Discipline & Trust
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          A research-first practice run by a SEBI Registered Research Analyst — focused on long-term
          investor outcomes, not short-term excitement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <div
            key={i}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              {it.icon}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{it.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
