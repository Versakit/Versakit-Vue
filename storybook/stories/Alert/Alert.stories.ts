import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Alert } from '@versakit/vue'
import '@versakit/vue/style'
import AlertDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Alert> = {
  title: '组件/Alert 警告提示',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: '警告提示的风格变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: '警告提示的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    title: {
      control: 'text',
      description: '警告提示的标题',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: '警告提示的详细描述',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'boolean',
      description: '是否显示图标',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '圆角大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    border: {
      control: 'boolean',
      description: '是否显示边框',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    shadow: {
      control: 'boolean',
      description: '是否显示阴影',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: '是否禁用默认样式',
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
type Story = StoryObj<typeof Alert>

// 基础示例
export const Basic: Story = {
  args: {
    title: '信息提示',
    description: '这是一条信息提示',
    variant: 'info',
  },
}

// 成功提示
export const Success: Story = {
  args: {
    title: '成功提示',
    description: '这是一条成功提示',
    variant: 'success',
  },
}

// 警告提示
export const Warning: Story = {
  args: {
    title: '警告提示',
    description: '这是一条警告提示',
    variant: 'warning',
  },
}

// 错误提示
export const Error: Story = {
  args: {
    title: '错误提示',
    description: '这是一条错误提示',
    variant: 'error',
  },
}

// 可关闭
export const Closable: Story = {
  args: {
    title: '可关闭提示',
    description: '这是一条可以关闭的提示',
    closable: true,
  },
}

// 无图标
export const NoIcon: Story = {
  args: {
    title: '无图标提示',
    description: '这是一条没有图标的提示',
    icon: false,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    title: '自定义样式',
    description: '使用pt属性自定义各部分样式',
    pt: {
      root: 'bg-purple-100 border-purple-300 text-purple-800',
      icon: 'text-purple-500',
      title: 'font-bold',
      description: 'italic',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    title: '无样式模式',
    description: '使用unstyled属性移除所有默认样式，完全自定义',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white',
      icon: 'text-white',
      title: 'font-bold text-lg',
      description: 'opacity-90',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { AlertDemo },
    template: '<AlertDemo />',
  }),
}
