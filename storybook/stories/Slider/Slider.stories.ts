import { Meta, StoryObj } from '@storybook/vue3-vite'
import Slider from './Slider.vue'

// 默认导出，定义组件元数据
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: '滑块的当前值',
    },
    min: {
      control: { type: 'number' },
      description: '最小值',
    },
    max: {
      control: { type: 'number' },
      description: '最大值',
    },
    step: {
      control: { type: 'number' },
      description: '步长',
    },
  },
}

export default meta

// 定义故事
type Story = StoryObj<typeof Slider>

// 默认滑块
export const Default: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
  },
}

// 步长较大的滑块
export const LargerStep: Story = {
  args: {
    modelValue: 40,
    min: 0,
    max: 100,
    step: 10,
  },
}

// 自定义范围的滑块
export const CustomRange: Story = {
  args: {
    modelValue: 500,
    min: 100,
    max: 1000,
    step: 100,
  },
}
