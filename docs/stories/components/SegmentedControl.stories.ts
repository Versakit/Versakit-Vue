import { ref } from 'vue'
import { VKSegmentedControl } from '@versakit/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import '@versakit/vue/style'

const meta: Meta<typeof VKSegmentedControl> = {
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
  },
  tags: ['autodocs'],
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
