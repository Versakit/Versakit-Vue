import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Link } from '@versakit/vue'
import '@versakit/vue/style'
import LinkDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Link> = {
  title: '组件/Link 链接',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '链接的目标地址',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      description: '链接的变体样式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '链接的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    external: {
      control: 'boolean',
      description: '是否在新标签页中打开链接',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      control: 'boolean',
      description: '是否显示下划线',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用链接',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: '链接的图标位置',
      table: {
        type: { summary: 'string' },
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
type Story = StoryObj<typeof Link>

// 基础示例
export const Basic: Story = {
  args: {
    href: 'https://example.com',
    children: '基础链接',
  },
}

// 不同变体
export const Variants: Story = {
  args: {
    href: 'https://example.com',
    variant: 'primary',
    children: '主要链接',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    href: 'https://example.com',
    size: 'lg',
    children: '大尺寸链接',
  },
}

// 带下划线
export const Underlined: Story = {
  args: {
    href: 'https://example.com',
    underline: true,
    children: '带下划线链接',
  },
}

// 外部链接
export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: '外部链接',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    href: 'https://example.com',
    disabled: true,
    children: '禁用链接',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    href: 'https://example.com',
    pt: {
      root: 'text-purple-500 hover:text-purple-700 font-bold',
    },
    children: '自定义样式链接',
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    href: 'https://example.com',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow',
    },
    children: '完全自定义样式',
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { LinkDemo },
    template: '<LinkDemo />',
  }),
}
