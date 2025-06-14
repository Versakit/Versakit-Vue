import type { StoryObj } from '@storybook/vue3-vite'
import { VKTab, VKTabItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Tabs',
  component: VKTab,
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
type Story = StoryObj<typeof VKTab>

// 基础标签页
export const Default: Story = {
  render: (args) => ({
    components: { VKTab, VKTabItem },
    setup() {
      const activeTab = ref('tab1')
      return { args, activeTab }
    },
    template: `
      <VKTab v-model="activeTab" v-bind="args">
        <VKTabItem value="tab1">
          <template #title>标签页 1</template>
          <div class="p-4">标签页 1 的内容</div>
        </VKTabItem>
        <VKTabItem value="tab2">
          <template #title>标签页 2</template>
          <div class="p-4">标签页 2 的内容</div>
        </VKTabItem>
        <VKTabItem value="tab3">
          <template #title>标签页 3</template>
          <div class="p-4">标签页 3 的内容</div>
        </VKTabItem>
      </VKTab>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
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
          <VKTab v-model="lineTab" variant="line">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">胶囊风格 (Pill)</h3>
          <VKTab v-model="pillTab" variant="pill">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">盒子风格 (Boxed)</h3>
          <VKTab v-model="boxedTab" variant="boxed">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">柔和风格 (Soft)</h3>
          <VKTab v-model="softTab" variant="soft">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
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
          <VKTab v-model="smallTab" size="sm">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">中尺寸 (Medium)</h3>
          <VKTab v-model="mediumTab" size="md">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">大尺寸 (Large)</h3>
          <VKTab v-model="largeTab" size="lg">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>
      </div>
    `,
  }),
}

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
    setup() {
      const topTab = ref('tab1')
      const bottomTab = ref('tab1')
      const leftTab = ref('tab1')
      const rightTab = ref('tab1')

      return { topTab, bottomTab, leftTab, rightTab }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">顶部位置 (Top)</h3>
          <VKTab v-model="topTab" placement="top">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">底部位置 (Bottom)</h3>
          <VKTab v-model="bottomTab" placement="bottom">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">左侧位置 (Left)</h3>
          <VKTab v-model="leftTab" placement="left">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">右侧位置 (Right)</h3>
          <VKTab v-model="rightTab" placement="right">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>
      </div>
    `,
  }),
}

// 可关闭标签页
export const Closable: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
    setup() {
      const activeTab = ref('tab1')
      const tabs = ref([
        { id: 'tab1', title: '标签页 1', content: '标签页 1 的内容' },
        { id: 'tab2', title: '标签页 2', content: '标签页 2 的内容' },
        { id: 'tab3', title: '标签页 3', content: '标签页 3 的内容' },
      ])

      const handleClose = (tabId) => {
        const index = tabs.value.findIndex((tab) => tab.id === tabId)
        if (index !== -1) {
          tabs.value.splice(index, 1)

          // 如果关闭的是当前激活的标签页，则激活前一个或后一个标签页
          if (activeTab.value === tabId) {
            if (tabs.value.length > 0) {
              activeTab.value =
                tabs.value[Math.min(index, tabs.value.length - 1)].id
            }
          }
        }
      }

      return { activeTab, tabs, handleClose }
    },
    template: `
      <div>
        <h3 class="text-lg font-medium mb-2">可关闭标签页</h3>
        <VKTab v-model="activeTab" closable @close="handleClose">
          <VKTabItem v-for="tab in tabs" :key="tab.id" :value="tab.id">
            <template #title>{{ tab.title }}</template>
            <div class="p-4">{{ tab.content }}</div>
          </VKTabItem>
        </VKTab>
      </div>
    `,
  }),
}

// 禁用标签页
export const Disabled: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
    setup() {
      const activeTab = ref('tab1')

      return { activeTab }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">禁用单个标签页</h3>
          <VKTab v-model="activeTab">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2" disabled>
              <template #title>标签页 2 (禁用)</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">禁用所有标签页</h3>
          <VKTab v-model="activeTab" disabled>
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">标签页 1 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">标签页 2 的内容</div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">标签页 3 的内容</div>
            </VKTabItem>
          </VKTab>
        </div>
      </div>
    `,
  }),
}

// 带图标的标签页
export const WithIcons: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
    setup() {
      const activeTab = ref('tab1')

      return { activeTab }
    },
    template: `
      <div>
        <h3 class="text-lg font-medium mb-2">带图标的标签页</h3>
        <VKTab v-model="activeTab">
          <VKTabItem value="tab1">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </template>
            <template #title>首页</template>
            <div class="p-4">首页内容</div>
          </VKTabItem>
          <VKTabItem value="tab2">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </template>
            <template #title>用户</template>
            <div class="p-4">用户内容</div>
          </VKTabItem>
          <VKTabItem value="tab3">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </template>
            <template #title>设置</template>
            <div class="p-4">设置内容</div>
          </VKTabItem>
        </VKTab>
      </div>
    `,
  }),
}

// 懒加载标签页内容
export const LazyLoading: Story = {
  render: () => ({
    components: { VKTab, VKTabItem },
    setup() {
      const activeTab = ref('tab1')
      const loadTimes = ref({})

      const getLoadTime = (tabId) => {
        if (!loadTimes.value[tabId]) {
          loadTimes.value[tabId] = new Date().toLocaleTimeString()
        }
        return loadTimes.value[tabId]
      }

      return { activeTab, getLoadTime }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-medium mb-2">默认加载 (非懒加载)</h3>
          <p class="text-sm text-gray-500 mb-2">所有标签页内容在组件挂载时就会渲染</p>
          <VKTab v-model="activeTab">
            <VKTabItem value="tab1">
              <template #title>标签页 1</template>
              <div class="p-4">
                <p>标签页 1 的内容</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab1') }}</p>
              </div>
            </VKTabItem>
            <VKTabItem value="tab2">
              <template #title>标签页 2</template>
              <div class="p-4">
                <p>标签页 2 的内容</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab2') }}</p>
              </div>
            </VKTabItem>
            <VKTabItem value="tab3">
              <template #title>标签页 3</template>
              <div class="p-4">
                <p>标签页 3 的内容</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab3') }}</p>
              </div>
            </VKTabItem>
          </VKTab>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-2">懒加载</h3>
          <p class="text-sm text-gray-500 mb-2">标签页内容只有在激活时才会渲染</p>
          <VKTab v-model="activeTab">
            <VKTabItem value="tab4" lazy>
              <template #title>标签页 4</template>
              <div class="p-4">
                <p>标签页 4 的内容 (懒加载)</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab4') }}</p>
              </div>
            </VKTabItem>
            <VKTabItem value="tab5" lazy>
              <template #title>标签页 5</template>
              <div class="p-4">
                <p>标签页 5 的内容 (懒加载)</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab5') }}</p>
              </div>
            </VKTabItem>
            <VKTabItem value="tab6" lazy>
              <template #title>标签页 6</template>
              <div class="p-4">
                <p>标签页 6 的内容 (懒加载)</p>
                <p class="text-sm text-gray-500">加载时间: {{ getLoadTime('tab6') }}</p>
              </div>
            </VKTabItem>
          </VKTab>
        </div>
      </div>
    `,
  }),
}
