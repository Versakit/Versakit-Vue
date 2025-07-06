import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Card } from '@versakit/vue'
import '@versakit/vue/style'
import CardDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Card> = {
  title: '组件/Card 卡片',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: '卡片变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: '内边距大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '圆角大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    hover: {
      control: 'boolean',
      description: '是否有悬停效果',
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
type Story = StoryObj<typeof Card>

// 基础示例
export const Basic: Story = {
  args: {},
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-medium">卡片标题</h3>
        </template>
        <p>这是一个基础卡片的内容区域。</p>
        <template #footer>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">确定</button>
          </div>
        </template>
      </Card>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  args: {
    variant: 'bordered',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-medium">带边框的卡片</h3>
        </template>
        <p>这是一个带边框的卡片示例。</p>
      </Card>
    `,
  }),
}

// 不同内边距
export const Padding: Story = {
  args: {
    padding: 'lg',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>这是一个大内边距的卡片示例。</p>
      </Card>
    `,
  }),
}

// 不同圆角
export const Radius: Story = {
  args: {
    radius: 'lg',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>这是一个大圆角的卡片示例。</p>
      </Card>
    `,
  }),
}

// 悬停效果
export const Hover: Story = {
  args: {
    hover: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>鼠标悬停在此卡片上会有效果。</p>
      </Card>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    pt: {
      root: 'bg-purple-50 border border-purple-200',
      header: 'border-b border-purple-200 bg-purple-100',
      body: 'text-purple-700',
      footer: 'border-t border-purple-200 bg-purple-100',
    },
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-medium">自定义样式卡片</h3>
        </template>
        <p>这是一个使用 pt 属性自定义样式的卡片。</p>
        <template #footer>
          <div class="text-right">卡片底部</div>
        </template>
      </Card>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden shadow-lg',
      header: 'p-4 text-white border-b border-white/20',
      body: 'p-4 text-white',
      footer: 'p-4 bg-white/10 text-white',
    },
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <template #header>
          <h3 class="text-lg font-medium">渐变背景卡片</h3>
        </template>
        <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义卡片。</p>
        <template #footer>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-white text-purple-500 rounded">确定</button>
          </div>
        </template>
      </Card>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { CardDemo },
    template: '<CardDemo />',
  }),
}
