import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with accessible role', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Spinner />)
    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })

  it('has screen reader text', () => {
    render(<Spinner />)
    expect(screen.getByText('Loading...')).toHaveClass('sr-only')
  })

  it('applies default medium size', () => {
    render(<Spinner />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg).toHaveClass('w-10', 'h-10')
  })

  it('applies small size', () => {
    render(<Spinner size="sm" />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg).toHaveClass('w-6', 'h-6')
  })

  it('applies large size', () => {
    render(<Spinner size="lg" />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg).toHaveClass('w-16', 'h-16')
  })

  it('has spin animation', () => {
    render(<Spinner />)
    const svg = screen.getByRole('status').querySelector('svg')
    expect(svg).toHaveClass('animate-spin-slow')
  })
})
