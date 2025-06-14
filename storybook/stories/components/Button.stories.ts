import type { StoryObj } from '@storybook/vue3-vite'
import { VKButton } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Button',
  component: VKButton,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'success',
        'warning',
        'info',
        'error',
        'default',
        'text',
        'outline',
        'ghost',
      ],
      description: '按钮样式变体',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按钮尺寸',
      defaultValue: 'md',
    },
    shape: {
      control: 'radio',
      options: ['default', 'circle', 'round'],
      description: '按钮形状',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
      defaultValue: false,
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      description: '按钮类型',
      defaultValue: 'button',
    },
    ariaLabel: {
      control: 'text',
      description: '无障碍标签',
    },
    block: {
      control: 'boolean',
      description: '是否为块级按钮',
      defaultValue: false,
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '图标位置',
      defaultValue: 'left',
    },
    color: {
      control: 'color',
      description: '自定义颜色',
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
type Story = StoryObj<typeof VKButton>

// 基础按钮
export const Default: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: '<VKButton v-bind="args">默认按钮</VKButton>',
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton variant="primary">主要按钮</VKButton>
        <VKButton variant="success">成功按钮</VKButton>
        <VKButton variant="warning">警告按钮</VKButton>
        <VKButton variant="info">信息按钮</VKButton>
        <VKButton variant="error">错误按钮</VKButton>
        <VKButton variant="default">默认按钮</VKButton>
      </div>
    `,
  }),
}

// 扁平和轮廓按钮
export const FlatAndOutline: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton variant="text">文本按钮</VKButton>
        <VKButton variant="outline">轮廓按钮</VKButton>
        <VKButton variant="ghost">幽灵按钮</VKButton>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <VKButton size="xs">超小按钮</VKButton>
        <VKButton size="sm">小按钮</VKButton>
        <VKButton size="md">中按钮</VKButton>
        <VKButton size="lg">大按钮</VKButton>
        <VKButton size="xl">超大按钮</VKButton>
      </div>
    `,
  }),
}

// 不同形状
export const Shapes: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <VKButton shape="default">默认形状</VKButton>
        <VKButton shape="round">圆角按钮</VKButton>
        <VKButton shape="circle">
          <span style="display: inline-flex; width: 24px; height: 24px; align-items: center; justify-content: center;">+</span>
        </VKButton>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton disabled>禁用按钮</VKButton>
        <VKButton variant="success" disabled>禁用成功按钮</VKButton>
        <VKButton variant="warning" disabled>禁用警告按钮</VKButton>
        <VKButton variant="text" disabled>禁用文本按钮</VKButton>
        <VKButton variant="outline" disabled>禁用轮廓按钮</VKButton>
      </div>
    `,
  }),
}

// 加载状态
export const Loading: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton loading>加载中</VKButton>
        <VKButton variant="success" loading>加载中</VKButton>
        <VKButton variant="warning" loading>加载中</VKButton>
        <VKButton variant="outline" loading>加载中</VKButton>
      </div>
    `,
  }),
}

// 带图标的按钮
export const WithIcon: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-direction: column;">
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKButton>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </template>
            左侧图标
          </VKButton>
          
          <VKButton iconPosition="right">
            右侧图标
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </template>
          </VKButton>
        </div>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKButton variant="outline">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </template>
            稍后
          </VKButton>
          
          <VKButton variant="error" iconPosition="right">
            删除
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </template>
          </VKButton>
        </div>
      </div>
    `,
  }),
}

// 块级按钮
export const BlockButton: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <VKButton block>块级按钮</VKButton>
        <VKButton block variant="success">块级成功按钮</VKButton>
        <VKButton block variant="outline">块级轮廓按钮</VKButton>
      </div>
    `,
  }),
}

// 无障碍支持
export const Accessibility: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton ariaLabel="提交表单">提交</VKButton>
        <VKButton shape="circle" ariaLabel="添加新项目">
          <span style="display: inline-flex; width: 24px; height: 24px; align-items: center; justify-content: center;">+</span>
        </VKButton>
      </div>
    `,
  }),
}

// 暗黑模式演示（需要手动切换暗黑模式查看）
export const DarkMode: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton variant="primary">主要按钮</VKButton>
        <VKButton variant="success">成功按钮</VKButton>
        <VKButton variant="default">默认按钮</VKButton>
        <VKButton variant="outline">轮廓按钮</VKButton>
        <VKButton variant="text">文本按钮</VKButton>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '暗黑模式下的按钮样式，需要在 Storybook 中启用暗黑模式查看。',
      },
    },
  },
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKButton },
    template: `
      <div style="display: flex; gap: 12px; flex-direction: column;">
        <h3>无样式按钮</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKButton unstyled style="padding: 10px 20px; background: linear-gradient(45deg, #FF6B6B, #FFE66D); border: none; border-radius: 10px; color: white; font-weight: bold;">
            自定义样式按钮
          </VKButton>
          <VKButton unstyled style="padding: 10px 20px; background: #1a1a1a; color: #42b883; border: 2px solid #42b883; border-radius: 4px;">
            Vue 风格按钮
          </VKButton>
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKButton 
            :pt="{
              root: { style: 'box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);', class: 'custom-button' },
              content: { style: 'font-weight: bold;' }
            }"
          >
            带阴影的按钮
          </VKButton>
          
          <VKButton 
            variant="primary"
            :pt="{
              root: { class: 'hover:scale-105 transition-transform' }
            }"
          >
            悬停缩放按钮
          </VKButton>
          
          <VKButton 
            :pt="{
              icon: { class: 'text-green-500' }
            }"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </template>
            定制图标颜色
          </VKButton>
        </div>
        
        <h3>组合使用插槽和 PT</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <VKButton
            variant="success"
            :pt="{
              root: { style: 'border-radius: 999px; overflow: hidden;' }
            }"
          >
            <template #icon>
              <div style="display: flex; align-items: center;">
                <img src="https://vue.dev/logo.svg" alt="Vue Logo" style="width: 18px; height: 18px; margin-right: 4px;" />
              </div>
            </template>
            自定义图标
          </VKButton>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义按钮的样式和行为。',
      },
    },
  },
}
