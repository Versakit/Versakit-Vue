import type { StoryObj } from '@storybook/vue3-vite'
import { VKRate } from '@versakit/vue'
import '@versakit/vue/style'

const meta = {
  title: 'Components/Rate',
  component: VKRate,
  argTypes: {
    modelValue: {
      control: 'number',
      description: '当前评分值',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: '最大评分值',
      defaultValue: 5,
    },
    allowHalf: {
      control: 'boolean',
      description: '是否允许半选',
      defaultValue: false,
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '评分图标尺寸',
      defaultValue: 'md',
    },
    showText: {
      control: 'boolean',
      description: '是否显示辅助文字',
      defaultValue: false,
    },
    texts: {
      control: 'array',
      description: '评分提示文字数组',
    },
    voidColor: {
      control: 'color',
      description: '未选中时的颜色',
    },
    activeColor: {
      control: 'color',
      description: '选中时的颜色',
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof VKRate>

// 基础评分
export const Default: Story = {
  render: (args) => ({
    components: { VKRate },
    setup() {
      return { args }
    },
    template: '<VKRate v-bind="args" />',
  }),
  args: {
    modelValue: 3,
  },
}

// 允许半星
export const AllowHalf: Story = {
  render: (args) => ({
    components: { VKRate },
    setup() {
      return { args }
    },
    template: '<VKRate v-bind="args" />',
  }),
  args: {
    modelValue: 2.5,
    allowHalf: true,
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKRate },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>小尺寸</p>
          <VKRate :model-value="3" size="sm" />
        </div>
        <div>
          <p>中尺寸</p>
          <VKRate :model-value="3" size="md" />
        </div>
        <div>
          <p>大尺寸</p>
          <VKRate :model-value="3" size="lg" />
        </div>
      </div>
    `,
  }),
}

// 自定义颜色
export const CustomColors: Story = {
  render: () => ({
    components: { VKRate },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKRate :model-value="3" active-color="#f97316" void-color="#d1d5db" />
      </div>
    `,
  }),
}

// 显示辅助文字
export const WithText: Story = {
  render: () => ({
    components: { VKRate },
    setup() {
      return {
        texts: ['极差', '失望', '一般', '满意', '惊喜'],
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKRate :model-value="3" :texts="texts" :show-text="true" />
      </div>
    `,
  }),
}

// 只读和禁用状态
export const ReadonlyAndDisabled: Story = {
  render: () => ({
    components: { VKRate },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>只读状态</p>
          <VKRate :model-value="3" readonly />
        </div>
        <div>
          <p>禁用状态</p>
          <VKRate :model-value="3" disabled />
        </div>
      </div>
    `,
  }),
}

// 不同最大值
export const DifferentMax: Story = {
  render: () => ({
    components: { VKRate },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <p>3星最大值</p>
          <VKRate :model-value="2" :max="3" />
        </div>
        <div>
          <p>10星最大值</p>
          <VKRate :model-value="7" :max="10" />
        </div>
      </div>
    `,
  }),
}
