import type { StoryObj } from '@storybook/vue3'
import { VKProgress } from '@versakit/vue'
import '@versakit/vue/style'
import { ref, watch } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Progress',
  component: VKProgress,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '进度值，范围0-100',
      defaultValue: 50,
    },
    max: {
      control: { type: 'number', min: 1 },
      description: '最大值',
      defaultValue: 100,
    },
    min: {
      control: { type: 'number', min: 0 },
      description: '最小值',
      defaultValue: 0,
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'danger'],
      description: '进度条样式变体',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '进度条尺寸',
      defaultValue: 'md',
    },
    type: {
      control: 'radio',
      options: ['line', 'circle'],
      description: '进度条类型：线性或环形',
      defaultValue: 'line',
    },
    showText: {
      control: 'boolean',
      description: '是否显示进度条文本',
      defaultValue: true,
    },
    striped: {
      control: 'boolean',
      description: '是否展示条纹效果',
      defaultValue: false,
    },
    animated: {
      control: 'boolean',
      description: '是否展示动画效果',
      defaultValue: false,
    },
    indeterminate: {
      control: 'boolean',
      description: '是否显示为不确定状态的进度条（加载中状态）',
      defaultValue: false,
    },
    color: {
      control: 'color',
      description: '进度条颜色',
    },
    trackColor: {
      control: 'color',
      description: '进度条轨道颜色',
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: '环形进度条的线宽度',
      defaultValue: 6,
      if: { arg: 'type', eq: 'circle' },
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
type Story = StoryObj<typeof VKProgress>

// 基础进度条
export const Default: Story = {
  render: (args) => ({
    components: { VKProgress },
    setup() {
      return { args }
    },
    template: `
      <VKProgress v-bind="args" />
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">默认</p>
          <VKProgress :value="50" variant="default" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">成功</p>
          <VKProgress :value="50" variant="success" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">信息</p>
          <VKProgress :value="50" variant="info" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">警告</p>
          <VKProgress :value="50" variant="warning" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">危险</p>
          <VKProgress :value="50" variant="danger" />
        </div>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">超小 (xs)</p>
          <VKProgress :value="50" size="xs" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">小 (sm)</p>
          <VKProgress :value="50" size="sm" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">中 (md)</p>
          <VKProgress :value="50" size="md" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">大 (lg)</p>
          <VKProgress :value="50" size="lg" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">超大 (xl)</p>
          <VKProgress :value="50" size="xl" />
        </div>
      </div>
    `,
  }),
}

// 条纹和动画效果
export const StripedAndAnimated: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">基础进度条</p>
          <VKProgress :value="70" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">条纹效果</p>
          <VKProgress :value="70" striped />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">条纹动画效果</p>
          <VKProgress :value="70" striped animated />
        </div>
      </div>
    `,
  }),
}

// 不确定状态
export const Indeterminate: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-sm font-medium mb-2">线性不确定状态</p>
          <VKProgress indeterminate />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">环形不确定状态</p>
          <VKProgress type="circle" indeterminate />
        </div>
      </div>
    `,
  }),
}

// 环形进度条
export const CircularProgress: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-8">
        <div class="flex flex-wrap gap-8">
          <div>
            <p class="text-sm font-medium mb-2">默认</p>
            <VKProgress :value="75" type="circle" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">成功</p>
            <VKProgress :value="75" type="circle" variant="success" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">不同线宽</p>
            <VKProgress :value="75" type="circle" :strokeWidth="12" />
          </div>
        </div>
        
        <div class="flex flex-wrap gap-8">
          <div>
            <p class="text-sm font-medium mb-2">超小 (xs)</p>
            <VKProgress :value="75" type="circle" size="xs" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">小 (sm)</p>
            <VKProgress :value="75" type="circle" size="sm" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">中 (md)</p>
            <VKProgress :value="75" type="circle" size="md" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">大 (lg)</p>
            <VKProgress :value="75" type="circle" size="lg" />
          </div>
          <div>
            <p class="text-sm font-medium mb-2">超大 (xl)</p>
            <VKProgress :value="75" type="circle" size="xl" />
          </div>
        </div>
      </div>
    `,
  }),
}

// 自定义颜色
export const CustomColors: Story = {
  render: () => ({
    components: { VKProgress },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">自定义颜色</p>
          <VKProgress :value="65" color="#8B5CF6" trackColor="#EDE9FE" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">自定义环形进度条颜色</p>
          <VKProgress :value="65" type="circle" color="#8B5CF6" trackColor="#EDE9FE" />
        </div>
      </div>
    `,
  }),
}

// 自定义文本
export const CustomText: Story = {
  render: () => ({
    components: { VKProgress },
    setup() {
      const formatText = (percent) => {
        return `完成度: ${percent}%`
      }

      return { formatText }
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">使用format属性</p>
          <VKProgress :value="80" :format="formatText" />
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">使用slot自定义文本</p>
          <VKProgress :value="80">
            <template #text="{ percent }">
              {{ percent }} 分 / 100 分
            </template>
          </VKProgress>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">环形进度条自定义文本</p>
          <VKProgress :value="80" type="circle">
            <template #text="{ percent }">
              <div class="text-center">
                <div class="text-xl font-bold">{{ percent }}</div>
                <div class="text-xs text-gray-500">完成</div>
              </div>
            </template>
          </VKProgress>
        </div>
      </div>
    `,
  }),
}

// 动态进度
export const DynamicProgress: Story = {
  render: () => ({
    components: { VKProgress },
    setup() {
      const progress = ref(0)
      const isPaused = ref(false)

      let interval = null

      const startProgress = () => {
        if (interval) clearInterval(interval)
        isPaused.value = false

        interval = setInterval(() => {
          if (!isPaused.value) {
            if (progress.value < 100) {
              progress.value += 1
            } else {
              clearInterval(interval)
            }
          }
        }, 100)
      }

      const resetProgress = () => {
        progress.value = 0
        if (interval) clearInterval(interval)
      }

      const togglePause = () => {
        isPaused.value = !isPaused.value
      }

      // 组件卸载时清除interval
      watch(
        () => progress.value,
        (newVal) => {
          if (newVal >= 100 && interval) {
            clearInterval(interval)
          }
        },
      )

      return { progress, isPaused, startProgress, resetProgress, togglePause }
    },
    template: `
      <div class="space-y-6">
        <div>
          <VKProgress :value="progress" />
        </div>
        
        <div class="space-x-2">
          <button 
            @click="startProgress" 
            class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            开始
          </button>
          
          <button 
            @click="togglePause" 
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            {{ isPaused ? '继续' : '暂停' }}
          </button>
          
          <button 
            @click="resetProgress" 
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            重置
          </button>
        </div>
        
        <div>
          <p class="text-sm font-medium">当前进度: {{ progress }}%</p>
        </div>
      </div>
    `,
  }),
}
