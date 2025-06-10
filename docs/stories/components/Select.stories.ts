import type { StoryObj } from '@storybook/vue3'
import { VKSelect } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Select',
  component: VKSelect,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '选择器值',
    },
    options: {
      control: 'object',
      description: '选项列表',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outline', 'ghost'],
      description: '变体样式',
      defaultValue: 'default',
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
    loading: {
      control: 'boolean',
      description: '是否为加载状态',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: '占位符',
      defaultValue: '请选择',
    },
    multiple: {
      control: 'boolean',
      description: '是否多选',
      defaultValue: false,
    },
    searchable: {
      control: 'boolean',
      description: '是否可搜索',
      defaultValue: false,
    },
    clearable: {
      control: 'boolean',
      description: '是否可清除',
      defaultValue: false,
    },
    minWidth: {
      control: 'text',
      description: '最小宽度',
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
type Story = StoryObj<typeof VKSelect>

// 基础选择器
export const Default: Story = {
  render: (args) => ({
    components: { VKSelect },
    setup() {
      return { args }
    },
    template: `
      <VKSelect v-bind="args" />
    `,
  }),
  args: {
    options: [
      { value: 'option1', label: '选项 1' },
      { value: 'option2', label: '选项 2' },
      { value: 'option3', label: '选项 3' },
    ],
  },
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" variant="default" placeholder="默认变体" />
        <VKSelect :options="options" variant="filled" placeholder="填充变体" />
        <VKSelect :options="options" variant="outline" placeholder="轮廓变体" />
        <VKSelect :options="options" variant="ghost" placeholder="幽灵变体" />
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" size="xs" placeholder="超小尺寸" />
        <VKSelect :options="options" size="sm" placeholder="小尺寸" />
        <VKSelect :options="options" size="md" placeholder="中等尺寸" />
        <VKSelect :options="options" size="lg" placeholder="大尺寸" />
        <VKSelect :options="options" size="xl" placeholder="超大尺寸" />
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" disabled placeholder="禁用状态" />
        <VKSelect :options="options" :modelValue="'option1'" disabled placeholder="禁用状态（已选中）" />
      </div>
    `,
  }),
}

// 加载状态
export const Loading: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" loading placeholder="加载中..." />
        <VKSelect :options="options" :modelValue="'option1'" loading placeholder="加载中...（已选中）" />
      </div>
    `,
  }),
}

// 多选模式
export const Multiple: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
        { value: 'option4', label: '选项 4' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" multiple placeholder="请选择多个选项" />
        <VKSelect :options="options" multiple :modelValue="['option1', 'option3']" placeholder="已选中多个选项" />
      </div>
    `,
  }),
}

// 可搜索
export const Searchable: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'apple', label: '苹果' },
        { value: 'banana', label: '香蕉' },
        { value: 'orange', label: '橙子' },
        { value: 'grape', label: '葡萄' },
        { value: 'watermelon', label: '西瓜' },
        { value: 'strawberry', label: '草莓' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" searchable placeholder="可搜索下拉框" />
        <VKSelect :options="options" searchable multiple placeholder="可搜索多选下拉框" />
      </div>
    `,
  }),
}

// 可清除
export const Clearable: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" clearable :modelValue="'option1'" placeholder="单选可清除" />
        <VKSelect :options="options" clearable multiple :modelValue="['option1', 'option2']" placeholder="多选可清除" />
      </div>
    `,
  }),
}

// 自定义选项和分组
export const CustomOptions: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'fruits', label: '水果', group: true },
        { value: 'apple', label: '苹果', icon: '🍎' },
        { value: 'banana', label: '香蕉', icon: '🍌' },
        { value: 'orange', label: '橙子', icon: '🍊' },
        { value: 'vegetables', label: '蔬菜', group: true },
        { value: 'tomato', label: '番茄', icon: '🍅' },
        { value: 'carrot', label: '胡萝卜', icon: '🥕' },
        { value: 'broccoli', label: '西兰花', icon: '🥦' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" placeholder="选择食物">
          <template #option="{ option }">
            <div v-if="option.group" style="font-weight: bold; color: #666; padding: 5px 0;">{{ option.label }}</div>
            <div v-else style="display: flex; align-items: center; gap: 8px;">
              <span>{{ option.icon }}</span>
              <span>{{ option.label }}</span>
            </div>
          </template>
        </VKSelect>
      </div>
    `,
  }),
}

// 自定义前缀和后缀图标
export const CustomPrefixSuffix: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <VKSelect :options="options" placeholder="自定义前缀图标">
          <template #prefix>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </template>
        </VKSelect>
        
        <VKSelect :options="options" placeholder="自定义后缀图标">
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </template>
        </VKSelect>
      </div>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKSelect },
    setup() {
      const options = [
        { value: 'option1', label: '选项 1' },
        { value: 'option2', label: '选项 2' },
        { value: 'option3', label: '选项 3' },
      ]
      return { options }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h3>无样式选择器</h3>
        <VKSelect 
          :options="options" 
          unstyled 
          style="padding: 10px; border: 2px solid #42b883; border-radius: 8px; background: white; cursor: pointer;"
          placeholder="自定义样式选择器"
        />
        
        <h3>使用 PT 自定义元素</h3>
        <VKSelect 
          :options="options" 
          :pt="{
            root: { class: 'shadow-lg hover:shadow-xl transition-shadow' },
            options: { class: 'shadow-xl' }
          }"
          placeholder="带阴影的选择器"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义选择器的样式和行为。',
      },
    },
  },
}
