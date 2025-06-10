import type { StoryObj } from '@storybook/vue3'
import { VKBreadcrumb, VKBreadcrumbItem } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Breadcrumb',
  component: VKBreadcrumb,
  argTypes: {
    separator: {
      control: 'text',
      description: '分隔符',
      defaultValue: '/',
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
type Story = StoryObj<typeof VKBreadcrumb>

// 基础面包屑
export const Default: Story = {
  render: (args) => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <VKBreadcrumb v-bind="args">
        <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/products">产品</VKBreadcrumbItem>
        <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}

// 自定义分隔符
export const CustomSeparator: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKBreadcrumb separator=">">
          <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
          <VKBreadcrumbItem href="/products">产品</VKBreadcrumbItem>
          <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
        </VKBreadcrumb>
        
        <VKBreadcrumb separator="-">
          <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
          <VKBreadcrumbItem href="/products">产品</VKBreadcrumbItem>
          <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
        </VKBreadcrumb>
        
        <VKBreadcrumb separator="•">
          <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
          <VKBreadcrumbItem href="/products">产品</VKBreadcrumbItem>
          <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
        </VKBreadcrumb>
      </div>
    `,
  }),
}

// 自定义图标分隔符
export const CustomIconSeparator: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <VKBreadcrumb>
        <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/products">产品</VKBreadcrumbItem>
        <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
        <template #separator>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </template>
      </VKBreadcrumb>
    `,
  }),
}

// 禁用项
export const DisabledItem: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <VKBreadcrumb>
        <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
        <VKBreadcrumbItem disabled>产品</VKBreadcrumbItem>
        <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}

// 带图标的面包屑
export const WithIcons: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <VKBreadcrumb>
        <VKBreadcrumbItem href="/">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </template>
          首页
        </VKBreadcrumbItem>
        <VKBreadcrumbItem href="/products">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </template>
          产品
        </VKBreadcrumbItem>
        <VKBreadcrumbItem active>
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </template>
          产品详情
        </VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}

// 较长的路径
export const LongPath: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <VKBreadcrumb>
        <VKBreadcrumbItem href="/">首页</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/category">分类</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/category/electronics">电子产品</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/category/electronics/computers">电脑</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/category/electronics/computers/laptops">笔记本电脑</VKBreadcrumbItem>
        <VKBreadcrumbItem active>MacBook Pro</VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}

// 点击事件
export const WithClickEvents: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    setup() {
      const handleClick = (e) => {
        alert('面包屑项被点击')
        e.preventDefault()
      }

      return { handleClick }
    },
    template: `
      <VKBreadcrumb>
        <VKBreadcrumbItem href="/" @click="handleClick">首页</VKBreadcrumbItem>
        <VKBreadcrumbItem href="/products" @click="handleClick">产品</VKBreadcrumbItem>
        <VKBreadcrumbItem active>产品详情</VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  render: () => ({
    components: { VKBreadcrumb, VKBreadcrumbItem },
    template: `
      <VKBreadcrumb unstyled>
        <VKBreadcrumbItem href="/" class="text-blue-500 hover:underline">首页</VKBreadcrumbItem>
        <span class="mx-2">/</span>
        <VKBreadcrumbItem href="/products" class="text-blue-500 hover:underline">产品</VKBreadcrumbItem>
        <span class="mx-2">/</span>
        <VKBreadcrumbItem active class="text-gray-700 font-bold">产品详情</VKBreadcrumbItem>
      </VKBreadcrumb>
    `,
  }),
}
