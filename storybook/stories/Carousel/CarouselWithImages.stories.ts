import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Carousel } from '@versakit/vue'

const meta = {
  title: 'Components/Carousel/Examples',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

// 图片轮播
export const ImageCarousel: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      const images = [
        'https://picsum.photos/id/1018/800/400',
        'https://picsum.photos/id/1015/800/400',
        'https://picsum.photos/id/1019/800/400',
        'https://picsum.photos/id/1016/800/400',
      ]

      return { args, images }
    },
    template: `
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(image, index) in images" :key="index" class="w-full h-full">
            <img :src="image" class="w-full h-full object-cover" :alt="'Image ' + (index + 1)" />
          </div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    interval: 5000,
    effect: 'fade',
  },
}

// 卡片式轮播
export const CardCarousel: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() {
      const cards = [
        {
          title: '产品1',
          description: '这是产品1的描述信息',
          color: 'bg-blue-100',
        },
        {
          title: '产品2',
          description: '这是产品2的描述信息',
          color: 'bg-green-100',
        },
        {
          title: '产品3',
          description: '这是产品3的描述信息',
          color: 'bg-yellow-100',
        },
        {
          title: '产品4',
          description: '这是产品4的描述信息',
          color: 'bg-purple-100',
        },
      ]

      return { args, cards }
    },
    template: `
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(card, index) in cards" :key="index" class="w-full h-full p-4">
            <div :class="['w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center p-8', card.color]">
              <h2 class="text-2xl font-bold mb-4">{{ card.title }}</h2>
              <p class="text-lg">{{ card.description }}</p>
            </div>
          </div>
        </Carousel>
      </div>
    `,
  }),
  args: {
    autoplay: true,
    interval: 4000,
  },
}
