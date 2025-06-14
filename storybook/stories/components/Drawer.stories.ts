import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { VKDrawer, VKButton } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

const meta: Meta<typeof VKDrawer> = {
  title: 'Components/Drawer',
  component: VKDrawer,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示抽屉',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: '抽屉标题',
      defaultValue: '抽屉标题',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full', '400px'],
      description: '抽屉尺寸',
      defaultValue: 'md',
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: '抽屉位置',
      defaultValue: 'right',
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮',
      defaultValue: true,
    },
    closeOnClickOverlay: {
      control: 'boolean',
      description: '点击遮罩层是否关闭抽屉',
      defaultValue: true,
    },
    overlay: {
      control: 'boolean',
      description: '是否添加遮罩层',
      defaultValue: true,
    },
    showHeader: {
      control: 'boolean',
      description: '是否显示抽屉头部',
      defaultValue: true,
    },
    showFooter: {
      control: 'boolean',
      description: '是否显示抽屉底部',
      defaultValue: false,
    },
    closeOnEsc: {
      control: 'boolean',
      description: '是否允许按Esc关闭抽屉',
      defaultValue: true,
    },
    rounded: {
      control: 'boolean',
      description: '是否为圆角抽屉',
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
type Story = StoryObj<typeof VKDrawer>

// 基础抽屉
export const Default: Story = {
  render: (args) => ({
    components: { VKDrawer, VKButton },
    setup() {
      const visible = ref(false)

      const showDrawer = () => {
        visible.value = true
      }

      return { args, visible, showDrawer }
    },
    template: `
      <div>
        <VKButton @click="showDrawer">打开抽屉</VKButton>
        <VKDrawer v-model="visible" v-bind="args">
          <p>这是抽屉的内容</p>
          <p>可以放置任何内容</p>
        </VKDrawer>
      </div>
    `,
  }),
}

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { VKDrawer, VKButton },
    setup() {
      const leftVisible = ref(false)
      const rightVisible = ref(false)
      const topVisible = ref(false)
      const bottomVisible = ref(false)

      return { leftVisible, rightVisible, topVisible, bottomVisible }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton @click="leftVisible = true">左侧抽屉</VKButton>
        <VKButton @click="rightVisible = true">右侧抽屉</VKButton>
        <VKButton @click="topVisible = true">顶部抽屉</VKButton>
        <VKButton @click="bottomVisible = true">底部抽屉</VKButton>
        
        <VKDrawer 
          v-model="leftVisible" 
          title="左侧抽屉" 
          placement="left"
        >
          <p>这是左侧抽屉的内容</p>
        </VKDrawer>
        
        <VKDrawer 
          v-model="rightVisible" 
          title="右侧抽屉" 
          placement="right"
        >
          <p>这是右侧抽屉的内容</p>
        </VKDrawer>
        
        <VKDrawer 
          v-model="topVisible" 
          title="顶部抽屉" 
          placement="top"
        >
          <p>这是顶部抽屉的内容</p>
        </VKDrawer>
        
        <VKDrawer 
          v-model="bottomVisible" 
          title="底部抽屉" 
          placement="bottom"
        >
          <p>这是底部抽屉的内容</p>
        </VKDrawer>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKDrawer, VKButton },
    setup() {
      const xsVisible = ref(false)
      const smVisible = ref(false)
      const mdVisible = ref(false)
      const lgVisible = ref(false)
      const xlVisible = ref(false)
      const fullVisible = ref(false)
      const customVisible = ref(false)

      return {
        xsVisible,
        smVisible,
        mdVisible,
        lgVisible,
        xlVisible,
        fullVisible,
        customVisible,
      }
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <VKButton @click="xsVisible = true">超小尺寸</VKButton>
        <VKButton @click="smVisible = true">小尺寸</VKButton>
        <VKButton @click="mdVisible = true">中等尺寸</VKButton>
        <VKButton @click="lgVisible = true">大尺寸</VKButton>
        <VKButton @click="xlVisible = true">超大尺寸</VKButton>
        <VKButton @click="fullVisible = true">全屏尺寸</VKButton>
        <VKButton @click="customVisible = true">自定义尺寸</VKButton>
        
        <VKDrawer v-model="xsVisible" title="超小尺寸抽屉" size="xs">
          <p>超小尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="smVisible" title="小尺寸抽屉" size="sm">
          <p>小尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="mdVisible" title="中等尺寸抽屉" size="md">
          <p>中等尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="lgVisible" title="大尺寸抽屉" size="lg">
          <p>大尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="xlVisible" title="超大尺寸抽屉" size="xl">
          <p>超大尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="fullVisible" title="全屏尺寸抽屉" size="full">
          <p>全屏尺寸抽屉内容</p>
        </VKDrawer>
        
        <VKDrawer v-model="customVisible" title="自定义尺寸抽屉" size="400px">
          <p>自定义尺寸抽屉内容</p>
        </VKDrawer>
      </div>
    `,
  }),
}

// 圆角抽屉
export const Rounded: Story = {
  render: () => ({
    components: { VKDrawer, VKButton },
    setup() {
      const visible = ref(false)

      return { visible }
    },
    template: `
      <div>
        <VKButton @click="visible = true">打开圆角抽屉</VKButton>
        
        <VKDrawer v-model="visible" title="圆角抽屉" rounded>
          <p>这是一个带圆角的抽屉</p>
        </VKDrawer>
      </div>
    `,
  }),
}

// 自定义头部和底部
export const CustomHeaderAndFooter: Story = {
  render: () => ({
    components: { VKDrawer, VKButton },
    setup() {
      const visible = ref(false)

      return { visible }
    },
    template: `
      <div>
        <VKButton @click="visible = true">自定义头部和底部</VKButton>
        
        <VKDrawer v-model="visible" showFooter>
          <template #title>
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>自定义标题</span>
            </div>
          </template>
          
          <p>这是抽屉内容</p>
          
          <template #footer>
            <div style="display: flex; justify-content: flex-end; gap: 8px;">
              <VKButton variant="default" @click="visible = false">取消</VKButton>
              <VKButton variant="primary" @click="visible = false">确认</VKButton>
            </div>
          </template>
        </VKDrawer>
      </div>
    `,
  }),
}
