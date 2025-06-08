import type { Meta, StoryObj } from '@storybook/vue3'
import { VKButton } from '@versakit/vue'
import '@versakit/vue/style'

const meta: Meta<typeof VKButton> = {
  title: 'Components/Button',
  component: VKButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error'],
      description: '按钮样式变体',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按钮尺寸',
      defaultValue: 'md',
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

// 线框按钮
export const Outline: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: '<VKButton v-bind="args" variant="outline">线框按钮</VKButton>',
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <VKButton size="sm">小按钮</VKButton>
        <VKButton size="md">中按钮</VKButton>
        <VKButton size="lg">大按钮</VKButton>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: '<VKButton v-bind="args" disabled>禁用按钮</VKButton>',
  }),
}

// 带图标的按钮
export const WithIcon: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: `
      <VKButton v-bind="args">
        <span style="margin-right: 8px;">&#10003;</span>
        带图标按钮
      </VKButton>
    `,
  }),
}

// 加载状态
export const Loading: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: `
      <VKButton v-bind="args" disabled>
        <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 50%; border-top-color: transparent; margin-right: 8px; animation: spin 1s linear infinite;"></span>
        加载中...
      </VKButton>
    `,
  }),
}

// 全宽按钮
export const FullWidth: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template:
      '<VKButton v-bind="args" style="width: 100%;">全宽按钮</VKButton>',
  }),
}
