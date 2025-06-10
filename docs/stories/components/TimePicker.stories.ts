import type { StoryObj } from '@storybook/vue3'
import { VKTimePicker } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/TimePicker',
  component: VKTimePicker,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前选中的时间',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '请选择时间',
    },
    format: {
      control: 'text',
      description: '时间格式',
      defaultValue: 'HH:mm:ss',
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
    minTime: {
      control: 'text',
      description: '最小时间限制',
    },
    maxTime: {
      control: 'text',
      description: '最大时间限制',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKTimePicker>

// 基础时间选择器
export const Default: Story = {
  render: (args) => ({
    components: { VKTimePicker },
    setup() {
      return { args }
    },
    template: '<VKTimePicker v-bind="args" />',
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimePicker size="sm" placeholder="小尺寸" />
        <VKTimePicker size="md" placeholder="中尺寸" />
        <VKTimePicker size="lg" placeholder="大尺寸" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimePicker status="default" placeholder="默认状态" />
        <VKTimePicker status="error" placeholder="错误状态" />
        <VKTimePicker status="warning" placeholder="警告状态" />
        <VKTimePicker status="success" placeholder="成功状态" />
      </div>
    `,
  }),
}

// 12小时制 vs 24小时制
export const TimeFormat: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      const now = new Date()
      return { now }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>24小时制（默认）</p>
          <VKTimePicker :model-value="now" :use24Hours="true" placeholder="24小时制" />
        </div>
        <div>
          <p>12小时制</p>
          <VKTimePicker :model-value="now" :use24Hours="false" placeholder="12小时制" />
        </div>
      </div>
    `,
  }),
}

// 时间步长设置
export const TimeSteps: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>分钟步长: 15, 秒步长: 10</p>
          <VKTimePicker :minute-step="15" :second-step="10" placeholder="时间步长" />
        </div>
      </div>
    `,
  }),
}

// 隐藏秒选择
export const HideSeconds: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {}
    },
    template: `
      <div>
        <p>不显示秒选择</p>
        <VKTimePicker :show-seconds="false" placeholder="时:分" />
      </div>
    `,
  }),
}

// 时间范围限制
export const TimeLimits: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {
        minTime: '09:00:00',
        maxTime: '18:00:00',
      }
    },
    template: `
      <div>
        <p>限制时间范围：只能选择工作时间 (9:00 - 18:00)</p>
        <VKTimePicker 
          :min-time="minTime"
          :max-time="maxTime"
          placeholder="选择工作时间"
        />
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimePicker disabled placeholder="禁用状态" />
        <VKTimePicker readonly placeholder="只读状态" />
      </div>
    `,
  }),
}

// 不同格式
export const Formats: Story = {
  render: () => ({
    components: { VKTimePicker },
    setup() {
      const now = new Date()
      return { now }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimePicker :model-value="now" format="HH:mm:ss" placeholder="HH:mm:ss" />
        <VKTimePicker :model-value="now" format="HH:mm" :show-seconds="false" placeholder="HH:mm" />
        <VKTimePicker :model-value="now" format="h:mm:ss A" :use24Hours="false" placeholder="h:mm:ss A" />
        <VKTimePicker :model-value="now" format="h:mm A" :use24Hours="false" :show-seconds="false" placeholder="h:mm A" />
      </div>
    `,
  }),
}
