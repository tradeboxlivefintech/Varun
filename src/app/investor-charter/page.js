import React from 'react';

export const metadata = {
  title: 'INVESTOR CHARTER IN RESPECT OF RAs | SEBI RA Varun Kumar',
  description:
    'Investor Charter in respect of Research Analysts by SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function InvestorCharterPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-slate-800 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          INVESTOR CHARTER IN RESPECT OF RAs
        </h1>

        {/* Vision and Mission */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Vision and Mission Statements for investors
          </h2>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Vision</h3>
            <p className="text-sm sm:text-base text-slate-700 mt-1">
              Invest with knowledge & safety.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Mission</h3>
            <p className="text-sm sm:text-base text-slate-700 mt-1">
              Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
            </p>
          </div>
        </section>

        {/* Details of business transacted */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            Details of business transacted by the Research Analyst with respect to the investors
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li>To publish research report based on the research activities of the RA</li>
            <li>To provide an independent unbiased view on securities.</li>
            <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
            <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
            <li>To conduct audit annually</li>
            <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
            <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
          </ul>
        </section>

        {/* Details of services provided */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Details of services provided to investors (No Indicative Timelines)
          </h2>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Onboarding of Clients:</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
              <li>Sharing of terms and conditions of research services</li>
              <li>Completing KYC of fee-paying clients</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Disclosure to Clients:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
              <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
              <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
              <li>To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures</li>
              <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
              <li>To distribute research reports and recommendations to the clients without discrimination.</li>
              <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
              <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
              <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
              <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
              <li>To treat all clients with honesty and integrity</li>
              <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.</li>
            </ul>
          </div>
        </section>

        {/* Details of grievance redressal mechanism */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Details of grievance redressal mechanism and how to access it
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Investor can lodge complaint/grievance against Research Analyst in the following ways:
          </p>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Mode of filing the complaint with research analyst</h3>
            <p className="text-sm sm:text-base text-slate-700">
              In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">
              Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)
            </h3>
            <p className="text-sm sm:text-base text-slate-700">
              SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">
                https://scores.sebi.gov.in
              </a>
              )
            </p>
            <p className="text-sm sm:text-base text-slate-700 font-semibold">
              Two level review for complaint/grievance against Research Analyst:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-slate-700">
              <li>First review done by designated body (RAASB)</li>
              <li>Second review done by SEBI</li>
            </ul>
            <p className="text-sm sm:text-base text-slate-700">
              Email to designated email ID of RAASB
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-700">
            If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.
          </p>

          <div className="space-y-1">
            <p className="text-sm sm:text-base text-slate-700 font-semibold">
              With regard to physical complaints, investors may send their complaints to:
            </p>
            <p className="text-sm sm:text-base text-slate-700">
              Office of Investor Assistance and Education,<br />
              Securities and Exchange Board of India,<br />
              SEBI Bhavan, Plot No. C4-A, ‘G’ Block,<br />
              Bandra-Kurla Complex, Bandra (E),<br />
              Mumbai - 400 051
            </p>
          </div>
        </section>

        {/* Rights of investors */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">Rights of investors</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
            <li>Right to Privacy and Confidentiality</li>
            <li>Right to Transparent Practices</li>
            <li>Right to fair and Equitable Treatment</li>
            <li>Right to Adequate Information</li>
            <li>Right to Initial and Continuing Disclosure -Right to receive information about all the statutory and regulatory disclosures</li>
            <li>Right to Fair & True Advertisement</li>
            <li>Right to Awareness about Service Parameters and Turnaround Times</li>
            <li>Right to be informed of the timelines for each service</li>
            <li>Right to be Heard and Satisfactory Grievance Redressal</li>
            <li>Right to have timely redressal</li>
            <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
            <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
            <li>Additional Rights to vulnerable consumers - Right to get access to services in a suitable manner even if differently abled</li>
            <li>Right to provide feedback on the financial products and services used</li>
            <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
          </ul>
        </section>

        {/* Expectations from investors */}
        <section className="space-y-5">
          <h2 className="text-xl font-bold text-slate-900">
            Expectations from the investors (Responsibilities of investors)
          </h2>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Do’s</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Always deal with SEBI registered Research Analyst.</li>
              <li>Ensure that the Research Analyst has a valid registration certificate.</li>
              <li>
                Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link:{' '}
                <a
                  href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline font-medium break-all"
                >
                  https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
                </a>
              </li>
              <li>Always pay attention towards disclosures made in the research reports before investing.</li>
              <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
              <li>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
              <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
              <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high-risk financial products and services.</li>
              <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
              <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
              <li>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.</li>
              <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Don’ts</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
              <li>Do not provide funds for investment to the Research Analyst.</li>
              <li>Don’t fall prey to luring advertisements or market rumors.</li>
              <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
              <li>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
