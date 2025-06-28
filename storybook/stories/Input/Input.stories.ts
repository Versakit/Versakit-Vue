import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Input } from '@versakit/vue'
import '@versakit/vue/style'
import InputDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Input> = {
  title: '组件/Input 输入框',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '输入框的值',
      table: {
        type: { summary: 'string | number' },
      },
    },
    placeholder: {
      control: 'text',
      description: '占位符',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      description: '输入框类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
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
    readonly: {
      control: 'boolean',
      description: '是否只读',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '输入框尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    prefixIcon: {
      control: 'text',
      description: '前缀图标',
      table: {
        type: { summary: 'string' },
      },
    },
    suffixIcon: {
      control: 'text',
      description: '后缀图标',
      table: {
        type: { summary: 'string' },
      },
    },
    clearable: {
      control: 'boolean',
      description: '是否显示清除按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxlength: {
      control: 'number',
      description: '最大长度',
      table: {
        type: { summary: 'number' },
      },
    },
    showCount: {
      control: 'boolean',
      description: '是否显示输入字数统计',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autofocus: {
      control: 'boolean',
      description: '自动获取焦点',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    status: {
      control: 'select',
      options: ['error', 'warning', 'success'],
      description: '输入框状态',
      table: {
        type: { summary: 'string' },
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
type Story = StoryObj<typeof Input>

// 基础示例
export const Basic: Story = {
  args: {
    placeholder: '请输入内容',
  },
}

// 不同类型
export const Types: Story = {
  args: {
    type: 'password',
    placeholder: '请输入密码',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
  },
}

// 只读状态
export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: '只读内容',
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    size: 'large',
    placeholder: '大尺寸输入框',
  },
}

// 前缀和后缀
export const PrefixSuffix: Story = {
  args: {
    prefixIcon: 'search',
    suffixIcon: 'close',
    placeholder: '带图标的输入框',
  },
}

// 可清除
export const Clearable: Story = {
  args: {
    clearable: true,
    placeholder: '可清除的输入框',
  },
}

// 字数限制
export const MaxLength: Story = {
  args: {
    maxlength: 20,
    showCount: true,
    placeholder: '最多输入20个字符',
  },
}

// 不同状态
export const Status: Story = {
  args: {
    status: 'error',
    placeholder: '错误状态',
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    placeholder: '自定义样式',
    pt: {
      wrapper:
        'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
      input: 'text-purple-700 placeholder-purple-300',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    placeholder: '无样式模式',
    unstyled: true,
    pt: {
      root: 'w-full',
      wrapper: 'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md',
      input: 'w-full px-4 py-2 rounded-md bg-white focus:outline-none',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { InputDemo },
    template: '<InputDemo />',
  }),
}
