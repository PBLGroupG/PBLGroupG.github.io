'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-[#8C3A3A] dark:bg-[#FCEFD9] hover:bg-[#702C2C] dark:hover:bg-[#ffeac4] transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-[#8C3A3A]" /> // Sun icon in maroon for light background
      ) : (
        <Moon className="w-5 h-5 text-[#FCEFD9]" /> // Moon icon in soft gold for dark background
      )}
    </button>
  )
}
