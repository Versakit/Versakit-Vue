import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Splitter } from '@versakit/vue'
import '@versakit/vue/style'
import SplitterDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Splitter> = {
  title: '组件/Splitter 分割面板',
  component: Splitter,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '分割面板的布局方向',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    gutterSize: {
      control: 'number',
      description: '分隔条的大小',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    minSize: {
      control: 'number',
      description: '面板的最小尺寸',
      table: {
        type: { summary: 'number | number[]' },
        defaultValue: { summary: '10' },
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
type Story = StoryObj<typeof Splitter>

// 水平布局
export const Horizontal: Story = {
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter v-bind="args">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 垂直布局
export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter v-bind="args">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 多面板
export const MultiPanel: Story = {
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter v-bind="args">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
          <template #panel-2>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-300 flex items-center justify-center">
                面板 3
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 嵌套面板
export const NestedPanels: Story = {
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter>
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full">
                <Splitter layout="vertical">
                  <template #panel-0>
                    <SplitterItem>
                      <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                        面板 2.1
                      </div>
                    </SplitterItem>
                  </template>
                  <template #panel-1>
                    <SplitterItem>
                      <div class="h-full p-4 bg-gray-300 flex items-center justify-center">
                        面板 2.2
                      </div>
                    </SplitterItem>
                  </template>
                </Splitter>
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 自定义分隔条大小
export const CustomGutterSize: Story = {
  args: {
    gutterSize: 10,
  },
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter v-bind="args">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 初始尺寸
export const InitialSize: Story = {
  render: () => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    template: `
      <div style="height: 300px;">
        <Splitter>
          <template #panel-0>
            <SplitterItem :size="30">
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1 (30%)
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem :size="70">
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2 (70%)
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 最小尺寸
export const MinSize: Story = {
  args: {
    minSize: 20,
  },
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter v-bind="args">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-100 flex items-center justify-center">
                面板 1 (最小 20%)
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-gray-200 flex items-center justify-center">
                面板 2 (最小 20%)
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  render: () => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    template: `
      <div style="height: 300px;">
        <Splitter :pt="{ gutter: 'bg-blue-500 hover:bg-blue-600', gutterHandler: 'bg-white' }">
          <template #panel-0>
            <SplitterItem>
              <div class="h-full p-4 bg-blue-50 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full p-4 bg-blue-100 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    unstyled: true,
  },
  render: (args) => ({
    components: { Splitter, SplitterItem: Splitter.SplitterItem },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px;">
        <Splitter 
          v-bind="args" 
          :pt="{ 
            root: 'flex relative', 
            gutter: 'flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 cursor-col-resize',
            gutterHandler: 'h-8 w-1 bg-white rounded-full'
          }"
        >
          <template #panel-0>
            <SplitterItem unstyled :pt="{ root: 'overflow-auto' }">
              <div class="h-full p-4 bg-purple-50 flex items-center justify-center">
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem unstyled :pt="{ root: 'overflow-auto' }">
              <div class="h-full p-4 bg-pink-50 flex items-center justify-center">
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    `,
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { SplitterDemo },
    template: '<SplitterDemo />',
  }),
}
