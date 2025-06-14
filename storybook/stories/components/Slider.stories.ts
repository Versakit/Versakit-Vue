import type { StoryObj } from '@storybook/vue3-vite'
import { VKSlider } from '@versakit/vue'
import '@versakit/vue/style'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Slider',
  component: VKSlider,
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: '当前值',
    },
    min: {
      control: { type: 'number' },
      description: '最小值',
      defaultValue: 0,
    },
    max: {
      control: { type: 'number' },
      description: '最大值',
      defaultValue: 100,
    },
    step: {
      control: { type: 'number' },
      description: '步长',
      defaultValue: 1,
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      description: '变体',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '尺寸',
      defaultValue: 'md',
    },
    range: {
      control: 'boolean',
      description: '是否为范围选择器',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    marks: {
      control: 'object',
      description: '是否显示标记',
      defaultValue: false,
    },
    tooltip: {
      control: 'boolean',
      description: '是否显示提示',
      defaultValue: false,
    },
    tooltipAlways: {
      control: 'boolean',
      description: '是否始终显示提示',
      defaultValue: false,
    },
    showInput: {
      control: 'boolean',
      description: '是否显示输入框',
      defaultValue: false,
    },
    vertical: {
      control: 'boolean',
      description: '垂直方向',
      defaultValue: false,
    },
    height: {
      control: 'text',
      description: '垂直高度',
      defaultValue: '200px',
    },
    ariaLabel: {
      control: 'text',
      description: '无障碍标签',
    },
    ariaLabelRange: {
      control: 'object',
      description: '范围选择器的无障碍标签',
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
type Story = StoryObj<typeof VKSlider>

// 基础滑块
export const Default: Story = {
  render: (args) => ({
    components: { VKSlider },
    setup() {
      return { args }
    },
    template: '<VKSlider v-bind="args" />',
  }),
  args: {
    modelValue: 50,
  },
}

// 范围选择器
export const RangeSlider: Story = {
  render: () => ({
    components: { VKSlider },
    data() {
      return {
        value: [20, 60],
      }
    },
    template: `
      <div>
        <VKSlider 
          v-model="value" 
          range
        />
        <div style="margin-top: 8px; font-size: 14px; color: #666;">
          选择范围: {{ value[0] }} - {{ value[1] }}
        </div>
      </div>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">主要</span>
          <VKSlider variant="primary" :modelValue="40" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">成功</span>
          <VKSlider variant="success" :modelValue="50" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">警告</span>
          <VKSlider variant="warning" :modelValue="60" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">信息</span>
          <VKSlider variant="info" :modelValue="70" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">错误</span>
          <VKSlider variant="error" :modelValue="80" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">默认</span>
          <VKSlider variant="default" :modelValue="30" />
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">超小</span>
          <VKSlider size="xs" :modelValue="40" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">小</span>
          <VKSlider size="sm" :modelValue="50" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">中等</span>
          <VKSlider size="md" :modelValue="60" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">大</span>
          <VKSlider size="lg" :modelValue="70" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 80px;">超大</span>
          <VKSlider size="xl" :modelValue="80" />
        </div>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">禁用单值滑块</span>
          <VKSlider disabled :modelValue="30" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">禁用范围滑块</span>
          <VKSlider disabled range :modelValue="[20, 60]" />
        </div>
      </div>
    `,
  }),
}

// 带标记的滑块
export const WithMarks: Story = {
  render: () => ({
    components: { VKSlider },
    data() {
      return {
        marks: {
          0: '0°C',
          25: '25°C',
          50: '50°C',
          75: '75°C',
          100: '100°C',
        },
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">简单标记</span>
          <VKSlider :marks="true" :step="10" :modelValue="50" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">自定义标记</span>
          <VKSlider :marks="marks" :modelValue="50" style="margin-bottom: 40px" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">范围带标记</span>
          <VKSlider range :marks="marks" :modelValue="[25, 75]" style="margin-bottom: 40px" />
        </div>
      </div>
    `,
  }),
}

// 带提示的滑块
export const WithTooltip: Story = {
  render: () => ({
    components: { VKSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">拖动时显示提示</span>
          <VKSlider tooltip :modelValue="50" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">始终显示提示</span>
          <VKSlider tooltip tooltipAlways :modelValue="70" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">范围带提示</span>
          <VKSlider range tooltip tooltipAlways :modelValue="[20, 80]" />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">自定义提示</span>
          <VKSlider 
            tooltip 
            tooltipAlways 
            :modelValue="60" 
          >
            <template #tooltip="{ value }">
              <div style="background: #333; color: white; padding: 4px 8px; border-radius: 4px;">
                {{ value }}%
              </div>
            </template>
          </VKSlider>
        </div>
      </div>
    `,
  }),
}

// 带输入框的滑块
export const WithInput: Story = {
  render: () => ({
    components: { VKSlider },
    data() {
      return {
        value: 50,
        rangeValue: [20, 80],
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">单值带输入框</span>
          <div style="flex: 1;">
            <VKSlider v-model="value" showInput />
          </div>
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">范围带输入框</span>
          <div style="flex: 1;">
            <VKSlider v-model="rangeValue" range showInput />
          </div>
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 120px;">自定义输入框</span>
          <div style="flex: 1;">
            <VKSlider v-model="value" showInput>
              <template #input>
                <input 
                  type="number" 
                  v-model="value"
                  style="width: 60px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; margin-left: 8px;" 
                />
              </template>
            </VKSlider>
          </div>
        </div>
      </div>
    `,
  }),
}

// 垂直滑块
export const VerticalSlider: Story = {
  render: () => ({
    components: { VKSlider },
    data() {
      return {
        value: 50,
        rangeValue: [20, 80],
      }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 48px; margin-top: 40px;">
        <div>
          <div>垂直单值滑块</div>
          <VKSlider v-model="value" vertical height="200px" />
        </div>
        
        <div>
          <div>垂直范围滑块</div>
          <VKSlider v-model="rangeValue" range vertical height="200px" />
        </div>
        
        <div>
          <div>带标记的垂直滑块</div>
          <div style="display: flex;">
            <VKSlider :marks="true" :step="25" vertical height="200px" :modelValue="75" />
          </div>
        </div>
        
        <div>
          <div>带提示的垂直滑块</div>
          <VKSlider tooltip tooltipAlways vertical height="200px" :modelValue="60" />
        </div>
      </div>
    `,
  }),
}

// 无样式和PT示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKSlider },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3>无样式滑块</h3>
        <div style="display: flex; align-items: center; gap: 8px;">
          <VKSlider 
            unstyled 
            :modelValue="50" 
            style="flex: 1; height: 20px; background: linear-gradient(to right, #f6d365, #fda085); border-radius: 10px; padding: 10px;" 
          />
        </div>
        
        <h3>使用 PT 自定义元素</h3>
        <div style="display: flex; align-items: center; gap: 8px;">
          <VKSlider 
            :modelValue="60"
            tooltip
            tooltipAlways
            :pt="{
              track: { class: 'h-2 bg-gray-300 rounded-full' },
              progress: { class: 'bg-gradient-to-r from-blue-500 to-purple-500' },
              handle: { class: 'w-5 h-5 bg-white border-2 border-purple-500 shadow-lg' },
              tooltip: { class: 'bg-purple-800 text-white px-2 py-1 rounded text-xs' }
            }"
          />
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <VKSlider 
            range
            :modelValue="[30, 70]"
            :marks="{0: '最小', 100: '最大'}"
            :pt="{
              mark: { class: 'w-2 h-2 bg-green-500 rounded-full' },
              markLabel: { class: 'text-green-600 font-bold' }
            }"
            style="margin-bottom: 30px"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义滑块的样式和行为。',
      },
    },
  },
}
