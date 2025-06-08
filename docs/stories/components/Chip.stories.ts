import type { Meta, StoryObj } from '@storybook/vue3'
import { VKChip } from '@versakit/vue'
import '@versakit/vue/style'

const meta: Meta<typeof VKChip> = {
  title: 'Components/Chip',
  component: VKChip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '标签变体样式',
      defaultValue: 'default',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '标签尺寸',
      defaultValue: 'md',
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
      defaultValue: false,
    },
    outlined: {
      control: 'boolean',
      description: '是否显示边框',
      defaultValue: false,
    },
    rounded: {
      control: 'boolean',
      description: '是否圆角',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    icon: {
      control: 'boolean',
      description: '是否显示图标',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKChip>

// 基础标签
export const Default: Story = {
  render: (args) => ({
    components: { VKChip },
    setup() {
      return { args }
    },
    template: `
      <VKChip v-bind="args">基础标签</VKChip>
    `,
  }),
}

// 不同颜色变体
export const Variants: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary">主要标签</VKChip>
        <VKChip variant="success">成功标签</VKChip>
        <VKChip variant="warning">警告标签</VKChip>
        <VKChip variant="info">信息标签</VKChip>
        <VKChip variant="error">错误标签</VKChip>
        <VKChip variant="default">默认标签</VKChip>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; padding: 16px;">
        <VKChip size="sm">小标签</VKChip>
        <VKChip size="md">中标签</VKChip>
        <VKChip size="lg">大标签</VKChip>
      </div>
    `,
  }),
}

// 轮廓样式
export const Outlined: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary" outlined>主要标签</VKChip>
        <VKChip variant="success" outlined>成功标签</VKChip>
        <VKChip variant="warning" outlined>警告标签</VKChip>
        <VKChip variant="info" outlined>信息标签</VKChip>
        <VKChip variant="error" outlined>错误标签</VKChip>
        <VKChip variant="default" outlined>默认标签</VKChip>
      </div>
    `,
  }),
}

// 圆角样式
export const Rounded: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary" rounded>主要标签</VKChip>
        <VKChip variant="success" rounded>成功标签</VKChip>
        <VKChip variant="warning" rounded>警告标签</VKChip>
        <VKChip variant="info" rounded>信息标签</VKChip>
        <VKChip variant="error" rounded>错误标签</VKChip>
        <VKChip variant="default" rounded>默认标签</VKChip>
      </div>
    `,
  }),
}

// 可关闭
export const Closable: Story = {
  render: () => ({
    components: { VKChip },
    setup() {
      const handleClose = () => {
        console.log('关闭按钮被点击')
      }

      return { handleClose }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary" closable @close="handleClose">可关闭标签</VKChip>
        <VKChip variant="success" closable @close="handleClose">可关闭标签</VKChip>
        <VKChip variant="warning" closable @close="handleClose">可关闭标签</VKChip>
        <VKChip variant="info" closable @close="handleClose">可关闭标签</VKChip>
        <VKChip variant="error" closable @close="handleClose">可关闭标签</VKChip>
      </div>
    `,
  }),
}

// 带图标
export const WithIcon: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary" icon>主要标签</VKChip>
        <VKChip variant="success" icon>成功标签</VKChip>
        <VKChip variant="warning" icon>警告标签</VKChip>
        <VKChip variant="info" icon>信息标签</VKChip>
        <VKChip variant="error" icon>错误标签</VKChip>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKChip },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip variant="primary" disabled>禁用标签</VKChip>
        <VKChip variant="success" disabled closable>禁用标签</VKChip>
        <VKChip variant="warning" disabled icon>禁用标签</VKChip>
        <VKChip variant="info" disabled outlined>禁用标签</VKChip>
        <VKChip variant="error" disabled rounded>禁用标签</VKChip>
      </div>
    `,
  }),
}

// 组合样式
export const Combined: Story = {
  render: () => ({
    components: { VKChip },
    setup() {
      const handleClose = () => {
        console.log('关闭按钮被点击')
      }

      return { handleClose }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <VKChip 
          variant="primary" 
          rounded 
          outlined 
          closable 
          icon
          @close="handleClose"
        >
          组合样式标签
        </VKChip>
        
        <VKChip 
          variant="success" 
          size="lg" 
          closable 
          icon
          @close="handleClose"
        >
          大尺寸标签
        </VKChip>
        
        <VKChip 
          variant="warning" 
          size="sm" 
          rounded 
          outlined
        >
          小标签
        </VKChip>
      </div>
    `,
  }),
}
