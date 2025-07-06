import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Progress } from '@versakit/vue'
import '@versakit/vue/style'
import ProgressDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Progress> = {
  title: '组件/Progress 进度条',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: '进度值，范围0-100',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: '最大值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    showText: {
      control: 'boolean',
      description: '是否显示进度文本',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: '进度条样式变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '进度条大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    shape: {
      control: 'select',
      options: ['flat', 'rounded', 'pill'],
      description: '进度条形状',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
      },
    },
    striped: {
      control: 'boolean',
      description: '是否显示条纹效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: '是否显示动画效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: '是否为不确定状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
      description: '传递模板样式',
      table: {
        type: { summary: 'ProgressPT' },
        defaultValue: { summary: '-' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

// 基础示例
export const Basic: Story = {
  args: {
    value: 40,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `<Progress v-bind="args" />`,
  }),
}

// 带文本示例
export const WithText: Story = {
  args: {
    value: 60,
    showText: true,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `<Progress v-bind="args" />`,
  }),
}

// 不同状态示例
export const Variants: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-4">
        <Progress value="40" variant="default" showText />
        <Progress value="100" variant="success" showText />
        <Progress value="70" variant="warning" showText />
        <Progress value="20" variant="danger" showText />
        <Progress value="50" variant="info" showText />
      </div>
    `,
  }),
}

// 条纹和动画示例
export const StripedAndAnimated: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-4">
        <Progress value="60" striped />
        <Progress value="60" striped animated />
      </div>
    `,
  }),
}

// 不确定状态示例
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `<Progress v-bind="args" />`,
  }),
}

// 自定义样式示例
export const CustomStyling: Story = {
  args: {
    value: 50,
    unstyled: true,
    pt: {
      root: 'w-full',
      container: 'w-full h-4 bg-gray-100 rounded-full overflow-hidden',
      bar: 'h-full bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-right text-sm font-medium text-purple-700 mt-1',
    },
    showText: true,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `<Progress v-bind="args" />`,
  }),
}

// 完整示例
export const FullDemo: Story = {
  render: () => ({
    components: { ProgressDemo },
    template: '<ProgressDemo />',
  }),
}
