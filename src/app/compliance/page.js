import Link from 'next/link';
import { ShieldCheck, FileText, Mail, Phone, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Compliance & Grievance | SEBI RA Varun Kumar',
};

const rows = [
  ['Name of Research Analyst', 'Varun Kumar'],
  ['Type of Registration', 'Individual'],
  ['SEBI Registration No.', 'INH000024833'],
  ['Registered Office', 'E2 94 MDDA Colony, Kedarpuram, Near Shammy Diary, Dehradun - 248001, Uttarakhand'],
  ['Telephone', '+91 9084662719'],
  ['Email', 'varunkumartimes@gmail.com'],
  ['Compliance Officer Name', 'Varun Kumar'],
  ['Compliance Officer Email', 'varunkumartimes@gmail.com'],
  ['Compliance Officer Phone', '+91 9084662719'],
];

const charterPoints = [
  {
    title: 'Vision',
    text: 'To provide research-driven, transparent and disciplined market insights that help investors make informed decisions.',
  },
  {
    title: 'Mission',
    text: 'To deliver high-quality equity research and investor education that complies with SEBI Research Analyst Regulations and prioritizes investor protection.',
  },
  {
    title: 'Investor Rights',
    text: 'Right to fair and transparent research, right to be informed of all conflicts of interest, and right to timely grievance redressal.',
  },
  {
    title: 'Investor Responsibilities',
    text: 'Read disclosures carefully, evaluate suitability, and remember that investments in securities market are subject to market risks.',
  },
];

const grievanceSteps = [
  {
    step: '1',
    title: 'Reach out directly',
    text: 'Email varunkumartimes@gmail.com or call +91 9084662719 with your concern. Most issues are resolved within a few working days.',
  },
  {
    step: '2',
    title: 'Escalate to Compliance',
    text: 'If unresolved, escalate to the Compliance Officer (Varun Kumar) at varunkumartimes@gmail.com / +91 9084662719.',
  },
  {
    step: '3',
    title: 'SEBI SCORES',
    text: 'You may also lodge your grievance on SEBI SCORES portal (scores.sebi.gov.in) or use the SEBI ODR portal (smartodr.in).',
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      

      {/* Registration table */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-sky-50 to-emerald-50">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-700" />
                Registration Details
              </h2>
            </div>
            <div className="divide-y divide-slate-200">
              {rows.map(([k, v], i) => (
                <div key={i} className="grid sm:grid-cols-3 gap-2 sm:gap-6 px-6 py-4 text-sm">
                  <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs sm:col-span-1">
                    {k}
                  </div>
                  <div className="text-slate-800 sm:col-span-2 break-words">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Charter */}
      <section id="charter" className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Investor Charter</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {charterPoints.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grievance redressal */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Grievance Redressal</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {grievanceSteps.map((s, i) => (
              <div
                key={i}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white font-bold flex items-center justify-center shadow-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-sky-700 via-teal-600 to-emerald-600 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-4">Quick Contacts</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <a
                href="mailto:varunkumartimes@gmail.com"
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>varunkumartimes@gmail.com</span>
              </a>
              <a
                href="tel:+919084662719"
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 9084662719</span>
              </a>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
              >
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <span>SEBI SCORES Portal</span>
              </a>
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
              >
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <span>SEBI Smart ODR</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Risk note */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-slate-700">
          <p className="font-semibold text-slate-900 mb-1">Standard Risk Disclosure</p>
          <p>
            Investments in securities market are subject to market risks. Read all related documents
            carefully before investing. Registration granted by SEBI, membership of BASL and
            certification from NISM in no way guarantee performance of the intermediary or provide any
            assurance of returns to investors.
          </p>
          <div className="mt-4">
            <Link
              href="/disclaimer"
              className="inline-flex items-center gap-1 text-sky-700 font-semibold hover:text-emerald-700"
            >
              Read full disclaimer <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
