import type { StoryObj } from '@storybook/vue3-vite'
import { VKPinInput } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/PinInput',
  component: VKPinInput,
  argTypes: {
    length: {
      control: 'number',
      description: '输入框数量',
      defaultValue: 4,
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '输入框尺寸',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underlined'],
      description: '输入框变体',
      defaultValue: 'outline',
    },
    modelValue: {
      control: 'text',
      description: '当前值',
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
    type: {
      control: 'select',
      options: ['text', 'number', 'password'],
      description: '输入类型',
      defaultValue: 'text',
    },
    mask: {
      control: 'boolean',
      description: '是否显示掩码',
      defaultValue: false,
    },
    maskChar: {
      control: 'text',
      description: '掩码字符',
      defaultValue: '•',
    },
    autofocus: {
      control: 'boolean',
      description: '是否自动获取焦点',
      defaultValue: false,
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      description: '输入框状态',
      defaultValue: 'default',
    },
    separator: {
      control: 'text',
      description: '分隔符',
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
type Story = StoryObj<typeof VKPinInput>

// 基础验证码输入
export const Default: Story = {
  render: (args) => ({
    components: { VKPinInput },
    setup() {
      return { args }
    },
    template: '<VKPinInput v-bind="args" />',
  }),
}

// 不同长度
export const DifferentLengths: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>4位验证码（默认）</div>
        <VKPinInput length="4" />
        
        <div>6位验证码</div>
        <VKPinInput length="6" />
        
        <div>8位验证码</div>
        <VKPinInput length="8" />
      </div>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>轮廓变体</div>
        <VKPinInput variant="outline" />
        
        <div>填充变体</div>
        <VKPinInput variant="filled" />
        
        <div>下划线变体</div>
        <VKPinInput variant="underlined" />
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>超小尺寸</div>
        <VKPinInput size="xs" />
        
        <div>小尺寸</div>
        <VKPinInput size="sm" />
        
        <div>中等尺寸（默认）</div>
        <VKPinInput size="md" />
        
        <div>大尺寸</div>
        <VKPinInput size="lg" />
        
        <div>超大尺寸</div>
        <VKPinInput size="xl" />
      </div>
    `,
  }),
}

// 禁用和只读
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>正常输入框</div>
        <VKPinInput />
        
        <div>禁用输入框</div>
        <VKPinInput disabled />
        
        <div>只读输入框</div>
        <VKPinInput readonly modelValue="1234" />
      </div>
    `,
  }),
}

// 不同状态
export const Statuses: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>默认状态</div>
        <VKPinInput status="default" />
        
        <div>成功状态</div>
        <VKPinInput status="success" modelValue="1234" />
        
        <div>警告状态</div>
        <VKPinInput status="warning" modelValue="5678" />
        
        <div>错误状态</div>
        <VKPinInput status="error" modelValue="9012" />
      </div>
    `,
  }),
}

// 不同类型
export const Types: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>文本类型</div>
        <VKPinInput type="text" />
        
        <div>数字类型</div>
        <VKPinInput type="number" />
        
        <div>密码类型</div>
        <VKPinInput type="password" />
      </div>
    `,
  }),
}

// 掩码显示
export const Masked: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>无掩码（默认）</div>
        <VKPinInput modelValue="1234" />
        
        <div>默认掩码字符</div>
        <VKPinInput mask modelValue="1234" />
        
        <div>自定义掩码字符</div>
        <VKPinInput mask maskChar="*" modelValue="1234" />
        
        <div>密码类型 + 掩码</div>
        <VKPinInput type="password" mask modelValue="1234" />
      </div>
    `,
  }),
}

// 带分隔符
export const WithSeparator: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>连字符分隔</div>
        <VKPinInput separator="-" />
        
        <div>点号分隔</div>
        <VKPinInput separator="." />
        
        <div>空格分隔</div>
        <VKPinInput separator=" " />
        
        <div>自定义分隔符</div>
        <VKPinInput separator="/" />
      </div>
    `,
  }),
}

// 无样式和PT示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKPinInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3>无样式输入框</h3>
        <VKPinInput 
          unstyled 
          style="padding: 10px; background-color: #f5f5f5; border-radius: 8px;" 
        />
        
        <h3>使用 PT 自定义元素</h3>
        <VKPinInput 
          :pt="{
            root: { style: 'background: linear-gradient(to right, #f6d365, #fda085); padding: 20px; border-radius: 10px;' },
            input: { style: 'border-radius: 50%; aspect-ratio: 1/1; border: none; background-color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);' }
          }"
        />
        
        <VKPinInput 
          separator="|"
          :pt="{
            separator: { style: 'color: blue; font-weight: bold; font-size: 20px;' }
          }"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义PIN输入框的样式和行为。',
      },
    },
  },
}
