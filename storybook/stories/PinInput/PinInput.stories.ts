import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PinInput from './PinInput.vue'

const meta = {
  title: 'Components/PinInput',
  component: PinInput,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 4, max: 8 },
      description: '验证码长度',
      defaultValue: 6,
    },
  },
} satisfies Meta<typeof PinInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const FourDigits: Story = {
  args: {
    length: 4,
  },
}

export const EightDigits: Story = {
  args: {
    length: 8,
  },
}
