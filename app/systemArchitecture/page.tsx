'use client'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

export default function SystemArchitecture() {
  return (
    <>
      <Head>
        <title>System Architecture - Crime Forecasting App</title>
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold">System Architecture</h1>
          <div className="w-full flex justify-center">
  <img
    src="/System Architecure.svg"
    alt="Architecture Overview Diagram"
    className="w-full max-w-3xl h-auto border border-gray-300 dark:border-gray-600 rounded"
  />
</div>


          {/* Tables */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {[
                    ["User", "The person who uses the application to view crime data and get travel recommendations."],
                    ["Main Page", "The primary user interface that provides access to all application features."],
                    ["Preference", "A module that allows the user to set and save personal settings, like crime tolerance and data filters."],
                    ["Crime Map", "The core component that processes data and user inputs to generate the crime visualization."],
                    ["Crime Data", "The data source of historical Chicago police reports used for analysis and prediction."],
                    ["Weather API", "An external service providing weather data, used as an input for the forecasting model."],
                    ["Forecasting", "The backend module uses a predictive model with Crime Data and Weather API inputs to calculate future crime likelihoods."],
                    ["Display Shaded Map", "The interactive map shown to the user, which uses color-shading to visualize crime data and forecasts."]
                  ].map(([term, desc], index) => (
                    <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                      <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                      <td className="px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
<div className="w-full flex justify-center">
<img
    src="/AD.svg"
    alt="Architecture Overview Diagram"
    className="w-full max-w-3xl h-auto border border-gray-300 dark:border-gray-600 rounded"
    
  />
</div>



            <div>
              <h2 className="text-xl font-semibold mb-2">Application (Input)</h2>
              <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {[
                    ["User Preference Interface", "Screen where users can set and adjust personal settings, such as crime tolerance levels and data filters."],
                    ["Forecasting Interface", "Screen that allows users to interact with the prediction features, like selecting time windows or crime types to forecast."],
                    ["Main Page Interface", "The initial screen and primary navigation hub that users see when they open the application."],
                    ["Map Page Interface", "Displays the map view based on user settings and data."]
                  ].map(([term, desc], index) => (
                    <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                      <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                      <td className="px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">System (Process)</h2>
              <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {[
                    ["Preference Service", "Backend service that manages the logic for saving, retrieving, and applying user-defined preferences."],
                    ["Forecasting System", "The core engine that processes historical crime data and weather inputs to generate crime likelihood predictions."],
                    ["Main Map Service", "Service responsible for fetching and processing the necessary data to be displayed on the map."]
                  ].map(([term, desc], index) => (
                    <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                      <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                      <td className="px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Database and API (Process)</h2>
              <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {[
                    ["Weather API", "External API that provides weather data, used as an input variable for the Forecasting System."],
                    ["Crime Database", "The database storing historical Chicago police report data used for analysis and prediction."]
                  ].map(([term, desc], index) => (
                    <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                      <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                      <td className="px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Application (Output)</h2>
              <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {[
                    ["Shaded Map", "The final, interactive map visualization rendered to the user, displaying crime intensity with color-shading."],
                    ["Forecasting Result", "The specific output from the Forecasting System, presented to the user as crime likelihoods or probabilities."],
                    ["Crime Map Statistics", "Provides numerical insights and summaries of crime data."]
                  ].map(([term, desc], index) => (
                    <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                      <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                      <td className="px-4 py-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Architectural Representation</h2>
            <p>This document provides a comprehensive overview of the system architecture for the Crime Mapping and Forecasting Application. The architecture is detailed through component and data flow diagrams, which illustrate the system's structure, its components, and the interactions between them.</p>

            <h2 className="text-2xl font-bold mt-8">2. Architectural Goals and Constraints</h2>
            <p>The architecture is designed to achieve specific goals related to performance, scalability, usability, and maintainability while adhering to strict privacy constraints.</p>

            <table className="w-full table-auto border border-gray-300 dark:border-gray-700 mt-4">
              <tbody>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top w-1/3">Performance</td>
                  <td className="px-4 py-2">The system is optimized for fast, responsive user interaction. Key metrics include map loads under 2 seconds and forecast generation under 3 seconds.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Scalability</td>
                  <td className="px-4 py-2">Designed to support a growing user base, the system must handle 500 concurrent users without significant performance loss and allow for horizontal scaling.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Maintainability</td>
                  <td className="px-4 py-2">A modular architecture ensures that components can be updated independently, facilitating easier maintenance and future development.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Usability</td>
                  <td className="px-4 py-2">The interface is designed to be intuitive for non-technical users, enabling them to complete key tasks efficiently.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Privacy</td>
                  <td className="px-4 py-2">A core constraint is the protection of user data. The system is designed to function without storing personal information and anonymizes all crime data to prevent identification.</td>
                </tr>
              </tbody>
            </table>
            </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Logical View</h2>
            <p>The system's architecture is organized into three distinct logical layers:</p>
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top w-1/3">Presentation Layer</td>
                  <td className="px-4 py-2">The client-side interface that the user directly interacts with. It includes all UI components for input and visual feedback.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Application Layer</td>
                  <td className="px-4 py-2">The server-side layer contains the core business logic, including services for user preferences, data processing, and forecasting.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Data Layer</td>
                  <td className="px-4 py-2">This layer is responsible for data persistence and retrieval. It includes the crime database and interfaces with external APIs for additional data, like weather.</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold mt-8">4. Process View</h2>
            <p>This view illustrates the data flow for the crime forecasting feature:</p>
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top w-1/3">Request</td>
                  <td className="px-4 py-2">The user initiates a forecast request through the Forecasting Interface.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Invocation</td>
                  <td className="px-4 py-2">The request is sent to the Main Map Service, which calls the Forecasting System.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Data Retrieval</td>
                  <td className="px-4 py-2">The Forecasting System pulls historical data from the Crime Database and real-time data from the Weather API.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Prediction</td>
                  <td className="px-4 py-2">The system processes the data and executes its forecasting model.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Response</td>
                  <td className="px-4 py-2">The prediction result is sent back to the Main Map Service.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Visualization</td>
                  <td className="px-4 py-2">The service formats the data, which is then sent to the client and rendered as the Forecasting Result and updated Shaded Map.</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold mt-8">5. Development View</h2>
            <p>The system is structured into modular components to streamline development:</p>
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top w-1/3">Frontend</td>
                  <td className="px-4 py-2">A single-page application (SPA) built with a modern web framework, containing all UI components and client-side logic.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Backend</td>
                  <td className="px-4 py-2">Composed of distinct services for handling core functionalities: Preference Service, Main Map Service, and Forecasting System.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Data Access</td>
                  <td className="px-4 py-2">A dedicated layer in the backend for managing all database interactions and external API calls.</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold mt-8">6. Physical View</h2>
            <p>The deployment model is cloud-based and follows a client-server architecture:</p>
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top w-1/3">Client</td>
                  <td className="px-4 py-2">A web application delivered via a Content Delivery Network (CDN) to ensure fast loading times for users globally.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Server</td>
                  <td className="px-4 py-2">Backend services are containerized and deployed on a scalable cloud platform, enabling flexible resource management.</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="font-semibold px-4 py-2 align-top">Database</td>
                  <td className="px-4 py-2">A managed cloud database service is used to ensure data reliability, scalability, and security.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  )
}
