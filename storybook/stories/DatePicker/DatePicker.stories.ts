import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { DatePicker } from '@versakit/vue'
import '@versakit/vue/style'
import DatePickerDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof DatePicker> = {
  title: '组件/DatePicker 日期选择器',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'date',
      description: '绑定值，选中的日期',
      table: {
        type: { summary: 'Date | string' },
      },
    },
    min: {
      control: 'date',
      description: '可选择的最小日期',
      table: {
        type: { summary: 'Date | string' },
      },
    },
    max: {
      control: 'date',
      description: '可选择的最大日期',
      table: {
        type: { summary: 'Date | string' },
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
        defaultValue: { summary: '选择日期' },
      },
    },
    format: {
      control: 'text',
      description: '日期格式',
      table: {
        type: { summary: 'string' },
      },
    },
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: '一周的第一天，0表示周日，1表示周一',
      table: {
        type: { summary: '0 | 1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '0' },
      },
    },
    locale: {
      control: 'text',
      description: '本地化配置，影响月份和星期的显示',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '系统默认' },
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
        type: { summary: 'DatePickerPT' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

// 基础示例
export const Basic: Story = {
  args: {
    placeholder: '请选择日期',
  },
}

// 日期范围限制
export const DateRange: Story = {
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
    placeholder: '请选择日期（限制范围）',
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
    modelValue: new Date(),
  },
}

// 自定义格式
export const CustomFormat: Story = {
  args: {
    format: 'yyyy年MM月dd日',
    placeholder: '自定义日期格式',
  },
}

// 周一为一周的第一天
export const MondayFirst: Story = {
  args: {
    firstDayOfWeek: 1,
    placeholder: '周一为一周的第一天',
  },
}

// 不可清空
export const NonClearable: Story = {
  args: {
    clearable: false,
    placeholder: '不可清空',
  },
}

// 本地化
export const Localization: Story = {
  args: {
    locale: 'zh-CN',
    placeholder: '中文本地化',
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { DatePickerDemo },
    template: '<DatePickerDemo />',
  }),
}
