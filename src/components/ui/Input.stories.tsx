import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input component with label and error state support. Used in all forms.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above input',
    },
    error: {
      control: 'text',
      description: 'Error message displayed below input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
      description: 'Input type',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/** Default input without label */
export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
  },
}

/** Input with label - standard form field */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

/** Input with error message - validation failed */
export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
}

/** Disabled input */
export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: true,
  },
}

/** Password input */
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
  },
}

/** Filled input with value */
export const Filled: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    value: 'user@example.com',
  },
}

/** All states comparison */
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Default" placeholder="Enter text" />
      <Input label="Filled" value="user@example.com" />
      <Input label="With Error" value="invalid" error="This field is invalid" />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
}

/** Form example - First name and Last name */
export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="First Name" placeholder="Enter your first name" />
      <Input label="Last Name" placeholder="Enter your last name" />
    </div>
  ),
}
