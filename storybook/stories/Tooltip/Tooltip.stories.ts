import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tooltip from './Tooltip.vue'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tooltip },
    template: '<Tooltip />',
  }),
}

export const CustomContent: Story = {
  render: () => ({
    components: { Tooltip },
    template: `
      <div style="padding: 2rem;">
        <Tooltip>
          <template #default>
            <button class="trigger-button">
              自定义触发器
            </button>
          </template>
          <template #content>
            <div>
              <h3 style="font-weight: bold; margin-bottom: 0.5rem;">自定义提示内容</h3>
              <p>这里可以放置更复杂的内容</p>
            </div>
          </template>
        </Tooltip>
      </div>
    `,
  }),
}

export const WithCustomDelay: Story = {
  render: () => ({
    components: { Tooltip },
    template: '<Tooltip :openDelay="500" :closeDelay="300" />',
  }),
}
