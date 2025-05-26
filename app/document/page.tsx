export default function DocumentPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
      <div className="max-w-4xl mx-auto space-y-6 font-sans text-[16px]">
        <h1 className="text-center text-3xl font-bold mb-2">Software Requirements Specification (SRS)</h1>
        <h2 className="text-center text-xl font-medium mb-8">Crime Mapping and Forecasting Application</h2>

        <article className="space-y-6">
          <section>
            <h3 className="text-xl font-bold">Preface</h3>
            <p className="indent-6">This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course project. It outlines the requirements for the development of a crime mapping and forecasting application focused on the city of Chicago. The application aims to assist users in understanding local crime patterns and making informed decisions about travel and safety.</p>
            <p className="indent-6">This document is intended for use by the development team, instructors, testers, and future maintainers of the system.</p>
          </section>

          <section id="section-1">
            <h3 className="text-xl font-bold">1. Introduction</h3>
            <p><strong>1.1 Purpose</strong></p>
            <p className="indent-6">The purpose of this document is to specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.</p>
            <p><strong>1.2 Scope</strong></p>
            <p className="indent-6">This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations. The target users include present and prospective residents, students, and travelers seeking insights into the safety of specific areas.</p>
            <p><strong>1.3 Definitions, Acronyms, and Abbreviations</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li>SRS: Software Requirements Specification</li>
              <li>UI: User Interface</li>
              <li>USR – User Functional Requirement</li>
              <li>SYS – System Functional Requirement</li>
              <li>USR-NFR – User Non-Functional Requirement</li>
              <li>SYS-NFR – System Non-Functional Requirement</li>
              <li>Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas</li>
            </ul>

            <p className="indent-6 mb-4">The following diagram illustrates a short overview on what the system would display</p>
            <div className="flex justify-center">
              <img 
                src="/Requirements2.png" 
                alt="Overview diagram showing how crime data is represented visually on the map" 
                className="w-full max-w-2xl rounded shadow-md"
              />
            </div>
          </section>

          <section id="section-2">
            <h3 className="text-xl font-bold">2. Glossary</h3>
            <ul className="list-disc list-inside ml-6">
              <li>Crime map: A visual representation of geographic crime data.</li>
              <li>Crime tolerance: A user-defined threshold for crime exposure used to tailor travel advice.</li>
              <li>Privacy masking: Techniques used to anonymize sensitive location data.</li>
              <li>Forecasting model: A statistical or machine learning method that predicts future crime likelihood.</li>
              <li>Top-5 accuracy: The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.</li>
            </ul>
          </section>

          <section id="section-3">
            <h3 className="text-xl font-bold">3. User Requirements</h3>
            <h4 className="font-semibold">3.1 User Functional Requirements</h4>
            <p className="mt-2 font-medium">Crime Visualization</p>
            <ul className="list-disc list-inside ml-6">
              <li>USR-1.1: The user shall be able to view a map of Chicago split into distinct regions by community districts.</li>
              <li>USR-1.2: The user shall be able to see indicators of crime levels and types within each region.</li>
              <li>USR-1.3: The user shall be able to display detailed crime statistics in a selected area.</li>
            </ul>
            <p className="mt-2 font-medium">Travel Guidance and Personalization</p>
            <ul className="list-disc list-inside ml-6">
              <li>USR-1.4: The user shall be able to view travel recommendations based on local crime levels.</li>
              <li>USR-1.5: The user should be able to adjust their crime tolerance level to influence travel recommendations.</li>
            </ul>
            <p className="mt-2 font-medium">Data Filtering and Forecasting</p>
            <ul className="list-disc list-inside ml-6">
              <li>USR-1.6: The user shall be able to filter crime data by type.</li>
              <li>USR-1.7: The user should be able to view the predicted likelihood of specific crimes occurring in different regions.</li>
            </ul>
            <h4 className="mt-4 font-semibold">3.2 User Non-Functional Requirements</h4>
            <ul className="list-disc list-inside ml-6">
              <li>USR-NFR-3.1: The user shall be able to use the system without prior technical knowledge.</li>
              <li>USR-NFR-3.2: The user interface shall be clear, intuitive, and accessible on various devices.</li>
              <li>USR-NFR-3.3: The system shall provide trustable, data-backed crime insights that users can rely on.</li>
              <li>USR-NFR-3.4: The system shall support the English language at minimum.</li>
            </ul>
          </section>

          <h3 className="text-xl font-bold mb-2">System Overview</h3>
          <p className="indent-6 mb-4">The following diagram illustrates the system overview...</p>
          <div className="flex justify-center">
            <img 
              src="/Requirements.png" 
              alt="Diagram showing system input sources, data processing flow, and output visualization layers" 
              className="w-full max-w-2xl rounded shadow-md"
            />
          </div>

          <section id="section-4">
            <h3 className="text-xl font-bold">4. System Requirements</h3>
            <h4 className="font-semibold">4.1 System Functional Requirements</h4>
            <p className="mt-2 font-medium">Data Acquisition and Processing</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.1: The system shall consistently retrieve Chicago police report data.</li>
              <li>SYS-2.2: The system should forecast crime likelihood using a prediction model.</li>
            </ul>
            <p className="mt-2 font-medium">Map Generation and Display</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.3: The system shall generate an interactive map of Chicago divided according to Chicago's 77 official neighborhoods.</li>
              <li>SYS-2.4: The system shall display crime intensity and type using region-based color shading.</li>
            </ul>
            <p className="mt-2 font-medium">User Interaction and Output</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.5: The system shall allow filtering of data by crime type and/or time range.</li>
              <li>SYS-2.6: The system should generate region-based travel recommendations based on user-defined crime tolerance.</li>
              <li>SYS-2.7: The system shall remember which page the user leaves off when the user exits the application.</li>
            </ul>

            <h4 className="mt-4 font-semibold">4.2 System Non-Functional Requirements</h4>
            <p className="mt-2 font-medium">Performance and Availability</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.1: The system shall have 99% uptime over a rolling 30-day period.</li>
              <li>SYS-NFR-4.2: The system should render the map within 2 seconds for 90% of users on standard 4G connections.</li>
              <li>SYS-NFR-4.3: The system shall have a top-5 prediction accuracy of 70% or greater.</li>
              <li>SYS-NFR-4.4: The system shall support concurrent access by at least 500 users without significant degradation in responsiveness (no more than 15% performance drop).</li>
              <li>SYS-NFR-4.5: Crime prediction results shall be generated within 3 seconds under standard operating conditions.</li>
            </ul>
            <p className="mt-2 font-medium">Scalability and Maintainability</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.6: The system codebase shall follow modular architecture principles to allow updates without affecting unrelated modules.</li>
              <li>SYS-NFR-4.7: The system shall support horizontal scaling to handle increased user demand during peak usage hours.</li>
              <li>SYS-NFR-4.8: Configuration changes (e.g., threshold for "high crime" indicators) shall be updatable without requiring system downtime.</li>
            </ul>
            <p className="mt-2 font-medium">Compatibility</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.9: The system shall be fully functional on mobile devices with ≥2GB RAM and Android 10/iOS 13 or newer.</li>
              <li>SYS-NFR-4.10: The system shall be compatible with Windows 11+, macOS 11+, and Android 10+.</li>
            </ul>
            <p className="mt-2 font-medium">Usability & Accessibility</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.11: The system interface shall allow new users to perform basic operations (e.g., viewing crime data) with no training and ≤3 clicks.</li>
              <li>SYS-NFR-4.12: The system shall comply with WCAG 2.1 Level AA to ensure accessibility for users with disabilities.</li>
              <li>SYS-NFR-4.13: A guided onboarding or tooltip system shall be available for first-time users to assist with feature discovery.</li>
            </ul>
            <p className="mt-2 font-medium">Privacy and Ethics</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.14: The system shall not store any IP addresses or location data unless the user gives explicit consent.</li>
              <li>SYS-NFR-4.15: The system shall implement privacy masking techniques to prevent the identification of individuals or addresses from crime data.</li>
              <li>SYS-NFR-4.16: User data shall not be shared with third parties unless required by law or explicitly agreed to by the user.</li>
              <li>SYS-NFR-4.17: The system shall log all data access and modification events for auditability, but only store logs that are anonymized.</li>
            </ul>
          </section>

          <section id="section-5">
            <h3 className="text-xl font-bold">5. System Evolution</h3>
            <p className="indent-6">The following features and improvements are future-oriented concepts that are not currently implemented, but represent directions for potential expansion and refinement of the crime mapping and forecasting system. These ideas are based on anticipated user needs, feedback from surveys and focus groups, and limitations observed in the initial prototype.</p>
            <p className="mt-4 font-medium">Data Sources and Forecasting Accuracy</p>
            <p className="indent-6">Current Version: Uses historical crime data from the Chicago Police Department Open Data Portal.</p>
            <p className="indent-6">Evolved Version: Integrates real-time feeds (if available), adds social indicators (e.g., public events, holidays), and improves accuracy through advanced time series forecasting (e.g., LSTM or Prophet). Data granularity could be refined from zone-based to street-level prediction.</p>
            <p className="mt-4 font-medium">User Personalization and Alert System</p>
            <p className="indent-6">Current Version: Basic filter and visualization with manual map navigation.</p>
            <p className="indent-6">Evolved Version: Personalized crime alerts based on user-defined zones and preferences, with optional push notifications or email summaries.</p>
            <p className="mt-4 font-medium">Multilingual and Accessibility Support</p>
            <p className="indent-6">Current Version: Interface supports English only.</p>
            <p className="indent-6">Evolved Version: Adds multilingual UI and screen reader support, potentially offering a "tourist mode" for simplified use.</p>
            <p className="mt-4 font-medium">Integration with Emergency Services</p>
            <p className="indent-6">Current Version: Static map and user-only interaction.</p>
            <p className="indent-6">Evolved Version: Syncs with local emergency platforms for alerts or anonymous reporting (where legally feasible).</p>
            <p className="mt-4 font-medium">Data Ethics and Privacy Enhancements</p>
            <p className="indent-6">Current Version: Uses aggregated crime data with basic masking.</p>
            <p className="indent-6">Evolved Version: Employs differential privacy or location blurring to prevent targeting of specific locations.</p>
            <p className="mt-4 font-medium">Scalability and Platform Expansion</p>
            <p className="indent-6">Current Version: Browser-based for mobile and desktop.</p>
            <p className="indent-6">Evolved Version: Modular backend, API deployment, and dedicated dashboards for partners.</p>
            <p className="mt-4 font-medium">Offline and Low-Resource Usage</p>
            <p className="indent-6">Current Version: Requires internet and browser.</p>
            <p className="indent-6">Evolved Version: Offers static map caching and lightweight rendering support.</p>
          </section>

          <section id="section-index">
            <h3 className="text-xl font-bold">Index</h3>
            <ul className="list-disc list-inside ml-6">
              <li><a href="#section-3" className="text-blue-600 underline">Functional Requirements – Section 3</a></li>
              <li><a href="#section-4" className="text-blue-600 underline">Non-Functional Requirements – Section 4</a></li>
              <li><a href="#section-5" className="text-blue-600 underline">System Evolution – Section 5</a></li>
              <li><a href="#section-2" className="text-blue-600 underline">Glossary – Section 2</a></li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}