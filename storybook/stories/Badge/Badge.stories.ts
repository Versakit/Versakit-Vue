import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Badge from './index.vue'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '徽标内容',
    },
    dot: {
      control: 'boolean',
      description: '是否显示为小圆点',
    },
    show: {
      control: 'boolean',
      description: '是否显示徽标',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: '徽标位置',
    },
  },
  args: {
    show: true,
    position: 'top-right',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DemoBox = `
  <style>
    .demo-box {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #e5e7eb;
      border-radius: 0.375rem;
    }
    .demo-container {
      display: flex;
      gap: 1rem;
    }
  </style>
`

// 基础用法
export const Default: Story = {
  args: {
    content: '99+',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      ${DemoBox}
      <Badge v-bind="args">
        <div class="demo-box"></div>
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
      ${DemoBox}
      <Badge v-bind="args">
        <div class="demo-box"></div>
      </Badge>
    `,
  }),
}

// 不同位置
export const Positions: Story = {
  render: () => ({
    components: { Badge },
    template: `
      ${DemoBox}
      <div class="demo-container">
        <Badge content="1" position="top-right">
          <div class="demo-box"></div>
        </Badge>
        <Badge content="2" position="top-left">
          <div class="demo-box"></div>
        </Badge>
        <Badge content="3" position="bottom-right">
          <div class="demo-box"></div>
        </Badge>
        <Badge content="4" position="bottom-left">
          <div class="demo-box"></div>
        </Badge>
      </div>
    `,
  }),
}

// 自定义内容
export const CustomContent: Story = {
  args: {
    content: 'New',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      ${DemoBox}
      <Badge v-bind="args">
        <div class="demo-box"></div>
      </Badge>
    `,
  }),
}

// 隐藏徽标
export const Hidden: Story = {
  args: {
    show: false,
    content: '99+',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      ${DemoBox}
      <Badge v-bind="args">
        <div class="demo-box"></div>
      </Badge>
    `,
  }),
}

// 组合使用
export const Combined: Story = {
  render: () => ({
    components: { Badge },
    template: `
      ${DemoBox}
      <div class="demo-container">
        <Badge content="99+" show>
          <div class="demo-box"></div>
        </Badge>
        <Badge dot show>
          <div class="demo-box"></div>
        </Badge>
        <Badge content="New" position="bottom-right" show>
          <div class="demo-box"></div>
        </Badge>
      </div>
    `,
  }),
}
