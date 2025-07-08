'use client'

import Image from 'next/image'
import { useState } from 'react'



export default function SystemDesign() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const images = [
    { title: '1. Use Case Diagram', src: '/useCase.png' },
    { title: '2. Class Diagram', src: '/classdiagram.drawio-2.svg' },
    { title: '3. State Diagram', src: '/StateDiagram-3.svg' },
    { title: '4. System Overview Diagram', src: '/SystemOverviewSVG.svg' },
    { title: '5. Crime Forecasting Activity Diagram', src: '/CrimeForecastingSVG.svg' },
    { title: '6.Rendering Map Sequence Diagram ', src: '/Sequence1.drawio-2.svg' },
    { title: '7. Crime Forecaset Sequence Diagram', src: '/sequence2.drawio-2.svg' },
    { title: '8. Daily Server Updates Sequence Diagram ', src: '/sequence3.drawio-2.svg' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          System Design Diagrams
        </h1>

        {images.map(({ title, src }, index) => {
          const descriptions = [
            "This use case diagram shows the main interactions between the user and the system. It outlines essential actions such as viewing crime maps, requesting forecasts, filtering crime types, and customizing display preferences.",
            "This class diagram shows the main classes involved in the system along with their attributes, methods, associations, and multiplicities. It captures both the client-side and server-side components, showing how the classes interact to handle crime data display, filtering, forecasting, and user interface logic.",
            "The state diagram shows how the program runs from startup to termination. The system loads saved settings, initializes the map and interface to an idle ready state, then responds to user actions. When users click regions, change filters, or request forecasts, the system fetches data and updates the display if successful, or notifies users of errors and returns to idle ready if it fails. The program terminates when the user closes the application.",
            "The system overview diagram shows user interaction flow from app launch to map usage. Users can set preferences, view crime stats by clicking map regions, and input time and destination to get crime-based travel safety suggestions.",
            "CrimeForecasting. The system automatically checks for new crime data and runs forecast models daily at 5:00 PM Chicago time, ensuring users get up-to-date recommendations. If no new data is found, it retries later; after a successful update, the system reboots to start a new cycle.",
            "This sequence diagram shows the process of the user opening the app, the app requesting crime summary data from the server, and then shading and rendering the map based on the received data.",
            "This sequence diagram shows the process of the user inputting a date and time to request a forecast. The server returns pre-calculated forecast data, and the app updates the shading of the map accordingly.",
            "This sequence diagram shows the daily server-side update process, where the server retrieves crime and weather data from external APIs, cleans the data, calculates regional statistics, and runs the forecasting model."
          ];

          return (
            <section className="mb-12" key={index}>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h2>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800 relative">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md w-full h-auto cursor-zoom-in"
                  onClick={() => setZoomedImage(src)}
                />
                {descriptions[index] && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{descriptions[index]}</p>
                )}
              </div>
            </section>
          );
        })}

        {zoomedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Zoomed Diagram"
              className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  )
}
