import type { StoryObj } from '@storybook/vue3-vite'
import { VKInputNumber } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/InputNumber',
  component: VKInputNumber,
  argTypes: {
    modelValue: {
      control: 'number',
      description: '当前输入的值',
    },
    min: {
      control: 'number',
      description: '最小值',
      defaultValue: -Infinity,
    },
    max: {
      control: 'number',
      description: '最大值',
      defaultValue: Infinity,
    },
    step: {
      control: 'number',
      description: '步长',
      defaultValue: 1,
    },
    precision: {
      control: 'number',
      description: '精度，小数点位数',
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
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '请输入数字',
    },
    controls: {
      control: 'boolean',
      description: '是否显示控制按钮',
      defaultValue: true,
    },
    controlsPosition: {
      control: 'select',
      options: ['right', 'both'],
      description: '控制按钮位置',
      defaultValue: 'right',
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
    prefix: {
      control: 'text',
      description: '前缀文本',
    },
    suffix: {
      control: 'text',
      description: '后缀文本',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKInputNumber>

// 基础数字输入框
export const Default: Story = {
  render: (args) => ({
    components: { VKInputNumber },
    setup() {
      return { args }
    },
    template: '<VKInputNumber v-bind="args" style="width: 200px;" />',
  }),
  args: {
    modelValue: 1,
  },
}

// 设置步长
export const WithStep: Story = {
  render: (args) => ({
    components: { VKInputNumber },
    setup() {
      return { args }
    },
    template: '<VKInputNumber v-bind="args" style="width: 200px;" />',
  }),
  args: {
    modelValue: 1,
    step: 0.1,
    precision: 1,
  },
}

// 设置范围
export const WithRange: Story = {
  render: (args) => ({
    components: { VKInputNumber },
    setup() {
      return { args }
    },
    template: '<VKInputNumber v-bind="args" style="width: 200px;" />',
  }),
  args: {
    modelValue: 5,
    min: 0,
    max: 10,
  },
}

// 精度控制
export const Precision: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>1位小数精度</p>
          <VKInputNumber :model-value="1.2" :precision="1" style="width: 200px;" />
        </div>
        <div>
          <p>2位小数精度</p>
          <VKInputNumber :model-value="1.25" :precision="2" style="width: 200px;" />
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKInputNumber :model-value="1" size="sm" style="width: 200px;" />
        <VKInputNumber :model-value="1" size="md" style="width: 200px;" />
        <VKInputNumber :model-value="1" size="lg" style="width: 200px;" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKInputNumber :model-value="1" status="default" style="width: 200px;" />
        <VKInputNumber :model-value="1" status="error" style="width: 200px;" />
        <VKInputNumber :model-value="1" status="warning" style="width: 200px;" />
        <VKInputNumber :model-value="1" status="success" style="width: 200px;" />
      </div>
    `,
  }),
}

// 控制按钮位置
export const ControlsPosition: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>右侧按钮（默认）</p>
          <VKInputNumber :model-value="1" controls-position="right" style="width: 200px;" />
        </div>
        <div>
          <p>两侧按钮</p>
          <VKInputNumber :model-value="1" controls-position="both" style="width: 200px;" />
        </div>
        <div>
          <p>无按钮</p>
          <VKInputNumber :model-value="1" :controls="false" style="width: 200px;" />
        </div>
      </div>
    `,
  }),
}

// 前缀和后缀
export const PrefixAndSuffix: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKInputNumber :model-value="1" prefix="¥" style="width: 200px;" />
        <VKInputNumber :model-value="1" suffix="kg" style="width: 200px;" />
        <VKInputNumber :model-value="1" prefix="$" suffix="USD" style="width: 200px;" />
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKInputNumber },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>禁用状态</p>
          <VKInputNumber :model-value="1" disabled style="width: 200px;" />
        </div>
        <div>
          <p>只读状态</p>
          <VKInputNumber :model-value="1" readonly style="width: 200px;" />
        </div>
      </div>
    `,
  }),
}
