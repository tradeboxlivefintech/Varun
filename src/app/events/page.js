import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Video,
  GraduationCap,
  Mic,
} from 'lucide-react';

export const metadata = {
  title: 'Events | SEBI RA Varun Kumar',
  description:
    'Upcoming and past investor education events, webinars, and workshops by SEBI RA Varun Kumar.',
};

const upcoming = [
  {
    id: 'webinar-market-cycles-2026',
    title: 'Understanding Market Cycles & Long-Term Investing',
    type: 'Webinar',
    icon: <Video className="w-4 h-4" />,
    date: 'May 15, 2026',
    time: '6:30 PM – 8:00 PM IST',
    location: 'Online (Zoom)',
    seats: '500 seats',
    description:
      'A 90-minute live session on how to read market cycles, position portfolios, and avoid common timing traps. Includes Q&A.',
    gradient: 'from-sky-500 to-emerald-500',
    free: true,
  },
  {
    id: 'workshop-risk-management-jun',
    title: 'Risk-First Investing: A Hands-On Workshop',
    type: 'Workshop',
    icon: <GraduationCap className="w-4 h-4" />,
    date: 'June 08, 2026',
    time: '10:00 AM – 1:00 PM IST',
    location: 'Online (Zoom)',
    seats: '120 seats',
    description:
      'Build a personal risk framework — position sizing, stop discipline, and drawdown rules. Worksheets included.',
    gradient: 'from-amber-500 to-rose-500',
    free: false,
  },
  {
    id: 'live-portfolio-review-jul',
    title: 'Live Portfolio Review Session',
    type: 'Live Session',
    icon: <Mic className="w-4 h-4" />,
    date: 'July 05, 2026',
    time: '7:00 PM – 8:30 PM IST',
    location: 'Online (Zoom)',
    seats: '200 seats',
    description:
      'I review anonymised portfolios submitted by attendees and walk through diagnostic, concentration, and rebalancing thinking.',
    gradient: 'from-indigo-500 to-violet-500',
    free: true,
  },
];

const past = [
  {
    title: 'Reading Research Reports the Right Way',
    type: 'Webinar',
    date: 'March 22, 2026',
    attendees: '420+ attendees',
  },
  {
    title: 'Sector Rotation Basics for Long-Term Investors',
    type: 'Workshop',
    date: 'February 11, 2026',
    attendees: '180+ attendees',
  },
  {
    title: 'Valuation Discipline in Volatile Markets',
    type: 'Live Session',
    date: 'January 28, 2026',
    attendees: '310+ attendees',
  },
  {
    title: 'Markets 101 for First-Time Investors',
    type: 'Webinar',
    date: 'December 14, 2025',
    attendees: '550+ attendees',
  },
];

export default function EventsPage() {
  return (
    <div className="bg-slate-50">
      {/* Upcoming */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                  Upcoming
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Upcoming Events</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-emerald-700 transition"
            >
              Suggest a topic
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcoming.map((e) => (
              <article
                key={e.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-sky-200 transition group flex flex-col"
              >
                <div className={`relative h-32 bg-gradient-to-br ${e.gradient} p-5 flex items-start justify-between`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
                  <span className="relative inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {e.icon}
                    {e.type}
                  </span>
                  <span
                    className={`relative inline-block text-xs font-bold px-3 py-1 rounded-full ${
                      e.free
                        ? 'bg-white text-emerald-700'
                        : 'bg-slate-900/30 text-white border border-white/30'
                    }`}
                  >
                    {e.free ? 'Free' : 'Paid'}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-sky-700 transition">
                    {e.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 flex-1">{e.description}</p>

                  <div className="space-y-2 text-sm text-slate-700 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      {e.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      {e.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      {e.seats}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow transition"
                  >
                    Register Interest
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Past Events</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="divide-y divide-slate-200">
              {past.map((p, i) => (
                <div
                  key={i}
                  className="grid sm:grid-cols-12 gap-3 sm:gap-6 px-6 py-4 hover:bg-slate-50 transition"
                >
                  <div className="sm:col-span-6">
                    <h3 className="text-slate-900 font-semibold">{p.title}</h3>
                    <span className="inline-block mt-1 text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
                      {p.type}
                    </span>
                  </div>
                  <div className="sm:col-span-3 text-sm text-slate-600 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {p.date}
                  </div>
                  <div className="sm:col-span-3 text-sm text-slate-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    {p.attendees}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-700 via-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Want to be notified about new sessions?
              </h3>
              <p className="opacity-90">
                Drop a message and I&apos;ll add you to the early-access list for upcoming
                webinars and workshops.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 transition px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
