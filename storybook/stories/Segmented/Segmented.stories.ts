import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Segmented from './index.vue'

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented',
  component: Segmented,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前选中的值',
    },
    options: {
      control: 'object',
      description: '选项数组',
    },
  },
  args: {
    options: ['选项1', '选项2', '选项3'],
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基础用法
export const Default: Story = {
  args: {
    modelValue: '选项1',
  },
}

// 数字选项
export const NumberOptions: Story = {
  args: {
    options: [1, 2, 3, 4, 5],
    modelValue: 1,
  },
}

// 混合选项
export const MixedOptions: Story = {
  args: {
    options: ['全部', 10, 20, 50, '自定义'],
    modelValue: '全部',
  },
}

// 未选中状态
export const Unselected: Story = {
  args: {
    modelValue: undefined,
  },
}

// 长文本选项
export const LongTextOptions: Story = {
  args: {
    options: ['这是一个很长的选项文本', '另一个长选项', '短选项'],
    modelValue: '这是一个很长的选项文本',
  },
}

// 多选项
export const ManyOptions: Story = {
  args: {
    options: ['选项A', '选项B', '选项C', '选项D', '选项E', '选项F'],
    modelValue: '选项A',
  },
}
