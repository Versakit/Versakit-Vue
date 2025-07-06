import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { DateTimePicker } from '@versakit/vue'
import '@versakit/vue/style'
import DateTimePickerDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof DateTimePicker> = {
  title: '组件/DateTimePicker 日期时间选择器',
  component: DateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'date',
      description: '绑定值，选中的日期时间',
      table: {
        type: { summary: 'Date' },
      },
    },
    min: {
      control: 'date',
      description: '可选择的最小日期时间',
      table: {
        type: { summary: 'Date' },
      },
    },
    max: {
      control: 'date',
      description: '可选择的最大日期时间',
      table: {
        type: { summary: 'Date' },
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
        defaultValue: { summary: '选择日期时间' },
      },
    },
    dateFormat: {
      control: 'text',
      description: '日期格式',
      table: {
        type: { summary: 'string' },
      },
    },
    timeFormat: {
      control: 'select',
      options: ['12h', '24h'],
      description: '时间格式',
      table: {
        type: { summary: "'12h' | '24h'" },
        defaultValue: { summary: '24h' },
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
        type: { summary: 'DateTimePickerPT' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DateTimePicker>

// 基础示例
export const Basic: Story = {
  args: {
    placeholder: '请选择日期时间',
  },
}

// 日期范围限制
export const DateRange: Story = {
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
    placeholder: '请选择日期时间（限制范围）',
  },
}

// 12小时制
export const Format12h: Story = {
  args: {
    timeFormat: '12h',
    placeholder: '请选择日期时间（12小时制）',
  },
}

// 显示秒选择器
export const WithSeconds: Story = {
  args: {
    showSeconds: true,
    placeholder: '请选择日期时间（带秒）',
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
    modelValue: new Date(),
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
    components: { DateTimePickerDemo },
    template: '<DateTimePickerDemo />',
  }),
}
