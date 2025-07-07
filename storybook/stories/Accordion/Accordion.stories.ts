import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Accordion, AccordionItem } from '@versakit/vue'
import '@versakit/vue/style'
import AccordionDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Accordion> = {
  title: '组件/Accordion 手风琴',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: '是否允许同时展开多个面板',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    modelValue: {
      control: 'text',
      description: '当前展开的面板键值',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: '手风琴样式变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '圆角大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    bordered: {
      control: 'boolean',
      description: '是否显示边框',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    animated: {
      control: 'boolean',
      description: '是否启用动画效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用全部面板',
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
type Story = StoryObj<typeof Accordion>

// 基础示例
export const Basic: Story = {
  args: {},
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域。这里可以放置任何内容。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域。这里可以放置任何内容。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域。这里可以放置任何内容。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 带边框手风琴
export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 阴影手风琴
export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 多面板模式
export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域，可以与其他项同时展开。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域，可以与其他项同时展开。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域，可以与其他项同时展开。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 默认展开
export const DefaultValue: Story = {
  args: {
    modelValue: 'item-2',
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域，默认展开。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 多项默认展开
export const MultipleDefaultValue: Story = {
  args: {
    multiple: true,
    modelValue: ['item-1', 'item-3'],
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域，默认展开。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域，默认展开。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 不同圆角
export const RadiusSizes: Story = {
  render: () => ({
    components: { Accordion, AccordionItem },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-sm text-gray-500">无圆角</h3>
          <Accordion radius="none" variant="bordered">
            <AccordionItem value="item-1" header="示例项">
              <p>无圆角的手风琴内容。</p>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div>
          <h3 class="mb-2 text-sm text-gray-500">中圆角</h3>
          <Accordion radius="md" variant="bordered">
            <AccordionItem value="item-1" header="示例项">
              <p>中圆角的手风琴内容。</p>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div>
          <h3 class="mb-2 text-sm text-gray-500">大圆角</h3>
          <Accordion radius="full" variant="bordered">
            <AccordionItem value="item-1" header="示例项">
              <p>大圆角的手风琴内容。</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    `,
  }),
}

// 禁用面板
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionItem value="item-1" header="禁用项1">
          <p>这个项目被禁用，无法点击。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="禁用项2">
          <p>这个项目被禁用，无法点击。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 单项禁用
export const ItemDisabled: Story = {
  render: () => ({
    components: { Accordion, AccordionItem },
    template: `
      <Accordion>
        <AccordionItem value="item-1" header="正常项">
          <p>这是一个可以正常点击的项目。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="禁用项" disabled>
          <p>这个项目被禁用，无法点击。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="正常项">
          <p>这是一个可以正常点击的项目。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 自定义标题和图标
export const CustomHeaderAndIcon: Story = {
  render: () => ({
    components: { Accordion, AccordionItem },
    template: `
      <Accordion>
        <AccordionItem value="item-1">
          <template #header>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span class="text-blue-600 font-bold">自定义标题</span>
            </div>
          </template>
          <p>这是自定义标题的内容。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="自定义图标">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </template>
          <p>这是自定义图标的内容。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
  },
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args" :pt="{ root: 'bg-gray-100 rounded-lg' }">
        <AccordionItem 
          value="item-1" 
          header="无样式项" 
          :pt="{
            root: 'mb-2',
            header: 'p-1',
            trigger: 'bg-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center',
            title: 'text-indigo-600 font-medium',
            icon: 'text-indigo-600',
            content: 'overflow-hidden transition-all duration-300',
            contentInner: 'bg-white rounded-b-lg p-4 border-t border-gray-100'
          }"
        >
          <p>这是无样式模式下，通过pt属性自定义的项目。</p>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

// 综合演示
export const Demo: Story = {
  render: () => ({
    components: { AccordionDemo },
    template: '<AccordionDemo />',
  }),
}
