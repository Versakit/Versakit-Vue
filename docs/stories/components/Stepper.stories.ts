import type { StoryObj } from '@storybook/vue3'
import { VKStepper } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Stepper',
  component: VKStepper,
  argTypes: {
    active: {
      control: { type: 'number', min: 0 },
      description: '当前激活步骤',
      defaultValue: 1,
    },
    steps: {
      control: 'object',
      description: '步骤数据',
    },
    direction: {
      control: 'radio',
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
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    stepperClass: {
      control: 'text',
      description: '自定义步骤条类名',
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKStepper>

// 基础步骤条
export const Default: Story = {
  render: (args) => ({
    components: { VKStepper },
    setup() {
      const defaultSteps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述' },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return {
        args,
        defaultSteps,
      }
    },
    template: `
      <VKStepper v-bind="args" :steps="defaultSteps" />
    `,
  }),
  args: {
    active: 1,
  },
}

// 可点击步骤条
export const Clickable: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const active = ref(0)
      const steps = [
        { title: '步骤 1', description: '点击下一步继续' },
        { title: '步骤 2', description: '点击下一步继续' },
        { title: '步骤 3', description: '点击完成' },
      ]

      return { active, steps }
    },
    template: `
      <div class="space-y-4">
        <VKStepper 
          :active="active" 
          :steps="steps" 
          clickable 
          @change="active = $event" 
        />
        
        <div class="flex justify-between mt-8">
          <button 
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            @click="active = Math.max(0, active - 1)"
            :disabled="active === 0"
          >
            上一步
          </button>
          
          <button 
            class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
            @click="active = Math.min(steps.length - 1, active + 1)"
            :disabled="active === steps.length - 1"
          >
            {{ active === steps.length - 1 ? '完成' : '下一步' }}
          </button>
        </div>
      </div>
    `,
  }),
}

// 不同方向
export const Directions: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述' },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return { steps }
    },
    template: `
      <div class="space-y-12">
        <div>
          <p class="text-sm font-medium mb-2">水平方向</p>
          <VKStepper :active="1" :steps="steps" direction="horizontal" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">垂直方向</p>
          <VKStepper :active="1" :steps="steps" direction="vertical" />
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述' },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return { steps }
    },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">小尺寸 (sm)</p>
          <VKStepper :active="1" :steps="steps" size="sm" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">中等尺寸 (md)</p>
          <VKStepper :active="1" :steps="steps" size="md" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">大尺寸 (lg)</p>
          <VKStepper :active="1" :steps="steps" size="lg" />
        </div>
      </div>
    `,
  }),
}

// 不同状态
export const Statuses: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '等待中', description: 'wait 状态' },
        { title: '处理中', description: 'process 状态' },
        { title: '已完成', description: 'finish 状态' },
        { title: '出错了', description: 'error 状态' },
      ]

      const stepsWithStatus = [
        { title: '等待中', description: 'wait 状态', status: 'wait' },
        { title: '处理中', description: 'process 状态', status: 'process' },
        { title: '已完成', description: 'finish 状态', status: 'finish' },
        { title: '出错了', description: 'error 状态', status: 'error' },
      ]

      return { steps, stepsWithStatus }
    },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">默认状态（基于 active）</p>
          <VKStepper :active="1" :steps="steps" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">自定义每个步骤的状态</p>
          <VKStepper :active="1" :steps="stepsWithStatus" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">当前步骤为错误状态</p>
          <VKStepper :active="2" :steps="steps" status="error" />
        </div>
      </div>
    `,
  }),
}

// 带图标的步骤
export const WithIcons: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        {
          title: '账户信息',
          description: '设置您的账户信息',
          icon: 'i-user',
        },
        {
          title: '个人资料',
          description: '完善您的个人资料',
          icon: 'i-profile',
        },
        {
          title: '完成',
          description: '确认信息并完成',
          icon: 'i-check-circle',
        },
      ]

      return { steps }
    },
    template: `
      <VKStepper :active="1" :steps="steps" />
    `,
  }),
}

// 居中对齐
export const AlignCenter: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述' },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return { steps }
    },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">默认对齐</p>
          <VKStepper :active="1" :steps="steps" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">居中对齐</p>
          <VKStepper :active="1" :steps="steps" alignCenter />
        </div>
      </div>
    `,
  }),
}

// 简洁模式
export const Simple: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述' },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return { steps }
    },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">标准模式</p>
          <VKStepper :active="1" :steps="steps" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">简洁模式</p>
          <VKStepper :active="1" :steps="steps" simple />
        </div>
      </div>
    `,
  }),
}

// 禁用步骤
export const DisabledSteps: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        { title: '步骤 1', description: '这是第一步的描述' },
        { title: '步骤 2', description: '这是第二步的描述', disabled: true },
        { title: '步骤 3', description: '这是第三步的描述' },
      ]

      return { steps }
    },
    template: `
      <VKStepper :active="0" :steps="steps" clickable />
    `,
  }),
}

// 自定义内容
export const CustomContent: Story = {
  render: () => ({
    components: { VKStepper },
    setup() {
      const steps = [
        {
          title: '基本信息',
          description: '填写基本信息',
          content: '请填写您的姓名、电子邮件和联系电话',
        },
        {
          title: '详细资料',
          description: '填写详细资料',
          content: '请填写您的地址、城市和邮政编码',
        },
        {
          title: '完成',
          description: '确认提交',
          content: '请确认您填写的所有信息无误，然后点击提交按钮',
        },
      ]

      const active = ref(0)

      return { steps, active }
    },
    template: `
      <div class="space-y-4">
        <VKStepper 
          :active="active" 
          :steps="steps" 
          @change="active = $event"
          clickable
        />
        
        <div class="mt-8 p-4 border rounded-md">
          <h3 class="text-lg font-medium mb-2">{{ steps[active].title }}</h3>
          <p>{{ steps[active].content }}</p>
        </div>
        
        <div class="flex justify-between mt-4">
          <button 
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            @click="active = Math.max(0, active - 1)"
            :disabled="active === 0"
          >
            上一步
          </button>
          
          <button 
            class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
            @click="active = Math.min(steps.length - 1, active + 1)"
            :disabled="active === steps.length - 1"
          >
            {{ active === steps.length - 1 ? '提交' : '下一步' }}
          </button>
        </div>
      </div>
    `,
  }),
}
