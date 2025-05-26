export default function DocumentPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
      <div className="max-w-4xl mx-auto space-y-12 font-sans text-[16px] leading-relaxed">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Software Requirements Specification (SRS)</h1>
          <h2 className="text-2xl font-medium text-gray-700">Crime Mapping and Forecasting Application</h2>
        </header>

        <article className="space-y-14">
          <section id="section-1" className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">1. Introduction</h3>
            <div>
              <h4 className="text-xl font-semibold">1.1 Purpose</h4>
              <p className="indent-6">The purpose of this document is to specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">1.2 Scope</h4>
              <p className="indent-6">This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations. The target users include present and prospective residents, students, and travelers seeking insights into the safety of specific areas.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">1.3 Definitions, Acronyms, and Abbreviations</h4>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li><strong>SRS:</strong> Software Requirements Specification</li>
                <li><strong>UI:</strong> User Interface</li>
                <li><strong>USR:</strong> User Functional Requirement</li>
                <li><strong>SYS:</strong> System Functional Requirement</li>
                <li><strong>USR-NFR:</strong> User Non-Functional Requirement</li>
                <li><strong>SYS-NFR:</strong> System Non-Functional Requirement</li>
                <li><strong>Region-based shading:</strong> Visualization technique that uses color to represent data intensity in distinct areas</li>
              </ul>
            </div>
            <div>
              <p className="indent-6">The following diagram illustrates a short overview on what the system would display:</p>
              <div className="flex justify-center mt-4">
                <img 
                  src="/requirements2.png" 
                  alt="Overview diagram showing how crime data is represented visually on the map" 
                  className="w-full max-w-2xl rounded shadow-md"
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">System Overview</h3>
            <p className="indent-6">The following diagram illustrates the system overview. It highlights data inputs, processing, and visual output components involved in the crime mapping and forecasting system:</p>
            <div className="flex justify-center mt-4">
              <img 
                src="/Requirements.png" 
                alt="Diagram showing system input sources, data processing flow, and output visualization layers" 
                className="w-full max-w-2xl rounded shadow-md"
              />
            </div>
          </section>

          <section id="section-4" className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">4. System Requirements</h3>
            <div>
              <h4 className="text-xl font-semibold">4.1 System Functional Requirements</h4>
              <p className="font-medium mt-2">Data Acquisition and Processing</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-2.1: Retrieve Chicago police report data consistently.</li>
                <li>SYS-2.2: Forecast crime likelihood using predictive models.</li>
              </ul>
              <p className="font-medium mt-2">Map Generation and Display</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-2.3: Generate an interactive map of Chicago split into 77 neighborhoods.</li>
                <li>SYS-2.4: Display crime intensity and type with region-based color shading.</li>
              </ul>
              <p className="font-medium mt-2">User Interaction and Output</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-2.5: Filter crime data by type and/or time range.</li>
                <li>SYS-2.6: Generate travel recommendations based on user-defined tolerance.</li>
                <li>SYS-2.7: Remember last visited page when the user exits.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">4.2 System Non-Functional Requirements</h4>
              <p className="font-medium mt-2">Performance and Availability</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-NFR-4.1: Maintain 99% uptime over a 30-day period.</li>
                <li>SYS-NFR-4.2: Map should load within 2 seconds for 90% of 4G users.</li>
                <li>SYS-NFR-4.3: Top-5 prediction accuracy of 70% or better.</li>
                <li>SYS-NFR-4.4: Support 500 concurrent users with minimal lag.</li>
                <li>SYS-NFR-4.5: Generate predictions within 3 seconds under normal use.</li>
              </ul>
              <p className="font-medium mt-2">Scalability and Maintainability</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-NFR-4.6: Modular architecture for safe updates.</li>
                <li>SYS-NFR-4.7: Support horizontal scaling.</li>
                <li>SYS-NFR-4.8: Apply configuration updates without downtime.</li>
              </ul>
              <p className="font-medium mt-2">Compatibility</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-NFR-4.9: Fully functional on devices with ≥2GB RAM and Android 10/iOS 13 or newer.</li>
                <li>SYS-NFR-4.10: Compatible with Windows 11+, macOS 11+, and Android 10+.</li>
              </ul>
              <p className="font-medium mt-2">Usability and Accessibility</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-NFR-4.11: Key features accessible within 3 clicks and no training.</li>
                <li>SYS-NFR-4.12: Comply with WCAG 2.1 Level AA accessibility guidelines.</li>
                <li>SYS-NFR-4.13: Provide onboarding tips or tutorials.</li>
              </ul>
              <p className="font-medium mt-2">Privacy and Ethics</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>SYS-NFR-4.14: Do not store IP/location data without user consent.</li>
                <li>SYS-NFR-4.15: Implement privacy masking to anonymize sensitive info.</li>
                <li>SYS-NFR-4.16: Do not share user data unless required or consented.</li>
                <li>SYS-NFR-4.17: Log all data events, store logs anonymously.</li>
              </ul>
            </div>
          </section>

          <section id="section-5" className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">5. System Evolution</h3>
            <p className="indent-6">These future-oriented improvements represent directions for expansion based on user feedback and prototype limitations.</p>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Data and Forecasting</h4>
              <p className="indent-6">Current: Historical crime data from the Chicago Police Department.</p>
              <p className="indent-6">Future: Real-time feeds, event indicators, and models like LSTM/Prophet. Improve from zone to street-level prediction.</p>

              <h4 className="text-xl font-semibold">Personalization and Alerts</h4>
              <p className="indent-6">Current: Basic filtering and map interaction.</p>
              <p className="indent-6">Future: Push/email alerts based on user-defined zones.</p>

              <h4 className="text-xl font-semibold">Multilingual and Accessibility</h4>
              <p className="indent-6">Current: English-only interface.</p>
              <p className="indent-6">Future: Add support for Japanese, Chinese, Spanish, and screen reader compliance with WCAG 2.1.</p>

              <h4 className="text-xl font-semibold">Emergency Services Integration</h4>
              <p className="indent-6">Current: Static interaction only.</p>
              <p className="indent-6">Future: Sync with emergency platforms for alerts and anonymous reporting.</p>

              <h4 className="text-xl font-semibold">Privacy Enhancements</h4>
              <p className="indent-6">Current: Basic masking.</p>
              <p className="indent-6">Future: Differential privacy and oversight by independent review boards.</p>

              <h4 className="text-xl font-semibold">Platform Expansion</h4>
              <p className="indent-6">Current: Web app only.</p>
              <p className="indent-6">Future: Modular APIs, mobile apps, and dashboards for partners or governments.</p>

              <h4 className="text-xl font-semibold">Offline and Lightweight Support</h4>
              <p className="indent-6">Current: Requires internet and modern browser.</p>
              <p className="indent-6">Future: Offline map caching and lightweight rendering for older devices.</p>
            </div>
          </section>

        </article>
      </div>
    </section>
  );
}