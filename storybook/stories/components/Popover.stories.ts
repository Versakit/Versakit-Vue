import type { StoryObj } from '@storybook/vue3-vite'
import { VKPopover, VKButton } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Popover',
  component: VKPopover,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否显示',
      defaultValue: false,
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      description: '弹出位置',
      defaultValue: 'bottom',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus', 'manual'],
      description: '触发方式',
      defaultValue: 'click',
    },
    title: {
      control: 'text',
      description: '弹出框标题',
    },
    content: {
      control: 'text',
      description: '弹出框内容',
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头',
      defaultValue: true,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    showDelay: {
      control: 'number',
      description: '弹出延迟 (毫秒)',
      defaultValue: 0,
    },
    hideDelay: {
      control: 'number',
      description: '隐藏延迟 (毫秒)',
      defaultValue: 0,
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    width: {
      control: 'text',
      description: '宽度',
    },
    maxWidth: {
      control: 'text',
      description: '最大宽度',
    },
    showClose: {
      control: 'boolean',
      description: '是否显示关闭按钮',
      defaultValue: false,
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: '点击外部是否关闭',
      defaultValue: true,
    },
    closeOnEsc: {
      control: 'boolean',
      description: '按ESC是否关闭',
      defaultValue: true,
    },
    persistent: {
      control: 'boolean',
      description: '是否保持内容挂载',
      defaultValue: false,
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKPopover>

// 基础弹出框
export const Default: Story = {
  render: (args) => ({
    components: { VKPopover, VKButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <VKPopover v-bind="args">
          <VKButton>点击显示弹出框</VKButton>
          <template #content>
            这是一个简单的弹出框内容
          </template>
        </VKPopover>
      </div>
    `,
  }),
  args: {
    placement: 'bottom',
    trigger: 'click',
    arrow: true,
  },
}

// 带标题的弹出框
export const WithTitle: Story = {
  render: (args) => ({
    components: { VKPopover, VKButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <VKPopover v-bind="args">
          <VKButton>带标题的弹出框</VKButton>
          <template #title>
            弹出框标题
          </template>
          <template #content>
            这是一个带标题的弹出框内容
          </template>
        </VKPopover>
      </div>
    `,
  }),
  args: {
    placement: 'bottom',
    trigger: 'click',
    arrow: true,
  },
}

// 不同触发方式
export const TriggerTypes: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 50px; display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;">
        <VKPopover trigger="click">
          <VKButton>点击触发</VKButton>
          <template #content>
            点击触发的弹出框
          </template>
        </VKPopover>

        <VKPopover trigger="hover">
          <VKButton>悬停触发</VKButton>
          <template #content>
            悬停触发的弹出框
          </template>
        </VKPopover>

        <VKPopover trigger="focus">
          <VKButton>聚焦触发</VKButton>
          <template #content>
            聚焦触发的弹出框
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; padding: 100px;">
        <VKPopover placement="top-start">
          <VKButton>上左</VKButton>
          <template #content>
            top-start
          </template>
        </VKPopover>

        <VKPopover placement="top">
          <VKButton>上中</VKButton>
          <template #content>
            top
          </template>
        </VKPopover>

        <VKPopover placement="top-end">
          <VKButton>上右</VKButton>
          <template #content>
            top-end
          </template>
        </VKPopover>

        <VKPopover placement="right-start">
          <VKButton>右上</VKButton>
          <template #content>
            right-start
          </template>
        </VKPopover>

        <VKPopover placement="left-start">
          <VKButton>左上</VKButton>
          <template #content>
            left-start
          </template>
        </VKPopover>

        <div></div>
        <div></div>

        <VKPopover placement="right">
          <VKButton>右中</VKButton>
          <template #content>
            right
          </template>
        </VKPopover>

        <VKPopover placement="left">
          <VKButton>左中</VKButton>
          <template #content>
            left
          </template>
        </VKPopover>

        <div></div>
        <div></div>

        <VKPopover placement="right-end">
          <VKButton>右下</VKButton>
          <template #content>
            right-end
          </template>
        </VKPopover>

        <VKPopover placement="left-end">
          <VKButton>左下</VKButton>
          <template #content>
            left-end
          </template>
        </VKPopover>

        <VKPopover placement="bottom-start">
          <VKButton>下左</VKButton>
          <template #content>
            bottom-start
          </template>
        </VKPopover>

        <VKPopover placement="bottom">
          <VKButton>下中</VKButton>
          <template #content>
            bottom
          </template>
        </VKPopover>

        <VKPopover placement="bottom-end">
          <VKButton>下右</VKButton>
          <template #content>
            bottom-end
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 带关闭按钮
export const WithCloseButton: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <VKPopover showClose>
          <VKButton>带关闭按钮</VKButton>
          <template #title>
            弹出框标题
          </template>
          <template #content>
            这是一个带关闭按钮的弹出框
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 自定义宽度
export const CustomWidth: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; flex-direction: column; gap: 32px; align-items: center;">
        <VKPopover width="300px">
          <VKButton>宽度300px</VKButton>
          <template #title>
            自定义宽度
          </template>
          <template #content>
            这个弹出框的宽度为300px
          </template>
        </VKPopover>

        <VKPopover width="400px">
          <VKButton>宽度400px</VKButton>
          <template #title>
            自定义宽度
          </template>
          <template #content>
            这个弹出框的宽度为400px
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 延迟显示和隐藏
export const DelayShowHide: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; gap: 32px; justify-content: center;">
        <VKPopover trigger="hover" showDelay="500" hideDelay="500">
          <VKButton>悬停延迟500ms</VKButton>
          <template #content>
            显示和隐藏都有500ms的延迟
          </template>
        </VKPopover>

        <VKPopover trigger="hover" showDelay="1000" hideDelay="1000">
          <VKButton>悬停延迟1000ms</VKButton>
          <template #content>
            显示和隐藏都有1000ms的延迟
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 复杂内容
export const ComplexContent: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <VKPopover width="300px">
          <VKButton>复杂内容</VKButton>
          <template #title>
            用户信息
          </template>
          <template #content>
            <div style="display: flex; gap: 16px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #e2e8f0; display: flex; align-items: center; justify-content: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <div style="font-weight: 600;">张三</div>
                <div style="color: #6b7280; font-size: 0.875rem;">前端开发工程师</div>
                <div style="margin-top: 8px; font-size: 0.875rem;">
                  <div>邮箱：zhang@example.com</div>
                  <div>电话：13800138000</div>
                </div>
              </div>
            </div>
            <div style="margin-top: 16px; display: flex; gap: 8px;">
              <VKButton size="sm">查看详情</VKButton>
              <VKButton size="sm" variant="outline">发送消息</VKButton>
            </div>
          </template>
        </VKPopover>
      </div>
    `,
  }),
}

// 手动控制
export const ManualControl: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <VKPopover trigger="manual" v-model="visible" ref="popoverRef">
          <VKButton>目标元素</VKButton>
          <template #content>
            手动控制的弹出框
          </template>
        </VKPopover>
        
        <div style="display: flex; gap: 8px;">
          <VKButton @click="showPopover">显示</VKButton>
          <VKButton @click="hidePopover">隐藏</VKButton>
          <VKButton @click="togglePopover">切换</VKButton>
        </div>
      </div>
    `,
    setup() {
      const { ref } = Vue
      const visible = ref(false)
      const popoverRef = ref(null)

      const showPopover = () => {
        visible.value = true
      }

      const hidePopover = () => {
        visible.value = false
      }

      const togglePopover = () => {
        visible.value = !visible.value
      }

      return {
        visible,
        popoverRef,
        showPopover,
        hidePopover,
        togglePopover,
      }
    },
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKPopover, VKButton },
    template: `
      <div style="padding: 100px; display: flex; gap: 32px; justify-content: center;">
        <VKPopover>
          <VKButton>启用</VKButton>
          <template #content>
            正常的弹出框
          </template>
        </VKPopover>

        <VKPopover disabled>
          <VKButton>禁用</VKButton>
          <template #content>
            禁用的弹出框
          </template>
        </VKPopover>
      </div>
    `,
  }),
}
