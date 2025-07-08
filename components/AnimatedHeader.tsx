'use client'

import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function AnimatedHeader() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 bg-[#8C3A3A] dark:bg-gray-800 text-[#FCEFD9] dark:text-white shadow-md z-50"

    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-[#ffd9a8] transition">
          PBL 3 Group G
        </a>
        <nav className="space-x-6 flex items-center">
          <a href="/" className="hover:underline hover:text-[#ffd9a8] transition">Home</a>
          <a href="/research" className="hover:underline hover:text-[#ffd9a8] transition">Literature</a>
          <a href="/otherProjects" className="hover:underline hover:text-[#ffd9a8] transition">Other Projects</a>
          <a href="/document" className="hover:underline hover:text-[#ffd9a8] transition">Requirements Document</a>
          <a href="/SystemDesign" className="hover:underline hover:text-[#ffd9a8] transition">System Design</a>
          <a href="/systemArchitecture" className="hover:underline hover:text-[#ffd9a8] transition">System Architecture</a>

          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  )
}


