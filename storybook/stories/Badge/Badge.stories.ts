import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Badge } from '@versakit/vue'
import '@versakit/vue/style'
import BadgeDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Badge> = {
  title: '组件/Badge 徽章',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '徽章内容',
      table: {
        type: { summary: 'string | number' },
      },
    },
    dot: {
      control: 'boolean',
      description: '是否显示为小圆点',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    show: {
      control: 'boolean',
      description: '是否显示徽章',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: '徽章位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: '徽章颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'danger' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '徽章尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    max: {
      control: 'number',
      description: '最大值，超过最大值会显示为 {max}+',
      table: {
        type: { summary: 'number' },
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
type Story = StoryObj<typeof Badge>

// 基础示例
export const Basic: Story = {
  args: {
    content: '5',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 小圆点
export const Dot: Story = {
  args: {
    dot: true,
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 不同位置
export const Positions: Story = {
  args: {
    content: '5',
    position: 'bottom-right',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 不同颜色
export const Colors: Story = {
  args: {
    content: '5',
    color: 'primary',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    content: '5',
    size: 'lg',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 最大值
export const Max: Story = {
  args: {
    content: 100,
    max: 99,
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    content: '5',
    pt: {
      badge: 'bg-purple-500',
    },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    content: '5',
    unstyled: true,
    pt: {
      badge:
        'absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs flex items-center justify-center',
    },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <div class="w-10 h-10 bg-gray-200 rounded-md"></div>
      </Badge>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { BadgeDemo },
    template: '<BadgeDemo />',
  }),
}
