import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JA' },
]

export function LanguagePicker() {
  const { i18n } = useTranslation()

  const handleChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <div className="flex gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`
            px-3 py-1.5 text-sm font-medium rounded transition-colors
            ${
              i18n.language === lang.code
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
