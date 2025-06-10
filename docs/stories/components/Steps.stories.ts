import type { StoryObj } from '@storybook/vue3'
import { VKSteps } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/Steps',
  component: VKSteps,
  argTypes: {
    active: {
      control: 'number',
      description: '当前激活步骤',
      defaultValue: 0,
    },
    steps: {
      control: 'object',
      description: '步骤数据',
      defaultValue: [
        { title: '步骤1', description: '这是第一步' },
        { title: '步骤2', description: '这是第二步' },
        { title: '步骤3', description: '这是第三步' },
      ],
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '步骤条方向',
      defaultValue: 'horizontal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '步骤条尺寸',
      defaultValue: 'md',
    },
    clickable: {
      control: 'boolean',
      description: '是否可点击',
      defaultValue: false,
    },
    showIndex: {
      control: 'boolean',
      description: '是否显示步骤序号',
      defaultValue: true,
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      description: '步骤条状态',
      defaultValue: 'process',
    },
    alignCenter: {
      control: 'boolean',
      description: '步骤条对齐方式',
      defaultValue: false,
    },
    simple: {
      control: 'boolean',
      description: '是否简洁模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKSteps>

// 基础步骤条
export const Default: Story = {
  render: (args) => ({
    components: { VKSteps },
    setup() {
      return { args }
    },
    template: '<VKSteps v-bind="args" />',
  }),
  args: {
    active: 1,
    steps: [
      { title: '完成', description: '这一步已经完成' },
      { title: '进行中', description: '当前正在执行的步骤' },
      { title: '等待中', description: '还未开始的步骤' },
    ],
  },
}

// 垂直步骤条
export const Vertical: Story = {
  render: (args) => ({
    components: { VKSteps },
    setup() {
      return { args }
    },
    template: '<div style="height: 300px;"><VKSteps v-bind="args" /></div>',
  }),
  args: {
    direction: 'vertical',
    active: 1,
    steps: [
      { title: '步骤1', description: '这是第一步的详细描述信息' },
      { title: '步骤2', description: '这是第二步的详细描述信息' },
      { title: '步骤3', description: '这是第三步的详细描述信息' },
    ],
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '步骤1', description: '描述1' },
        { title: '步骤2', description: '描述2' },
        { title: '步骤3', description: '描述3' },
      ]
      return { steps }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 class="mb-4">小尺寸</h3>
          <VKSteps :steps="steps" :active="1" size="sm" />
        </div>
        <div>
          <h3 class="mb-4">中尺寸</h3>
          <VKSteps :steps="steps" :active="1" size="md" />
        </div>
        <div>
          <h3 class="mb-4">大尺寸</h3>
          <VKSteps :steps="steps" :active="1" size="lg" />
        </div>
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '步骤1', description: '描述1' },
        { title: '步骤2', description: '描述2' },
        { title: '步骤3', description: '描述3' },
      ]
      return { steps }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 class="mb-4">等待状态</h3>
          <VKSteps :steps="steps" :active="1" status="wait" />
        </div>
        <div>
          <h3 class="mb-4">进行中状态</h3>
          <VKSteps :steps="steps" :active="1" status="process" />
        </div>
        <div>
          <h3 class="mb-4">完成状态</h3>
          <VKSteps :steps="steps" :active="1" status="finish" />
        </div>
        <div>
          <h3 class="mb-4">错误状态</h3>
          <VKSteps :steps="steps" :active="1" status="error" />
        </div>
      </div>
    `,
  }),
}

// 可点击步骤
export const Clickable: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '步骤1', description: '点击我切换到这一步' },
        { title: '步骤2', description: '点击我切换到这一步' },
        { title: '步骤3', description: '点击我切换到这一步' },
      ]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="1" clickable />
    `,
  }),
}

// 简洁模式
export const Simple: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="1" simple />
    `,
  }),
}

// 居中对齐
export const AlignCenter: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '步骤1', description: '描述1' },
        { title: '步骤2', description: '描述2' },
        { title: '步骤3', description: '描述3' },
      ]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="1" align-center />
    `,
  }),
}

// 自定义图标
export const CustomIcons: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '编辑', description: '编辑信息', icon: 'i-edit' },
        { title: '审核', description: '审核信息', icon: 'i-check' },
        { title: '完成', description: '处理完成', icon: 'i-flag' },
      ]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="1" />
    `,
  }),
}

// 自定义状态
export const CustomStatus: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '已完成', description: '这一步已完成', status: 'finish' },
        { title: '出错了', description: '这一步出错了', status: 'error' },
        { title: '等待中', description: '等待执行', status: 'wait' },
      ]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="1" />
    `,
  }),
}

// 禁用步骤
export const DisabledSteps: Story = {
  render: () => ({
    components: { VKSteps },
    setup() {
      const steps = [
        { title: '步骤1', description: '可点击' },
        { title: '步骤2', description: '已禁用', disabled: true },
        { title: '步骤3', description: '可点击' },
      ]
      return { steps }
    },
    template: `
      <VKSteps :steps="steps" :active="0" clickable />
    `,
  }),
}
