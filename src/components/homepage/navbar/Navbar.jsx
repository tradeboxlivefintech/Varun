'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { Mail, Phone } from 'lucide-react';
import Logo from '@/components/brand/Logo';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'COMPLIANCE', href: '/compliance' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'BLOG', href: '/blog' },
  { name: 'EVENTS', href: '/events' },
];

const announcements = [
  '📈 SEBI Registered Research Analyst — INH000024833',
  '📊 6+ Years of Equity Market Research Experience',
  '🔔 Subscribe for disciplined, research-driven market insights',
  '📞 Reach Compliance Officer: 9084662719',
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Marquee announcement */}
     

      {/* Top contact strip */}
      

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center  cursor-pointer text-left"
            >
              <Logo size="md" imgSize={90} className='mt-4' />
              <div className="hidden sm:block">
                <h1 className="text-sm md:text-base font-bold bg-gradient-to-r from-sky-700 to-emerald-600 bg-clip-text text-transparent leading-tight">
                  SEBI RA Varun Kumar
                </h1>
                <h2 className="text-xs md:text-sm text-slate-600 font-semibold tracking-wider mt-0.5">
                  INH000024833 · Research Analyst
                </h2>
              </div>
              <div className="sm:hidden">
                <h1 className="text-xs font-bold bg-gradient-to-r from-sky-700 to-emerald-600 bg-clip-text text-transparent">
                  Varun Kumar RA
                </h1>
                <h2 className="text-[10px] text-slate-500 font-semibold tracking-wider">
                  INH000024833
                </h2>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                      active
                        ? 'text-white'
                        : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-sky-50 to-emerald-50 hover:from-sky-100 hover:to-emerald-100 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5 text-slate-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>
 <div className="w-full bg-gradient-to-r from-sky-700 via-teal-600 to-emerald-600 py-2 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i} className="mx-6 text-xs sm:text-sm text-white font-medium">
              {a}
              <span className="mx-3 text-white/60">•</span>
            </span>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-sky-700 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-emerald-600 to-transparent pointer-events-none" />
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-emerald-50">
              <div className="flex items-center gap-3">
                <Logo size="sm" />
                <div>
                  <h2 className="font-bold text-slate-800">Varun Kumar</h2>
                  <p className="text-xs text-sky-700 font-semibold">SEBI RA · INH000024833</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block mb-2 px-4 py-3 rounded-lg transition ${
                      active
                        ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="px-4 mt-4">
              <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl p-4 border border-slate-200">
                <h3 className="font-bold text-slate-800 text-sm mb-3">Get in Touch</h3>
                <a
                  href="mailto:varunkumartimes@gmail.com"
                  className="flex items-center gap-2 text-sky-700 text-xs hover:text-sky-800 mb-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">varunkumartimes@gmail.com</span>
                </a>
                <a
                  href="tel:+919084662719"
                  className="flex items-center gap-2 text-emerald-700 text-xs hover:text-emerald-800"
                >
                  <Phone className="w-4 h-4" />
                  +91 9084662719
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
