import React from 'react';

export const metadata = {
  title: 'Disclaimer | SEBI RA Varun Kumar',
  description:
    'Important Notice, Disclosures and Limitation of Liability for SEBI Registered Research Analyst Varun Kumar (INH000024833).',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-200 pb-3">
          Disclaimer
        </h1>

        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Important Notice and Limitation of Liability
          </h2>
          <p className="text-slate-700 italic">Please read the following very carefully.</p>
          <p className="text-slate-700">
            The particulars given below are as per Securities and Exchange Board of India (Research Analysts) Regulations, 2014.
          </p>
        </div>

        {/* About the Research Analyst */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">About the Research Analyst</h2>
          <p className="text-slate-700">
            Varun Kumar (Research Analyst) (hereinafter referred to as the “Research Analyst” or “RA”) is registered as a Research Analyst with SEBI under the SEBI (Research Analysts) Regulations, 2014, having Registration No. INH000024833.
          </p>
          <p className="text-slate-700 font-semibold">Below are the brief details:</p>
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
        </section>

        {/* History, Present business and Background */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">History, Present business and Background</h2>
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

        {/* Disclosure with regard to ownership and material conflicts of interest */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">
            Disclosure with regard to ownership and material conflicts of interest
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>The Research Analyst or its associates or relatives do not have financial interest in the subject Company;</li>
            <li>The Research Analyst or its associates or relatives do not have actual/beneficial ownership of one per cent or more securities of the subject Company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance;</li>
            <li>The Research Analyst or its associates or relatives do not have any other material conflict of interest at the time of publication of the research report or at the time of public appearance.</li>
          </ul>
        </section>

        {/* Disclosure with regard to receipt of Compensation */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Disclosure with regard to receipt of Compensation</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>The Research Analyst or its associates have not received compensation from the subject Company in the past twelve months.</li>
            <li>The Research Analyst or its associates have not managed or co-managed public offering of securities for the subject Company in the past twelve months.</li>
            <li>The Research Analyst or its associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject Company in the past twelve months.</li>
            <li>The Research Analyst or its associates have not received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in the past twelve months.</li>
            <li>The Research Analyst or its associates have not received any compensation or other benefits from the subject Company or third party in connection with the research report.</li>
          </ul>
        </section>

        {/* Disclosure with regard to receipt of Compensation (For the purpose of Public appearance) */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">
            Disclosure with regard to receipt of Compensation (For the purpose of Public appearance)
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Whether it or its associates have received any compensation from the subject company in the past twelve months – No</li>
            <li>Whether the subject company is or was a client during twelve months preceding the date of distribution of the research report and the types of services provided – No</li>
          </ul>
        </section>

        {/* General Disclosure */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">General Disclosure</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>The Research Analyst has not served as an officer, director or employee of the subject Company.</li>
            <li>The Research Analyst has not been engaged in market making activity for the subject Company.</li>
            <li>The Research Analyst is not using any Artificial Intelligence (AI) tool in research services.</li>
          </ul>
        </section>

        {/* Additional Disclosures */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Additional Disclosures</h2>
          <p className="text-slate-700">
            Trading/investing in Stock Market involves considerable risk. Investment in equity shares, futures, options and commodities has its own risks. You may lose part or all of the initial investment because stock market investments are subject to market risk. It is not ideal for all types of investors to invest in stock market.
          </p>
          <p className="text-slate-700">
            Registration granted by SEBI, enlistment of Research Analyst (RA) with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <p className="text-slate-700">
            The research recommendation and/or report provided is based on information & analysis which is believed to be accurate. This information is provided to enable you to make your own investment decisions and should not be construed as investment advice.The Research Analyst do not offer any product/service with assured/guaranteed returns. The anticipatory moves mentioned are purely subject to technical studies and does not take into consideration sudden currency/ market volatility and data events. The Research Analyst cannot be held responsible for the accuracy of the research recommendation and/or report.
          </p>
          <p className="text-slate-700">
            The Research Analyst do not give any kind of profit commitments. Investment in stock or commodity markets is subject to market risk, though best attempts are made for predicting markets, but no surety of return or accuracy of any kind is guaranteed. Clients are advised to consider all the advice as just an opinion and make investment decision on their own.
          </p>
          <p className="text-slate-700">
            In case of clients seeking advice on any specific positions already made by the client, the Research Analyst will be able to suggest best possible action considering the view on the security or product. Such suggestion under any circumstances shall be considered as an opinion (not advice) and the Research Analyst advise client to consider the opinion and not consultancy to make his/her final decision. The Research Analyst is not liable for any losses whatsoever client may incur in accepting the opinions.
          </p>
          <p className="text-slate-700">
            Client is also advised to trade only if research recommendation and/or report suit his/her current risk appetite and risk bearing capacity, all the research recommendation and/or report shall be considered as a view or opinion and client shall on his/her discretion decide actual trades.
          </p>
          <p className="text-slate-700">
            The Research Analyst shall not be held responsible for any decisions taken based on the research recommendation, reports, or any related information.
          </p>
          <p className="text-slate-700">
            The Research Analyst does not provide merchant banking, investment banking, investment adviser, or brokerage services.
          </p>
          <p className="text-slate-700">
            The Research Analyst has never been suspended or barred from doing business by SEBI or any other authority, nor has SEBI ever cancelled our certificate of registration.
          </p>
          <p className="text-slate-700">
            The Research Analyst has never been in any partnership with any third-party intermediaries for execution or distribution services. As a result, we receive no compensation for execution or distribution services.
          </p>
        </section>

        {/* Interpretation */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">Interpretation</h2>
          <p className="text-slate-700">
            Unless the context otherwise requires, words importing the singular shall include the plural and vice versa; words importing the masculine gender shall include the feminine and vice versa; and words importing natural persons shall include bodies corporate, partnerships, and other legal entities, and vice versa.
          </p>
        </section>

        {/* Definitions of Terms Used */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Definitions of Terms Used</h2>
          <div className="space-y-3 text-slate-700">
            <p>
              <strong>Buy:</strong> Buy means that the stock recommended to be bought either at Market or at price or within price band mentioned in the recommendation. Stock to be bought at Market or Current Market price (CMP) must be bought immediately or near the closing time of market at closing price. Stock with limit price order or where buying price or price band is mentioned, such stock can be bought at the price or within the price band mentioned.
            </p>
            <p>
              <strong>Sell / Target:</strong> Sell or target price is the price at which stock must be sold. For Stocks which have reached to their target price or trading above target price must be sold upon reaching the target price or price band mentioned.
            </p>
            <p>
              <strong>Hold:</strong> Hold means that a stock may be held and no exit is required. Hold recommendation is given if stock has not achieved its mentioned target or hit the mentioned stop loss price. Hold recommendation can also be given in case if research analyst is of opinion that even after reaching the target price, the stock may go beyond target price due to change in circumstances.
            </p>
            <p>
              <strong>Stop loss price:</strong> Stop loss is a price at which the stock must be exited or sold due to adverse situation or market move contrary to recommendation. When the stop loss price is reached, stock can be exited immediately or near the close of trading session at price which is near the closing price. Second scenario is mentioned given the fact that some times the stop loss price is reached due to intra day volatility of market but it recovers towards the end of session showing the strength of stock & in such case stock can be held. This mechanism helps the Investor from a wrong exit/ pre mature exit from stock. It must be noted, however, that if the stock is trading below/at stop loss near the closing trading time, then it must be exited.
            </p>
            <p>
              <strong>Add / Accumulate:</strong> Add or Accumulate means gradually purchasing additional quantities of the stock, usually on declines or at favorable levels, to build or enhance the position over time.
            </p>
            <p>
              <strong>Reduce / Trim:</strong> Reduce or Trim refers to gradually decreasing exposure in the stock without a full exit, usually recommended when valuations are stretched or partial profit booking is advisable.
            </p>
            <p>
              <strong>Neutral:</strong> Neutral recommendation implies that the Research Analyst does not expect any significant upside or downside in the stock, and therefore neither a Buy nor Sell view is warranted.
            </p>
            <p>
              <strong>Outperform:</strong> Outperform indicates that the stock is expected to deliver returns higher than the relevant benchmark index or sectoral index over the recommended horizon.
            </p>
            <p>
              <strong>Underperform:</strong> Underperform indicates that the stock is expected to deliver returns lower than the relevant benchmark index or sectoral index over the recommended horizon.
            </p>
            <p>
              <strong>Fair Value / Valuation:</strong> Fair Value refers to the estimated intrinsic value of the stock derived from the Research Analyst’s analysis and valuation models, which may include discounted cash flow (DCF), price-to-earnings (P/E), price-to-book (P/B), EV/EBITDA, or other methodologies.
            </p>
            <p>
              <strong>Benchmark:</strong> Benchmark means the index or market standard (e.g., Nifty 50, Sensex, sectoral indices) against which the performance of the recommended stock is measured.
            </p>
            <p>
              <strong>Risk Factors:</strong> Risk Factors are potential events, conditions, or variables (such as regulatory changes, macroeconomic events, company-specific developments, or geopolitical risks) that may materially affect the outcome of the recommendation.
            </p>
          </div>
        </section>

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
