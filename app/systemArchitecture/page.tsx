'use client'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import SectionCard from '../../components/SectionCards'

export default function SystemArchitecture() {
  return (
    <>
      <Head>
        <title>System Architecture - Crime Forecasting App</title>
      </Head>

      <div className="min-h-screen bg-[#fdf8f3] dark:bg-[#2B1E1E] text-black dark:text-[#FCEFD9] px-6 py-12 transition-colors">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold">System Architecture</h1>

          {/* Top Diagram */}
          <SectionCard title="Architecture Overview Diagram">
            <img
              src="/System Architecure.svg"
              alt="Architecture Overview Diagram"
              className="w-full max-w-3xl h-auto border border-gray-300 dark:border-[#FCEFD9] rounded mx-auto"
            />
          </SectionCard>

          {/* Table 1 */}
          <SectionCard title="Component Definitions">
            <table className="w-full table-auto border border-gray-300 dark:border-[#FCEFD9]">
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
                  <tr key={index} className="border-t border-gray-300 dark:border-[#FCEFD9]">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          {/* Second Diagram */}
          <SectionCard title="Secondary Diagram">
            <img
              src="/A3.svg"
              alt="Secondary Diagram"
              className="w-full max-w-3xl h-auto border border-gray-300 dark:border-[#FCEFD9] rounded mx-auto"
            />
          </SectionCard>

          {/* Input Table */}
          <SectionCard title="Application (Input)">
            <table className="w-full table-auto border border-gray-300 dark:border-[#FCEFD9]">
              <tbody>
                {[
                  ["User Preference Interface", "Screen where users can set and adjust personal settings, such as crime tolerance levels and data filters."],
                  ["Forecasting Interface", "Screen that allows users to interact with the prediction features, like selecting time windows or crime types to forecast."],
                  ["Main Page Interface", "The initial screen and primary navigation hub that users see when they open the application."],
                  ["Map Page Interface", "Displays the map view based on user settings and data."]
                ].map(([term, desc], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-[#FCEFD9]">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          {/* System Table */}
          <SectionCard title="System (Process)">
            <table className="w-full table-auto border border-gray-300 dark:border-[#FCEFD9]">
              <tbody>
                {[
                  ["Preference Service", "Backend service that manages the logic for saving, retrieving, and applying user-defined preferences."],
                  ["Forecasting System", "The core engine that processes historical crime data and weather inputs to generate crime likelihood predictions."],
                  ["Main Map Service", "Service responsible for fetching and processing the necessary data to be displayed on the map."]
                ].map(([term, desc], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-[#FCEFD9]">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          {/* API + DB Table */}
          <SectionCard title="Database and API (Process)">
            <table className="w-full table-auto border border-gray-300 dark:border-[#FCEFD9]">
              <tbody>
                {[
                  ["Weather API", "External API that provides weather data, used as an input variable for the Forecasting System."],
                  ["Crime Database", "The database storing historical Chicago police report data used for analysis and prediction."]
                ].map(([term, desc], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-[#FCEFD9]">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          {/* Output Table */}
          <SectionCard title="Application (Output)">
            <table className="w-full table-auto border border-gray-300 dark:border-[#FCEFD9]">
              <tbody>
                {[
                  ["Shaded Map", "The final, interactive map visualization rendered to the user, displaying crime intensity with color-shading."],
                  ["Forecasting Result", "The specific output from the Forecasting System, presented to the user as crime likelihoods or probabilities."],
                  ["Crime Map Statistics", "Provides numerical insights and summaries of crime data."]
                ].map(([term, desc], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-[#FCEFD9]">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{term}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

                    {/* Architectural Textual Sections */}
                    <SectionCard title="1. Architectural Representation">
            <p>
              This document provides a comprehensive overview of the system architecture for the Crime Mapping and Forecasting Application. The architecture is detailed through component and data flow diagrams, which illustrate the system's structure, its components, and the interactions between them.
            </p>
          </SectionCard>

          <SectionCard title="2. Architectural Goals and Constraints">
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700 mt-4">
              <tbody>
                {[
                  ["Performance", "The system is optimized for fast, responsive user interaction. Key metrics include map loads under 2 seconds and forecast generation under 3 seconds."],
                  ["Scalability", "Designed to support a growing user base, the system must handle 500 concurrent users without significant performance loss and allow for horizontal scaling."],
                  ["Maintainability", "A modular architecture ensures that components can be updated independently, facilitating easier maintenance and future development."],
                  ["Usability", "The interface is designed to be intuitive for non-technical users, enabling them to complete key tasks efficiently."],
                  ["Privacy", "A core constraint is the protection of user data. The system is designed to function without storing personal information and anonymizes all crime data to prevent identification."]
                ].map(([label, text], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{label}</td>
                    <td className="px-4 py-2">{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          <SectionCard title="3. Logical View">
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700 mt-4">
              <tbody>
                {[
                  ["Presentation Layer", "The client-side interface that the user directly interacts with. It includes all UI components for input and visual feedback."],
                  ["Application Layer", "The server-side layer contains the core business logic, including services for user preferences, data processing, and forecasting."],
                  ["Data Layer", "This layer is responsible for data persistence and retrieval. It includes the crime database and interfaces with external APIs for additional data, like weather."]
                ].map(([label, text], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{label}</td>
                    <td className="px-4 py-2">{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>

          <SectionCard title="4. Process View">
            <table className="w-full table-auto border border-gray-300 dark:border-gray-700 mt-4">
              <tbody>
                {[
                  ["Request", "The user initiates a forecast request through the Forecasting Interface."],
                  ["Invocation", "The request is sent to the Main Map Service, which calls the Forecasting System."],
                  ["Data Retrieval", "The Forecasting System pulls historical data from the Crime Database and real-time data from the Weather API."],
                  ["Prediction", "The system processes the data and executes its forecasting model."],
                  ["Response", "The prediction result is sent back to the Main Map Service."],
                  ["Visualization", "The service formats the data, which is then sent to the client and rendered as the Forecasting Result and updated Shaded Map."]
                ].map(([label, text], index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="font-semibold px-4 py-2 align-top w-1/3">{label}</td>
                    <td className="px-4 py-2">{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>
        </div>
      </div>
    </>
  )
}