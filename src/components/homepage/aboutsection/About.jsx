'use client';
import React from 'react';
import {
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Building,
  FileText,
  BarChart3,
  CheckCircle,
  IdCard,
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '10+ Years of Equity Experience',
      description: 'Hands-on participation in Indian equity markets across cycles.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'SEBI Registered Research Analyst',
      description: 'Registration No. INH000024833 · Individual category.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Equity & Index Research',
      description: 'Structured fundamental and technical market analysis.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Risk-First Approach',
      description: 'Capital protection and disciplined position sizing.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Investor Education',
      description: 'Clear, jargon-free guidance to help you learn the markets.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Transparent & Compliant',
      description: 'Operating strictly within SEBI Research Analyst guidelines.',
    },
  ];

  const companyInfo = [
    { label: 'Analyst', value: 'Varun Kumar' },
    { label: 'SEBI RA Reg. No.', value: 'INH000024833' },
    { label: 'Type', value: 'Individual' },
    { label: 'BSE Enlistment', value: 'On request' },
    {
      label: 'Address',
      value: 'E2 94 MDDA Colony, Kedarpuram, Near Shammy Diary, Dehradun - 248001, Uttarakhand',
    },
  ];

  const services = [
    'Equity research and structured market analysis',
    'Index outlook and sector-level views',
    'Risk-managed position sizing frameworks',
    'Technical and fundamental review',
    'Portfolio review and rebalancing guidance',
    'Investor education and learning sessions',
  ];

  return (
    <section id="about" className="relative py-16 sm:py-8 px-4 bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Research-Driven{' '}
            <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Market Insights
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Varun Kumar is a SEBI Registered Research Analyst with 10+ years of equity market
            experience, focused on disciplined, transparent research that helps investors think long-term
            and act with clarity.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left: about + features */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">My Mission</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                As <span className="font-bold text-sky-700">SEBI RA Varun Kumar</span>
                {' '}(Reg. No. INH000024833), my mission is to deliver research-driven, disciplined and
                transparent equity insights. I believe consistent wealth creation comes from research
                and risk control — not tips, hype, or speculation.
              </p>

              <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                <p className="text-slate-800 italic">
                  &ldquo;Having equity market experience of 10 years, my approach is simple — clear
                  analysis, ethical practices, and a long-term view of the market. The goal isn&apos;t to
                  predict every move; it&apos;s to stay disciplined through every cycle.&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl shadow-sm p-5 border border-slate-200 hover:shadow-md hover:border-sky-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-600 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: registration + services + risk */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-700 via-teal-600 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <IdCard className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold">Varun Kumar</div>
                  <div className="text-sm opacity-90">SEBI Research Analyst</div>
                </div>
              </div>

              <div className="space-y-3">
                {companyInfo.map((info, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="font-semibold text-emerald-200 text-xs mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-sm">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sky-600" />
                Areas of Expertise
              </h3>
              <ul className="space-y-2.5">
                {services.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-bold text-sm">!</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold">Investments in securities market are subject to market risks.</span>{' '}
                  Read all related documents carefully before investing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-5 h-5 text-sky-700" />,
                bg: 'from-sky-50',
                border: 'border-sky-200',
                title: 'Research Excellence',
                desc: 'Data-driven analysis backed by structured methodology and discipline.',
              },
              {
                icon: <Shield className="w-5 h-5 text-emerald-700" />,
                bg: 'from-emerald-50',
                border: 'border-emerald-200',
                title: 'Regulatory Compliance',
                desc: 'Operating strictly within SEBI Research Analyst Regulations and guidelines.',
              },
              {
                icon: <Target className="w-5 h-5 text-indigo-700" />,
                bg: 'from-indigo-50',
                border: 'border-indigo-200',
                title: 'Risk Discipline',
                desc: 'Capital protection and risk-first thinking before any return expectations.',
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${v.bg} to-white rounded-2xl p-6 border ${v.border}`}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {v.icon}
                  </div>
                  {v.title}
                </h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
