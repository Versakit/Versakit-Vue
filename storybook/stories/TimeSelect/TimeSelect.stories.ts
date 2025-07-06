import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { TimeSelect } from '@versakit/vue'
import '@versakit/vue/style'
import TimeSelectDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof TimeSelect> = {
  title: '组件/TimeSelect 时间选择',
  component: TimeSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '绑定值，选中的时间',
      table: {
        type: { summary: 'string' },
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
    options: {
      control: 'object',
      description: '可选时间选项列表',
      table: {
        type: { summary: 'string[]' },
      },
    },
    start: {
      control: 'text',
      description: '开始时间，格式为 HH:mm',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '00:00' },
      },
    },
    end: {
      control: 'text',
      description: '结束时间，格式为 HH:mm',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '23:59' },
      },
    },
    step: {
      control: 'number',
      description: '时间间隔，单位为分钟',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '30' },
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
        type: { summary: 'TimeSelectPT' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TimeSelect>

// 基础示例
export const Basic: Story = {
  args: {
    placeholder: '请选择时间',
  },
}

// 自定义时间范围和步长
export const CustomRange: Story = {
  args: {
    start: '09:00',
    end: '18:00',
    step: 15,
    placeholder: '工作时间选择（15分钟间隔）',
  },
}

// 12小时制
export const Format12h: Story = {
  args: {
    format: '12h',
    placeholder: '请选择时间（12小时制）',
  },
}

// 自定义选项
export const CustomOptions: Story = {
  args: {
    options: ['09:00', '12:00', '15:00', '18:00'],
    placeholder: '选择预定义时间',
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

// 自定义占位文本
export const CustomPlaceholder: Story = {
  args: {
    placeholder: '请选择预约时间',
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { TimeSelectDemo },
    template: '<TimeSelectDemo />',
  }),
}
