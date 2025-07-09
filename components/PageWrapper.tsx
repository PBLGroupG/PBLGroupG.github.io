'use client'
import React from 'react'

type PageWrapperProps = {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="bg-[#FFF9F4] dark:bg-[#2C1D1A] transition-colors duration-300 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">{children}</div>
    </div>
  )
}