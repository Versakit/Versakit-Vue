import type { StoryObj } from '@storybook/vue3'
import { VKSkeleton } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Skeleton',
  component: VKSkeleton,
  argTypes: {
    animated: {
      control: 'boolean',
      description: '是否显示动画效果',
      defaultValue: true,
    },
    variant: {
      control: 'select',
      options: [
        'text',
        'circular',
        'rectangular',
        'avatar',
        'button',
        'card',
        'list',
        'image',
      ],
      description: '骨架屏形状',
      defaultValue: 'text',
    },
    width: {
      control: 'text',
      description: '自定义宽度',
    },
    height: {
      control: 'text',
      description: '自定义高度',
    },
    radius: {
      control: 'text',
      description: '自定义圆角',
    },
    repeat: {
      control: { type: 'number', min: 1 },
      description: '重复次数',
      defaultValue: 1,
    },
    loading: {
      control: 'boolean',
      description: '是否加载中',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    skeletonClass: {
      control: 'text',
      description: '自定义类名',
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKSkeleton>

// 基础骨架屏
export const Default: Story = {
  render: (args) => ({
    components: { VKSkeleton },
    setup() {
      return { args }
    },
    template: `
      <VKSkeleton v-bind="args" />
    `,
  }),
  args: {
    animated: true,
    variant: 'text',
    repeat: 1,
  },
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKSkeleton },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">文本</p>
          <VKSkeleton variant="text" :repeat="3" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">圆形</p>
          <VKSkeleton variant="circular" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">矩形</p>
          <VKSkeleton variant="rectangular" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">头像</p>
          <VKSkeleton variant="avatar" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">按钮</p>
          <VKSkeleton variant="button" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">卡片</p>
          <VKSkeleton variant="card" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">列表</p>
          <VKSkeleton variant="list" :repeat="3" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">图片</p>
          <VKSkeleton variant="image" />
        </div>
      </div>
    `,
  }),
}

// 动画效果
export const Animation: Story = {
  render: () => ({
    components: { VKSkeleton },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">有动画效果</p>
          <VKSkeleton variant="text" :repeat="3" :animated="true" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">无动画效果</p>
          <VKSkeleton variant="text" :repeat="3" :animated="false" />
        </div>
      </div>
    `,
  }),
}

// 自定义尺寸
export const CustomSize: Story = {
  render: () => ({
    components: { VKSkeleton },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">自定义宽度和高度</p>
          <VKSkeleton width="200px" height="100px" radius="8px" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">自定义圆角</p>
          <VKSkeleton variant="rectangular" width="100%" height="80px" radius="16px" />
        </div>
      </div>
    `,
  }),
}

// 组合使用
export const Composition: Story = {
  render: () => ({
    components: { VKSkeleton },
    template: `
      <div class="flex gap-4 items-start">
        <VKSkeleton variant="avatar" width="64px" height="64px" />
        
        <div class="flex-1">
          <VKSkeleton variant="text" width="40%" class="mb-2" />
          <VKSkeleton variant="text" width="60%" class="mb-4" />
          <VKSkeleton variant="rectangular" height="120px" class="mb-2" />
          <div class="flex justify-end mt-4">
            <VKSkeleton variant="button" width="80px" />
          </div>
        </div>
      </div>
    `,
  }),
}

// 条件渲染
export const ConditionalRendering: Story = {
  render: () => ({
    components: { VKSkeleton },
    setup() {
      const loading = ref(true)

      const toggleLoading = () => {
        loading.value = !loading.value
      }

      return { loading, toggleLoading }
    },
    template: `
      <div class="space-y-4">
        <button 
          class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          @click="toggleLoading"
        >
          {{ loading ? '显示内容' : '显示骨架屏' }}
        </button>
        
        <VKSkeleton :loading="loading" variant="card" class="mb-4">
          <div class="p-4 border rounded-lg">
            <h3 class="text-lg font-medium mb-2">加载完成的内容</h3>
            <p>这是加载完成后显示的实际内容。当 loading 为 false 时，将显示这部分内容。</p>
          </div>
        </VKSkeleton>
        
        <VKSkeleton :loading="loading" variant="text" :repeat="3">
          <p class="mb-2">这是一段文本内容，当加载完成后会显示。</p>
          <p class="mb-2">你可以点击上面的按钮来切换加载状态。</p>
          <p>这样就能看到骨架屏和实际内容之间的切换效果。</p>
        </VKSkeleton>
      </div>
    `,
  }),
}

// 列表加载
export const ListLoading: Story = {
  render: () => ({
    components: { VKSkeleton },
    setup() {
      const loading = ref(true)
      const items = [
        { title: '项目 1', description: '这是项目 1 的描述' },
        { title: '项目 2', description: '这是项目 2 的描述' },
        { title: '项目 3', description: '这是项目 3 的描述' },
      ]

      setTimeout(() => {
        loading.value = false
      }, 3000)

      return { loading, items }
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm">3秒后自动加载完成</p>
        
        <VKSkeleton :loading="loading" variant="list" :repeat="3">
          <div class="space-y-4">
            <div v-for="(item, index) in items" :key="index" class="p-4 border rounded-md">
              <h3 class="font-medium">{{ item.title }}</h3>
              <p class="text-sm text-gray-500">{{ item.description }}</p>
            </div>
          </div>
        </VKSkeleton>
      </div>
    `,
  }),
}
