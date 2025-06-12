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
    <html lang="en" suppressHydrationWarning className="bg-white dark:bg-gray-900">
      <head>
        <base href="PBLGroupG.github.io" />
      </head>
      <body className="text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedHeader />
          <AnimatedMain>{children}</AnimatedMain>
          {/* You can re-enable footer here if needed */}
        </ThemeProvider>
      </body>
    </html>
  )
}
