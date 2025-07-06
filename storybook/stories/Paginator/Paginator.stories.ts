import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Paginator } from '@versakit/vue'
import '@versakit/vue/style'
import PaginatorDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Paginator> = {
  title: '组件/Paginator 分页器',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: '当前页码',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    totalPages: {
      control: 'number',
      description: '总页数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    visiblePageCount: {
      control: 'number',
      description: '显示的页码按钮数量',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    showEndButtons: {
      control: 'boolean',
      description: '是否显示首页和尾页按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showPrevNextButtons: {
      control: 'boolean',
      description: '是否显示上一页和下一页按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showJumper: {
      control: 'boolean',
      description: '是否显示页码跳转输入框',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '分页器大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'text'],
      description: '分页器样式变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    shape: {
      control: 'select',
      options: ['square', 'rounded', 'circle'],
      description: '分页器形状',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
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
type Story = StoryObj<typeof Paginator>

// 基础示例
export const Basic: Story = {
  args: {
    totalPages: 10,
  },
  render: (args) => ({
    components: { Paginator },
    setup() {
      return { args }
    },
    template: `<Paginator v-bind="args" />`,
  }),
}

// 不同大小
export const Sizes: Story = {
  render: () => ({
    components: { Paginator },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { Paginator },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    `,
  }),
}

// 不同形状
export const Shapes: Story = {
  render: () => ({
    components: { Paginator },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    `,
  }),
}

// 可见页码数量
export const VisiblePageCount: Story = {
  render: () => ({
    components: { Paginator },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示7个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="7" :modelValue="10" />
        </div>
      </div>
    `,
  }),
}

// 带页码跳转
export const WithJumper: Story = {
  args: {
    totalPages: 100,
    showJumper: true,
  },
  render: (args) => ({
    components: { Paginator },
    setup() {
      return { args }
    },
    template: `<Paginator v-bind="args" />`,
  }),
}

// 禁用状态
export const Disabled: Story = {
  args: {
    totalPages: 10,
    disabled: true,
  },
  render: (args) => ({
    components: { Paginator },
    setup() {
      return { args }
    },
    template: `<Paginator v-bind="args" />`,
  }),
}

// 自定义按钮
export const CustomButtons: Story = {
  args: {
    totalPages: 10,
  },
  render: (args) => ({
    components: { Paginator },
    setup() {
      return { args }
    },
    template: `
      <Paginator v-bind="args">
        <template #first-button>
          <span class="text-xs">首页</span>
        </template>
        <template #prev-button>
          <span class="text-xs">上一页</span>
        </template>
        <template #next-button>
          <span class="text-xs">下一页</span>
        </template>
        <template #last-button>
          <span class="text-xs">尾页</span>
        </template>
      </Paginator>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    totalPages: 10,
    unstyled: true,
    pt: {
      root: 'flex items-center justify-center',
      list: 'flex items-center gap-1',
      item: '',
      button:
        'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm hover:bg-gray-100',
      activeButton:
        'w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full',
      prevButton:
        'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      nextButton:
        'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      firstButton:
        'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      lastButton:
        'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      ellipsis: 'w-8 h-8 flex items-center justify-center',
    },
  },
  render: (args) => ({
    components: { Paginator },
    setup() {
      return { args }
    },
    template: `<Paginator v-bind="args" />`,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { PaginatorDemo },
    template: '<PaginatorDemo />',
  }),
}
