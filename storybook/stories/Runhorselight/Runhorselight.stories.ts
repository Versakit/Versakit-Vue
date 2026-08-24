import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Runhorselight } from '@versakit/vue'
import '@versakit/vue/style'
import RunhorselightDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Runhorselight> = {
  title: '组件/Runhorselight 跑马灯',
  component: Runhorselight,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: '跑马灯数据项',
      table: {
        type: { summary: 'RunhorselightItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    prefix: {
      control: 'object',
      description: '每轮内容前展示的前缀',
      table: {
        type: { summary: 'RunhorselightAffix' },
        defaultValue: { summary: '-' },
      },
    },
    suffix: {
      control: 'object',
      description: '每轮内容后展示的后缀',
      table: {
        type: { summary: 'RunhorselightAffix' },
        defaultValue: { summary: '-' },
      },
    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
      description: '滚动方向',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    duration: {
      control: 'number',
      description: '完成一次滚动循环的时长（秒）',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '20' },
      },
    },
    height: {
      control: 'text',
      description: '组件高度',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '3rem' },
      },
    },
    backgroundColor: {
      control: 'color',
      description: '背景色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'transparent' },
      },
    },
    textColor: {
      control: 'color',
      description: '默认文本色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#111827' },
      },
    },
    borderRadius: {
      control: 'text',
      description: '圆角大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.75rem' },
      },
    },
    gap: {
      control: 'text',
      description: '项间距',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1rem' },
      },
    },
    pauseOnHover: {
      control: 'boolean',
      description: '鼠标悬停时暂停',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    loop: {
      control: 'boolean',
      description: '是否无缝循环',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    autofill: {
      control: 'boolean',
      description: '图片模式下自动补充内容',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<typeof Runhorselight>

// 示例数据
const sampleTexts = [
  '欢迎使用 Versakit 组件库',
  '这是一个功能强大的 Vue 3 组件库',
  '支持 TypeScript 和 Tailwind CSS',
  '提供完整的无障碍访问支持',
]

const sampleImages = [
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/200/80',
    alt: 'Logo 1',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1015/200/80',
    alt: 'Logo 2',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1019/200/80',
    alt: 'Logo 3',
  },
]

const sampleCards = [
  {
    type: 'card',
    title: 'Vue 3 发布',
    description: '新一代前端框架，更快的性能和更小的体积',
    backgroundColor: '#dbeafe',
    textColor: '#1e40af',
  },
  {
    type: 'card',
    title: 'TypeScript 5.0',
    description: '更强大的类型系统和更好的开发体验',
    backgroundColor: '#dcfce7',
    textColor: '#166534',
  },
  {
    type: 'card',
    title: 'Tailwind CSS 4.0',
    description: '实用优先的 CSS 框架，快速构建现代网站',
    backgroundColor: '#fef3c7',
    textColor: '#92400e',
  },
]

// 基础示例
export const Basic: Story = {
  args: {
    items: sampleTexts,
    height: '3rem',
  },
}

// 文本跑马灯
export const Text: Story = {
  args: {
    items: sampleTexts,
    height: '4rem',
    gap: '1.5rem',
  },
}

// 图片跑马灯
export const Images: Story = {
  args: {
    items: sampleImages,
    height: '6rem',
    gap: '2rem',
    duration: 25,
    borderRadius: '1rem',
  },
}

// 卡片跑马灯
export const Cards: Story = {
  args: {
    items: sampleCards,
    height: '12rem',
    gap: '1.5rem',
    duration: 30,
    borderRadius: '1rem',
    backgroundColor: '#f3f4f6',
  },
}

// 向右滚动
export const RightDirection: Story = {
  args: {
    items: ['向右滚动的内容 1', '向右滚动的内容 2', '向右滚动的内容 3'],
    direction: 'right',
  },
}

// 快速滚动
export const Fast: Story = {
  args: {
    items: ['快速滚动的内容 1', '快速滚动的内容 2', '快速滚动的内容 3'],
    duration: 10,
  },
}

// 慢速滚动
export const Slow: Story = {
  args: {
    items: ['慢速滚动的内容 1', '慢速滚动的内容 2', '慢速滚动的内容 3'],
    duration: 40,
  },
}

// 带前缀
export const WithPrefix: Story = {
  args: {
    items: ['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布'],
    prefix: {
      type: 'text',
      content: '📢 最新消息：',
      textColor: '#ef4444',
    },
    height: '3rem',
  },
}

// 带后缀
export const WithSuffix: Story = {
  args: {
    items: ['内容 1', '内容 2', '内容 3'],
    suffix: {
      type: 'text',
      content: '更多 »',
      textColor: '#3b82f6',
    },
    height: '3rem',
  },
}

// 带前缀和后缀
export const WithAffix: Story = {
  args: {
    items: ['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布'],
    prefix: {
      type: 'text',
      content: '📢 最新消息：',
      textColor: '#ef4444',
    },
    suffix: {
      type: 'text',
      content: '更多 »',
      textColor: '#3b82f6',
    },
    height: '3rem',
  },
}

// 禁用悬停暂停
export const NoPauseOnHover: Story = {
  args: {
    items: ['不暂停滚动 1', '不暂停滚动 2', '不暂停滚动 3'],
    pauseOnHover: false,
  },
}

// 禁用循环
export const NoLoop: Story = {
  args: {
    items: ['不循环内容 1', '不循环内容 2', '不循环内容 3'],
    loop: false,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    items: ['自定义样式内容 1', '自定义样式内容 2', '自定义样式内容 3'],
    height: '3.5rem',
    backgroundColor: '#1e293b',
    textColor: '#ffffff',
    borderRadius: '0.5rem',
  },
}

// PT 样式传递
export const PTStyle: Story = {
  args: {
    items: ['PT 样式内容 1', 'PT 样式内容 2', 'PT 样式内容 3'],
    height: '3.5rem',
    pt: {
      root: 'bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-white font-bold text-lg',
      item: 'px-6',
    },
  },
}

// 自动填充
export const Autofill: Story = {
  args: {
    items: sampleImages.slice(0, 2),
    height: '6rem',
    gap: '2rem',
    autofill: true,
    borderRadius: '0.5rem',
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    items: ['无样式内容 1', '无样式内容 2', '无样式内容 3'],
    height: '3rem',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg',
      track: 'flex',
      text: 'text-white font-semibold text-base',
    },
  },
}

// 混合内容类型
export const MixedContent: Story = {
  args: {
    items: [
      '纯文本内容',
      {
        type: 'image',
        src: 'https://picsum.photos/id/1018/100/60',
        alt: '混合图片',
      },
      {
        type: 'card',
        title: '重要通知',
        description: '系统维护时间：今晚 22:00-24:00',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
      },
      '更多文本内容',
    ],
    height: '6rem',
    gap: '1.5rem',
    duration: 35,
    borderRadius: '0.75rem',
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { RunhorselightDemo },
    template: '<RunhorselightDemo />',
  }),
}