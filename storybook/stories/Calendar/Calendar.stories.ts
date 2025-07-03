import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Calendar } from '@versakit/vue'
import '@versakit/vue/style'
import CalendarDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Calendar> = {
  title: '组件/Calendar 日历',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'date',
      description: '绑定值，选中的日期',
      table: {
        type: { summary: 'Date' },
      },
    },
    min: {
      control: 'date',
      description: '可选择的最小日期',
      table: {
        type: { summary: 'Date' },
      },
    },
    max: {
      control: 'date',
      description: '可选择的最大日期',
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
        type: { summary: 'CalendarPT' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

// 基础示例
export const Basic: Story = {
  args: {},
}

// 日期范围限制
export const DateRange: Story = {
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

// 只读状态
export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: new Date(),
  },
}

// 周一为一周的第一天
export const MondayFirst: Story = {
  args: {
    firstDayOfWeek: 1,
  },
}

// 本地化
export const Localization: Story = {
  args: {
    locale: 'zh-CN',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    pt: {
      root: 'bg-gray-100 rounded-lg p-4',
      header: 'bg-blue-50 rounded-t-lg',
      weekdays: 'text-blue-600',
      day: 'hover:bg-blue-100',
      selectedDay: 'bg-blue-500 text-white',
      todayDay: 'border-2 border-blue-500',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { CalendarDemo },
    template: '<CalendarDemo />',
  }),
}
