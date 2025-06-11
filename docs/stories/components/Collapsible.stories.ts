import type { StoryObj } from '@storybook/vue3'
import { VKCollapsible } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Collapsible',
  component: VKCollapsible,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否展开',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    duration: {
      control: 'number',
      description: '折叠动画持续时间(毫秒)',
      defaultValue: 300,
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
  subcomponents: {
    CollapsibleTrigger: VKCollapsible.Trigger,
    CollapsibleContent: VKCollapsible.Content,
  },
}

export default meta
type Story = StoryObj<typeof VKCollapsible>

// 基础折叠面板
export const Default: Story = {
  render: (args) => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <VKCollapsible v-bind="args" v-model="open">
        <CollapsibleTrigger />
        <CollapsibleContent>
          <div style="padding: 10px 0;">
            这是折叠面板的内容区域，可以放置任何元素。
            <br />
            点击上方的触发器可以展开或收起此内容。
          </div>
        </CollapsibleContent>
      </VKCollapsible>
    `,
  }),
  args: {
    duration: 300,
  },
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">正常状态</p>
          <VKCollapsible v-model="open">
            <CollapsibleTrigger />
            <CollapsibleContent>
              <div style="padding: 10px 0;">
                这是可以操作的折叠面板
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
        <div>
          <p style="margin-bottom: 8px;">禁用状态</p>
          <VKCollapsible v-model="open" disabled>
            <CollapsibleTrigger />
            <CollapsibleContent>
              <div style="padding: 10px 0;">
                这是禁用状态的折叠面板，无法进行操作
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
      </div>
    `,
  }),
}

// 不同动画持续时间
export const AnimationDuration: Story = {
  render: () => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const open1 = ref(false)
      const open2 = ref(false)
      const open3 = ref(false)
      return { open1, open2, open3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">快速 (150ms)</p>
          <VKCollapsible v-model="open1" :duration="150">
            <CollapsibleTrigger />
            <CollapsibleContent>
              <div style="padding: 10px 0;">
                这是使用快速动画的折叠面板
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
        <div>
          <p style="margin-bottom: 8px;">默认 (300ms)</p>
          <VKCollapsible v-model="open2" :duration="300">
            <CollapsibleTrigger />
            <CollapsibleContent>
              <div style="padding: 10px 0;">
                这是使用默认动画速度的折叠面板
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
        <div>
          <p style="margin-bottom: 8px;">缓慢 (600ms)</p>
          <VKCollapsible v-model="open3" :duration="600">
            <CollapsibleTrigger />
            <CollapsibleContent>
              <div style="padding: 10px 0;">
                这是使用缓慢动画的折叠面板
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
      </div>
    `,
  }),
}

// 自定义触发器
export const CustomTrigger: Story = {
  render: () => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <VKCollapsible v-model="open">
        <CollapsibleTrigger>
          <template #default="{ open, disabled }">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>{{ open ? '隐藏详情' : '查看详情' }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </template>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div style="padding: 10px 0;">
            这是一个使用自定义触发器的折叠面板。
            <br />
            您可以完全自定义触发器的外观和行为。
          </div>
        </CollapsibleContent>
      </VKCollapsible>
    `,
  }),
}

// 多个折叠面板组合
export const Multiple: Story = {
  render: () => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const openItems = ref([false, false, false])

      const toggleItem = (index: number) => {
        openItems.value[index] = !openItems.value[index]
      }

      return { openItems, toggleItem }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
        <div v-for="(open, index) in openItems" :key="index">
          <VKCollapsible :model-value="open" @update:model-value="toggleItem(index)">
            <CollapsibleTrigger style="border-bottom: 1px solid #eaeaea;">
              <template #default="{ open }">
                问题 {{ index + 1 }}: 这是常见问题 {{ index + 1 }}
              </template>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div style="padding: 16px;">
                这是问题 {{ index + 1 }} 的详细回答内容。可以包含任何类型的内容。
              </div>
            </CollapsibleContent>
          </VKCollapsible>
        </div>
      </div>
    `,
  }),
}

// 事件处理
export const Events: Story = {
  render: () => ({
    components: {
      VKCollapsible,
      CollapsibleTrigger: VKCollapsible.Trigger,
      CollapsibleContent: VKCollapsible.Content,
    },
    setup() {
      const open = ref(false)
      const log = ref<string[]>([])

      const handleToggle = (value: boolean) => {
        log.value.push(
          `折叠面板已${value ? '展开' : '收起'} - ${new Date().toLocaleTimeString()}`,
        )
        // 保持日志不超过5条
        if (log.value.length > 5) {
          log.value.shift()
        }
      }

      return { open, log, handleToggle }
    },
    template: `
      <div>
        <VKCollapsible v-model="open" @toggle="handleToggle">
          <CollapsibleTrigger />
          <CollapsibleContent>
            <div style="padding: 10px 0;">
              这是折叠面板的内容区域。
              <br />
              每次展开或收起时，都会触发事件并记录在下方。
            </div>
          </CollapsibleContent>
        </VKCollapsible>
        
        <div style="margin-top: 24px; padding: 16px; background-color: #f5f5f5; border-radius: 8px;">
          <h3 style="margin-top: 0; margin-bottom: 8px;">事件日志:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li v-for="(item, index) in log" :key="index">{{ item }}</li>
          </ul>
          <p v-if="log.length === 0" style="margin: 0; color: #888;">尚无事件</p>
        </div>
      </div>
    `,
  }),
}
