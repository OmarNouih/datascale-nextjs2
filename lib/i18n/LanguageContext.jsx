'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('dsb-lang')
    if (saved === 'en' || saved === 'fr') setLang(saved)
  }, [])

  const toggle = (l) => {
    const next = l || (lang === 'fr' ? 'en' : 'fr')
    setLang(next)
    localStorage.setItem('dsb-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
