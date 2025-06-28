import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Divider } from '@versakit/vue'
import '@versakit/vue/style'
import DividerDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Divider> = {
  title: '组件/Divider 分割线',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '分割线方向',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: '分割线样式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
      description: '分割线粗细',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: 'color',
      description: '分割线颜色',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: '分割线文本',
      table: {
        type: { summary: 'string' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: '文本位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    as: {
      control: 'text',
      description: 'HTML元素类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
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
type Story = StoryObj<typeof Divider>

// 基础示例
export const Basic: Story = {
  args: {},
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 不同方向
export const Orientation: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-center h-20">
        <span>左侧内容</span>
        <Divider v-bind="args" class="mx-4 h-full" />
        <span>右侧内容</span>
      </div>
    `,
  }),
}

// 不同样式
export const Variants: Story = {
  args: {
    variant: 'dashed',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 不同粗细
export const Sizes: Story = {
  args: {
    size: 'thick',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 自定义颜色
export const CustomColor: Story = {
  args: {
    color: '#8b5cf6',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 带文本
export const WithLabel: Story = {
  args: {
    label: '分割线文本',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 文本位置
export const LabelPosition: Story = {
  args: {
    label: '文本位置',
    labelPosition: 'start',
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    label: '自定义样式',
    pt: {
      root: 'border-t-2 border-purple-500',
      label: 'bg-purple-100 text-purple-700 px-2',
    },
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    label: '无样式模式',
    unstyled: true,
    pt: {
      root: 'relative border-t-2 border-dashed border-gradient-to-r from-blue-500 to-purple-500 my-4',
      label:
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-purple-700 font-bold',
    },
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <p>上方内容</p>
        <Divider v-bind="args" />
        <p>下方内容</p>
      </div>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { DividerDemo },
    template: '<DividerDemo />',
  }),
}
