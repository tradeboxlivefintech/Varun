import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';

export const metadata = {
  title: 'Blog | SEBI RA Varun Kumar',
  description:
    'Research notes, market commentary, and investor education from SEBI RA Varun Kumar.',
};

const posts = [
  {
    slug: 'understanding-market-cycles',
    title: 'Understanding Market Cycles: A Long-Term Investor’s Guide',
    excerpt:
      'Markets move in cycles. Recognising where we are in a cycle is more useful than trying to predict the next move. Here’s how I think about cycles when reviewing portfolios.',
    category: 'Market View',
    date: 'April 18, 2026',
    readTime: '6 min read',
    author: 'Varun Kumar',
    gradient: 'from-sky-500 to-emerald-500',
  },
  {
    slug: 'risk-first-position-sizing',
    title: 'Risk-First Position Sizing for Equity Investors',
    excerpt:
      'Position sizing is the most underrated tool in an investor’s toolkit. Capital protection comes before return expectations — this post breaks down a simple framework.',
    category: 'Risk Management',
    date: 'April 04, 2026',
    readTime: '8 min read',
    author: 'Varun Kumar',
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    slug: 'reading-research-the-right-way',
    title: 'How to Read Research Reports the Right Way',
    excerpt:
      'A research report isn’t a buy/sell signal. Here’s how to extract the assumptions, valuation drivers, and risks instead of just the price target.',
    category: 'Investor Education',
    date: 'March 22, 2026',
    readTime: '5 min read',
    author: 'Varun Kumar',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    slug: 'sector-rotation-basics',
    title: 'Sector Rotation 101: What Actually Drives It',
    excerpt:
      'Sector rotation isn’t random. It tracks the macro cycle, earnings momentum, and liquidity. A primer for investors who want to think top-down.',
    category: 'Sector Outlook',
    date: 'March 08, 2026',
    readTime: '7 min read',
    author: 'Varun Kumar',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'valuation-in-volatile-markets',
    title: 'Valuation Discipline in Volatile Markets',
    excerpt:
      'Volatility is not the enemy of long-term investors — paying too much for growth is. A note on valuation discipline through market noise.',
    category: 'Equity Research',
    date: 'February 21, 2026',
    readTime: '9 min read',
    author: 'Varun Kumar',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
  {
    slug: 'sebi-ra-what-it-means',
    title: 'What “SEBI Registered Research Analyst” Actually Means',
    excerpt:
      'A short explainer on the SEBI RA framework, what an RA can and cannot do, and what investors should expect from research within the regulation.',
    category: 'Compliance',
    date: 'February 09, 2026',
    readTime: '4 min read',
    author: 'Varun Kumar',
    gradient: 'from-rose-500 to-pink-500',
  },
];

const categories = [
  'All',
  'Market View',
  'Risk Management',
  'Investor Education',
  'Sector Outlook',
  'Equity Research',
  'Compliance',
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="bg-slate-50">
      {/* Categories */}
      <section className="py-8 px-4 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <span
              key={c}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                c === 'All'
                  ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white border-transparent'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:text-sky-700'
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-sky-700" />
            <h2 className="text-xl font-bold text-slate-900">Featured</h2>
          </div>
          <article className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className={`relative bg-gradient-to-br ${featured.gradient} min-h-[260px] p-8 flex items-end`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
              <span className="relative inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {featured.author}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                {featured.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{featured.excerpt}</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-emerald-700 transition"
              >
                Read article
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article
                key={p.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-sky-200 transition group"
              >
                <div className={`relative h-40 bg-gradient-to-br ${p.gradient} p-5 flex items-end`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
                  <span className="relative inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {p.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-sky-700 transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-emerald-700 transition"
                  >
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Risk note */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-slate-700">
          <p className="font-semibold text-slate-900 mb-1">Standard Risk Disclosure</p>
          <p>
            Investments in securities market are subject to market risks. Read all related
            documents carefully before investing. Posts on this blog are for education and
            information only and do not constitute investment advice.
          </p>
        </div>
      </section>
    </div>
  );
}
