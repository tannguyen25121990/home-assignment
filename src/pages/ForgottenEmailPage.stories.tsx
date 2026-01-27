import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { ForgottenEmailPage } from './ForgottenEmailPage'

const meta: Meta<typeof ForgottenEmailPage> = {
  title: 'Pages/ForgottenEmailPage',
  component: ForgottenEmailPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Forgotten email page with first name/last name form and responsive layout.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

/** Default forgotten email page */
export const Default: Story = {}
