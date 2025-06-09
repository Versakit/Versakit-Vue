import type { StoryObj } from '@storybook/vue3'
import { VKBadge } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/Badge',
  component: VKBadge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '徽章颜色变体',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg'],
      description: '徽章尺寸',
      defaultValue: 'md',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: '徽章位置',
      defaultValue: 'top-right',
    },
    content: {
      control: 'text',
      description: '徽章内容',
    },
    dot: {
      control: 'boolean',
      description: '是否显示为圆点',
      defaultValue: false,
    },
    max: {
      control: 'number',
      description: '最大值，超过后显示 {max}+',
      defaultValue: 99,
    },
    hidden: {
      control: 'boolean',
      description: '是否隐藏徽章',
      defaultValue: false,
    },
    standalone: {
      control: 'boolean',
      description: '是否显示为独立徽章，不附加到其他元素上',
      defaultValue: false,
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
type Story = StoryObj<typeof VKBadge>

// 基础徽章
export const Default: Story = {
  render: (args) => ({
    components: { VKBadge },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px;">
        <VKBadge v-bind="args" content="5">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 不同颜色变体
export const Variants: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 24px; padding: 24px;">
        <VKBadge content="5" variant="primary">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" variant="success">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" variant="warning">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" variant="error">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" variant="info">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" variant="default">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 24px; padding: 24px;">
        <VKBadge content="5" size="xs">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" size="sm">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" size="md">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" size="lg">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 不同位置
export const Positions: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 24px; padding: 24px;">
        <VKBadge content="5" position="top-right">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" position="top-left">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" position="bottom-right">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="5" position="bottom-left">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 圆点模式
export const Dot: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 24px; padding: 24px;">
        <VKBadge dot variant="primary">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge dot variant="success">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge dot variant="warning">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge dot variant="error">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 独立徽章
export const Standalone: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 12px; padding: 24px;">
        <VKBadge content="99+" standalone variant="primary" />
        <VKBadge content="50" standalone variant="success" />
        <VKBadge content="新" standalone variant="warning" />
        <VKBadge content="热" standalone variant="error" />
      </div>
    `,
  }),
}

// 最大值
export const MaxValue: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; gap: 24px; padding: 24px;">
        <VKBadge content="150" max="99">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="80" max="99">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
        
        <VKBadge content="999" max="999">
          <div style="width: 40px; height: 40px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </VKBadge>
      </div>
    `,
  }),
}

// 添加无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h3>无样式徽章</h3>
        <div style="display: flex; gap: 20px; align-items: center;">
          <VKBadge 
            unstyled 
            content="New" 
            style="background: linear-gradient(45deg, #2563EB, #7C3AED); color: white; padding: 4px 12px; border-radius: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
            standalone
          />
          
          <VKBadge unstyled>
            <div style="position: relative; width: 50px; height: 50px; background-color: #9ca3af; border-radius: 6px;">
              <span style="position: absolute; top: -6px; right: -6px; background-color: #ef4444; width: 18px; height: 18px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; font-size: 0.75rem; font-weight: bold;">5</span>
            </div>
          </VKBadge>
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; gap: 20px; align-items: center;">
          <VKBadge 
            content="42" 
            variant="success"
            standalone
            :pt="{
              root: { class: 'rounded-full hover:scale-110 transition-transform', style: 'box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);' }
            }"
          />
          
          <VKBadge 
            :pt="{
              badge: { class: 'animate-pulse', style: 'border: 2px solid white;' }
            }"
          >
            <div style="width: 50px; height: 50px; background-color: #4b5563; border-radius: 6px; display: flex; justify-content: center; align-items: center; color: white;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
          </VKBadge>
        </div>
        
        <h3>自定义内容</h3>
        <VKBadge standalone :pt="{ content: { style: 'padding: 0;' } }">
          <template #content>
            <span style="display: flex; align-items: center; gap: 4px; background-color: #2563EB; color: white; padding: 4px 8px; border-radius: 4px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              已认证
            </span>
          </template>
        </VKBadge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义徽章组件的样式和行为。',
      },
    },
  },
}
