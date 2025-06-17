import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Drawer from './index.vue'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Drawer },
    template: '<Drawer />',
  }),
}

export const WithCustomTitle: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <div>
        <Drawer>
          <template #default>
            <h2 class="text-xl font-bold mb-4">自定义标题</h2>
            <p class="mb-4">这是一个自定义内容的示例。</p>
          </template>
        </Drawer>
      </div>
    `,
  }),
}
