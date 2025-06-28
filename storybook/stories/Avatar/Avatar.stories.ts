import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Avatar } from '@versakit/vue'
import '@versakit/vue/style'
import AvatarDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Avatar> = {
  title: '组件/Avatar 头像',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '头像尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    src: {
      control: 'text',
      description: '图片地址',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: '图片描述',
      table: {
        type: { summary: 'string' },
      },
    },
    fallback: {
      control: 'text',
      description: '加载失败时显示的文本',
      table: {
        type: { summary: 'string' },
      },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: '头像形状',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', 'none'],
      description: '在线状态',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
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
type Story = StoryObj<typeof Avatar>

// 基础示例
export const Basic: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/1.jpg',
    alt: '用户头像',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/2.jpg',
    size: 'lg',
  },
}

// 不同形状
export const Shapes: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/3.jpg',
    shape: 'square',
  },
}

// 带状态
export const WithStatus: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'online',
  },
}

// 加载失败时的文本
export const WithFallback: Story = {
  args: {
    src: 'invalid-image-url.jpg',
    fallback: 'JD',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/5.jpg',
    pt: {
      root: 'border-2 border-purple-500',
      image: 'grayscale',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/6.jpg',
    unstyled: true,
    pt: {
      root: 'w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500',
      image: 'w-full h-full object-cover',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { AvatarDemo },
    template: '<AvatarDemo />',
  }),
}
