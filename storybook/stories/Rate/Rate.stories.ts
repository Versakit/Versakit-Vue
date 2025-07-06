import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Rate } from '@versakit/vue'
import '@versakit/vue/style'
import RateDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Rate> = {
  title: '组件/Rate 评分',
  component: Rate,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: '评分值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: '最大评分值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    allowHalf: {
      control: 'boolean',
      description: '是否允许半选',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: '是否为只读状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    color: {
      control: 'select',
      options: ['yellow', 'blue', 'green', 'red', 'purple'],
      description: '评分图标的颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yellow' },
      },
    },
    voidColor: {
      control: 'text',
      description: '未选中时的颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '评分图标的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    character: {
      control: 'text',
      description: '自定义字符',
      table: {
        type: { summary: 'string' },
      },
    },
    showScore: {
      control: 'boolean',
      description: '是否显示当前分数',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: '是否禁用默认样式',
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
type Story = StoryObj<typeof Rate>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: 3,
  },
}

// 最大值
export const MaxValue: Story = {
  args: {
    modelValue: 3,
    max: 10,
  },
}

// 允许半选
export const AllowHalf: Story = {
  args: {
    modelValue: 3.5,
    allowHalf: true,
  },
}

// 只读状态
export const Readonly: Story = {
  args: {
    modelValue: 4,
    readonly: true,
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: 3,
    disabled: true,
  },
}

// 不同颜色
export const Colors: Story = {
  args: {
    modelValue: 3,
    color: 'blue',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    modelValue: 3,
    size: 'large',
  },
}

// 自定义字符
export const CustomCharacter: Story = {
  args: {
    modelValue: 3,
    character: '♥',
  },
}

// 显示分数
export const ShowScore: Story = {
  args: {
    modelValue: 3,
    showScore: true,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: 3,
    pt: {
      container: 'flex gap-2 items-center',
      item: 'cursor-pointer',
      fullStar: 'text-purple-500',
      voidStar: 'text-purple-200',
      score: 'ml-2 text-purple-700 font-bold',
    },
    showScore: true,
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: 3,
    unstyled: true,
    pt: {
      container: 'flex gap-3 items-center',
      item: 'cursor-pointer transition-transform hover:scale-110',
      fullStar: 'text-gradient-to-r from-pink-500 to-purple-500 text-2xl',
      voidStar: 'text-gray-300 text-2xl',
      score:
        'ml-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500',
    },
    showScore: true,
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { RateDemo },
    template: '<RateDemo />',
  }),
}
