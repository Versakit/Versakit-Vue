import type { Meta, StoryObj } from '@storybook/vue3'
import { VKBadge } from '@versakit/vue'
import '@versakit/vue/style'

const meta: Meta<typeof VKBadge> = {
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
      control: 'radio',
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
      description: '是否显示为独立徽章',
      defaultValue: false,
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
