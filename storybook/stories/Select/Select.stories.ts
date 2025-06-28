import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Select } from '@versakit/vue'
import '@versakit/vue/style'
import SelectDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Select> = {
  title: '组件/Select 选择器',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '选择器的值',
      table: {
        type: { summary: 'string | number | Array<string | number>' },
      },
    },
    options: {
      control: 'object',
      description: '选项列表',
      table: {
        type: { summary: 'SelectOption[]' },
        defaultValue: { summary: '[]' },
      },
    },
    placeholder: {
      control: 'text',
      description: '占位符',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '请选择' },
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
    multiple: {
      control: 'boolean',
      description: '是否多选',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: '状态',
      table: {
        type: { summary: 'string' },
      },
    },
    clearable: {
      control: 'boolean',
      description: '是否可清除',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    filterable: {
      control: 'boolean',
      description: '是否可搜索',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: '是否显示标签',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: '标签文本',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: '是否必填',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    helpText: {
      control: 'text',
      description: '帮助文本',
      table: {
        type: { summary: 'string' },
      },
    },
    errorText: {
      control: 'text',
      description: '错误文本',
      table: {
        type: { summary: 'string' },
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
type Story = StoryObj<typeof Select>

const defaultOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' },
  { value: 'option5', label: '选项五' },
]

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '请选择',
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    disabled: true,
  },
}

// 只读状态
export const Readonly: Story = {
  args: {
    modelValue: 'option1',
    options: defaultOptions,
    readonly: true,
  },
}

// 多选模式
export const Multiple: Story = {
  args: {
    modelValue: [],
    options: defaultOptions,
    multiple: true,
  },
}

// 不同尺寸
export const Sizes: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    size: 'large',
  },
}

// 不同状态
export const Status: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    status: 'error',
    errorText: '请选择一个选项',
  },
}

// 可清除
export const Clearable: Story = {
  args: {
    modelValue: 'option1',
    options: defaultOptions,
    clearable: true,
  },
}

// 可搜索
export const Filterable: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    filterable: true,
  },
}

// 带标签
export const WithLabel: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    showLabel: true,
    label: '选择项',
    required: true,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    pt: {
      trigger:
        'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
      dropdown: 'border-purple-200 shadow-lg',
      option: 'hover:bg-purple-50',
      optionSelected: 'bg-purple-100 text-purple-800',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    unstyled: true,
    pt: {
      root: 'relative',
      trigger:
        'w-full flex items-center justify-between bg-white border-2 border-blue-500 rounded-lg p-2 cursor-pointer',
      value: 'text-gray-800',
      placeholder: 'text-gray-400',
      dropdown:
        'absolute w-full mt-1 bg-white border border-blue-300 rounded-lg shadow-lg z-10',
      option: 'p-2 cursor-pointer hover:bg-blue-50',
      optionSelected: 'bg-blue-100 text-blue-800',
      icon: 'text-blue-500',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SelectDemo },
    template: '<SelectDemo />',
  }),
}
