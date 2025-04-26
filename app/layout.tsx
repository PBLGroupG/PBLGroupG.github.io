import './globals.css'
import ThemeToggle from '../components/ThemeToggle'
import { ThemeProvider } from 'next-themes'

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
        {/*Replace with actual GitHub repo name */}
        <base href="PBLGroupG.github.io" />
      </head>
      <body className="text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold hover:text-gray-300 transition">
                PBL 3 Group G
              </a>
              <nav className="space-x-6 flex items-center">
                <a href="/" className="hover:underline hover:text-gray-300 transition">Home</a>
                <a href="/research" className="hover:underline hover:text-gray-300 transition">Literature</a>
                <a href="/otherProjects" className="hover:underline hover:text-gray-300 transition">Other Projects</a>
                <ThemeToggle />
              </nav>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-6 py-16">
            {children}
          </main>

          {/* <footer className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-center py-6 mt-12 text-sm">
            © 2025 PBL GROUP G. All rights reserved.
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
