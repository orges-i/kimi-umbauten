"use client"

import { createContext, useContext, ReactNode, useState } from "react"

type Language = 'de' | 'en' | 'fr' | 'it'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const defaultLanguage: Language = 'de'

// Default translations (you can expand this)
const translations: Record<string, Record<Language, string>> = {
  // Add your translations here
  // Example:
  // 'welcome': {
  //   'de': 'Willkommen',
  //   'en': 'Welcome',
  //   'fr': 'Bienvenue',
  //   'it': 'Benvenuto'
  // }
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key // Fallback to key if translation not found
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
