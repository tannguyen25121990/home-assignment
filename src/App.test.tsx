import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ForgottenEmailPage } from './pages/ForgottenEmailPage'

// Mock i18n for tests
vi.mock('react-i18next', async () => {
  return {
    useTranslation: () => ({
      t: (key: string, params?: Record<string, string>) => {
        if (key === 'login.welcomeMessage' && params?.email) {
          return `Welcome back, ${params.email}!`
        }
        const translations: Record<string, string> = {
          'login.title': 'Welcome Back',
          'login.placeholder': 'Enter your email',
          'login.button': 'Login',
          'login.invalidEmail': 'Please enter a valid email',
          'common.forgottenEmail': 'Forgotten your email?',
          'forgottenEmail.title': 'Forgotten Email',
        }
        return translations[key] || key
      },
      i18n: {
        language: 'en',
        changeLanguage: vi.fn(),
      },
    }),
  }
})

// Mock fetch for HTTPbin
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  } as Response)
)

describe('LoginPage', () => {
  it('renders login form', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Welcome Back')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('shows error for empty email', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', { name: 'Login' })
    fireEvent.click(button)

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('shows link to forgotten email page', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Forgotten your email?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forgotten your email?' })).toHaveAttribute(
      'href',
      '/forgotten-email'
    )
  })
})

describe('ForgottenEmailPage', () => {
  it('renders forgotten email page', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Forgotten Email/i)).toBeInTheDocument()
  })
})
