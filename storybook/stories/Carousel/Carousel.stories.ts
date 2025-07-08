import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Carousel } from '@versakit/vue'
import { ref } from 'vue'

// 基础Meta配置
const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    autoplay: {
      control: 'boolean',
      description: '是否自动播放',
      defaultValue: false,
    },
    interval: {
      control: 'number',
      description: '自动播放间隔(毫秒)',
      defaultValue: 3000,
    },
    activeIndex: {
      control: 'number',
      description: '初始激活项索引',
      defaultValue: 0,
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: '轮播方向',
      defaultValue: 'horizontal',
    },
    loop: {
      control: 'boolean',
      description: '是否循环播放',
      defaultValue: true,
    },
    indicators: {
      control: 'boolean',
      description: '是否显示指示器',
      defaultValue: true,
    },
    controls: {
      control: 'boolean',
      description: '是否显示控制按钮',
      defaultValue: true,
    },
    effect: {
      control: { type: 'select' },
      options: ['slide', 'fade'],
      description: '过渡效果',
      defaultValue: 'slide',
    },
    touchable: {
      control: 'boolean',
      description: '是否可触摸滑动',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

// 基本用法
export const Basic: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          <div class="w-full h-full bg-purple-500 flex items-center justify-center text-white text-2xl">幻灯片 4</div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    interval: 3000,
    activeIndex: 0,
    direction: 'horizontal',
    loop: true,
    indicators: true,
    controls: true,
    effect: 'slide',
    touchable: true,
  },
}

// 垂直方向
export const Vertical: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    interval: 3000,
    direction: 'vertical',
    effect: 'slide',
  },
}

// 渐变效果
export const FadeEffect: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    interval: 3000,
    effect: 'fade',
  },
}

// 自定义控制按钮
export const CustomControls: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          
          <template #prev-icon>
            <span class="text-2xl font-bold">←</span>
          </template>
          
          <template #next-icon>
            <span class="text-2xl font-bold">→</span>
          </template>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: false,
  },
}

// 无控制按钮与指示器
export const NoControlsIndicators: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    controls: false,
    indicators: false,
    autoplay: true,
  },
}

// 自定义样式
export const CustomStyling: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args }
    },
    template: `
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 3</div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    pt: {
      root: 'rounded-lg shadow-xl',
      prevButton: 'bg-gray-900/80 text-white',
      nextButton: 'bg-gray-900/80 text-white',
      indicator: 'bg-gray-400 w-3 h-3',
      activeIndicator: 'bg-white w-6 h-3',
    },
  },
}

// 程序化控制示例
export const ProgrammaticControl: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      const carouselRef = ref(null)

      const goToNext = () => {
        carouselRef.value?.next()
      }

      const goToPrev = () => {
        carouselRef.value?.prev()
      }

      const goToSlide = (index) => {
        carouselRef.value?.goToSlide(index)
      }

      return { args, carouselRef, goToNext, goToPrev, goToSlide }
    },
    template: `
      <div>
        <div class="h-80 mb-4">
          <Carousel v-bind="args" ref="carouselRef">
            <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
            <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
            <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          </Carousel>
        </div>
        
        <div class="flex space-x-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToPrev">上一项</button>
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToNext">下一项</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(0)">1</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(1)">2</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(2)">3</button>
        </div>
      </div>
    `,
  }),
  args: {
    autoplay: false,
    controls: false,
  },
}
