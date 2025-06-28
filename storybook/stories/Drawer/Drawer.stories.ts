import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Drawer } from '@versakit/vue'
import '@versakit/vue/style'
import DrawerDemo from './index.vue'

// 定义组件元数据
const meta: Meta<typeof Drawer> = {
  title: '组件/Drawer 抽屉',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '控制抽屉是否显示',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: '抽屉的位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
    },
    size: {
      control: 'text',
      description: '抽屉的尺寸',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '30%' },
      },
    },
    showOverlay: {
      control: 'boolean',
      description: '是否显示遮罩层',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEsc: {
      control: 'boolean',
      description: '是否按ESC键关闭',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: '是否点击遮罩层关闭',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    preventScroll: {
      control: 'boolean',
      description: '是否阻止滚动',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    zIndex: {
      control: 'number',
      description: 'z-index值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
      },
    },
    title: {
      control: 'text',
      description: '抽屉标题',
      table: {
        type: { summary: 'string' },
      },
    },
    hideCloseButton: {
      control: 'boolean',
      description: '是否隐藏关闭按钮',
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
type Story = StoryObj<typeof Drawer>

// 基础示例
export const Basic: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          打开抽屉
        </button>
        
        <Drawer v-model="open" title="基础抽屉">
          <p>这是一个基础抽屉的内容。</p>
        </Drawer>
      </div>
    `,
    data() {
      return {
        open: false,
      }
    },
  }),
}

// 不同位置
export const Placement: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLeft = true"
        >
          左侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openRight = true"
        >
          右侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openTop = true"
        >
          顶部抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openBottom = true"
        >
          底部抽屉
        </button>
        
        <Drawer v-model="openLeft" title="左侧抽屉" placement="left">
          <p>这是一个左侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openRight" title="右侧抽屉" placement="right">
          <p>这是一个右侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openTop" title="顶部抽屉" placement="top">
          <p>这是一个顶部抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openBottom" title="底部抽屉" placement="bottom">
          <p>这是一个底部抽屉。</p>
        </Drawer>
      </div>
    `,
    data() {
      return {
        openLeft: false,
        openRight: false,
        openTop: false,
        openBottom: false,
      }
    },
  }),
}

// 不同尺寸
export const Size: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openSmall = true"
        >
          小尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openMedium = true"
        >
          中等尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLarge = true"
        >
          大尺寸抽屉
        </button>
        
        <Drawer v-model="openSmall" title="小尺寸抽屉" size="20%">
          <p>这是一个小尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openMedium" title="中等尺寸抽屉" size="50%">
          <p>这是一个中等尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openLarge" title="大尺寸抽屉" size="80%">
          <p>这是一个大尺寸抽屉。</p>
        </Drawer>
      </div>
    `,
    data() {
      return {
        openSmall: false,
        openMedium: false,
        openLarge: false,
      }
    },
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          自定义样式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="自定义样式抽屉"
          :pt="{
            overlay: 'bg-black/50',
            container: 'bg-gray-100 shadow-lg',
            header: 'bg-blue-500 text-white p-4',
            title: 'text-lg font-bold',
            closeButton: 'text-white hover:text-gray-200',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 pt 属性自定义样式的抽屉。</p>
        </Drawer>
      </div>
    `,
    data() {
      return {
        open: false,
      }
    },
  }),
}

// 无样式模式
export const Unstyled: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div>
        <button 
          class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
          @click="open = true"
        >
          无样式模式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="无样式模式抽屉"
          unstyled
          :pt="{
            overlay: 'fixed inset-0 bg-black/70 z-50',
            container: 'fixed bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl z-50 transition-transform duration-300',
            header: 'flex justify-between items-center p-4 border-b border-white/20',
            title: 'text-xl font-bold',
            closeButton: 'text-white hover:text-gray-200 text-2xl',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义抽屉。</p>
        </Drawer>
      </div>
    `,
    data() {
      return {
        open: false,
      }
    },
  }),
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { DrawerDemo },
    template: '<DrawerDemo />',
  }),
}
