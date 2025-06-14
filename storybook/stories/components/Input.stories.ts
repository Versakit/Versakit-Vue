import type { StoryObj } from '@storybook/vue3-vite'
import { VKInput } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Input',
  component: VKInput,
  argTypes: {
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '输入框大小',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underlined'],
      description: '输入框变体',
      defaultValue: 'outline',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
      defaultValue: '',
    },
    modelValue: {
      control: 'text',
      description: '输入框值',
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
    maxlength: {
      control: 'number',
      description: '最大长度',
    },
    clearable: {
      control: 'boolean',
      description: '是否显示清除按钮',
      defaultValue: false,
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      description: '输入框状态',
      defaultValue: 'default',
    },
    type: {
      control: 'text',
      description: '输入框类型',
      defaultValue: 'text',
    },
    prefixText: {
      control: 'text',
      description: '前缀文本',
    },
    suffixText: {
      control: 'text',
      description: '后缀文本',
    },
    showCount: {
      control: 'boolean',
      description: '是否显示字数统计',
      defaultValue: false,
    },
    autofocus: {
      control: 'boolean',
      description: '是否自动获取焦点',
      defaultValue: false,
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
type Story = StoryObj<typeof VKInput>

// 基础输入框
export const Default: Story = {
  render: (args) => ({
    components: { VKInput },
    setup() {
      return { args }
    },
    template: '<VKInput v-bind="args" />',
  }),
  args: {
    placeholder: '请输入内容',
  },
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput variant="outline" placeholder="轮廓输入框" />
        <VKInput variant="filled" placeholder="填充输入框" />
        <VKInput variant="underlined" placeholder="下划线输入框" />
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput size="xs" placeholder="超小尺寸" />
        <VKInput size="sm" placeholder="小尺寸" />
        <VKInput size="md" placeholder="中等尺寸" />
        <VKInput size="lg" placeholder="大尺寸" />
        <VKInput size="xl" placeholder="超大尺寸" />
      </div>
    `,
  }),
}

// 禁用和只读
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput placeholder="正常输入框" />
        <VKInput disabled placeholder="禁用输入框" />
        <VKInput readonly modelValue="只读内容" placeholder="只读输入框" />
      </div>
    `,
  }),
}

// 不同状态
export const Statuses: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput status="default" placeholder="默认状态" />
        <VKInput status="success" placeholder="成功状态" />
        <VKInput status="warning" placeholder="警告状态" />
        <VKInput status="error" placeholder="错误状态" />
      </div>
    `,
  }),
}

// 带前缀和后缀
export const WithPrefixAndSuffix: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput prefixText="¥" placeholder="金额" />
        <VKInput suffixText="元" placeholder="价格" />
        <VKInput prefixText="http://" suffixText=".com" placeholder="域名" />
        <VKInput placeholder="带图标前缀">
          <template #prefix>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </template>
        </VKInput>
        <VKInput placeholder="带图标后缀">
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </template>
        </VKInput>
      </div>
    `,
  }),
}

// 可清除输入
export const Clearable: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput clearable placeholder="可清除输入框" modelValue="这是可以被清除的内容" />
        <VKInput clearable disabled placeholder="禁用时不可清除" modelValue="禁用状态" />
        <VKInput clearable readonly placeholder="只读时不可清除" modelValue="只读状态" />
        <VKInput clearable placeholder="自定义清除图标" modelValue="自定义清除图标">
          <template #clear>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </template>
        </VKInput>
      </div>
    `,
  }),
}

// 字数限制和统计
export const MaxlengthAndCount: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput maxlength="20" placeholder="最多输入20个字符" />
        <VKInput maxlength="50" showCount placeholder="显示字数统计" />
        <VKInput maxlength="100" showCount modelValue="已经输入的内容" placeholder="带初始值的字数统计" />
      </div>
    `,
  }),
}

// 不同类型
export const Types: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKInput type="text" placeholder="文本输入框" />
        <VKInput type="password" placeholder="密码输入框" />
        <VKInput type="number" placeholder="数字输入框" />
        <VKInput type="email" placeholder="邮箱输入框" />
        <VKInput type="tel" placeholder="电话输入框" />
        <VKInput type="url" placeholder="URL输入框" />
        <VKInput type="search" placeholder="搜索输入框" />
      </div>
    `,
  }),
}

// 无样式和PT示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3>无样式输入框</h3>
        <VKInput 
          unstyled 
          style="border: 2px dashed #4CAF50; padding: 10px; border-radius: 8px;" 
          placeholder="自定义样式输入框" 
        />
        
        <h3>使用 PT 自定义元素</h3>
        <VKInput 
          placeholder="带自定义根元素的输入框"
          :pt="{
            root: { style: 'border-radius: 20px; box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);' }
          }"
        />
        
        <VKInput 
          placeholder="带自定义输入元素的输入框"
          :pt="{
            input: { style: 'font-family: monospace; letter-spacing: 1px;' }
          }"
        />
        
        <VKInput 
          prefixText="$"
          placeholder="带自定义前缀样式"
          :pt="{
            prefix: { style: 'color: green; font-weight: bold;' }
          }"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义输入框的样式和行为。',
      },
    },
  },
}
