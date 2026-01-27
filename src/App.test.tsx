import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from '@/pages/LoginPage'
import { ForgottenEmailPage } from '@/pages/ForgottenEmailPage'

// Mock i18n for tests
vi.mock('react-i18next', async () => {
  return {
    useTranslation: () => ({
      t: (key: string, params?: Record<string, string>) => {
        if (key === 'login.welcomeMessage' && params?.email) {
          return `Welcome back, ${params.email}!`
        }
        if (key === 'forgottenEmail.successMessage' && params?.firstName && params?.lastName) {
          return `We will try to email you ${params.firstName} ${params.lastName}...`
        }
        const translations: Record<string, string> = {
          'login.title': 'Welcome Back',
          'login.placeholder': 'Enter your email',
          'login.button': 'Login',
          'login.invalidEmail': 'Please enter a valid email',
          'common.forgottenEmail': 'Forgotten your email?',
          'common.firstName': 'First Name',
          'common.lastName': 'Last Name',
          'common.backToLogin': 'Back to Login',
          'forgottenEmail.title': 'Forgotten Email',
          'forgottenEmail.description': 'If you have forgotten your email...',
          'forgottenEmail.firstNamePlaceholder': 'Enter your first name',
          'forgottenEmail.lastNamePlaceholder': 'Enter your last name',
          'forgottenEmail.button': 'Find My Email',
          'forgottenEmail.firstNameRequired': 'First name is required',
          'forgottenEmail.lastNameRequired': 'Last name is required',
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
    expect(screen.getByRole('link', { name: 'Forgotten your email?' })).toHaveAttribute(
      'href',
      '/forgotten-email'
    )
  })
})

describe('ForgottenEmailPage', () => {
  it('renders forgotten email page with two-column layout', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Forgotten Email')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Find My Email' })).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', { name: 'Find My Email' })
    fireEvent.click(button)

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
  })

  it('has back to login link', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: '← Back to Login' })).toHaveAttribute('href', '/')
  })
})
