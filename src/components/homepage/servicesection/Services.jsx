'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  LineChart,
  Activity,
  PieChart,
  GraduationCap,
  Layers,
  Compass,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Equity Research',
    points: [
      'Fundamental and technical Analysis',
      'Sector outlook & relative views',
      'Earnings & valuation tracking',
    ],
    color: 'from-sky-500 to-cyan-500',
    border: 'border-sky-200',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Index & Market View',
    points: [
      'Index trend & macro view',
      'Volatility / breadth analysis',
      'Risk regime monitoring',
    ],
    color: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-200',
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: 'Portfolio Review',
    points: [
      'Existing portfolio diagnostic',
      'Concentration & risk audit',
      'Rebalancing guidance',
    ],
    color: 'from-indigo-500 to-violet-500',
    border: 'border-indigo-200',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Risk-Managed Strategies',
    points: [
      'Position sizing frameworks',
      'Stop / drawdown discipline',
      'Cycle-aware allocation',
    ],
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-200',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Technical Analysis',
    points: [
      'Trend & structure mapping',
      'Support / resistance levels',
      'Entry & exit frameworks',
    ],
    color: 'from-rose-500 to-pink-500',
    border: 'border-rose-200',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Investor Education',
    points: [
      'Markets 101 for new investors',
      'Risk & psychology basics',
      'Reading research the right way',
    ],
    color: 'from-fuchsia-500 to-purple-500',
    border: 'border-fuchsia-200',
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <section id="services" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full border border-sky-200 mb-5">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <h3 className="text-sky-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              What I Offer
            </h3>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Research-Backed{' '}
            <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Equity Services
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Structured, transparent equity research and education — delivered within SEBI Research
            Analyst guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-6 border ${s.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg`}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <ul className="space-y-2 mb-5">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-emerald-700 transition"
              >
                Enquire
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-sky-700 via-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Want a research-driven view on your portfolio?
              </h3>
              <p className="opacity-90">
                Reach out for a structured review. No tips, no shortcuts — just clear, disciplined
                research within SEBI RA guidelines.
              </p>
            </div>
            <div className="md:text-right">
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 transition px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
