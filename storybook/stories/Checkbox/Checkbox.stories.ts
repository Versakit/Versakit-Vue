import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Checkbox } from '@versakit/vue'
import '@versakit/vue/style'
import CheckboxDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Checkbox> = {
  title: '组件/Checkbox 复选框',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '复选框状态值',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '复选框尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'purple'],
      description: '复选框颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    label: {
      control: 'text',
      description: '复选框的标签',
      table: {
        type: { summary: 'string' },
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
type Story = StoryObj<typeof Checkbox>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: false,
    label: '同意服务条款',
  },
}

// 选中状态
export const Checked: Story = {
  args: {
    modelValue: true,
    label: '已选中状态',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    label: '禁用状态',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    label: '默认尺寸',
    size: 'default',
  },
}

// 不同颜色
export const Colors: Story = {
  args: {
    modelValue: true,
    label: '蓝色（默认）',
    color: 'blue',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: true,
    label: '自定义样式',
    pt: {
      root: 'border p-2 rounded-md bg-gray-50',
      checkbox: 'border-purple-500',
      icon: 'text-purple-500',
      label: 'text-purple-700 ml-2',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: true,
    label: '无样式模式',
    unstyled: true,
    pt: {
      root: 'flex items-center cursor-pointer',
      checkbox:
        'w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center bg-white',
      icon: 'text-white',
      label: 'ml-2 text-purple-700',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { CheckboxDemo },
    template: '<CheckboxDemo />',
  }),
}
