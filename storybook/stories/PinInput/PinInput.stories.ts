import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { PinInput } from '@versakit/vue'
import '@versakit/vue/style'
import PinInputDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof PinInput> = {
  title: '组件/PinInput 验证码输入框',
  component: PinInput,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: 'number',
      description: '验证码长度',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: '输入框状态',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pt: {
      control: 'object',
      description: '自定义样式类名',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PinInput>

// 基础示例
export const Basic: Story = {
  args: {
    length: 4,
    state: 'default',
  },
}

// 不同长度
export const DifferentLength: Story = {
  args: {
    length: 6,
    state: 'default',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    length: 4,
    size: 'lg',
    state: 'default',
  },
}

// 错误状态
export const Error: Story = {
  args: {
    length: 4,
    state: 'error',
  },
}

// 成功状态
export const Success: Story = {
  args: {
    length: 4,
    state: 'success',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    length: 4,
    state: 'default',
    pt: {
      container: 'gap-4',
      input: 'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    length: 4,
    state: 'default',
    unstyled: true,
    pt: {
      container: 'flex gap-3',
      input:
        'w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { PinInputDemo },
    template: '<PinInputDemo />',
  }),
}
