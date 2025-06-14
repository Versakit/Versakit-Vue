import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { VKCard } from '@versakit/vue'
import '@versakit/vue/style'

const meta: Meta<typeof VKCard> = {
  title: 'Components/Card',
  component: VKCard,
  argTypes: {
    title: {
      control: 'text',
      description: '卡片标题',
    },
    subtitle: {
      control: 'text',
      description: '卡片副标题',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'info', 'error'],
      description: '卡片变体样式',
      defaultValue: 'default',
    },
    bordered: {
      control: 'boolean',
      description: '是否有边框',
      defaultValue: true,
    },
    shadow: {
      control: 'boolean',
      description: '是否有阴影',
      defaultValue: false,
    },
    collapsible: {
      control: 'boolean',
      description: '是否可折叠',
      defaultValue: false,
    },
    defaultCollapsed: {
      control: 'boolean',
      description: '是否默认折叠',
      defaultValue: false,
    },
    radius: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: '圆角大小',
      defaultValue: 'md',
    },
    hoverable: {
      control: 'boolean',
      description: '是否悬浮效果',
      defaultValue: false,
    },
    withFooter: {
      control: 'boolean',
      description: '是否有脚注',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKCard>

// 基础卡片
export const Default: Story = {
  render: (args) => ({
    components: { VKCard },
    setup() {
      return { args }
    },
    template: `
      <VKCard v-bind="args">
        <p>这是一个基础卡片的内容区域。您可以在这里放置任何内容，包括文本、图片、列表等。</p>
      </VKCard>
    `,
  }),
}

// 带标题
export const WithTitle: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCard title="卡片标题">
          <p>这是一个带标题的卡片内容。</p>
        </VKCard>
        
        <VKCard title="卡片标题" subtitle="这是卡片的副标题">
          <p>这是一个带标题和副标题的卡片内容。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCard title="默认卡片" variant="default">
          <p>这是默认样式的卡片。</p>
        </VKCard>
        
        <VKCard title="主要卡片" variant="primary">
          <p>这是主要样式的卡片。</p>
        </VKCard>
        
        <VKCard title="成功卡片" variant="success">
          <p>这是成功样式的卡片。</p>
        </VKCard>
        
        <VKCard title="警告卡片" variant="warning">
          <p>这是警告样式的卡片。</p>
        </VKCard>
        
        <VKCard title="信息卡片" variant="info">
          <p>这是信息样式的卡片。</p>
        </VKCard>
        
        <VKCard title="错误卡片" variant="error">
          <p>这是错误样式的卡片。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 阴影效果
export const WithShadow: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCard title="带阴影的卡片" shadow>
          <p>这是一个带阴影效果的卡片。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 可折叠
export const Collapsible: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCard title="可折叠卡片" collapsible>
          <p>这是一个可折叠卡片的内容，点击右上角按钮可以折叠/展开内容。</p>
        </VKCard>
        
        <VKCard title="默认折叠卡片" collapsible defaultCollapsed>
          <p>这是一个默认处于折叠状态的卡片。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 不同圆角
export const BorderRadius: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCard title="无圆角" radius="none">
          <p>这是一个无圆角的卡片。</p>
        </VKCard>
        
        <VKCard title="小圆角" radius="sm">
          <p>这是一个小圆角的卡片。</p>
        </VKCard>
        
        <VKCard title="中等圆角" radius="md">
          <p>这是一个中等圆角的卡片。</p>
        </VKCard>
        
        <VKCard title="大圆角" radius="lg">
          <p>这是一个大圆角的卡片。</p>
        </VKCard>
        
        <VKCard title="特大圆角" radius="xl">
          <p>这是一个特大圆角的卡片。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 悬浮效果
export const Hoverable: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <div style="display: flex; gap: 16px;">
        <VKCard title="悬浮效果" hoverable style="width: 250px;">
          <p>将鼠标悬停在此卡片上查看效果。</p>
        </VKCard>
        
        <VKCard title="悬浮效果" hoverable shadow style="width: 250px;">
          <p>带阴影的悬浮卡片效果。</p>
        </VKCard>
      </div>
    `,
  }),
}

// 卡片脚注
export const WithFooter: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <VKCard title="带脚注的卡片" withFooter>
        <p>这是卡片的主要内容区域。</p>
        
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 8px;">
            <button style="padding: 6px 12px; background: #f0f0f0; border: none; border-radius: 4px; cursor: pointer;">取消</button>
            <button style="padding: 6px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">确定</button>
          </div>
        </template>
      </VKCard>
    `,
  }),
}

// 完整示例
export const Complete: Story = {
  render: () => ({
    components: { VKCard },
    template: `
      <VKCard 
        title="完整功能卡片" 
        subtitle="这是一个展示完整功能的卡片示例"
        variant="primary"
        shadow
        hoverable
        withFooter
        collapsible
      >
        <div style="padding: 16px 0;">
          <p>这是卡片的主要内容区域，展示了卡片的完整功能。</p>
          <p>包括：标题、副标题、主题颜色、阴影、悬浮效果、可折叠、脚注等。</p>
          <p>您可以根据需要组合使用这些功能。</p>
        </div>
        
        <template #header>
          <div style="margin-top: 8px;">
            <p>这是通过插槽添加的自定义头部内容</p>
          </div>
        </template>
        
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 8px;">
            <button style="padding: 6px 12px; background: #f0f0f0; border: none; border-radius: 4px; cursor: pointer;">取消</button>
            <button style="padding: 6px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">确定</button>
          </div>
        </template>
      </VKCard>
    `,
  }),
}
