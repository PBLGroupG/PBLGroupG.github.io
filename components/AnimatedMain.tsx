'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedMain({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      {children}
    </motion.main>
  )
}
