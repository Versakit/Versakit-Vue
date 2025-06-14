import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { VKModal, VKButton } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

const meta: Meta<typeof VKModal> = {
  title: 'Components/Modal',
  component: VKModal,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示模态框',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: '模态框标题',
      defaultValue: '模态框标题',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: '模态框尺寸',
      defaultValue: 'md',
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮',
      defaultValue: true,
    },
    closeOnClickOverlay: {
      control: 'boolean',
      description: '点击遮罩层是否关闭模态框',
      defaultValue: true,
    },
    overlay: {
      control: 'boolean',
      description: '是否添加遮罩层',
      defaultValue: true,
    },
    showHeader: {
      control: 'boolean',
      description: '是否显示模态框头部',
      defaultValue: true,
    },
    showFooter: {
      control: 'boolean',
      description: '是否显示模态框底部',
      defaultValue: false,
    },
    closeOnEsc: {
      control: 'boolean',
      description: '是否允许按Esc关闭模态框',
      defaultValue: true,
    },
    rounded: {
      control: 'boolean',
      description: '是否为圆角模态框',
      defaultValue: true,
    },
    centered: {
      control: 'boolean',
      description: '是否居中显示',
      defaultValue: false,
    },
    fullscreen: {
      control: 'boolean',
      description: '是否全屏显示',
      defaultValue: false,
    },
    a11y: {
      control: 'boolean',
      description: '是否启用无障碍功能',
      defaultValue: true,
    },
    overlayOpacity: {
      control: 'number',
      description: '遮罩层透明度',
      defaultValue: 0.5,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKModal>

// 基础模态框
export const Default: Story = {
  render: (args) => ({
    components: { VKModal, VKButton },
    setup() {
      const visible = ref(false)

      const showModal = () => {
        visible.value = true
      }

      return { args, visible, showModal }
    },
    template: `
      <div>
        <VKButton @click="showModal">打开模态框</VKButton>
        <VKModal v-model="visible" v-bind="args">
          <p>这是模态框的内容</p>
          <p>可以放置任何内容</p>
        </VKModal>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKModal, VKButton },
    setup() {
      const smVisible = ref(false)
      const mdVisible = ref(false)
      const lgVisible = ref(false)
      const xlVisible = ref(false)
      const fullVisible = ref(false)

      return { smVisible, mdVisible, lgVisible, xlVisible, fullVisible }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton @click="smVisible = true">小尺寸</VKButton>
        <VKButton @click="mdVisible = true">中等尺寸</VKButton>
        <VKButton @click="lgVisible = true">大尺寸</VKButton>
        <VKButton @click="xlVisible = true">超大尺寸</VKButton>
        <VKButton @click="fullVisible = true">全屏尺寸</VKButton>
        
        <VKModal v-model="smVisible" title="小尺寸模态框" size="sm">
          <p>小尺寸模态框内容</p>
        </VKModal>
        
        <VKModal v-model="mdVisible" title="中等尺寸模态框" size="md">
          <p>中等尺寸模态框内容</p>
        </VKModal>
        
        <VKModal v-model="lgVisible" title="大尺寸模态框" size="lg">
          <p>大尺寸模态框内容</p>
        </VKModal>
        
        <VKModal v-model="xlVisible" title="超大尺寸模态框" size="xl">
          <p>超大尺寸模态框内容</p>
        </VKModal>
        
        <VKModal v-model="fullVisible" title="全屏尺寸模态框" size="full">
          <p>全屏尺寸模态框内容</p>
        </VKModal>
      </div>
    `,
  }),
}

// 居中模态框
export const Centered: Story = {
  render: () => ({
    components: { VKModal, VKButton },
    setup() {
      const visible = ref(false)

      return { visible }
    },
    template: `
      <div>
        <VKButton @click="visible = true">打开居中模态框</VKButton>
        
        <VKModal v-model="visible" title="居中模态框" centered>
          <p>这是一个居中显示的模态框</p>
        </VKModal>
      </div>
    `,
  }),
}

// 全屏模态框
export const Fullscreen: Story = {
  render: () => ({
    components: { VKModal, VKButton },
    setup() {
      const visible = ref(false)

      return { visible }
    },
    template: `
      <div>
        <VKButton @click="visible = true">打开全屏模态框</VKButton>
        
        <VKModal v-model="visible" title="全屏模态框" fullscreen>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <p>这是一个全屏模态框</p>
            <p>可以展示大量内容</p>
          </div>
        </VKModal>
      </div>
    `,
  }),
}

// 带确认/取消按钮
export const WithButtons: Story = {
  render: () => ({
    components: { VKModal, VKButton },
    setup() {
      const visible = ref(false)

      const confirm = () => {
        console.log('确认')
        visible.value = false
      }

      const cancel = () => {
        console.log('取消')
        visible.value = false
      }

      return { visible, confirm, cancel }
    },
    template: `
      <div>
        <VKButton @click="visible = true">带按钮的模态框</VKButton>
        
        <VKModal 
          v-model="visible" 
          title="带按钮的模态框" 
          showFooter
          showConfirmButton
          showCancelButton
          confirmButtonText="确认操作"
          cancelButtonText="取消操作"
          @confirm="confirm"
          @cancel="cancel"
        >
          <p>这是一个带有确认和取消按钮的模态框。</p>
          <p>点击按钮会触发相应的事件。</p>
        </VKModal>
      </div>
    `,
  }),
}

// 自定义头部和底部
export const CustomHeaderAndFooter: Story = {
  render: () => ({
    components: { VKModal, VKButton },
    setup() {
      const visible = ref(false)

      return { visible }
    },
    template: `
      <div>
        <VKButton @click="visible = true">自定义头部和底部</VKButton>
        
        <VKModal v-model="visible" showFooter>
          <template #title>
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>重要提示</span>
            </div>
          </template>
          
          <p>这是模态框内容</p>
          
          <template #footer>
            <div style="display: flex; justify-content: space-between; width: 100%;">
              <VKButton variant="text" @click="visible = false">稍后再说</VKButton>
              <div style="display: flex; gap: 8px;">
                <VKButton variant="default" @click="visible = false">取消</VKButton>
                <VKButton variant="primary" @click="visible = false">确认</VKButton>
              </div>
            </div>
          </template>
        </VKModal>
      </div>
    `,
  }),
}
