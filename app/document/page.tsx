export default function documentPage() {
    return (
      <section className="min-h-screen px-6 py-20 bg-gray-100 transition-colors">
        <div className="max-w-5xl mx-auto animate-fadeIn space-y-12">
          <h1 className="text-center text-6xl font-bold text-gray-900 mb-12">
            Software Requirements Specification (SRS)
          </h1>
  
          <h2 className="text-3xl font-semibold">Crime Mapping and Forecasting Application</h2>
  
          <div className="space-y-6 mt-8">
            <h3 className="text-2xl font-semibold">Preface</h3>
            <p>This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course project. It outlines the requirements for the development of a crime mapping and forecasting application focused on the city of Chicago. The application aims to assist users in understanding local crime patterns and making informed decisions about travel and safety.</p>
            <p>This document is intended for use by the development team, instructors, testers, and future maintainers of the system.</p>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">1. Introduction</h3>
            <p><strong>1.1 Purpose:</strong> To specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.</p>
            <p><strong>1.2 Scope:</strong> This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations.</p>
            <p><strong>1.3 Definitions, Acronyms, and Abbreviations:</strong></p>
            <ul className="list-disc list-inside">
              <li>SRS: Software Requirements Specification</li>
              <li>UI: User Interface</li>
              <li>USR – User Functional Requirement</li>
              <li>SYS – System Functional Requirement</li>
              <li>USR-NFR – User Non-Functional Requirement</li>
              <li>SYS-NFR – System Non-Functional Requirement</li>
              <li>Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas</li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">2. Glossary</h3>
            <ul className="list-disc list-inside">
              <li><strong>Crime map:</strong> A visual representation of geographic crime data.</li>
              <li><strong>Crime tolerance:</strong> A user-defined threshold for crime exposure used to tailor travel advice.</li>
              <li><strong>Privacy masking:</strong> Techniques used to anonymize sensitive location data.</li>
              <li><strong>Forecasting model:</strong> A statistical or machine learning method that predicts future crime likelihood.</li>
              <li><strong>Top-5 accuracy:</strong> The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.</li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">3. User Requirements</h3>
            <h4 className="text-xl font-semibold">3.1 User Functional Requirements</h4>
            <ul className="list-disc list-inside">
              <li>USR-1.1 to USR-1.3: Crime map visualization and statistics per region</li>
              <li>USR-1.4 to USR-1.5: Travel recommendations and adjustable crime tolerance</li>
              <li>USR-1.6 to USR-1.7: Crime type filtering and future crime prediction</li>
            </ul>
            <h4 className="text-xl font-semibold">3.2 User Non-Functional Requirements</h4>
            <ul className="list-disc list-inside">
              <li>USR-NFR-3.1 to 3.3: No technical expertise required, good UI, data-backed insights</li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">4. System Requirements</h3>
            <h4 className="text-xl font-semibold">4.1 System Functional Requirements</h4>
            <ul className="list-disc list-inside">
              <li>SYS-2.1 to SYS-2.2: Data fetching and predictive modeling</li>
              <li>SYS-2.3 to SYS-2.4: Interactive map generation with region-based crime shading</li>
              <li>SYS-2.5 to SYS-2.6: Filtering, personalized travel guidance, page persistence</li>
            </ul>
            <h4 className="text-xl font-semibold">4.2 System Non-Functional Requirements</h4>
            <ul className="list-disc list-inside">
              <li>SYS-NFR-4.1 to 4.3: High uptime, fast rendering, accurate predictions</li>
              <li>SYS-NFR-4.4 to 4.6: Modular architecture, scalability, configurable settings</li>
              <li>SYS-NFR-4.14 to 4.15: Concurrent user handling and fast crime prediction</li>
              <li>SYS-NFR-4.20 to 4.22: Ease of use, onboarding support, accessibility compliance</li>
              <li>SYS-NFR-4.6 to 4.9: Privacy, data masking, user consent, logging and auditability</li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">5. System Evolution</h3>
            <p>
              Anticipated developments include integration of datasets from other cities, expanded forecasting models, fallback data sources, and enhanced features like notifications and multilingual support. The architecture should accommodate API updates and OS/browser compatibility.
            </p>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Index</h3>
            <ul className="list-disc list-inside">
              <li>Functional Requirements – Section 3</li>
              <li>Non-Functional Requirements – Section 4</li>
              <li>System Evolution – Section 5</li>
              <li>Glossary – Section 2</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  