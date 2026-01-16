import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'en' | 'ja'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

// Get browser language, default to 'en'
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('ja') ? 'ja' : 'en'
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getBrowserLanguage(),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
)
