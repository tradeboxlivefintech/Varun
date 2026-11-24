import React from 'react';

export const metadata = {
  title: 'Grievance Redressal / Escalation Matrix | SEBI RA Varun Kumar',
  description:
    'Grievance Redressal and Escalation Matrix for SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function EscalationMatrixPage() {
  const matrixData = [
    {
      designation: 'Customer Care',
      name: 'Same as PO',
      address: 'Same as PO',
      contact: 'Same as PO',
      email: 'Same as PO',
      hours: 'Same as PO',
    },
    {
      designation: 'Head of Customer Care',
      name: 'Same as PO',
      address: 'Same as PO',
      contact: 'Same as PO',
      email: 'Same as PO',
      hours: 'Same as PO',
    },
    {
      designation: 'Compliance Officer',
      name: 'Same as PO',
      address: 'Same as PO',
      contact: 'Same as PO',
      email: 'Same as PO',
      hours: 'Same as PO',
    },
    {
      designation: 'CEO',
      name: 'Same as PO',
      address: 'Same as PO',
      contact: 'Same as PO',
      email: 'Same as PO',
      hours: 'Same as PO',
    },
    {
      designation: 'Principal Officer',
      name: 'VARUN KUMAR',
      address:
        'E2 94 Mdda Colony Kedarpuram Near Shammi Diary, Dehradun, Uttarakhand, 248001',
      contact: '+91 90846  62719',
      email: 'varunkumartimes@gmail.com',
      hours:
        '10:00 a.m. to 6:00 p.m. (Monday to Friday, except public holidays)',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 text-slate-800 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          Grievance Redressal/ Escalation Matrix
        </h1>

        <div className="overflow-x-auto border border-slate-300 rounded-lg">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-300">
              <tr>
                <th className="p-3 border-r border-slate-200">Details of designation</th>
                <th className="p-3 border-r border-slate-200">Contact Person Name</th>
                <th className="p-3 border-r border-slate-200">Address where the physical address location</th>
                <th className="p-3 border-r border-slate-200">Contact No.</th>
                <th className="p-3 border-r border-slate-200">Email-ID</th>
                <th className="p-3">Working hours when complainant can call</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {matrixData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 border-r border-slate-200 font-medium text-slate-900">{row.designation}</td>
                  <td className="p-3 border-r border-slate-200">{row.name}</td>
                  <td className="p-3 border-r border-slate-200">{row.address}</td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.contact.startsWith('+') ? (
                      <a href={`tel:${row.contact.replace(/\s+/g, '')}`} className="text-sky-700 hover:underline">
                        {row.contact}
                      </a>
                    ) : (
                      row.contact
                    )}
                  </td>
                  <td className="p-3 border-r border-slate-200">
                    {row.email.includes('@') ? (
                      <a href={`mailto:${row.email}`} className="text-sky-700 hover:underline">
                        {row.email}
                      </a>
                    ) : (
                      row.email
                    )}
                  </td>
                  <td className="p-3 text-xs sm:text-sm">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-700 pt-2">
          <p>
            The above-mentioned details would facilitate the complainants to approach the concerned Research Analyst before filing complaint to SEBI. For more details go to: -
          </p>
          <p>
            <a
              href="https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline font-medium break-all"
            >
              https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41
            </a>
          </p>
          <p>
            We aim to resolve all grievances within 15 working days from the date of receipt.
          </p>
          <p>
            If your grievance is not resolved within this timeframe, you can escalate it to SEBI’s SCORES Platform (SEBI Complaints Redress System).
          </p>
          <p>
            <strong>SCORES Portal:</strong>{' '}
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">
              scores.sebi.gov.in
            </a>
            .
          </p>
          <p>
            In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal.
          </p>
          <p>
            <strong>ODR Portal:</strong>{' '}
            <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">
              smartodr.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
