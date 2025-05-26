
    export default function DocumentPage() {
        return (
          <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
            <div className="max-w-5xl mx-auto space-y-6">
              <h1 className="text-center text-4xl font-bold">
                Software Requirements Specification (SRS)
              </h1>
              <h2 className="text-2xl font-semibold">
                Crime Mapping and Forecasting Application
              </h2>
      
              <div className="space-y-4">
                {`
      Preface
      This Software Requirements Specification (SRS) document has been prepared by Group G for the PBL3 course project. It outlines the requirements for the development of a crime mapping and forecasting application focused on the city of Chicago. The application aims to assist users in understanding local crime patterns and making informed decisions about travel and safety.
      This document is intended for use by the development team, instructors, testers, and future maintainers of the system.
      
      1. Introduction
      1.1 Purpose
      The purpose of this document is to specify the functional and non-functional requirements of a software system designed to visualize crime data, predict time-based crime likelihood, and provide region-specific travel recommendations based on safety.
      1.2 Scope
      This application will retrieve police report data from public sources and display aggregated crime data using a region-based map of Chicago. The system will offer features such as filtering by crime type, forecasting crime likelihood, and customizable travel safety recommendations. The target users include present and prospective residents, students, and travelers seeking insights into the safety of specific areas.
      1.3 Definitions, Acronyms, and Abbreviations
      SRS: Software Requirements Specification
      UI: User Interface
      USR – User Functional Requirement
      SYS – System Functional Requirement
      USR-NFR – User Non-Functional Requirement
      SYS-NFR – System Non-Functional Requirement
      Region-based shading: Visualization technique that uses color to represent data intensity in distinct areas
      
      2. Glossary
      Crime map: A visual representation of geographic crime data.
      Crime tolerance: A user-defined threshold for crime exposure used to tailor travel advice.
      Privacy masking: Techniques used to anonymize sensitive location data.
      Forecasting model: A statistical or machine learning method that predicts future crime likelihood.
      Top-5 accuracy: The proportion of real crimes that occur within the top 5 most likely areas predicted by the model.
      
      3. User requirements
      3.1 User Functional Requirements
      Crime Visualization
      USR-1.1: The user shall be able to view a map of Chicago split into distinct regions by community districts. (To help users understand which area they are navigating or analyzing.)
      USR-1.2: The user shall be able to see indicators of crime levels and types within each region. (To quickly assess safety and crime patterns.)
      USR-1.3: The user shall be able to display detailed crime statistics in a selected area. (For deeper insight.)
      Travel Guidance and Personalization
      USR-1.4: The user shall be able to view travel recommendations based on local crime levels. (To make safer travel decisions.)
      USR-1.5: The user should be able to adjust their crime tolerance level to influence travel recommendations. (To personalize system output.)
      Data Filtering and Forecasting
      USR-1.6: The user shall be able to filter crime data by type. (To focus on personally relevant threats.)
      USR-1.7: The user should be able to view the predicted likelihood of specific crimes occurring in different regions. (For proactive planning.)
      3.2 User Non-Functional Requirements
      USR-NFR-3.1: The user shall be able to use the system without prior technical knowledge. (To ensure accessibility for general users.)
      USR-NFR-3.2: The user interface shall be clear, intuitive, and accessible on various devices. (To ensure good usability.)
      USR-NFR-3.3: The system shall provide trustable, data-backed crime insights that users can rely on. (To build user confidence.)
      The system shall support the English language at minimum. (To ensure basic accessibility.)
      
      4. System Requirements
      4.1 System Functional Requirements
      Data Acquisition and Processing
      SYS-2.1: The system shall consistently retrieve Chicago police report data. (To ensure up-to-date information.)
      SYS-2.2: The system should forecast crime likelihood using a prediction model. (To provide forward-looking insights.)
      Map Generation and Display
      SYS-2.3: The system shall generate an interactive map of Chicago divided according to Chicago's 77 official neighborhoods. (To enable intuitive exploration.)
      SYS-2.4: The system shall display crime intensity and type using region-based color shading. (To communicate patterns clearly.)
      User Interaction and Output
      SYS-2.5: The system shall allow filtering of data by crime type and/or time range. (To enable data exploration.)
      SYS-2.6: The system should generate region-based travel recommendations based on user-defined crime tolerance. (To support personalized navigation decisions.)
      The system shall remember which page the user leaves off when the user exits the application. (To maintain continuity.)
      
      4.2 System Non-Functional Requirements
      Performance and Availability
      SYS-NFR-4.1: The system shall have 99% uptime over a rolling 30-day period. (To ensure availability.)
      SYS-NFR-4.2: The system should render the map within 2 seconds for 90% of users on standard 4G connections. (To optimize performance.)
      SYS-NFR-4.3: The system shall have a top-5 prediction accuracy of 70% or greater. (To establish the reliability of the system.)
      SYS-NFR-4.14: The system shall support concurrent access by at least 500 users without significant degradation in responsiveness (no more than 15% performance drop).
      SYS-NFR-4.15: Crime prediction results shall be generated within 3 seconds under standard operating conditions.
      Scalability and Maintainability
      SYS-NFR-4.4: The system codebase shall follow modular architecture principles to allow updates without affecting unrelated modules.
      SYS-NFR-4.5: The system shall support horizontal scaling to handle increased user demand during peak usage hours.
      SYS-NFR-4.6: Configuration changes (e.g., threshold for "high crime" indicators) shall be updatable without requiring system downtime.
      Compatibility
      SYS-NFR-4.16: The system shall be fully functional on mobile devices with >=2GB RAM and Android 10/iOS 13 or newer. (To ensure mobile compatibility.)
      SYS-NFR-4.17: The system shall be compatible with Windows 11+, macOS 11+, and Android 10+. (To support a broad user base.)
      Usability & Accessibility
      SYS-NFR-4.18: The system interface shall allow new users to perform basic operations (e.g., viewing crime data) with no training and ≤3 clicks.
      SYS-NFR-4.19: The system shall comply with WCAG 2.1 Level AA to ensure accessibility for users with disabilities.
      SYS-NFR-4.20: A guided onboarding or tooltip system shall be available for first-time users to assist with feature discovery.
      Privacy and Ethics
      SYS-NFR-4.21: The system shall not store any IP addresses or location data unless the user gives explicit consent. (To uphold user privacy.)
      SYS-NFR-4.22: The system shall implement privacy masking techniques to prevent the identification of individuals or addresses from crime data. (To prevent misuse or harm.)
      SYS-NFR-4.23: User data shall not be shared with third parties unless required by law or explicitly agreed to by the user.
      SYS-NFR-4.24: The system shall log all data access and modification events for auditability, but only store logs that are anonymized.
      
      5. System Evolution
      As the system matures, we anticipate integrating additional datasets from other cities beyond Chicago. The forecasting model may evolve to incorporate more variables as their relationship to crime is established, and data for them becomes available.
      As time goes on, we also anticipate that some data sources may become unavailable due to changing legal and industry environments. The software would necessarily need to be able to switch to other available sources of data.
      The software should be designed for scalability, allowing modular data pipeline updates, and potentially supporting new features like push notifications or user-submitted crime reports.
      Future releases may support multilingual interfaces and emergency service integration. API schema evolution should be anticipated, and compatibility with future operating systems and browsers maintained where feasible.
      
      Index
      Functional Requirements – Section 3
      Non-Functional Requirements – Section 4
      System Evolution – Section 5
      Glossary – Section 2
                `}
              </div>
            </div>
          </section>
        );
      }