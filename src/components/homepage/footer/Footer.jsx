'use client';
import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Users,
  FileText,
  Scale,
} from 'lucide-react';
import { FaXTwitter, FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import Logo from '@/components/brand/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Compliance', href: '/compliance' },
  ];

  const legalLinks = [
    {
      name: 'Grievance Redressal',
      href: '/compliance',
      icon: <FileText className="w-4 h-4" />,
      details: 'Submit your complaints and feedback',
    },
    {
      name: 'Investor Charter',
      href: '/compliance#charter',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      name: 'Disclaimer',
      href: '/disclaimer',
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'varunkumartimes@gmail.com',
      href: 'mailto:varunkumartimes@gmail.com',
      type: 'General Queries',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'varunkumartimes@gmail.com',
      href: 'mailto:varunkumartimes@gmail.com',
      type: 'Compliance Officer',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 9084662719',
      href: 'tel:+919084662719',
      type: 'Customer Care',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'E2 94 MDDA Colony, Kedarpuram, Near Shammy Diary, Dehradun - 248001, Uttarakhand',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: <FaXTwitter className="w-4 h-4" />, href: '#', name: 'X (Twitter)' },
    { icon: <FaFacebook className="w-4 h-4" />, href: '#', name: 'Facebook' },
    { icon: <FaLinkedinIn className="w-4 h-4" />, href: '#', name: 'LinkedIn' },
    { icon: <FaYoutube className="w-4 h-4" />, href: '#', name: 'YouTube' },
  ];

  const stats = [
    { label: 'SEBI Reg.', value: 'INH', icon: <Award className="w-4 h-4" /> },
    { label: 'Years Exp.', value: '6+', icon: <Users className="w-4 h-4" /> },
    { label: 'Category', value: 'Research', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center  mb-6">
              <Logo size="lg" imgSize={88} />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  SEBI RA Varun Kumar
                </h3>
                <p className="text-emerald-400 text-sm font-semibold">Research Analyst</p>
                <p className="text-slate-300 text-xs mt-1">SEBI Reg. No. INH000024833</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              A research-driven, transparent and disciplined equity research practice — built on 6+
              years of market experience and run within SEBI Research Analyst regulations.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-1 text-emerald-300">
                    {s.icon}
                    <span className="font-bold text-sm">{s.value}</span>
                  </div>
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 hover:border-transparent rounded-lg flex items-center justify-center transition transform hover:scale-110"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-300 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-slate-300 hover:text-emerald-300 transition flex items-center gap-2 group py-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:w-4 group-hover:bg-emerald-400 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{l.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-300 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compliance
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-slate-300 hover:text-emerald-300 transition flex items-start gap-2 group py-1"
                  >
                    <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-emerald-500 group-hover:border-transparent transition">
                      {l.icon}
                    </div>
                    <div className="flex-1">
                      <span className="block group-hover:translate-x-1 transition-transform">
                        {l.name}
                      </span>
                      {l.details && (
                        <span className="text-slate-500 text-xs block">{l.details}</span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact
            </h3>
            <div className="space-y-3">
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="flex items-start gap-3 text-slate-300 hover:text-emerald-300 transition group p-2 rounded-lg hover:bg-white/5"
                >
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-emerald-500 group-hover:border-transparent transition flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="text-sm">
                    <span className="block">{c.text}</span>
                    {c.type && <span className="text-slate-500 text-xs">{c.type}</span>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance officer strip */}
      <div className="border-t border-white/10 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 py-5 grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-1">
              Compliance Officer
            </div>
            <div className="text-white">Varun Kumar</div>
          </div>
          <div>
            <div className="text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-1">
              Email
            </div>
            <a
              href="mailto:varunkumartimes@gmail.com"
              className="text-slate-300 hover:text-emerald-300"
            >
              varunkumartimes@gmail.com
            </a>
          </div>
          <div>
            <div className="text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-1">
              Phone
            </div>
            <a href="tel:+919084662719" className="text-slate-300 hover:text-emerald-300">
              +91 9084662719
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <div className="text-slate-400 text-sm order-2 md:order-1">
            © {currentYear} SEBI RA Varun Kumar. All rights reserved.
            <p className="text-xs text-slate-500 mt-1">
              SEBI Registration No. INH000024833 · Type: Individual · Category: Research Analyst
            </p>
          </div>

          <div className="order-1 md:order-2 text-center">
            <p className="text-slate-400 text-xs sm:text-sm">
              <span className="text-amber-400 font-bold">⚠</span> Investments in securities market are subject to market risks.
              <span className="block text-slate-500 text-xs mt-1">
                Read all related documents carefully before investing.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-400 order-3">
            <Link href="/disclaimer" className="hover:text-emerald-300 transition">Disclaimer</Link>
            <span className="text-slate-700">•</span>
            <Link href="/compliance" className="hover:text-emerald-300 transition">Compliance</Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact" className="hover:text-emerald-300 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
