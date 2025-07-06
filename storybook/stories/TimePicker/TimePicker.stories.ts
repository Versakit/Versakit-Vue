import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { TimePicker } from '@versakit/vue'
import '@versakit/vue/style'
import TimePickerDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof TimePicker> = {
  title: '组件/TimePicker 时间选择器',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值，选中的时间',
      table: {
        type: { summary: 'string | Date' },
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
    readonly: {
      control: 'boolean',
      description: '是否只读',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '选择时间' },
      },
    },
    format: {
      control: 'select',
      options: ['12h', '24h'],
      description: '时间格式',
      table: {
        type: { summary: "'12h' | '24h'" },
        defaultValue: { summary: '24h' },
      },
    },
    hourStep: {
      control: 'number',
      description: '小时选择步长',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    minuteStep: {
      control: 'number',
      description: '分钟选择步长',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    secondStep: {
      control: 'number',
      description: '秒选择步长',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    showSeconds: {
      control: 'boolean',
      description: '是否显示秒选择器',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
      description: '自定义样式配置',
      table: {
        type: { summary: 'TimePickerPT' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TimePicker>

// 基础示例
export const Basic: Story = {
  args: {
    placeholder: '请选择时间',
  },
}

// 12小时制
export const Format12h: Story = {
  args: {
    format: '12h',
    placeholder: '请选择时间（12小时制）',
  },
}

// 显示秒选择器
export const WithSeconds: Story = {
  args: {
    showSeconds: true,
    placeholder: '请选择时间（带秒）',
  },
}

// 自定义步长
export const CustomSteps: Story = {
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 30,
    showSeconds: true,
    placeholder: '自定义步长',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
  },
}

// 只读状态
export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: '12:30',
  },
}

// 不可清空
export const NonClearable: Story = {
  args: {
    clearable: false,
    placeholder: '不可清空',
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { TimePickerDemo },
    template: '<TimePickerDemo />',
  }),
}
