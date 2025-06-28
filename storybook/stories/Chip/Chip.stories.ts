import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Chip } from '@versakit/vue'
import '@versakit/vue/style'
import ChipDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Chip> = {
  title: '组件/Chip 标签',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '标签选中状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectable: {
      control: 'boolean',
      description: '是否可选择',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      description: '关闭时的回调函数',
      table: {
        type: { summary: 'function' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'dot'],
      description: '标签变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      description: '标签颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '标签尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '标签圆角',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    avatar: {
      description: '头像内容',
      table: {
        type: { summary: 'any' },
      },
    },
    startContent: {
      description: '起始内容',
      table: {
        type: { summary: 'any' },
      },
    },
    endContent: {
      description: '结束内容',
      table: {
        type: { summary: 'any' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pt: {
      control: 'object',
      description: '自定义样式类名',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

// 基础示例
export const Basic: Story = {
  args: {
    default: 'Basic Chip',
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">基础标签</Chip>`,
  }),
}

// 不同变体
export const Variants: Story = {
  args: {
    variant: 'bordered',
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">带边框标签</Chip>`,
  }),
}

// 不同颜色
export const Colors: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">主色标签</Chip>`,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">大尺寸标签</Chip>`,
  }),
}

// 不同圆角
export const Radius: Story = {
  args: {
    radius: 'full',
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">全圆角标签</Chip>`,
  }),
}

// 可选择的标签
export const Selectable: Story = {
  args: {
    selectable: true,
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">可选择标签</Chip>`,
  }),
}

// 可关闭的标签
export const Closable: Story = {
  args: {
    closable: true,
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">可关闭标签</Chip>`,
  }),
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">禁用标签</Chip>`,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
    },
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">自定义样式标签</Chip>`,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full inline-flex items-center',
      content: 'mx-1',
    },
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args }
    },
    template: `<Chip v-bind="args">无样式模式标签</Chip>`,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { ChipDemo },
    template: '<ChipDemo />',
  }),
}
