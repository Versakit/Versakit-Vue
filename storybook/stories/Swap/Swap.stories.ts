import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Swap } from '@versakit/vue'
import '@versakit/vue/style'
import SwapDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Swap> = {
  title: '组件/Swap 状态切换',
  component: Swap,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: '是否激活交换状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['fade', 'flip', 'rotate', 'slide'],
      description: '切换效果的变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '组件的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
      description: '触发切换的方式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'click' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用组件',
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
    'update:active': {
      action: 'update:active',
      description: '激活状态变化时触发的事件',
      table: {
        type: { summary: 'event' },
      },
    },
    change: {
      action: 'change',
      description: '状态改变时触发的事件',
      table: {
        type: { summary: 'event' },
      },
    },
    on: {
      description: '激活状态下显示的内容插槽',
      table: {
        type: { summary: 'slot' },
      },
    },
    off: {
      description: '未激活状态下显示的内容插槽',
      table: {
        type: { summary: 'slot' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Swap>

// 基础示例
export const Basic: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-blue-500 text-white rounded p-2">开启状态</div>
        </template>
        <template #off>
          <div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded p-2">关闭状态</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    active: false,
  },
}

// 淡入淡出效果
export const Fade: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">✓</div>
        </template>
        <template #off>
          <div class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">✗</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    active: false,
    variant: 'fade',
  },
}

// 翻转效果
export const Flip: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-yellow-500 text-white rounded w-8 h-8 flex items-center justify-center">A</div>
        </template>
        <template #off>
          <div class="bg-orange-500 text-white rounded w-8 h-8 flex items-center justify-center">B</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    active: false,
    variant: 'flip',
  },
}

// 旋转效果
export const Rotate: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">+</div>
        </template>
        <template #off>
          <div class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">-</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    active: false,
    variant: 'rotate',
  },
}

// 滑动效果
export const Slide: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-blue-500 text-white rounded p-2">向上</div>
        </template>
        <template #off>
          <div class="bg-cyan-500 text-white rounded p-2">向下</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    active: false,
    variant: 'slide',
  },
}

// 尺寸展示
export const Sizes: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-end gap-4">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">小尺寸</span>
          <Swap v-bind="args" size="sm">
            <template #on>
              <div class="bg-rose-500 text-white rounded w-6 h-6 flex items-center justify-center">S</div>
            </template>
            <template #off>
              <div class="bg-pink-500 text-white rounded w-6 h-6 flex items-center justify-center">S</div>
            </template>
          </Swap>
        </div>
        
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">中尺寸</span>
          <Swap v-bind="args" size="md">
            <template #on>
              <div class="bg-rose-500 text-white rounded w-8 h-8 flex items-center justify-center">M</div>
            </template>
            <template #off>
              <div class="bg-pink-500 text-white rounded w-8 h-8 flex items-center justify-center">M</div>
            </template>
          </Swap>
        </div>
        
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">大尺寸</span>
          <Swap v-bind="args" size="lg">
            <template #on>
              <div class="bg-rose-500 text-white rounded w-10 h-10 flex items-center justify-center">L</div>
            </template>
            <template #off>
              <div class="bg-pink-500 text-white rounded w-10 h-10 flex items-center justify-center">L</div>
            </template>
          </Swap>
        </div>
      </div>
    `,
  }),
  args: {
    active: false,
    variant: 'fade',
  },
}

// 触发方式
export const Triggers: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <div class="flex gap-4">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">点击触发</span>
          <Swap v-bind="args" trigger="click">
            <template #on>
              <div class="bg-blue-500 text-white rounded p-2">点击状态</div>
            </template>
            <template #off>
              <div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded p-2">点击切换</div>
            </template>
          </Swap>
        </div>
        
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">悬停触发</span>
          <Swap v-bind="args" trigger="hover">
            <template #on>
              <div class="bg-teal-500 text-white rounded p-2">悬停状态</div>
            </template>
            <template #off>
              <div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded p-2">悬停切换</div>
            </template>
          </Swap>
        </div>
        
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-500">聚焦触发</span>
          <Swap v-bind="args" trigger="focus">
            <template #on>
              <div class="bg-amber-500 text-white rounded p-2">聚焦状态</div>
            </template>
            <template #off>
              <div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded p-2">点击聚焦</div>
            </template>
          </Swap>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'fade',
  },
}

// 禁用状态
export const Disabled: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-blue-500 text-white rounded p-2">开启状态</div>
        </template>
        <template #off>
          <div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded p-2">禁用状态</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    disabled: true,
  },
}

// 自定义样式
export const CustomStyle: Story = {
  render: (args) => ({
    components: { Swap },
    setup() {
      return { args }
    },
    template: `
      <Swap v-bind="args">
        <template #on>
          <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full">🌙</div>
        </template>
        <template #off>
          <div class="bg-gradient-to-r from-orange-400 to-yellow-300 text-white p-3 rounded-full">☀️</div>
        </template>
      </Swap>
    `,
  }),
  args: {
    pt: {
      root: 'shadow-lg hover:shadow-xl transition-all',
      on: 'transform-gpu transition-all',
      off: 'transform-gpu transition-all',
    },
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SwapDemo },
    template: '<SwapDemo />',
  }),
}
