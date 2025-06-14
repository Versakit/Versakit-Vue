import type { StoryObj } from '@storybook/vue3-vite'
import { VKSwitch } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Switch',
  component: VKSwitch,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否选中',
      defaultValue: false,
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '开关尺寸',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '开关样式变体',
      defaultValue: 'primary',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
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
type Story = StoryObj<typeof VKSwitch>

// 基础开关
export const Default: Story = {
  render: (args) => ({
    components: { VKSwitch },
    setup() {
      return { args }
    },
    template: '<VKSwitch v-bind="args">默认开关</VKSwitch>',
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch variant="primary" modelValue>主要开关</VKSwitch>
        <VKSwitch variant="success" modelValue>成功开关</VKSwitch>
        <VKSwitch variant="warning" modelValue>警告开关</VKSwitch>
        <VKSwitch variant="info" modelValue>信息开关</VKSwitch>
        <VKSwitch variant="error" modelValue>错误开关</VKSwitch>
        <VKSwitch variant="default" modelValue>默认开关</VKSwitch>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch size="sm" modelValue>小型开关</VKSwitch>
        <VKSwitch size="md" modelValue>中型开关</VKSwitch>
        <VKSwitch size="lg" modelValue>大型开关</VKSwitch>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch disabled>禁用状态（关）</VKSwitch>
        <VKSwitch disabled modelValue>禁用状态（开）</VKSwitch>
        <VKSwitch variant="success" disabled>禁用成功开关（关）</VKSwitch>
        <VKSwitch variant="success" disabled modelValue>禁用成功开关（开）</VKSwitch>
      </div>
    `,
  }),
}

// 带标签的开关
export const WithLabel: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch>带标签的开关</VKSwitch>
        <VKSwitch modelValue>开启状态</VKSwitch>
        <VKSwitch variant="success">绿色开关</VKSwitch>
        <VKSwitch variant="error" modelValue>红色开关</VKSwitch>
      </div>
    `,
  }),
}

// 无障碍支持
export const Accessibility: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch ariaLabel="开启通知">开启通知</VKSwitch>
        <VKSwitch ariaLabel="开启定位服务" modelValue>开启定位服务</VKSwitch>
      </div>
    `,
  }),
}

// 暗黑模式演示（需要手动切换暗黑模式查看）
export const DarkMode: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKSwitch variant="primary" modelValue>主要开关</VKSwitch>
        <VKSwitch variant="success" modelValue>成功开关</VKSwitch>
        <VKSwitch variant="default" modelValue>默认开关</VKSwitch>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '暗黑模式下的开关样式，需要在 Storybook 中启用暗黑模式查看。',
      },
    },
  },
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKSwitch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3>无样式开关</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKSwitch 
            unstyled 
            style="display: inline-flex; align-items: center; gap: 8px;"
            modelValue
          >
            <span style="position: relative; display: inline-block; width: 50px; height: 26px; background: linear-gradient(45deg, #FF6B6B, #FFE66D); border-radius: 13px;">
              <span style="position: absolute; left: 26px; top: 3px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s;"></span>
            </span>
            自定义渐变开关
          </VKSwitch>
          
          <VKSwitch 
            unstyled 
            style="display: inline-flex; align-items: center; gap: 8px;"
          >
            <span style="position: relative; display: inline-block; width: 50px; height: 26px; background: #e0e0e0; border-radius: 13px;">
              <span style="position: absolute; left: 3px; top: 3px; width: 20px; height: 20px; background-color: white; border-radius: 50%; transition: all 0.3s;"></span>
            </span>
            自定义灰色开关
          </VKSwitch>
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKSwitch 
            modelValue
            :pt="{
              root: { class: 'hover:opacity-80 transition-opacity' },
              thumb: { style: 'box-shadow: 0 2px 4px rgba(0,0,0,0.2);' }
            }"
          >
            带阴影的开关滑块
          </VKSwitch>
          
          <VKSwitch 
            variant="success"
            modelValue
            :pt="{
              label: { class: 'font-bold text-green-600' }
            }"
          >
            自定义标签样式
          </VKSwitch>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义开关的样式和行为。',
      },
    },
  },
}
