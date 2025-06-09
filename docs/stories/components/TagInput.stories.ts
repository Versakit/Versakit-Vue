import type { StoryObj } from '@storybook/vue3'
import { VKTagInput } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/TagInput',
  component: VKTagInput,
  argTypes: {
    modelValue: {
      control: 'object',
      description: '当前标签列表',
    },
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
    max: {
      control: 'number',
      description: '最大标签数量',
    },
    allowDuplicates: {
      control: 'boolean',
      description: '是否允许重复标签',
      defaultValue: false,
    },
    delimiters: {
      control: 'object',
      description: '标签分隔符，用于键盘输入',
      defaultValue: [',', 'Enter'],
    },
    freeInput: {
      control: 'boolean',
      description: '是否支持自由输入',
      defaultValue: true,
    },
    options: {
      control: 'object',
      description: '可选的标签列表，当不支持自由输入时使用',
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      description: '输入框状态',
      defaultValue: 'default',
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
type Story = StoryObj<typeof VKTagInput>

// 基础标签输入
export const Default: Story = {
  render: (args) => ({
    components: { VKTagInput },
    setup() {
      return { args }
    },
    template: '<VKTagInput v-bind="args" />',
  }),
  args: {
    placeholder: '输入标签并按回车',
  },
}

// 预设标签
export const WithDefaultTags: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        tags: [
          { id: 1, label: '标签一' },
          { id: 2, label: '标签二' },
          { id: 3, label: '标签三' },
        ],
      }
    },
    template: `
      <div>
        <VKTagInput 
          v-model="tags" 
          placeholder="输入标签并按回车"
        />
      </div>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKTagInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>轮廓变体</div>
        <VKTagInput variant="outline" placeholder="输入标签并按回车" />
        
        <div>填充变体</div>
        <VKTagInput variant="filled" placeholder="输入标签并按回车" />
        
        <div>下划线变体</div>
        <VKTagInput variant="underlined" placeholder="输入标签并按回车" />
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKTagInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>超小尺寸</div>
        <VKTagInput size="xs" placeholder="输入标签并按回车" />
        
        <div>小尺寸</div>
        <VKTagInput size="sm" placeholder="输入标签并按回车" />
        
        <div>中等尺寸（默认）</div>
        <VKTagInput size="md" placeholder="输入标签并按回车" />
        
        <div>大尺寸</div>
        <VKTagInput size="lg" placeholder="输入标签并按回车" />
        
        <div>超大尺寸</div>
        <VKTagInput size="xl" placeholder="输入标签并按回车" />
      </div>
    `,
  }),
}

// 禁用和只读
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        tags: [
          { id: 1, label: '标签一' },
          { id: 2, label: '标签二' },
          { id: 3, label: '标签三' },
        ],
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>正常标签输入</div>
        <VKTagInput 
          v-model="tags" 
          placeholder="输入标签并按回车" 
        />
        
        <div>禁用标签输入</div>
        <VKTagInput 
          v-model="tags" 
          placeholder="输入标签并按回车" 
          disabled 
        />
        
        <div>只读标签输入</div>
        <VKTagInput 
          v-model="tags" 
          placeholder="输入标签并按回车" 
          readonly 
        />
      </div>
    `,
  }),
}

// 最大数量限制
export const MaxLimit: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        tags: [
          { id: 1, label: '标签一' },
          { id: 2, label: '标签二' },
        ],
      }
    },
    template: `
      <div>
        <VKTagInput 
          v-model="tags" 
          placeholder="最多可添加3个标签" 
          :max="3"
        />
        <div style="margin-top: 8px; font-size: 14px; color: #666;">
          当前标签数: {{ tags.length }}/3
        </div>
      </div>
    `,
  }),
}

// 不同分隔符
export const Delimiters: Story = {
  render: () => ({
    components: { VKTagInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>默认分隔符（逗号和回车）</div>
        <VKTagInput placeholder="输入标签并按回车或逗号" />
        
        <div>自定义分隔符（空格、分号和回车）</div>
        <VKTagInput 
          placeholder="输入标签并按空格、分号或回车" 
          :delimiters="[' ', ';', 'Enter']"
        />
      </div>
    `,
  }),
}

// 预设选项
export const WithOptions: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        selectedTags: [],
        options: [
          { id: 1, label: '选项一' },
          { id: 2, label: '选项二' },
          { id: 3, label: '选项三' },
          { id: 4, label: '选项四' },
          { id: 5, label: '选项五' },
        ],
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>自由输入 + 预设选项</div>
        <VKTagInput 
          v-model="selectedTags" 
          :options="options"
          :freeInput="true" 
          placeholder="可以自由输入或从预设选项中选择"
        />
        
        <div>只能从预设选项中选择</div>
        <VKTagInput 
          v-model="selectedTags" 
          :options="options"
          :freeInput="false" 
          placeholder="只能从预设选项中选择"
        />
      </div>
    `,
  }),
}

// 自定义标签渲染
export const CustomTagRendering: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        tags: [
          { id: 1, label: '重要标签', type: 'important' },
          { id: 2, label: '普通标签', type: 'normal' },
          { id: 3, label: '警告标签', type: 'warning' },
        ],
      }
    },
    template: `
      <div>
        <VKTagInput 
          v-model="tags" 
          placeholder="输入标签并按回车"
        >
          <template #tag="{ tag, handleRemove, index }">
            <div 
              :style="{
                padding: '2px 8px',
                borderRadius: '4px',
                margin: '2px',
                backgroundColor: 
                  tag.type === 'important' ? '#e53935' : 
                  tag.type === 'warning' ? '#ff9800' : '#2196f3',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center'
              }"
            >
              <span>{{ tag.label }}</span>
              <span 
                @click="handleRemove(index)"
                :style="{
                  marginLeft: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }"
              >×</span>
            </div>
          </template>
        </VKTagInput>
      </div>
    `,
  }),
}

// 无样式和PT示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKTagInput },
    data() {
      return {
        tags: [
          { id: 1, label: '标签一' },
          { id: 2, label: '标签二' },
        ],
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3>无样式标签输入</h3>
        <VKTagInput 
          v-model="tags"
          unstyled 
          style="border: 2px dashed #4CAF50; padding: 10px; border-radius: 8px;" 
          placeholder="自定义样式输入框" 
        />
        
        <h3>使用 PT 自定义元素</h3>
        <VKTagInput 
          v-model="tags"
          placeholder="带自定义标签样式的输入框"
          :pt="{
            tag: { class: 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1' },
            tagDelete: { class: 'hover:text-red-500 ml-1' }
          }"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义标签输入框的样式和行为。',
      },
    },
  },
}
