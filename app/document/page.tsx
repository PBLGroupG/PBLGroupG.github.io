export default function DocumentPage() {
    return (
      <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-center text-4xl font-bold">
            Software Requirements Specification (SRS)
          </h1>
          <h2 className="text-2xl font-semibold text-center">
            Crime Mapping and Forecasting Application
          </h2>
  
          <article className="space-y-6">
            <section>
              <h3 className="text-xl font-bold">Preface</h3>
              <p>
                This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course
                project. It outlines the requirements for the development of a crime mapping and forecasting application
                focused on the city of Chicago. The application aims to assist users in understanding local crime patterns
                and making informed decisions about travel and safety.
              </p>
              <p>
                This document is intended for use by the development team, instructors, testers, and future maintainers of
                the system.
              </p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">1. Introduction</h3>
              <p><strong>1.1 Purpose</strong><br />
                The purpose of this document is to specify the functional and non-functional requirements of a software
                system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific
                travel recommendations based on safety.
              </p>
              <p><strong>1.2 Scope</strong><br />
                This application will retrieve police report data from public sources and display aggregated crime data
                using a region-based map of Chicago. The system will offer features such as filtering by crime type,
                forecasting crime likelihood, and customizable travel safety recommendations.
              </p>
              <p><strong>1.3 Definitions, Acronyms, and Abbreviations</strong><br />
                SRS: Software Requirements Specification<br />
                UI: User Interface<br />
                USR – User Functional Requirement<br />
                SYS – System Functional Requirement<br />
                USR-NFR – User Non-Functional Requirement<br />
                SYS-NFR – System Non-Functional Requirement<br />
                Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas
              </p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">2. Glossary</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Crime map:</strong> A visual representation of geographic crime data.</li>
                <li><strong>Crime tolerance:</strong> A user-defined threshold for crime exposure used to tailor travel advice.</li>
                <li><strong>Privacy masking:</strong> Techniques used to anonymize sensitive location data.</li>
                <li><strong>Forecasting model:</strong> A statistical or machine learning method that predicts future crime likelihood.</li>
                <li><strong>Top-5 accuracy:</strong> The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">3. User Requirements</h3>
              <h4 className="font-semibold">3.1 User Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>USR-1.1 to USR-1.3: Map visualization and statistics.</li>
                <li>USR-1.4 to USR-1.5: Travel recommendations and tolerance personalization.</li>
                <li>USR-1.6 to USR-1.7: Crime filtering and prediction features.</li>
              </ul>
              <h4 className="font-semibold mt-4">3.2 User Non-Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>USR-NFR-3.1 to 3.3: Ease of use, UI clarity, and data reliability.</li>
                <li>The system shall support the English language at minimum.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">4. System Requirements</h3>
              <h4 className="font-semibold">4.1 System Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-2.1 to SYS-2.2: Data retrieval and forecasting.</li>
                <li>SYS-2.3 to SYS-2.4: Interactive map and shading.</li>
                <li>SYS-2.5 to SYS-2.6: Filtering, recommendations, and session persistence.</li>
              </ul>
              <h4 className="font-semibold mt-4">4.2 System Non-Functional Requirements</h4>
              <p className="font-semibold">Performance and Availability</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.1 to 4.3: Uptime, performance, prediction accuracy.</li>
                <li>SYS-NFR-4.14 to 4.15: Concurrent users and response time.</li>
              </ul>
              <p className="font-semibold mt-2">Scalability and Maintainability</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.4 to 4.6: Modular architecture, horizontal scaling, configurable parameters.</li>
              </ul>
              <p className="font-semibold mt-2">Compatibility</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.16 to 4.17: Mobile and OS compatibility.</li>
              </ul>
              <p className="font-semibold mt-2">Usability & Accessibility</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.18 to 4.20: Simple onboarding, WCAG 2.1 AA compliance.</li>
              </ul>
              <p className="font-semibold mt-2">Privacy and Ethics</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.21 to 4.24: Consent-based data, anonymized logs, masking, no unauthorized sharing.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">5. System Evolution</h3>
              <p>
                Future system updates may include support for additional cities, expanded forecasting logic, new data sources,
                push notifications, and multilingual support. It will maintain modularity to support new features, data,
                and platform compatibility over time.
              </p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">Index</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Functional Requirements – Section 3</li>
                <li>Non-Functional Requirements – Section 4</li>
                <li>System Evolution – Section 5</li>
                <li>Glossary – Section 2</li>
              </ul>
            </section>
          </article>
        </div>
      </section>
    );
  }