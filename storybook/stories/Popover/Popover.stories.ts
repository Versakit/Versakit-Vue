import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Popover } from '@versakit/vue'
import '@versakit/vue/style'
import PopoverDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Popover> = {
  title: '组件/Popover 弹出框',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '控制弹出层的显示状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: '弹出层的位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'manual'],
      description: '触发方式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'click' },
      },
    },
    title: {
      control: 'text',
      description: '标题内容',
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      control: 'text',
      description: '内容',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: 'text',
      description: '内容宽度',
      table: {
        type: { summary: 'string | number' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showArrow: {
      control: 'boolean',
      description: '是否显示箭头',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    offset: {
      control: 'number',
      description: '弹出层与触发元素的间距',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '颜色主题',
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
type Story = StoryObj<typeof Popover>

// 基础示例
export const Basic: Story = {
  args: {
    content: '这是一个基础的弹出框',
    children: '点击查看',
  },
}

// 不同位置
export const Placement: Story = {
  args: {
    content: '这是一个弹出框',
    placement: 'top',
    children: '顶部弹出',
  },
}

// 带标题
export const WithTitle: Story = {
  args: {
    title: '弹出框标题',
    content: '这是一个带标题的弹出框',
    children: '点击查看',
  },
}

// 不同触发方式
export const HoverTrigger: Story = {
  args: {
    content: '这是一个悬停触发的弹出框',
    trigger: 'hover',
    children: '悬停查看',
  },
}

// 不同颜色
export const Colors: Story = {
  args: {
    content: '这是一个主色调的弹出框',
    color: 'primary',
    children: '彩色弹出框',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    title: '自定义样式',
    content: '使用pt属性自定义各部分样式',
    children: '点击查看',
    pt: {
      content: 'bg-purple-50 border-purple-200',
      title: 'text-purple-700 font-bold',
      body: 'text-purple-600',
      arrow: 'border-purple-200',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    title: '完全自定义',
    content: '使用unstyled属性移除所有默认样式',
    children: '点击查看',
    unstyled: true,
    pt: {
      content:
        'bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-xl',
      title: 'text-white font-bold text-lg mb-2',
      body: 'text-white opacity-90',
      arrow: 'border-blue-500',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { PopoverDemo },
    template: '<PopoverDemo />',
  }),
}
