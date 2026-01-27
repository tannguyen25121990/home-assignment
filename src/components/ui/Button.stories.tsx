import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary button component with multiple variants and sizes. Used for form submissions and CTAs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/** Default primary button - used for main CTAs */
export const Primary: Story = {
  args: {
    children: 'Login',
    variant: 'primary',
  },
}

/** Secondary button - used for secondary actions */
export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
}

/** Outline button - used for tertiary actions */
export const Outline: Story = {
  args: {
    children: 'Learn More',
    variant: 'outline',
  },
}

/** Small button - compact size */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

/** Large button - prominent size */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

/** Loading state - shows spinner while processing */
export const Loading: Story = {
  args: {
    children: 'Submit',
    isLoading: true,
  },
}

/** Disabled state */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

/** Full width button - used in forms */
export const FullWidth: Story = {
  args: {
    children: 'Submit',
    className: 'w-80',
  },
}

/** All variants comparison */
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}

/** All sizes comparison */
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
