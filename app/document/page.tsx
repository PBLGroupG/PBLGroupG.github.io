export default function DocumentPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
      <div className="max-w-4xl mx-auto space-y-12 font-sans text-[16px] leading-relaxed">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Software Requirements Specification (SRS)</h1>
          <h2 className="text-2xl font-medium text-gray-700">Crime Mapping and Forecasting Application</h2>
        </header>

        <article className="space-y-14">
          <section className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">Preface</h3>
            <p className="indent-6">This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course project. It outlines the requirements for the development of a crime mapping and forecasting application focused on the city of Chicago. The application aims to assist users in understanding local crime patterns and making informed decisions about travel and safety.</p>
            <p className="indent-6">This document is intended for use by the development team, instructors, testers, and future maintainers of the system.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">1. Introduction</h3>
            <p><strong>1.1 Purpose</strong></p>
            <p className="indent-6">The purpose of this document is to specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.</p>
            <p><strong>1.2 Scope</strong></p>
            <p className="indent-6">This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations. The target users include present and prospective residents, students, and travelers seeking insights into the safety of specific areas.</p>
            <p><strong>1.3 Definitions, Acronyms, and Abbreviations</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>SRS:</strong> Software Requirements Specification</li>
              <li><strong>UI:</strong> User Interface</li>
              <li><strong>USR –</strong> User Functional Requirement</li>
              <li><strong>SYS –</strong> System Functional Requirement</li>
              <li><strong>USR-NFR –</strong> User Non-Functional Requirement</li>
              <li><strong>SYS-NFR –</strong> System Non-Functional Requirement</li>
              <li>Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas</li>
            </ul>
            <div className="flex justify-center mt-6">
              <img
                src="/requirements2.png"
                alt="Overview diagram showing how crime data is represented visually on the map"
                className="w-full max-w-2xl rounded shadow-md"
              />
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">2. Glossary</h3>
            <ul className="list-disc list-inside ml-6">
              <li>Crime map: A visual representation of geographic crime data.</li>
              <li>Crime tolerance: A user-defined threshold for crime exposure used to tailor travel advice.</li>
              <li>Privacy masking: Techniques used to anonymize sensitive location data.</li>
              <li>Forecasting model: A statistical or machine learning method that predicts future crime likelihood.</li>
              <li>Top-5 accuracy: The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold border-b pb-1">3. User Requirements</h3>
            <h4 className="text-xl font-semibold">3.1 User Functional Requirements</h4>
            <p className="mt-4 font-bold">Crime Visualization</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>USR-1.1: The user shall be able to view a map of Chicago split into distinct regions by community districts.</li>
              <li>USR-1.2: The user shall be able to see indicators of crime levels and types within each region.</li>
              <li>USR-1.3: The user shall be able to display detailed crime statistics in a selected area.</li>
            </ul>
            <p className="mt-4 font-bold">Travel Guidance and Personalization</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>USR-2.1: The user shall be able to view travel recommendations based on local crime levels.</li>
              <li>USR-2.2: The user should be able to adjust their crime tolerance level to influence travel recommendations.</li>
            </ul>
            <p className="mt-4 font-bold">Data Filtering and Forecasting</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>USR-3.1: The user shall be able to filter crime data by type.</li>
              <li>USR-3.2: The user should be able to view predicted likelihoods of specific crime types occurring in different regions and time windows, based on historical trends and model outputs.</li>
            </ul>
            <h4 className="text-xl font-semibold mt-6">3.2 User Non-Functional Requirements</h4>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>USR-NFR-1.1: The user shall be able to use the system without prior technical knowledge.</li>
              <li>USR-NFR-1.2: The user interface shall be clear, intuitive, and accessible on various devices.</li>
              <li>USR-NFR-1.3: The system shall provide trustable, data-backed crime insights that users can rely on.</li>
              <li>USR-NFR-1.4: The system should support the English language at minimum.</li>
            </ul>
          </section>

          <section className="space-y-6">
  <h3 className="text-2xl font-bold border-b pb-1">4. System Requirements</h3>

  <h4 className="text-xl font-semibold">4.1 System Functional Requirements</h4>
  <p className="mt-4 font-bold">Data Acquisition and Processing</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-1.1: The system shall consistently retrieve Chicago police report data.</li>
    <li>SYS-1.2: The system should forecast crime likelihood using a prediction model.</li>
  </ul>

  <p className="mt-4 font-bold">Map Generation and Display</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-2.1: The system shall generate an interactive map of Chicago divided according to Chicago's 77 official neighborhoods.</li>
    <li>SYS-2.2: The system shall display crime intensity and type using region-based color shading.</li>
  </ul>

  <p className="mt-4 font-bold">User Interaction and Output</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-3.1: The system shall allow filtering of data by crime type and/or time range.</li>
    <li>SYS-3.2: The system should generate region-based travel recommendations based on user-defined crime tolerance.</li>
    <li>SYS-3.3: The system shall remember which page the user leaves off when the user exits the application.</li>
  </ul>

  <h4 className="text-xl font-semibold mt-6">4.2 System Non-Functional Requirements</h4>
  <p className="mt-4 font-bold">Performance and Availability</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-NFR-1.1: The system shall have 99% uptime over a rolling 30-day period.</li>
    <li>SYS-NFR-1.2: The system should render the map within 2 seconds for 90% of users on standard 4G connections.</li>
    <li>SYS-NFR-1.3: The system shall have a top-5 prediction accuracy of 70% or greater.</li>
    <li>SYS-NFR-1.4: The system shall support concurrent access by at least 500 users with no more than 15% degradation in responsiveness.</li>
    <li>SYS-NFR-1.5: Crime prediction results shall be generated within 3 seconds under standard operating conditions.</li>
  </ul>

  <p className="mt-4 font-bold">Scalability and Maintainability</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-NFR-2.1: The system codebase shall follow modular architecture principles to allow updates without affecting unrelated modules.</li>
    <li>SYS-NFR-2.2: The system shall support horizontal scaling to handle increased user demand during peak usage hours.</li>
    <li>SYS-NFR-2.3: Configuration changes shall be updatable without requiring system downtime.</li>
  </ul>

  <p className="mt-4 font-bold">Compatibility</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-NFR-3.1: The system shall be fully functional on mobile devices with ≥2GB RAM and Android 10/iOS 13 or newer.</li>
    <li>SYS-NFR-3.2: The system should be compatible with Windows 11+, macOS 11+, and Android 10+.</li>
  </ul>

  <p className="mt-4 font-bold">Usability & Accessibility</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-NFR-4.1: The system interface shall allow new users to perform basic operations with no training and ≤3 clicks.</li>
    <li>SYS-NFR-4.2: The system should comply with WCAG 2.1 Level AA to ensure accessibility for users with disabilities.</li>
    <li>SYS-NFR-4.3: A guided onboarding or tooltip system should be available for first-time users to assist with feature discovery.</li>
  </ul>

  <p className="mt-4 font-bold">Privacy and Ethics</p>
  <ul className="list-disc list-inside ml-6 space-y-1">
    <li>SYS-NFR-5.1: The system shall not store any IP addresses or location data unless the user gives explicit consent.</li>
    <li>SYS-NFR-5.2: The system shall implement privacy masking techniques to prevent the identification of individuals or addresses from crime data.</li>
    <li>SYS-NFR-5.3: User data shall not be shared with third parties unless required by law or explicitly agreed to by the user.</li>
    <li>SYS-NFR-5.4: The system shall log all data access and modification events for auditability, but only store logs that are anonymized.</li>
  </ul>
</section>

<section className="space-y-6">
  <h3 className="text-2xl font-bold border-b pb-1">5. System Evolution</h3>
  <p className="indent-6">The following features and improvements are future-oriented concepts that are not currently implemented, but represent directions for potential expansion and refinement of the crime mapping and forecasting system. These ideas are based on anticipated user needs, feedback from surveys and focus groups, and limitations observed in the initial prototype.</p>
  <ul className="list-disc list-inside ml-6 space-y-2">
    <li><strong>Data Sources and Forecasting Accuracy</strong><br/>Current Version: Uses historical crime data from the Chicago Police Department Open Data Portal.<br/>Evolved Version: Integrates real-time feeds (if available), adds social indicators (e.g., public events, holidays), and improves accuracy through advanced time series forecasting (e.g., LSTM or Prophet). Data granularity could be refined from zone-based to street-level prediction.</li>
    <li><strong>User Personalization and Alert System</strong><br/>Current Version: Basic filter and visualization with manual map navigation.<br/>Evolved Version: Personalized crime alerts based on user-defined zones and preferences (e.g., “warn me about violent crimes within 1km of my location”), with optional push notifications or email summaries.</li>
    <li><strong>Multilingual and Accessibility Support</strong><br/>Current Version: Interface supports English only.<br/>Evolved Version: Adds multilingual UI (e.g., Japanese, Chinese, Spanish) and screen reader support for accessibility compliance (WCAG 2.1). Could also include a simplified “tourist mode.”</li>
    <li><strong>Integration with Emergency Services</strong><br/>Current Version: Static map and user-only interaction.<br/>Evolved Version: Optionally syncs with local emergency services or municipal safety platforms to provide recent alerts, crime resolution updates, or allow anonymous reporting (subject to legal feasibility).</li>
    <li><strong>Data Ethics and Privacy Enhancements</strong><br/>Current Version: Uses aggregated crime data with basic privacy masking.<br/>Evolved Version: Implements differential privacy or location blurring algorithms to prevent targeting of specific buildings or individuals. Potential integration with third-party review boards for transparency.</li>
    <li><strong>Scalability and Platform Expansion</strong><br/>Current Version: Browser-based application optimized for mobile and desktop.<br/>Evolved Version: Modular backend supporting API-based deployment, potential iOS and Android native apps, and dedicated dashboards for government or research partners.</li>
    <li><strong>Offline and Low-Resource Usage</strong><br/>Current Version: Requires stable internet and browser support.<br/>Evolved Version: Offers static map caching for offline browsing and optimized rendering for older devices using lightweight frameworks (e.g., Preact or WebGL-based vector tiles).</li>
  </ul>
</section>

<section className="space-y-6">
  <h3 className="text-2xl font-bold border-b pb-1">Index</h3>
  <ul className="list-disc list-inside ml-6">
    <li>Glossary – Section 2</li>
    <li>User Requirements – Section 3</li>
    <li>System Requirements – Section 4</li>
    <li>System Evolution – Section 5</li>
  </ul>
</section>
        </article>
      </div>
    </section>
  );
}
