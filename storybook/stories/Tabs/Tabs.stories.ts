import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tabs from './Tabs.vue'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    // 由于组件使用了内部状态管理，这里暂时不需要额外的控制项
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

// 默认标签页
export const Default: Story = {
  render: () => ({
    components: { Tabs },
    template: '<Tabs />',
  }),
}

// 自定义样式的标签页
export const CustomStyle: Story = {
  render: () => ({
    components: { Tabs },
    template: `
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="text-lg font-medium mb-4">自定义样式的标签页</h3>
        <Tabs />
      </div>
    `,
  }),
}

// 嵌套在卡片中的标签页
export const InCard: Story = {
  render: () => ({
    components: { Tabs },
    template: `
      <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">卡片中的标签页</h2>
          <Tabs />
        </div>
      </div>
    `,
  }),
}

// 多个标签页并排展示
export const MultipleInstances: Story = {
  render: () => ({
    components: { Tabs },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">第一组标签页</h3>
          <Tabs />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">第二组标签页</h3>
          <Tabs />
        </div>
      </div>
    `,
  }),
}
