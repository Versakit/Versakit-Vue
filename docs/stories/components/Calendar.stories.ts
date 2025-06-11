import type { StoryObj } from '@storybook/vue3-vite'
import { VKCalendar } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/Calendar',
  component: VKCalendar,
  argTypes: {
    modelValue: {
      control: 'date',
      description: '当前选中的日期',
    },
    minDate: {
      control: 'date',
      description: '日历的最小可选日期',
    },
    maxDate: {
      control: 'date',
      description: '日历的最大可选日期',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
      defaultValue: false,
    },
    initialView: {
      control: 'date',
      description: '初始显示的月份和年份',
    },
    showAdjacentDays: {
      control: 'boolean',
      description: '是否显示相邻月份的日期',
      defaultValue: true,
    },
    weekStart: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: '星期起始日 (0-6, 0 = 星期日)',
      defaultValue: 0,
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKCalendar>

// 基础日历
export const Default: Story = {
  render: (args) => ({
    components: { VKCalendar },
    setup() {
      return { args }
    },
    template: '<VKCalendar v-bind="args" />',
  }),
  args: {
    modelValue: new Date(),
  },
}

// 带最小和最大日期限制
export const WithDateLimits: Story = {
  render: (args) => ({
    components: { VKCalendar },
    setup() {
      const today = new Date()
      const minDate = new Date(today)
      minDate.setDate(today.getDate() - 5)

      const maxDate = new Date(today)
      maxDate.setDate(today.getDate() + 10)

      return {
        ...args,
        minDate,
        maxDate,
        modelValue: today,
      }
    },
    template: `
      <div>
        <p>限制选择范围：只能选择今天前后几天</p>
        <VKCalendar 
          :model-value="modelValue"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </div>
    `,
  }),
}

// 不同的星期起始日
export const DifferentWeekStart: Story = {
  render: () => ({
    components: { VKCalendar },
    setup() {
      return {
        today: new Date(),
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>星期日开始（默认）</h3>
          <VKCalendar :model-value="today" :week-start="0" />
        </div>
        <div>
          <h3>星期一开始</h3>
          <VKCalendar :model-value="today" :week-start="1" />
        </div>
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKCalendar },
    setup() {
      return {
        today: new Date(),
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>禁用状态</h3>
          <VKCalendar :model-value="today" disabled />
        </div>
        <div>
          <h3>只读状态</h3>
          <VKCalendar :model-value="today" readonly />
        </div>
      </div>
    `,
  }),
}

// 自定义禁用日期
export const CustomDisabledDates: Story = {
  render: () => ({
    components: { VKCalendar },
    setup() {
      const today = new Date()

      // 禁用周末
      const disabledDate = (date: Date) => {
        const day = date.getDay()
        return day === 0 || day === 6
      }

      return {
        today,
        disabledDate,
      }
    },
    template: `
      <div>
        <p>禁用所有周末</p>
        <VKCalendar :model-value="today" :disabled-date="disabledDate" />
      </div>
    `,
  }),
}

// 隐藏相邻月份的日期
export const HideAdjacentDays: Story = {
  render: () => ({
    components: { VKCalendar },
    setup() {
      return {
        today: new Date(),
      }
    },
    template: `
      <div>
        <h3>隐藏相邻月份的日期</h3>
        <VKCalendar :model-value="today" :show-adjacent-days="false" />
      </div>
    `,
  }),
}
