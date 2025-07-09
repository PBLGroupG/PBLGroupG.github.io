// app/layout.tsx
import './globals.css'
import { ThemeProvider } from 'next-themes'
import AnimatedHeader from '../components/AnimatedHeader'
import AnimatedMain from '../components/AnimatedMain'
import PageWrapper from '../components/PageWrapper'

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <base href="/" />
        <link rel="icon" href="/icon.ico" />
        <title>PBL Group G</title>
      </head>
      <body className="h-full bg-[#FFF9F4] dark:bg-[#2C1D1A] text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedHeader />
          <AnimatedMain>
            <PageWrapper>{children}</PageWrapper>
          </AnimatedMain>
        </ThemeProvider>
      </body>
    </html>
  )
}