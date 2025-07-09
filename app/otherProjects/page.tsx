'use client'

export default function OtherProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 transition-colors duration-300 bg-[#fdf8f3] dark:bg-[#2B1E1E]">
      <div className="max-w-5xl mx-auto animate-fadeIn space-y-12">
        {/* Page Title */}
        <h1 className="text-center text-6xl font-bold text-[#361414] dark:text-[#FCEFD9] mb-12">
          Other Projects
        </h1>

        {/* Table Card */}
        <div className="rounded-3xl border border-white/10 bg-[#FFF9F4] dark:bg-[#4B2E2A] p-6 shadow-md overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300 dark:border-white/10 rounded-lg">
          <thead className="bg-[#FFF9F4] dark:bg-[#3C2B28]">
              <tr>
                <th className="px-6 py-3 text-lg font-semibold text-[#361414] dark:text-[#FCEFD9]">Application</th>
                <th className="px-6 py-3 text-lg font-semibold text-[#361414] dark:text-[#FCEFD9]">Pros</th>
                <th className="px-6 py-3 text-lg font-semibold text-[#361414] dark:text-[#FCEFD9]">Cons</th>
              </tr>
            </thead>
            <tbody className="text-[#361414] dark:text-[#FCEFD9]">
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://gis.chicagopolice.org/pages/apps" className="text-blue-600 dark:text-blue-400 underline">CLEARmap (Chicago Police Department)</a>
                </td>
                <td className="px-6 py-4">
                  - Multiple tools: crime reporting, offender maps, statistics.<br />
                  - Filter by date, crime type, district, area.<br />
                  - Interactive crime icons.
                </td>
                <td className="px-6 py-4">
                  - Grouped "other crimes".<br />
                  - Poor mobile experience.<br />
                  - No predictive analytics.
                </td>
              </tr>
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://www.crimeometer.com/embeddable-crime-map" className="text-blue-600 dark:text-blue-400 underline">Crimeometer</a>
                </td>
                <td className="px-6 py-4">
                  - Heatmaps and risk maps.<br />
                  - U.S. coverage.<br />
                  - Developer API available.
                </td>
                <td className="px-6 py-4">
                  - Dense heatmaps.<br />
                  - Subscription fees.<br />
                  - No predictive analytics.
                </td>
              </tr>
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://www.crimeandplace.com/features.html" className="text-blue-600 dark:text-blue-400 underline">Crime and Place</a>
                </td>
                <td className="px-6 py-4">
                  - Good for travelers.<br />
                  - Offline access.<br />
                  - Trip planning features.
                </td>
                <td className="px-6 py-4">
                  - Compass UI may be confusing.<br />
                  - No web version.<br />
                  - No incident-level details.
                </td>
              </tr>
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://igarape.org.br/en/tech/crimeradar/" className="text-blue-600 dark:text-blue-400 underline">CrimeRadar</a>
                </td>
                <td className="px-6 py-4">
                  - Predictive modeling.<br />
                  - Real-time forecasting.<br />
                  - Colorful visualizations.
                </td>
                <td className="px-6 py-4">
                  - Public platform shut down.
                </td>
              </tr>
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://apps.apple.com/gb/app/crime-map-watch-uk/id1506650460" className="text-blue-600 dark:text-blue-400 underline">Crime Map Watch UK</a>
                </td>
                <td className="px-6 py-4">
                  - Search by postcode.<br />
                  - Historical data access.<br />
                  - Street-level detail.
                </td>
                <td className="px-6 py-4">
                  - Precision issues with sliders.<br />
                  - No prediction feature.
                </td>
              </tr>
              <tr className="border-t border-gray-300 dark:border-white/10">
                <td className="px-6 py-4 font-medium">
                  <a href="https://webapp.safecity.in" className="text-blue-600 dark:text-blue-400 underline">Safecity</a>
                </td>
                <td className="px-6 py-4">
                  - Crowdsourced reporting.<br />
                  - Community engagement.<br />
                  - Global reach.
                </td>
                <td className="px-6 py-4">
                  - Only gender-based harassment.<br />
                  - No external verification.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}