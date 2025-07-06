import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Panel } from '@versakit/vue'
import '@versakit/vue/style'
import PanelDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Panel> = {
  title: '组件/Panel 面板',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '面板标题',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: '面板样式变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: '内边距大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
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
    collapsible: {
      control: 'boolean',
      description: '是否可折叠',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultCollapsed: {
      control: 'boolean',
      description: '是否默认折叠',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<typeof Panel>

// 基础示例
export const Basic: Story = {
  args: {
    title: '基础面板',
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>这是一个基础面板的内容区域。</p>
      </Panel>
    `,
  }),
}

// 带边框面板
export const Bordered: Story = {
  args: {
    title: '带边框面板',
    variant: 'bordered',
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>这是一个带边框面板的内容区域。</p>
      </Panel>
    `,
  }),
}

// 阴影面板
export const Elevated: Story = {
  args: {
    title: '阴影面板',
    variant: 'elevated',
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>这是一个带阴影面板的内容区域。</p>
      </Panel>
    `,
  }),
}

// 不同内边距
export const PaddingSizes: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <div class="space-y-4">
        <Panel title="无内边距" padding="none">
          <p>这是无内边距的面板内容。</p>
        </Panel>
        <Panel title="小内边距" padding="sm">
          <p>这是小内边距的面板内容。</p>
        </Panel>
        <Panel title="中内边距" padding="md">
          <p>这是中内边距的面板内容。</p>
        </Panel>
        <Panel title="大内边距" padding="lg">
          <p>这是大内边距的面板内容。</p>
        </Panel>
      </div>
    `,
  }),
}

// 不同圆角
export const RadiusSizes: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <div class="space-y-4">
        <Panel title="无圆角" radius="none" variant="bordered">
          <p>这是无圆角的面板内容。</p>
        </Panel>
        <Panel title="小圆角" radius="sm" variant="bordered">
          <p>这是小圆角的面板内容。</p>
        </Panel>
        <Panel title="中圆角" radius="md" variant="bordered">
          <p>这是中圆角的面板内容。</p>
        </Panel>
        <Panel title="大圆角" radius="lg" variant="bordered">
          <p>这是大圆角的面板内容。</p>
        </Panel>
        <Panel title="全圆角" radius="full" variant="bordered">
          <p>这是全圆角的面板内容。</p>
        </Panel>
      </div>
    `,
  }),
}

// 可折叠面板
export const Collapsible: Story = {
  args: {
    title: '可折叠面板',
    collapsible: true,
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>点击面板头部可以折叠/展开此内容。</p>
      </Panel>
    `,
  }),
}

// 默认折叠面板
export const DefaultCollapsed: Story = {
  args: {
    title: '默认折叠面板',
    collapsible: true,
    defaultCollapsed: true,
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>这个面板默认是折叠的，点击面板头部可以展开。</p>
      </Panel>
    `,
  }),
}

// 自定义标题
export const CustomTitle: Story = {
  args: {
    collapsible: true,
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <template #title>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span class="text-blue-600 font-bold">自定义标题</span>
          </div>
        </template>
        <p>这个面板使用了自定义标题插槽。</p>
      </Panel>
    `,
  }),
}

// 自定义图标
export const CustomIcon: Story = {
  args: {
    title: '自定义图标',
    collapsible: true,
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </template>
        <p>这个面板使用了自定义折叠图标。</p>
      </Panel>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    title: '无样式面板',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg',
      header: 'bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-t-xl',
      title: 'text-white font-bold text-xl',
      content: 'p-6',
      icon: 'text-white',
    },
    collapsible: true,
  },
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: `
      <Panel v-bind="args">
        <p>这是一个使用无样式模式的面板，通过pt属性自定义样式。</p>
      </Panel>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { PanelDemo },
    template: '<PanelDemo />',
  }),
}
