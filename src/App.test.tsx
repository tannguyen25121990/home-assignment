import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ForgottenEmailPage } from './pages/ForgottenEmailPage'

// Mock i18n for tests
vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next')
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        language: 'en',
        changeLanguage: vi.fn(),
      },
    }),
  }
})

describe('App Routing', () => {
  it('renders login page', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/login.title/i)).toBeInTheDocument()
  })

  it('renders forgotten email page', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/forgottenEmail.title/i)).toBeInTheDocument()
  })
})
