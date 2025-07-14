import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Image } from '@versakit/vue'
import '@versakit/vue/style'
import ImageDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Image> = {
  title: '组件/Image 图片',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '图片源地址',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: '图片加载失败时的替代文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    width: {
      control: 'text',
      description: '图片宽度',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    height: {
      control: 'text',
      description: '图片高度',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    fit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      description: '图片填充模式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cover' },
      },
    },
    blurred: {
      control: 'boolean',
      description: '是否启用模糊加载效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    blurAmount: {
      control: 'number',
      description: '模糊加载的模糊度',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: '图片加载策略',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lazy' },
      },
    },
    isZoomable: {
      control: 'boolean',
      description: '是否启用缩放功能',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isZoomed: {
      control: 'boolean',
      description: '是否当前处于缩放状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    zoomScale: {
      control: 'number',
      description: '缩放比例',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1.5' },
      },
    },
    skeleton: {
      control: 'boolean',
      description: '是否显示骨架屏',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    skeletonColor: {
      control: 'color',
      description: '骨架屏背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: '图片圆角',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
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
type Story = StoryObj<typeof Image>

// 基础示例
export const Basic: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
  },
}

// 不同填充模式
export const FitModes: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
    fit: 'contain',
  },
}

// 模糊加载
export const BlurredLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
    blurred: true,
    blurAmount: 10,
  },
}

// 缩放功能
export const Zoomable: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
    isZoomable: true,
    zoomScale: 1.8,
  },
}

// 不同圆角
export const BorderRadius: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
    radius: 'xl',
  },
}

// 错误状态
export const ErrorState: Story = {
  args: {
    src: 'invalid-image-url.jpg',
    alt: '无效图片',
    width: '100%',
    height: '300px',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    width: '100%',
    height: '300px',
    pt: {
      root: 'border-2 border-blue-500 shadow-lg',
      img: 'grayscale',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    alt: '风景图片',
    unstyled: true,
    pt: {
      root: 'w-full h-[300px] rounded-xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500',
      img: 'w-full h-full object-cover',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { ImageDemo },
    template: '<ImageDemo />',
  }),
}
