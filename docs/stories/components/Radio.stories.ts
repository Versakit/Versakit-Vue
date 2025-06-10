import type { StoryObj } from '@storybook/vue3'
import { VKRadio, VKRadioGroup } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Radio',
  component: VKRadio,
  argTypes: {
    value: {
      control: 'text',
      description: '单选框的值',
    },
    name: {
      control: 'text',
      description: '单选框名称',
    },
    checked: {
      control: 'boolean',
      description: '是否选中',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '变体样式',
      defaultValue: 'default',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '尺寸',
      defaultValue: 'md',
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
    ariaLabel: {
      control: 'text',
      description: '无障碍标签',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKRadio>

// 基础单选框
export const Default: Story = {
  render: (args) => ({
    components: { VKRadio },
    setup() {
      return { args }
    },
    template: '<VKRadio v-bind="args">选项 1</VKRadio>',
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <VKRadio variant="default" value="default">默认样式</VKRadio>
        <VKRadio variant="primary" value="primary">主要样式</VKRadio>
        <VKRadio variant="success" value="success">成功样式</VKRadio>
        <VKRadio variant="warning" value="warning">警告样式</VKRadio>
        <VKRadio variant="error" value="error">错误样式</VKRadio>
        <VKRadio variant="info" value="info">信息样式</VKRadio>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <VKRadio size="xs" value="xs">超小尺寸</VKRadio>
        <VKRadio size="sm" value="sm">小尺寸</VKRadio>
        <VKRadio size="md" value="md">中等尺寸</VKRadio>
        <VKRadio size="lg" value="lg">大尺寸</VKRadio>
        <VKRadio size="xl" value="xl">超大尺寸</VKRadio>
      </div>
    `,
  }),
}

// 状态
export const States: Story = {
  render: () => ({
    components: { VKRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <VKRadio value="normal" checked>选中状态</VKRadio>
        </div>
        <div>
          <VKRadio value="disabled" disabled>禁用状态</VKRadio>
        </div>
        <div>
          <VKRadio value="disabled-checked" disabled checked>禁用选中状态</VKRadio>
        </div>
        <div>
          <VKRadio value="readonly" readonly>只读状态</VKRadio>
        </div>
        <div>
          <VKRadio value="readonly-checked" readonly checked>只读选中状态</VKRadio>
        </div>
      </div>
    `,
  }),
}

// 单选组
export const RadioGroup: Story = {
  render: () => ({
    components: { VKRadio, VKRadioGroup },
    setup() {
      const selectedValue = ref('option2')
      return { selectedValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>垂直布局（默认）</h3>
          <VKRadioGroup v-model="selectedValue" name="group-vertical">
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <h3>水平布局</h3>
          <VKRadioGroup v-model="selectedValue" name="group-horizontal" direction="horizontal">
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <p>当前选中值：{{ selectedValue }}</p>
        </div>
      </div>
    `,
  }),
}

// 单选组样式继承
export const RadioGroupVariants: Story = {
  render: () => ({
    components: { VKRadio, VKRadioGroup },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>主要风格单选组</h3>
          <VKRadioGroup name="group-primary" variant="primary">
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <h3>成功风格单选组</h3>
          <VKRadioGroup name="group-success" variant="success">
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <h3>大尺寸单选组</h3>
          <VKRadioGroup name="group-large" size="lg">
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <h3>禁用单选组</h3>
          <VKRadioGroup name="group-disabled" disabled>
            <VKRadio value="option1">选项 1</VKRadio>
            <VKRadio value="option2">选项 2</VKRadio>
            <VKRadio value="option3">选项 3</VKRadio>
          </VKRadioGroup>
        </div>
      </div>
    `,
  }),
}

// 表单集成
export const FormIntegration: Story = {
  render: () => ({
    components: { VKRadio, VKRadioGroup },
    setup() {
      const gender = ref('male')
      const subscription = ref('monthly')

      const handleSubmit = () => {
        alert(
          `提交的数据：\n性别: ${gender.value}\n订阅: ${subscription.value}`,
        )
      }

      return { gender, subscription, handleSubmit }
    },
    template: `
      <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
        <div>
          <h3>性别</h3>
          <VKRadioGroup v-model="gender" name="gender" direction="horizontal">
            <VKRadio value="male">男</VKRadio>
            <VKRadio value="female">女</VKRadio>
            <VKRadio value="other">其他</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <h3>订阅计划</h3>
          <VKRadioGroup v-model="subscription" name="subscription" variant="primary">
            <VKRadio value="monthly">月付 ($9.99/月)</VKRadio>
            <VKRadio value="yearly">年付 ($99.99/年，节省 16%)</VKRadio>
            <VKRadio value="lifetime">终身会员 ($299.99)</VKRadio>
          </VKRadioGroup>
        </div>
        
        <div>
          <button type="submit" style="padding: 8px 16px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer;">
            提交
          </button>
        </div>
        
        <div>
          <p>当前选择：</p>
          <p>性别: {{ gender }}</p>
          <p>订阅: {{ subscription }}</p>
        </div>
      </form>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKRadio, VKRadioGroup },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h3>无样式单选框</h3>
        <VKRadio 
          unstyled 
          value="custom" 
          style="display: flex; gap: 8px; align-items: center; cursor: pointer;"
        >
          <span style="display: inline-block; width: 18px; height: 18px; border: 2px solid #42b883; border-radius: 50%; position: relative;">
            <span style="position: absolute; top: 4px; left: 4px; width: 10px; height: 10px; background: #42b883; border-radius: 50%; transform: scale(0.8);"></span>
          </span>
          <span style="color: #42b883; font-weight: bold;">自定义样式单选框</span>
        </VKRadio>
        
        <h3>使用 PT 自定义元素</h3>
        <VKRadioGroup name="pt-demo">
          <VKRadio 
            value="option1" 
            :pt="{
              root: { class: 'hover:bg-gray-100 p-2 rounded transition-colors' },
              input: { class: 'text-blue-500' },
              label: { class: 'font-bold' }
            }"
          >
            自定义悬停效果
          </VKRadio>
          
          <VKRadio 
            value="option2" 
            variant="success"
            :pt="{
              root: { style: 'background: rgba(66, 184, 131, 0.1); padding: 8px; border-radius: 8px;' }
            }"
          >
            带背景的单选框
          </VKRadio>
        </VKRadioGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义单选框的样式和行为。',
      },
    },
  },
}
