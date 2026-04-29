'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Users,
} from 'lucide-react';
import { IoMdQuote } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa6';

const WHATSAPP_NUMBER = '919084662719';
const WHATSAPP_MESSAGE =
  "Hi Varun, I'd like to learn more about your SEBI RA equity research services.";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const slides = [
  {
    subtitle: 'RESEARCH · DISCIPLINE · TRANSPARENCY',
    title: 'Smarter Equity Decisions, Backed by 6+ Years of Market Research',
    quote: 'Investing is a long game — research is your edge.',
  },
  {
    subtitle: 'SEBI REGISTERED RESEARCH ANALYST',
    title: 'Research-Driven Insights From a Registered Analyst You Can Trust',
    quote: 'Compliance first. Research-driven. Investor-focused.',
  },
  {
    subtitle: 'EQUITY · RISK MANAGEMENT · STRATEGY',
    title: 'Build Long-Term Wealth With Disciplined Market Analysis',
    quote: 'No tips, no shortcuts — just structured, transparent research.',
  },
];

const Hero = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((p) => (p + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-emerald-950 animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.25),transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sky-500/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-emerald-500/20 blur-3xl animate-float-slow" />

      {/* Decorative rising chart sparkline */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-1/2 opacity-[0.08]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-spark" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d="M0 360 L80 340 L160 350 L240 300 L320 320 L400 250 L480 270 L560 200 L640 220 L720 150 L800 180 L880 110 L960 140 L1040 70 L1120 100 L1200 40"
          stroke="url(#hero-spark)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-3 lg:px-4 py-16 lg:py-6">
        <div className="grid lg:grid-cols-12  items-center">
          {/* Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div
              className={`transition-all duration-700 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm tracking-wider text-emerald-300 font-semibold">
                  {current.subtitle}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-sky-100 to-emerald-200 bg-clip-text text-transparent">
                  {current.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                I&apos;m <span className="text-white font-semibold">Varun Kumar</span>, a SEBI Registered
                Research Analyst (
                <span className="text-emerald-400 font-semibold">INH000024833</span>) with 6+ years of
                hands-on equity market experience — helping investors approach the market with structure,
                research and risk discipline.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <button
                  onClick={() => router.push('/services')}
                  className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 shadow-2xl shadow-sky-900/50 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>

                <button
                  onClick={() => router.push('/contact')}
                  className="group w-full sm:w-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold py-3 px-8 transition text-sm sm:text-base hover:border-white/40"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule a Consultation
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  { icon: TrendingUp, value: '6+', label: 'Years Experience' },
                  { icon: BarChart3, value: 'INH000024833', label: 'SEBI RA' },
                  { icon: Users, value: '100%', label: 'Research Driven' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    </div>
                    <div className="text-base sm:text-xl font-bold text-white truncate">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote / Profile card */}
          <div className="lg:col-span-5">
            <div
              className={`relative transition-all duration-700 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-3xl blur-xl opacity-40" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
                {/* Avatar header */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/10">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur-md opacity-60" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-teal-500 to-emerald-500 flex items-center justify-center shadow-lg ring-2 ring-white/20">
                      <span className="text-2xl sm:text-3xl font-bold text-white tracking-wider">VK</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-lg font-bold leading-tight">Varun Kumar</div>
                    <div className="text-emerald-400 text-xs font-semibold tracking-wider mt-0.5">
                      SEBI RA · INH000024833
                    </div>
                    <div className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Analyst</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex items-start gap-3 mb-5">
                  <IoMdQuote className="w-7 h-7 text-emerald-400 shrink-0 -mt-1" />
                  <p className="text-white text-sm sm:text-base leading-relaxed font-light italic">
                    {current.quote}
                  </p>
                </div>

                {/* Details grid */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                    Registered with SEBI
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      <div className="text-slate-400 text-[11px] uppercase tracking-wider">Type</div>
                      <div className="text-white font-semibold">Individual</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      <div className="text-slate-400 text-[11px] uppercase tracking-wider">Experience</div>
                      <div className="text-white font-semibold">6+ Years</div>
                    </div>
                    <div className="col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                      <div className="text-slate-400 text-[11px] uppercase tracking-wider">Reg. No.</div>
                      <div className="text-white font-semibold tracking-wide">INH000024833</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Investments in securities market are subject to market risks.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setIndex(i);
                  setFade(true);
                }, 200);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-10 bg-gradient-to-r from-sky-400 to-emerald-400'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating WhatsApp icon — bottom-left of hero */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed sm:absolute bottom-4 right-4 sm:bottom-32 sm:right-6 z-30 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-xl shadow-emerald-900/40 transition transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <FaWhatsapp className="relative w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </section>
  );
};

export default Hero;
