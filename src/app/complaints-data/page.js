import React from 'react';

export const metadata = {
  title: 'Complaints Data | SEBI RA Varun Kumar',
  description:
    'Complaints Data and disposal trends for SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function ComplaintsDataPage() {
  const currentMonthData = [
    {
      sno: '1',
      source: 'Directly from Investors',
      pendingLastMonth: '0',
      received: '0',
      resolved: '0',
      totalPending: '0',
      pendingOver3Months: '0',
      avgResolutionTime: '0',
    },
    {
      sno: '2',
      source: 'SEBI (SCORES)',
      pendingLastMonth: '0',
      received: '0',
      resolved: '0',
      totalPending: '0',
      pendingOver3Months: '0',
      avgResolutionTime: '0',
    },
    {
      sno: '3',
      source: 'Other Sources (if any)',
      pendingLastMonth: '0',
      received: '0',
      resolved: '0',
      totalPending: '0',
      pendingOver3Months: '0',
      avgResolutionTime: '0',
    },
  ];

  const monthlyTrend = [
    { sno: '1', month: 'April 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
    { sno: '2', month: 'May 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
    { sno: '3', month: 'June 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
    { sno: '4', month: 'July 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
    { sno: '5', month: 'August 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
    { sno: '6', month: 'September 2026', carried: '0', received: '0', resolved: '0', pending: '0' },
  ];

  const annualTrend = [
    { sno: '1', year: '2025-26', carried: '0', received: '0', resolved: '0', pending: '0' },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10 text-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
            Complaints Data
          </h1>
          <h2 className="text-lg font-semibold text-slate-700 mt-6 mb-4">
            Data for the month ending – October 2026
          </h2>

          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-300">
                <tr>
                  <th className="p-3 border-r border-slate-200">Sr. No.</th>
                  <th className="p-3 border-r border-slate-200">Received from</th>
                  <th className="p-3 border-r border-slate-200 text-center">Pending at the end of last month</th>
                  <th className="p-3 border-r border-slate-200 text-center">Received</th>
                  <th className="p-3 border-r border-slate-200 text-center">Resolved*</th>
                  <th className="p-3 border-r border-slate-200 text-center">Total Pending#</th>
                  <th className="p-3 border-r border-slate-200 text-center">Pending complaints &gt; 3 months</th>
                  <th className="p-3 text-center">Average Resolution time^(in days)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {currentMonthData.map((row) => (
                  <tr key={row.sno} className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-200 text-center">{row.sno}</td>
                    <td className="p-3 border-r border-slate-200">{row.source}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.pendingLastMonth}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.received}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.resolved}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.totalPending}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.pendingOver3Months}</td>
                    <td className="p-3 text-center">{row.avgResolutionTime}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold text-slate-900 border-t border-slate-300">
                  <td className="p-3 border-r border-slate-200"></td>
                  <td className="p-3 border-r border-slate-200">Grand Total</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
            <p>
              Number of complaints received during month against the RA due to impersonation by some other entity: NA
            </p>
            <p>
              * Inclusive of complaints of previous months resolved in the current month.
            </p>
            <p>
              # Inclusive of complaints pending as on the last day of the month.
            </p>
            <p>
              ^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
            </p>
          </div>
        </div>

        {/* Trend of monthly disposal */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Trend of monthly disposal of complaints
          </h2>

          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-300">
                <tr>
                  <th className="p-3 border-r border-slate-200">Sr. No.</th>
                  <th className="p-3 border-r border-slate-200">Month</th>
                  <th className="p-3 border-r border-slate-200 text-center">Carried forward from previous month</th>
                  <th className="p-3 border-r border-slate-200 text-center">Received</th>
                  <th className="p-3 border-r border-slate-200 text-center">Resolved*</th>
                  <th className="p-3 text-center">Pending#</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {monthlyTrend.map((row) => (
                  <tr key={row.sno} className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-200 text-center">{row.sno}</td>
                    <td className="p-3 border-r border-slate-200">{row.month}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.carried}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.received}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.resolved}</td>
                    <td className="p-3 text-center">{row.pending}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold text-slate-900 border-t border-slate-300">
                  <td className="p-3 border-r border-slate-200"></td>
                  <td className="p-3 border-r border-slate-200">Grand Total</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-1">
            <p>* Inclusive of complaints of previous months resolved in the current month</p>
            <p># Inclusive of complaints pending as on the last day of the month</p>
          </div>
        </div>

        {/* Trend of annual disposal */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Trend of annual disposal of complaints
          </h2>

          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-300">
                <tr>
                  <th className="p-3 border-r border-slate-200">Sr. No.</th>
                  <th className="p-3 border-r border-slate-200">Year</th>
                  <th className="p-3 border-r border-slate-200 text-center">Carried forward from previous year</th>
                  <th className="p-3 border-r border-slate-200 text-center">Received</th>
                  <th className="p-3 border-r border-slate-200 text-center">Resolved*</th>
                  <th className="p-3 text-center">Pending#</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {annualTrend.map((row) => (
                  <tr key={row.sno} className="hover:bg-slate-50">
                    <td className="p-3 border-r border-slate-200 text-center">{row.sno}</td>
                    <td className="p-3 border-r border-slate-200">{row.year}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.carried}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.received}</td>
                    <td className="p-3 border-r border-slate-200 text-center">{row.resolved}</td>
                    <td className="p-3 text-center">{row.pending}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold text-slate-900 border-t border-slate-300">
                  <td className="p-3 border-r border-slate-200"></td>
                  <td className="p-3 border-r border-slate-200">Grand Total</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 border-r border-slate-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-1">
            <p>* Inclusive of complaints of previous months resolved in the current month</p>
            <p># Inclusive of complaints pending as on the last day of the month</p>
          </div>
        </div>

        {/* Note verbatim */}
        <div className="border-t border-slate-200 pt-6 text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>Note:</strong> For any service-related assistance or grievances you can reach out at{' '}
            <a href="mailto:varunkumartimes@gmail.com" className="text-sky-700 underline font-medium">
              varunkumartimes@gmail.com
            </a>
            . The client may expect a reply within 15 working days of approaching the Research Analyst. If you are unsatisfied with the response then you can escalate your issue to SEBI SCORES.
          </p>
        </div>
      </div>
    </div>
  );
}
