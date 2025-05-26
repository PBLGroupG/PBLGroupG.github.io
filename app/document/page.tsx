import { useState } from "react";

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
};

function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl p-6 bg-gray-50 space-y-4">
      <button
        className="w-full text-left text-xl font-bold mb-2 text-black hover:text-blue-600"
        onClick={() => setOpen(!open)}
      >
        {title} {open ? "▲" : "▼"}
      </button>
      {open && <div className="space-y-4 border-t pt-4">{children}</div>}
    </div>
  );
}


export default function DocumentPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-black transition-colors">
      <div className="max-w-4xl mx-auto space-y-10 font-sans text-[16px]">
        <h1 className="text-center text-3xl font-bold mb-2">Software Requirements Specification (SRS)</h1>
        <h2 className="text-center text-xl font-medium mb-12">Crime Mapping and Forecasting Application</h2>

        <article className="space-y-10">
          <CollapsibleSection title="4. System Requirements">
            <h4 className="font-semibold">4.1 System Functional Requirements</h4>
            <p className="mt-2 font-medium">Data Acquisition and Processing</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.1: The system shall consistently retrieve Chicago police report data.</li>
              <li>SYS-2.2: The system should forecast crime likelihood using a prediction model.</li>
            </ul>
            <p className="mt-2 font-medium">Map Generation and Display</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.3: The system shall generate an interactive map of Chicago divided according to the city's 77 neighborhoods.</li>
              <li>SYS-2.4: The system shall display crime intensity and type using region-based color shading.</li>
            </ul>
            <p className="mt-2 font-medium">User Interaction and Output</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-2.5: The system shall allow filtering of data by crime type and/or time range.</li>
              <li>SYS-2.6: The system should generate region-based travel recommendations based on user-defined crime tolerance.</li>
              <li>SYS-2.7: The system shall remember the user’s last viewed page upon re-entry to the application.</li>
            </ul>

            <h4 className="mt-4 font-semibold">4.2 System Non-Functional Requirements</h4>
            <p className="mt-2 font-medium">Performance and Availability</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.1: 99% uptime over a 30-day period.</li>
              <li>SYS-NFR-4.2: Map rendering within 2 seconds for 90% of users on standard 4G.</li>
              <li>SYS-NFR-4.3: Top-5 prediction accuracy of 70% or higher.</li>
              <li>SYS-NFR-4.4: Support for 500 concurrent users with less than 15% performance drop.</li>
              <li>SYS-NFR-4.5: Crime predictions generated in under 3 seconds under normal conditions.</li>
            </ul>
            <p className="mt-2 font-medium">Scalability and Maintainability</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.6: Modular code architecture for safe updates.</li>
              <li>SYS-NFR-4.7: Supports horizontal scaling during peak hours.</li>
              <li>SYS-NFR-4.8: Configuration updates without system downtime.</li>
            </ul>
            <p className="mt-2 font-medium">Compatibility</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.9: Fully functional on mobile devices (≥2GB RAM, Android 10/iOS 13+).</li>
              <li>SYS-NFR-4.10: Compatible with Windows 11+, macOS 11+, Android 10+.</li>
            </ul>
            <p className="mt-2 font-medium">Usability and Accessibility</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.11: Basic features usable in ≤3 clicks without training.</li>
              <li>SYS-NFR-4.12: WCAG 2.1 Level AA compliance.</li>
              <li>SYS-NFR-4.13: Guided onboarding or tooltip help for first-time users.</li>
            </ul>
            <p className="mt-2 font-medium">Privacy and Ethics</p>
            <ul className="list-disc list-inside ml-6">
              <li>SYS-NFR-4.14: No IP/location storage without explicit consent.</li>
              <li>SYS-NFR-4.15: Use of privacy masking to anonymize data.</li>
              <li>SYS-NFR-4.16: No third-party data sharing without legal or user agreement.</li>
              <li>SYS-NFR-4.17: Anonymized logging of data access and changes.</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="5. System Evolution">
            <p className="indent-6">This section outlines potential future features based on user feedback and observed limitations of the current system.</p>

            <p className="mt-4 font-medium">Data and Forecasting</p>
            <p className="indent-6">Current: Historical data from Chicago Police Department.</p>
            <p className="indent-6">Future: Real-time data, social event indicators, and improved time-series models like LSTM or Prophet. Street-level granularity.</p>

            <p className="mt-4 font-medium">Personalization and Alerts</p>
            <p className="indent-6">Current: Manual map navigation.</p>
            <p className="indent-6">Future: Custom alerts via email/push for user-defined zones.</p>

            <p className="mt-4 font-medium">Accessibility and Language</p>
            <p className="indent-6">Current: English-only UI.</p>
            <p className="indent-6">Future: Multilingual interface (e.g., Japanese, Chinese, Spanish), screen reader compatibility, and tourist mode.</p>

            <p className="mt-4 font-medium">Emergency Integration</p>
            <p className="indent-6">Current: Static visual data.</p>
            <p className="indent-6">Future: Sync with emergency services and allow anonymous incident reporting.</p>

            <p className="mt-4 font-medium">Ethics and Privacy Enhancements</p>
            <p className="indent-6">Current: Aggregated crime data with basic masking.</p>
            <p className="indent-6">Future: Differential privacy, location blurring, and review boards for transparency.</p>

            <p className="mt-4 font-medium">Platform Expansion</p>
            <p className="indent-6">Current: Web-based application.</p>
            <p className="indent-6">Future: Modular backend APIs, native apps, and government dashboards.</p>

            <p className="mt-4 font-medium">Offline and Lightweight Access</p>
            <p className="indent-6">Current: Requires stable internet connection.</p>
            <p className="indent-6">Future: Offline caching and lightweight rendering for low-resource devices.</p>
          </CollapsibleSection>
        </article>
      </div>
    </section>
  );
}
