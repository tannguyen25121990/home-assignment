import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  animate?: 'slide-down-bounce' | 'slide-up' | 'fade-in' | 'fade-out' | 'none'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, animate = 'none', className = '', ...props }, ref) => {
    const baseStyles = 'bg-white rounded-2xl shadow-lg p-6'

    const animations = {
      'slide-down-bounce': 'animate-slide-down-bounce',
      'slide-up': 'animate-slide-up',
      'fade-in': 'animate-fade-in',
      'fade-out': 'animate-fade-out',
      none: '',
    }

    return (
      <div ref={ref} className={`${baseStyles} ${animations[animate]} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
