import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Avatar from './index.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '头像图片地址',
    },
    alt: {
      control: 'text',
      description: '图片替代文本',
    },
    name: {
      control: 'text',
      description: '用户名（用于生成默认头像文本）',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '头像尺寸',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: '头像形状',
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基础用法 - 图片头像
export const Image: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    alt: '用户头像',
  },
}

// 文字头像
export const Text: Story = {
  args: {
    name: 'John Doe',
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="sm"
          name="S"
        />
        <Avatar
          size="md"
          name="M"
        />
        <Avatar
          size="lg"
          name="L"
        />
      </div>
    `,
  }),
}

// 不同形状
export const Shapes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          shape="circle"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
        />
        <Avatar
          shape="square"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
        />
      </div>
    `,
  }),
}

// 图片加载失败
export const Fallback: Story = {
  args: {
    src: 'invalid-image-url.jpg',
    name: 'John Doe',
  },
}

// 自定义内容
export const CustomContent: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar>
        <span style="color: #666;">😊</span>
      </Avatar>
    `,
  }),
}

// 组合展示
export const Combined: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex flex-wrap gap-4">
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          size="lg"
        />
        <Avatar
          name="Jane Smith"
          size="lg"
          shape="square"
        />
        <Avatar size="lg">
          <span style="color: #666;">🎨</span>
        </Avatar>
      </div>
    `,
  }),
}
