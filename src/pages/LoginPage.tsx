import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Spinner } from '../components/ui/Spinner'
import { useAuthStore } from '../store/authStore'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type PageState = 'form' | 'loading' | 'success'

export function LoginPage() {
  const { t } = useTranslation()
  const { login } = useAuthStore()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [pageState, setPageState] = useState<PageState>('form')
  const [isCardExiting, setIsCardExiting] = useState(false)

  const validateEmail = (value: string): boolean => {
    if (!value) {
      setError(t('login.invalidEmail'))
      return false
    }
    if (!EMAIL_REGEX.test(value)) {
      setError(t('login.invalidEmail'))
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) return

    setPageState('loading')

    try {
      // Send POST request to HTTPbin
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      // Simulate wait time (2-3 seconds as per requirements)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Update auth store
      login(email)

      // Start exit animation
      setIsCardExiting(true)

      // Wait for exit animation, then show success
      setTimeout(() => {
        setPageState('success')
      }, 400)
    } catch {
      setError('Something went wrong. Please try again.')
      setPageState('form')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {pageState === 'success' ? (
        <div className="animate-fade-in text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t('login.welcomeMessage', { email })}
          </h1>
        </div>
      ) : (
        <Card
          animate={isCardExiting ? 'slide-up' : 'slide-down-bounce'}
          className="w-full max-w-md min-h-[280px]"
        >
          {pageState === 'loading' ? (
            <div className="animate-fade-in flex items-center justify-center h-full min-h-[232px]">
              <Spinner size="lg" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {t('login.title')}
              </h1>

              <div className="mb-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  placeholder={t('login.placeholder')}
                  error={error}
                  autoComplete="email"
                />
              </div>

              <Button type="submit" className="w-full mb-4">
                {t('login.button')}
              </Button>

              <div className="text-center">
                <Link
                  to="/forgotten-email"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  {t('common.forgottenEmail')}
                </Link>
              </div>
            </form>
          )}
        </Card>
      )}
    </div>
  )
}
