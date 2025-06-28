import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Slider } from '@versakit/vue'
import '@versakit/vue/style'
import SliderDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Slider> = {
  title: '组件/Slider 滑块',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: '滑块的值',
      table: {
        type: { summary: 'number' },
      },
    },
    min: {
      control: 'number',
      description: '最小值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: '最大值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: 'number',
      description: '步长',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '方向',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
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
    showTooltip: {
      control: 'boolean',
      description: '是否显示提示',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showMarks: {
      control: 'boolean',
      description: '是否显示刻度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    marks: {
      control: 'object',
      description: '刻度标记',
      table: {
        type: { summary: 'Record<number, string>' },
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
type Story = StoryObj<typeof Slider>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: 50,
  },
}

// 设置最小值和最大值
export const MinMax: Story = {
  args: {
    modelValue: 25,
    min: 0,
    max: 50,
  },
}

// 设置步长
export const Step: Story = {
  args: {
    modelValue: 20,
    step: 10,
  },
}

// 垂直方向
export const Vertical: Story = {
  args: {
    modelValue: 50,
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: '<div style="height: 200px;"><Slider v-bind="args" /></div>',
  }),
}

// 禁用状态
export const Disabled: Story = {
  args: {
    modelValue: 50,
    disabled: true,
  },
}

// 显示提示
export const WithTooltip: Story = {
  args: {
    modelValue: 50,
    showTooltip: true,
  },
}

// 显示刻度
export const WithMarks: Story = {
  args: {
    modelValue: 50,
    showMarks: true,
    marks: {
      0: '0°C',
      25: '25°C',
      50: '50°C',
      75: '75°C',
      100: '100°C',
    },
  },
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: 50,
    showTooltip: true,
    pt: {
      track: 'bg-purple-200',
      fill: 'bg-purple-600',
      thumb: 'border-purple-600',
      tooltip: 'bg-purple-600',
    },
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: 50,
    showTooltip: true,
    showMarks: true,
    marks: {
      0: '0%',
      25: '25%',
      50: '50%',
      75: '75%',
      100: '100%',
    },
    unstyled: true,
    pt: {
      container: 'relative py-6',
      track: 'h-2 bg-gray-200 rounded-full',
      fill: 'absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full',
      thumb:
        'absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
      tooltip:
        'absolute bottom-full mb-2 -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap',
      marks: 'absolute w-full',
      mark: 'absolute w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2',
      markLabel: 'absolute mt-2 text-xs text-gray-500 -translate-x-1/2',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SliderDemo },
    template: '<SliderDemo />',
  }),
}
