import type { Meta, StoryObj } from '@storybook/react'
import { LanguagePicker } from './LanguagePicker'

const meta: Meta<typeof LanguagePicker> = {
  title: 'Components/LanguagePicker',
  component: LanguagePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Language toggle for switching between English and Japanese. Positioned in top-right corner of the app.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/** Default state - shows language toggle buttons */
export const Default: Story = {}

/** In context - positioned as it appears in the app */
export const InContext: Story = {
  render: () => (
    <div className="relative w-96 h-32 bg-gray-100 rounded-lg">
      <div className="absolute top-4 right-4">
        <LanguagePicker />
      </div>
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-sm">Page content area</p>
      </div>
    </div>
  ),
}
