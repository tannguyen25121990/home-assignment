import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from './Button'
import { Input } from './Input'
import { Spinner } from './Spinner'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#f3f4f6' }],
    },
    docs: {
      description: {
        component:
          'Card container with shadow and optional animations. Used as the main wrapper for forms and content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animate: {
      control: 'select',
      options: ['none', 'slide-down-bounce', 'slide-up', 'fade-in', 'fade-out'],
      description: 'Entry/exit animation',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/** Default card with no animation */
export const Default: Story = {
  args: {
    children: (
      <div className="w-80">
        <p className="text-gray-700">
          This content is inside the Card Body. It has the default padding of 24px.
        </p>
      </div>
    ),
  },
}

/** Card with slide down bounce animation - used on page load */
export const WithSlideDownBounce: Story = {
  args: {
    animate: 'slide-down-bounce',
    children: (
      <div className="w-80">
        <h2 className="text-xl font-bold mb-4">Animated Card</h2>
        <p className="text-gray-600">This card slides down with a bounce effect.</p>
      </div>
    ),
  },
}

/** Card with fade-in animation */
export const FadeIn: Story = {
  args: {
    animate: 'fade-in',
    children: (
      <div className="w-80">
        <h2 className="text-xl font-bold mb-4">Fade In Card</h2>
        <p className="text-gray-600">This card fades in smoothly.</p>
      </div>
    ),
  },
}

/** Card with slide-up animation - used on exit */
export const SlideUp: Story = {
  args: {
    animate: 'slide-up',
    children: (
      <div className="w-80">
        <h2 className="text-xl font-bold mb-4">Slide Up Card</h2>
        <p className="text-gray-600">This card slides up when exiting.</p>
      </div>
    ),
  },
}

/** Login form example - matches LoginPage layout */
export const LoginFormExample: Story = {
  args: {
    animate: 'slide-down-bounce',
    className: 'w-full max-w-md',
    children: (
      <form className="space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h1>
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="text-center">
          <a href="#" className="text-primary hover:underline text-sm font-medium">
            Forgotten email?
          </a>
        </div>
      </form>
    ),
  },
}

/** Loading state inside card - shown during form submission */
export const LoadingState: Story = {
  args: {
    className: 'w-full max-w-md min-h-[280px]',
    children: (
      <div className="flex items-center justify-center h-full min-h-[232px]">
        <Spinner size="lg" />
      </div>
    ),
  },
}

/** Fixed size card - maintains size during state changes */
export const FixedSize: Story = {
  args: {
    className: 'w-96 h-64',
    children: (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-600">Fixed 384x256 pixels</p>
      </div>
    ),
  },
}
