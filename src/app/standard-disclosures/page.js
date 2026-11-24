import React from 'react';

export const metadata = {
  title: 'STANDARD DISCLOSURES | SEBI RA Varun Kumar',
  description:
    'Standard Disclosures prepared in accordance with SEBI (Research Analyst) Regulations, 2014 by Varun Kumar (INH000024833).',
};

export default function StandardDisclosuresPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          STANDARD DISCLOSURES
        </h1>

        <p className="text-slate-700">
          The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analyst) Regulations, 2014.
        </p>

        <p className="text-slate-700">
          For the purpose of this disclosure document, Research Analyst is Varun Kumar (Research Analyst), (hereinafter referred to as “Research Analyst” or “RA”)
        </p>

        {/* History, Present business and Background */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">History, Present business and Background</h2>
          <p className="text-slate-700">
            Varun Kumar (Research Analyst) (hereinafter referred to as the “Research Analyst” or “RA”) is registered as a Research Analyst with SEBI under the SEBI (Research Analysts) Regulations, 2014, having Registration No. INH000024833.
          </p>
          <p className="font-semibold text-slate-900">Below are the brief details:</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-1.5 text-sm">
            <p><strong>Research Analyst Name:</strong> VARUN KUMAR</p>
            <p><strong>Type of Registration:</strong> Individual</p>
            <p><strong>Compliance Officer Name:</strong> VARUN KUMAR</p>
            <p><strong>SEBI Registration Number:</strong> INH000024833</p>
            <p><strong>BSE Enlistment Number:</strong> 6934</p>
            <p><strong>Address:</strong> E2 94 Mdda Colony Kedarpuram Near Shammi Diary, Dehradun, Uttarakhand, 248001</p>
            <p>
              <strong>Email ID:</strong>{' '}
              <a href="mailto:varunkumartimes@gmail.com" className="text-sky-700 underline">
                varunkumartimes@gmail.com
              </a>
            </p>
            <p>
              <strong>Contact No.:</strong>{' '}
              <a href="tel:+919084662719" className="text-sky-700 underline">
                +91 9084662719
              </a>
            </p>
          </div>
          <p className="text-slate-700">
            The Research Analyst is engaged in offering research recommendation to the clients in the Indian Securities Market. Its scope of services is restricted to providing the independent research services and is in no way involve in offering any Investment Advice, Portfolio Management or any other ancillary services.
          </p>
          <p className="text-slate-700">
            The Research Analyst does not offer any execution or distribution services.
          </p>
        </section>

        {/* Terms and conditions of Research Services */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Terms and conditions of Research Services</h2>
          <p className="text-slate-700">
            The Research Services will be limited to providing independent research and shall not be involved in any portfolio allocation services, execution services or distribution services.
          </p>
          <p className="text-slate-700">
            The Research Analyst has exercised due diligence in checking the correctness and authenticity of the information
          </p>
        </section>

        {/* Disciplinary history */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Disciplinary history</h2>
          <p className="text-slate-700">
            No penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.
          </p>
          <p className="text-slate-700">
            There are no pending material litigations or legal proceedings, findings of inspections or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst.
          </p>
        </section>

        {/* Details of its associates */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Details of its associates</h2>
          <p className="text-slate-700">
            The details of associates shall be provided as and when required.
          </p>
        </section>

        {/* Disclosures with respect to Research and Recommendations Services */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">
            Disclosures with respect to Research and Recommendations Services
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.</li>
            <li>There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.</li>
            <li>Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.</li>
            <li>Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.</li>
            <li>Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.</li>
            <li>Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.</li>
            <li>Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.</li>
            <li>The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.</li>
            <li>Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.</li>
            <li>Research Analysts has not been engaged in market making activity of the subject company.</li>
          </ul>
        </section>

        <p className="text-slate-700">
          In case of any query or issue you may connect to us{' '}
          <a href="mailto:varunkumartimes@gmail.com" className="text-sky-700 underline font-medium">
            varunkumartimes@gmail.com
          </a>
          .
        </p>

        {/* Disclaimer & Standard warning */}
        <section className="border-t border-slate-200 pt-6 space-y-2 text-sm text-slate-700">
          <p>
            <strong>Disclaimer:</strong> Registration granted by SEBI, enlistment of RA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <p>
            <strong>Standard warning:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
        </section>
      </div>
    </div>
  );
}
