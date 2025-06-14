import type { StoryObj } from '@storybook/vue3-vite'
import { VKDatePicker } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/DatePicker',
  component: VKDatePicker,
  argTypes: {
    modelValue: {
      control: 'date',
      description: '当前选中的日期',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '请选择日期',
    },
    format: {
      control: 'select',
      options: ['YYYY-MM-DD', 'YYYY/MM/DD', 'DD/MM/YYYY', 'MM/DD/YYYY'],
      description: '日期格式',
      defaultValue: 'YYYY-MM-DD',
    },
    clearable: {
      control: 'boolean',
      description: '是否显示清除按钮',
      defaultValue: true,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
      defaultValue: 'md',
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: '输入框状态',
      defaultValue: 'default',
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
    minDate: {
      control: 'date',
      description: '日历的最小可选日期',
    },
    maxDate: {
      control: 'date',
      description: '日历的最大可选日期',
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
type Story = StoryObj<typeof VKDatePicker>

// 基础日期选择器
export const Default: Story = {
  render: (args) => ({
    components: { VKDatePicker },
    setup() {
      return { args }
    },
    template: '<VKDatePicker v-bind="args" />',
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDatePicker size="sm" placeholder="小尺寸" />
        <VKDatePicker size="md" placeholder="中尺寸" />
        <VKDatePicker size="lg" placeholder="大尺寸" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDatePicker status="default" placeholder="默认状态" />
        <VKDatePicker status="error" placeholder="错误状态" />
        <VKDatePicker status="warning" placeholder="警告状态" />
        <VKDatePicker status="success" placeholder="成功状态" />
      </div>
    `,
  }),
}

// 不同格式
export const Formats: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      const today = new Date()
      return { today }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDatePicker :model-value="today" format="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
        <VKDatePicker :model-value="today" format="YYYY/MM/DD" placeholder="YYYY/MM/DD" />
        <VKDatePicker :model-value="today" format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
        <VKDatePicker :model-value="today" format="MM/DD/YYYY" placeholder="MM/DD/YYYY" />
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDatePicker disabled placeholder="禁用状态" />
        <VKDatePicker readonly placeholder="只读状态" />
      </div>
    `,
  }),
}

// 日期范围限制
export const DateLimits: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      const today = new Date()
      const minDate = new Date(today)
      minDate.setDate(today.getDate() - 5)

      const maxDate = new Date(today)
      maxDate.setDate(today.getDate() + 10)

      return { minDate, maxDate }
    },
    template: `
      <div>
        <p>限制选择范围：只能选择今天前后几天</p>
        <VKDatePicker 
          :min-date="minDate"
          :max-date="maxDate"
          placeholder="选择日期（有限制）"
        />
      </div>
    `,
  }),
}

// 禁用特定日期
export const DisableDates: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      // 禁用周末
      const disabledDate = (date: Date) => {
        const day = date.getDay()
        return day === 0 || day === 6
      }

      return { disabledDate }
    },
    template: `
      <div>
        <p>禁用所有周末</p>
        <VKDatePicker :disabled-date="disabledDate" placeholder="选择工作日" />
      </div>
    `,
  }),
}

// 不可清除
export const NotClearable: Story = {
  render: () => ({
    components: { VKDatePicker },
    setup() {
      return {}
    },
    template: `
      <VKDatePicker :clearable="false" placeholder="不可清除" />
    `,
  }),
}
