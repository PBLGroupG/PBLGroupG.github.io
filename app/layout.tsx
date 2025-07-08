import './globals.css'
import { ThemeProvider } from 'next-themes'
import AnimatedHeader from '../components/AnimatedHeader'
import AnimatedMain from '../components/AnimatedMain'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <base href="PBLGroupG.github.io" />
        <link rel="icon" href="/icon.jpg" />
        {/* Optional: Add a fallback title in case metadata doesn't render */}
        <title>PBL Group G</title>
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedHeader />
          <AnimatedMain>
            <div className="rounded-3xl border border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-xl">
              {children}
            </div>
          </AnimatedMain>
        </ThemeProvider>
      </body>
    </html>
  )
}
