import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Input error="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('applies error styling when error is present', () => {
    render(<Input error="Error" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
  })

  it('can be disabled', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('handles value changes', () => {
    let value = ''
    render(<Input value={value} onChange={(e) => (value = e.target.value)} />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } })
    expect(value).toBe('test')
  })

  it('supports different input types', () => {
    render(<Input type="email" placeholder="Enter email" />)
    expect(screen.getByPlaceholderText('Enter email')).toHaveAttribute('type', 'email')
  })
})
