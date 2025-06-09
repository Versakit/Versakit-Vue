import type { StoryObj } from '@storybook/vue3'
import { VKTextarea } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Textarea',
  component: VKTextarea,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '文本域的值',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      description: '占位符',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
      defaultValue: false,
    },
    maxLength: {
      control: 'number',
      description: '最大输入长度',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '文本域尺寸',
      defaultValue: 'md',
    },
    status: {
      control: 'radio',
      options: ['default', 'error', 'success'],
      description: '状态',
      defaultValue: 'default',
    },
    autoResize: {
      control: 'boolean',
      description: '自动调整高度',
      defaultValue: false,
    },
    rows: {
      control: 'number',
      description: '行数',
      defaultValue: 3,
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
type Story = StoryObj<typeof VKTextarea>

// 基础文本域
export const Default: Story = {
  render: (args) => ({
    components: { VKTextarea },
    setup() {
      return { args }
    },
    template: '<VKTextarea v-bind="args" />',
  }),
  args: {
    placeholder: '请输入内容...',
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea size="sm" placeholder="小尺寸文本域" />
        <VKTextarea size="md" placeholder="中尺寸文本域" />
        <VKTextarea size="lg" placeholder="大尺寸文本域" />
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea status="default" placeholder="默认状态" />
        <VKTextarea status="error" placeholder="错误状态" modelValue="这是一个错误信息" />
        <VKTextarea status="success" placeholder="成功状态" modelValue="提交成功" />
      </div>
    `,
  }),
}

// 禁用和只读状态
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea disabled placeholder="禁用状态" />
        <VKTextarea readonly modelValue="这是只读内容，不可编辑" placeholder="只读状态" />
      </div>
    `,
  }),
}

// 字数限制
export const MaxLength: Story = {
  render: () => ({
    components: { VKTextarea },
    setup() {
      const text = ref('这是一段示例文字，演示字数限制功能。')
      return { text }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea v-model="text" :maxLength="100" placeholder="最多输入100个字符" />
      </div>
    `,
  }),
}

// 自动调整高度
export const AutoResize: Story = {
  render: () => ({
    components: { VKTextarea },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p>输入更多内容，文本域会自动增高：</p>
        <VKTextarea v-model="text" autoResize placeholder="请输入内容，文本域会自动调整高度..." />
      </div>
    `,
  }),
}

// 自定义行数
export const CustomRows: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea :rows="2" placeholder="2行高度" />
        <VKTextarea :rows="5" placeholder="5行高度" />
        <VKTextarea :rows="8" placeholder="8行高度" />
      </div>
    `,
  }),
}

// 无障碍支持
export const Accessibility: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea ariaLabel="用户反馈" placeholder="请输入您的反馈..." />
      </div>
    `,
  }),
}

// 暗黑模式演示（需要手动切换暗黑模式查看）
export const DarkMode: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKTextarea placeholder="默认文本域" />
        <VKTextarea status="error" placeholder="错误状态" />
        <VKTextarea status="success" placeholder="成功状态" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '暗黑模式下的文本域样式，需要在 Storybook 中启用暗黑模式查看。',
      },
    },
  },
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKTextarea },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3>无样式文本域</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKTextarea 
            unstyled 
            style="width: 100%; padding: 12px; background: linear-gradient(to right, #f6f7f8, #ffffff); border: 2px solid #e0e0e0; border-radius: 8px; font-family: monospace;"
            placeholder="自定义样式文本域"
          />
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKTextarea 
            placeholder="自定义文本域"
            :maxLength="50"
            :pt="{
              textarea: { class: 'focus:shadow-lg transition-shadow' },
              counter: { class: 'text-blue-500 font-bold' }
            }"
          />
          
          <VKTextarea 
            status="success"
            modelValue="这是一个成功消息"
            :pt="{
              root: { class: 'rounded-xl overflow-hidden' }
            }"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义文本域的样式和行为。',
      },
    },
  },
}
