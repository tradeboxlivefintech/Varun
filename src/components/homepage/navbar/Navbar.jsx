'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import Logo from '@/components/brand/Logo';

const legalItems = [
  { name: 'Complaints Data', href: '/complaints-data' },
  { name: 'Complaints Redressal', href: '/complaint-redressal' },
  { name: 'Escalation Matrix', href: '/escalation-matrix' },
  { name: 'Investor Charter', href: '/investor-charter' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Terms & Conditions (MITC)', href: '/terms-and-conditions' },
  { name: 'Standard Disclosures', href: '/standard-disclosures' },
  { name: 'AML Policy', href: '/aml-policy' },
];

const announcements = [
  '📈 SEBI Registered Research Analyst — INH000024833',
  '📊 10+ Years of Equity Market Research Experience',
  '🔔 Subscribe for disciplined, research-driven market insights',
  '📞 Reach Compliance Officer: 9084662719',
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const [isMobileLegalOpen, setIsMobileLegalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLegalDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileLegalOpen(false);
  };

  const isLegalActive = () => {
    return legalItems.some((item) => pathname.startsWith(item.href));
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
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
              className="flex items-center cursor-pointer text-left"
            >
              <Logo size="md" imgSize={90} className="mt-4" />
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
              <Link
                href="/"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">HOME</span>
              </Link>

              <Link
                href="/about"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/about')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/about') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">ABOUT</span>
              </Link>

              <Link
                href="/services"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/services')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/services') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">SERVICES</span>
              </Link>

              <Link
                href="/compliance"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/compliance')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/compliance') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">COMPLIANCE</span>
              </Link>

              {/* Legal Dropdown */}
              <div
                className="relative group"
                ref={dropdownRef}
              >
                <button
                  type="button"
                  onClick={() => setIsLegalDropdownOpen((prev) => !prev)}
                  className={`relative flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer ${
                    isLegalActive() || isLegalDropdownOpen
                      ? 'text-white'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                  }`}
                  aria-expanded={isLegalDropdownOpen}
                >
                  {(isLegalActive() || isLegalDropdownOpen) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg pointer-events-none" />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 select-none pointer-events-none">
                    LEGAL
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isLegalDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'
                      }`}
                    />
                  </span>
                </button>

                {/* Dropdown Menu Container */}
                <div
                  className={`absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200 ${
                    isLegalDropdownOpen
                      ? 'opacity-100 visible pointer-events-auto translate-y-0'
                      : 'opacity-0 invisible pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0'
                  }`}
                >
                  <div className="rounded-2xl bg-white border border-slate-200/90 shadow-2xl py-2">
                    <div className="space-y-0.5">
                      {legalItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsLegalDropdownOpen(false)}
                            className={`block px-4 py-2.5 text-xs xl:text-sm font-medium transition cursor-pointer ${
                              active
                                ? 'bg-sky-50 text-sky-700 font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/blog"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/blog')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/blog') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">BLOG</span>
              </Link>

              <Link
                href="/events"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/events')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/events') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">EVENTS</span>
              </Link>

              <Link
                href="/contact"
                className={`relative px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isActive('/contact')
                    ? 'text-white'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {isActive('/contact') && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-lg" />
                )}
                <span className="relative z-10">CONTACT</span>
              </Link>
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

      {/* Marquee ticker */}
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

      {/* Mobile Drawer */}
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

            <div className="p-4 space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                HOME
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/about')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                ABOUT
              </Link>

              <Link
                href="/services"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/services')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                SERVICES
              </Link>

              <Link
                href="/compliance"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/compliance')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                COMPLIANCE
              </Link>

              {/* Mobile Legal Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileLegalOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    isLegalActive()
                      ? 'bg-sky-50 text-sky-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>LEGAL</span>
                  {isMobileLegalOpen ? (
                    <FiChevronUp className="w-4 h-4 text-sky-700" />
                  ) : (
                    <FiChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>

                {isMobileLegalOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-200/60">
                    {legalItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block px-3 py-2 text-xs rounded-md transition ${
                          pathname === item.href
                            ? 'bg-sky-600 text-white font-semibold'
                            : 'text-slate-700 hover:text-sky-700 hover:bg-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/blog')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                BLOG
              </Link>

              <Link
                href="/events"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/events')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                EVENTS
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive('/contact')
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                CONTACT
              </Link>
            </div>

            <div className="px-4 mt-4 mb-6">
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
