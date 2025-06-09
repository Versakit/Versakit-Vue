import type { StoryObj } from '@storybook/vue3'
import { VKAlert } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/Alert',
  component: VKAlert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '提示类型',
      defaultValue: 'default',
    },
    title: {
      control: 'text',
      description: '标题',
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标',
      defaultValue: false,
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
      defaultValue: false,
    },
    bordered: {
      control: 'boolean',
      description: '是否显示边框',
      defaultValue: false,
    },
    shadow: {
      control: 'boolean',
      description: '是否显示阴影',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      description: '是否占满宽度',
      defaultValue: true,
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
type Story = StoryObj<typeof VKAlert>

// 基础提示
export const Default: Story = {
  render: (args) => ({
    components: { VKAlert },
    setup() {
      return { args }
    },
    template: `
      <VKAlert v-bind="args">
        这是一条基础提示信息
      </VKAlert>
    `,
  }),
}

// 不同类型
export const Variants: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary">这是一条主要提示信息</VKAlert>
        <VKAlert variant="success">这是一条成功提示信息</VKAlert>
        <VKAlert variant="warning">这是一条警告提示信息</VKAlert>
        <VKAlert variant="info">这是一条信息提示信息</VKAlert>
        <VKAlert variant="error">这是一条错误提示信息</VKAlert>
        <VKAlert variant="default">这是一条默认提示信息</VKAlert>
      </div>
    `,
  }),
}

// 带标题
export const WithTitle: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" title="主要提示">这是一条主要提示信息内容</VKAlert>
        <VKAlert variant="success" title="成功提示">这是一条成功提示信息内容</VKAlert>
        <VKAlert variant="warning" title="警告提示">这是一条警告提示信息内容</VKAlert>
        <VKAlert variant="info" title="信息提示">这是一条信息提示信息内容</VKAlert>
        <VKAlert variant="error" title="错误提示">这是一条错误提示信息内容</VKAlert>
      </div>
    `,
  }),
}

// 带图标
export const WithIcon: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" showIcon>这是一条带图标的主要提示信息</VKAlert>
        <VKAlert variant="success" showIcon>这是一条带图标的成功提示信息</VKAlert>
        <VKAlert variant="warning" showIcon>这是一条带图标的警告提示信息</VKAlert>
        <VKAlert variant="info" showIcon>这是一条带图标的信息提示信息</VKAlert>
        <VKAlert variant="error" showIcon>这是一条带图标的错误提示信息</VKAlert>
      </div>
    `,
  }),
}

// 带标题和图标
export const WithTitleAndIcon: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" title="主要提示" showIcon>这是一条带标题和图标的主要提示信息</VKAlert>
        <VKAlert variant="success" title="成功提示" showIcon>这是一条带标题和图标的成功提示信息</VKAlert>
        <VKAlert variant="warning" title="警告提示" showIcon>这是一条带标题和图标的警告提示信息</VKAlert>
        <VKAlert variant="info" title="信息提示" showIcon>这是一条带标题和图标的信息提示信息</VKAlert>
        <VKAlert variant="error" title="错误提示" showIcon>这是一条带标题和图标的错误提示信息</VKAlert>
      </div>
    `,
  }),
}

// 可关闭
export const Closable: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" closable>这是一条可关闭的主要提示信息</VKAlert>
        <VKAlert variant="success" closable>这是一条可关闭的成功提示信息</VKAlert>
        <VKAlert variant="warning" closable>这是一条可关闭的警告提示信息</VKAlert>
        <VKAlert variant="info" closable>这是一条可关闭的信息提示信息</VKAlert>
        <VKAlert variant="error" closable>这是一条可关闭的错误提示信息</VKAlert>
      </div>
    `,
  }),
}

// 带边框
export const Bordered: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" bordered>这是一条带边框的主要提示信息</VKAlert>
        <VKAlert variant="success" bordered>这是一条带边框的成功提示信息</VKAlert>
        <VKAlert variant="warning" bordered>这是一条带边框的警告提示信息</VKAlert>
        <VKAlert variant="info" bordered>这是一条带边框的信息提示信息</VKAlert>
        <VKAlert variant="error" bordered>这是一条带边框的错误提示信息</VKAlert>
      </div>
    `,
  }),
}

// 带阴影
export const WithShadow: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert variant="primary" shadow>这是一条带阴影的主要提示信息</VKAlert>
        <VKAlert variant="success" shadow>这是一条带阴影的成功提示信息</VKAlert>
        <VKAlert variant="warning" shadow>这是一条带阴影的警告提示信息</VKAlert>
        <VKAlert variant="info" shadow>这是一条带阴影的信息提示信息</VKAlert>
        <VKAlert variant="error" shadow>这是一条带阴影的错误提示信息</VKAlert>
      </div>
    `,
  }),
}

// 组合样式
export const Combined: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKAlert 
          variant="primary" 
          title="完整提示" 
          showIcon 
          closable 
          bordered 
          shadow
        >
          这是一条带有完整功能的提示信息，包括标题、图标、关闭按钮、边框和阴影效果。
        </VKAlert>
      </div>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3>无样式提示</h3>
        <VKAlert
          unstyled
          style="background: linear-gradient(135deg, #f5f7fa, #c3cfe2); padding: 20px; border-radius: 12px; border-left: 5px solid #3b82f6; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
          title="自定义样式提示"
          showIcon
        >
          这是一个使用无样式模式的提示，可以完全自定义样式。
        </VKAlert>

        <h3>使用 PT 自定义元素</h3>
        <VKAlert
          variant="success"
          title="自定义标题和图标"
          showIcon
          :pt="{
            root: { class: 'rounded-xl overflow-hidden border-l-4 border-green-500' },
            title: { style: 'font-size: 1.2rem; color: #10b981; font-weight: bold;' },
            icon: { class: 'text-green-500' }
          }"
        >
          使用 Pass Through 属性自定义提示组件的内部元素。
        </VKAlert>

        <VKAlert
          variant="warning"
          title="自定义关闭按钮"
          closable
          :pt="{
            closeButton: { style: 'background-color: #fde68a; border-radius: 50%; width: 24px; height: 24px;' }
          }"
        >
          此提示展示了如何自定义关闭按钮的样式。
        </VKAlert>

        <h3>使用插槽自定义内容</h3>
        <VKAlert
          variant="info"
          :pt="{
            content: { style: 'display: flex; justify-content: space-between; align-items: center;' }
          }"
        >
          <template #title>
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>自定义标题插槽</span>
            </div>
          </template>
          
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>提示内容</span>
            <button style="background: #3b82f6; color: white; border: none; padding: 4px 12px; border-radius: 4px;">
              操作按钮
            </button>
          </div>
        </VKAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义提示组件的样式和行为。',
      },
    },
  },
}
