import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Spinner } from '../components/ui/Spinner'

type PageState = 'form' | 'fading' | 'loading' | 'success'

export function ForgottenEmailPage() {
  const { t } = useTranslation()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({})
  const [pageState, setPageState] = useState<PageState>('form')

  const validate = (): boolean => {
    const newErrors: { firstName?: string; lastName?: string } = {}

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    // Start fade-out animation
    setPageState('fading')

    // Wait for fade-out animation to complete
    await new Promise((resolve) => setTimeout(resolve, 300))

    setPageState('loading')

    try {
      // Send POST request to HTTPbin
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName }),
      })

      // Simulate wait time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setPageState('success')
    } catch {
      setPageState('form')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card animate="slide-down-bounce" className="w-full max-w-2xl min-h-[380px]">
        {pageState === 'loading' ? (
          <div className="animate-fade-in flex items-center justify-center h-full min-h-[332px]">
            <Spinner size="lg" />
          </div>
        ) : pageState === 'success' ? (
          <div className="animate-fade-in text-center py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('forgottenEmail.successMessage', { firstName, lastName })}
            </h2>
            <Link to="/" className="text-primary hover:underline font-medium">
              ← Back to Login
            </Link>
          </div>
        ) : (
          <div
            className={`flex flex-col md:flex-row ${pageState === 'fading' ? 'animate-fade-out' : 'animate-fade-in'}`}
          >
            {/* Left side - Explanation */}
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('forgottenEmail.title')}</h1>
              <p className="text-gray-600 leading-relaxed">{t('forgottenEmail.description')}</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4" />
            <div className="md:hidden h-px bg-gray-200 my-4" />

            {/* Right side - Form */}
            <div className="md:w-1/2 md:pl-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: undefined }))
                  }}
                  placeholder={t('forgottenEmail.firstNamePlaceholder')}
                  label={t('common.firstName')}
                  error={errors.firstName}
                />

                <Input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                    if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: undefined }))
                  }}
                  placeholder={t('forgottenEmail.lastNamePlaceholder')}
                  label={t('common.lastName')}
                  error={errors.lastName}
                />

                <Button type="submit" className="w-full" disabled={pageState === 'fading'}>
                  {t('forgottenEmail.button')}
                </Button>

                <div className="text-center">
                  <Link to="/" className="text-primary hover:underline text-sm font-medium">
                    ← Back to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
