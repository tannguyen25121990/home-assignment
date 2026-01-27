import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import { Card } from './Card'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loading spinner with configurable sizes. Shows during async operations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spinner size',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/** Default medium size */
export const Default: Story = {
  args: {
    size: 'md',
  },
}

/** Small spinner - inline loading indicators */
export const Small: Story = {
  args: {
    size: 'sm',
  },
}

/** Large spinner - full page or card loading */
export const Large: Story = {
  args: {
    size: 'lg',
  },
}

/** All sizes comparison */
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="text-center">
        <Spinner size="sm" />
        <p className="text-sm text-gray-500 mt-2">Small</p>
      </div>
      <div className="text-center">
        <Spinner size="md" />
        <p className="text-sm text-gray-500 mt-2">Medium</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="text-sm text-gray-500 mt-2">Large</p>
      </div>
    </div>
  ),
}

/** In Card - loading state as shown in LoginPage */
export const InCard: Story = {
  render: () => (
    <Card className="w-96 min-h-[280px]">
      <div className="flex items-center justify-center h-full min-h-[232px]">
        <Spinner size="lg" />
      </div>
    </Card>
  ),
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#f3f4f6' }],
    },
  },
}

/** Full page loading overlay */
export const FullPageLoading: Story = {
  render: () => (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
