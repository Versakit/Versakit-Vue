import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Popover from './Popover.vue'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover },
    template: '<Popover />',
  }),
}

export const CustomContent: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div style="padding: 2rem;">
        <Popover>
          <template #trigger>
            <button class="trigger-button">
              自定义触发器
            </button>
          </template>
          <template #content>
            <div>
              <h2 class="popover-title">自定义 Popover</h2>
              <div class="popover-content">
                <p>这是一个自定义内容的示例</p>
                <ul style="list-style-type: disc; margin: 0.5rem 0 0.5rem 1.5rem;">
                  <li>支持复杂的 HTML 结构</li>
                  <li>可以添加列表</li>
                  <li>甚至可以添加表单元素</li>
                </ul>
                <div style="margin-top: 1rem;">
                  <input 
                    type="text" 
                    placeholder="输入些内容..."
                    style="border: 1px solid #e5e7eb; padding: 0.25rem 0.5rem; border-radius: 0.25rem; width: 100%;"
                  >
                </div>
              </div>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
}

export const WithCustomPosition: Story = {
  render: () => ({
    components: { Popover },
    template: `
      <div style="padding: 2rem;">
        <Popover>
          <template #default>
            <div class="popover" style="top: 100px; left: 200px;">
              <h2 class="popover-title">自定义位置</h2>
              <p class="popover-content">这个 Popover 使用了自定义位置</p>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
}
