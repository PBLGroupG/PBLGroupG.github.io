'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function AnimatedHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 bg-[#8C3A3A] dark:bg-[#4C1F1F] text-[#FCEFD9] dark:text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-[#ffd9a8] transition">
          CrimeMapR
        </a>

        <nav className="space-x-6 flex items-center relative">
    
          <a href="/research" className="hover:underline hover:text-[#ffd9a8] transition">Literature</a>
          <a href="/otherProjects" className="hover:underline hover:text-[#ffd9a8] transition">Other Projects</a>

          {/* Project Phases Dropdown */}
          <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              className="hover:underline hover:text-[#ffd9a8] transition focus:outline-none"
            >
              Project Phases
            </button>

            {isOpen && (
              <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-[#FCEFD9] dark:bg-[#3B1F1F] ring-1 ring-black ring-opacity-5">
                <div className="py-1 text-sm">
                  <a
                    href="/document"
                    className="block px-4 py-2 text-gray-800 dark:text-[#FCEFD9] hover:bg-[#ffe8c4] dark:hover:bg-[#5A2B2B] transition"
                  >
                    Requirements Document
                  </a>
                  <a
                    href="/SystemDesign"
                    className="block px-4 py-2 text-gray-800 dark:text-[#FCEFD9] hover:bg-[#ffe8c4] dark:hover:bg-[#5A2B2B] transition"
                  >
                    System Design
                  </a>
                  <a
                    href="/systemArchitecture"
                    className="block px-4 py-2 text-gray-800 dark:text-[#FCEFD9] hover:bg-[#ffe8c4] dark:hover:bg-[#5A2B2B] transition"
                  >
                    System Architecture
                  </a>
                </div>
              </div>
            )}
          </div>

          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  )
}