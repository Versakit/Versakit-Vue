import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Skeleton, SkeletonText, SkeletonAvatar } from '@versakit/vue'
import '@versakit/vue/style'
import SkeletonDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Skeleton> = {
  title: '组件/Skeleton 骨架屏',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: '动画效果类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pulse' },
      },
    },
    loading: {
      control: 'boolean',
      description: '是否显示骨架屏',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    rounded: {
      control: 'boolean',
      description: '是否为圆角',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: '自定义宽度',
      table: {
        type: { summary: 'string | number' },
      },
    },
    height: {
      control: 'text',
      description: '自定义高度',
      table: {
        type: { summary: 'string | number' },
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
type Story = StoryObj<typeof Skeleton>

// 基础示例
export const Basic: Story = {
  args: {
    width: '100%',
    height: '100px',
  },
}

// 圆角示例
export const Rounded: Story = {
  args: {
    width: '100%',
    height: '100px',
    rounded: true,
  },
}

// 脉冲动画
export const PulseAnimation: Story = {
  args: {
    width: '100%',
    height: '100px',
    animation: 'pulse',
  },
}

// 波浪动画
export const WaveAnimation: Story = {
  args: {
    width: '100%',
    height: '100px',
    animation: 'wave',
  },
}

// 无动画
export const NoAnimation: Story = {
  args: {
    width: '100%',
    height: '100px',
    animation: 'none',
  },
}

// 自定义尺寸
export const CustomSize: Story = {
  args: {
    width: '200px',
    height: '80px',
    rounded: true,
  },
}

// 文本骨架屏
export const SkeletonTextExample: StoryObj<typeof SkeletonText> = {
  render: (args) => ({
    components: { SkeletonText },
    setup() {
      return { args }
    },
    template: '<SkeletonText v-bind="args" />',
  }),
  args: {
    lines: 3,
    widths: ['100%', '80%', '60%'],
    lineHeight: '1.2rem',
    animation: 'pulse',
    rounded: true,
  },
}

// 头像骨架屏
export const SkeletonAvatarExample: StoryObj<typeof SkeletonAvatar> = {
  render: (args) => ({
    components: { SkeletonAvatar },
    setup() {
      return { args }
    },
    template: '<SkeletonAvatar v-bind="args" />',
  }),
  args: {
    size: 'md',
    circle: true,
    animation: 'pulse',
  },
}

// 头像尺寸展示
export const SkeletonAvatarSizes: Story = {
  render: () => ({
    components: { SkeletonAvatar },
    template: `
      <div class="flex items-center gap-4">
        <SkeletonAvatar size="xs" />
        <SkeletonAvatar size="sm" />
        <SkeletonAvatar size="md" />
        <SkeletonAvatar size="lg" />
        <SkeletonAvatar size="xl" />
      </div>
    `,
  }),
}

// 组合使用示例
export const CombinedExample: Story = {
  render: () => ({
    components: { Skeleton, SkeletonText, SkeletonAvatar },
    template: `
      <div class="flex gap-4">
        <SkeletonAvatar size="lg" />
        <div class="flex-1">
          <Skeleton width="40%" height="20px" rounded class="mb-2" />
          <SkeletonText :lines="3" :widths="['100%', '90%', '80%']" rounded />
        </div>
      </div>
    `,
  }),
}

// 卡片骨架屏示例
export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton, SkeletonText },
    template: `
      <div class="border rounded-lg p-4 max-w-md">
        <Skeleton width="100%" height="200px" rounded class="mb-4" />
        <Skeleton width="60%" height="24px" rounded class="mb-2" />
        <SkeletonText :lines="4" rounded />
        <div class="flex justify-between mt-4">
          <Skeleton width="100px" height="36px" rounded />
          <Skeleton width="100px" height="36px" rounded />
        </div>
      </div>
    `,
  }),
}

// 加载状态切换
export const LoadingToggle: Story = {
  render: () => ({
    components: { Skeleton, SkeletonText },
    template: `
      <div>
        <button 
          class="mb-4 px-4 py-2 bg-blue-500 text-white rounded" 
          @click="loading = !loading"
        >
          切换加载状态
        </button>
        <Skeleton :loading="loading" width="100%" height="100px" rounded>
          <div class="bg-green-100 p-4 rounded">内容已加载完成！</div>
        </Skeleton>
      </div>
    `,
    data() {
      return {
        loading: true,
      }
    },
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SkeletonDemo },
    template: '<SkeletonDemo />',
  }),
}
