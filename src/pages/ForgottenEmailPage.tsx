import { useTranslation } from 'react-i18next'

export function ForgottenEmailPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{t('forgottenEmail.title')}</h1>
        <p className="text-gray-600 mt-2">Coming in Commit 8</p>
      </div>
    </div>
  )
}
