import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Tooltip } from '@versakit/vue'
import '@versakit/vue/style'
import TooltipDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Tooltip> = {
  title: '组件/Tooltip 文字提示',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '提示内容',
      table: {
        type: { summary: 'string' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: '提示框位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    openDelay: {
      control: 'number',
      description: '显示延迟时间(毫秒)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    closeDelay: {
      control: 'number',
      description: '隐藏延迟时间(毫秒)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
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
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'both'],
      description: '触发方式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'hover' },
      },
    },
    maxWidth: {
      control: 'text',
      description: '最大宽度',
      table: {
        type: { summary: 'string | number' },
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
    arrow: {
      control: 'boolean',
      description: '是否显示箭头',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    offset: {
      control: 'number',
      description: '提示框与触发元素的距离',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
      },
    },
    followCursor: {
      control: 'boolean',
      description: '是否跟随鼠标',
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
type Story = StoryObj<typeof Tooltip>

// 基础示例
export const Basic: Story = {
  args: {
    content: '这是一个基础的文字提示',
    children: '悬停查看提示',
  },
}

// 不同位置
export const Placement: Story = {
  args: {
    content: '这是一个顶部提示',
    placement: 'top',
    children: '顶部提示',
  },
}

// 不同颜色
export const Colors: Story = {
  args: {
    content: '这是一个主色调提示',
    color: 'primary',
    children: '彩色提示',
  },
}

// 不同触发方式
export const FocusTrigger: Story = {
  args: {
    content: '这是一个焦点触发的提示',
    trigger: 'focus',
    children: '点击查看提示',
  },
}

// 跟随鼠标
export const FollowCursor: Story = {
  args: {
    content: '这个提示会跟随鼠标移动',
    followCursor: true,
    children: '移动鼠标查看效果',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    content: '使用pt属性自定义样式',
    children: '自定义样式',
    pt: {
      content: 'bg-purple-700 text-white',
      arrow: 'border-purple-700',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    content: '使用unstyled属性移除所有默认样式',
    children: '无样式模式',
    unstyled: true,
    pt: {
      content:
        'bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg text-white font-bold shadow-lg',
      arrow: 'border-pink-500',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { TooltipDemo },
    template: '<TooltipDemo />',
  }),
}
