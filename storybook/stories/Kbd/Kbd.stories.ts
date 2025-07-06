import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Kbd } from '@versakit/vue'
import '@versakit/vue/style'
import KbdDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Kbd> = {
  title: '组件/Kbd 键盘按键',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: '键盘按键的大小变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default'],
      description: '键盘按键的样式变体',
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
type Story = StoryObj<typeof Kbd>

// 基础示例
export const Basic: Story = {
  args: {
    default: 'Ctrl',
  },
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args }
    },
    template: `<Kbd v-bind="args">Ctrl</Kbd>`,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args }
    },
    template: `<Kbd v-bind="args">Shift</Kbd>`,
  }),
}

// 组合键
export const Combination: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div class="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>R</Kbd>
      </div>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    pt: {
      root: 'bg-purple-100 text-purple-700 border-purple-300 shadow-purple-200',
    },
  },
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args }
    },
    template: `<Kbd v-bind="args">Alt</Kbd>`,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
    },
  },
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args }
    },
    template: `<Kbd v-bind="args">Tab</Kbd>`,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { KbdDemo },
    template: '<KbdDemo />',
  }),
}
