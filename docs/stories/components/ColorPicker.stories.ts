import type { StoryObj } from '@storybook/vue3'
import { VKColorPicker } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/ColorPicker',
  component: VKColorPicker,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '颜色值',
      defaultValue: '#000000',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    defaultMode: {
      control: 'radio',
      options: ['picker', 'palette'],
      description: '默认打开的面板模式',
      defaultValue: 'picker',
    },
    format: {
      control: 'radio',
      options: ['hex', 'rgb', 'hsl'],
      description: '颜色格式',
      defaultValue: 'hex',
    },
    showInput: {
      control: 'boolean',
      description: '是否显示颜色值输入框',
      defaultValue: true,
    },
    presets: {
      control: 'object',
      description: '预设的颜色选项',
    },
    showAlpha: {
      control: 'boolean',
      description: '是否显示透明度滑块',
      defaultValue: true,
    },
    popover: {
      control: 'boolean',
      description: '是否使用弹出模式',
      defaultValue: true,
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
type Story = StoryObj<typeof VKColorPicker>

// 基础颜色选择器
export const Default: Story = {
  render: (args) => ({
    components: { VKColorPicker },
    setup() {
      const color = ref('#1976D2')
      return { args, color }
    },
    template: '<VKColorPicker v-bind="args" v-model="color" />',
  }),
  args: {
    showInput: true,
    showAlpha: true,
  },
}

// 不同颜色格式
export const Formats: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const hexColor = ref('#1976D2')
      const rgbColor = ref('rgb(25, 118, 210)')
      const hslColor = ref('hsl(210, 79%, 46%)')

      return { hexColor, rgbColor, hslColor }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">HEX 格式</p>
          <VKColorPicker v-model="hexColor" format="hex" />
          <p style="margin-top: 8px;">当前值: {{ hexColor }}</p>
        </div>
        <div>
          <p style="margin-bottom: 8px;">RGB 格式</p>
          <VKColorPicker v-model="rgbColor" format="rgb" />
          <p style="margin-top: 8px;">当前值: {{ rgbColor }}</p>
        </div>
        <div>
          <p style="margin-bottom: 8px;">HSL 格式</p>
          <VKColorPicker v-model="hslColor" format="hsl" />
          <p style="margin-top: 8px;">当前值: {{ hslColor }}</p>
        </div>
      </div>
    `,
  }),
}

// 显示/隐藏透明度
export const Alpha: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const colorWithAlpha = ref('rgba(25, 118, 210, 0.5)')
      const colorWithoutAlpha = ref('#1976D2')

      return { colorWithAlpha, colorWithoutAlpha }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">带透明度</p>
          <VKColorPicker v-model="colorWithAlpha" :show-alpha="true" format="rgb" />
          <p style="margin-top: 8px;">当前值: {{ colorWithAlpha }}</p>
        </div>
        <div>
          <p style="margin-bottom: 8px;">无透明度</p>
          <VKColorPicker v-model="colorWithoutAlpha" :show-alpha="false" />
          <p style="margin-top: 8px;">当前值: {{ colorWithoutAlpha }}</p>
        </div>
      </div>
    `,
  }),
}

// 预设颜色
export const Presets: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const color = ref('#1976D2')
      const customPresets = [
        '#FF5252',
        '#FF4081',
        '#E040FB',
        '#7C4DFF',
        '#536DFE',
        '#448AFF',
        '#40C4FF',
        '#18FFFF',
        '#64FFDA',
        '#69F0AE',
        '#B2FF59',
        '#EEFF41',
      ]

      return { color, customPresets }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">默认预设颜色</p>
          <VKColorPicker v-model="color" default-mode="palette" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">自定义预设颜色</p>
          <VKColorPicker v-model="color" :presets="customPresets" default-mode="palette" />
        </div>
      </div>
    `,
  }),
}

// 弹出模式与内联模式
export const DisplayMode: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const popoverColor = ref('#1976D2')
      const inlineColor = ref('#1976D2')

      return { popoverColor, inlineColor }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">弹出模式（点击打开）</p>
          <VKColorPicker v-model="popoverColor" :popover="true" />
          <p style="margin-top: 8px;">当前值: {{ popoverColor }}</p>
        </div>
        <div>
          <p style="margin-bottom: 8px;">内联模式（始终显示）</p>
          <VKColorPicker v-model="inlineColor" :popover="false" />
          <p style="margin-top: 8px;">当前值: {{ inlineColor }}</p>
        </div>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const color = ref('#1976D2')

      return { color }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">正常状态</p>
          <VKColorPicker v-model="color" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">禁用状态</p>
          <VKColorPicker v-model="color" disabled />
        </div>
      </div>
    `,
  }),
}

// 自定义触发器
export const CustomTrigger: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const color = ref('#1976D2')

      return { color }
    },
    template: `
      <VKColorPicker v-model="color">
        <template #trigger="{ color, open }">
          <div 
            style="
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 8px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              cursor: pointer;
            "
          >
            <div 
              style="
                width: 24px;
                height: 24px;
                border-radius: 4px;
                border: 1px solid #ddd;
              "
              :style="{ backgroundColor: color }"
            ></div>
            <span>{{ color }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m21 9-9-6-9 6"></path>
              <path d="M12 3v6"></path>
            </svg>
          </div>
        </template>
      </VKColorPicker>
    `,
  }),
}

// 事件处理
export const Events: Story = {
  render: () => ({
    components: { VKColorPicker },
    setup() {
      const color = ref('#1976D2')
      const log = ref<string[]>([])

      const handleChange = (value: string) => {
        log.value.push(
          `颜色变更为: ${value} - ${new Date().toLocaleTimeString()}`,
        )
        // 保持日志不超过5条
        if (log.value.length > 5) {
          log.value.shift()
        }
      }

      return { color, log, handleChange }
    },
    template: `
      <div>
        <VKColorPicker v-model="color" @change="handleChange" />
        
        <div style="margin-top: 24px; padding: 16px; background-color: #f5f5f5; border-radius: 8px;">
          <h3 style="margin-top: 0; margin-bottom: 8px;">事件日志:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li v-for="(item, index) in log" :key="index">{{ item }}</li>
          </ul>
          <p v-if="log.length === 0" style="margin: 0; color: #888;">尚无事件</p>
        </div>
      </div>
    `,
  }),
}
