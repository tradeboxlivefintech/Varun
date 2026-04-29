'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ShieldCheck } from 'lucide-react';

const contactCards = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'varunkumartimes@gmail.com',
    href: 'mailto:varunkumartimes@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 9084662719',
    href: 'tel:+919084662719',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    value:
      'E2 94 MDDA Colony, Kedarpuram, Near Shammy Diary, Dehradun - 248001, Uttarakhand',
    href: '#',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:varunkumartimes@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      {/* Header */}
     

      {/* Contact section */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="block bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-sky-200 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      {c.label}
                    </div>
                    <div className="text-slate-800 text-sm break-words">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-gradient-to-br from-sky-700 via-teal-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Compliance Officer</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="opacity-80">Name: </span>Varun Kumar
                </div>
                <div>
                  <span className="opacity-80">Email: </span>
                  <a className="underline" href="mailto:varunkumartimes@gmail.com">
                    varunkumartimes@gmail.com
                  </a>
                </div>
                <div>
                  <span className="opacity-80">Phone: </span>
                  <a className="underline" href="tel:+919084662719">
                    +91 9084662719
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-600 text-sm mb-6">
                I respond within 1–2 business days. Please share enough context for me to be helpful.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell me what you'd like to discuss..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition transform hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2">
                  Opening your email client. If nothing happened, please email us at
                  varunkumartimes@gmail.com directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
