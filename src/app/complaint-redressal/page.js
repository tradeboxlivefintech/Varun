import React from 'react';

export const metadata = {
  title: 'Complaints Redressal | SEBI RA Varun Kumar',
  description:
    'Grievance redressal procedure for clients of SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function ComplaintRedressalPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-800 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          Complaints Redressal
        </h1>

        <p className="text-sm sm:text-base text-slate-700">
          In case the client has any suggestion, feedback or complaint in respect of the services provided, the process set out below may be followed.
        </p>

        {/* 1. Reaching us */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Reaching us</h2>
          <p className="text-sm text-slate-700">
            The client may contact us in person, by telephone, or in writing by email at:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm space-y-1.5">
            <p className="font-bold text-slate-900">VARUN KUMAR (RESEARCH ANALYST)</p>
            <p className="text-slate-700">E2 94 Mdda Colony Kedarpuram Near Shammi Diary, Dehradun, Uttarakhand, 248001</p>
            <p className="text-slate-700">
              Contact Number:{' '}
              <a href="tel:+919084662719" className="text-sky-700 font-medium hover:underline">
                +91 9084662719
              </a>
            </p>
            <p className="text-slate-700">
              Email:{' '}
              <a href="mailto:varunkumartimes@gmail.com" className="text-sky-700 font-medium hover:underline">
                varunkumartimes@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* 2. Information to be provided */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Information to be provided</h2>
          <p className="text-sm text-slate-700">
            To help us investigate and resolve your complaint as quickly as possible, please provide the following information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
            <li>Your name and address</li>
            <li>Account details</li>
            <li>A clear description of your concern or complaint</li>
            <li>Details of what you would like us to do to resolve the complaint</li>
            <li>Copies of any relevant documents or information</li>
            <li>An email address/ contact number on which we can contact you</li>
          </ul>
        </section>

        {/* 3. Resolution by us */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Resolution by us</h2>
          <p className="text-sm text-slate-700">
            If the client is not satisfied with the services and wishes to lodge a complaint, the client is requested to first speak with the authorised representative / research analyst. The complaint will be resolved on a best-effort basis within 15 working days from the date of receipt of the grievance.
          </p>
        </section>

        {/* 4. Escalation to SEBI – SCORES */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Escalation to SEBI – SCORES</h2>
          <p className="text-sm text-slate-700">
            If you are not satisfied with our response, you may lodge your grievance with SEBI on the SCORES platform at{' '}
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline font-medium"
            >
              https://scores.sebi.gov.in/
            </a>
            , or write to any office of SEBI.
          </p>
          <p className="text-sm text-slate-700">
            SCORES may also be accessed through the SCORES mobile application, available on the Apple App Store and the Google Play Store.
          </p>
          <p className="text-sm text-slate-700 font-medium">
            SEBI toll-free helpline: 1800 22 7575 / 1800 266 7575.
          </p>
        </section>

        {/* 5. Online Dispute Resolution – SMART ODR */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Online Dispute Resolution – SMART ODR</h2>
          <p className="text-sm text-slate-700">
            If you remain dissatisfied with the outcome of the SCORES complaint, you may initiate dispute resolution through the SMART ODR portal at{' '}
            <a
              href="https://smartodr.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline font-medium"
            >
              https://smartodr.in/
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
