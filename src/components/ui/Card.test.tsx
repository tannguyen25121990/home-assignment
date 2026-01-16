import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies base styles', () => {
    render(
      <Card>
        <span data-testid="child">Content</span>
      </Card>
    )
    const card = screen.getByTestId('child').closest('div')
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('rounded-2xl')
    expect(card).toHaveClass('shadow-lg')
    expect(card).toHaveClass('p-6')
  })

  it('applies slide-down-bounce animation', () => {
    render(
      <Card animate="slide-down-bounce">
        <span data-testid="child">Animated</span>
      </Card>
    )
    const card = screen.getByTestId('child').closest('div')
    expect(card).toHaveClass('animate-slide-down-bounce')
  })

  it('applies fade-in animation', () => {
    render(
      <Card animate="fade-in">
        <span data-testid="child">Fade in</span>
      </Card>
    )
    const card = screen.getByTestId('child').closest('div')
    expect(card).toHaveClass('animate-fade-in')
  })

  it('applies no animation by default', () => {
    render(
      <Card>
        <span data-testid="child">No animation</span>
      </Card>
    )
    const card = screen.getByTestId('child').closest('div')
    expect(card).not.toHaveClass('animate-slide-down-bounce')
    expect(card).not.toHaveClass('animate-fade-in')
  })

  it('accepts custom className', () => {
    render(
      <Card className="custom-class">
        <span data-testid="child">Custom</span>
      </Card>
    )
    const card = screen.getByTestId('child').closest('div')
    expect(card).toHaveClass('custom-class')
  })
})
