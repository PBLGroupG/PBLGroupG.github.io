export default function DocumentPage() {
    return (
      <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
        <div className="max-w-4xl mx-auto space-y-10 font-sans text-[16px]">
          <h1 className="text-center text-4xl font-bold">Software Requirements Specification (SRS)</h1>
          <h2 className="text-2xl font-semibold text-center">Crime Mapping and Forecasting Application</h2>
  
          <article className="space-y-6">
            <section>
              <h3 className="text-xl font-bold">Preface</h3>
              <p>This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course project. It outlines the requirements for the development of a crime mapping and forecasting application focused on the city of Chicago. The application aims to assist users in understanding local crime patterns and making informed decisions about travel and safety.</p>
              <p>This document is intended for use by the development team, instructors, testers, and future maintainers of the system.</p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">1. Introduction</h3>
              <p><strong>1.1 Purpose</strong><br/>The purpose of this document is to specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.</p>
              <p><strong>1.2 Scope</strong><br/>This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations. The target users include present and prospective residents, students, and travelers seeking insights into the safety of specific areas.</p>
              <p><strong>1.3 Definitions, Acronyms, and Abbreviations</strong><br/>
                SRS: Software Requirements Specification<br/>
                UI: User Interface<br/>
                USR – User Functional Requirement<br/>
                SYS – System Functional Requirement<br/>
                USR-NFR – User Non-Functional Requirement<br/>
                SYS-NFR – System Non-Functional Requirement<br/>
                Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas
              </p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">2. Glossary</h3>
              <p><strong>Crime map:</strong> A visual representation of geographic crime data.</p>
              <p><strong>Crime tolerance:</strong> A user-defined threshold for crime exposure used to tailor travel advice.</p>
              <p><strong>Privacy masking:</strong> Techniques used to anonymize sensitive location data.</p>
              <p><strong>Forecasting model:</strong> A statistical or machine learning method that predicts future crime likelihood.</p>
              <p><strong>Top-5 accuracy:</strong> The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.</p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">3. User requirements</h3>
              <h4 className="font-semibold">3.1 User Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>USR-1.1: The user shall be able to view a map of Chicago split into distinct regions by community districts.</li>
                <li>USR-1.2: The user shall be able to see indicators of crime levels and types within each region.</li>
                <li>USR-1.3: The user shall be able to display detailed crime statistics in a selected area.</li>
                <li>USR-1.4: The user shall be able to view travel recommendations based on local crime levels.</li>
                <li>USR-1.5: The user should be able to adjust their crime tolerance level to influence travel recommendations.</li>
                <li>USR-1.6: The user shall be able to filter crime data by type.</li>
                <li>USR-1.7: The user should be able to view the predicted likelihood of specific crimes occurring in different regions.</li>
              </ul>
              <h4 className="font-semibold mt-4">3.2 User Non-Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>USR-NFR-3.1: The user shall be able to use the system without prior technical knowledge.</li>
                <li>USR-NFR-3.2: The user interface shall be clear, intuitive, and accessible on various devices.</li>
                <li>USR-NFR-3.3: The system shall provide trustable, data-backed crime insights that users can rely on.</li>
                <li>The system shall support the English language at minimum.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">4. System Requirements</h3>
              <h4 className="font-semibold">4.1 System Functional Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-2.1: The system shall consistently retrieve Chicago police report data.</li>
                <li>SYS-2.2: The system should forecast crime likelihood using a prediction model.</li>
                <li>SYS-2.3: The system shall generate an interactive map of Chicago divided according to Chicago's 77 official neighborhoods.</li>
                <li>SYS-2.4: The system shall display crime intensity and type using region-based color shading.</li>
                <li>SYS-2.5: The system shall allow filtering of data by crime type and/or time range.</li>
                <li>SYS-2.6: The system should generate region-based travel recommendations based on user-defined crime tolerance.</li>
                <li>The system shall remember which page the user leaves off when the user exits the application.</li>
              </ul>
  
              <h4 className="font-semibold mt-4">4.2 System Non-Functional Requirements</h4>
              <p className="font-semibold">Performance and Availability</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.1 to 4.3: High availability, fast rendering, and reliable predictions.</li>
                <li>SYS-NFR-4.14 to 4.15: Handle 500 users and fast prediction response.</li>
              </ul>
              <p className="font-semibold mt-2">Scalability and Maintainability</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.4 to 4.6: Modular updates and horizontal scaling.</li>
              </ul>
              <p className="font-semibold mt-2">Compatibility</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.4: Mobile device compatibility (≥2GB RAM, Android 10/iOS 13+).</li>
                <li>SYS-NFR-4.5: OS compatibility (Windows 11+, macOS 11+, Android 10+).</li>
              </ul>
              <p className="font-semibold mt-2">Usability & Accessibility</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.20 to 4.22: Simple use, onboarding, and WCAG 2.1 AA compliance.</li>
              </ul>
              <p className="font-semibold mt-2">Privacy and Ethics</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SYS-NFR-4.6 to 4.9: Consent-based data storage, privacy masking, and anonymized logs.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">5. System Evolution</h3>
              <p>As the system matures, we anticipate integrating additional datasets from other cities beyond Chicago. The forecasting model may evolve to incorporate more variables as their relationship to crime is established, and data for them becomes available.</p>
              <p>As time goes on, we also anticipate that some data sources may become unavailable due to changing legal and industry environments. The software would necessarily need to be able to switch to other available sources of data.</p>
              <p>The software should be designed for scalability, allowing modular data pipeline updates, and potentially supporting new features like push notifications or user-submitted crime reports.</p>
              <p>Future releases may support multilingual interfaces and emergency service integration. API schema evolution should be anticipated, and compatibility with future operating systems and browsers maintained where feasible.</p>
            </section>
  
            <section>
              <h3 className="text-xl font-bold">Index</h3>
              <ul className="list-disc list-inside">
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
  