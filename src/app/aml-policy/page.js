import React from 'react';

export const metadata = {
  title: 'Anti-Money Laundering (AML) Policy | SEBI RA Varun Kumar',
  description:
    'Anti-Money Laundering (AML) Policy for SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function AMLPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          Anti-Money Laundering (AML) Policy
        </h1>

        {/* Introduction */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Introduction</h2>
          <p className="text-slate-700">
            This AML Policy is designed specifically for SEBI-registered Research Analysts (RAs) who provide research services. RAs do not handle client funds or execute transactions. They onboard clients through signed Terms &amp; Conditions and perform KYC via PAN verification using the KRA system. This policy aligns with SEBI Master Circular SEBI/HO/MIRSD/MIRSD-SEC-5/P/CIR/2023/022 dated February 03, 2023, and its subsequent updates.
          </p>
        </section>

        {/* Scope */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Scope</h2>
          <p className="text-slate-700">
            This policy applies to all activities of the Research Analyst business, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Onboarding clients (one-to-many research services)</li>
            <li>Verifying client identity via PAN through the KRA system</li>
            <li>Delivering research reports and recommendations</li>
          </ul>
          <p className="text-slate-700 font-medium">
            Research Analysts do not hold or manage client accounts or funds.
          </p>
        </section>

        {/* Definitions */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Definitions</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>CDD:</strong> Client Due Diligence</li>
            <li><strong>EDD:</strong> Enhanced Due Diligence</li>
            <li><strong>PEP:</strong> Politically Exposed Person</li>
            <li><strong>FIU-IND:</strong> Financial Intelligence Unit – India</li>
            <li><strong>STR:</strong> Suspicious Transaction Report</li>
            <li><strong>KRA:</strong> KYC Registration Agency</li>
          </ul>
        </section>

        {/* Governance and Responsibilities */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Governance and Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Designated Director:</strong> Ensures overall AML compliance and policy approval.</li>
            <li><strong>Principal Officer:</strong> Individual RA or Principal officer in case of non-individual RA responsible for reporting suspicious activities to FIU-IND.</li>
            <li><strong>Compliance Officer:</strong> Implements CDD processes, monitors client interactions, and maintains records.</li>
          </ul>
        </section>

        {/* AML/CFT Policies and Procedures */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">AML/CFT Policies and Procedures</h2>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Client Acceptance and Risk Categorization</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Clients must sign the RA’s Terms &amp; Conditions (Including MITC) before onboarding.</li>
              <li>Perform CDD via PAN authentication through a registered KRA system.</li>
              <li>Classify clients based on plan and nature of plan subscribed. This does not amount to risk profiling. Recommendation plans are made based on risk involved in securities being given as recommendations.</li>
              <li>Apply EDD for PEPs, high-risk geographies, and unusual engagement requests.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Client Due Diligence (CDD)</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Verify client identity using PAN via KRA system.</li>
              <li>Record client name, PAN, contact details, and engagement type.</li>
              <li>Identify and document any beneficial owners if the client is an entity.</li>
              <li>Understand the purpose and expected usage of research services.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Reliance on Third Parties</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>RAs may rely on KRA systems for PAN verification under CDD Rules.</li>
              <li>Ultimate responsibility for CDD remains with the RA.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Risk Assessment</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Conduct periodic risk reviews recommendation plans being offered.</li>
              <li>Update risk categories when client circumstances or regulations change.</li>
              <li>Document assessment results for audit and regulatory review.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Monitoring and Reporting</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Monitor client interactions and requests for signs of irregular or illicit use of research.</li>
              <li>Report any suspicious client behavior or requests to the Principal Officer/ Individual RA.</li>
              <li>File STRs with FIU-IND within 7 days of detecting suspicious activity.</li>
              <li>Maintain confidentiality to prevent tipping-off.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Record Keeping</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Retain signed T&amp;C documents, PAN KYC records, and client correspondence for at least 5 years after relationship ends.</li>
              <li>Keep a log of STRs and related documents for 5 years from the date of reporting.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Sanctions Screening</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Screen client lists against UN and Indian sanctions databases before onboarding.</li>
              <li>Decline service to sanctioned individuals or entities and report to relevant authorities.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Training and Awareness</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Provide annual AML training for all staff involved in client onboarding and research dissemination.</li>
              <li>Update training materials to reflect regulatory changes and emerging risks.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900">Policy Review</h3>
            <p className="text-slate-700">
              This policy shall be reviewed annually or upon significant regulatory updates and re-approved by the Designated Director.
            </p>
          </div>
        </section>

        {/* Sign-off */}
        <section className="border-t border-slate-200 pt-6 space-y-1 text-sm text-slate-800">
          <p className="font-bold">For VARUN KUMAR</p>
          <p>Research Analyst</p>
          <p>SEBI Reg. No.: INH000024833</p>
          <p>BSE Enlst. No.: 6934</p>
          <p className="pt-3">Sd/-</p>
          <p className="font-bold">VARUN KUMAR</p>
          <p>Research Analyst</p>
        </section>
      </div>
    </div>
  );
}
