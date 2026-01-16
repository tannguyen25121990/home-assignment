import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#f3f4f6' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animate: {
      control: 'select',
      options: ['none', 'slide-down-bounce', 'slide-up', 'fade-in', 'fade-out'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="w-80">
        <p className="text-gray-700">
          This context is inside the Card Body. It has the default padding 24px.
        </p>
      </div>
    ),
  },
}

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

export const LoginExample: Story = {
  args: {
    children: (
      <div className="w-80">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
        />
        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
          Login
        </button>
      </div>
    ),
  },
}
