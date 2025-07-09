'use client'

import { useState } from 'react'
import Head from 'next/head'
import SectionCard from '../components/SectionCards'
import {
  Book,
  AlertTriangle,
  FileText,
  MapPin,
  Database,
} from 'lucide-react'

const groupMembers = [
  'Alessandro Enriqco',
  'Yew Zhi Jie',
  'Xu Junyi',
  'Dennis Stolbovoy',
  'Nicholas Gallen',
  'Chidchanok Sittitaworn',
]

const sections = [
  {
    title: 'Intro',
    icon: Book,
    text: `Smart cities use digital technology and data to improve urban life, including public safety. 
By combining sensors, open data, and predictive analytics, smart cities can respond more effectively to crime and inform citizens more. 
Traditional crime awareness relies on word of mouth or press coverage, and this tends to distort public opinion and generate unnecessary fear or disinformation.

Crime mapping is among the most significant smart city technologies, allowing visualization of where and when crimes occur. 
It makes transparency easier, guides individual safety decisions, and even predicts crime patterns in the future. 
When built on credible data and thorough analysis, it empowers citizens and aids city governments in making smarter resource allocation. 
In this project, such technology will be deployed in Chicago to close the gap between perceived and actual crime levels.`,
  },
  {
    title: 'Problem',
    icon: AlertTriangle,
    text: `Knowledge of high crime areas typically comes from word of mouth, or one’s intuition. 
This can create misconceptions on actual local crime rates. An underestimation of crime rates can lead to someone being more likely to be the victim of a crime. 
While crime victimization is always a problem, the public's hypersensitivity to it can be a problem of its own. 
A fear of crime can cause psychological stress, worsening physical health, and reduced economic activity. 
The public perception of crime also does not necessarily line up with reality. 
Specifically in the United States, the public has been overestimating crime levels in recent years.`,
  },
  {
    title: 'Literature Summary',
    icon: FileText,
    text: `From the reviewed literature, it presented us with five major findings. 
First, it is important to pinpoint hotspots of crime and risk by using machine learning, GIS, and crime mapping. 
Next, the environment, in the form of weather, holidays, social activities, and economic status, also plays into how and where crimes are committed. 
Third, public perception of crime (fear of crime) is often an independent and more powerful predictor of behavior than actual crime rates. 
Fourth, perception of risk of crime varies with age, race, and sex. 
Finally, predictive policing mechanisms can make existing biases worse if learning data are not managed responsibly.`,
  },
  {
    title: 'Proposal',
    icon: MapPin,
    text: `An interactive map of Chicago which summarizes aggregations of crime reports in different geographical areas, 
with recommendations on which areas are relatively safe, and which ones to avoid. 
The crime report data will also be used to predict future crime levels in each zone, similar to other projects in the past. 
This will give the public more accessible information on which areas are in fact dangerous, while also dispelling misconceptions about perceived high crime areas.`,
  },
  {
    title: 'Data',
    icon: Database,
    text: `The city of Chicago hosts a public, up-to-date, detailed dataset, with the type of crime committed, the time of the crime, the street, 
a description of the location, as well as more specific details depending on the kind of crime.

https://data.cityofchicago.org/Public-Safety/Crimes-2025/t7ek-mgzi/data_preview

Weather has also been shown to be a significant factor in crime rates, so historical weather records will be used.`,
  },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CrimeMapR</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className="min-h-screen px-4 py-20 bg-[#fdf8f3] dark:bg-[#2B1E1E] transition-colors">
        <div className="max-w-5xl w-full animate-fadeIn mx-auto">
          
          {/* Logo Image */}
          <div className="flex justify-center mb-6">
          <img
  src="/logo.png"
  alt="CrimeMapR Logo"
  className="w-32 h-auto"
/>
          </div>

          {/* Title */}
          <h1 className="text-center text-6xl font-bold mb-16">
            <span className="text-yellow-500">CrimeMap</span>
            <span className="text-red-600">R</span>
          </h1>

          {/* Section Cards */}
          <div className="grid gap-12 md:grid-cols-2">
            {sections.map(({ title, text, icon }, index) => (
              <SectionCard key={index} title={title} icon={icon}>
                {text}
              </SectionCard>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16 mb-20">
            <a
              href="/research"
              className="inline-block bg-[#8C3A3A] text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-[#702C2C] hover:scale-105 transition-all duration-300"
            >
              Visit Literature Page
            </a>
          </div>

          {/* Group Member Cards */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center text-[#361414] dark:text-[#FCEFD9] mb-8">
              Group G: Members
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {groupMembers.map((name, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white dark:bg-[#3B1F1F] rounded-xl shadow-md p-4 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#8C3A3A] dark:bg-[#FCEFD9] flex items-center justify-center text-white dark:text-[#3B1F1F] font-semibold text-xl mb-3">
                    {name
                      .split(' ')
                      .map(word => word[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <p className="text-center text-lg font-medium text-[#361414] dark:text-[#FCEFD9]">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-sm text-[#555] dark:text-[#ccc]">
            © 2025 Group G – Ritsumeikan University
          </footer>
        </div>
      </section>
    </>
  )
}
