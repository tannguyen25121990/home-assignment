import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ForgottenEmailPage } from './pages/ForgottenEmailPage'

describe('App Routing', () => {
  it('renders login page', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
  })

  it('renders forgotten email page', () => {
    render(
      <MemoryRouter>
        <ForgottenEmailPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Forgotten Email Page/i)).toBeInTheDocument()
  })
})
