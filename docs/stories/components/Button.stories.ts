import type { Meta, StoryObj } from '@storybook/vue3'
import { VKButton } from '@versakit/vue'
import '@versakit/vue/style'

const meta: Meta<typeof VKButton> = {
  title: 'Components/Button',
  component: VKButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'destructive'],
      description: '按钮样式变体',
      defaultValue: 'default',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '按钮尺寸',
      defaultValue: 'md',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
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

// 幽灵按钮
export const Ghost: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template: '<VKButton v-bind="args" variant="ghost">幽灵按钮</VKButton>',
  }),
}

// 危险按钮
export const Destructive: Story = {
  render: (args) => ({
    components: { VKButton },
    setup() {
      return { args }
    },
    template:
      '<VKButton v-bind="args" variant="destructive">危险按钮</VKButton>',
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
