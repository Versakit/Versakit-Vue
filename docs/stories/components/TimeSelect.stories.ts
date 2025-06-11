import type { StoryObj } from '@storybook/vue3-vite'
import { VKTimeSelect } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/TimeSelect',
  component: VKTimeSelect,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前选中的时间值',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '请选择时间',
    },
    start: {
      control: 'text',
      description: '可选时间的开始时间',
      defaultValue: '00:00',
    },
    end: {
      control: 'text',
      description: '可选时间的结束时间',
      defaultValue: '23:30',
    },
    step: {
      control: 'number',
      description: '时间间隔，单位为分钟',
      defaultValue: 30,
    },
    minTime: {
      control: 'text',
      description: '最小可选时间',
    },
    maxTime: {
      control: 'text',
      description: '最大可选时间',
    },
    options: {
      control: 'object',
      description: '自定义时间选项列表',
    },
    clearable: {
      control: 'boolean',
      description: '是否显示清除按钮',
      defaultValue: true,
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
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKTimeSelect>

// 基础时间选择
export const Default: Story = {
  render: (args) => ({
    components: { VKTimeSelect },
    setup() {
      return { args }
    },
    template: '<VKTimeSelect v-bind="args" />',
  }),
  args: {
    start: '08:00',
    end: '18:00',
    step: 30,
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '08:00',
        end: '18:00',
        step: 30,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimeSelect size="sm" placeholder="小尺寸" :start="start" :end="end" :step="step" />
        <VKTimeSelect size="md" placeholder="中尺寸" :start="start" :end="end" :step="step" />
        <VKTimeSelect size="lg" placeholder="大尺寸" :start="start" :end="end" :step="step" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '08:00',
        end: '18:00',
        step: 30,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimeSelect status="default" placeholder="默认状态" :start="start" :end="end" :step="step" />
        <VKTimeSelect status="error" placeholder="错误状态" :start="start" :end="end" :step="step" />
        <VKTimeSelect status="warning" placeholder="警告状态" :start="start" :end="end" :step="step" />
        <VKTimeSelect status="success" placeholder="成功状态" :start="start" :end="end" :step="step" />
      </div>
    `,
  }),
}

// 不同步长
export const DifferentSteps: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '09:00',
        end: '12:00',
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>15分钟步长</p>
          <VKTimeSelect :start="start" :end="end" :step="15" placeholder="15分钟间隔" />
        </div>
        <div>
          <p>30分钟步长</p>
          <VKTimeSelect :start="start" :end="end" :step="30" placeholder="30分钟间隔" />
        </div>
        <div>
          <p>60分钟步长</p>
          <VKTimeSelect :start="start" :end="end" :step="60" placeholder="60分钟间隔" />
        </div>
      </div>
    `,
  }),
}

// 时间范围限制
export const TimeLimits: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '00:00',
        end: '23:30',
        step: 30,
        minTime: '09:00',
        maxTime: '18:00',
      }
    },
    template: `
      <div>
        <p>限制可选时间在工作时间范围内 (9:00 - 18:00)</p>
        <VKTimeSelect 
          :start="start"
          :end="end"
          :step="step"
          :min-time="minTime"
          :max-time="maxTime"
          placeholder="选择工作时间"
        />
      </div>
    `,
  }),
}

// 自定义选项
export const CustomOptions: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      const customOptions = [
        { value: '09:00', label: '上午 9:00' },
        { value: '10:30', label: '上午 10:30' },
        { value: '12:00', label: '中午 12:00' },
        { value: '13:30', label: '下午 1:30' },
        { value: '15:00', label: '下午 3:00' },
        { value: '17:30', label: '下午 5:30', disabled: true },
      ]

      return { customOptions }
    },
    template: `
      <div>
        <p>自定义时间选项列表</p>
        <VKTimeSelect :options="customOptions" placeholder="选择会议时间" />
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '08:00',
        end: '18:00',
        step: 30,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKTimeSelect 
          disabled 
          placeholder="禁用状态" 
          :start="start" 
          :end="end" 
          :step="step" 
        />
        <VKTimeSelect 
          readonly 
          placeholder="只读状态" 
          :start="start" 
          :end="end" 
          :step="step" 
        />
      </div>
    `,
  }),
}

// 不可清除
export const NotClearable: Story = {
  render: () => ({
    components: { VKTimeSelect },
    setup() {
      return {
        start: '08:00',
        end: '18:00',
        step: 30,
      }
    },
    template: `
      <VKTimeSelect 
        :clearable="false" 
        placeholder="不可清除" 
        :start="start" 
        :end="end" 
        :step="step" 
      />
    `,
  }),
}
