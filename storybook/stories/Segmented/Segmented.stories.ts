import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Segmented } from '@versakit/vue'
import '@versakit/vue/style'
import SegmentedDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Segmented> = {
  title: '组件/Segmented 分段控制器',
  component: Segmented,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前选中的值',
      table: {
        type: { summary: 'string | number' },
      },
    },
    options: {
      control: 'object',
      description: '选项数组',
      table: {
        type: {
          summary:
            'Array<string | number | { value: string | number; label: string; disabled?: boolean }>',
        },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '控制器尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
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
    block: {
      control: 'boolean',
      description: '是否为块级元素',
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
type Story = StoryObj<typeof Segmented>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
  },
}

// 对象选项
export const ObjectOptions: Story = {
  args: {
    modelValue: 'list',
    options: [
      { value: 'list', label: '列表' },
      { value: 'kanban', label: '看板' },
      { value: 'calendar', label: '日历' },
    ],
  },
}

// 禁用选项
export const DisabledOption: Story = {
  args: {
    modelValue: 'list',
    options: [
      { value: 'list', label: '列表' },
      { value: 'kanban', label: '看板' },
      { value: 'calendar', label: '日历', disabled: true },
    ],
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    size: 'lg',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    disabled: true,
  },
}

// 块级元素
export const Block: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    block: true,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    pt: {
      container: 'bg-purple-100 rounded-lg p-1',
      option: 'text-purple-700 hover:bg-purple-200',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    unstyled: true,
    pt: {
      container: 'flex rounded-full bg-gray-100 p-1',
      option:
        'flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SegmentedDemo },
    template: '<SegmentedDemo />',
  }),
}
