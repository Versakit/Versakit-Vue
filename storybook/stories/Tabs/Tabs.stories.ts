import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Tabs } from '@versakit/vue'
import '@versakit/vue/style'
import TabsDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Tabs> = {
  title: '组件/Tabs 标签页',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: '标签项数组',
      table: {
        type: { summary: 'TabItem[]' },
      },
    },
    initialIndex: {
      control: 'number',
      description: '初始选中的标签索引',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '标签页尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用全部标签',
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
type Story = StoryObj<typeof Tabs>

const defaultItems = [
  {
    label: '标签一',
    content: '标签一的内容',
  },
  {
    label: '标签二',
    content: '标签二的内容',
  },
  {
    label: '标签三',
    content: '标签三的内容',
  },
]

// 基础示例
export const Basic: Story = {
  args: {
    items: defaultItems,
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    items: defaultItems,
    disabled: true,
  },
}

// 禁用特定标签
export const DisabledTab: Story = {
  args: {
    items: [
      {
        label: '标签一',
        content: '标签一的内容',
      },
      {
        label: '标签二',
        content: '标签二的内容',
        disabled: true,
      },
      {
        label: '标签三',
        content: '标签三的内容',
      },
    ],
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    items: defaultItems,
    size: 'lg',
  },
}

// 块级元素
export const Block: Story = {
  args: {
    items: defaultItems,
    block: true,
  },
}

// 带图标
export const WithIcons: Story = {
  args: {
    items: [
      {
        label: '主页',
        content: '主页内容',
        icon: 'home',
      },
      {
        label: '设置',
        content: '设置内容',
        icon: 'settings',
      },
      {
        label: '用户',
        content: '用户内容',
        icon: 'user',
      },
    ],
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    items: defaultItems,
    pt: {
      trigger:
        'text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700',
      panel: 'p-4 border border-purple-200 rounded-md',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    items: defaultItems,
    unstyled: true,
    pt: {
      container: 'flex flex-col',
      trigger:
        'px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
      panel: 'p-4 bg-white border border-gray-200 rounded-b-lg',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { TabsDemo },
    template: '<TabsDemo />',
  }),
}
