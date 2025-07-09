'use client'

import type { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  icon?: React.ElementType
  children: ReactNode
}

export default function SectionCard({ title, icon: Icon, children }: SectionCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#fdf8f3] dark:bg-[#3B1F1F] shadow-md text-[#361414] dark:text-[#FCEFD9] transition-colors duration-300 transform hover:scale-[1.01] ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <Icon className="w-6 h-6 text-[#8C3A3A] dark:text-[#FCEFD9] transition-colors duration-300" />
        )}
        <h2 className="text-2xl font-bold transition-colors duration-300">{title}</h2>
      </div>
      <div className="text-base leading-relaxed text-justify whitespace-pre-line transition-colors duration-300">
        {children}
      </div>
    </div>
  )
}
