import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Button } from '@versakit/vue'
import '@versakit/vue/style'
import ButtonDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Button> = {
  title: '组件/Button 按钮',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'light'],
      description: '按钮的风格变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '按钮的颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按钮的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '按钮的圆角大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    block: {
      control: 'boolean',
      description: '是否为块级按钮',
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
type Story = StoryObj<typeof Button>

// 基础示例
export const Basic: Story = {
  args: {
    children: '基础按钮',
  },
}

// 主要按钮
export const Primary: Story = {
  args: {
    children: '主要按钮',
    color: 'primary',
  },
}

// 成功按钮
export const Success: Story = {
  args: {
    children: '成功按钮',
    variant: 'success',
  },
}

// 警告按钮
export const Warning: Story = {
  args: {
    children: '警告按钮',
    color: 'warning',
  },
}

// 危险按钮
export const Danger: Story = {
  args: {
    children: '危险按钮',
    color: 'danger',
  },
}

// 轮廓按钮
export const Outline: Story = {
  args: {
    children: '轮廓按钮',
    variant: 'outline',
    color: 'primary',
  },
}

// 幽灵按钮
export const Ghost: Story = {
  args: {
    children: '幽灵按钮',
    variant: 'ghost',
    color: 'primary',
  },
}

// 链接按钮
export const Link: Story = {
  args: {
    children: '链接按钮',
    variant: 'link',
    color: 'primary',
  },
}

// 浅色按钮
export const Light: Story = {
  args: {
    children: '浅色按钮',
    variant: 'light',
    color: 'primary',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    children: '禁用按钮',
    disabled: true,
  },
}

// 加载状态
export const Loading: Story = {
  args: {
    children: '加载中',
    loading: true,
  },
}

// 块级按钮
export const Block: Story = {
  args: {
    children: '块级按钮',
    block: true,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    children: '自定义样式',
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold',
      loading: 'text-yellow-300',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    children: '无样式按钮',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { ButtonDemo },
    template: '<ButtonDemo />',
  }),
}
