import type { StoryObj } from '@storybook/vue3'
import {
  VKTabs,
  VKTabList,
  VKTab,
  VKTabPanels,
  VKTabPanel,
} from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Tabs',
  component: VKTabs,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前激活的标签的值',
    },
    variant: {
      control: 'select',
      options: ['line', 'pill', 'boxed', 'soft'],
      description: '选项卡样式变体',
      defaultValue: 'line',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '选项卡尺寸',
      defaultValue: 'md',
    },
    placement: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: '选项卡位置',
      defaultValue: 'top',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用所有选项卡',
      defaultValue: false,
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭选项卡',
      defaultValue: false,
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKTabs>

// 基础标签页
export const Default: Story = {
  render: (args) => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const activeTab = ref('tab1')
      return { args, activeTab }
    },
    template: `
      <VKTabs v-model="activeTab" v-bind="args">
        <VKTabList>
          <VKTab value="tab1">标签页 1</VKTab>
          <VKTab value="tab2">标签页 2</VKTab>
          <VKTab value="tab3">标签页 3</VKTab>
        </VKTabList>
        <VKTabPanels>
          <VKTabPanel value="tab1">
            <div class="p-4">标签页 1 的内容</div>
          </VKTabPanel>
          <VKTabPanel value="tab2">
            <div class="p-4">标签页 2 的内容</div>
          </VKTabPanel>
          <VKTabPanel value="tab3">
            <div class="p-4">标签页 3 的内容</div>
          </VKTabPanel>
        </VKTabPanels>
      </VKTabs>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const lineTab = ref('tab1')
      const pillTab = ref('tab1')
      const boxedTab = ref('tab1')
      const softTab = ref('tab1')

      return { lineTab, pillTab, boxedTab, softTab }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">线条风格 (Line)</h3>
          <VKTabs v-model="lineTab" variant="line">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">胶囊风格 (Pill)</h3>
          <VKTabs v-model="pillTab" variant="pill">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">盒子风格 (Boxed)</h3>
          <VKTabs v-model="boxedTab" variant="boxed">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">柔和风格 (Soft)</h3>
          <VKTabs v-model="softTab" variant="soft">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const smallTab = ref('tab1')
      const mediumTab = ref('tab1')
      const largeTab = ref('tab1')

      return { smallTab, mediumTab, largeTab }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">小尺寸 (Small)</h3>
          <VKTabs v-model="smallTab" size="sm">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">中尺寸 (Medium)</h3>
          <VKTabs v-model="mediumTab" size="md">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">大尺寸 (Large)</h3>
          <VKTabs v-model="largeTab" size="lg">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>
      </div>
    `,
  }),
}

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const topTab = ref('tab1')
      const bottomTab = ref('tab1')
      const leftTab = ref('tab1')
      const rightTab = ref('tab1')

      return { topTab, bottomTab, leftTab, rightTab }
    },
    template: `
      <div class="space-y-12">
        <div>
          <h3 class="text-lg font-medium mb-2">顶部位置 (Top)</h3>
          <VKTabs v-model="topTab" placement="top">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">底部位置 (Bottom)</h3>
          <VKTabs v-model="bottomTab" placement="bottom">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">左侧位置 (Left)</h3>
          <VKTabs v-model="leftTab" placement="left">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">右侧位置 (Right)</h3>
          <VKTabs v-model="rightTab" placement="right">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>
      </div>
    `,
  }),
}

// 带图标的标签页
export const WithIcons: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const activeTab = ref('tab1')

      return { activeTab }
    },
    template: `
      <VKTabs v-model="activeTab">
        <VKTabList>
          <VKTab value="tab1">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            首页
          </VKTab>
          <VKTab value="tab2">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            用户
          </VKTab>
          <VKTab value="tab3">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            设置
          </VKTab>
        </VKTabList>
        <VKTabPanels>
          <VKTabPanel value="tab1">
            <div class="p-4">首页内容</div>
          </VKTabPanel>
          <VKTabPanel value="tab2">
            <div class="p-4">用户内容</div>
          </VKTabPanel>
          <VKTabPanel value="tab3">
            <div class="p-4">设置内容</div>
          </VKTabPanel>
        </VKTabPanels>
      </VKTabs>
    `,
  }),
}

// 可关闭的标签页
export const Closable: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const activeTab = ref('tab1')
      const tabs = ref([
        { id: 'tab1', label: '标签页 1' },
        { id: 'tab2', label: '标签页 2' },
        { id: 'tab3', label: '标签页 3' },
      ])

      const handleClose = (tabId) => {
        const index = tabs.value.findIndex((tab) => tab.id === tabId)
        if (index !== -1) {
          tabs.value.splice(index, 1)

          // 如果关闭的是当前激活的标签页，则激活前一个或后一个标签页
          if (activeTab.value === tabId) {
            if (tabs.value.length > 0) {
              const newIndex = Math.min(index, tabs.value.length - 1)
              activeTab.value = tabs.value[newIndex].id
            }
          }
        }
      }

      return { activeTab, tabs, handleClose }
    },
    template: `
      <VKTabs v-model="activeTab" closable @close="handleClose">
        <VKTabList>
          <VKTab v-for="tab in tabs" :key="tab.id" :value="tab.id">
            {{ tab.label }}
          </VKTab>
        </VKTabList>
        <VKTabPanels>
          <VKTabPanel v-for="tab in tabs" :key="tab.id" :value="tab.id">
            <div class="p-4">{{ tab.label }} 的内容</div>
          </VKTabPanel>
        </VKTabPanels>
      </VKTabs>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const activeTab = ref('tab1')

      return { activeTab }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">全部禁用</h3>
          <VKTabs v-model="activeTab" disabled>
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2">标签页 2</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">部分禁用</h3>
          <VKTabs v-model="activeTab">
            <VKTabList>
              <VKTab value="tab1">标签页 1</VKTab>
              <VKTab value="tab2" disabled>标签页 2 (禁用)</VKTab>
              <VKTab value="tab3">标签页 3</VKTab>
            </VKTabList>
            <VKTabPanels>
              <VKTabPanel value="tab1">
                <div class="p-4">标签页 1 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab2">
                <div class="p-4">标签页 2 的内容</div>
              </VKTabPanel>
              <VKTabPanel value="tab3">
                <div class="p-4">标签页 3 的内容</div>
              </VKTabPanel>
            </VKTabPanels>
          </VKTabs>
        </div>
      </div>
    `,
  }),
}

// 延迟加载内容
export const LazyLoading: Story = {
  render: () => ({
    components: { VKTabs, VKTabList, VKTab, VKTabPanels, VKTabPanel },
    setup() {
      const activeTab = ref('tab1')

      return { activeTab }
    },
    template: `
      <VKTabs v-model="activeTab">
        <VKTabList>
          <VKTab value="tab1">标签页 1</VKTab>
          <VKTab value="tab2">标签页 2</VKTab>
          <VKTab value="tab3">标签页 3</VKTab>
        </VKTabList>
        <VKTabPanels>
          <VKTabPanel value="tab1">
            <div class="p-4">标签页 1 的内容 (总是渲染)</div>
          </VKTabPanel>
          <VKTabPanel value="tab2" lazy>
            <div class="p-4">标签页 2 的内容 (延迟渲染)</div>
          </VKTabPanel>
          <VKTabPanel value="tab3" lazy>
            <div class="p-4">标签页 3 的内容 (延迟渲染)</div>
          </VKTabPanel>
        </VKTabPanels>
      </VKTabs>
    `,
  }),
}
