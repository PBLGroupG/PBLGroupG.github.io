export default function OtherProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-100 transition-colors">
      <div className="max-w-5xl mx-auto animate-fadeIn space-y-12">
        <h1 className="text-center text-6xl font-bold text-gray-900 mb-12">
          Other Projects
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-lg font-semibold">Application</th>
                <th className="px-6 py-3 text-lg font-semibold">Pros</th>
                <th className="px-6 py-3 text-lg font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://gis.chicagopolice.org/pages/apps" className="text-blue-600 underline">CLEARmap (Chicago Police Department)</a>
                </td>
                <td className="px-6 py-4">
                  - Multiple tools: crime reporting, offender maps, statistics.<br/>
                  - Filter by date, crime type, district, area.<br/>
                  - Interactive crime icons.
                </td>
                <td className="px-6 py-4">
                  - Grouped \"other crimes\".<br/>
                  - Poor mobile experience.<br/>
                  - No predictive analytics.
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://www.crimeometer.com/embeddable-crime-map" className="text-blue-600 underline">Crimeometer</a>
                </td>
                <td className="px-6 py-4">
                  - Heatmaps and risk maps.<br/>
                  - U.S. coverage.<br/>
                  - Developer API available.
                </td>
                <td className="px-6 py-4">
                  - Dense heatmaps.<br/>
                  - Subscription fees.<br/>
                  - No predictive analytics.
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://www.crimeandplace.com/features.html" className="text-blue-600 underline">Crime and Place</a>
                </td>
                <td className="px-6 py-4">
                  - Good for travelers.<br/>
                  - Offline access.<br/>
                  - Trip planning features.
                </td>
                <td className="px-6 py-4">
                  - Compass UI may be confusing.<br/>
                  - No web version.<br/>
                  - No incident-level details.
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://igarape.org.br/en/tech/crimeradar/" className="text-blue-600 underline">CrimeRadar</a>
                </td>
                <td className="px-6 py-4">
                  - Predictive modeling.<br/>
                  - Real-time forecasting.<br/>
                  - Colorful visualizations.
                </td>
                <td className="px-6 py-4">
                  - Public platform shut down.
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://apps.apple.com/gb/app/crime-map-watch-uk/id1506650460" className="text-blue-600 underline">Crime Map Watch UK</a>
                </td>
                <td className="px-6 py-4">
                  - Search by postcode.<br/>
                  - Historical data access.<br/>
                  - Street-level detail.
                </td>
                <td className="px-6 py-4">
                  - Precision issues with sliders.<br/>
                  - No prediction feature.
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-6 py-4 font-medium">
                  <a href="https://webapp.safecity.in" className="text-blue-600 underline">Safecity</a>
                </td>
                <td className="px-6 py-4">
                  - Crowdsourced reporting.<br/>
                  - Community engagement.<br/>
                  - Global reach.
                </td>
                <td className="px-6 py-4">
                  - Only gender-based harassment.<br/>
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
