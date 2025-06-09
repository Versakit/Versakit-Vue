import type { StoryObj } from '@storybook/vue3'
import { VKCheckbox } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Checkbox',
  component: VKCheckbox,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '是否选中',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '复选框尺寸',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '复选框样式变体',
      defaultValue: 'primary',
    },
    indeterminate: {
      control: 'boolean',
      description: '是否为不确定状态',
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
    name: {
      control: 'text',
      description: '名称，原生 name 属性',
    },
    value: {
      control: 'text',
      description: '值，用于组合时',
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKCheckbox>

// 基础复选框
export const Default: Story = {
  render: (args) => ({
    components: { VKCheckbox },
    setup() {
      return { args }
    },
    template: '<VKCheckbox v-bind="args">默认复选框</VKCheckbox>',
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox variant="primary" modelValue>主要复选框</VKCheckbox>
        <VKCheckbox variant="success" modelValue>成功复选框</VKCheckbox>
        <VKCheckbox variant="warning" modelValue>警告复选框</VKCheckbox>
        <VKCheckbox variant="info" modelValue>信息复选框</VKCheckbox>
        <VKCheckbox variant="error" modelValue>错误复选框</VKCheckbox>
        <VKCheckbox variant="default" modelValue>默认复选框</VKCheckbox>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox size="sm" modelValue>小型复选框</VKCheckbox>
        <VKCheckbox size="md" modelValue>中型复选框</VKCheckbox>
        <VKCheckbox size="lg" modelValue>大型复选框</VKCheckbox>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox disabled>禁用状态（未选中）</VKCheckbox>
        <VKCheckbox disabled modelValue>禁用状态（已选中）</VKCheckbox>
        <VKCheckbox variant="success" disabled>禁用成功复选框（未选中）</VKCheckbox>
        <VKCheckbox variant="success" disabled modelValue>禁用成功复选框（已选中）</VKCheckbox>
      </div>
    `,
  }),
}

// 不确定状态
export const Indeterminate: Story = {
  render: () => ({
    components: { VKCheckbox },
    setup() {
      const checked = ref(false)
      const indeterminate = ref(true)

      const toggleIndeterminate = () => {
        if (indeterminate.value) {
          indeterminate.value = false
          checked.value = true
        } else if (checked.value) {
          checked.value = false
        } else {
          indeterminate.value = true
        }
      }

      return { checked, indeterminate, toggleIndeterminate }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox :indeterminate="true">静态不确定状态</VKCheckbox>
        <VKCheckbox :indeterminate="indeterminate" v-model="checked" @change="toggleIndeterminate">
          点击切换状态：{{ indeterminate ? '不确定' : (checked ? '选中' : '未选中') }}
        </VKCheckbox>
        <div style="display: flex; gap: 16px;">
          <VKCheckbox variant="primary" :indeterminate="true">主要</VKCheckbox>
          <VKCheckbox variant="success" :indeterminate="true">成功</VKCheckbox>
          <VKCheckbox variant="warning" :indeterminate="true">警告</VKCheckbox>
          <VKCheckbox variant="error" :indeterminate="true">错误</VKCheckbox>
        </div>
      </div>
    `,
  }),
}

// 组合使用
export const Group: Story = {
  render: () => ({
    components: { VKCheckbox },
    setup() {
      const selectedFruits = ref(['apple'])
      return { selectedFruits }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p>已选水果: {{ selectedFruits.join(', ') }}</p>
          <div style="display: flex; gap: 16px; margin-top: 8px;">
            <VKCheckbox 
              v-model="selectedFruits" 
              value="apple" 
              :modelValue="selectedFruits.includes('apple')"
              @change="(val) => val ? selectedFruits.push('apple') : selectedFruits = selectedFruits.filter(f => f !== 'apple')"
            >
              苹果
            </VKCheckbox>
            <VKCheckbox 
              v-model="selectedFruits" 
              value="banana" 
              :modelValue="selectedFruits.includes('banana')"
              @change="(val) => val ? selectedFruits.push('banana') : selectedFruits = selectedFruits.filter(f => f !== 'banana')"
            >
              香蕉
            </VKCheckbox>
            <VKCheckbox 
              v-model="selectedFruits" 
              value="orange" 
              :modelValue="selectedFruits.includes('orange')"
              @change="(val) => val ? selectedFruits.push('orange') : selectedFruits = selectedFruits.filter(f => f !== 'orange')"
            >
              橙子
            </VKCheckbox>
          </div>
        </div>
      </div>
    `,
  }),
}

// 无障碍支持
export const Accessibility: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox ariaLabel="同意条款">我同意服务条款和隐私政策</VKCheckbox>
        <VKCheckbox ariaLabel="订阅通讯" modelValue>订阅产品更新通讯</VKCheckbox>
      </div>
    `,
  }),
}

// 暗黑模式演示（需要手动切换暗黑模式查看）
export const DarkMode: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKCheckbox variant="primary" modelValue>主要复选框</VKCheckbox>
        <VKCheckbox variant="success" modelValue>成功复选框</VKCheckbox>
        <VKCheckbox variant="default" modelValue>默认复选框</VKCheckbox>
        <VKCheckbox variant="primary" :indeterminate="true">不确定状态</VKCheckbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '暗黑模式下的复选框样式，需要在 Storybook 中启用暗黑模式查看。',
      },
    },
  },
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3>无样式复选框</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKCheckbox 
            unstyled 
            style="display: inline-flex; align-items: center; gap: 8px;"
            modelValue
          >
            <span style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: linear-gradient(45deg, #FF6B6B, #FFE66D); border-radius: 4px; color: white;">
              ✓
            </span>
            自定义渐变复选框
          </VKCheckbox>
          
          <VKCheckbox 
            unstyled 
            style="display: inline-flex; align-items: center; gap: 8px;"
          >
            <span style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border: 2px solid #e0e0e0; border-radius: 50%;">
            </span>
            自定义圆形复选框
          </VKCheckbox>
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <VKCheckbox 
            modelValue
            :pt="{
              box: { class: 'shadow-md hover:shadow-lg transition-shadow' },
              checkmark: { class: 'text-yellow-300' }
            }"
          >
            带阴影的复选框
          </VKCheckbox>
          
          <VKCheckbox 
            variant="success"
            modelValue
            :pt="{
              label: { class: 'font-bold text-green-600' },
              box: { class: 'rounded-xl' }
            }"
          >
            自定义标签和框样式
          </VKCheckbox>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义复选框的样式和行为。',
      },
    },
  },
}
