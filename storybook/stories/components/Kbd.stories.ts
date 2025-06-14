import type { StoryObj } from '@storybook/vue3-vite'
import { VKKbd } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Kbd',
  component: VKKbd,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
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
type Story = StoryObj<typeof VKKbd>

// 基础键盘按键
export const Default: Story = {
  render: (args) => ({
    components: { VKKbd },
    setup() {
      return { args }
    },
    template: '<VKKbd v-bind="args">Ctrl</VKKbd>',
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKKbd variant="default">Ctrl</VKKbd>
        <VKKbd variant="outline">Alt</VKKbd>
        <VKKbd variant="ghost">Shift</VKKbd>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <VKKbd size="xs">Tab</VKKbd>
        <VKKbd size="sm">Esc</VKKbd>
        <VKKbd size="md">Space</VKKbd>
        <VKKbd size="lg">Enter</VKKbd>
        <VKKbd size="xl">Shift</VKKbd>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKKbd disabled>Ctrl</VKKbd>
        <VKKbd variant="outline" disabled>Alt</VKKbd>
        <VKKbd variant="ghost" disabled>Shift</VKKbd>
      </div>
    `,
  }),
}

// 快捷键组合
export const KeyCombinations: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 4px; align-items: center;">
          <VKKbd>Ctrl</VKKbd>
          <span>+</span>
          <VKKbd>C</VKKbd>
        </div>
        
        <div style="display: flex; gap: 4px; align-items: center;">
          <VKKbd>Ctrl</VKKbd>
          <span>+</span>
          <VKKbd>Shift</VKKbd>
          <span>+</span>
          <VKKbd>Esc</VKKbd>
        </div>
        
        <div style="display: flex; gap: 4px; align-items: center;">
          <VKKbd>Alt</VKKbd>
          <span>+</span>
          <VKKbd>Tab</VKKbd>
        </div>
        
        <div style="display: flex; gap: 4px; align-items: center;">
          <VKKbd>Win</VKKbd>
          <span>+</span>
          <VKKbd>D</VKKbd>
        </div>
      </div>
    `,
  }),
}

// 特殊按键
export const SpecialKeys: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKKbd>↑</VKKbd>
        <VKKbd>↓</VKKbd>
        <VKKbd>←</VKKbd>
        <VKKbd>→</VKKbd>
        <VKKbd>⏎</VKKbd>
        <VKKbd>⌫</VKKbd>
        <VKKbd>⇥</VKKbd>
        <VKKbd>⇧</VKKbd>
        <VKKbd>⌘</VKKbd>
        <VKKbd>⌥</VKKbd>
        <VKKbd>⌃</VKKbd>
      </div>
    `,
  }),
}

// 在文本中使用
export const InText: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="line-height: 1.8;">
        <p>按下 <VKKbd>Ctrl</VKKbd> + <VKKbd>S</VKKbd> 保存文件。</p>
        <p>按下 <VKKbd>Alt</VKKbd> + <VKKbd>F4</VKKbd> 关闭窗口。</p>
        <p>按下 <VKKbd>Win</VKKbd> 键打开开始菜单。</p>
        <p>使用 <VKKbd>Tab</VKKbd> 键在表单字段之间切换。</p>
      </div>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKKbd },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h3>无样式按键</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKKbd unstyled style="padding: 4px 8px; background: linear-gradient(45deg, #42b883, #35495e); color: white; border-radius: 4px; font-weight: bold;">
            Ctrl
          </VKKbd>
          <VKKbd unstyled style="padding: 4px 8px; background: #1a1a1a; color: #ff6b6b; border: 1px solid #ff6b6b; border-radius: 4px;">
            S
          </VKKbd>
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKKbd 
            :pt="{
              root: { class: 'shadow-lg hover:scale-105 transition-all' }
            }"
          >
            Ctrl
          </VKKbd>
          
          <VKKbd 
            variant="outline"
            :pt="{
              root: { style: 'border-color: #42b883; color: #42b883;' }
            }"
          >
            S
          </VKKbd>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义键盘按键的样式和行为。',
      },
    },
  },
}
