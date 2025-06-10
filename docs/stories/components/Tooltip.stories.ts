import type { StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { VKTooltip, VKButton } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Tooltip',
  component: VKTooltip,
  argTypes: {
    content: {
      control: 'text',
      description: '提示框内容',
      defaultValue: '这是一个提示',
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
      description: '提示框位置',
      defaultValue: 'top',
    },
    trigger: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'manual'],
      description: '触发方式',
      defaultValue: 'hover',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark', 'auto'],
      description: '主题',
      defaultValue: 'auto',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'default'],
      description: '变体样式',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '尺寸',
      defaultValue: 'md',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头',
      defaultValue: true,
    },
    interactive: {
      control: 'boolean',
      description: '是否可交互',
      defaultValue: false,
    },
    showDelay: {
      control: 'number',
      description: '显示延迟(毫秒)',
      defaultValue: 200,
    },
    hideDelay: {
      control: 'number',
      description: '隐藏延迟(毫秒)',
      defaultValue: 200,
    },
    maxWidth: {
      control: 'text',
      description: '最大宽度',
      defaultValue: '300px',
    },
    zIndex: {
      control: 'number',
      description: 'z-index值',
      defaultValue: 1000,
    },
    offset: {
      control: 'number',
      description: '偏移量',
      defaultValue: 8,
    },
    modelValue: {
      control: 'boolean',
      description: '是否显示(用于手动控制)',
    },
    ariaLabel: {
      control: 'text',
      description: '无障碍标签',
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
type Story = StoryObj<typeof VKTooltip>

// 基础提示框
export const Default: Story = {
  render: (args) => ({
    components: { VKTooltip, VKButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 50px; display: flex; justify-content: center;">
        <VKTooltip v-bind="args">
          <VKButton>悬停查看提示</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 不同颜色变体
export const Variants: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 50px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
        <VKTooltip content="主要提示" variant="primary">
          <VKButton variant="primary">Primary</VKButton>
        </VKTooltip>
        
        <VKTooltip content="成功提示" variant="success">
          <VKButton variant="success">Success</VKButton>
        </VKTooltip>
        
        <VKTooltip content="警告提示" variant="warning">
          <VKButton variant="warning">Warning</VKButton>
        </VKTooltip>
        
        <VKTooltip content="错误提示" variant="error">
          <VKButton variant="error">Error</VKButton>
        </VKTooltip>
        
        <VKTooltip content="信息提示" variant="info">
          <VKButton variant="info">Info</VKButton>
        </VKTooltip>
        
        <VKTooltip content="默认提示" variant="default">
          <VKButton variant="default">Default</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '展示不同颜色变体的提示框，可以根据不同场景选择合适的颜色。',
      },
    },
  },
}

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 100px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; justify-items: center;">
        <VKTooltip content="左上方提示" placement="top-start">
          <VKButton>上左</VKButton>
        </VKTooltip>
        
        <VKTooltip content="上方提示" placement="top">
          <VKButton>上方</VKButton>
        </VKTooltip>
        
        <VKTooltip content="右上方提示" placement="top-end">
          <VKButton>上右</VKButton>
        </VKTooltip>
        
        <VKTooltip content="左侧提示" placement="left">
          <VKButton>左侧</VKButton>
        </VKTooltip>
        
        <div></div>
        
        <VKTooltip content="右侧提示" placement="right">
          <VKButton>右侧</VKButton>
        </VKTooltip>
        
        <VKTooltip content="左下方提示" placement="bottom-start">
          <VKButton>下左</VKButton>
        </VKTooltip>
        
        <VKTooltip content="下方提示" placement="bottom">
          <VKButton>下方</VKButton>
        </VKTooltip>
        
        <VKTooltip content="右下方提示" placement="bottom-end">
          <VKButton>下右</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 不同触发方式
export const Triggers: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="display: flex; gap: 20px; padding: 50px; justify-content: center;">
        <VKTooltip content="悬停时显示" trigger="hover">
          <VKButton>悬停</VKButton>
        </VKTooltip>
        
        <VKTooltip content="点击时显示" trigger="click">
          <VKButton>点击</VKButton>
        </VKTooltip>
        
        <VKTooltip content="聚焦时显示" trigger="focus">
          <VKButton>聚焦</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 不同主题
export const Themes: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="display: flex; gap: 20px; padding: 50px; justify-content: center;">
        <VKTooltip content="浅色主题" theme="light">
          <VKButton>浅色</VKButton>
        </VKTooltip>
        
        <VKTooltip content="深色主题" theme="dark">
          <VKButton>深色</VKButton>
        </VKTooltip>
        
        <VKTooltip content="自动主题（跟随系统）" theme="auto">
          <VKButton>自动</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="display: flex; gap: 20px; padding: 50px; justify-content: center;">
        <VKTooltip content="超小提示" size="xs">
          <VKButton size="xs">XS</VKButton>
        </VKTooltip>
        
        <VKTooltip content="小提示" size="sm">
          <VKButton size="sm">SM</VKButton>
        </VKTooltip>
        
        <VKTooltip content="中等提示" size="md">
          <VKButton size="md">MD</VKButton>
        </VKTooltip>
        
        <VKTooltip content="大提示" size="lg">
          <VKButton size="lg">LG</VKButton>
        </VKTooltip>
        
        <VKTooltip content="超大提示" size="xl">
          <VKButton size="xl">XL</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 主题和变体组合
export const ThemeAndVariant: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px; padding: 50px;">
        <div>
          <h3>浅色主题 + 不同变体</h3>
          <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
            <VKTooltip content="Primary" theme="light" variant="primary">
              <VKButton>Primary</VKButton>
            </VKTooltip>
            
            <VKTooltip content="Success" theme="light" variant="success">
              <VKButton>Success</VKButton>
            </VKTooltip>
            
            <VKTooltip content="Error" theme="light" variant="error">
              <VKButton>Error</VKButton>
            </VKTooltip>
          </div>
        </div>
        
        <div>
          <h3>深色主题 + 不同变体</h3>
          <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
            <VKTooltip content="Primary" theme="dark" variant="primary">
              <VKButton>Primary</VKButton>
            </VKTooltip>
            
            <VKTooltip content="Success" theme="dark" variant="success">
              <VKButton>Success</VKButton>
            </VKTooltip>
            
            <VKTooltip content="Error" theme="dark" variant="error">
              <VKButton>Error</VKButton>
            </VKTooltip>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '展示主题和变体组合的效果，可以根据需要选择不同的组合。',
      },
    },
  },
}

// 无箭头
export const WithoutArrow: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 50px; display: flex; justify-content: center;">
        <VKTooltip content="无箭头提示" :arrow="false">
          <VKButton>无箭头</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 可交互提示
export const Interactive: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 50px; display: flex; justify-content: center;">
        <VKTooltip :interactive="true">
          <template #default>
            <VKButton>可交互提示</VKButton>
          </template>
          
          <template #content>
            <div style="padding: 5px;">
              <p>这是一个可交互的提示</p>
              <VKButton size="sm">点击我</VKButton>
            </div>
          </template>
        </VKTooltip>
      </div>
    `,
  }),
}

// 自定义内容
export const CustomContent: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 50px; display: flex; justify-content: center;">
        <VKTooltip>
          <template #default>
            <VKButton>自定义内容</VKButton>
          </template>
          
          <template #content>
            <div style="padding: 5px;">
              <h4 style="margin: 0 0 8px 0;">自定义标题</h4>
              <p style="margin: 0;">这是自定义内容，可以包含<strong>富文本</strong>和<a href="#" style="color: inherit;">链接</a>。</p>
            </div>
          </template>
        </VKTooltip>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="padding: 50px; display: flex; justify-content: center;">
        <VKTooltip content="这个提示不会显示" :disabled="true">
          <VKButton>禁用提示</VKButton>
        </VKTooltip>
      </div>
    `,
  }),
}

// 手动控制
export const ManualControl: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    setup() {
      const isOpen = ref(false)

      const toggleTooltip = () => {
        isOpen.value = !isOpen.value
      }

      return { isOpen, toggleTooltip }
    },
    template: `
      <div style="padding: 50px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <VKTooltip content="手动控制的提示" trigger="manual" v-model="isOpen">
          <VKButton>悬停无效</VKButton>
        </VKTooltip>
        
        <VKButton @click="toggleTooltip">{{ isOpen ? '隐藏' : '显示' }}提示</VKButton>
      </div>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKTooltip, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 50px; padding: 50px;">
        <div>
          <h3>无样式提示</h3>
          <div style="display: flex; justify-content: center; padding-top: 20px;">
            <VKTooltip 
              unstyled
              placement="top"
            >
              <template #default>
                <VKButton>无样式提示</VKButton>
              </template>
              
              <template #content>
                <div style="background: linear-gradient(45deg, #42b883, #35495e); color: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                  自定义样式提示
                </div>
              </template>
            </VKTooltip>
          </div>
        </div>
        
        <div>
          <h3>使用 PT 自定义元素</h3>
          <div style="display: flex; justify-content: center; padding-top: 20px;">
            <VKTooltip 
              content="自定义样式提示"
              :pt="{
                content: { class: 'bg-blue-500 text-white shadow-xl rounded-xl' },
                arrow: { class: 'bg-blue-500 border-blue-500' }
              }"
            >
              <VKButton>PT 自定义</VKButton>
            </VKTooltip>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义提示框的样式和行为。',
      },
    },
  },
}
