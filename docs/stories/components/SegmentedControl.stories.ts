import { ref } from 'vue'
import { VKSegmentedControl } from '@versakit/vue'
import type { StoryObj } from '@storybook/vue3'
import '@versakit/vue/style'

const meta = {
  title: 'Components/SegmentedControl',
  component: VKSegmentedControl,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '当前值',
      table: {
        type: { summary: 'string | number' },
      },
    },
    options: {
      control: 'object',
      description: '选项数组',
      table: {
        type: { summary: 'SegmentedControlOption[]' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      description: '控制器大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      },
      description: '控制器颜色风格',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: '是否全宽度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'boolean',
      description: '圆角程度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: '是否显示动画',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    animationDuration: {
      control: 'number',
      description: '动画持续时间(ms)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    allowDeselect: {
      control: 'boolean',
      description: '是否允许取消选择',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
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
type Story = StoryObj<typeof VKSegmentedControl>

const defaultOptions = [
  { value: 'day', label: '日' },
  { value: 'week', label: '周' },
  { value: 'month', label: '月' },
  { value: 'year', label: '年' },
]

export const Default: Story = {
  args: {
    options: defaultOptions,
    modelValue: 'day',
  },
}

export const Different_Sizes: Story = {
  render: () => ({
    components: { VKSegmentedControl },
    setup() {
      const value = ref('day')
      return {
        value,
        options: defaultOptions,
      }
    },
    template: `
      <div class="flex flex-col space-y-4">
        <VKSegmentedControl 
          v-model="value" 
          :options="options"
          size="sm"
        />
        
        <VKSegmentedControl 
          v-model="value" 
          :options="options"
          size="md"
        />
        
        <VKSegmentedControl 
          v-model="value" 
          :options="options"
          size="lg"
        />
      </div>
    `,
  }),
}

export const Different_Variants: Story = {
  render: () => ({
    components: { VKSegmentedControl },
    setup() {
      const value1 = ref('day')
      const value2 = ref('day')
      const value3 = ref('day')
      const value4 = ref('day')
      const value5 = ref('day')
      const value6 = ref('day')

      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        options: defaultOptions,
      }
    },
    template: `
      <div class="flex flex-col space-y-4">
        <VKSegmentedControl 
          v-model="value1" 
          :options="options"
          variant="primary"
        />
        
        <VKSegmentedControl 
          v-model="value2" 
          :options="options"
          variant="success"
        />
        
        <VKSegmentedControl 
          v-model="value3" 
          :options="options"
          variant="warning"
        />
        
        <VKSegmentedControl 
          v-model="value4" 
          :options="options"
          variant="info"
        />
        
        <VKSegmentedControl 
          v-model="value5" 
          :options="options"
          variant="error"
        />
        
        <VKSegmentedControl 
          v-model="value6" 
          :options="options"
          variant="default"
        />
      </div>
    `,
  }),
}

export const Full_Width: Story = {
  args: {
    options: defaultOptions,
    modelValue: 'day',
    fullWidth: true,
  },
}

export const Rounded: Story = {
  args: {
    options: defaultOptions,
    modelValue: 'day',
    rounded: true,
  },
}

export const With_Icons: Story = {
  args: {
    options: [
      { value: 'day', label: '日', icon: '☀️' },
      { value: 'week', label: '周', icon: '📅' },
      { value: 'month', label: '月', icon: '📆' },
      { value: 'year', label: '年', icon: '🗓️' },
    ],
    modelValue: 'day',
    showIcon: true,
  },
}

export const Disabled: Story = {
  args: {
    options: [
      { value: 'day', label: '日' },
      { value: 'week', label: '周' },
      { value: 'month', label: '月', disabled: true },
      { value: 'year', label: '年' },
    ],
    modelValue: 'day',
  },
}

export const Allow_Deselect: Story = {
  args: {
    options: defaultOptions,
    modelValue: 'day',
    allowDeselect: true,
  },
}

export const No_Animation: Story = {
  args: {
    options: defaultOptions,
    modelValue: 'day',
    animated: false,
  },
}

export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKSegmentedControl },
    setup() {
      const options = [
        { value: 'daily', label: '日视图' },
        { value: 'weekly', label: '周视图' },
        { value: 'monthly', label: '月视图' },
      ]

      return {
        options,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h3>无样式分段控制器</h3>
        <VKSegmentedControl
          unstyled
          :options="options"
          style="display: flex; background: #f3f4f6; padding: 4px; border-radius: 8px; font-size: 14px;"
          v-slot="{ option, index }"
        >
          <button 
            :style="{ 
              padding: '8px 16px', 
              flex: '1', 
              border: 'none', 
              cursor: 'pointer',
              backgroundColor: option.value === 'weekly' ? '#2563EB' : 'transparent',
              color: option.value === 'weekly' ? 'white' : '#4b5563',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              fontWeight: option.value === 'weekly' ? 'bold' : 'normal'
            }"
          >
            {{ option.label }}
          </button>
        </VKSegmentedControl>
        
        <h3>使用 PT 自定义元素</h3>
        <VKSegmentedControl
          :options="options"
          variant="success"
          :pt="{
            root: { style: 'border: 1px solid #10b981; padding: 2px; border-radius: 8px;' },
            thumb: { style: 'box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);' },
            item: { class: 'font-medium' }
          }"
        />
        
        <h3>自定义图标</h3>
        <VKSegmentedControl
          :options="[
            { value: 'list', label: '列表视图', icon: 'list-icon' },
            { value: 'grid', label: '网格视图', icon: 'grid-icon' },
            { value: 'kanban', label: '看板视图', icon: 'kanban-icon' }
          ]"
          showIcon
          variant="primary"
        >
          <template #icon="{ icon }">
            <span v-if="icon === 'list-icon'" style="display: inline-flex; margin-right: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </span>
            <span v-else-if="icon === 'grid-icon'" style="display: inline-flex; margin-right: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </span>
            <span v-else-if="icon === 'kanban-icon'" style="display: inline-flex; margin-right: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 3H3v18h18V3z"></path>
                <path d="M9 3v18"></path>
                <path d="M15 3v18"></path>
              </svg>
            </span>
          </template>
        </VKSegmentedControl>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义分段控制器组件的样式和行为。',
      },
    },
  },
}
