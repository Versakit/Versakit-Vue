import type { StoryObj } from '@storybook/vue3'
import { VKDateTimePicker } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/DateTimePicker',
  component: VKDateTimePicker,
  argTypes: {
    modelValue: {
      control: 'date',
      description: '当前选中的日期时间',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '请选择日期和时间',
    },
    format: {
      control: 'text',
      description: '日期时间格式',
      defaultValue: 'YYYY-MM-DD HH:mm:ss',
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
      description: '最小可选日期',
    },
    maxDate: {
      control: 'date',
      description: '最大可选日期',
    },
    use24Hours: {
      control: 'boolean',
      description: '是否使用24小时制',
      defaultValue: true,
    },
    minuteStep: {
      control: 'number',
      description: '分钟步长',
      defaultValue: 1,
    },
    secondStep: {
      control: 'number',
      description: '秒步长',
      defaultValue: 1,
    },
    showSeconds: {
      control: 'boolean',
      description: '是否显示秒选择',
      defaultValue: true,
    },
    showTime: {
      control: 'boolean',
      description: '是否显示时间选择',
      defaultValue: true,
    },
    timePosition: {
      control: 'select',
      options: ['bottom', 'right'],
      description: '时间选择器的位置',
      defaultValue: 'bottom',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKDateTimePicker>

// 基础日期时间选择器
export const Default: Story = {
  render: (args) => ({
    components: { VKDateTimePicker },
    setup() {
      return { args }
    },
    template: '<VKDateTimePicker v-bind="args" />',
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDateTimePicker size="sm" placeholder="小尺寸" />
        <VKDateTimePicker size="md" placeholder="中尺寸" />
        <VKDateTimePicker size="lg" placeholder="大尺寸" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDateTimePicker status="default" placeholder="默认状态" />
        <VKDateTimePicker status="error" placeholder="错误状态" />
        <VKDateTimePicker status="warning" placeholder="警告状态" />
        <VKDateTimePicker status="success" placeholder="成功状态" />
      </div>
    `,
  }),
}

// 12小时制 vs 24小时制
export const TimeFormat: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      const now = new Date()
      return { now }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>24小时制（默认）</p>
          <VKDateTimePicker :model-value="now" :use24Hours="true" placeholder="24小时制" />
        </div>
        <div>
          <p>12小时制</p>
          <VKDateTimePicker :model-value="now" :use24Hours="false" placeholder="12小时制" />
        </div>
      </div>
    `,
  }),
}

// 时间步长设置
export const TimeSteps: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>分钟步长: 15, 秒步长: 10</p>
          <VKDateTimePicker :minute-step="15" :second-step="10" placeholder="时间步长" />
        </div>
      </div>
    `,
  }),
}

// 隐藏秒选择
export const HideSeconds: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div>
        <p>不显示秒选择</p>
        <VKDateTimePicker :show-seconds="false" placeholder="时:分" />
      </div>
    `,
  }),
}

// 时间选择器位置
export const TimePosition: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>时间选择器在底部（默认）</p>
          <VKDateTimePicker time-position="bottom" placeholder="底部时间选择器" />
        </div>
        <div>
          <p>时间选择器在右侧</p>
          <VKDateTimePicker time-position="right" placeholder="右侧时间选择器" />
        </div>
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKDateTimePicker disabled placeholder="禁用状态" />
        <VKDateTimePicker readonly placeholder="只读状态" />
      </div>
    `,
  }),
}

// 仅日期选择（隐藏时间）
export const DateOnly: Story = {
  render: () => ({
    components: { VKDateTimePicker },
    setup() {
      return {}
    },
    template: `
      <div>
        <p>仅显示日期选择</p>
        <VKDateTimePicker :show-time="false" placeholder="仅日期" />
      </div>
    `,
  }),
}
