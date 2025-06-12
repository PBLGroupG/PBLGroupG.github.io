import './globals.css'
import ThemeToggle from '../components/ThemeToggle'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'PBL Group G',
  description: 'Explore cutting-edge research and ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white dark:bg-gray-900">
      <head>
        <base href="PBLGroupG.github.io" />
      </head>
      <body className="text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Animated Header */}
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="sticky top-0 bg-gray-800 text-white shadow-md z-50"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold hover:text-gray-300 transition">
                PBL 3 Group G
              </a>
              <nav className="space-x-6 flex items-center">
                <a href="/" className="hover:underline hover:text-gray-300 transition">Home</a>
                <a href="/research" className="hover:underline hover:text-gray-300 transition">Literature</a>
                <a href="/otherProjects" className="hover:underline hover:text-gray-300 transition">Other Projects</a>
                <a href="/document" className="hover:underline hover:text-gray-300 transition">Requirements Document</a>
                <a href="/SystemDesign" className="hover:underline hover:text-gray-300 transition">System Design</a>
                <ThemeToggle />
              </nav>
            </div>
          </motion.header>

          {/* Animated Main Content */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="max-w-6xl mx-auto px-6 py-16"
          >
            {children}
          </motion.main>

          {/* Uncomment if you want a footer later */}
          {/*
          <footer className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-center py-6 mt-12 text-sm">
            © 2025 PBL GROUP G. All rights reserved.
          </footer>
          */}
        </ThemeProvider>
      </body>
    </html>
  )
}
