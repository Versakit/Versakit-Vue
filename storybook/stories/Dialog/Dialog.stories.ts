import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Dialog from './Dialog.vue'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    // 如果需要添加 props 控制，可以在这里定义
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog },
    template: '<Dialog />',
  }),
}

export const WithCustomContent: Story = {
  render: () => ({
    components: { Dialog },
    template: `
      <div>
        <Dialog />
        <p class="mt-4">点击上方按钮打开对话框</p>
      </div>
    `,
  }),
}
