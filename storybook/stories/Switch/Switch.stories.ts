import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Switch } from '@versakit/vue'
import '@versakit/vue/style'
import SwitchDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Switch> = {
  title: '组件/Switch 开关',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '开关状态值',
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
      description: '开关尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'purple'],
      description: '开关颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
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
type Story = StoryObj<typeof Switch>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: false,
  },
}

// 选中状态
export const Checked: Story = {
  args: {
    modelValue: true,
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: false,
    disabled: true,
  },
}

// 禁用选中状态
export const DisabledChecked: Story = {
  args: {
    modelValue: true,
    disabled: true,
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    modelValue: true,
    size: 'large',
  },
}

// 不同颜色
export const Colors: Story = {
  args: {
    modelValue: true,
    color: 'green',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: true,
    pt: {
      track: 'bg-purple-200',
      thumb: 'bg-purple-600',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: true,
    unstyled: true,
    pt: {
      root: 'inline-block',
      track:
        'w-12 h-6 rounded-full bg-gray-300 transition-colors data-[checked=true]:bg-gradient-to-r data-[checked=true]:from-blue-500 data-[checked=true]:to-purple-500',
      thumb:
        'block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform data-[checked=true]:translate-x-7',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SwitchDemo },
    template: '<SwitchDemo />',
  }),
}
