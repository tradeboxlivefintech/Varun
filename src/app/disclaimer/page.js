import { ShieldAlert, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer | SEBI RA Varun Kumar',
};

const blocks = [
  {
    title: 'About the Analyst',
    text: 'This website is operated by Varun Kumar, a SEBI Registered Research Analyst (Registration No. INH000024833, Type: Individual). The analyst has 6+ years of equity market experience and provides research-driven, transparent and disciplined market insights.',
  },
  {
    title: 'Nature of Information',
    text: 'All content on this website is for informational and educational purposes only. It does not constitute personalized investment advice, an offer or solicitation to buy or sell any security, or a guarantee of any specific outcome. Readers must independently evaluate suitability for their own circumstances.',
  },
  {
    title: 'Market Risk',
    text: 'Investments in securities market are subject to market risks. The value of investments can rise or fall, and past performance is not indicative of future results. Read all related documents carefully before investing.',
  },
  {
    title: 'No Guaranteed Returns',
    text: 'SEBI registration, NISM certification, BASL membership or any other regulatory affiliation in no way guarantees performance of the intermediary or assures any returns to investors.',
  },
  {
    title: 'Conflicts of Interest',
    text: 'The analyst may, from time to time, hold positions in securities mentioned. Any material conflict of interest will be disclosed in line with SEBI (Research Analysts) Regulations, 2014.',
  },
  {
    title: 'No Tips / No Assured Calls',
    text: 'The analyst does not provide tips, assured calls, or guaranteed-return services. Any communication claiming such guarantees in the analyst’s name is fraudulent and should be reported.',
  },
  {
    title: 'Third-Party Content',
    text: 'External links or third-party content shared on this website are for reference only. The analyst does not endorse and is not responsible for the accuracy or completeness of such third-party content.',
  },
  {
    title: 'Jurisdiction',
    text: 'This website and its content are intended for residents of India. Any disputes arising out of use of this site shall be subject to the exclusive jurisdiction of the courts of Dehradun, Uttarakhand.',
  },
];

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50">
      

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-800 leading-relaxed">
                <span className="font-semibold">Investments in securities market are subject to market risks.</span>{' '}
                Read all related documents carefully before investing. SEBI registration, BASL membership
                and NISM certification do not guarantee performance or returns.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {blocks.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <h2 className="font-bold text-slate-900 text-lg mb-2">{b.title}</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-xs text-slate-500 text-center">
            Last updated: April 2026 · SEBI Reg. No. INH000024833
          </div>
        </div>
      </section>
    </div>
  );
}
