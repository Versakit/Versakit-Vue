import type { StoryObj } from '@storybook/vue3'
import { VKDivider } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Divider',
  component: VKDivider,
  argTypes: {
    type: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '分割线类型：水平或垂直',
      defaultValue: 'horizontal',
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: '分割线对齐方式（仅在有内容时生效）',
      defaultValue: 'center',
    },
    color: {
      control: 'color',
      description: '分割线颜色',
    },
    thickness: {
      control: 'text',
      description: '分割线粗细',
      defaultValue: 1,
    },
    lineStyle: {
      control: 'radio',
      options: ['solid', 'dashed', 'dotted'],
      description: '分割线样式：实线、虚线等',
      defaultValue: 'solid',
    },
    spacing: {
      control: 'number',
      description: '分割线两侧的间距',
      defaultValue: 0,
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
type Story = StoryObj<typeof VKDivider>

// 基础分割线
export const Default: Story = {
  render: (args) => ({
    components: { VKDivider },
    setup() {
      return { args }
    },
    template: '<div style="padding: 20px;"><VKDivider v-bind="args" /></div>',
  }),
}

// 水平分割线
export const Horizontal: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 24px;">
        <div>上方内容</div>
        <VKDivider />
        <div>下方内容</div>
      </div>
    `,
  }),
}

// 垂直分割线
export const Vertical: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; align-items: center; height: 100px;">
        <div>左侧内容</div>
        <VKDivider type="vertical" style="margin: 0 16px; height: 100%;" />
        <div>右侧内容</div>
      </div>
    `,
  }),
}

// 带文本的分割线
export const WithText: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 24px;">
        <VKDivider>居中文本</VKDivider>
        <VKDivider align="left">左对齐文本</VKDivider>
        <VKDivider align="right">右对齐文本</VKDivider>
      </div>
    `,
  }),
}

// 不同样式的分割线
export const Styles: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 24px;">
        <VKDivider lineStyle="solid">实线</VKDivider>
        <VKDivider lineStyle="dashed">虚线</VKDivider>
        <VKDivider lineStyle="dotted">点线</VKDivider>
      </div>
    `,
  }),
}

// 自定义颜色和粗细
export const CustomAppearance: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 24px;">
        <VKDivider color="#ff4d4f" thickness="2px">红色分割线</VKDivider>
        <VKDivider color="#52c41a" thickness="3px">绿色粗分割线</VKDivider>
        <VKDivider color="#1890ff" thickness="4px" lineStyle="dashed">蓝色虚线</VKDivider>
      </div>
    `,
  }),
}

// 带间距的分割线
export const WithSpacing: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column;">
        <div>上方内容</div>
        <VKDivider spacing={24}>带间距的分割线</VKDivider>
        <div>下方内容</div>
      </div>
    `,
  }),
}

// 无样式模式
export const Unstyled: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 24px;">
        <VKDivider unstyled class="border-t border-gray-300 my-4">无样式模式</VKDivider>
        <VKDivider 
          unstyled 
          :pt="{ 
            root: { class: 'flex items-center w-full' }, 
            line: { class: 'flex-grow border-t border-blue-500' },
            content: { class: 'px-4 text-blue-500 font-bold' }
          }"
        >
          自定义样式
        </VKDivider>
      </div>
    `,
  }),
}

// 组合使用示例
export const Examples: Story = {
  render: () => ({
    components: { VKDivider },
    template: `
      <div style="padding: 20px; display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px;">页面分段</h3>
          <div>第一部分内容</div>
          <VKDivider spacing={16} />
          <div>第二部分内容</div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 16px;">表单分组</h3>
          <div>基本信息</div>
          <VKDivider align="left" color="#1890ff">基本信息</VKDivider>
          <div style="height: 60px;"></div>
          <VKDivider align="left" color="#1890ff">高级设置</VKDivider>
          <div style="height: 60px;"></div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 16px;">内联分割</h3>
          <div style="display: flex; align-items: center;">
            <span>选项一</span>
            <VKDivider type="vertical" style="margin: 0 16px; height: 20px;" />
            <span>选项二</span>
            <VKDivider type="vertical" style="margin: 0 16px; height: 20px;" />
            <span>选项三</span>
          </div>
        </div>
      </div>
    `,
  }),
}
