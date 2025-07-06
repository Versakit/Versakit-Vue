import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RangeCalendar } from '@versakit/vue'
import '@versakit/vue/style'
import RangeCalendarDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof RangeCalendar> = {
  title: '组件/RangeCalendar 日期范围选择器',
  component: RangeCalendar,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'object',
      description: '选中的日期范围',
      table: {
        type: { summary: '[Date | null, Date | null]' },
        defaultValue: { summary: '[null, null]' },
      },
    },
    min: {
      control: 'date',
      description: '最小可选日期',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'date',
      description: '最大可选日期',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' },
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
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    locale: {
      control: 'text',
      description: '本地化设置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
type Story = StoryObj<typeof RangeCalendar>

// 基础示例
export const Basic: Story = {
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `,
  }),
}

// 默认选中日期
export const DefaultSelected: Story = {
  render: () => ({
    components: { RangeCalendar },
    setup() {
      const today = new Date()
      const nextWeek = new Date()
      nextWeek.setDate(today.getDate() + 7)

      return {
        defaultRange: [today, nextWeek],
      }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar :model-value="defaultRange" />
      </div>
    `,
  }),
}

// 日期范围限制
export const MinMaxDates: Story = {
  render: () => ({
    components: { RangeCalendar },
    setup() {
      const today = new Date()
      const minDate = new Date()
      const maxDate = new Date()

      // 设置最小日期为今天
      minDate.setDate(today.getDate())

      // 设置最大日期为30天后
      maxDate.setDate(today.getDate() + 30)

      return {
        minDate,
        maxDate,
      }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar :min="minDate" :max="maxDate" />
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `,
  }),
}

// 只读状态
export const Readonly: Story = {
  args: {
    readonly: true,
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      const today = new Date()
      const nextWeek = new Date()
      nextWeek.setDate(today.getDate() + 7)

      return {
        args,
        defaultRange: [today, nextWeek],
      }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" :model-value="defaultRange" />
      </div>
    `,
  }),
}

// 周一作为一周的第一天
export const MondayFirstDay: Story = {
  args: {
    firstDayOfWeek: 1,
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `,
  }),
}

// 本地化设置
export const Localization: Story = {
  args: {
    locale: 'zh-CN',
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  render: () => ({
    components: { RangeCalendar },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar :pt="{
          root: 'bg-gray-50 p-4 rounded-lg shadow',
          header: 'bg-blue-50 p-2 rounded mb-2',
          title: 'text-blue-700 font-bold',
          day: 'hover:bg-blue-50',
          inRange: 'bg-blue-50',
          rangeStart: 'bg-blue-600 text-white',
          rangeEnd: 'bg-blue-600 text-white'
        }" />
      </div>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md">
        <RangeCalendar
          v-bind="args"
          :pt="{
            root: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg',
            header: 'flex items-center justify-between mb-6',
            title: 'text-xl text-indigo-700 font-bold',
            navigation: 'flex space-x-2',
            navButton: 'p-2 rounded-full hover:bg-indigo-100 text-indigo-600',
            weekdays: 'grid grid-cols-7 mb-2',
            weekday: 'text-center text-sm font-medium text-indigo-400 py-2',
            days: 'grid grid-cols-7 gap-1',
            day: 'flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors hover:bg-indigo-100',
            today: 'border border-indigo-300',
            inRange: 'bg-indigo-100',
            rangeStart: 'bg-indigo-600 text-white',
            rangeEnd: 'bg-indigo-600 text-white'
          }"
        />
      </div>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { RangeCalendarDemo },
    template: '<RangeCalendarDemo />',
  }),
}
