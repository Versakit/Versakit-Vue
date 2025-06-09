import type { StoryObj } from '@storybook/vue3'
import { VKButtonGroup } from '@versakit/vue'
import { VKButton } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/ButtonGroup',
  component: VKButtonGroup,
  argTypes: {
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '按钮组方向',
      defaultValue: 'horizontal',
    },
    spacing: {
      control: 'radio',
      options: ['default', 'compact', 'none'],
      description: '按钮组间距',
      defaultValue: 'default',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'success',
        'warning',
        'info',
        'error',
        'default',
        'text',
        'outline',
        'ghost',
        undefined,
      ],
      description: '按钮样式变体（将应用于所有子按钮，除非按钮自身定义了变体）',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      description: '按钮尺寸（将应用于所有子按钮，除非按钮自身定义了尺寸）',
    },
    shape: {
      control: 'radio',
      options: ['default', 'circle', 'round', undefined],
      description: '按钮形状（将应用于所有子按钮，除非按钮自身定义了形状）',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用所有按钮',
      defaultValue: false,
    },
    unstyled: {
      control: 'boolean',
      description: '是否为无样式模式',
      defaultValue: false,
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKButtonGroup>

// 基础按钮组
export const Default: Story = {
  render: (args) => ({
    components: { VKButtonGroup, VKButton },
    setup() {
      return { args }
    },
    template: `
      <VKButtonGroup v-bind="args">
        <VKButton>按钮 1</VKButton>
        <VKButton>按钮 2</VKButton>
        <VKButton>按钮 3</VKButton>
      </VKButtonGroup>
    `,
  }),
}

// 水平和垂直方向
export const Directions: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>水平方向</h3>
          <VKButtonGroup direction="horizontal">
            <VKButton>按钮 1</VKButton>
            <VKButton>按钮 2</VKButton>
            <VKButton>按钮 3</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>垂直方向</h3>
          <VKButtonGroup direction="vertical">
            <VKButton>按钮 1</VKButton>
            <VKButton>按钮 2</VKButton>
            <VKButton>按钮 3</VKButton>
          </VKButtonGroup>
        </div>
      </div>
    `,
  }),
}

// 不同间距
export const Spacing: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>默认间距</h3>
          <VKButtonGroup spacing="default">
            <VKButton>按钮 1</VKButton>
            <VKButton>按钮 2</VKButton>
            <VKButton>按钮 3</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>紧凑间距</h3>
          <VKButtonGroup spacing="compact">
            <VKButton>按钮 1</VKButton>
            <VKButton>按钮 2</VKButton>
            <VKButton>按钮 3</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>无间距</h3>
          <VKButtonGroup spacing="none">
            <VKButton>按钮 1</VKButton>
            <VKButton>按钮 2</VKButton>
            <VKButton>按钮 3</VKButton>
          </VKButtonGroup>
        </div>
      </div>
    `,
  }),
}

// 继承样式变体
export const InheritingVariants: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>继承变体</h3>
          <VKButtonGroup variant="success">
            <VKButton>继承成功变体</VKButton>
            <VKButton>继承成功变体</VKButton>
            <VKButton variant="error">自定义错误变体</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>继承尺寸</h3>
          <VKButtonGroup size="sm">
            <VKButton>小按钮</VKButton>
            <VKButton>小按钮</VKButton>
            <VKButton size="lg">大按钮</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>继承形状</h3>
          <VKButtonGroup shape="round">
            <VKButton>圆角按钮</VKButton>
            <VKButton>圆角按钮</VKButton>
            <VKButton shape="default">默认形状</VKButton>
          </VKButtonGroup>
        </div>
      </div>
    `,
  }),
}

// 禁用所有按钮
export const DisabledGroup: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <VKButtonGroup disabled>
        <VKButton>禁用按钮 1</VKButton>
        <VKButton>禁用按钮 2</VKButton>
        <VKButton>禁用按钮 3</VKButton>
      </VKButtonGroup>
    `,
  }),
}

// 分段控件风格
export const SegmentedStyle: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <VKButtonGroup spacing="none">
        <VKButton variant="outline">选项 1</VKButton>
        <VKButton variant="outline">选项 2</VKButton>
        <VKButton variant="outline">选项 3</VKButton>
      </VKButtonGroup>
    `,
  }),
}

// 不同组合
export const Combinations: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>轮廓按钮组</h3>
          <VKButtonGroup variant="outline">
            <VKButton>取消</VKButton>
            <VKButton variant="primary">确认</VKButton>
            <VKButton variant="error">删除</VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>带图标的按钮组</h3>
          <VKButtonGroup>
            <VKButton>
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </template>
              收藏
            </VKButton>
            <VKButton>
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </template>
              查看
            </VKButton>
            <VKButton>
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </template>
              编辑
            </VKButton>
          </VKButtonGroup>
        </div>
        <div>
          <h3>垂直紧凑按钮组</h3>
          <VKButtonGroup direction="vertical" spacing="none">
            <VKButton variant="success">通过</VKButton>
            <VKButton variant="warning">审核</VKButton>
            <VKButton variant="error">驳回</VKButton>
          </VKButtonGroup>
        </div>
      </div>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKButtonGroup, VKButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3>无样式按钮组</h3>
        <VKButtonGroup 
          unstyled 
          style="display: inline-flex; gap: 8px; padding: 8px; background-color: #f0f0f0; border-radius: 8px;"
        >
          <VKButton unstyled style="padding: 8px 16px; border-radius: 4px; background-color: #ffffff; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            自定义按钮 1
          </VKButton>
          <VKButton unstyled style="padding: 8px 16px; border-radius: 4px; background-color: #ffffff; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            自定义按钮 2
          </VKButton>
          <VKButton unstyled style="padding: 8px 16px; border-radius: 4px; background-color: #ffffff; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            自定义按钮 3
          </VKButton>
        </VKButtonGroup>
        
        <h3>使用 PT 自定义元素</h3>
        <VKButtonGroup 
          :pt="{
            root: { class: 'shadow-md rounded-xl p-1 bg-gray-100 dark:bg-gray-800' }
          }"
          spacing="compact"
        >
          <VKButton>按钮 1</VKButton>
          <VKButton>按钮 2</VKButton>
          <VKButton>按钮 3</VKButton>
        </VKButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义按钮组的样式和行为。',
      },
    },
  },
}
