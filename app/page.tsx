'use client'

import { useState } from 'react'

const groupMembers = [
  'Alessandro Enriqco',
  'Yew Zhi Jie',
  'Xu Junyi',
  'Dennis Stolboyov',
  'Nicolas Gallen',
  'Sittatoworn Chidchanok',
]

export default function HomePage() {
  return (
    <section className="min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl w-full animate-fadeIn mx-auto">
        <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          PBL Group G
        </h1>

        {/* Sections */}
        {[
          {
            title: 'Project Proposal',
            text: `An interactive map of Chicago that summarizes aggregated crime reports by geographical area. It includes safety recommendations and predictive insights into future crime levels—offering a clearer view of reality.

This tool aims to provide accessible, accurate information to the public, helping to identify genuinely dangerous areas while dispelling myths about others.`,
          },
          {
            title: 'Problem',
            text: `Crime, and the public's perception of it.

While crime is always a concern, the public's hypersensitivity to it can become a separate issue. Fear of crime can lead to psychological stress, worsen physical health, and reduce economic activity.`,
          },
          {
            title: 'Other Projects',
            text: `Existing Chicago crime maps tend to be cluttered and difficult to interpret. Our goal is clarity and usability.`,
          },
        ].map((section, index) => (
          <div className="mb-10" key={index}>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}

        {/* CTA Button */}
        <div className="text-left mb-20">
          <a
            href="/research"
            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-stone-700 hover:scale-105 transition-all duration-300"
          >
            Visit Research Page
          </a>
        </div>

        {/* Group Member Names */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Meet the Group Members
          </h2>

          <ul className="space-y-2 text-lg text-gray-800 dark:text-gray-200">
            {groupMembers.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
